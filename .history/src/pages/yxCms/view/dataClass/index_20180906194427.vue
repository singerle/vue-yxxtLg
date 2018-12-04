<template>
  <div name="newsPublicity">
    <!-- <news-header :page="page" :headerTitle='headerTitle' @accept="accept"></news-header> -->
    <news-header :page="page" :headerTitle='headerTitle'></news-header>
    <div class="synSelect">
      <el-row type="flex">
        <el-col :span="4" class="yxxt-col" v-if="options.school">
          <label>学院</label>
          <el-select v-model="option.school" placeholder="请选择" class="yxxt-select" size="mini" @change="changeSchool">
            <el-option v-for="item in options.school" :key="item.id" :label="item.name" :value="item.id" class="yxxt-option">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4" class="yxxt-col" v-if="options.majon">
          <label>专业</label>
          <el-select v-model="option.majon" placeholder="请选择" class="yxxt-select" size="mini" @change="changeMajon">
            <el-option v-for="item in options.majon" :key="item.id" :label="item.name" :value="item.id" class="yxxt-option">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4" class="yxxt-col">
          <el-input type="text" size="mini" placeholder="请输入班级" v-model="bj"></el-input>
        </el-col>
        <el-col :span="4" class="yxxt-col">
          <span class="search" @click="search">搜索</span>
        </el-col>
      </el-row>
    </div>
    <news-central class="newscentral" :tableData='tableData' @update="update"></news-central>
    <div style="float:right,backgroundColor:red,height:'10px'">
      <el-row class="paginationStyle" v-if="yincang" style="float:left">
        <el-col :span="6" :offset="18" >
          <div class="grid-content bg-purple">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
              :current-page.sync="currentPage" :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="totalNum">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {fetchbjlb} from 'oa/api/dataClass/getData'
import {fetchbjsj} from 'oa/api/dataClass/getData'

