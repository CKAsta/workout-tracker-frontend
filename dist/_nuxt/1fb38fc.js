(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(e,t,n){"use strict";var r=n(15),o=n(8),c=n(98),l=n(20),A=n(17),f=n(46),d=n(189),_=n(70),m=n(10),h=n(72),x=n(71).f,E=n(33).f,w=n(19).f,I=n(258).trim,N="Number",R=o.Number,y=R.prototype,v=f(h(y))==N,C=function(e){var t,n,r,o,c,l,A,code,f=_(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=I(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,A=0;A<l;A++)if((code=c.charCodeAt(A))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(N,!R(" 0o1")||!R("0b1")||R("+0x1"))){for(var S,V=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof V&&(v?m((function(){y.valueOf.call(n)})):f(n)!=N)?d(new R(C(t)),n,V):C(t)},U=r?x(R):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;U.length>k;k++)A(R,S=U[k])&&!A(V,S)&&w(V,S,E(R,S));V.prototype=y,y.constructor=V,l(o,N,V)}},258:function(e,t,n){var r=n(23),o="["+n(259)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),A=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:A(1),end:A(2),trim:A(3)}},259:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},266:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAcklEQVRYw+2VwQ2AIBAECT8apRh6oRBq4jF+1PDwY+IawZ0CmMDtLSEYY07YmVdwSK6kd7HgOYF8yGbRLpINeji/626RaEAWLRqRChTZJlOAShQJyEAjybqI/l6K3Efuoq+naBRIPv25BdInWidFxvyQDRoCVbQLhJFUAAAAAElFTkSuQmCC"},267:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB4klEQVRYw+2XvS4EURTHL7bADAUadivZeAQ0kn0ArYg32BGVasludESPrESnXQ0J8RY2W2uQkbBRaHYV8lO4cw3zdWcmbiJx2nPu+d/7P59XiH/5A8Igi2xzRodHAFzatKgxz0B+5yX2eSBK7thlJrvzSZq8kSR9DpjI4n6NLrryzEo65wWOf9zyGocKZWxsylRwuKb/zeaQgq77US59B10c7FA7GwfXZ3nBiN7tv9z3aGDFWls06Pkgkl9B03f3Ba0XL/jecZQcWk/aFLVjVqStzq3GJ2ZX3b6Usl5clVHRScuR4j6UnE9lJFFeLA6jb+GVVT3CIgZACOoqqcPJZU/RY2UCsBRNu+Et7V6qq5EuYgGEoKp61GAYh94DxzMDjKvqDsaQLam6inGQACAEV9JLLahqSdV6LoB16aUVVHWkqpILoCK9dIKqZ6maywUw55VbUOWFZywXwJiXKjkAmM8GoE0R75wwlZ4inSAvcyutXthgKF2QNdJUCIbZUU3thqU0aapRaNJylnPV/U+/ry1xhabRKkLJemVTr1VoNLsIsppazU6nXYeS9eRNsIR2rTNwQk9Naw+c5JGZsFskjUwDQ//X1xYDi5eB1fHXl18D67uBD4iRL5SBT6CRb+y/GJAPuhqm9ZEfGf4AAAAASUVORK5CYII="},268:function(e,t,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(97).default)("1043ddd1",content,!0,{sourceMap:!1})},271:function(e,t,n){"use strict";n(268)},272:function(e,t,n){var r=n(96)(!1);r.push([e.i,".log-card{height:120px;flex-direction:column;background-color:#2c4551;border-radius:3px;color:#fff}.log-card,.log-card__header{display:flex;justify-content:space-between}.log-card__header{align-items:center;margin-top:10px}.log-card__edit{width:24px;height:24px;margin:0 10px 0 0}.log-card__name{margin:0 0 0 10px;font-size:20px;font-weight:500}.log-card__info{display:flex;margin:0 0 10px 10px}.log-card__info--image{width:16px;height:16px}.log-card__info--text{font-size:12px;margin-left:5px;margin-right:20px}",""]),e.exports=r},280:function(e,t,n){"use strict";n.r(t);var r,o=n(136),c=(n(257),n(45)),l={props:{name:{type:String,default:"Workout"},trainingTime:{type:Number,default:90},numberOfExercises:{type:Number,default:8},date:{type:Date,default:function(){return new Date}}},data:function(){return{months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},apollo:{me:{query:Object(c.a)(r||(r=Object(o.a)(["\n        query {\n          me{\n            id\n            email\n            name\n            workouts{\n              id\n              name\n            }\n          }\n        }\n      "])))}}},A=(n(271),n(44)),component=Object(A.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"log-card"},[r("div",{staticClass:"log-card__header"},[r("h2",{staticClass:"log-card__name"},[e._v("\n      "+e._s(e.name)+" from "+e._s(e.months[e.date.getMonth()])+" "+e._s(e.date.getDate())+"\n    ")])]),e._v(" "),r("div",{staticClass:"log-card__info"},[r("img",{staticClass:"log-card__info--image",attrs:{src:n(266)}}),e._v(" "),r("span",{staticClass:"log-card__info--text"},[e._v(e._s(e.numberOfExercises)+" Exercises")]),e._v(" "),r("img",{staticClass:"log-card__info--image",attrs:{src:n(267)}}),e._v(" "),r("span",{staticClass:"log-card__info--text"},[e._v(e._s(e.trainingTime)+" Minutes")])])])}),[],!1,null,null,null);t.default=component.exports}}]);