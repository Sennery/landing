(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{264:function(t,e,n){"use strict";(function(t){e.a={data:function(){return{duration:10,borderRadius:{first:0,second:0}}},methods:{onTick:function(){var e=this.$mouse.lerpedNormalized.x;t.to(".slider",{duration:this.duration/5,skewX:(1-e)/2*10}),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){requestAnimationFrame(this.onTick)},beforeDestroy:function(){t.killTweensOf(".slider"),cancelAnimationFrame(this.reqFrame)}}}).call(this,n(138).gsap)},267:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("79492e08",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n(267)},272:function(t,e,n){var o=n(31)(!1);o.push([t.i,".slider[data-v-41152678]{position:absolute;top:0;left:70%;z-index:-1;overflow:hidden;min-height:100vh;min-width:40vw;transform-origin:50% 50%;background:linear-gradient(to right top,#dd0357 -80%,#5d4df9);box-shadow:0 3px 3px -2px rgba(0,0,0,.25),0 3px 4px 0 rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.18)}@media(max-width:500px){.slider[data-v-41152678]{display:none}}",""]),t.exports=o},281:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("66553978",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n.r(e);var o=n(264).a,r=(n(271),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"slider",style:{"border-radius":t.borderRadius.second+"%0px 0px "+t.borderRadius.second+"%"}})}),[],!1,null,"41152678",null);e.default=component.exports},292:function(t,e,n){"use strict";n(281)},293:function(t,e,n){var o=n(31)(!1);o.push([t.i,".page-enter[data-v-524b3bf8],.page-leave-to[data-v-524b3bf8]{transform:translateX(-100vw) scaleX(0);opacity:0}main[data-v-524b3bf8]{display:flex;flex-direction:column;justify-content:center;min-height:100vh;position:relative;overflow:hidden}main .title[data-v-524b3bf8]{font-size:10em;margin-bottom:.25em;max-width:50%}main .info[data-v-524b3bf8]{max-width:35vw;padding-left:2.5em;margin-bottom:.5em;font-size:2.5em;font-weight:400;line-height:normal;color:hsla(0,0%,90.2%,.6)}main .info .word[data-v-524b3bf8]{display:inline-block;padding-right:.25em}main .contact-me[data-v-524b3bf8]{color:#e6e6e6;margin-left:40%;font-size:2.5em}@media(max-width:1200px){main .title[data-v-524b3bf8]{font-size:7em}main .info[data-v-524b3bf8]{max-width:50vw}main .contact-me[data-v-524b3bf8],main .info[data-v-524b3bf8]{font-size:2em}}@media(max-width:800px){main .title[data-v-524b3bf8]{font-size:4em}main .info[data-v-524b3bf8]{font-size:1.5em}.page-enter[data-v-524b3bf8],.page-leave-to[data-v-524b3bf8]{transform:translateY(-100vh);opacity:0}}@media(max-width:500px){main .title[data-v-524b3bf8]{font-size:3.5em}main .info[data-v-524b3bf8]{max-width:80vw}main .contact-me[data-v-524b3bf8],main .info[data-v-524b3bf8]{padding-left:0;margin-left:0}}",""]),t.exports=o},308:function(t,e,n){"use strict";n.r(e);n(106),n(43),n(17),n(35),n(192);var o={methods:{getTimeDifference:function(t){var e=new Date(t),n=new Date,o=n.getMonth()-e.getMonth()<0,r=n.getMonth()===e.getMonth()&&n.getDate()-e.getDate()<0,d=n.getDate()===e.getDate()&&n.getHours()-e.getHours()<0,l=n.getHours()===e.getHours()&&n.getMinutes()-e.getMinutes()<0,f=o||r||d||l?-1:0;return n.getFullYear()-e.getFullYear()+f}},computed:{description:function(){var t=this.getTimeDifference("1999-03-18"),e=this.getTimeDifference("2020-01-01");return"Hi! I'm a Frontend developer from Russia.\n                My name is Arsenii Likhachev and I'm ".concat(t," years old.\n                Over ").concat(e," years of the industry expirience.\n                Making stuff simple and minimalistic.").split(" ").filter((function(t){return t}))}}},r=(n(292),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"title"},[n("TextTransition",{attrs:{duration:.75,translate:{x:100,y:0},rotate:{x:0,y:90}}},[n("h1",[t._v("\n                about\n            ")])])],1),t._v(" "),n("p",{staticClass:"info"},t._l(t.description,(function(e,i){return n("TextTransition",{key:i,attrs:{delay:.025*i,mode:"inline-block",overflowHidden:!1,translate:{x:100,y:0},rotate:{x:0,y:90}}},[n("span",{staticClass:"word"},[t._v("\n                "+t._s(e)+"\n            ")])])})),1),t._v(" "),n("div",{staticClass:"contact-me"},[n("TextTransition",{attrs:{delay:.025*t.description.length,translate:{x:100,y:0},rotate:{x:0,y:90}}},[n("NavigationRouteLink",{attrs:{name:"Contact with me!",link:"/contacts"}})],1)],1),t._v(" "),n("AboutAside")],1)}),[],!1,null,"524b3bf8",null);e.default=component.exports;installComponents(component,{TextTransition:n(191).default,NavigationRouteLink:n(140).default,AboutAside:n(289).default})}}]);