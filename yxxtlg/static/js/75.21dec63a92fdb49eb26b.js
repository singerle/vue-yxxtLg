webpackJsonp([75],{1558:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ruxueSiteState:"",btnTab:"",title:"入学配置",breadcrumb:"2018年夏季迎新配置"}},methods:{goto:function(t){this.$router.push({path:t})},judgeView:function(){var t=this.$store.getters.ruxueSiteState;this.ruxueSiteState=t,this.breadcrumb=this.$store.getters.ruxueItem.processName,""===t?(this.MessageError("未获取到数据，为您跳回到上一页面"),this.$router.push({path:"/yingxin/process"})):1===t?(this.viewState=!0,this.title="入学配置"):2===t?(this.title="查看入学配置",this.viewState=!1):3===t?(this.viewState=!0,this.title="现场配置"):4===t&&(this.title="查看现场配置",this.viewState=!1)}},mounted:function(){this.judgeView()}}},1643:function(t,e,i){e=t.exports=i(1324)(!0),e.push([t.i,"p[data-v-c31e6162]{color:#555;font-weight:700;display:inline-block;font-family:MicrosoftYaHei-Bold}.crumbs[data-v-c31e6162]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/yxCms/view/yingxin/ruxue.vue"],names:[],mappings:"AACA,mBACE,WAAY,AACZ,gBAAkB,AAClB,qBAAsB,AACtB,+BAAiC,CAClC,AACD,yBACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB",file:"ruxue.vue",sourcesContent:["\np[data-v-c31e6162] {\n  color: #555;\n  font-weight: bold;\n  display: inline-block;\n  font-family: MicrosoftYaHei-Bold;\n}\n.crumbs[data-v-c31e6162] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}"],sourceRoot:""}])},1719:function(t,e,i){var o=i(1643);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(1325)("eed74308",o,!0,{})},1806:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticStyle:{padding:"20px"}},[i("el-header",[i("el-row",[i("el-col",{staticStyle:{"margin-bottom":"28px"}},[i("p",[t._v(t._s(t.title))]),t._v(" "),i("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/yingxin/process"}}},[t._v(t._s(t.breadcrumb))]),t._v(" "),this.title?i("el-breadcrumb-item",[t._v(t._s(t.title))]):t._e()],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"padding-bottom":"10px","border-bottom":"1px #2184C5 solid"}},[i("el-col",[i("el-radio-group",{model:{value:t.btnTab,callback:function(e){t.btnTab=e},expression:"btnTab"}},[i("el-radio-button",{attrs:{label:"应用管理"},nativeOn:{click:function(e){t.goto("/yingxin/ruxue/")}}}),t._v(" "),i("el-radio-button",{attrs:{label:"流程配置"},nativeOn:{click:function(e){t.goto("/yingxin/ruxue/process")}}})],1)],1)],1)],1),t._v(" "),i("el-main",[i("router-view")],1),t._v(" "),i("el-footer")],1)},staticRenderFns:[]}},568:function(t,e,i){function o(t){i(1719)}var n=i(4)(i(1558),i(1806),o,"data-v-c31e6162",null);t.exports=n.exports}});
//# sourceMappingURL=75.21dec63a92fdb49eb26b.js.map