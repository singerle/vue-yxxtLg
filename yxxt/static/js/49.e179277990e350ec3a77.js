webpackJsonp([49],{1334:function(e,t,a){"use strict";function r(e,t,r){var n={processId:e,pageNum:t,pageSize:r};return n=m.a.stringify(n),a.i(h.a)({url:v.a+"/enroll/permission/showGroups",method:"post",data:n})}function n(e){var t={groupId:e};return t=m.a.stringify(t),a.i(h.a)({url:v.a+"/enroll/permission/deleteGroup",method:"post",data:t})}function o(e,t){var r={groupId:e,newName:t};return r=m.a.stringify(r),a.i(h.a)({url:v.a+"/enroll/roleManage/delete",method:"post",data:r})}function i(e,t){var r={processId:e,groupName:t};return r=m.a.stringify(r),a.i(h.a)({url:v.a+"/enroll/permission/addPermissionGroup",method:"post",data:r})}function s(e,t){var r={enrollId:e,groupId:t};return r=m.a.stringify(r),a.i(h.a)({url:v.a+"/enroll/sceneAndApplication/selectBycd",method:"post",data:r})}function l(e,t,r){var n={enrollId:e,groupId:t,roleId:r};return n=m.a.stringify(n),a.i(h.a)({url:v.a+"/enroll/role/setUp",data:n,method:"post"})}function c(e,t,r){var n={groupId:e,pageNum:t,pageSize:r};return n=m.a.stringify(n),a.i(h.a)({url:v.a+"/enroll/permission/showmembers",method:"post",data:n})}function u(e,t){var r={userId:e,groupId:t};return r=m.a.stringify(r),a.i(h.a)({url:v.a+"/enroll/permission/deletemembers",method:"post",data:r})}function d(e,t,r){var n={id:e,groupId:t,employeeNumber:r};return n=m.a.stringify(n),a.i(h.a)({url:v.a+"/enroll/permission/addmember",method:"post",data:n})}function p(e,t){var r={enrollId:t,groupId:e};return r=m.a.stringify(r),a.i(h.a)({url:v.a+"/enroll/role/selectByDept",method:"post",data:r})}function f(e,t,r){var n={list:r,enrollId:e,groupId:t};return n=m.a.stringify(n),a.i(h.a)({url:v.a+"/enroll/role/insertRange",method:"post",data:n})}t.j=r,t.k=n,t.e=o,t.i=i,t.f=s,t.g=l,t.b=c,t.a=u,t.h=d,t.d=p,t.c=f;var h=a(201),g=a(202),m=a.n(g),v=a(200)},1357:function(e,t,a){"use strict";function r(e){var t=[];return e.forEach(function(e){e.check&&t.push(e.id)}),t.join(",")}function n(e){var t=[];return e.forEach(function(e){e.checked&&t.push(e.id),e.children&&e.children.length>0&&e.children.forEach(function(e){e.checked&&t.push(e.id)})}),t.join(",")}t.a=r,t.b=n},1554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(16),n=a.n(r),o=a(1334),i=a(9),s=a(1357);t.default={data:function(){return{tableData:[]}},methods:{_getAllApplication:function(){var e=this;if(!this.teacher.groupName||""===!this.teacher.groupName)return void this.goBack();var t=this.loading();a.i(o.f)(this.teacherItem.enrollLogicId,this.teacher.groupId).then(function(a){t.close(),a=a.data,"200"===a.state?e.tableData=a.data:e.MessageError(a.message)}).catch(function(){t.close(),e.MessageError()})},goBack:function(){this.$router.push({path:"/yingxin/teacher"})},save:function(){var e=this,t=this.loading(),r=a.i(s.a)(this.tableData);a.i(o.g)(this.teacherItem.enrollLogicId,this.teacher.groupId,r).then(function(a){t.close(),a=a.data,"200"===a.state?(e._getAllApplication(),e.MessageSuccess(a.message)):e.MessageError(a.message)}).catch(function(){t.close(),e.MessageError()})}},mounted:function(){this._getAllApplication()},computed:n()({},a.i(i.b)(["teacher","teacherItem"]))}},1631:function(e,t,a){t=e.exports=a(1321)(!0),t.push([e.i,".vue-header .crumbs[data-v-d88577d4]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/yxCms/view/yingxin/teacherOff/authConfig.vue"],names:[],mappings:"AACA,qCACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB",file:"authConfig.vue",sourcesContent:["\n.vue-header .crumbs[data-v-d88577d4] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}"],sourceRoot:""}])},1706:function(e,t,a){var r=a(1631);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(1322)("5ab08be9",r,!0,{})},1792:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",{staticStyle:{padding:"20px"}},[a("el-header",[a("el-row",{staticClass:"vue-header"},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"only-title"},[e._v("权限设置")]),e._v(" "),a("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("迎新配置")]),e._v(" "),a("el-breadcrumb-item",[e._v("教师办公配置")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.teacher.groupName))]),e._v(" "),a("el-breadcrumb-item",[e._v("权限设置")])],1)],1)],1)],1),e._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:!0}},[a("el-table-column",{attrs:{align:"center",prop:"name",label:"成员",width:"700"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{attrs:{label:"可操作"},model:{value:t.row.check,callback:function(a){e.$set(t.row,"check",a)},expression:"scope.row.check"}})]}}])})],1)],1),e._v(" "),a("el-footer",[a("el-row",[a("el-col",{attrs:{offset:10,span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},574:function(e,t,a){function r(e){a(1706)}var n=a(4)(a(1554),a(1792),r,"data-v-d88577d4",null);e.exports=n.exports}});
//# sourceMappingURL=49.e179277990e350ec3a77.js.map