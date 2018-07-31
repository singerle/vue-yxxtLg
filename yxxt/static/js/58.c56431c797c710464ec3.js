webpackJsonp([58],{1334:function(e,r,t){"use strict";function a(e,r,a){var o={processId:e,pageNum:r,pageSize:a};return o=g.a.stringify(o),t.i(f.a)({url:h.a+"/enroll/permission/showGroups",method:"post",data:o})}function o(e){var r={groupId:e};return r=g.a.stringify(r),t.i(f.a)({url:h.a+"/enroll/permission/deleteGroup",method:"post",data:r})}function n(e,r){var a={groupId:e,newName:r};return a=g.a.stringify(a),t.i(f.a)({url:h.a+"/enroll/roleManage/delete",method:"post",data:a})}function i(e,r){var a={processId:e,groupName:r};return a=g.a.stringify(a),t.i(f.a)({url:h.a+"/enroll/permission/addPermissionGroup",method:"post",data:a})}function s(e,r){var a={enrollId:e,groupId:r};return a=g.a.stringify(a),t.i(f.a)({url:h.a+"/enroll/sceneAndApplication/selectBycd",method:"post",data:a})}function l(e,r,a){var o={enrollId:e,groupId:r,roleId:a};return o=g.a.stringify(o),t.i(f.a)({url:h.a+"/enroll/role/setUp",data:o,method:"post"})}function d(e,r,a){var o={groupId:e,pageNum:r,pageSize:a};return o=g.a.stringify(o),t.i(f.a)({url:h.a+"/enroll/permission/showmembers",method:"post",data:o})}function u(e,r){var a={userId:e,groupId:r};return a=g.a.stringify(a),t.i(f.a)({url:h.a+"/enroll/permission/deletemembers",method:"post",data:a})}function c(e,r,a){var o={id:e,groupId:r,employeeNumber:a};return o=g.a.stringify(o),t.i(f.a)({url:h.a+"/enroll/permission/addmember",method:"post",data:o})}function p(e,r){var a={enrollId:r,groupId:e};return a=g.a.stringify(a),t.i(f.a)({url:h.a+"/enroll/role/selectByDept",method:"post",data:a})}function m(e,r,a){var o={list:a,enrollId:e,groupId:r};return o=g.a.stringify(o),t.i(f.a)({url:h.a+"/enroll/role/insertRange",method:"post",data:o})}r.j=a,r.k=o,r.e=n,r.i=i,r.f=s,r.g=l,r.b=d,r.a=u,r.h=c,r.d=p,r.c=m;var f=t(201),A=t(202),g=t.n(A),h=t(200)},1553:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(16),o=t.n(a),n=t(9),i=t(1334);r.default={data:function(){return{form:{teacherId:""},rules:{teacherId:[{required:!0,message:"教师职工号不能为空",trigger:"blur"}]}}},methods:{submit:function(e){var r=this;this.$refs[e].validate(function(e){if(e){var a=r.loading();t.i(i.h)(r.teacherItem.enrollLogicId,r.teacher.groupId,r.form.teacherId).then(function(e){a.close(),e=e.data,"200"===e.state?(r.MessageSuccess(e.message),r.goBack()):r.MessageError(e.message)}).catch(function(){a.close(),r.MessageError})}})},goBack:function(){this.$router.push({path:"/yingxin/member"})}},mounted:function(){if(!this.teacher.groupName||""===this.teacher.groupName)return void this.goBack()},computed:o()({},t.i(n.b)(["teacher","teacherItem"]))}},1596:function(e,r,t){r=e.exports=t(1321)(!0),r.push([e.i,".vue-header[data-v-4b9464c2]{padding:15px 0}.vue-header .btn[data-v-4b9464c2]{float:right;padding:5px;border:1px solid #2184c5;border-radius:3px;color:#2184c5;cursor:pointer}.vue-header .crumbs[data-v-4b9464c2]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}","",{version:3,sources:["D:/vue-yxxtlg/src/pages/yxCms/view/yingxin/teacherOff/addmember.vue"],names:[],mappings:"AACA,6BACE,cAAgB,CACjB,AACD,kCACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,cAAe,AACf,cAAgB,CACjB,AACD,qCACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB",file:"addmember.vue",sourcesContent:["\n.vue-header[data-v-4b9464c2] {\n  padding: 15px 0;\n}\n.vue-header .btn[data-v-4b9464c2] {\n  float: right;\n  padding: 5px;\n  border: 1px solid #2184c5;\n  border-radius: 3px;\n  color: #2184c5;\n  cursor: pointer;\n}\n.vue-header .crumbs[data-v-4b9464c2] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}"],sourceRoot:""}])},1671:function(e,r,t){var a=t(1596);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(1322)("f4767248",a,!0,{})},1756:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-container",[t("el-header",[t("el-row",{staticClass:"vue-header"},[t("el-col",[t("span",[e._v("成员管理")]),e._v(" "),t("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v(e._s(e.teacherItem.processName))]),e._v(" "),t("el-breadcrumb-item",[e._v("教师办公配置")]),e._v(" "),t("el-breadcrumb-item",[e._v(e._s(e.teacher.groupName))]),e._v(" "),t("el-breadcrumb-item",[e._v("成员管理")])],1)],1)],1)],1),e._v(" "),t("el-main",[t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"教师职工号",prop:"teacherId"}},[t("el-input",{attrs:{type:"text",placeholder:"请输入教师职工号","auto-complete":"off"},model:{value:e.form.teacherId,callback:function(r){e.$set(e.form,"teacherId",r)},expression:"form.teacherId"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submit("form")}}},[e._v("添加")]),e._v(" "),t("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)],1)],1),e._v(" "),t("el-footer")],1)},staticRenderFns:[]}},573:function(e,r,t){function a(e){t(1671)}var o=t(4)(t(1553),t(1756),a,"data-v-4b9464c2",null);e.exports=o.exports}});
//# sourceMappingURL=58.c56431c797c710464ec3.js.map