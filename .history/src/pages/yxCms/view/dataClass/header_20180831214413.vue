<template>
  <div class="header-wrap">
    <p>{{headerTitle.title}}</p>
    <el-row>
      
    </el-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import {fetchtbsj,fetchcktbsj} from 'oa/api/dataAsc/dataAsc.js'
export default {
  props: {
    page:{
      type: String,
      default: function () {
        return {
          newpage: 'addedNews'
        }
      }
    },
    headerTitle: {
      type: Object,
      default: function () {
        return {
          // title: '班级数据导出',
          // button: '班级数据导出'
        }
      }
    }
  },
  data(){
    return {
      // loadParams: {
      //   page: 1,
      //   pagesize: 10
      // },
      tableData:[],
      currentPage: 1,
      pageSize:12,
      totalNum: 0
    }
  },
  // activated(){
  //   let t = this.loadParams.page*this.loadParams.pagesize
  //   this.fetchcktbsj({page: 1,pagesize: t})
  // },
  methods: {
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // // 分页跳转
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    //   this.currentPage = val
    //   this._fetchcktbsj()
    // },
    // _fetchcktbsj () {
    //   let newslist = {
    //     page: this.currentPage,
    //     pagesize: this.pageSize
    //   }
    //   let loading = this.loading()
    //   console.log(newslist);
    //   fetchcktbsj(newslist).then(res => {
    //     loading.close()
    //     res = res.data
    //     console.log(res)
    //     if (res.code === '40001') {
    //       console.log(res)
    //       // this.tableData = res.content.rows
    //       this.tableData = res.content.rows
    //       console.log(this.tableData);
    //       console.log(this);
    //       $emit('accept',this.tableData)
    //       // console.log(res.content.total);
    //       // console.log(Math.ceil(res.content.total/5));//组件自动分页。无需自己计算总页数
    //       this.totalNum = res.content.total
    //     } else {
    //         this.MessageError(res.data.message)
    //     }
    //   }).catch(_ => {
    //     loading.close()
    //     this.MessageError("ddd")
    //   })
    // },
    toPage() {
      this.$confirm('系统正在同步数据，您可以关闭页面。同步成功后将自动显示同步完成时间。请勿短时间内连续操作数据同步。', '提示', {
        confirmButtonText: '确定',
        //cancelButtonText: false,
        type: 'warning'
      }).then(() => {
        console.log('test');
        let loading = this.loading()
        fetchtbsj().then(res => {
          loading.close()
          res = res.data
          if(res.code == 40001){
            console.log(res);
            // this._fetchcktbsj()
            // if(res.content){
              // this.tableData = res.content.rows
              this.$emit('accept')
            // }
          }
        })
      }).catch(() => {     
        //loading.close()
        //this.MessageError(res.message)
      })
      // fetchcktbsj()
      // this._setId('')
      // this.$router.push({path: this.page})
      // this.$store.commit('newsState',1)
      // console.info(+this.page)
      // fetchtbsj()
    },
    toPage1() {
      this._setId('')
      this.$router.push({path: this.page})
      // console.info(+this.page)
    },
    ...mapMutations({
      '_setId': 'SET_NEWS_ID' 
    }),
  }
}
</script>
<style lang="stylus" scoped>
.header-wrap
  width 100%
  height 49px
  line-height 50px
  font-size 14px
  border-bottom 1px solid #2184C5
  display flex
  justify-content space-between
  p
    color #555
    font-weight bold
    font-family MicrosoftYaHei-Bold
  .button
    height 26px
    // width 82px
    line-height 2px
    color #2184C5
    background-color transparent
    font-family FZLTZCHK--GBK1-0
    font-weight Regular
    &:hover
      color: #fff
      background-color #2184C5
</style>
