<template>
  <transition name="insurance">
    <div class="register-wrapper" v-if="isShow">
      <!-- <my-header :title="title" @back="back"></my-header> -->
      <user-info class="margin" :userInfo="userInfo" v-if="!noData"></user-info>
      <AllUser-info :AllUserInfo="AllUserInfo" class="margin" v-if="!noData" v-show="isCanel"></AllUser-info>
      <btn-wrapper class="btn-wrapper" @dispose="dispose" :text="text" :btnstate="btnstate" v-if="!noData" v-show="btnstate===0||btnstate===1||btnstate===3"></btn-wrapper>
      <mt-field  class="margin" placeholder="请输入撤销原因" type="textarea" rows="8" v-model="introduction" v-if="!noData"  v-show="!isCanel" :attr="{maxlength: 10}"></mt-field>
      <marker-icon v-show="item.state === 1"></marker-icon>
      <no-data v-if="noData"></no-data>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import myHeader from 'teacher/component/header'
import userInfo from 'teacher/component/userInfo'
import btnWrapper from 'teacher/component/btnWrapper'
import AllUserInfo from 'teacher/component/AllUserInfo'
import NoData from 'teacher/component/NoData'
import markerIcon from 'teacher/component/marker'
import { MessageBox, Indicator } from 'mint-ui'
import { fetchInsurance, insuranceConfirm, insuranceCancel } from 'teacher/api/teacher'
import { User, UserInfo} from 'teacher/utils/setData'
const SUCCES_OK = '200'
export default {
  components: {
    myHeader, userInfo, btnWrapper, AllUserInfo,NoData, markerIcon
  },
  data () {
    return {
      title: '保险购买',
      content: {
        desc: []
      },
      userInfo: {},
      AllUserInfo: {},
      btnstate: 1, // 0=>办理，1=>撤销， 2=>不显示 3 =>超出范围 
      isCanel: true,
      item: {}, // 所有数据
      introduction: '',
      canelBtn: false,
      isShow: false,
      noData: false // 没有数据内容显示的无数据页面
    }
  },
  methods: {
    back() {
      this.$router.push({path: '/'})
    },
    // 点击按钮
    dispose() {
      // 只有在有权限的时候才可以点击
      if (this.btnstate === 0) {
        MessageBox({
          title: '您是否确认办理',
          message: '一旦确认无法更改',
          showConfirmButton: true,
          confirmButtonClass: 'yxxt-btn'
        }).then(actions => {
          this._insuranceConfirm()
        })
      } else if (this.btnstate === 1) {
        // 点击撤销
        this.isCanel = false
        if (this.canelBtn) {
          this._insuranceCancel()
        }
        this.canelBtn = true
      }
    },
    // 获取保险购买学生信息
    _fetchInsurance() {
      // 如果没有值跳转到首页
      if (this.userid === '' && this.type === '' ) {
        this.$router.push({path: '/'})
        return
      }
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.isShow = false
      fetchInsurance(this.userid, this.type, this.code, this.states).then(res => {
        Indicator.close()
        this.isShow = true
        res = res.data
        if (res.state === SUCCES_OK) {
          this.userInfo = new User(res.data)
          this.AllUserInfo = new UserInfo(res.data)
          this.content.desc = res.data.desc
          this.item = res.data
          this.isCanel = true
          this.btnstate = res.data.btnstate
          this.noData = false
        } else {
          this.prop(res.message)
          this.noData = true
        }
      }).catch(_ => {
        this.noData = true
        Indicator.close()
        this.prop('当前页面暂无数据')
      })
    },
    // 确认办理
    _insuranceConfirm() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      insuranceConfirm(this.item.userId).then(res => {
        Indicator.close()
        res = res.data
        if (res.state === SUCCES_OK) {
          this.prop('办理成功')
          this._fetchInsurance()
          setTimeout(() => {
            this.$router.go(-1)
          },4000)
        }else{
          this.prop(res.message)
        }
      }).catch(e => {
        Indicator.close()
        console.log(e)
        this.prop('连接数据库失败')
      })
    },
    _insuranceCancel() {
      // 当输入为空的时候
      if (this.introduction === '') {
        this.prop('请输入撤销原因')
        return
      }
      // 撤销
      insuranceCancel(this.item.userId, this.introduction).then(res => {
        this.canelBtn = false
        res = res.data
        if (res.state === SUCCES_OK) {
          this._fetchInsurance()
        }else{
          this.prop(res.message)
        }
      }).catch(_ => {
        this.prop('连接数据库失败')
      })
    }
  },
  created () {
    this._fetchInsurance()
  },
  computed: {
    text() {
      const text = ['确认办理', '撤销', ' ', '已超出您的权限范围，无法操作']
      if (!this.isCanel) {
        return '确认'
      }
      return text[this.btnstate]
    },
    ...mapGetters([
      'userid', 'code', 'type', 'states'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.register-enter-active, .register-leave-active
  transition all .3s
.register-enter, .register-leave-to
  transform translate3d(100%, 0, 0)
.register-wrapper
  position fixed
  left 0
  top 0
  bottom 0
  right 0
  overflow-y auto
  background $color-background-d
  padding-bottom 75px
  .margin
    margin-top 5px
  .btn-wrapper
    position fixed
    bottom 0
</style>
