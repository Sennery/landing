(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{266:function(e,t,n){"use strict";(function(e,n){t.a={methods:{initLight:function(){var e=this.$webglAssets.getLight("circles");this.light1=e.light1,this.light2=e.light2,this.$webgl.scene.add(this.light1,this.light2)},initMesh:function(){var t=this.$webglAssets.getMesh("circles");this.meshGroup=new e.Group,this.meshGroup.add(t.mainSphere,t.sphere2),this.meshGroup2=new e.Group,this.meshGroup2.add(this.meshGroup,t.sphere3),this.meshGroup3=new e.Group,this.meshGroup3.add(this.meshGroup2,t.sphere4),this.$webgl.scene.add(this.meshGroup3)},animateMeshAppearance:function(){console.log(n),n.fromTo(this.meshGroup3.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,delay:.5,duration:.75,ease:"power3.out"})},updateMouse:function(e){this.meshGroup3.position.set(5*e.x+20,e.y),this.meshGroup3.rotation.z=-e.x*Math.PI/4,this.meshGroup3.rotation.x=-e.y*Math.PI/4},updateAngle:function(time,e){this.meshGroup.rotation.y=time/1500,this.meshGroup2.rotation.y=time/1500,this.meshGroup3.rotation.y=(time+1e3*e.x)/1500},onTick:function(time){this.updateMouse(this.$mouse.lerpedNormalized),this.updateAngle(time,this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){this.initLight(),this.initMesh(),this.animateMeshAppearance(),this.$webgl.appendToDom(this.$refs.container),requestAnimationFrame(this.onTick)},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene()}}}).call(this,n(139),n(43).gsap)},270:function(e,t,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("04e2d7dd",content,!0,{sourceMap:!1})},277:function(e,t,n){"use strict";n(270)},278:function(e,t,n){var o=n(31)(!1);o.push([e.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}",""]),e.exports=o},284:function(e,t,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("53657e64",content,!0,{sourceMap:!1})},291:function(e,t,n){"use strict";n.r(t);var o=n(266).a,r=(n(277),n(16)),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container",staticClass:"scene-container circle"})}),[],!1,null,null,null);t.default=component.exports},298:function(e,t,n){"use strict";n(284)},299:function(e,t,n){var o=n(31)(!1);o.push([e.i,"main[data-v-389acbfd]{display:flex;flex-direction:column;justify-content:center;min-height:100vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}main .subtitle[data-v-389acbfd],main .title[data-v-389acbfd]{position:relative;z-index:2}main .title[data-v-389acbfd]{max-width:50%;font-size:10em}main .subtitle[data-v-389acbfd]{margin-top:1em;font-size:2.5em;font-weight:400;color:hsla(0,0%,90.2%,.6)}@media(max-width:500px){main .title[data-v-389acbfd]{font-size:3.5em;max-width:75%}main .subtitle[data-v-389acbfd]{font-size:2em;margin-top:.5em}}",""]),e.exports=o},311:function(e,t,n){"use strict";n.r(t);var o={},r=(n(298),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"title"},[e._v("\n        Arsenii Likhachev\n    ")]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v("\n        web developer\n    ")]),e._v(" "),n("WebglCircle",{attrs:{src:"/images/texture-for-wave.png"}})],1)}),[],!1,null,"389acbfd",null);t.default=component.exports;installComponents(component,{WebglCircle:n(291).default})}}]);