import { fetchCondition, fetchMajon, fetchClass, fetchYear} from 'oa/api/statis/synthesis'
import newsHeader from './header'
import newsCentral from './newsCentral'
import { fetchcktbsj } from 'oa/api/dataAsc/dataAsc'
  import { mapMutations } from 'vuex'
  const OK_CODE = '200'
  export default {
    components: {
        newsHeader, newsCentral
    },
    data() {
      return {
        options: {},
        option:{
          majon: '', // 专业
          school: '', // 院系
          // classes: '', // 班级
          // soucre: ''
        },
        page: '/newsPublicity/addedNews',
        headerTitle: {
          title: '班级数据导出',
          button: '导出excel',
          yxTitle: '新闻列表',
          // yinxin:'迎新',
          titlename: ''
        },
        tableData: [],
        currentPage: 1,
        pageSize:11,
        totalNum: 0,
        bj:'',
        yincang:false
      }
    },
    methods: {
     // 分页
      accept(){
        console.log("aaaaa");
        this.currentPage = 1
        this.pageSize = 11
        this._fetchcktbsj()
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      // 分页跳转
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val
        this._fetchcktbsj()
      },
     
      // // /获取新闻列表数据
      _fetchcktbsj () { 
        let newslist = {
          page: this.currentPage,
          pagesize: this.pageSize
        }
        let loading = this.loading()
        fetchbjlb(newslist).then(res => {
          loading.close()
          res = res.data
          console.log(res)
          if (res.code === '40001') {
            // console.log(res)
            this.yincang = true
            this.tableData = res.content.rows
            // console.log(res.content.total);
            // console.log(Math.ceil(res.content.total/5));//组件自动分页。无需自己计算总页数
            this.totalNum = res.content.total
          } else {
              this.MessageError(res.data.message)
              this.yincang = false
          }
        }).catch(_ => {
          loading.close()
          this.MessageError('链接数据库失败')
        })
      },
      // 子组件用刷新
      update() {
         this._fetchcktbsj()
      },
      // 获取综合统计头部查询条件
      _fetchCondition() {
        // let loading = this.loading() // 打开加载的中...
        fetchCondition().then(res => {
          // loading.close()
          res = res.data
          if (res.state === OK_CODE) {
            this.options = res.data
            this.option.majon = this.options.majon.length > 0 ? this.options.majon[0].id : ''
            this.option.school =this.options.school.length > 0 ? this.options.school[0].id : ''
          }
        }).catch(_ => {
          // loading.close()
          this.MessageError()
        })
      },
      // 选中值过后
      search() {
        console.log(this.option.majon,this.option.school)

        var page = 1
        var pagesize = 11
        var xy = this.option.school
        var zy = this.option.majon
        var bj = this.bj
        if(xy==0){
          xy = ''
        }
        if(zy==0){
          zy = ''
        }
        fetchbjlb({xy,zy,bj,page,pagesize}).then((res) => {
          res = res.data
          if (res.code === '40001') {
            console.log(res.content.rows)
            this.tableData = res.content.rows
            this.totalNum = res.content.total
            this.yincang = true
          }else{
            this.tableData = []
            this.yincang = false
          }
        })
        // this.$emit('change', this.option)
      },
      // 改变院校
      changeSchool() {
        // 获取所有专业和班级
        // let loading = this.loading()
        fetchMajon(this.option.school).then(res => {
          // loading.close()
          res = res.data
          if (res.state === OK_CODE) {
            this.options.majon = res.data.majon // 重置专业
            this.options.class = res.data.class // 重置班级
            this.option.majon = this.options.majon.length > 0 ? this.options.majon[0].id : ''
            this.option.classes = this.options.class.length > 0 ? this.options.class[0].id :''
          }
        }).catch(_ => {
          // loading.close()
          this.MessageError()
        })
      },
      // 改变专业
      changeMajon() {
        // 改变专业
        // let loading = this.loading()
        fetchClass(this.option.school ,this.option.majon).then(res => {
          // loading.close()
          res = res.data
          if (res.state === OK_CODE) {
            this.options.class = res.data.class // 重置班级
            this.option.classes = this.options.class.length > 0 ? this.options.class[0].id : ''
          }
        }).catch(_ => {
          // loading.close()
          this.MessageError()
        })
      },

    },
    created () {
      // this._fetchcktbsj ()
      // this._setIndex('0')
      this._fetchcktbsj()
      this.search()
      this._fetchCondition()
    },
      
      // ...mapMutations({
      //   '_setIndex': 'SET_INDEX'
      // })
    
    activated () {
      // this._setIndex('0')
      this.search()
      this._fetchCondition()
    }
}
// import newsHeader from './header'
// import newsCentral from './newsCentral'
//  import { fetchnews } from 'oa/api/statis/news'
// import { fetchcktbsj } from 'oa/api/dataAsc/dataAsc'
// const OK_CODE = '40001'
// export default {
//     components: {
//         newsHeader, newsCentral
//     },
//     data() {
//       return {
//         page: '/newsPublicity/addedNews',
//         headerTitle: {
//           title: '班级数据导出',
//           button: '班级数据',
//           yxTitle: '新闻列表',
//           // yinxin:'迎新',
//           titlename: ''
//         },
//         tableData: [],
//         currentPage: 1,
//         pageSize:12,
//         totalNum: 0
//       }
//     },
//     methods: {
//       // 分页
//       accept(){
//         console.log("aaaaa");
//         this.currentPage = 1
//         this.pageSize = 12
//         this._fetchcktbsj()
//       },
//       handleSizeChange(val) {
//         console.log(`每页 ${val} 条`);
//       },
//       // 分页跳转
//       handleCurrentChange(val) {
//         console.log(`当前页: ${val}`);
//         this.currentPage = val
//         this._fetchcktbsj()
//       },
     
//       // /获取新闻列表数据
//       _fetchcktbsj () { 
//         let newslist = {
//           page: this.currentPage,
//           pagesize: this.pageSize
//         }
//         let loading = this.loading()
//         fetchcktbsj(newslist).then(res => {
//           loading.close()
//           res = res.data
//           console.log(res)
//           if (res.code === OK_CODE) {
//             console.log(res)
//             this.tableData = res.content.rows
//             console.log(res.content.total);
//             console.log(Math.ceil(res.content.total/5));//组件自动分页。无需自己计算总页数
//             this.totalNum = res.content.total
//           } else {
//               this.MessageError(res.data.message)
//           }
//         }).catch(_ => {
//           loading.close()
//           this.MessageError('链接数据库失败')
//         })
//       },
//       // 子组件用刷新
//       update() {
//         this._fetchcktbsj()
//       }
//     },
//     created () {
//       this._fetchcktbsj ()
//     }
// }
</script>
<style lang="stylus" scoped>
@import '~oa/style/variable'
.synSelect
    .yxxt-col
      display flex
      margin-left 10px
      margin-top 5px
      label
        width 50px
        line-height 30px
      .yxxt-select
        flex 1
        // &>>>input 
        //   height $input-heigt
        //   line-height $input-heigt
      .search
        display inline-block
        height 28px
        padding 0 15px
        box-sizing border-box
        line-height 28px
        border 1px solid $color-theme
        border-radius 3px
        color $color-theme
        cursor pointer
div[name = 'newsPublicity']
  width 98%
  margin 0 1%
.newscentral
  margin-top 24px
.paginationStyle
  width:70%
</style>
