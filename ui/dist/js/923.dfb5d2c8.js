"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[923],{8923:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var s=t(3396),r=t(7139);const c={class:"home"},l={key:0,class:"text-center mt-5"},n={class:"cards d-flex flex-wrap justify-content-center align-items-center"},d={class:"title"};function i(e,a,t,i,o,u){return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("h4",null,(0,r.zw)(o.playerName),1),o.cards.length<=0?((0,s.wg)(),(0,s.iD)("h4",l,"Betöltés...")):(0,s.kq)("",!0),(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.cards,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"card p-2 m-2"},[(0,s._)("span",d,(0,r.zw)(e.title),1),(0,s._)("span",{class:(0,r.C_)(["value",{blur:e.blur}]),style:(0,r.j5)({color:e.color??"lightgray"})},(0,r.zw)(e.value),7)])))),128))])])}var o={name:"HomeView",data(){return{cards:[],playerName:""}},async created(){const e=await fetch(`https://${GetParentResourceName()}/requestData`,{method:"POST",body:JSON.stringify({name:"cards"})}),{cards:a,playerName:t}=await e.json();this.cards=a,this.playerName=t}},u=t(89);const h=(0,u.Z)(o,[["render",i],["__scopeId","data-v-116cfdfc"]]);var f=h}}]);
//# sourceMappingURL=923.dfb5d2c8.js.map