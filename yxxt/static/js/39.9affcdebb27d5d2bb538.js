webpackJsonp([39],{1324:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var a=t(36),o=t.n(a),i=t(90),A=t.n(i),r=t(1325),s=function(n,e){var a=A()({},e);return new o.a(function(e){t.i(r.a)({method:"post",url:window.REQUEST_URL+n,params:a}).then(function(n){e(n.data)})})}},1325:function(n,e,t){"use strict";var a=t(36),o=t.n(a),i=t(89),A=t.n(i),r=t(309),s=A.a.create({baseURL:t.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});s.interceptors.request.use(function(n){return n.headers.token=r.a.getters.getuser.userid,n},function(n){o.a.reject(n)}),e.a=s},1497:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(1564);e.default={name:"",data:function(){return{info:""}},methods:{getData:function(){var n=this;t.i(a.a)().then(function(e){"40001"===e.code&&(n.info=e.content)})}},created:function(){this.getData()}}},1564:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var a=t(1324),o=function(n){return t.i(a.a)("student/grxx",n)}},1574:function(n,e,t){e=n.exports=t(1321)(!0),e.push([n.i,'.bgcolor[data-v-0b9aa42c]{background:#f7f7f7;position:fixed;top:0;bottom:0;width:100%;overflow:auto}.bgcolor .header[data-v-0b9aa42c]{overflow:hidden;font-family:PingFang-SC-Medium;color:#333;font-size:.13rem;background-color:#fff;padding-bottom:.07rem;margin-bottom:.1rem;border-top:.01rem solid #ececec;padding-top:.09rem}.bgcolor .header .pic[data-v-0b9aa42c]{float:left;margin-left:.14rem;width:.75rem;height:.75rem}.bgcolor .header .pic .picbg[data-v-0b9aa42c],.bgcolor .header .pic[data-v-0b9aa42c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bgcolor .header .pic .picbg[data-v-0b9aa42c]{width:.65rem;height:.65rem;border-radius:50%;background:#fff;-webkit-box-shadow:.01rem .01rem .14rem #cecece;box-shadow:.01rem .01rem .14rem #cecece}.bgcolor .header .pic img[data-v-0b9aa42c]{width:.6rem;height:.6rem;border-radius:50%;border:0}.bgcolor .header .student-info[data-v-0b9aa42c]{float:left;width:calc(100% - .99rem);margin-top:.03rem;margin-left:.1rem}.bgcolor .header .student-info .student-name[data-v-0b9aa42c]{font-size:0}.bgcolor .header .student-info .student-name .xingming[data-v-0b9aa42c]{display:inline-block;font-size:.17rem;font-family:PingFang-SC-Bold;margin-top:.04rem;vertical-align:top}.bgcolor .header .student-info .yuan[data-v-0b9aa42c]{font-size:.14rem;margin-top:.08rem;margin-bottom:.06rem;padding-left:.2rem;background:url("/yxxt/static/student-index-pictures/yuan-hui.png") no-repeat;background-size:.12rem .12rem}.bgcolor .header .student-info .xi[data-v-0b9aa42c]{font-size:.13rem;padding-left:.2rem;background:url("/yxxt/static/student-index-pictures/xi-hui.png") no-repeat;background-size:.12rem .12rem}.bgcolor .content[data-v-0b9aa42c]{padding:0 .12rem;background:#fff;padding-bottom:1rem}.bgcolor .content p[data-v-0b9aa42c]{border-bottom:.01rem solid #e9e9e9;font-size:.16rem;font-family:PingFang-SC-Medium;color:#333;line-height:.44rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.bgcolor .content p span[data-v-0b9aa42c]{text-align:right}.bgcolor .content p span[data-v-0b9aa42c]:last-child{font-size:.14rem;font-family:PingFang-SC-Medium;color:#999}.bgcolor .content p[data-v-0b9aa42c]:last-child{border-bottom:0}',"",{version:3,sources:["D:/vue-yxxtlg/src/pages/student/component/myinfo.vue"],names:[],mappings:"AACA,0BACE,mBAAoB,AACpB,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,aAAe,CAChB,AACD,kCACE,gBAAiB,AACjB,+BAAgC,AAChC,WAAY,AACZ,iBAAmB,AACnB,sBAAuB,AACvB,sBAAwB,AACxB,oBAAsB,AACtB,gCAAkC,AAClC,kBAAqB,CACtB,AACD,uCACE,WAAY,AACZ,mBAAqB,AACrB,aAAe,AACf,aAAgB,CAUjB,AACD,qFAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAkB7B,AAhBD,8CACE,aAAe,AACf,cAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AAUjB,gDAAoD,AAC5C,uCAA4C,CACrD,AACD,2CACE,YAAc,AACd,aAAe,AACf,kBAAmB,AACnB,QAAU,CACX,AACD,gDACE,WAAY,AACZ,0BAA4B,AAC5B,kBAAoB,AACpB,iBAAoB,CACrB,AACD,8DACE,WAAa,CACd,AACD,wEACE,qBAAsB,AACtB,iBAAmB,AACnB,6BAA8B,AAC9B,kBAAoB,AACpB,kBAAoB,CACrB,AACD,sDACE,iBAAmB,AACnB,kBAAoB,AACpB,qBAAuB,AACvB,mBAAqB,AACrB,6EAA8E,AAC9E,6BAAiC,CAClC,AACD,oDACE,iBAAmB,AACnB,mBAAqB,AACrB,2EAA4E,AAC5E,6BAAiC,CAClC,AACD,mCACE,iBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,qCACE,mCAAqC,AACrC,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,mBAAqB,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,0CACE,gBAAkB,CACnB,AACD,qDACE,iBAAmB,AACnB,+BAAgC,AAChC,UAAY,CACb,AACD,gDACE,eAAiB,CAClB",file:"myinfo.vue",sourcesContent:['\n.bgcolor[data-v-0b9aa42c] {\n  background: #f7f7f7;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  overflow: auto;\n}\n.bgcolor .header[data-v-0b9aa42c] {\n  overflow: hidden;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  font-size: 0.13rem;\n  background-color: #fff;\n  padding-bottom: 0.07rem;\n  margin-bottom: 0.1rem;\n  border-top: 0.01rem solid #ececec;\n  padding-top: 0.09rem;\n}\n.bgcolor .header .pic[data-v-0b9aa42c] {\n  float: left;\n  margin-left: 0.14rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bgcolor .header .pic .picbg[data-v-0b9aa42c] {\n  width: 0.65rem;\n  height: 0.65rem;\n  border-radius: 50%;\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 0.01rem 0.01rem 0.14rem #cecece;\n          box-shadow: 0.01rem 0.01rem 0.14rem #cecece;\n}\n.bgcolor .header .pic img[data-v-0b9aa42c] {\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 50%;\n  border: 0;\n}\n.bgcolor .header .student-info[data-v-0b9aa42c] {\n  float: left;\n  width: calc(100% - 0.99rem);\n  margin-top: 0.03rem;\n  margin-left: 0.1rem;\n}\n.bgcolor .header .student-info .student-name[data-v-0b9aa42c] {\n  font-size: 0;\n}\n.bgcolor .header .student-info .student-name .xingming[data-v-0b9aa42c] {\n  display: inline-block;\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Bold;\n  margin-top: 0.04rem;\n  vertical-align: top;\n}\n.bgcolor .header .student-info .yuan[data-v-0b9aa42c] {\n  font-size: 0.14rem;\n  margin-top: 0.08rem;\n  margin-bottom: 0.06rem;\n  padding-left: 0.2rem;\n  background: url("/yxxt/static/student-index-pictures/yuan-hui.png") no-repeat;\n  background-size: 0.12rem 0.12rem;\n}\n.bgcolor .header .student-info .xi[data-v-0b9aa42c] {\n  font-size: 0.13rem;\n  padding-left: 0.2rem;\n  background: url("/yxxt/static/student-index-pictures/xi-hui.png") no-repeat;\n  background-size: 0.12rem 0.12rem;\n}\n.bgcolor .content[data-v-0b9aa42c] {\n  padding: 0 0.12rem;\n  background: #fff;\n  padding-bottom: 1rem;\n}\n.bgcolor .content p[data-v-0b9aa42c] {\n  border-bottom: 0.01rem solid #e9e9e9;\n  font-size: 0.16rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  line-height: 0.44rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.bgcolor .content p span[data-v-0b9aa42c] {\n  text-align: right;\n}\n.bgcolor .content p span[data-v-0b9aa42c]:last-child {\n  font-size: 0.14rem;\n  font-family: PingFang-SC-Medium;\n  color: #999;\n}\n.bgcolor .content p[data-v-0b9aa42c]:last-child {\n  border-bottom: 0;\n}'],sourceRoot:""}])},1649:function(n,e,t){var a=t(1574);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(1322)("88413db8",a,!0,{})},1734:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"bgcolor"},[t("div",{staticClass:"header"},[t("div",{staticClass:"pic"},[t("div",{staticClass:"picbg"},[t("img",{attrs:{src:null==n.info.tx||"null"==n.info.tx?"static/student-index-pictures/pic.png":n.info.tx}})])]),n._v(" "),t("div",{staticClass:"student-info"},[t("h3",{staticClass:"student-name"},[t("span",{staticClass:"xingming"},[n._v(n._s(n.info?n.info.xm:"无数据"))])]),n._v(" "),t("p",{staticClass:"yuan"},[t("span",{staticClass:"yuan-name"},[n._v(n._s(n.info?n.info.xy:"无数据"))])]),n._v(" "),t("p",{staticClass:"xi"},[t("span",[n._v(n._s(n.info.zy)+"  "),n.info.xi?t("span",[n._v("("+n._s(n.info.zy)+")")]):n._e()])])])]),n._v(" "),t("div",{staticClass:"content"},[t("p",[t("span",[n._v("出生日期")]),t("span",[n._v(n._s(n.info?n.info.sr:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("班级")]),t("span",[n._v(n._s(n.info?n.info.bj:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("考生号")]),t("span",[n._v(n._s(n.info?n.info.ksh:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("学号")]),t("span",[n._v(n._s(n.info?n.info.xh:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("身份证号")]),t("span",[n._v(n._s(n.info?n.info.sfzh:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("录取省份")]),t("span",[n._v(n._s(n.info?n.info.lqsf:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("政治面貌")]),t("span",[n._v(n._s(n.info&&"null"!=n.info.zzmm&&null!=n.info.zzmm?n.info.zzmm:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("民族")]),t("span",[n._v(n._s(n.info&&"null"!=n.info.mz&&null!=n.info.mz?n.info.mz:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("学制 （年）")]),t("span",[n._v(n._s(n.info?n.info.xz:"无数据"))])]),n._v(" "),t("p",[t("span",[n._v("录取校区")]),t("span",[n._v(n._s(n.info&&"null"!=n.info.lqxq&&null!=n.info.lqxq?n.info.lqxq:"无数据"))])])])])},staticRenderFns:[]}},309:function(n,e,t){"use strict";var a=t(8),o=t(9);a.default.use(o.a);var i=new o.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(n,e){n.user=e},saveTime:function(n,e){n.pickerValue=e},savewsxxPage1:function(n,e){n.wsxxPage1=e},savewsxxPage2:function(n,e){n.wsxxPage2=e},savehjid:function(n,e){n.hjid=e},saveqsxx:function(n,e){n.qsxx=e},saveWsxxDate:function(n,e){n.getWsxxData=e}},actions:{},getters:{getHjid:function(n){return n.hjid},getqsxx:function(n){return n.qsxx},getuser:function(n){return n.user}}});e.a=i},522:function(n,e,t){function a(n){t(1649)}var o=t(4)(t(1497),t(1734),a,"data-v-0b9aa42c",null);n.exports=o.exports}});
//# sourceMappingURL=39.9affcdebb27d5d2bb538.js.map