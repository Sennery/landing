(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{268:function(e,t,o){"use strict";(function(e){t.a={props:{src:{type:String,required:!0}},methods:{initLight:function(){this.light1=this.createSpotLight({color:14288218,intensity:.5,position:{x:0,y:50,z:50},castShadow:!0}),this.light2=this.createSpotLight({color:6507247,intensity:1,position:{x:0,y:-10,z:50},castShadow:!0}),this.$webgl.scene.add(this.light1,this.light2)},createSpotLight:function(t){var o=t.color,r=t.intensity,h=t.position,n=t.castShadow,c=new e.SpotLight(o,r);return c.position.set(h.x,h.y,h.z),n&&(c.castShadow=!0,c.shadow.mapSize.width=1024,c.shadow.mapSize.height=1024,c.shadow.camera.near=500,c.shadow.camera.far=4e3,c.shadow.camera.fov=30),c},initMesh:function(){this.meshGroup=new e.Group,this.meshGroup2=new e.Group,this.meshGroup3=new e.Group,this.mainSphere=this.createSphereMesh({radius:15,textureColor:16777215}),this.sphere2=this.createSphereMesh({radius:2,textureColor:16777215,position:{x:0,y:0,z:18}}),this.sphere3=this.createSphereMesh({radius:3.5,textureColor:16777215,position:{x:0,y:0,z:23}}),this.sphere4=this.createSphereMesh({radius:3,textureColor:16777215,position:{x:0,y:0,z:30}}),this.meshGroup.add(this.mainSphere,this.sphere2),this.meshGroup2.add(this.meshGroup,this.sphere3),this.meshGroup3.add(this.meshGroup2,this.sphere4),this.$webgl.scene.add(this.meshGroup3)},createSphereMesh:function(t){var o=t.radius,r=t.textureColor,h=t.position,n=void 0===h?{x:0,y:0,z:0}:h,c=new e.SphereGeometry(o,100,100),l=new e.MeshPhysicalMaterial({color:r}),d=new e.Mesh(c,l);return d.position.set(n.x,n.y,n.z),d},updateMouse:function(e){this.light1.position.set(50*e.x,50+50*e.y),this.meshGroup3.position.set(5*e.x,e.y),this.meshGroup3.rotation.z=-e.x*Math.PI/4,this.meshGroup3.rotation.x=-e.y*Math.PI/4},updateAngle:function(time,e){this.meshGroup.rotation.y=time/1500,this.meshGroup2.rotation.y=time/1500,this.meshGroup3.rotation.y=(time+1e3*e.x)/1500},onTick:function(time){this.updateMouse(this.$mouse.lerpedNormalized),this.updateAngle(time,this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){this.initLight(),this.initMesh(),this.$webgl.appendToDom(this.$refs.container),requestAnimationFrame(this.onTick)},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene()}}}).call(this,o(187))},272:function(e,t,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("4324beb1",content,!0,{sourceMap:!1})},282:function(e,t,o){"use strict";o(272)},283:function(e,t,o){var r=o(25)(!1);r.push([e.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}.circle canvas{left:25%}@media(max-width:500px){.circle canvas{left:0}}",""]),e.exports=r},292:function(e,t,o){"use strict";o.r(t);var r=o(268).a,h=(o(282),o(9)),component=Object(h.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container",staticClass:"scene-container circle"})}),[],!1,null,null,null);t.default=component.exports}}]);