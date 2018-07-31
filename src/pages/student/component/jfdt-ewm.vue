<template>
  	<div class="content" style="overflow-y: auto">
<!--   		<div class="top">
  			<div class="code-2"></div>
	  		<div class="xzewm" @click="download">
					<span>下载二维码</span>
	  		</div>
	  		<div class="prement">
	  			<h3>缴费方式：</h3>
	  			<p v-if="info.length>0">报到时前往{{info[info.length-1].jffs}}进行线下缴费</p>
	  		</div>
  		</div> -->
      <div>
        <h3 class="mt15 mb10 ft-bold">一、重要提示</h3>
        <p style="text-indent: 2em;line-height:1.5">1、如已成功办理生源地助学贷款且贷款金额大于、等于学费和住宿费总额的学生不用点选学费和住宿费缴费项；如贷款金额小于学费和住宿费总额的，可点选学费和住宿费缴费项其中一项，输入缴费金额，使输入金额加上贷款金额等于学费和住宿费总额，欠缴部分通过“绿色通道”页面办理学费缓交。</p>
        <p style="text-indent: 2em;line-height:1.5">2、其他因家庭经济困难等原因无法缴清费用的学生可根据自身情况选择缴费项目和缴费金额，欠缴部分通过“绿色通道”页面办理学费缓交。</p>
        <p style="text-indent: 2em;line-height:1.5">3、军训费为报到新生必缴项，在缴费时不可点选。</p>
        <h3 class="mt15 mb10 ft-bold">二、缴费方式（以下两种方式均可）</h3>
        <p style="line-height:1.5">
        方式一：电脑登录重庆理工大学缴费平台
        <div style="text-indent: 2em;line-height:1.5">“用户名”为学号，“密码”为身份证后六位（初次登录请修改密码），录入“验证码”，进入缴费界面完成缴费。</div>
        </p>。
        <p style="line-height:1.5">
        方式二：手机关注“重庆理工大学财务处”微信公众号。
        <div>
          <img src="static/student-index-pictures/TSMV8BVV3$_4}L]PYO7(`L0.png">
        </div>
        <div style="text-indent: 2em;line-height:1.5">
        进入“重庆理工大学财务处”微信公众号，在界面下方的菜单中选择“缴费平台”-“微信缴费”。（用户名和密码与重庆理工大学缴费平台一致）
      </div>
    </p>
      </div>
  	</div>
</template>

<script>
//import {getGrsfmData} from "student/api/grsfm.js"
//import {getJfdtData} from '@/pages/student/api/jfdt.js'
import jsAndroid from '@/common/js/jsAndroid.js'
export default {
  name: 'xcbdPopup',
  data () {
  	return {
  		//isshow:false,
  		info:[
  			{fymc:"学费",yjje:4000,yjfy:"0",qfje:4000,hjje:0,jffs:"现场"},
  			{fymc:"书费",yjje:500,yjfy:"0",qfje:500,hjje:0,jffs:"现场"},
  			{fymc:"伙食费",yjje:1000,yjfy:"0",qfje:1000,hjje:0,jffs:"现场"},
  			{fymc:"补课费",yjje:1000,yjfy:"0",qfje:1000,hjje:0,jffs:"现场"},
  			{fymc:"聚餐费",yjje:250,yjfy:"0",qfje:250,hjje:0,jffs:"现场"},
  			{fymc:"住宿费",yjje:1250,yjfy:"0",qfje:1250,hjje:0,jffs:"现场"}
  			]
  	}
  },
  methods:{
    download(){
      jsAndroid.saveImage.save(JSON.stringify({path: ''}))
      // console.log(jsAndroid.saveImage.save)
    }
  },
  // methods:{
  // 	getData(){
  // 		getJfdtData().then((res) => {
  // 			if(res.code==='40001'){
  				
  // 				console.log(res.message)
  // 				this.info = res.content
  // 			}else{
  // 				console.log('data error')
  // 			}
  // 		})
  // 	}
  // },
  // created(){
  // 	this.getData()
  // }

  // methods:{
  // 	cancle(){
  // 		this.$emit("event",this.isshow)
  // 	},
  // 	getData(){
  // 		getGrsfmData().then((res)=>{
  // 			if(res.code == "40001"){
  // 				console.log(res.message)
  // 				this.info = res.content
  // 			}else{
  // 				console.log("getData error")
  // 			}
  // 		})
  // 	},
  // },
  // created(){
  // 	this.getData()
  // }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.content
		position:fixed
		top: 0
		bottom:0
		width:100%
		.top
			width:100%
			margin-bottom: 1px
			height: calc(100% - .46rem)
			background:rgba(255,255,255,1)
			overflow:hidden
			.code-2
				width:1.6rem
				height:1.6rem
				background:url(/yxxt/static/student-index-pictures/erwei-code.png)
				margin:.8rem auto 0.4rem
			.xzewm
				width:calc(100% - 2 * .57rem)
				background:#3DA8F5
				height:.46rem
				border-radius:.23rem
				margin:.2rem auto
				text-align:center
				font-size:.17rem
				span
					color:#fff
					line-height:.45rem
			.prement
				padding:.3rem .12rem
				h3
					color:#333
					font-family:PingFang-SC-Bold
					font-weight:bold
					font-size:.16rem
					margin:0 0 .07rem
				p
					font-family:PingFang-SC-Medium
					font-size:.13rem
					line-height:.24rem
</style>