(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{273:function(e,t,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("719981b1",content,!0,{sourceMap:!1})},278:function(e,t,n){"use strict";n(273)},279:function(e,t,n){var r=n(26)(!1);r.push([e.i,"canvas{position:fixed;top:0;left:0;pointer-events:none}",""]),e.exports=r},291:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(51),n(25)),c={methods:{initMesh:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$webglAssets.getMesh("waveImage");case 2:e.mesh=t.sent,e.$webgl.scene.add(e.mesh);case 4:case"end":return t.stop()}}),t)})))()},positionate:function(){this.mesh.position.set(0,0,0)},resize:function(){this.mesh.scale.set(.8*this.$webgl.viewsize.width,.8*this.$webgl.viewsize.height,1)},onResize:function(){this.positionate(),this.resize()},animateMeshAppearance:function(){var e=this;o.a.fromTo(this.mesh.scale,{x:0,y:0},{x:.8*this.$webgl.viewsize.width,y:.8*this.$webgl.viewsize.height,duration:5,delay:.75,ease:"power3.out",onComplete:function(){e.$events.$on("viewport:resize",e.onResize)}})},updateTime:function(time){this.mesh.material.uniforms.uTime.value=time},updateMouse:function(e){this.mesh.material.uniforms.uMouse.value=[e.x,e.y]},onTick:function(){var e=this.$webgl.clock.getElapsedTime();this.updateTime(e),this.updateMouse(this.$mouse.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.onTick)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initMesh();case 2:e.animateMeshAppearance(),e.$webgl.appendToDom(e.$refs.container),requestAnimationFrame(e.onTick);case 5:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){cancelAnimationFrame(this.reqFrame),this.$webgl.clearScene(),this.$events.$off("viewport:resize",this.onResize),o.a.killTweensOf(this.mesh.scale)}},h=(n(278),n(10)),component=Object(h.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container",staticClass:"scene-container"})}),[],!1,null,null,null);t.default=component.exports}}]);