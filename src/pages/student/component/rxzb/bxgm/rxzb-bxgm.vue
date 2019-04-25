<!-- 入学准备-保险购买 -->
<template>
	<div class="wrap" v-if="gmzt==3">
		<ul>
			<li v-for="(item,i) in bxxx"><span>{{item.fymc}}</span><span>{{item.yjfy}}</span></li>
		</ul>
		<div style="color: red;font-size: 12px;" class="mt10 pl10">
			注意：若您已缴了医保费用，请直接选择直接购买
		</div>
		<div style="padding: 0 .1rem">
			<h3 style="text-align:center;margin-top:.5rem">重庆市大学生城乡居民合作医疗保险介绍</h3>
			<div class="mt10" style="text-indent: 2em;line-height:.2rem;font-weight:600;">
				根据《关于将大学生纳入城乡居民合作医疗保险的实施意见》（渝人社发〔2009〕185号）和《关于印发重庆市城乡居民合作医疗保险市级统筹实施办法的通知》（渝人社发[2012]127号）有关精神，为保障大学生基本医疗需求，切实落实党中央对在校大学生的医疗优惠政策，减轻患病大学生家庭经济负担，特实施大学生城乡居民医疗保险。
			</div>
			<h3>
				（一）参保范围
			</h3>
			<div class="mt10" style="text-indent: 2em;line-height:.2rem;font-weight:600;">
				具有我校正式学籍的全日制本科生、全日制研究生（以下称简称大学生）均可在自愿原则的基础上参加大学生城乡居民合作医疗保险。享受待遇时间从当年的9月1日至次年的8月31日。
			</div>
			<h3>
				（二）缴费标准
			</h3>
			<div class="mt10" style="text-indent: 2em;line-height:.2rem;font-weight:600;">
				大学生参保个人缴费标准分为一档和二档。具体标准由市人力资源和社会保障局会同相关部门，于每年8月31日前报由市政府批准后发布。2018-2019学年大学生医保的费用为每人每年180元（暂定费用，准确费用待重庆市政府最终确定）。系统默认为一档标准，如有购买二档需求的同学，请于开学报到后在各学院辅导员处办理升档手续。
			</div>
			<div class="mt10" style="text-indent: 2em;line-height:.2rem;font-weight:600;">
	    		对大学生中的困难群体，按照民政部门的相关规定给予参保资助。大一新生全部先按照重庆市统一标准收取保费，待入学贫困生认定工作开展后，再根据相关规定给予贫困同学医保减免。
			</div>
		</div>
		<div class="bottom">
			<span @click="popStu=true">放弃购买</span>
			<span @click="message=true">同意购买</span>
		</div>
		<message v-show="message" @close="message=false">
			<template slot="top">
				<h3>您是否确认自愿购买保险？</h3>
				<p>一旦确认无法更改</p>
			</template>
			<div slot="bottom" @click.stop="gmbx">
				<p style="color:#fff">确定</p>
			</div>
		</message>
		<pop v-if="popStu" @close="close">
			<div slot="top">
				<div class="pl10 pr10" style="line-height: 1.3">1、交费后信息同步需要一段时间，若您已缴费，请直接选择同意购买</div>
				<div class="pl10 pr10 mt10" style="line-height: 1.3">2、选择不购买后将无法线上购买</div>
			</div>
			<div slot="bottom" style="display:flex;height:100%;width:100%;align-items:center;text-align:center;border-top:1px solid #ececec">
				<div @click="popStu=false" style="flex: 1;background: white;height:.44rem;line-height:.44rem">取消</div>
				<div @click="$router.push('/rxzb/bxgmaqxy')" style="flex: 1;color: white">确定</div>
			</div>
		</pop>
		<!-- <fqgm></fqgm> -->
	</div>
	<div v-else-if="gmzt==2">
		<yfq @cxgm="cxgm"></yfq>
	</div>
	<div v-else-if="gmzt==1">
		<ygm :data="bxxx"></ygm>
	</div>
	<div v-else-if="gmzt==4">
		<ygm1 :data="bxxx" @qryjf="qryjf"></ygm1>
		<pop v-if="popStu1" @close="close1">
			<div slot="title">您尚未缴纳费用</div>
			<div slot="top">
				若您已缴清，请等待5分钟再试
			</div>
			<div slot="bottom" style="color: white" @click="popStu1=false">确定</div>
		</pop>
	</div>
</template>

<script>
import message from '@/pages/student/component/common/popup.vue'
import fqgm from './rxzb-bxgm-fqgm'
import yfq from './fqgm'
import pop from '../../common/popup'
import {Gmbx,getCxzt} from 'student/api/bxgm'
// import {setHjStu} from 'student/api/getHjxx'
import ygm from './rxzb-bxgm-complete'
import ygm1 from './rxzb-bxgm-complete1'
import {completeProcess} from 'student/api/completeSendData.js'
export default {	
  	name: 'rxzb-bxgm',
  	components:{ message ,ygm, ygm1, yfq, pop},
  	data(){
  		return {
  			message:'',
  			sffqgm: '',
  			bxxx: '',
  			gmzt: '',
  			//弹窗状态
  			popStu: false,
  			popStu1: false
  		}
  	},
  // 	activated(){
		// this.init()
  // 	},
  	created(){
		this.init()
  	},
  	methods:{
  		close(){
  			this.popStu = false
  		},
  		close1(){
  			this.popStu1 = false
  		},
	    gmbx(){	    	
		    Gmbx({id: this.$store.getters.getHjid}).then((res) => {
	    		if(res.code == '40001'){
	    			// this.gmzt= 1
	    			this.init()
	    			// setHjStu({pauId: this.$store.getters.getHjid})
	    		}
		    })
	    },
	    init(){
	  		getCxzt().then((res) => {
	  			if(res.code == '40001'){
						console.log(res)
	  				this.bxxx = res.content.bxxx
	  				this.gmzt = res.content.gmzt.gmzt
	  				this.$store.commit('saveqsxx', {qsxm: res.content.gmzt.fq||res.content.gmzt.mq, jzdh: res.content.gmzt.jzdh})
	  			}
	  		})
	    },
	    cxgm(){
	    	this.gmzt = 3
	    	this.message = true
	    },
	    qryjf(){
	    	getCxzt().then((res) => {
	  			if(res.code == '40001'){
	  				this.bxxx = res.content.bxxx
	  				this.gmzt = res.content.gmzt.gmzt
	  				this.$store.commit('saveqsxx', {qsxm: res.content.gmzt.fq||res.content.gmzt.mq, jzdh: res.content.gmzt.jzdh})
	  				this.gmzt===4&&(this.popStu1=true)
	  			}
	  		})
	    }
	}
  	}  
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		position:fixed
		top:0
		bottom:0
		width:100%
		background: #f7f7f7
		border-top:.01rem solid #E9E9E9
		overflow-y: auto
		padding-bottom: .44rem
		ul
			background:#fff
			li
				width:calc(100% - .3rem)
				margin:0 auto
				border-bottom:.01rem solid #E9E9E9
				display:flex
				justify-content:space-between
				align-items:center
				height:.44rem
				span:first-child
					font-size:.16rem
					color:#333333
				span:last-child
					font-size:.14rem
					color:#999999
			li:last-child
				border:0
		.bottom
			position:fixed
			bottom:0
			width:100%
			display:flex
			height:.44rem
			text-align:center
			line-height:.44rem
			font-size:.16rem
			font-family:PingFang-SC-Medium
			span
				width:50%	
			span:nth-of-type(1)
				background:#fff
				color:#333333
			span:nth-of-type(2)
				background:#3DA8F5
				color:#fff
</style>