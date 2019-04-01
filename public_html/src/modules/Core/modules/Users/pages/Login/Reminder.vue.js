/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */
import e from"/src/store/actions.min.js";export default(function(e,r,t,s,n,i,o,a){const l=("function"==typeof t?t.options:t)||{};return l.__file="Reminder.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,n&&(l.functional=!0)),l._scopeId=s,l}({render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("form",{staticClass:"col q-gutter-md q-mx-lg",on:{submit:function(r){return r.preventDefault(),r.stopPropagation(),e.onSubmit(r)}}},[t("q-input",{ref:"reminderUsers",attrs:{type:"text",label:e.$t("LBL_USER"),autocomplete:"off","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"mdi-account"}})]},proxy:!0}]),model:{value:e.reminderUsers,callback:function(r){e.reminderUsers=r},expression:"reminderUsers"}}),e._v(" "),t("q-input",{ref:"reminderEmail",attrs:{type:"text",autocomplete:"off",label:e.$t("LBL_EMAIL"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"mail_outline"}})]},proxy:!0}]),model:{value:e.reminderEmail,callback:function(r){e.reminderEmail=r},expression:"reminderEmail"}}),e._v(" "),t("q-btn",{staticClass:"full-width q-mt-lg",attrs:{size:"lg",label:e.$t("LBL_SEND"),type:"submit",color:"secondary"}}),e._v(" "),t("router-link",{staticClass:"text-secondary float-right",attrs:{to:{name:"LoginForm"}}},[e._v(e._s(e.$t("LBL_TO_CRM")))])],1)},staticRenderFns:[]},0,{name:"Reminder",data:()=>({reminderUsers:"",reminderEmail:""}),methods:{onSubmit(){this.$refs.reminderUsers.validate(),this.$refs.reminderEmail.validate(),this.$refs.reminderUsers.hasError||this.$refs.reminderEmail.hasError?this.formHasError=!0:this.$store.dispatch(e.Core.Users.remind,{reminderUsers:this.reminderUsers,reminderEmail:this.reminderEmail})}},mounted(){this.$store.state.Core.Users.forgotPassword&&!this.$store.state.Core.Users.isBlockedIp||this.$router.replace("/users/login/form")}},"data-v-97996e84",!1));