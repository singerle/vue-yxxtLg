<template>
    <div class="home">
		<!-- <topSelect :xqList="xqList" @refresh="getHomeInfo"></topSelect> -->
    <topSelect></topSelect>
		<vHeader @Jump="Jump" :data="header" v-if="header" class="home-header"></vHeader>
		<div class="home-content">
			<vxslxObj v-for="(item,i) in sylx" :data="item" class="mb10" :key="'xslx'+i"></vxslxObj>
      <template v-if="this.sylx=='全部'">
        <!-- <hjObj class="mb10" :data="cwjf" :titleD="{name:'财务缴费',func_dq:'getXqjfqk',func_xy:'getXyjfqk'}" v-if="cwjf.length>0"></hjObj> -->
        <hjObj class="mb10" :data="hjblqk" :titleD="{name:'环节办理情况',func_dq:'getXqhjblqk',func_xy:'getXqhjblqk'}" v-if="hjblqk.length>0"></hjObj>
        <hjObj class="mb10" :data="xbbl" :titleD="{name:'新生男女比例',func_dq:'getXqnnbl',func_xy:'getXqnnbl'}" v-if="xbbl.length>0"></hjObj>
        <hjObj class="mb10" :data="wsxx" :titleD="{name:'完善信息',func_dq:'getXqjbxx',func_xy:'getXqjbxx'}" v-if="wsxx.length>0"></hjObj>
        <hjObj class="mb10" :data="bxgm" :titleD="{name:'保险购买',func_dq:'getXqbxgm',func_xy:'getXybxgm'}" v-if="bxgm.length>0"></hjObj>
        <hjObj class="mb10" :data="lstd" :titleD="{name:'绿色通道',func_dq:'getXqlstd',func_xy:'getXylstd'}" v-if="lstd.length>0"></hjObj>
        <hjObj class="mb10" :data="qsbl" :titleD="{name:'寝室办理',func_dq:'getXqssbl',func_xy:'getXyssbl'}" v-if="qsbl.length>0"></hjObj>
      </template>
		</div>
    </div>
</template>

