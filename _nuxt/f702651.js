(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";n(45),n(34),n(44),n(17),n(60),n(35),n(61);var o=n(30),r=n(2),l=n(27),c=n(23),d=n(8);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f=new r.a({data:function(){return{hasMoved:!1,position:{x:0,y:0},lerpedPosition:{x:0,y:0},lastLerpedPosition:{x:0,y:0}}},computed:{normalized:function(){return{x:this.position.x/d.b.width*2-1,y:this.position.y/d.b.height*2-1}},lerpedNormalized:function(){return{x:this.lerpedPosition.x/d.b.width*2-1,y:this.lerpedPosition.y/d.b.height*2-1}},lerpedVelocity:function(){return{x:this.lerpedPosition.x-this.lastLerpedPosition.x,y:this.lerpedPosition.y-this.lastLerpedPosition.y}}},created:function(){requestAnimationFrame(this.loop),addEventListener("touchstart",this.onMouseMove,!1),addEventListener("touchmove",this.onMouseMove,!1),addEventListener("mousemove",this.onMouseMove,!1)},beforeDestroy:function(){removeEventListener("touchstart",this.onMouseMove),removeEventListener("touchmove",this.onMouseMove),removeEventListener("mousemove",this.onMouseMove)},methods:{loop:function(){this.lastLerpedPosition=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.lerpedPosition),requestAnimationFrame(this.loop)},onMouseMove:function(e){var t;e.changedTouches&&e.changedTouches.length&&(e.x=e.changedTouches[0].pageX,e.y=e.changedTouches[0].pageY),void 0===e.x&&(e.x=e.pageX,e.y=e.pageY);var n=e.x,o=e.y;this.position={x:n,y:o},c.b.$emit("mouse:mousemove"),null===(t=this.tween)||void 0===t||t.kill(),this.tween=l.a.to(this.lerpedPosition,{duration:3,x:n,y:o,ease:"expo.out"})}}});t.a=function(e,t){t("mouse",f)}},134:function(e,t,n){"use strict";(function(e){var o=n(103),r=n(104),l=n(23),c=n(8),d=function(){function t(){var n=this;Object(o.a)(this,t),this.loop=function(){n.renderer.render(n.scene,n.camera),n.reqFrame=requestAnimationFrame(n.loop)},this.onWindowResize=function(){"PerspectiveCamera"===n.camera.type?n.camera.aspect=c.b.ratio:"OrthographicCamera"===n.camera.type&&(n.camera.left=c.b.width/-2,n.camera.right=c.b.width/2,n.camera.top=c.b.height/2,n.camera.bottom=c.b.height/-2),n.camera.updateProjectionMatrix(),n.renderer.setSize(c.b.width,c.b.height)},this.clock=new e.Clock,this.scene=new e.Scene,this.camera=new e.PerspectiveCamera(70,c.b.ratio,.1,100),this.camera.position.z=50,this.renderer=new e.WebGLRenderer({alpha:!0,premultipliedAlpha:!1,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(c.b.width,c.b.height),this.renderer.setPixelRatio(1),this.textures={},l.b.$on("viewport:resize",this.onWindowResize)}return Object(r.a)(t,[{key:"viewsize",get:function(){var e,t;if("PerspectiveCamera"===this.camera.type){var n=this.camera.position.z,o=this.camera.fov*Math.PI/180;e=(t=2*Math.tan(o/2)*n)*this.camera.aspect}else"OrthographicCamera"===this.camera.type&&(e=c.b.width,t=c.b.height);return{width:e,height:t}}},{key:"appendToDom",value:function(e){e.appendChild(this.renderer.domElement),requestAnimationFrame(this.loop)}},{key:"clearScene",value:function(){cancelAnimationFrame(this.reqFrame),this.scene.children=[]}}]),t}();t.a=function(e,t){t("webgl",new d)}}).call(this,n(187))},135:function(e,t,n){"use strict";n(188);var o=n(2),r=n(27),l=n(23),c=(n(8),new o.a({data:function(){return{baseScroll:50,cooldown:!1,scroll:0,lerpedScroll:0,lastTouch:0,breakpoint:{low:-100,hight:100}}},computed:{normalized:function(){return this.scroll/this.breakpoint.hight},lerpedNormalized:function(){return this.lerpedScroll/this.breakpoint.hight}},created:function(){this.clamper=r.a.utils.clamp(-this.baseScroll,this.baseScroll),requestAnimationFrame(this.loop),addEventListener("touchmove",this.onScroll,!1),addEventListener("wheel",this.onScroll,!1)},beforeDestroy:function(){removeEventListener("touchmove",this.onScroll),removeEventListener("wheel",this.onScroll)},methods:{loop:function(){console.log(this.lerpedNormalized),requestAnimationFrame(this.loop)},onBreakpoint:function(e){l.b.$emit("scroll:breackpoint",e),this.cooldown=!0},onComplete:function(){var e=this;this.breakpoint.hight<=this.scroll?this.onBreakpoint(!0):this.breakpoint.low>=this.scroll&&this.onBreakpoint(!1),this.scroll=0,this.tween=r.a.to(this,{duration:1,lerpedScroll:this.scroll,ease:"expo.out",onComplete:function(){e.cooldown=!1}})},onScroll:function(e){var t,n=this;if(console.log(e),!(this.breakpoint.hight<=this.scroll||this.breakpoint.low>=this.scroll||this.cooldown)){var o=e.changedTouches;if(o&&o.length){var c=o[0].pageY-this.lastTouch;this.lastTouch=o[0].pageY,this.scroll-=this.clamper(c)}else this.scroll-=this.baseScroll*Math.sign(e.wheelDeltaY);l.b.$emit("scroll:scroll"),null===(t=this.tween)||void 0===t||t.kill(),this.tween=r.a.to(this,{duration:.5,lerpedScroll:this.scroll,ease:"expo.out",onComplete:function(){return n.onComplete()}})}}}}));t.a=function(e,t){t("scroll",c)}},137:function(e,t,n){"use strict";n.r(t);n(237);var o=n(9),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"container"},[e._t("default")],2)}),[],!1,null,"d1278e1a",null);t.default=component.exports},173:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("394aee54",content,!0,{sourceMap:!1})},174:function(e,t,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("5989fb9e",content,!0,{sourceMap:!1})},176:function(e,t,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("1a027072",content,!0,{sourceMap:!1})},177:function(e,t,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("981e908e",content,!0,{sourceMap:!1})},178:function(e,t,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("58f10c2d",content,!0,{sourceMap:!1})},179:function(e,t,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("4079531e",content,!0,{sourceMap:!1})},180:function(e,t,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("530898d1",content,!0,{sourceMap:!1})},186:function(e,t,n){"use strict";n(249);var o=n(9),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Navigation"),e._v(" "),n("Nuxt")],1)}),[],!1,null,"bf66ebec",null);t.a=component.exports;installComponents(component,{Navigation:n(265).default})},189:function(e,t,n){"use strict";n.r(t);n(258);var o={props:{duration:{type:Number,default:.75},delay:{type:Number,default:0},mode:{type:String,default:"block"}}},r=(n(262),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"text-raising",appear:""}},[n("span",{staticClass:"text-raising-wrapper",style:{"--text-raising-duration":e.duration+"s","--text-raising-delay":e.delay+"s",display:e.mode}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},191:function(e,t,n){"use strict";n.r(t);var o={props:{name:{type:String,required:!0},link:{type:String,required:!0}}},r=(n(256),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"link-container"},[n("NuxtLink",{staticClass:"link",attrs:{to:e.link}},[e._v(" \n        "+e._s(e.name)+" \n    ")])],1)}),[],!1,null,"c7da417e",null);t.default=component.exports},192:function(e,t,n){n(193),e.exports=n(194)},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var o=new(n(2).a);t.a=function(e,t){t("events",o)}},235:function(e,t,n){"use strict";n(173)},236:function(e,t,n){var o=n(25)(!1);o.push([e.i,".wrapper[data-v-114be1c4]{display:flex;width:100vw;height:100vh;font-size:5em;font-weight:400;color:hsla(0,0%,90.2%,.6)}.wrapper .error[data-v-114be1c4]{color:#e6e6e6}.wrapper .error span[data-v-114be1c4]:first-child{font-weight:800}",""]),e.exports=o},237:function(e,t,n){"use strict";n(174)},238:function(e,t,n){var o=n(25)(!1);o.push([e.i,".container[data-v-d1278e1a]{width:100%;max-width:1850px;margin:auto;padding:0 100px;box-sizing:border-box}@media(max-width:1200px){.container[data-v-d1278e1a]{padding:0 70px}}@media(max-width:500px){.container[data-v-d1278e1a]{padding:0 0 0 5em}}",""]),e.exports=o},241:function(e,t,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("3a312388",content,!0,{sourceMap:!1})},242:function(e,t,n){var o=n(25)(!1);o.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none;color:inherit}',""]),e.exports=o},243:function(e,t,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("03e6c45f",content,!0,{sourceMap:!1})},244:function(e,t,n){var o=n(25),r=n(245),l=n(246),c=n(247),d=n(248),h=o(!1),f=r(l),m=r(c),v=r(d);h.push([e.i,'@font-face{font-family:"Anodina";src:url('+f+') format("opentype");font-weight:300}@font-face{font-family:"Anodina";src:url('+m+') format("opentype");font-weight:400}@font-face{font-family:"Anodina";src:url('+v+') format("opentype");font-weight:800}:root{background-color:#17181c;color:#e6e6e6;font-family:"Anodina",sans-serif;font-weight:800;font-size:14px}::-moz-selection{background-color:#691eca}::selection{background-color:#691eca}:root,body{overflow-x:hidden}.page-enter-active,.page-leave-active{transition:opacity .75s cubic-bezier(0,1,.18,1),transform .75s cubic-bezier(0,1,.18,1)}.page-enter,.page-leave-to{opacity:0}.page-enter-to,.page-leave-to{transform:translateY(-100vh)}',""]),e.exports=h},246:function(e,t,n){e.exports=n.p+"fonts/Anodina-Light.0ff42b5.otf"},247:function(e,t,n){e.exports=n.p+"fonts/Anodina-Regular.3520c61.otf"},248:function(e,t,n){e.exports=n.p+"fonts/Anodina-ExtraBold.89531a4.otf"},249:function(e,t,n){"use strict";n(176)},250:function(e,t,n){var o=n(25)(!1);o.push([e.i,".layout[data-v-bf66ebec]{position:relative;overflow:hidden;max-height:100vh}",""]),e.exports=o},252:function(e,t,n){"use strict";n(177)},253:function(e,t,n){var o=n(25)(!1);o.push([e.i,"nav[data-v-39769bab]{flex-direction:column;box-sizing:border-box;max-width:5em;height:100vh;position:absolute;top:0;left:0;padding:1em;z-index:999;font-weight:300}nav[data-v-39769bab],nav .link[data-v-39769bab]{display:flex;justify-content:center;align-items:center}nav .link[data-v-39769bab]{height:100%;margin-right:1em}nav .home-icon[data-v-39769bab]{width:100%;padding:.75em;margin:1em 0;z-index:3;transition:1s cubic-bezier(0,1,.18,1);transform:rotate(-90deg);cursor:pointer}nav .home-icon[data-v-39769bab]:hover{transform:rotate(-90deg) scale(1.1)}nav .scroll-title[data-v-39769bab]{display:flex;flex-direction:column;margin:1em 0;color:hsla(0,0%,90.2%,.6)}nav .scroll-title>*[data-v-39769bab]{margin:auto}nav .angle[data-v-39769bab]{fill:hsla(0,0%,90.2%,.6)}nav .angle.bottom[data-v-39769bab]{transform:rotate(180deg)}@media(max-width:500px){nav .angle[data-v-39769bab],nav .next-link[data-v-39769bab],nav .prev-link[data-v-39769bab]{display:none}}",""]),e.exports=o},254:function(e,t,n){"use strict";n(178)},255:function(e,t,n){var o=n(25)(!1);o.push([e.i,'.menu-item[data-v-91d7df84]{margin-right:.5em;font-size:7.5em}.sidenav[data-v-91d7df84],.sidenav[data-v-91d7df84]:after,.sidenav[data-v-91d7df84]:before{display:flex;position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:#17181c;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.side-enter[data-v-91d7df84],.side-enter[data-v-91d7df84]:after,.side-enter[data-v-91d7df84]:before{transform:translateX(-100%)}.side-leave-to[data-v-91d7df84]{transform:translateX(100%)}.side-enter-active[data-v-91d7df84]{transition:transform .75s cubic-bezier(0,1,.18,1)}.side-enter-active.sidenav[data-v-91d7df84]:after{transition:transform .75s cubic-bezier(0,1,.2,1)}.side-enter-active.sidenav[data-v-91d7df84]:before,.side-leave-active[data-v-91d7df84]{transition:transform .75s cubic-bezier(0,1,.8,1)}.side-enter-active.sidenav[data-v-91d7df84]:after{content:"";z-index:1;background:linear-gradient(to right top,#dd0357 -80%,#5d4df9)}.side-enter-active.sidenav[data-v-91d7df84]:before{content:"";z-index:2}@media(max-width:1200px){.menu-item[data-v-91d7df84]{font-size:7em}}@media(max-width:500px){.menu-item[data-v-91d7df84]{font-size:5em}}@media(max-height:800px){.menu-item[data-v-91d7df84]{font-size:3.5em}}@media(max-height:500px){.menu-item[data-v-91d7df84]{font-size:2.5em}}',""]),e.exports=o},256:function(e,t,n){"use strict";n(179)},257:function(e,t,n){var o=n(25)(!1);o.push([e.i,'.link-container[data-v-c7da417e]{display:inline-block;position:relative;overflow:hidden;min-width:5em}.link-container[data-v-c7da417e]:after{content:"";position:absolute;bottom:0;left:-100%;width:100%;height:calc(1px + .025em);background:linear-gradient(to right top,#dd0357 -80%,#5d4df9);transition:transform .2s cubic-bezier(.25,1,.5,1) .2s}.link-container[data-v-c7da417e]:hover:after{transition:transform .2s cubic-bezier(.25,1,.5,1);transform:translateX(100%)}.link-container[data-v-c7da417e]:before{content:"";position:absolute;bottom:0;left:calc(100% + 1px);width:.5em;height:calc(1px + .025em);background:#3c3cde;transition:transform .2s cubic-bezier(.25,1,.5,1);transform-origin:left}.link-container[data-v-c7da417e]:hover:before{transform:rotate(30deg) translateX(-100%)}.link-container .link[data-v-c7da417e],.link-container[data-v-c7da417e]:hover:before{transition:transform .2s cubic-bezier(.25,1,.5,1) .2s}.link-container .link[data-v-c7da417e]{display:block;min-height:1.5em}.link-container:hover .link[data-v-c7da417e]{color:#fff}@media(max-width:500px){.link-container[data-v-c7da417e]{min-width:auto}}',""]),e.exports=o},262:function(e,t,n){"use strict";n(180)},263:function(e,t,n){var o=n(25)(!1);o.push([e.i,".text-raising-wrapper{overflow:hidden}.text-raising-enter-active,.text-raising-enter-active.text-raising-wrapper>*,.text-raising-leave-active,.text-raising-leave-active.text-raising-wrapper>*{transition:transform var(--text-raising-duration) var(--text-raising-delay) cubic-bezier(.25,1,.5,1)}.text-raising-enter.text-raising-wrapper>*,.text-raising-leave.text-raising-wrapper>*{transform:translate(5%,100%)!important}",""]),e.exports=o},265:function(e,t,n){"use strict";n.r(t);n(251);var o=n(9),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{id:"SLetter",viewBox:"0 0 41 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},e.$listeners),[n("defs",[n("linearGradient",{attrs:{id:"Gradient1",spreadMethod:"reflect",x1:"-.5",y1:"1.5",x2:"1.5",y2:"-.5"}},[n("stop",{attrs:{offset:"0","stop-color":"#F41D62"}}),n("stop",{attrs:{offset:".6","stop-color":"#383de1"}},[n("animate",{attrs:{attributeName:"offset",values:"0.6;1;0.6",repeatCount:"indefinite",dur:"2.5",begin:"0",keySplines:"0.65, 0, 0.35, 1; 0.61, 1, 0.88, 1;"}})])],1)],1),n("path",{attrs:{d:"M1 2l16 16 7-16 16 16",stroke:"url(#Gradient1)","stroke-width":"3","stroke-dashoffset":"32","stroke-dasharray":"32 0","pointer-events":"none"}},[n("animate",{attrs:{attributeName:"stroke-dasharray",begin:"SLetter.mouseover",values:"0 32;64 0;",dur:"5",repeatCount:"1",keySplines:"0, 1, 0.18, 1;",calcMode:"spline"}})])])}),[],!1,null,null,null).exports,l=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},e.$listeners),[n("path",{attrs:{d:"M16 6.594l-.719.687-12.5 12.5L4.22 21.22 16 9.437 27.781 21.22l1.438-1.438-12.5-12.5z"}})])}),[],!1,null,null,null).exports,c=n(27),d={components:{SLetter:r,Angle:l},data:function(){return{showSidenav:!1,links:[{name:"sennery",path:"/"},{name:"about",path:"/about"},{name:"contacts",path:"/contacts"}]}},computed:{currentLink:function(){var e=this;return this.links.findIndex((function(t){return t.path==e.$nuxt.$route.path}))},nextLink:function(){var e;return null!==(e=this.links[this.currentLink+1])&&void 0!==e?e:this.links[0]},prevLink:function(){var e;return null!==(e=this.links[this.currentLink-1])&&void 0!==e?e:this.links[this.links.length-1]}},methods:{onBreakpoint:function(e){this.$router.push({path:e?this.nextLink.path:this.prevLink.path})},updateScroll:function(e){c.a.set("nav",{y:this.$viewport.height*e*.3}),c.a.set([".angle.top",".prev-link"],{opacity:1-e}),c.a.set([".angle.bottom",".next-link"],{opacity:1+e})},loop:function(){this.updateScroll(this.$scroll.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.loop)}},mounted:function(){this.$events.$on("scroll:breackpoint",this.onBreakpoint),requestAnimationFrame(this.loop)}},h=(n(252),Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("Angle",{staticClass:"angle top"}),e._v(" "),n("span",{staticClass:"prev-link"},[e._v("\n        "+e._s(this.prevLink.name)+"\n    ")]),e._v(" "),n("SLetter",{staticClass:"home-icon",on:{click:function(t){e.showSidenav=!e.showSidenav}}}),e._v(" "),n("span",{staticClass:"next-link"},[e._v("\n        "+e._s(this.nextLink.name)+"\n    ")]),e._v(" "),n("Angle",{staticClass:"angle bottom"}),e._v(" "),n("SideNavigation",{attrs:{enabled:e.showSidenav,links:e.links},on:{disable:function(t){e.showSidenav=!1}}})],1)}),[],!1,null,"39769bab",null));t.default=h.exports;installComponents(h,{SideNavigation:n(266).default})},266:function(e,t,n){"use strict";n.r(t);var o={props:{enabled:{type:Boolean,required:!0},links:{type:Array,required:!0}}},r=(n(254),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"side"}},[e.enabled?n("div",{staticClass:"sidenav"},[n("Container",e._l(e.links,(function(link,i){return n("TextRaiseTransition",{key:link.name,attrs:{delay:.75+.1*i}},[n("NavigationRouteLink",{staticClass:"menu-item",attrs:{name:link.name,link:link.path},nativeOn:{click:function(t){return e.$emit("disable")}}})],1)})),1)],1):e._e()])}),[],!1,null,"91d7df84",null);t.default=component.exports;installComponents(component,{NavigationRouteLink:n(191).default,TextRaiseTransition:n(189).default,Container:n(137).default})},42:function(e,t,n){"use strict";var o={props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"<%= messages.client_error %>"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},r=(n(235),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("Container",[n("div",[404===e.statusCode?n("div",{staticClass:"error"},[n("span",[e._v("404")]),e._v(" "),n("span",[e._v("page not found")])]):n("div",[e._v("\n                Oops, something went wrong...\n            ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/"}},[e._v("\n                Go to home page\n            ")])],1)])],1)}),[],!1,null,"114be1c4",null);t.a=component.exports;installComponents(component,{Container:n(137).default})},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var o=n(2),r=n(23),l=new o.a({data:function(){return{width:document.documentElement.clientWidth||document.body.clientWidth,height:Math.min(window.innerHeight,document.documentElement.clientHeight)}},computed:{ratio:function(){return this.width/this.height}},methods:{onWindowResize:function(){this.width=document.documentElement.clientWidth||document.body.clientWidth,this.height=Math.min(window.innerHeight,document.documentElement.clientHeight);var e=.01*this.height;return document.documentElement.style.setProperty("--vh","".concat(e,"px")),r.b.$emit("viewport:resize",this.$data),this.$data}},created:function(){this.onWindowResize(),addEventListener("resize",this.onWindowResize,!1)},beforeDestroy:function(){removeEventListener("resize",this.onWindowResize)}});t.a=function(e,t){t("viewport",l)}}},[[192,12,1,13]]]);