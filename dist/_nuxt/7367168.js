(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{255:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(97).default)("e58b724e",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(41),{methods:{onLogout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$apolloHelpers.onLogout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}}}),c=(r(264),r(44)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navigation"},[o("nuxt-link",{staticClass:"navigation__link",attrs:{tag:"img",src:r(260),to:"/profile"}}),t._v(" "),o("nuxt-link",{staticClass:"navigation__link",attrs:{tag:"img",src:r(261),to:"/profile/workouts"}}),t._v(" "),o("nuxt-link",{staticClass:"navigation__link",attrs:{tag:"img",src:r(262),to:"/profile/history"}}),t._v(" "),o("img",{staticClass:"navigation__link",attrs:{src:r(263)},on:{click:function(e){return t.onLogout()}}})],1)}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,r){"use strict";var o=r(15),n=r(8),c=r(98),A=r(20),l=r(17),d=r(46),f=r(189),m=r(70),w=r(10),x=r(72),k=r(71).f,h=r(33).f,_=r(19).f,v=r(258).trim,E="Number",C=n.Number,R=C.prototype,U=d(x(R))==E,I=function(t){var e,r,o,n,c,A,l,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=v(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+d}for(A=(c=d.slice(2)).length,l=0;l<A;l++)if((code=c.charCodeAt(l))<48||code>n)return NaN;return parseInt(c,o)}return+d};if(c(E,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var O,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(U?w((function(){R.valueOf.call(r)})):d(r)!=E)?f(new C(I(e)),r,N):I(e)},y=o?k(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),V=0;y.length>V;V++)l(C,O=y[V])&&!l(N,O)&&_(N,O,h(C,O));N.prototype=R,R.constructor=N,A(n,E,N)}},258:function(t,e,r){var o=r(23),n="["+r(259)+"]",c=RegExp("^"+n+n+"*"),A=RegExp(n+n+"*$"),l=function(t){return function(e){var r=String(o(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(A,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},259:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},260:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACw0lEQVRYw+2Xv0pjQRTGT0QkSlRQFEWEFGItKMRNlWpZ2G3VN7AwoBJBg02KgHmC5AXELpWxUPENLBR9AhX8X5lGDfjbYu9M7p37J6OBwIKnnPPdc2bOnO/Md0W+7T8wYqTIU+WCWwBuuaBKnhSx9oNPUOKGMLuhxMTXgw9R5pVW9kqZoa+EX+QZW3tm8XPBu6l4ArxxTJYMUyRIMEWGLMe8eTAVum3D91JzfXhPlv5AXD9Z7l3IGr12uz9w1bdAIhKdoOC6pwOLU7iKc0/a6sRp1zkqrcBLGnrJpMczQpFz6tQ5p8iIxzfJpf5uKSr8ME96997wC7x4rvSFBSOFOsUTw+EJyrr2aSP8h681P4wUaX0X5XDWKkjBsz5q7L55ilEPrqC3F8xudhzAnbdzKGo2bDHGGFuaAUWjo+6c9Z2g8F1cO+4Vw3PmrG/qlU1n5cxArjjr13T5E6T0PgcNjyrQuF4ZV0UykIP6bCl/grzjOvR5rBOIcOh48v4EVceV9XmsSyRC1vFU/QkUVTI+j+Uli4iQUTT1J1AUm/Z5LNtURIRpRTd/AsWBgMlpQzQ9YR0uhCfoC+RIi1GhcX3hCVSJkiE8jxh2LlQyvETqkufbEgnz4Zes2nS9rQTr4W2qiLbfVoL9cKKpUVH3jYoYs+TY5ZQHAB44ZZccs6bwYpB6+KhoDrsN1+ocFR5D5cojFeZc6I2IYeca11fERUSY4cRKFZ0wIyJCnKuIce15cEoibPNuLbze2Rah1OLBcT2ZDfYMWtVY5QcTIo7wWqVmUG+PRosn0/PoN+2IP8Fqh25+6/HctKhH3yNb/vXLr5aN+dOj7qJliyG8YNmq95fdCvVz0rFBiZ5IdA8lXXs76egTv9fkGAjEDZDT3LEXv4HyvU6NNdIkiRMnSZo1apq1n5XvHfgB6cgvVAd+AjvyG/ttHbC/9FcDTV/ZtdQAAAAASUVORK5CYII="},261:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAZ0lEQVRYw+3UQQrAIAxEUTd6cxMvaq7xu2ld1U0hhZZ5SwkMJDiliMibaDhB4LScgMFlnC8P7QLmmpgfDUhfUfaRRdRF6iJ1kfykiypGEBg1J8DXT3F10X2ArQnLCah0gqAnHVlEshxlGFtivIWEbwAAAABJRU5ErkJggg=="},262:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB80lEQVRYw+2XvUoDQRCAF6NWipGAdlbxwCdQ0cZY2mivrWAhgqU/F7AXfAIlpRa2YnEGkXQRq4BEUvgEgloZ8LPImOwld3t758UqU97OzDc7uzM7p9RABvJvwiRbnFOmzgcf1ClzzhaT6TjfwKNJkDTx2Pib8yUqREmFpWTOM5xhK2dk4rrPcutzUcWlQJ4xxshTwKXqW78lG899TTO+xAnUcrjUtGrWCDJa9A3mjbrzNLRd2CVKy/0duUjtHHeds7C7OR33I1YBjWiI6BvVvpiN6Oi1XfwmqhJdVi35Dsp9aynkLL7F0lx6eKJ2FbgaClCKK7H0zD2nKfE7sQGO7KFp6FFsShSPIesGgFI8ivVmOKAkKm4igCvWpXBAWVRWEgFWxLocDngWFScRwBHr53DAu6iMJwKMi/W7/3PR2IiLvQC2GYoBMCLcoB0AVRZipSgE0XOXWOOlXekXTMU45ADEcWAaRjnkUzTe2GPY+pp2IY4M9T7TbgvwEKPQNMRRZP8syJu3G69VtBCHVi16mH3uO2+YVbNTihMOEs0gtu064fxk/+B0p6EPT6bvRCpMp/7odx34K8upjy1KKcWOVhPXzKU6eCmlFBPc+ArviSKrzKY0Osp8d9rH4Vcgizz0bXxvQ9bx+OrTD8i//EINZCBG+QGnYh3crdUgYAAAAABJRU5ErkJggg=="},263:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAnUlEQVRYw+2Xuw2AMAxE2YM1+EyGRAOeJqNBhQQbHIGCjkCcHBKSX597Uiw7TlEYRmZQwmFGgNT4BQ+kCRzAFUxsQY4QE5hAIYBAiAIffyAkAfqrA4UjqLBGKFRXVEcolEVusL1U3AkQg7AFIcU/BJK/yG1ykTPFqxotJl4l6Mijwp8ZqMPuPDVSx7U9mSb4evmlr+/sDwj9C2UYKnaLViNIIVNySwAAAABJRU5ErkJggg=="},264:function(t,e,r){"use strict";r(255)},265:function(t,e,r){var o=r(96)(!1);o.push([t.i,".navigation{width:100%;height:80px;display:flex;justify-content:space-evenly;align-items:center;background-color:#1a2930;position:fixed;bottom:0}@media screen and (min-width:1023px){.navigation{left:0;width:80px;height:100%;flex-direction:column;justify-content:flex-start}}.navigation__link{width:28px;height:28px}@media screen and (min-width:1023px){.navigation__link{margin-top:50px}}",""]),t.exports=o},266:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAcklEQVRYw+2VwQ2AIBAECT8apRh6oRBq4jF+1PDwY+IawZ0CmMDtLSEYY07YmVdwSK6kd7HgOYF8yGbRLpINeji/626RaEAWLRqRChTZJlOAShQJyEAjybqI/l6K3Efuoq+naBRIPv25BdInWidFxvyQDRoCVbQLhJFUAAAAAElFTkSuQmCC"},267:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB4klEQVRYw+2XvS4EURTHL7bADAUadivZeAQ0kn0ArYg32BGVasludESPrESnXQ0J8RY2W2uQkbBRaHYV8lO4cw3zdWcmbiJx2nPu+d/7P59XiH/5A8Igi2xzRodHAFzatKgxz0B+5yX2eSBK7thlJrvzSZq8kSR9DpjI4n6NLrryzEo65wWOf9zyGocKZWxsylRwuKb/zeaQgq77US59B10c7FA7GwfXZ3nBiN7tv9z3aGDFWls06Pkgkl9B03f3Ba0XL/jecZQcWk/aFLVjVqStzq3GJ2ZX3b6Usl5clVHRScuR4j6UnE9lJFFeLA6jb+GVVT3CIgZACOoqqcPJZU/RY2UCsBRNu+Et7V6qq5EuYgGEoKp61GAYh94DxzMDjKvqDsaQLam6inGQACAEV9JLLahqSdV6LoB16aUVVHWkqpILoCK9dIKqZ6maywUw55VbUOWFZywXwJiXKjkAmM8GoE0R75wwlZ4inSAvcyutXthgKF2QNdJUCIbZUU3thqU0aapRaNJylnPV/U+/ry1xhabRKkLJemVTr1VoNLsIsppazU6nXYeS9eRNsIR2rTNwQk9Naw+c5JGZsFskjUwDQ//X1xYDi5eB1fHXl18D67uBD4iRL5SBT6CRb+y/GJAPuhqm9ZEfGf4AAAAASUVORK5CYII="},269:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(97).default)("d02db79e",content,!0,{sourceMap:!1})},273:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAArElEQVRYhe3SwQkCMRCF4YEUsqllwW4W9m4VWkT6ECwkPSzi0edB0HGTXOQNeHivgO9nYMw07Q+GCRfccEaK4TMqXisBCcdHJHY8P4EF7ciJYydxYsAZ8zCxMfiKOw6DxJXBAxgkKiYO309UZB7fJuj8d2Jh8gUrHvsEk09mWN0VM59PKO5zsnjx4sWLfwdiebNg3gVi+E8giHcX+PH4boDJdwJcvgmweU37cU8NsE+AqO6OQAAAAABJRU5ErkJggg=="},274:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAxklEQVRYw+3WMQ4BcRDF4UexrV7iAOII4hAaZ1C4g8QhxCkUziCOIA4g0YpuC34q8Q8684iYd4D9kt23MyNlMpk/CEvaXgCOjGk4AYA1XS8ANVMqJwCwpe8F4MyclhMA2DN0AAsuBRJX3tsTJQbsCiKqvHdAomJGXSAR5S0BSaLHpiDeL+8jINFkwimsvM+AJNFhFVTe14AkMeIQUN4vAdZXZP7I1pqafzTzqLAPO/+4/sjCsa5M89K3ni3mw8t9OmYymR/IFSdSCSnkQyPfAAAAAElFTkSuQmCC"},275:function(t,e,r){"use strict";r(269)},276:function(t,e,r){var o=r(96)(!1);o.push([t.i,".workout-card{height:120px;flex-direction:column;background-color:#2c4551;border-radius:3px;color:#fff}.workout-card,.workout-card__header{display:flex;justify-content:space-between}.workout-card__header{align-items:center;margin-top:10px}.workout-card__edit{width:24px;height:24px;margin:0 10px 0 0}.workout-card__name{margin:0 0 0 10px;font-size:20px;font-weight:500}.workout-card__info{display:flex;align-items:center;margin:0 0 10px 10px}.workout-card__info--image{width:16px;height:16px}.workout-card__info--text{font-size:12px;margin-left:5px;margin-right:20px}.workout-card__info--start{width:24px;height:24px;margin-left:auto;margin-right:15px}",""]),t.exports=o},281:function(t,e,r){"use strict";r.r(e);var o,n=r(136),c=r(9),A=(r(41),r(257),r(45)),l={props:{name:{type:String,default:"Workout"},estimatedTime:{type:Number,default:90},numberOfExercises:{type:Number,default:8},workoutId:{type:Number,default:0}},methods:{startWorkout:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$apollo.mutate({mutation:Object(A.a)(o||(o=Object(n.a)(["\n            mutation($workoutId: ID!) {\n              addLog(workoutId: $workoutId) {\n                id\n              }\n            }\n          "]))),variables:{workoutId:t}});case 3:c=r.sent,l=c.data.addLog.id,e.$router.push({name:"Profile-Workouts-StartWorkout-log-id",params:{log:l,id:t}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},d=(r(275),r(44)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"workout-card"},[o("div",{staticClass:"workout-card__header"},[o("h2",{staticClass:"workout-card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"workout-card__edit",attrs:{tag:"img",src:r(273),to:{name:"Profile-Workouts-EditWorkout-id",params:{id:t.workoutId}}}})],1),t._v(" "),o("div",{staticClass:"workout-card__info"},[o("img",{staticClass:"workout-card__info--image",attrs:{src:r(266)}}),t._v(" "),o("span",{staticClass:"workout-card__info--text"},[t._v(t._s(t.numberOfExercises)+" Exercises")]),t._v(" "),o("img",{staticClass:"workout-card__info--image",attrs:{src:r(267)}}),t._v(" "),o("span",{staticClass:"workout-card__info--text"},[t._v(t._s(t.estimatedTime)+" Minutes")]),t._v(" "),o("img",{staticClass:"workout-card__info--start",attrs:{src:r(274)},on:{click:function(e){return t.startWorkout(t.workoutId)}}})])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(97).default)("5d0fbcfc",content,!0,{sourceMap:!1})},299:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAl0lEQVRYw+2WSw6AIAwFX+IZuSIJZ2RRF67EX0FmoemsYV4AbSsFQfBfFmUl9+qkrKVPX2SqzoikKlPpicgymTNi05tMWR1Hrs4I/8qhjcN63+ZX+mfBa/29ZIr+WjRNfy6bqj8Kp+vbCEC/j0D0bQSgxwPgK4IfGf5M4R8NLhVwsYPLNdxw4JaJN318bMEHL3x0DILgW6zbiArszHKr4QAAAABJRU5ErkJggg=="},300:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAaSURBVHgBY6AWYD5Adcr+//8/WCla2EclAABqEh8tob6sVQAAAABJRU5ErkJggg=="},301:function(t,e,r){"use strict";r(287)},302:function(t,e,r){var o=r(96)(!1);o.push([t.i,'.workouts{z-index:1;display:flex;flex-direction:column;width:90%;margin:0 auto}@media screen and (min-width:1023px){.workouts{width:30%}}.workouts__header{font-size:32px;color:#212121;margin:20px 0 0}.workouts__cards{z-index:1;margin-top:15px}.workouts__add{z-index:0;display:flex;justify-content:center;align-items:center;width:56px;height:56px;margin-top:25px;color:#fff;font-size:32px;background-color:#29b6f6;border:none;border-radius:50%;align-self:center;margin-bottom:25px}.workouts__add:hover{background-color:#0086c3}.workouts__add--icon{width:32px;height:32px}.workouts__create{height:250px;width:325px;z-index:3;background-color:#fff;border-radius:3px;font-size:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:45%;left:50%;transform:translate(-50%,-50%);padding:10px 0 15px}.workouts__create-header{width:100%;display:flex;justify-content:space-around;align-items:center}.workouts__create--form__input{width:250px;margin-top:10px;padding:20px 14px;border:none;background-color:#f5f5f5;border-radius:2px;outline:none}.workouts__create--buttons{width:278px;display:flex;justify-content:space-evenly;margin-top:20px}.workouts__create--buttons__create{width:278px;background-color:#66bb6a;border-radius:3px;border:none;padding:20px 14px;font-size:16px;color:#fff}.workouts__create--buttons__close{border-radius:50%;width:24px;height:24px;border:none;font-size:12px;color:#fff;display:flex;justify-content:center;align-items:center;align-self:flex-end;margin-right:20px;background-color:#f5f5f5}.workouts__create--buttons__close-img{width:20px;height:20px}.curtain{content:" ";z-index:2;display:block;position:absolute;height:110vh;top:0;left:0;right:0;background:rgba(0,0,0,.7)}',""]),t.exports=o},314:function(t,e,r){"use strict";r.r(e);var o,n,c=r(136),A=r(9),l=(r(41),r(45)),d=r(256),f=r(281),m={components:{Navigation:d.default,WorkoutCard:f.default},middleware:["authenticated"],data:function(){return{me:{},isOverlayActive:!1,form:{name:""}}},methods:{openOverlay:function(){this.isOverlayActive=!0},closeOverlay:function(){this.isOverlayActive=!1},createWorkout:function(){var t=this;return Object(A.a)(regeneratorRuntime.mark((function e(){var r,n,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.form,e.prev=1,e.next=4,t.$apollo.mutate({mutation:Object(l.a)(o||(o=Object(c.a)(["\n            mutation($name: String!) {\n              addWorkout(name: $name) {\n                id\n              }\n            }\n          "]))),variables:r});case 4:n=e.sent,A=n.data.addWorkout.id,t.$router.push({name:"Profile-Workouts-EditWorkout-id",params:{id:A}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},apollo:{me:{query:Object(l.a)(n||(n=Object(c.a)(["\n        query {\n          me{\n            id\n            workouts{\n              id\n              name\n              exercisesOnWorkouts {\n                id\n              }\n            }\n          }\n        }\n      "])))}}},w=(r(301),r(44)),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:{curtain:t.isOverlayActive}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isOverlayActive,expression:"isOverlayActive"}],staticClass:"workouts__create"},[o("button",{staticClass:"workouts__create--buttons__close",on:{click:function(e){return t.closeOverlay()}}},[o("img",{staticClass:"workouts__create--buttons__close-img",attrs:{src:r(299)}})]),t._v(" "),t._m(0),t._v(" "),o("form",{staticClass:"workouts__create--form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"workouts__create--form__input",attrs:{id:"name",type:"text",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"workouts__create--buttons"},[o("button",{staticClass:"workouts__create--buttons__create",on:{click:function(e){return t.createWorkout()}}},[t._v("\n        Create\n      ")])])]),t._v(" "),o("div",{staticClass:"workouts"},[o("h1",{staticClass:"workouts__header"},[t._v("\n      Workouts\n    ")]),t._v(" "),t._l(t.me.workouts,(function(t){return o("WorkoutCard",{key:t.id,staticClass:"workouts__cards",attrs:{name:t.name,"estimated-time":10*t.exercisesOnWorkouts.length,"number-of-exercises":t.exercisesOnWorkouts.length,"workout-id":parseInt(t.id)}})})),t._v(" "),o("button",{staticClass:"workouts__add",on:{click:t.openOverlay}},[o("img",{staticClass:"workouts__add--icon",attrs:{src:r(300)}})])],2),t._v(" "),o("Navigation")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"workouts__create-header"},[r("h2",{staticClass:"workouts__create--title"},[t._v("\n        Enter Workout Name\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{WorkoutCard:r(281).default,Navigation:r(256).default})}}]);