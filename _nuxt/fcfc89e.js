(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{285:function(t,n,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("1b6e9a79",content,!0,{sourceMap:!1})},299:function(t,n,e){"use strict";e(285)},300:function(t,n,e){var o=e(28)(!1);o.push([t.i,"nav[data-v-04b0e6ef]{flex-direction:column;box-sizing:border-box;max-width:5em;height:100vh;position:absolute;top:0;left:0;padding:1em;z-index:999;font-weight:300}nav[data-v-04b0e6ef],nav .link[data-v-04b0e6ef]{display:flex;justify-content:center;align-items:center}nav .link[data-v-04b0e6ef]{height:100%;margin-right:1em}nav .home-icon[data-v-04b0e6ef]{width:100%;padding:.75em;margin:1em 0;z-index:3;border-radius:10%;background-color:rgba(23,24,28,.4);transition:1s cubic-bezier(0,1,.18,1);transform:rotate(-90deg);cursor:pointer}nav .home-icon[data-v-04b0e6ef]:hover{transform:rotate(-90deg) scale(1.1)}nav .bar[data-v-04b0e6ef]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;color:hsla(0,0%,90.2%,.6)}nav .angle[data-v-04b0e6ef]{fill:hsla(0,0%,90.2%,.6)}nav .angle.bottom[data-v-04b0e6ef]{transform:rotate(180deg)}",""]),t.exports=o},303:function(t,n,e){"use strict";e.r(n);e(194);var o=e(183),r=e(13),l=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",t._g({attrs:{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[e("path",{attrs:{d:"M16 6.594l-.719.687-12.5 12.5L4.22 21.22 16 9.437 27.781 21.22l1.438-1.438-12.5-12.5z"}})])}),[],!1,null,null,null).exports,c=e(43),h={components:{SLetter:o.a,Angle:l},data:function(){return{showSidenav:!1,links:[{name:"sennery",path:"/"},{name:"about",path:"/about"},{name:"contacts",path:"/contacts"}]}},computed:{currentLink:function(){var t=this;return this.links.findIndex((function(n){return n.path==t.$nuxt.$route.path}))},nextLink:function(){var t;return null!==(t=this.links[this.currentLink+1])&&void 0!==t?t:this.links[0]},prevLink:function(){var t;return null!==(t=this.links[this.currentLink-1])&&void 0!==t?t:this.links[this.links.length-1]}},methods:{onBreakpoint:function(t){this.$router.push({path:t?this.nextLink.path:this.prevLink.path})},updateScroll:function(t){c.a.set(".home-icon",{y:this.$viewport.height*t*.3}),c.a.set([".angle.top",".prev-link"],{y:this.$viewport.height*t*.35,opacity:1-3*t}),c.a.set([".angle.bottom",".next-link"],{y:this.$viewport.height*t*.35,opacity:1+3*t})},loop:function(){this.updateScroll(this.$scroll.lerpedNormalized),this.reqFrame=requestAnimationFrame(this.loop)}},mounted:function(){this.$events.$on("scroll:breackpoint",this.onBreakpoint),requestAnimationFrame(this.loop)}},d=(e(299),Object(r.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",[e("div",{staticClass:"bar"},[e("Angle",{staticClass:"angle top"}),t._v(" "),e("span",{staticClass:"prev-link"},[t._v("\n            "+t._s(this.prevLink.name)+"\n        ")]),t._v(" "),e("SLetter",{staticClass:"home-icon",on:{click:function(n){t.showSidenav=!t.showSidenav}}}),t._v(" "),e("span",{staticClass:"next-link"},[t._v("\n            "+t._s(this.nextLink.name)+"\n        ")]),t._v(" "),e("Angle",{staticClass:"angle bottom"})],1),t._v(" "),e("NavigationSide",{attrs:{enabled:t.showSidenav,links:t.links},on:{disable:function(n){t.showSidenav=!1}}})],1)}),[],!1,null,"04b0e6ef",null));n.default=d.exports}}]);