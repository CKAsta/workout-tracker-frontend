(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(e,t,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(97).default)("8d8b20fa",content,!0,{sourceMap:!1})},295:function(e,t,n){"use strict";n(285)},296:function(e,t,n){var r=n(96)(!1);r.push([e.i,"body{padding-bottom:0}.signup{width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.signup__header{font-size:32px}.signup__form{display:flex;flex-direction:column;margin-top:30px;margin-bottom:100px}.signup__form--input{width:250px;background-color:#f5f5f5;margin-top:10px;outline:none}.signup__form--button,.signup__form--input{padding:20px 14px;border:none;border-radius:2px}.signup__form--button{width:278px;margin-top:20px;background-color:#2c4551;font-weight:600;color:#fff;font-size:16px}.signup__form--button:hover{background-color:#1a2930;color:#fff;cursor:pointer}",""]),e.exports=r},319:function(e,t,n){"use strict";n.r(t);var r,o=n(136),m=n(9),l=(n(41),n(45)),c={data:function(){return{form:{name:"",email:"",password:""}}},mounted:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$apolloHelpers.onLogout();case 2:case"end":return t.stop()}}),t)})))()},methods:{signup:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,m,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form,t.prev=1,t.next=4,e.$apollo.mutate({mutation:Object(l.a)(r||(r=Object(o.a)(["\n            mutation($name: String!, $email: String!, $password: String!) {\n              signup(name: $name, email: $email, password: $password) {\n                token\n              }\n            }\n          "]))),variables:n});case 4:return m=t.sent,c=m.data.signup.token,t.next=8,e.$apolloHelpers.onLogin(c);case 8:e.$router.push("/profile"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},f=(n(295),n(44)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"signup"},[n("h1",{staticClass:"signup__header"},[e._v("\n    Register\n  ")]),e._v(" "),n("form",{staticClass:"signup__form",on:{submit:function(t){return t.preventDefault(),e.signup()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"signup__form--input",attrs:{id:"name",type:"text",placeholder:"Name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"signup__form--input",attrs:{id:"email",type:"text",placeholder:"E-Mail"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"signup__form--input",attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"signup__form--button",attrs:{type:"submit"}},[e._v("\n        Register\n      ")])])}],!1,null,null,null);t.default=component.exports}}]);