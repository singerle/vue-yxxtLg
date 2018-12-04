<template>
  <div id="app">
	<transition :name="name">
		<keep-alive>
		   	<router-view class="router-view"></router-view>
		</keep-alive>
	</transition>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {cxsylxData} from "student/api/cxsylx"
export default {
  name: 'app',
  data () {
  	return {
		name: 'register',
		map: {}
  	}
  },
  watch: {
  	'$route'(to, from){
      cxsylxData().then((res) => {
				console.log(res,to)
				if(res.code == '40001'){
					if(res.content.sylx=="本科生"){
						axios.get('static/student/bks.json').then((res) => {
  					Vue.prototype.$changetext = res.data
						})
					}else if(res.content.sylx=="研究生"){
						axios.get('static/student/yjs.json').then((res) => {
  					Vue.prototype.$changetext = res.data
						})
					}
				}
			}).catch(error => {console.log(error)})
	  	if (!this.map[to.path]) {
	        this.map[to.path] = +new Date() + 1
	    }
	    if (!this.map[from.path]) {
	        this.map[from.path] = +new Date()
	    }
	    if (this.map[to.path] > this.map[from.path]) {
	        this.name = 'slide-forward'
	    } else {
	        this.name = 'slide-back'
	    } 
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
html
  font-size: 100px
.router-view 
  position: absolute
  width: 100%
  top: 0
  left: 0
.slide-forward-enter 
  transform: translate(100%)
.slide-forward-enter-active 
  transition: all .3s ease-in-out
.slide-forward-leave-active 
  transform: translate(-100%)
  transition: all  .3s ease-in-out
.slide-back-enter
  transform: translate(-100%)
.slide-back-enter-active
  transition: all .3s ease-in-out
.slide-back-leave-active 
  transform: translate(100%)
  transition: all  .3s ease-in-out
</style>
