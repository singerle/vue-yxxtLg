webpackJsonp([55],{1334:function(e,t,a){"use strict";function r(e,t,r){var n={processId:e,pageNum:t,pageSize:r};return n=h.a.stringify(n),a.i(g.a)({url:A.a+"/enroll/permission/showGroups",method:"post",data:n})}function n(e){var t={groupId:e};return t=h.a.stringify(t),a.i(g.a)({url:A.a+"/enroll/permission/deleteGroup",method:"post",data:t})}function o(e,t){var r={groupId:e,newName:t};return r=h.a.stringify(r),a.i(g.a)({url:A.a+"/enroll/roleManage/delete",method:"post",data:r})}function s(e,t){var r={processId:e,groupName:t};return r=h.a.stringify(r),a.i(g.a)({url:A.a+"/enroll/permission/addPermissionGroup",method:"post",data:r})}function i(e,t){var r={enrollId:e,groupId:t};return r=h.a.stringify(r),a.i(g.a)({url:A.a+"/enroll/sceneAndApplication/selectBycd",method:"post",data:r})}function l(e,t,r){var n={enrollId:e,groupId:t,roleId:r};return n=h.a.stringify(n),a.i(g.a)({url:A.a+"/enroll/role/setUp",data:n,method:"post"})}function c(e,t,r){var n={groupId:e,pageNum:t,pageSize:r};return n=h.a.stringify(n),a.i(g.a)({url:A.a+"/enroll/permission/showmembers",method:"post",data:n})}function u(e,t){var r={userId:e,groupId:t};return r=h.a.stringify(r),a.i(g.a)({url:A.a+"/enroll/permission/deletemembers",method:"post",data:r})}function d(e,t,r){var n={id:e,groupId:t,employeeNumber:r};return n=h.a.stringify(n),a.i(g.a)({url:A.a+"/enroll/permission/addmember",method:"post",data:n})}function p(e,t){var r={enrollId:t,groupId:e};return r=h.a.stringify(r),a.i(g.a)({url:A.a+"/enroll/role/selectByDept",method:"post",data:r})}function m(e,t,r){var n={list:r,enrollId:e,groupId:t};return n=h.a.stringify(n),a.i(g.a)({url:A.a+"/enroll/role/insertRange",method:"post",data:n})}t.j=r,t.k=n,t.e=o,t.i=s,t.f=i,t.g=l,t.b=c,t.a=u,t.h=d,t.d=p,t.c=m;var g=a(201),f=a(202),h=a.n(f),A=a(200)},1557:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(16),n=a.n(r),o=a(1334),s=a(9);t.default={data:function(){return{page:1,size:10,total:20,tableData:[]}},computed:n()({},a.i(s.b)(["teacher","teacherItem"])),methods:{add:function(){this.$router.push({path:"/yingxin/addmember"})},handleCurrentChange:function(e){this._fetchAllMember()},del:function(e){var t=this;this.$confirm("此操作将永久删除该成员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var r=t.loading();a.i(o.a)(e.userId,t.teacher.groupId).then(function(e){r.close(),e=e.data,"200"===e.state?t.MessageSuccess(e.message):t.MessageError(e.message)})}).catch(function(){loading.close(),t.MessageError(res.message)})},_fetchAllMember:function(){var e=this;if(!this.teacher.groupName||""===this.teacher.groupName)return void this.back();var t=this.loading();a.i(o.b)(this.teacher.groupId,this.page,this.size).then(function(a){t.close(),a=a.data,"200"===a.state?(e.tableData=a.data.rows,e.total=a.data.total):e.MessageError(a.message)}).catch(function(a){t.close(),e.MessageError()})},back:function(){this.$router.push({path:"/yingxin/teacher"})}},mounted:function(){this._fetchAllMember()}}},1599:function(e,t,a){t=e.exports=a(1321)(!0),t.push([e.i,".vue-header .btn[data-v-56341cb4]{float:right;padding:5px;border:1px solid #2184c5;border-radius:3px;color:#2184c5;cursor:pointer}.vue-header .crumbs[data-v-56341cb4]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/yxCms/view/yingxin/teacherOff/member.vue"],names:[],mappings:"AACA,kCACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,cAAe,AACf,cAAgB,CACjB,AACD,qCACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB",file:"member.vue",sourcesContent:["\n.vue-header .btn[data-v-56341cb4] {\n  float: right;\n  padding: 5px;\n  border: 1px solid #2184c5;\n  border-radius: 3px;\n  color: #2184c5;\n  cursor: pointer;\n}\n.vue-header .crumbs[data-v-56341cb4] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}"],sourceRoot:""}])},1674:function(e,t,a){var r=a(1599);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(1322)("c22a2fe4",r,!0,{})},1759:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",{staticStyle:{padding:"20px"}},[a("el-header",[a("el-row",{staticClass:"vue-header"},[a("el-col",{attrs:{span:12}},[a("span",{staticClass:"only-title"},[e._v("成员管理")]),e._v(" "),a("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v(e._s(e.teacherItem.processName))]),e._v(" "),a("el-breadcrumb-item",[e._v("教师办公配置")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.teacher.groupName))]),e._v(" "),a("el-breadcrumb-item",[e._v("成员管理")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("span",{staticClass:"btn",on:{click:e.add}},[e._v("添加成员")]),e._v(" "),a("span",{staticClass:"btn",on:{click:e.back}},[e._v("返回")])])],1)],1),e._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:!0}},[a("el-table-column",{attrs:{align:"center",prop:"userName",label:"成员",width:"700"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作栏"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-footer",[a("el-col",{attrs:{span:6,offset:18}},[a("el-pagination",{attrs:{"current-page":e.page,"page-size":e.size,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.page=t}}})],1)],1)],1)],1)},staticRenderFns:[]}},577:function(e,t,a){function r(e){a(1674)}var n=a(4)(a(1557),a(1759),r,"data-v-56341cb4",null);e.exports=n.exports}});
//# sourceMappingURL=55.fba8a9ddb89e1c95630a.js.map