<script type="ecmascript-6">
import topSelect from './topSelect'
import vHeader from './header'
import vxslxObj from './xslxObj'
import hjObj from './hjObj'
import { mapActions } from 'vuex'
import { getXqlb, getHomeInfo } from 'count/api/yxtj'
export default {
  name: '',
  data () {
    return {
      xqList: [],
      header: '',
      sylx: '',
      bxgm: [],
      cwjf: [],
      lstd: [],
      qsbl: [],
      xbbl: [],
      wsxx: [],
      hjblqk:[]
    }
  },
  created(){
    getXqlb().then((res) => {
      if(res.code == '40001'){
        this.xqList = res.content
        this.set_xq(this.xqList[0])
        this.getHomeInfo(this.xqList[0])
      }
    })
  },
  methods: {
    ...mapActions([
      'set_xq'
      ]),
  	Jump(){
  		this.$router.push('/region')
  	},
    getHomeInfo(xq){
      this.bxgm = []
      this.cwjf = []
      this.lstd = []
      this.qsbl = []
      this.xbbl = []
      this.wsxx = []
      this.hjblqk = []
      getHomeInfo({xq: encodeURI(xq),sylx:encodeURI('全部')}).then((res) => {
        if(res.code == '40001'){
          this.header = res.content.all
          this.sylx = res.content.sylx
          // this.xbbl = res.content.xbbl
          //财务缴费
          for(var key in res.content.cwjf){
            if(key=='wjf'){
              this.cwjf[1] = {bl: res.content.cwjf[key],key: '未缴费',color: '#68CCA0',zrs: res.content.cwjf.zrs}
            }else if(key=='yjf'){
              this.cwjf[0] = {bl: res.content.cwjf[key],key: '已缴费',color: '#80BDF6',zrs: res.content.cwjf.zrs}
            }
          }
          //保险购买
          for(var key in res.content.bxgm){
            if(key=='ybl'){
              this.bxgm[0]={bl: res.content.bxgm[key],key: '已购买',color: '#68CCA0',zrs: res.content.bxgm.zrs}
            }else if(key=='yfq'){
              this.bxgm[1]={bl: res.content.bxgm[key],key: '不购买',color: '#80BDF6',zrs: res.content.bxgm.zrs}
            }else if(key=='ysq'){
              this.bxgm[2]={bl: res.content.bxgm[key],key: '待支付',color: '#EA635D',zrs: res.content.bxgm.zrs}
            }else if(key=='zrs'){
              this.bxgm[3]={bl: res.content.bxgm[key]-res.content.bxgm.ybl-res.content.bxgm.yfq-res.content.bxgm.ysq,key: '未办理',color: '#ff7f00',zrs: res.content.bxgm.zrs}
            }
          }
          //绿色通道
          var _lstd = res.content.lstd
          for(var key in _lstd){
            if(key=='ybl'){
              this.lstd[0] = {bl: _lstd[key],key: '已申请',color: '#68CCA0',zrs: _lstd.zrs}
            }else if(key=='bbl'){
              this.lstd[1] = {bl: _lstd[key],key: '不申请',color: '#80BDF6',zrs: _lstd.zrs}
              // this.lstd.push({bl: res.content.lstd[key],key: '已放弃',color: '#80BDF6',zrs: res.content.lstd.zrs})
            // }else if(key=='ysq'){
            //   this.lstd.push({bl: res.content.lstd[key],key: '已申请',color: '#EA635D',zrs: res.content.lstd.zrs})
            // }
            }else if(key=='zrs'){
              this.lstd[2]={bl: _lstd[key]-_lstd.ybl-_lstd.bbl,key: '未办理',color: '#EA635D',zrs: _lstd.zrs}
            }
          }

          //寝室办理
          for(var key in res.content.qsbl){
            if(key=='ybl'){
              this.qsbl[0] = {bl: res.content.qsbl[key],key: '已办理',color: '#68CCA0',zrs: res.content.qsbl.zrs}
            }else if(key=='wbl'){
              this.qsbl[1] = {bl: res.content.qsbl[key],key: '未办理',color: '#80BDF6',zrs: res.content.qsbl.zrs}
            }
          }
          //男女比例
          var _xbbl = res.content.xbbl
          // console.log(res.content.xbbl)
          // this.xbbl[0]={bl:2,key:'男',color:'#95BAF3',zrs:10}
          // this.xbbl[1]={bl:8,key:'女',color:'#FFABBF',zrs:10}
          for(var i = 0;i < 2;i++){
            for(var key in res.content.xbbl[i]){
              if(key=='xb'&&res.content.xbbl[i][key]=='男'){
                this.xbbl[0] = {bl: res.content.xbbl[i]['lqrs'],key: '男',color: '#95BAF3',zrs: _xbbl[0].lqrs+_xbbl[1].lqrs}
                console.log(_xbbl)
              }else if(key=='xb'&&res.content.xbbl[i][key]=='女'){
                this.xbbl[1] = {bl: res.content.xbbl[i]['lqrs'],key: '女',color: '#FFABBF',zrs: _xbbl[0].lqrs+_xbbl[1].lqrs}
                console.log(_xbbl)
              }
            }
          }
          //完善信息
          var _wsxx = res.content.jbxx[0]
          console.log(_wsxx)
          for(var key in _wsxx){
            if(key=='yblrs'){
              this.wsxx[0] = {bl:_wsxx[key],key:'已办理',color: '#68CCA0',zrs:_wsxx.lqrs}
            }else if(key=='wblrs'){
              this.wsxx[1] = {bl:_wsxx[key],key:'未办理',color: '#80BDF6',zrs:_wsxx.lqrs}
            }
          }
          //环节办理情况
          var _hjbl = res.content.hjbl
          for(var i=0,l=_hjbl.length;i < l;i++){
            this.hjblqk[i] = {bl:_hjbl[i].wcrs,bbl:_hjbl[i].zs-_hjbl[i].wcrs,key:_hjbl[i].hjmc,zrs:_hjbl[i].zs}
          }
          // this.hjblqk[0] = {bl:_wsxx[key],bbl:_wsxx[key],key:'完善信息',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[1] = {bl:_wsxx[key],bbl:_wsxx[key],key:'l办理',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[2] = {bl:_wsxx[key],bbl:_wsxx[key],key:'2办理',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[3] = {bl:_wsxx[key],bbl:_wsxx[key],key:'3办理',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[4] = {bl:_wsxx[key],bbl:_wsxx[key],key:'3办理',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[5] = {bl:_wsxx[key],bbl:_wsxx[key],key:'3办理',color:'#69CCA0',zrs:_wsxx.lqrs}
          // this.hjblqk[5] = {bl:_wsxx[key],bbl:_wsxx[key],key:'3办理',color:'#69CCA0',zrs:_wsxx.lqrs}
        }
      })
    }
  },
  components: { topSelect, vHeader, vxslxObj, hjObj}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.home-header
	margin-top: .44rem
.home-content
	background: #f7f7f7
	padding: .12rem
</style>