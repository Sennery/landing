(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,5],{264:function(e,n,t){"use strict";(function(e){var r=t(13),o=(t(17),t(58),t(33)),c=t(273),l=t.n(c),v=t(274),x=t(275);n.a={props:{src:{type:String,required:!0}},methods:{initMesh:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.geometry=new e.PlaneBufferGeometry(1,1,1e3,1e3),n.material=new e.ShaderMaterial({uniforms:{uTexture:{value:0},uTime:{value:0},uMouse:{value:[1,1]}},vertexShader:l()(v.a),fragmentShader:l()(x.a)}),t.next=4,n.loadTexture(n.src);case 4:r=t.sent,n.material.uniforms.uTexture.value=r,n.mesh=new e.Mesh(n.geometry,n.material),n.$webgl.scene.add(n.mesh);case 8:case"end":return t.stop()}}),t)})))()},loadTexture:function(n){var t=this;if(this.$webgl.textures[n])return this.$webgl.textures[n];var r=new e.TextureLoader;return new Promise((function(o,c){r.load(n,(function(r){r.minFilter=e.LinearFilter,r.generateMipmaps=!1,t.$webgl.textures[n]=r,o(r)}),void 0,(function(e){console.error("An error happened.",e)}))}))},positionate:function(){this.mesh.position.set(0,0,0)},resize:function(){this.mesh.scale.set(.8*this.$webgl.viewsize.width,.8*this.$webgl.viewsize.height,1)},onResize:function(){this.positionate(),this.resize()},initResize:function(){o.a.fromTo(this.mesh.scale,{x:0,y:0},{x:.8*this.$webgl.viewsize.width,y:.8*this.$webgl.viewsize.height,duration:5,delay:.75,ease:"power3.out"})},updateTime:function(time){this.material.uniforms.uTime.value=time},updateMouse:function(e){this.material.uniforms.uMouse.value=[e.x,e.y]},onTick:function(){var e=this.$webgl.clock.getElapsedTime();this.updateTime(e),this.updateMouse(this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.initMesh();case 2:e.positionate(),e.initResize(),e.$webgl.appendToDom(e.$refs.container),e.$events.$on("viewport:resize",e.onResize),requestAnimationFrame(e.onTick);case 7:case"end":return n.stop()}}),n)})))()},created:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene(),this.$events.$off("viewport:resize",this.onResize)}}}).call(this,t(182))},267:function(e,n,t){var content=t(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(25).default)("02a7277a",content,!0,{sourceMap:!1})},268:function(e,n,t){var content=t(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(25).default)("213f0b44",content,!0,{sourceMap:!1})},273:function(e,n){e.exports=function(e){"string"==typeof e&&(e=[e]);for(var n=[].slice.call(arguments,1),t=[],i=0;i<e.length-1;i++)t.push(e[i],n[i]||"");return t.push(e[i]),t.join("")}},274:function(e,n,t){"use strict";n.a="precision mediump float;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying float wave;\nuniform float uTime;\nuniform vec2 uMouse;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  vec3 pos = position;  \n  \n  pos.z += snoise(vec3(pos.x * 5. + uTime * 0.5, pos.y * 5. + uTime * 0.5, 0.)) / 5.;\n  wave = pos.z;\n  pos.z *= 30. + 20. * (2. - abs(uMouse.x) - abs(uMouse.y));\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}"},275:function(e,n,t){"use strict";n.a="precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying float wave;\n\nuniform sampler2D uTexture;\nuniform float uTime;\n  \nvoid main() {\n  vec2 uv = vUv;\n  vec2 dUv = vec2(uv.x, uv.y);\n  vec3 texturePrep;\n\n  float w = wave;\n  float r = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).r;\n  float g = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).g;\n  float b = texture2D(uTexture, dUv + vec2(0., 0.) + w * 0.0).b;\n  texturePrep = vec3(r, g, b);    \n  \n  \n  gl_FragColor = vec4(texturePrep, 1.);\n}"},276:function(e,n,t){"use strict";t(267)},277:function(e,n,t){var r=t(24)(!1);r.push([e.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}",""]),e.exports=r},278:function(e,n,t){"use strict";t(268)},279:function(e,n,t){var r=t(24)(!1);r.push([e.i,"a[data-v-59513da2]{font-weight:300;color:hsla(0,0%,90.2%,.6);overflow:hidden;line-height:normal;position:relative}a span[data-v-59513da2]{margin-left:1em}a .icon[data-v-59513da2],a span[data-v-59513da2]{position:relative;z-index:1}a .icon[data-v-59513da2]{fill:hsla(0,0%,90.2%,.6);vertical-align:middle;width:.5em;height:.5em}a[data-v-59513da2]:hover{color:#e6e6e6}a:hover .icon[data-v-59513da2]{fill:#e6e6e6}a .back[data-v-59513da2]{position:absolute;top:100%;left:0;width:100%;height:50%;background-color:var(--background-color);transition:transform .5s cubic-bezier(0,1,.18,1)}a:hover .back[data-v-59513da2]{transform:translateY(-100%)}",""]),e.exports=r},287:function(e,n,t){var content=t(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(25).default)("a8666b12",content,!0,{sourceMap:!1})},290:function(e,n,t){"use strict";t.r(n);var r=t(9),o=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},e.$listeners),[t("path",{attrs:{d:"M8.586 2H1V0h11v11h-2V3.414l-8.293 8.293-1.414-1.414L8.586 2z"}})])}),[],!1,null,null,null).exports,c={props:{name:{type:String,required:!0},link:{type:String,required:!0},color:{type:String,required:!0}},components:{LinkIcon:o}},l=(t(278),Object(r.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a",{style:{"--background-color":e.color},attrs:{href:e.link}},[t("span",[e._v(e._s(e.name))]),e._v(" "),t("LinkIcon",{staticClass:"icon"}),e._v(" "),t("div",{staticClass:"back"})],1)}),[],!1,null,"59513da2",null));n.default=l.exports},293:function(e,n,t){"use strict";t.r(n);var r=t(264).a,o=(t(276),t(9)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container",staticClass:"scene-container"})}),[],!1,null,null,null);n.default=component.exports},297:function(e,n,t){"use strict";t(287)},298:function(e,n,t){var r=t(24)(!1);r.push([e.i,"main[data-v-9b0ee5a6]{width:100vw}.side[data-v-9b0ee5a6],main[data-v-9b0ee5a6]{height:100vh}.side[data-v-9b0ee5a6]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background-color:#17181c;box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);position:absolute;top:0;left:50%}.side .title[data-v-9b0ee5a6]{font-size:10em;transform:translate(-10%,-20%)}.side .contact[data-v-9b0ee5a6]{display:block;width:50%;font-size:2.5em;margin:.5em 0 0 1em}",""]),e.exports=r},304:function(e,n,t){"use strict";t.r(n);var r={data:function(){return{contacts:[{name:"GitHub",color:"#bb268a",link:""},{name:"LinkedIn",color:"#9b2a9f",link:""},{name:"Telegram",color:"#7132bb",link:""},{name:"Email",color:"#5a38cb",link:""}]}}},o=(t(297),t(9)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("Container",[t("WebGLWaveImage",{attrs:{src:"/images/wave-image-texture.jpg"}}),e._v(" "),t("div",{staticClass:"side"},[t("div",[t("div",{staticClass:"title"},[t("TextRaiseTransition",[t("h1",[e._v("\n                            contacts\n                        ")])])],1),e._v(" "),e._l(e.contacts,(function(e,i){return t("TextRaiseTransition",{key:e.name,attrs:{delay:.025*i}},[t("ContactLink",{staticClass:"contact",attrs:{name:e.name,link:e.link,color:e.color}})],1)}))],2)])],1)],1)}),[],!1,null,"9b0ee5a6",null);n.default=component.exports;installComponents(component,{WebGLWaveImage:t(293).default,TextRaiseTransition:t(183).default,ContactLink:t(290).default,Container:t(134).default})}}]);