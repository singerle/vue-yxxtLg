webpackJsonp([80],{1378:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(16),o=a.n(n),A=a(9);t.default={props:{page:{type:String,default:function(){return{newpage:"addedNews"}}},headerTitle:{type:Object,default:function(){return{title:"新闻公式",button:"新增"}}}},methods:o()({toPage:function(){this._setId(""),this.$router.push({path:this.page}),this.$store.commit("newsState",1)},toPage1:function(){this._setId(""),this.$router.push({path:this.page})}},a.i(A.c)({_setId:"SET_NEWS_ID"}))}},1417:function(e,t,a){t=e.exports=a(1321)(!0),t.push([e.i,".header-wrap[data-v-103e8ab5]{width:100%;height:49px;line-height:50px;font-size:14px;border-bottom:1px solid #2184c5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.header-wrap p[data-v-103e8ab5]{color:#555;font-weight:700;font-family:MicrosoftYaHei-Bold}.header-wrap .button[data-v-103e8ab5]{height:26px;width:82px;line-height:2px;color:#2184c5;background-color:transparent;font-family:FZLTZCHK--GBK1-0;font-weight:Regular}.header-wrap .button[data-v-103e8ab5]:hover{color:#fff;background-color:#2184c5}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/yxCms/view/newsPublicity/header.vue"],names:[],mappings:"AACA,8BACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,gCAAiC,AACjC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,gCACE,WAAY,AACZ,gBAAkB,AAClB,+BAAiC,CAClC,AACD,sCACE,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,cAAe,AACf,6BAA8B,AAC9B,6BAA8B,AAC9B,mBAAqB,CACtB,AACD,4CACE,WAAY,AACZ,wBAA0B,CAC3B",file:"header.vue",sourcesContent:["\n.header-wrap[data-v-103e8ab5] {\n  width: 100%;\n  height: 49px;\n  line-height: 50px;\n  font-size: 14px;\n  border-bottom: 1px solid #2184c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.header-wrap p[data-v-103e8ab5] {\n  color: #555;\n  font-weight: bold;\n  font-family: MicrosoftYaHei-Bold;\n}\n.header-wrap .button[data-v-103e8ab5] {\n  height: 26px;\n  width: 82px;\n  line-height: 2px;\n  color: #2184c5;\n  background-color: transparent;\n  font-family: FZLTZCHK--GBK1-0;\n  font-weight: Regular;\n}\n.header-wrap .button[data-v-103e8ab5]:hover {\n  color: #fff;\n  background-color: #2184c5;\n}"],sourceRoot:""}])},1437:function(e,t,a){var n=a(1417);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1322)("31bc3aec",n,!0,{})},1458:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("p",[e._v(e._s(e.headerTitle.title))]),e._v(" "),a("el-row",[a("el-button",{staticClass:"button",attrs:{type:"primary",plain:""},on:{click:function(t){e.toPage()}}},[e._v(e._s(e.headerTitle.button))])],1)],1)},staticRenderFns:[]}},488:function(e,t,a){function n(e){a(1437)}var o=a(4)(a(1378),a(1458),n,"data-v-103e8ab5",null);e.exports=o.exports}});
//# sourceMappingURL=80.9f135d938a23bf4c91d1.js.map