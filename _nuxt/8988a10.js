(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{268:function(e,t,o){"use strict";(function(e){var r=o(29);t.a={props:{src:{type:String,required:!0}},methods:{initLight:function(){this.light1=this.createSpotLight({color:14288218,intensity:.5,position:{x:25,y:0,z:50},castShadow:!0}),this.light2=this.createSpotLight({color:6507247,intensity:1,position:{x:-25,y:-50,z:100}}),this.$webgl.scene.add(this.light1,this.light2)},createSpotLight:function(t){var o=t.color,r=t.intensity,h=t.position,n=t.castShadow,c=new e.SpotLight(o,r);return c.position.set(h.x,h.y,h.z),n&&(c.castShadow=!0,c.shadow.mapSize.width=1024,c.shadow.mapSize.height=1024,c.shadow.camera.near=.5,c.shadow.camera.far=500,c.shadow.camera.fov=90,c.shadow.camera.focus=.1),c},initMesh:function(){return this.meshGroup=new e.Group,this.meshGroup2=new e.Group,this.meshGroup3=new e.Group,this.mainSphere=this.createSphereMesh({radius:15,castShadow:!0}),this.sphere2=this.createSphereMesh({radius:2,position:{x:0,y:0,z:18},receiveShadow:!0}),this.sphere3=this.createSphereMesh({radius:3.5,position:{x:0,y:0,z:23},receiveShadow:!0}),this.sphere4=this.createSphereMesh({radius:3,position:{x:0,y:0,z:30},receiveShadow:!0}),this.meshGroup.add(this.mainSphere,this.sphere2),this.meshGroup2.add(this.meshGroup,this.sphere3),this.meshGroup3.add(this.meshGroup2,this.sphere4),this.$webgl.scene.add(this.meshGroup3),this.meshGroup3},createSphereMesh:function(t){var o=t.radius,r=t.textureColor,h=void 0===r?new e.Color(16777215):r,n=t.position,c=void 0===n?{x:0,y:0,z:0}:n,d=t.receiveShadow,l=void 0!==d&&d,m=t.castShadow,w=void 0!==m&&m,f=this.$webgl.geometries.sphere,S=new e.MeshPhysicalMaterial({reflectivity:0,transmission:0,roughness:1,metalness:0,clearcoat:1,clearcoatRoughness:1.5,color:h,ior:1.2,thickness:10}),v=new e.Mesh(f,S);return v.castShadow=w,v.receiveShadow=l,v.position.set(c.x,c.y,c.z),v.scale.set(o,o,o),v},updateMouse:function(e){this.meshGroup3.position.set(5*e.x,e.y),this.meshGroup3.rotation.z=-e.x*Math.PI/4,this.meshGroup3.rotation.x=-e.y*Math.PI/4},updateAngle:function(time,e){this.meshGroup.rotation.y=time/1500,this.meshGroup2.rotation.y=time/1500,this.meshGroup3.rotation.y=(time+1e3*e.x)/1500},onTick:function(time){this.updateMouse(this.$mouse.lerpedNormalized),this.updateAngle(time,this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){this.initLight();var e=this.initMesh();r.a.fromTo(e.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:1,ease:"power3.out"}),this.$webgl.appendToDom(this.$refs.container),requestAnimationFrame(this.onTick)},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene()}}}).call(this,o(187))},272:function(e,t,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(26).default)("4324beb1",content,!0,{sourceMap:!1})},282:function(e,t,o){"use strict";o(272)},283:function(e,t,o){var r=o(25)(!1);r.push([e.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}.circle canvas{left:25%}@media(max-width:500px){.circle canvas{left:0}}",""]),e.exports=r},292:function(e,t,o){"use strict";o.r(t);var r=o(268).a,h=(o(282),o(10)),component=Object(h.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container",staticClass:"scene-container circle"})}),[],!1,null,null,null);t.default=component.exports}}]);