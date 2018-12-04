<template>
    <div class="newsCentral-wrapper">
      <el-table class="newstable" :data="tableData"  style="width: 100%">
        <el-table-column prop="ROW_ID" label="序号">
          <!-- <template slot-scope="scope">
            <img :src="scope.row.cropImg" alt="picture">
          </template> -->
        </el-table-column>
        <!-- <el-table-column prop="xy" label="学院"></el-table-column>
        <el-table-column prop="zy" label="专业"></el-table-column> -->
        <el-table-column prop="xymc" label="学院名称"></el-table-column>
        <el-table-column prop="zymc" label="专业名称" ></el-table-column>
        <el-table-column prop="bj" label="班级" ></el-table-column>
        <el-table-column prop="ZRS" label="总人数" ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="modifynews(scope.row)" type="text" size="small">确认名单导出</el-button>
            <!-- <el-button @click="sortNum(scope.row)" type="text" size="small">排序</el-button> -->
            <el-button @click="deletenew(scope.row)" type="text" size="small">汇总名单导出</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
//import { deletenews, sortNumber } from 'oa/api/statis/news'
import { mapMutations } from 'vuex'
  const OK_CODE = '200'
  export default {
    props: {
      tableData: {
        type: Array,
        default: function () {
          return {
            eaaId: '',
            sort: '',
            bulletinLogicId: ''
          }
        }
      }
    },
    data() {
      return {
        modifypage: '/newsPublicity/addedNews'
      }
    },
    methods: {
      // 排序值解释弹框
      renderProductId(h, {column}) {
        return h('span', [
            h('span', column.label),
            h('i',
                {
                  class: 'el-icon-question',
                  style: 'margin-left: 5px; cursor: pointer;',
                  on: {
                      click: this.headerClick
                  }
            }),
        ])
      },
      headerClick () {
        const h = this.$createElement;
        this.$msgbox({
          title: '排序规则',
          message: h('p', null, [
            h('p', null, '1 排序值只能为正整数1-99 '),
            h('p', null, '2 数值越大 越优先显示'),
            h('p', null, '3 排序值不能重复设置')
          ]),
          // showCancelButton: true,
          confirmButtonText: '确定',
          center: true
        })
      },
      // 名单导出
      modifynews(row) {
        console.log(row);
        this._setId(row.id)
      },
      ...mapMutations({
        '_setId': 'SET_NEWS_ID' 
      }),
      // 排序按钮
      sortNum(row){
        console.info(row)
        this.eaaId = row.eaaId,
        this.sort = row.sort,
        this.bulletinLogicId = row.id
        this.$prompt('排序值', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[1-9][0-9]?$/,
          inputErrorMessage: '排序值为1 ~ 99'
        }).then(({ value}) => {
          console.info(value)
          let sortvale = {
            eaaId: this.eaaId,
            sort: value,
            bulletinLogicId: this.bulletinLogicId
          }
          sortNumber(sortvale).then(res => {
            if(res.data.state = OK_CODE){
              this.MessageSuccess(res.data.message)
              this.$emit('update')
            } else {
              this.msg = res.message
            }
          }).catch(_ => {
            // 捕获接口异常
            this.MessageError()    
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
    },
  }
</script>
<style lang="stylus" scoped>
.newstable
  border 1px solid #F1F3F7
  border-radius 6px
  background-color #F1F3F7
.el-table .table-head-th
  background #F1F3F7 !important
img 
  width 58px
  height 58px
</style>
