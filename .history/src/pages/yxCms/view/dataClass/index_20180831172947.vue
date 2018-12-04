<template>
  <div name="newsPublicity">
    <news-header :page="page" :headerTitle='headerTitle' @accept="accept"></news-header>
    <p>数据同步目前采用手动与自动方式，自动将会每N小时自动更新一次数据；手动将会实时更新一次数据。</p>
    <news-central class="newscentral" :tableData='tableData' @update="update"></news-central>
    <el-row>
      <el-col :span="6" :offset="18">
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
</template>

<script>
import newsHeader from './header'
import newsCentral from './newsCentral'
// import { fetchnews } from 'oa/api/statis/news'
import { fetchcktbsj } from 'oa/api/dataAsc/dataAsc'
const OK_CODE = '40001'
export default {
    components: {
        newsHeader, newsCentral
    },
    data() {
      return {
        page: '/newsPublicity/addedNews',
        headerTitle: {
          title: '班级数据导出',
          button: '班级数据导出',
          yxTitle: '新闻列表',
          // yinxin:'迎新',
          titlename: ''
        },
        tableData: [],
        currentPage: 1,
        pageSize:12,
        totalNum: 0
      }
    },
    methods: {
      // 分页
      accept(){
        console.log("aaaaa");
        this.currentPage = 1
        this.pageSize = 12
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
     
      // /获取新闻列表数据
      _fetchcktbsj () { 
        let newslist = {
          page: this.currentPage,
          pagesize: this.pageSize
        }
        let loading = this.loading()
        fetchcktbsj(newslist).then(res => {
          loading.close()
          res = res.data
          console.log(res)
          if (res.code === OK_CODE) {
            console.log(res)
            this.tableData = res.content.rows
            console.log(res.content.total);
            console.log(Math.ceil(res.content.total/5));//组件自动分页。无需自己计算总页数
            this.totalNum = res.content.total
          } else {
              this.MessageError(res.data.message)
          }
        }).catch(_ => {
          loading.close()
          this.MessageError('链接数据库失败')
        })
      },
      // 子组件用刷新
      update() {
        this._fetchcktbsj()
      }
    },
    created () {
      this._fetchcktbsj ()
    }
}
</script>
<style lang="stylus" scoped>
p
  margin-top:24px
  color:#555555
div[name = 'newsPublicity']
  width 98%
  margin 0 1%
.newscentral
  margin-top 24px
</style>
