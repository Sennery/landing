(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){"use strict";(function(e){n(44),n(33),n(43),n(17),n(58),n(34),n(59);var o=n(27),r=n(2),c=n(23),l=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h=new r.a({data:function(){return{hasMoved:!1,position:{x:0,y:0},lerpedPosition:{x:0,y:0},lastLerpedPosition:{x:0,y:0}}},computed:{normalized:function(){return{x:this.position.x/l.b.width*2-1,y:this.position.y/l.b.height*2-1}},lerpedNormalized:function(){return{x:this.lerpedPosition.x/l.b.width*2-1,y:this.lerpedPosition.y/l.b.height*2-1}},lerpedVelocity:function(){return{x:this.lerpedPosition.x-this.lastLerpedPosition.x,y:this.lerpedPosition.y-this.lastLerpedPosition.y}}},created:function(){requestAnimationFrame(this.loop),addEventListener("touchstart",this.onMouseMove,!1),addEventListener("touchmove",this.onMouseMove,!1),addEventListener("mousemove",this.onMouseMove,!1)},beforeDestroy:function(){removeEventListener("touchstart",this.onMouseMove),removeEventListener("touchmove",this.onMouseMove),removeEventListener("mousemove",this.onMouseMove)},methods:{loop:function(){this.lastLerpedPosition=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.lerpedPosition),requestAnimationFrame(this.loop)},onMouseMove:function(t){var n;t.changedTouches&&t.changedTouches.length&&(t.x=t.changedTouches[0].pageX,t.y=t.changedTouches[0].pageY),void 0===t.x&&(t.x=t.pageX,t.y=t.pageY);var o=t.x,r=t.y;this.position={x:o,y:r},c.b.$emit("mouse:mousemove"),null===(n=this.tween)||void 0===n||n.kill(),this.tween=e.to(this.lerpedPosition,{duration:3,x:o,y:r,ease:"expo.out"})}}});t.a=function(e,t){t("mouse",h)}}).call(this,n(138).gsap)},133:function(e,t,n){"use strict";(function(e){var o=n(102),r=n(103),c=n(23),l=n(8),d=function(){function t(){var n=this;Object(o.a)(this,t),this.loop=function(){n.renderer.render(n.scene,n.camera),n.reqFrame=requestAnimationFrame(n.loop)},this.onWindowResize=function(){"PerspectiveCamera"===n.camera.type?n.camera.aspect=l.b.ratio:"OrthographicCamera"===n.camera.type&&(n.camera.left=l.b.width/-2,n.camera.right=l.b.width/2,n.camera.top=l.b.height/2,n.camera.bottom=l.b.height/-2),n.camera.updateProjectionMatrix(),n.renderer.setSize(l.b.width,l.b.height)},this.clock=new e.Clock,this.scene=new e.Scene,this.camera=new e.PerspectiveCamera(70,l.b.ratio,.1,100),this.camera.position.z=50,this.renderer=new e.WebGLRenderer({alpha:!0,premultipliedAlpha:!1,antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=e.PCFSoftShadowMap,this.renderer.setSize(l.b.width,l.b.height),this.renderer.setPixelRatio(1),c.b.$on("viewport:resize",this.onWindowResize)}return Object(r.a)(t,[{key:"viewsize",get:function(){var e,t;if("PerspectiveCamera"===this.camera.type){var n=this.camera.position.z,o=this.camera.fov*Math.PI/180;e=(t=2*Math.tan(o/2)*n)*this.camera.aspect}else"OrthographicCamera"===this.camera.type&&(e=l.b.width,t=l.b.height);return{width:e,height:t}}},{key:"appendToDom",value:function(e){e.appendChild(this.renderer.domElement),requestAnimationFrame(this.loop)}},{key:"clearScene",value:function(){this.scene.children=[],cancelAnimationFrame(this.reqFrame)}}]),t}();t.a=function(e,t){t("webgl",new d)}}).call(this,n(139))},134:function(e,t,n){"use strict";(function(e){n(194);var o=n(2),r=n(23),c=(n(8),new o.a({data:function(){return{baseScroll:50,scroll:0,lerpedScroll:0,lastTouch:0,breakpoint:{low:-100,hight:100}}},computed:{normalized:function(){return this.scroll/this.breakpoint.hight},lerpedNormalized:function(){return this.lerpedScroll/this.breakpoint.hight}},created:function(){this.clamper=e.utils.clamp(-this.baseScroll,this.baseScroll),addEventListener("touchmove",this.onScroll,!1),addEventListener("wheel",this.onScroll,!1)},beforeDestroy:function(){removeEventListener("touchmove",this.onScroll),removeEventListener("wheel",this.onScroll)},methods:{onBreakpoint:function(e){r.b.$emit("scroll:breackpoint",e)},onComplete:function(){var t;this.breakpoint.hight<=this.scroll?this.onBreakpoint(!0):this.breakpoint.low>=this.scroll&&this.onBreakpoint(!1),this.scroll=0,null===(t=this.tween)||void 0===t||t.kill(),this.tween=e.to(this,{duration:1,delay:.1,lerpedScroll:this.scroll,ease:"expo.out"})},onScroll:function(t){var n,o=this;if(!(this.breakpoint.hight<=this.scroll||this.breakpoint.low>=this.scroll)){var c=t.changedTouches;if(c&&c.length){var l=c[0].pageY-this.lastTouch;this.lastTouch=c[0].pageY,this.scroll-=this.baseScroll*Math.sign(l)}else this.scroll-=this.baseScroll*Math.sign(t.wheelDeltaY);r.b.$emit("scroll:scroll"),null===(n=this.tween)||void 0===n||n.kill(),this.tween=e.to(this,{duration:.5,lerpedScroll:this.scroll,ease:"expo.out",onComplete:function(){return o.onComplete()}})}}}}));t.a=function(e,t){t("scroll",c)}}).call(this,n(138).gsap)},135:function(e,t,n){"use strict";(function(e){var o=n(136),r=n.n(o),c=n(186),l=n(187),d={};function h(t){var n,o=null!==(n=d.wavePlane)&&void 0!==n?n:d.wavePlane=new e.PlaneBufferGeometry(1,1,250,250),h=new e.ShaderMaterial({uniforms:{uTexture:{value:0},uTime:{value:0},uMouse:{value:[1,1]}},vertexShader:r()(c.a),fragmentShader:r()(l.a)});return function(t,n){(new e.TextureLoader).load(t,(function(t){t.minFilter=e.LinearFilter,t.generateMipmaps=!1,n.uniforms.uTexture.value=t}),void 0,(function(e){console.error("An error happened.",e)}))}(t,h),new e.Mesh(o,h)}function v(t){var n,o=t.radius,r=t.textureColor,c=void 0===r?new e.Color(16777215):r,l=t.position,h=void 0===l?{x:0,y:0,z:0}:l,v=t.receiveShadow,f=void 0!==v&&v,m=t.castShadow,x=void 0!==m&&m,y=null!==(n=d.sphere)&&void 0!==n?n:d.sphere=new e.SphereGeometry(1,100,100),w=new e.MeshPhysicalMaterial({reflectivity:0,transmission:0,roughness:1,metalness:0,clearcoat:1,clearcoatRoughness:1.5,color:c,ior:1.2,thickness:10}),k=new e.Mesh(y,w);return k.castShadow=x,k.receiveShadow=f,k.position.set(h.x,h.y,h.z),k.scale.set(o,o,o),k}function f(t){var n=t.color,o=t.intensity,r=t.position,c=t.castShadow,l=new e.SpotLight(n,o);return l.position.set(r.x,r.y,r.z),c&&(l.castShadow=!0,l.shadow.mapSize.width=1024,l.shadow.mapSize.height=1024,l.shadow.camera.near=.5,l.shadow.camera.far=500,l.shadow.camera.fov=90,l.shadow.camera.focus=.1),l}function m(){var e,t;return{getMesh:(e={waveImage:h("images/wave-image-texture.jpg"),circles:{mainSphere:v({radius:15,castShadow:!0}),sphere2:v({radius:2,position:{x:0,y:0,z:18},receiveShadow:!0}),sphere3:v({radius:3.5,position:{x:0,y:0,z:23},receiveShadow:!0}),sphere4:v({radius:3,position:{x:0,y:0,z:30},receiveShadow:!0})}},function(t){return e[t]}),getLight:(t={circles:{light1:f({color:14288218,intensity:.5,position:{x:25,y:0,z:50},castShadow:!0}),light2:f({color:6507247,intensity:1,position:{x:-25,y:-50,z:100}})}},function(e){return t[e]})}}t.a=function(e,t){t("webglAssets",m())}}).call(this,n(139))},140:function(e,t,n){"use strict";n.r(t);var o={props:{name:{type:String,required:!0},link:{type:String,required:!0}}},r=(n(240),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"link-container"},[n("NuxtLink",{staticClass:"link",attrs:{to:e.link}},[e._v(" \n        "+e._s(e.name)+" \n    ")])],1)}),[],!1,null,"6f239603",null);t.default=component.exports},176:function(e,t,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("0d419326",content,!0,{sourceMap:!1})},177:function(e,t,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("67a793ea",content,!0,{sourceMap:!1})},179:function(e,t,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("243bafac",content,!0,{sourceMap:!1})},180:function(e,t,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("46ef1e54",content,!0,{sourceMap:!1})},181:function(e,t,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("eb4c9cee",content,!0,{sourceMap:!1})},182:function(e,t,n){"use strict";var o=n(16),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({attrs:{id:"SLetter",viewBox:"0 0 41 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},e.$listeners),[n("defs",[n("linearGradient",{attrs:{id:"Gradient1",spreadMethod:"reflect",x1:"-.5",y1:"1.5",x2:"1.5",y2:"-.5"}},[n("stop",{attrs:{offset:"0","stop-color":"#F41D62"}}),n("stop",{attrs:{offset:".6","stop-color":"#383de1"}},[n("animate",{attrs:{attributeName:"offset",values:"0.6;1;0.6",repeatCount:"indefinite",dur:"2.5",begin:"0",keySplines:"0.65, 0, 0.35, 1; 0.61, 1, 0.88, 1;"}})])],1)],1),n("path",{attrs:{d:"M1 2l16 16 7-16 16 16",stroke:"url(#Gradient1)","stroke-width":"3","stroke-dashoffset":"32","stroke-dasharray":"32 0","pointer-events":"none"}},[n("animate",{attrs:{attributeName:"stroke-dasharray",begin:"SLetter.mouseover",values:"0 32;64 0;",dur:"5",repeatCount:"1",keySplines:"0, 1, 0.18, 1;",calcMode:"spline"}})])])}),[],!1,null,null,null);t.a=component.exports},186:function(e,t,n){"use strict";t.a="precision mediump float;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying float wave;\nuniform float uTime;\nuniform vec2 uMouse;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  vec3 pos = position;  \n  \n  pos.z += snoise(vec3(pos.x * 5. + uTime * 0.5, pos.y * 5. + uTime * 0.5, 0.)) / 5.;\n  wave = pos.z;\n  pos.z *= 30. + 20. * (2. - abs(uMouse.x) - abs(uMouse.y));\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}"},187:function(e,t,n){"use strict";t.a="precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying float wave;\n\nuniform sampler2D uTexture;\nuniform float uTime;\n  \nvoid main() {\n  vec2 uv = vUv;\n  vec2 dUv = vec2(uv.x, uv.y);\n  vec3 texturePrep;\n\n  float w = wave;\n  float r = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).r;\n  float g = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).g;\n  float b = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).b;\n  texturePrep = vec3(r, g, b);    \n  \n  \n  gl_FragColor = vec4(texturePrep, 1.);\n}"},190:function(e,t,n){"use strict";n(193);var o={components:{SLetter:n(182).a},data:function(){return{showSidenav:!1,links:[{name:"sennery",path:"/"},{name:"about",path:"/about"},{name:"contacts",path:"/contacts"}]}},computed:{currentLink:function(){var e=this;return this.links.findIndex((function(t){return t.path==e.$nuxt.$route.path}))},nextLink:function(){var e;return null!==(e=this.links[this.currentLink+1])&&void 0!==e?e:this.links[0]},prevLink:function(){var e;return null!==(e=this.links[this.currentLink-1])&&void 0!==e?e:this.links[this.links.length-1]}}},r=(n(252),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("header",{staticClass:"links header"},[n("NuxtLink",{staticClass:"link",attrs:{to:e.prevLink.path}},[e._v(" \n            "+e._s(e.prevLink.name)+" \n        ")]),e._v(" "),n("span",{staticClass:"link menu",on:{click:function(t){e.showSidenav=!e.showSidenav}}},[e._v("\n            menu\n        ")])],1),e._v(" "),n("Nuxt",{staticClass:"page"}),e._v(" "),n("footer",{staticClass:"links footer"},[n("NuxtLink",{staticClass:"link",attrs:{to:e.nextLink.path}},[e._v(" \n            "+e._s(e.nextLink.name)+" \n        ")])],1),e._v(" "),n("NavigationMenu",{staticClass:"navigation",attrs:{enabled:e.showSidenav,links:e.links},on:{disable:function(t){e.showSidenav=!1}}})],1)}),[],!1,null,"7dde8760",null);t.a=component.exports;installComponents(component,{NavigationMenu:n(263).default})},191:function(e,t,n){"use strict";n.r(t);n(256);var o={props:{duration:{type:Number,default:.75},delay:{type:Number,default:0},mode:{type:String,default:"block"},overflowHidden:{type:Boolean,default:!0},translate:{type:Object,default:function(){return{x:0,y:100}}},rotate:{type:Object,default:function(){return{x:0,y:0}}}}},r=(n(260),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"text-raising",appear:""}},[n("span",{staticClass:"text-raising-wrapper",style:{"--text-raising-duration":e.duration+"s","--text-raising-delay":e.delay+"s","--text-raising-translate-x":e.translate.x+"%","--text-raising-translate-y":e.translate.y+"%","--text-raising-overflow-hidden":e.overflowHidden?"hidden":"","--text-raising-rotate-x":e.rotate.x+"deg","--text-raising-rotate-y":e.rotate.y+"deg",display:e.mode}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},195:function(e,t,n){n(196),e.exports=n(197)},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var o=new(n(2).a);t.a=function(e,t){t("events",o)}},238:function(e,t,n){"use strict";n(176)},239:function(e,t,n){var o=n(31)(!1);o.push([e.i,".error-page[data-v-5ff32360]{display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;font-size:2.5em;font-weight:400;color:hsla(0,0%,90.2%,.6)}.error-page .error[data-v-5ff32360]{font-size:2em;color:#e6e6e6;margin-bottom:.5em}.error-page .error span[data-v-5ff32360]:first-child{font-weight:800}.error-page .home-link[data-v-5ff32360]{max-width:20%}",""]),e.exports=o},240:function(e,t,n){"use strict";n(177)},241:function(e,t,n){var o=n(31)(!1);o.push([e.i,'.link-container[data-v-6f239603]{display:inline-block;position:relative;overflow:hidden}.link-container[data-v-6f239603]:after{content:"";position:absolute;bottom:0;left:-100%;width:100%;height:calc(1px + .025em);background:linear-gradient(to right top,#dd0357 -80%,#5d4df9);transition:transform .2s cubic-bezier(.25,1,.5,1) .2s}.link-container[data-v-6f239603]:hover:after{transition:transform .2s cubic-bezier(.25,1,.5,1);transform:translateX(100%)}.link-container[data-v-6f239603]:before{content:"";position:absolute;bottom:0;left:calc(100% + 1px);width:.5em;height:calc(1px + .025em);background:#3c3cde;transition:transform .2s cubic-bezier(.25,1,.5,1);transform-origin:left}.link-container[data-v-6f239603]:hover:before{transform:rotate(30deg) translateX(-100%)}.link-container .link[data-v-6f239603],.link-container[data-v-6f239603]:hover:before{transition:transform .2s cubic-bezier(.25,1,.5,1) .2s}.link-container .link[data-v-6f239603]{display:block;min-height:1.5em}.link-container:hover .link[data-v-6f239603]{color:#fff}@media(max-width:500px){.link-container[data-v-6f239603]{min-width:auto}}',""]),e.exports=o},244:function(e,t,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("3a312388",content,!0,{sourceMap:!1})},245:function(e,t,n){var o=n(31)(!1);o.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none;color:inherit}',""]),e.exports=o},246:function(e,t,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("03e6c45f",content,!0,{sourceMap:!1})},247:function(e,t,n){var o=n(31),r=n(248),c=n(249),l=n(250),d=n(251),h=o(!1),v=r(c),f=r(l),m=r(d);h.push([e.i,'@font-face{font-family:"Anodina";src:url('+v+') format("opentype");font-weight:300}@font-face{font-family:"Anodina";src:url('+f+') format("opentype");font-weight:400}@font-face{font-family:"Anodina";src:url('+m+') format("opentype");font-weight:800}:root{background-color:#17181c;color:#e6e6e6;font-family:"Anodina",sans-serif;font-weight:800;font-size:14px;--spacing-init:100px;--spacing:var(--spacing-init)}::-moz-selection{background-color:#691eca}::selection{background-color:#691eca}:root,body{overflow-x:hidden}.page-enter-active{transition:opacity 1.5s cubic-bezier(0,1,.18,1),transform .75s cubic-bezier(0,1,.18,1)}.page-enter{transform:translateY(-100vh) scaleY(0);opacity:0}@media(max-width:1200px){:root{--spacing:calc(var(--spacing-init)*0.7)}}@media(max-width:800px){.page-enter,.page-leave-to{transform:translateY(-100vh);opacity:0}}@media(max-width:500px){:root{--spacing:calc(var(--spacing-init)*0.25)}}',""]),e.exports=h},249:function(e,t,n){e.exports=n.p+"fonts/Anodina-Light.0ff42b5.otf"},250:function(e,t,n){e.exports=n.p+"fonts/Anodina-Regular.3520c61.otf"},251:function(e,t,n){e.exports=n.p+"fonts/Anodina-ExtraBold.89531a4.otf"},252:function(e,t,n){"use strict";n(179)},253:function(e,t,n){var o=n(31)(!1);o.push([e.i,".layout[data-v-7dde8760]{position:relative;overflow:hidden}.links[data-v-7dde8760]{display:flex;justify-content:space-between;width:100%;position:fixed;color:hsla(0,0%,90.2%,.6)}.links[data-v-7dde8760],.navigation[data-v-7dde8760]{z-index:2}.link[data-v-7dde8760]:hover{color:#e6e6e6}.menu[data-v-7dde8760]{cursor:pointer}.header[data-v-7dde8760]{top:2.5em}.footer[data-v-7dde8760]{bottom:2.5em}.links[data-v-7dde8760],.page[data-v-7dde8760]{padding:0 var(--spacing);box-sizing:border-box}",""]),e.exports=o},254:function(e,t,n){"use strict";n(180)},255:function(e,t,n){var o=n(31)(!1);o.push([e.i,'.menu-item[data-v-0e0c0eac]{z-index:3;margin-right:.5em;font-size:7.5em;font-weight:300}.close-icon[data-v-0e0c0eac]{position:fixed;top:2.5em;right:var(--spacing);color:hsla(0,0%,90.2%,.6);z-index:3;cursor:pointer}.close-icon[data-v-0e0c0eac]:hover{color:#e6e6e6}.sidenav[data-v-0e0c0eac],.sidenav[data-v-0e0c0eac]:after,.sidenav[data-v-0e0c0eac]:before{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:absolute;top:0;left:0;width:100vw;height:100vh;padding:0 var(--spacing);background-color:#17181c;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box}.side-enter[data-v-0e0c0eac],.side-enter[data-v-0e0c0eac]:after,.side-enter[data-v-0e0c0eac]:before,.side-leave-to[data-v-0e0c0eac]{transform:translateY(-100%)}.side-enter-active[data-v-0e0c0eac]{transition:transform .75s cubic-bezier(0,1,.18,1)}.side-enter-active.sidenav[data-v-0e0c0eac]:after{transition:transform .75s cubic-bezier(0,1,.2,1)}.side-enter-active.sidenav[data-v-0e0c0eac]:before,.side-leave-active[data-v-0e0c0eac]{transition:transform .75s cubic-bezier(0,1,.8,1)}.side-enter-active.sidenav[data-v-0e0c0eac]:after{content:"";z-index:1;background:linear-gradient(to right top,#dd0357 -80%,#5d4df9)}.side-enter-active.sidenav[data-v-0e0c0eac]:before{content:"";z-index:2}@media(max-width:1200px){.menu-item[data-v-0e0c0eac]{font-size:7em}}@media(max-width:500px){.menu-item[data-v-0e0c0eac]{font-size:5em}}@media(max-height:800px){.menu-item[data-v-0e0c0eac]{font-size:3.5em}}@media(max-height:500px){.menu-item[data-v-0e0c0eac]{font-size:2.5em}}',""]),e.exports=o},260:function(e,t,n){"use strict";n(181)},261:function(e,t,n){var o=n(31)(!1);o.push([e.i,".text-raising-wrapper{overflow:var(--text-raising-overflow-hidden)}.text-raising-enter-active,.text-raising-enter-active.text-raising-wrapper>*,.text-raising-leave-active,.text-raising-leave-active.text-raising-wrapper>*{transition:transform var(--text-raising-duration) var(--text-raising-delay) cubic-bezier(.25,1,.5,1)}.text-raising-enter.text-raising-wrapper>*,.text-raising-leave.text-raising-wrapper>*{transform:translate(var(--text-raising-translate-x),var(--text-raising-translate-y)) rotateX(var(--text-raising-rotate-x)) rotateY(var(--text-raising-rotate-y))!important}",""]),e.exports=o},263:function(e,t,n){"use strict";n.r(t);var o={props:{enabled:{type:Boolean,required:!0},links:{type:Array,required:!0}}},r=(n(254),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"side"}},[e.enabled?n("nav",{staticClass:"sidenav"},[e._l(e.links,(function(link,i){return n("TextTransition",{key:link.name,attrs:{delay:0+.1*i,rotate:{x:0,y:-90},translate:{x:100,y:0},overflowHidden:!1}},[n("NavigationRouteLink",{staticClass:"menu-item",attrs:{name:link.name,link:link.path},nativeOn:{click:function(t){return e.$emit("disable")}}})],1)})),e._v(" "),n("div",{staticClass:"close-icon",on:{click:function(t){return e.$emit("disable")}}},[e._v("\n            close\n        ")])],2):e._e()])}),[],!1,null,"0e0c0eac",null);t.default=component.exports;installComponents(component,{NavigationRouteLink:n(140).default,TextTransition:n(191).default})},41:function(e,t,n){"use strict";var o={props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"<%= messages.client_error %>"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},r=(n(238),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-page"},[404===e.statusCode?n("div",{staticClass:"error"},[n("span",[e._v("404")]),e._v(" "),n("span",[e._v("page not found")])]):n("div",[e._v("\n        Oops, something went wrong...\n    ")]),e._v(" "),n("NavigationRouteLink",{staticClass:"home-link",attrs:{name:"Go to home page",link:"/"}})],1)}),[],!1,null,"5ff32360",null);t.a=component.exports;installComponents(component,{NavigationRouteLink:n(140).default})},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var o=n(2),r=n(23),c=new o.a({data:function(){return{width:document.documentElement.clientWidth||document.body.clientWidth,height:Math.min(window.innerHeight,document.documentElement.clientHeight)}},computed:{ratio:function(){return this.width/this.height}},methods:{onWindowResize:function(){this.width=document.documentElement.clientWidth||document.body.clientWidth,this.height=Math.min(window.innerHeight,document.documentElement.clientHeight);var e=.01*this.height;return document.documentElement.style.setProperty("--vh","".concat(e,"px")),r.b.$emit("viewport:resize",this.$data),this.$data}},created:function(){this.onWindowResize(),addEventListener("resize",this.onWindowResize,!1)},beforeDestroy:function(){removeEventListener("resize",this.onWindowResize)}});t.a=function(e,t){t("viewport",c)}}},[[195,13,1,14]]]);