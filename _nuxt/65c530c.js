(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4],{270:function(t,e,n){"use strict";(function(t){var o=n(33);e.a={props:{src:{type:String,required:!0}},methods:{initLight:function(){this.light1=this.createSpotLight({color:14288218,intensity:.5,position:{x:0,y:50,z:50},castShadow:!0}),this.light2=this.createSpotLight({color:6507247,intensity:1,position:{x:0,y:-10,z:50},castShadow:!0}),this.$webgl.scene.add(this.light1,this.light2)},createSpotLight:function(e){var n=e.color,o=e.intensity,r=e.position,c=e.castShadow,l=new t.SpotLight(n,o);return l.position.set(r.x,r.y,r.z),c&&(l.castShadow=!0,l.shadow.mapSize.width=1024,l.shadow.mapSize.height=1024,l.shadow.camera.near=500,l.shadow.camera.far=4e3,l.shadow.camera.fov=30),l},initMesh:function(){this.meshGroup=new t.Group,this.mesh1=this.createSphereMesh({radius:1,textureColor:16777215}),this.mesh2=this.createSphereMesh({radius:.1,textureColor:16777215,position:{x:0,y:0,z:1.75}}),this.meshGroup.add(this.mesh1,this.mesh2),this.$webgl.scene.add(this.meshGroup)},createSphereMesh:function(e){var n=e.radius,o=e.textureColor,r=e.position,c=void 0===r?{x:0,y:0,z:0}:r,l=new t.SphereGeometry(n,100,100),h=new t.MeshPhysicalMaterial({color:o}),d=new t.Mesh(l,h);return d.position.set(c.x,c.y,c.z),d},initMouse:function(){o.a.fromTo(this.meshGroup.position,{z:-100},{z:0,duration:1,delay:.75,ease:"power3.out"})},updateMouse:function(t){this.light1.position.set(50*t.x,50+50*t.y),this.meshGroup.scale.set(10*(2.5-(Math.abs(t.x)+Math.abs(t.y))),10*(2.5-(Math.abs(t.x)+Math.abs(t.y))),10*(2.5-(Math.abs(t.x)+Math.abs(t.y)))),this.mesh2.position.set(t.x,t.y)},onTick:function(){this.updateMouse(this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){this.initLight(),this.initMesh(),this.$webgl.appendToDom(this.$refs.container),requestAnimationFrame(this.onTick)},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene()}}}).call(this,n(187))},274:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("aeb5681e",content,!0,{sourceMap:!1})},275:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4324beb1",content,!0,{sourceMap:!1})},285:function(t,e,n){n(5)({target:"Math",stat:!0},{sign:n(286)})},286:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},287:function(t,e,n){"use strict";n(274)},288:function(t,e,n){var o=n(25)(!1);o.push([t.i,".wrapper[data-v-66d2cd00]{position:relative;height:1em;font-size:15em;z-index:1}.wrapper .part[data-v-66d2cd00]{display:flex;justify-content:center;align-items:center;width:100%;position:absolute;top:0;left:0}.wrapper .part[data-v-66d2cd00]:nth-child(2){color:#f0f}.wrapper .part[data-v-66d2cd00]:first-child{color:#0ff}@media(max-width:1200px){.wrapper[data-v-66d2cd00]{font-size:10em}}@media(max-width:500px){.wrapper[data-v-66d2cd00]{font-size:4em}.wrapper .part[data-v-66d2cd00]{justify-content:flex-start}}",""]),t.exports=o},289:function(t,e,n){"use strict";n(275)},290:function(t,e,n){var o=n(25)(!1);o.push([t.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}",""]),t.exports=o},294:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("762355b1",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);n(45),n(34),n(44),n(17),n(60),n(35),n(61);var o=n(29),r=(n(285),n(9)),c=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{viewBox:"0 0 64 22",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[n("filter",{attrs:{id:"blur",x:"-10%",y:"-10%",width:"120%",height:"120%"}},[n("feGaussianBlur",{attrs:{in:"sourceGraphic",stdDeviation:"0,0"}},[n("animate",{attrs:{attributeName:"stdDeviation",values:"0,0;0,0;1,0.1;0,0;",repeatCount:"indefinite",dur:"5",begin:"1",keyTimes:"0;0.7;0.85;1",calcMode:"spline",keySplines:"0.61, 1, 0.88, 1; 0.65, 0, 0.35, 1; 0.61, 1, 0.88, 1;"}})])],1),n("path",{attrs:{d:"M3.314 15.357c.714-.405 1.447-.744 2.184-1.101.526-.255 1.066-.473 1.577-.76.554-.31 1.071-.688 1.593-1.049 1.083-.749 2.288-1.264 3.466-1.842.652-.319 1.342-.558 1.986-.889.668-.344 1.303-.753 1.972-1.094.638-.326 1.341-.616 1.901-1.07.125-.101.584-.238.422-.238-.128 0-.453.591-.521.683-.196.266-.374.536-.548.818-.326.527-.718.933-1.198 1.328-1.06.87-2.183 1.698-3.102 2.724-.296.331-.477.699-.714 1.067-.219.341-.467.656-.71.978-.176.232-.312.49-.483.728-.039.053-.178.183-.117.159.154-.061.275-.203.429-.272.744-.331 1.467-.704 2.224-1.02.748-.312 1.378-.819 2.071-1.231.88-.522 1.776-.941 2.602-1.556.637-.476 1.204-1.027 1.792-1.559.307-.278.629-.538.919-.834.359-.366.671-.771 1.049-1.119.428-.393.893-.743 1.326-1.132.269-.242.574-.506.921-.631.064-.023.188-.15.188-.081 0 .1-.078.181-.123.265-.343.642-.697 1.28-1.058 1.912-.672 1.175-1.81 1.955-2.674 2.987-.336.403-.694.786-1.031 1.189-.485.581-1.113 1.068-1.687 1.561-.883.759-1.704 1.518-2.457 2.404-.318.373-.828.812-.928 1.314-.013.065.118-.061.175-.094.116-.068.219-.151.332-.223.433-.273.921-.503 1.373-.746.711-.38 1.423-.764 2.125-1.159.987-.554 1.832-1.293 2.736-1.965.935-.695 1.792-1.442 2.647-2.231.878-.811 1.819-1.529 2.747-2.28.665-.538 1.37-1.019 1.973-1.629.541-.547 1.172-.849 1.817-1.249.444-.276.876-.601 1.334-.851.11-.06.151-.103.137.065-.025.324-.376.679-.523.957-.281.531-.495 1.091-.764 1.626-.367.73-.849 1.389-1.307 2.063-.563.827-1.164 1.574-1.811 2.336-.696.821-1.333 1.689-2.02 2.518-.85 1.027-1.693 2.056-2.54 3.084a8.415 8.415 0 01-.566.625c-.07.069-.229.165-.254.252-.029.102.126-.137.166-.176a10.97 10.97 0 012.02-1.5c.901-.534 1.787-1.087 2.695-1.611 1.233-.711 2.485-1.358 3.586-2.271.753-.626 1.398-1.318 2.031-2.062a11.959 11.959 0 012.021-1.892c1.287-.958 2.478-2.054 3.79-2.974.57-.4 1.147-.749 1.804-.975.014-.005.252-.1.222-.036-.117.258-.347.456-.492.701-.195.329-.369.674-.534 1.02-.392.823-.95 1.545-1.379 2.349-1.155 2.162-2.247 4.344-3.536 6.43-.328.53-.679 1.037-.998 1.572-.151.254-.41.525-.467.823-.018.091-.082.212-.032.058.145-.443.588-.824.883-1.164.721-.827 1.464-1.615 2.287-2.343 1.099-.972 2.235-1.884 3.188-3.008.806-.95 1.445-1.995 2.134-3.028.292-.439.609-.861.89-1.307.31-.493.584-1.009.91-1.492.706-1.049 1.781-1.648 2.693-2.489.208-.192.392-.413.597-.609.094-.089.064-.062.068.043.006.169.049.319.031.494-.044.438-.159.878-.233 1.312-.34 1.991-1.166 3.913-1.932 5.769-.595 1.44-1.189 2.879-1.699 4.353a10.459 10.459 0 01-.687 1.541c-.169.316-.436.619-.53.971-.014.05-.036.078-.047.128-.022.1-.118.114-.043.002.277-.411.75-.78 1.114-1.105.97-.865 1.938-1.725 2.891-2.608.451-.418.929-.81 1.355-1.254.323-.336.594-.714.892-1.071.469-.563 1.011-1.074 1.555-1.564a15.9 15.9 0 001.114-1.089c.253-.278.424-.575.636-.883.285-.416.539-.791.918-1.126.214-.188.408-.403.609-.604.253-.252.603-.385.917-.548.285-.148.519-.462.813-.575.15-.058.211-.032.211.153 0 .366-.114.617-.22.97-.187.621-.445 1.218-.661 1.829-.498 1.414-.944 2.839-1.498 4.234-.722 1.821-1.248 3.789-2.305 5.45-.154.242-.332.538-.546.733-.046.042.302-.434.36-.492.553-.551 1.221-.973 1.855-1.42 1.132-.798 2.194-1.667 3.258-2.552a120.888 120.888 0 013.536-2.808c.612-.473 1.236-.936 1.725-1.541.239-.296.496-.56.755-.838.022-.024.17-.218.17-.169",stroke:"url(#Gradient1)",fill:"none","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round","stroke-dashoffset":"230","stroke-dasharray":"230"}},[n("animate",{attrs:{attributeName:"stroke-dashoffset",values:"230;0;0;-230",begin:"0",dur:"5",repeatCount:"indefinite",keySplines:"0.65, 0, 0.35, 1; 0.61, 1, 0.88, 1; 0.61, 1, 0.88, 1;",keyTimes:"0; 0.4; 0.7; 1",calcMode:"spline"}})])])}),[],!1,null,null,null).exports,l=n(33);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Lines:c},methods:{getMovePosition:function(){return{x:20*this.moveFunction(this.$mouse.normalized.x),y:20*this.moveFunction(this.$mouse.normalized.y)}},moveFunction:function(t){var e=Math.sign(t);return(1-Math.pow(1-Math.abs(t),2))*e},doMove:function(){var t=this.getMovePosition();l.a.to(".sennery",d(d({},t),{},{stagger:.01}))}},mounted:function(){this.$events.$on("mouse:mousemove",this.doMove)},beforeDestroy:function(){l.a.killTweensOf(".sennery"),this.$events.$off("mouse:mousemove",this.doMove)}},m=(n(287),Object(r.a)(f,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"part"},[n("span",{staticClass:"sennery"},[t._v("SENNERY")])]),t._v(" "),n("div",{staticClass:"part"},[n("span",{staticClass:"sennery"},[t._v("SENNERY")])]),t._v(" "),n("div",{staticClass:"part"},[n("h1",{staticClass:"sennery"},[t._v("SENNERY")])])])}],!1,null,"66d2cd00",null));e.default=m.exports},299:function(t,e,n){"use strict";n.r(e);var o=n(270).a,r=(n(289),n(9)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"container",staticClass:"scene-container"})}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n(294)},307:function(t,e,n){var o=n(25)(!1);o.push([t.i,"main[data-v-0887150b]{align-items:center;min-height:100vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}main[data-v-0887150b],main .subtitle[data-v-0887150b]{display:flex;justify-content:center}main .subtitle[data-v-0887150b]{margin-top:1em;font-size:2.5em;font-weight:400;color:hsla(0,0%,90.2%,.6);position:relative;z-index:1}@media(max-width:500px){main .subtitle[data-v-0887150b]{margin-top:.5em;justify-content:flex-start}}",""]),t.exports=o},311:function(t,e,n){"use strict";n.r(e);var o={},r=(n(306),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Container",[n("Sennery"),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n            web developer\n        ")]),t._v(" "),n("WebGLCircle",{attrs:{src:"/images/texture-for-wave.png"}})],1)],1)}),[],!1,null,"0887150b",null);e.default=component.exports;installComponents(component,{Sennery:n(296).default,WebGLCircle:n(299).default,Container:n(137).default})}}]);