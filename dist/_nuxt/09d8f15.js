(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{257:function(e,t,r){"use strict";var n=r(15),o=r(8),c=r(98),l=r(20),d=r(17),f=r(46),x=r(189),_=r(70),m=r(10),h=r(72),v=r(71).f,I=r(33).f,w=r(19).f,E=r(258).trim,k="Number",y=o.Number,N=y.prototype,A=f(h(N))==k,O=function(e){var t,r,n,o,c,l,d,code,f=_(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=E(f)).charCodeAt(0))||45===t){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(k,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var C,S=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof S&&(A?m((function(){N.valueOf.call(r)})):f(r)!=k)?x(new y(O(t)),r,S):O(t)},$=n?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;$.length>j;j++)d(y,C=$[j])&&!d(S,C)&&w(S,C,I(y,C));S.prototype=N,N.constructor=S,l(o,k,S)}},258:function(e,t,r){var n=r(23),o="["+r(259)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},259:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},270:function(e,t,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(97).default)("2422f851",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r(270)},279:function(e,t,r){var n=r(96)(!1);n.push([e.i,".hide{display:none!important}.exercise-selection{display:flex;flex-direction:column;justify-content:space-between;z-index:3;background-color:#fff;width:300px;border:none;border-radius:3px;padding:20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (min-width:1023px){.exercise-selection{height:380px}}.exercise-selection__list{width:100%;border:none;margin-bottom:10px;outline:none;padding:20px 14px;background-color:#f5f5f5}@media screen and (min-width:1023px){.exercise-selection__list{height:250px}}.exercise-selection__list-item{padding:5px 7px;border-radius:2px;font-size:14px}.exercise-selection__list-close{background-color:#ef5350}.exercise-selection__list-add,.exercise-selection__list-close{border:none;border-radius:3px;color:#fff;padding:20px 14px;font-size:14px}.exercise-selection__list-add{width:100%;background-color:#66bb6a;margin-bottom:10px}",""]),e.exports=n},282:function(e,t,r){"use strict";r.r(t);var n,o,c=r(136),l=r(9),d=(r(41),r(257),r(45)),f={props:{showOverlay:{type:Boolean,default:!1},workoutId:{type:Number,default:0}},data:function(){return{getAllExercises:{},exerciseId:null}},methods:{toggleShowOverlay:function(){this.$emit("toggleShowOverlay")},addExerciseOnWorkout:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.mutate({mutation:Object(d.a)(n||(n=Object(c.a)(["\n              mutation($exerciseId: ID!, $workoutId: ID!) {\n                addExercisesOnWorkouts(exerciseId: $exerciseId, workoutId: $workoutId) {\n                  id\n                }\n              }\n            "]))),variables:{exerciseId:e.exerciseId,workoutId:e.workoutId}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:window.location.reload(!0);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},apollo:{getAllExercises:{query:Object(d.a)(o||(o=Object(c.a)(["\n        query getAllExercises {\n          getAllExercises {\n            id\n            name\n          }\n        }\n      "])))}}},x=(r(278),r(44)),component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"exercise-selection",class:{hide:!e.showOverlay}},[r("form",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.exerciseId,expression:"exerciseId"}],staticClass:"exercise-selection__list",attrs:{type:"text",size:e.getAllExercises.length},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.exerciseId=t.target.multiple?r:r[0]}}},e._l(e.getAllExercises,(function(t){return r("option",{key:t.id,staticClass:"exercise-selection__list-item",domProps:{value:t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0),e._v(" "),r("button",{staticClass:"exercise-selection__list-add",attrs:{type:"submit"},on:{click:function(t){return e.addExerciseOnWorkout()}}},[e._v("\n      Add\n    ")])]),e._v(" "),r("button",{staticClass:"exercise-selection__list-close",attrs:{type:"button"},on:{click:function(t){return e.toggleShowOverlay()}}},[e._v("\n    Close\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);