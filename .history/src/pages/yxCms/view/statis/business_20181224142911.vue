<template>
  <div class="synthesis-wrapper">
    <header class="header">
      <span class="title header-item h-left">业务数据查询</span>
      <span class="btn-excel header-item h-right" @click="downExcel">导出excel</span>
    </header>
    <business-select @search="search"></business-select>
    <p style="text-align: center; padding-top: 16px" v-if="rows.length===0">暂无数据</p>
    <business-content class="syn-content" :rows="rows" :cols="cols" id="rebateSetTable" :options="options"></business-content>
    <el-pagination class="footer" v-show="total>0"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="display"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import businessSelect from './business/businessSelect'
import businessContent from './business/businessContent'
import { fetchBusin, downBusin } from 'oa/api/statis/bus'
import { mapMutations } from 'vuex'
const OK_CODE = '200'
export default {
  components: {
    businessSelect, businessContent
  },
  data () {
    return {
      cols: [],
      rows: [],
      total: 10,
      display: 12,
      currentPage: 1,
      options: {}
    }
  },
  methods: {
    search(item) {
      this.options = item
      this._fetchBusin()
    },
    _fetchBusin() {
      let loading = this.loading()
      fetchBusin(this.options, this.currentPage, this.display).then(res => {
        loading.close()
        res = res.data
        if (res.state === OK_CODE) {
          this.rows = res.data.rows
          this.cols = res.data.cols
          this.total = res.data.total
        } else {
          this.MessageError(res.message)
        }
      }).catch(() => {
        loading.close()
        this.MessageError()
      })
    },
    // 点击导出
    downExcel() {
      let loading = this.loading()
      // downBusin(this.options, this.currentPage, this.display, '1').then(res => {
      downBusin(this.options, 1, this.total, '1').then(res => {
        loading.close()
        let fileName = '业务数据统计.xls'
       //这里res.data是返回的blob对象    
        var blob = new Blob([res.data],  { type: 'application/x-xls' });  
      //var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
    　　var downloadElement = document.createElement('a');
    　　var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　downloadElement.href = href;
    　　downloadElement.download = fileName; //下载后文件名
    　　document.body.appendChild(downloadElement);
    　　downloadElement.click(); //点击下载
    　　document.body.removeChild(downloadElement); //下载完成移除元素
    　　window.URL.revokeObjectURL(href); //释放掉blob对象 
        // let blob = new Blob([res.data], { type: 'application/x-xls' })
        //   if (window.navigator.msSaveOrOpenBlob) {
        //     navigator.msSaveBlob(blob, fileName);
        //   } else {
        //     var link = document.createElement('a');
        //     link.href = window.URL.createObjectURL(blob);
        //     link.download = fileName;
        //     link.click();
        //     window.URL.revokeObjectURL(link.href);
        // }
      }).catch(() => {
        loading.close()
      })
    },
    handleCurrentChange() {
      this._fetchBusin()
    },
    ...mapMutations({
      '_setIndex' : 'SET_INDEX'
    })
  },
  created () {
    // 设置索引
    this._setIndex('1')
  }
}
</script>


<style lang="stylus" scoped>
@import '~oa/style/variable'
.synthesis-wrapper
  padding 0 11px
  box-sizing border-box
  width 100%
  height 100%
  .header
    border-bottom 1px solid $color-theme
    padding-bottom 5px
    height 25px
    .header-item
      display inline-block
      font-size $font-size-large
    .h-left
      float left
    .h-right
      float right 
      padding 5px
      border 1px solid $color-theme
      border-radius 3px
      color $color-theme
      cursor pointer
    .title
      color #555555
      font-weight bold
  .syn-content
    margin-top 10px
  .footer
    text-align right 
</style>
