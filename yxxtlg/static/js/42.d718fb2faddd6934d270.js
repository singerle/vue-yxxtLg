webpackJsonp([42],{1327:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var c=e(36),a=e.n(c),i=e(90),A=e.n(i),f=e(1328),o=function(n,t){var c=A()({},t);return new a.a(function(t){e.i(f.a)({method:"post",url:window.REQUEST_URL+n,params:c}).then(function(n){t(n.data)})})}},1328:function(n,t,e){"use strict";var c=e(36),a=e.n(c),i=e(89),A=e.n(i),f=e(309),o=A.a.create({baseURL:e.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});o.interceptors.request.use(function(n){return n.headers.token=f.a.getters.getuser.userid,n},function(n){a.a.reject(n)}),t.a=o},1507:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=e(1575);t.default={name:"bdlc-xcjf",data:function(){return{info:[]}},computed:{total:function(){for(var n=0,t=0;t<this.info.length;t++)n+=this.info[t].yjfy;if(n>=1e3){var e=n.toString();n=Math.floor(n/1e3)+","+e.substring(e.length-3)}return 0==n?0:n+".00"},yijiaoqian:function(){for(var n=0,t=0;t<this.info.length;t++)n+=this.info[t].yjje;if(n>=1e3){var e=n.toString();n=Math.floor(n/1e3)+","+e.substring(e.length-3)}return 0==n?0:n+".00"}},methods:{getData:function(){var n=this;e.i(c.a)().then(function(t){"40001"===t.code&&(n.info=t.content)})}},created:function(){this.getData()}}},1575:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var c=e(1327),a=function(n){return e.i(c.a)("student/jfdt",n)}},1629:function(n,t,e){t=n.exports=e(1324)(!0),t.push([n.i,".bdlc-xcjf[data-v-7c1fc15c]{position:fixed;bottom:0;top:0;width:100%;background:#f7f7f7;overflow:auto;padding-bottom:2rem}.bdlc-xcjf .top[data-v-7c1fc15c]{padding:0 .12rem;background:#3fb4ff;text-align:center}.bdlc-xcjf .top .text[data-v-7c1fc15c]{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:PingFang-SC-Bold;font-size:.16rem;font-weight:700;color:hsla(0,0%,100%,.7);padding:.14rem 0}.bdlc-xcjf .top .text p[data-v-7c1fc15c]{width:50%}.bdlc-xcjf .top .money[data-v-7c1fc15c]{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:PingFang-SC-Medium;font-size:.3rem;color:#fff;padding-bottom:.3rem}.bdlc-xcjf .top .money p[data-v-7c1fc15c]{width:50%}.bdlc-xcjf .detail[data-v-7c1fc15c]{margin-top:.1rem;background:#fff}.bdlc-xcjf .detail ul li[data-v-7c1fc15c]{font-family:PingFang-SC-Medium;color:#333;font-size:.13rem;height:.44rem;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:.01rem solid #f5f5f5}.bdlc-xcjf .detail ul li span[data-v-7c1fc15c]{width:25%}.bdlc-xcjf .detail ul li[data-v-7c1fc15c]:first-child{font-size:.14rem;font-family:PingFang-SC-Bold}.bdlc-xcjf .detail ul li:first-child span[data-v-7c1fc15c]{font-weight:700}.bdlc-xcjf .detail ul li[data-v-7c1fc15c]:last-child{border:0}.bdlc-xcjf .prement[data-v-7c1fc15c]{padding:0 .12rem}.bdlc-xcjf .prement h3[data-v-7c1fc15c]{color:#333;font-family:PingFang-SC-Bold;font-weight:700;font-size:.16rem;margin:.3rem 0 .07rem}.bdlc-xcjf .prement p[data-v-7c1fc15c]{font-family:PingFang-SC-Medium;font-size:.13rem;line-height:.24rem}.bdlc-xcjf .qwjf[data-v-7c1fc15c]{width:calc(100% - 2 * .57rem);background:#3da8f5;height:.46rem;border-radius:.23rem;margin:0 auto;text-align:center;font-size:.17rem;margin-top:.2rem}.bdlc-xcjf .qwjf span[data-v-7c1fc15c]{color:#fff;line-height:.45rem}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/student/component/jfdt.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,SAAU,AACV,MAAO,AACP,WAAY,AACZ,mBAAoB,AACpB,cAAe,AACf,mBAAqB,CACtB,AACD,iCACE,iBAAmB,AACnB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,uCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,6BAA8B,AAC9B,iBAAmB,AACnB,gBAAkB,AAClB,yBAA6B,AAC7B,gBAAmB,CACpB,AACD,yCACE,SAAW,CACZ,AACD,wCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,+BAAgC,AAChC,gBAAkB,AAClB,WAAY,AACZ,oBAAuB,CACxB,AACD,0CACE,SAAW,CACZ,AACD,oCACE,iBAAmB,AACnB,eAAiB,CAClB,AACD,0CACE,+BAAgC,AAChC,WAAY,AACZ,iBAAmB,AACnB,cAAgB,AAChB,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,kCAAqC,CACtC,AACD,+CACE,SAAW,CACZ,AACD,sDACE,iBAAmB,AACnB,4BAA8B,CAC/B,AACD,2DACE,eAAkB,CACnB,AACD,qDACE,QAAU,CACX,AACD,qCACE,gBAAmB,CACpB,AACD,wCACE,WAAY,AACZ,6BAA8B,AAC9B,gBAAkB,AAClB,iBAAmB,AACnB,qBAAyB,CAC1B,AACD,uCACE,+BAAgC,AAChC,iBAAmB,AACnB,kBAAqB,CACtB,AACD,kCACE,8BAAgC,AAChC,mBAAoB,AACpB,cAAgB,AAChB,qBAAuB,AACvB,cAAe,AACf,kBAAmB,AACnB,iBAAmB,AACnB,gBAAmB,CACpB,AACD,uCACE,WAAY,AACZ,kBAAqB,CACtB",file:"jfdt.vue",sourcesContent:["\n.bdlc-xcjf[data-v-7c1fc15c] {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  background: #f7f7f7;\n  overflow: auto;\n  padding-bottom: 2rem;\n}\n.bdlc-xcjf .top[data-v-7c1fc15c] {\n  padding: 0 0.12rem;\n  background: #3fb4ff;\n  text-align: center;\n}\n.bdlc-xcjf .top .text[data-v-7c1fc15c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: PingFang-SC-Bold;\n  font-size: 0.16rem;\n  font-weight: bold;\n  color: rgba(255,255,255,0.7);\n  padding: 0.14rem 0;\n}\n.bdlc-xcjf .top .text p[data-v-7c1fc15c] {\n  width: 50%;\n}\n.bdlc-xcjf .top .money[data-v-7c1fc15c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: PingFang-SC-Medium;\n  font-size: 0.3rem;\n  color: #fff;\n  padding-bottom: 0.3rem;\n}\n.bdlc-xcjf .top .money p[data-v-7c1fc15c] {\n  width: 50%;\n}\n.bdlc-xcjf .detail[data-v-7c1fc15c] {\n  margin-top: 0.1rem;\n  background: #fff;\n}\n.bdlc-xcjf .detail ul li[data-v-7c1fc15c] {\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  font-size: 0.13rem;\n  height: 0.44rem;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 0.01rem solid #f5f5f5;\n}\n.bdlc-xcjf .detail ul li span[data-v-7c1fc15c] {\n  width: 25%;\n}\n.bdlc-xcjf .detail ul li[data-v-7c1fc15c]:first-child {\n  font-size: 0.14rem;\n  font-family: PingFang-SC-Bold;\n}\n.bdlc-xcjf .detail ul li:first-child span[data-v-7c1fc15c] {\n  font-weight: bold;\n}\n.bdlc-xcjf .detail ul li[data-v-7c1fc15c]:last-child {\n  border: 0;\n}\n.bdlc-xcjf .prement[data-v-7c1fc15c] {\n  padding: 0 0.12rem;\n}\n.bdlc-xcjf .prement h3[data-v-7c1fc15c] {\n  color: #333;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  font-size: 0.16rem;\n  margin: 0.3rem 0 0.07rem;\n}\n.bdlc-xcjf .prement p[data-v-7c1fc15c] {\n  font-family: PingFang-SC-Medium;\n  font-size: 0.13rem;\n  line-height: 0.24rem;\n}\n.bdlc-xcjf .qwjf[data-v-7c1fc15c] {\n  width: calc(100% - 2 * 0.57rem);\n  background: #3da8f5;\n  height: 0.46rem;\n  border-radius: 0.23rem;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.17rem;\n  margin-top: 0.2rem;\n}\n.bdlc-xcjf .qwjf span[data-v-7c1fc15c] {\n  color: #fff;\n  line-height: 0.45rem;\n}"],sourceRoot:""}])},1705:function(n,t,e){var c=e(1629);"string"==typeof c&&(c=[[n.i,c,""]]),c.locals&&(n.exports=c.locals);e(1325)("571dc4ba",c,!0,{})},1792:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bdlc-xcjf"},[e("div",{staticClass:"top"},[n._m(0),n._v(" "),e("div",{staticClass:"money"},[e("p",[n._v(n._s(n.total))]),n._v(" "),e("p",[n._v(n._s(n.yijiaoqian))])])]),n._v(" "),e("div",{staticClass:"detail"},[e("ul",[n._m(1),n._v(" "),n._l(n.info,function(t,c){return e("li",[e("span",[n._v(n._s(t.fymc))]),n._v(" "),e("span",[n._v(n._s(t.yjfy))]),n._v(" "),e("span",[n._v(n._s(t.yjje))]),n._v(" "),e("span",[n._v(n._s(t.qfje))])])})],2)]),n._v(" "),n._m(2)])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"text"},[e("p",[n._v("应交金额（元）")]),n._v(" "),e("p",[n._v("已交金额（元）")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",[e("span",[n._v("费用名称")]),n._v(" "),e("span",[n._v("应交金额")]),n._v(" "),e("span",[n._v("已交金额")]),n._v(" "),e("span",[n._v("欠费金额")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"prement"},[e("h3",[n._v("重要提醒：")]),n._v(" "),e("p",{staticStyle:{"text-indent":"2em"}},[n._v('\n\t\t    \t新生入学费用在"大学生医保"购买环节进行\n\t\t\t')])])}]}},309:function(n,t,e){"use strict";var c=e(8),a=e(9);c.default.use(a.a);var i=new a.a.Store({state:{user:"",hjid:"",table1:!1,table2:!1,table3:!1,wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(n,t){n.user=t},saveTime:function(n,t){n.pickerValue=t},savewsxxPage1:function(n,t){n.wsxxPage1=t},savewsxxPage2:function(n,t){n.wsxxPage2=t},savehjid:function(n,t){n.hjid=t},saveqsxx:function(n,t){n.qsxx=t},saveWsxxDate:function(n,t){n.getWsxxData=t},changeTable1:function(n,t){n.table1=t},changeTable2:function(n,t){n.table2=t},changeTable3:function(n,t){n.table3=t}},actions:{},getters:{getHjid:function(n){return n.hjid},getqsxx:function(n){return n.qsxx},getuser:function(n){return n.user}}});t.a=i},522:function(n,t,e){function c(n){e(1705)}var a=e(4)(e(1507),e(1792),c,"data-v-7c1fc15c",null);n.exports=a.exports}});
//# sourceMappingURL=42.d718fb2faddd6934d270.js.map