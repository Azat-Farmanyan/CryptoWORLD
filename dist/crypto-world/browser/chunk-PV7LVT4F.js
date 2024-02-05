import{C as r,F as b,L as u,M as C,R as n,S as i,T as p,U as k,W as O,X as g,Y as l,Z as m,ba as x,o as d,s as h,sa as f,t as _,u as M}from"./chunk-3PASIEOY.js";function y(e,t){if(e&1&&(n(0,"p",9),l(1),i()),e&2){let a=g(2);r(1),m(a.errorMessage)}}function v(e,t){if(e&1){let a=k();u(0,y,2,1,"p",4),n(1,"button",5),O("click",function(){h(a);let o=g();return _(o.reload())}),n(2,"p",6),l(3,"Reload page"),i(),M(),n(4,"svg",7),p(5,"path",8),i()()}if(e&2){let a=g();C(0,a.errorMessage?0:-1)}}var I=(()=>{let t=class t{constructor(){this.onReload=new b,this.errorMessage="",this.loadingText="Loading",this.dots="",this.returnBtn=!1}ngOnInit(){this.interval=setInterval(()=>{this.updateDots()},500),setTimeout(()=>{this.returnBtn=!0},3e3)}ngOnDestroy(){clearInterval(this.interval)}updateDots(){this.dots.length<3?this.dots+=".":this.dots=""}reload(){this.onReload.emit()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-loading"]],inputs:{errorMessage:"errorMessage"},outputs:{onReload:"onReload"},standalone:!0,features:[x],decls:6,vars:3,consts:[[1,"loading-block"],[1,"loading"],[1,"dots"],["class","reload-btn"],["style","color: red;"],[1,"reload-btn",3,"click"],[1,"reload"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M2 12C2 14.3869 2.94821 16.6761 4.63604 18.364C6.32387 20.0518 8.61305 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C15.2702 17.5664 14.5104 18.0966 13.6676 18.4578C12.8248 18.819 11.9169 19.0036 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 9.61305 19.0518 7.32387 17.364 5.63604C15.6761 3.94821 13.3869 3 11 3C8.61305 3 6.32387 3.94821 4.63604 5.63604C2.94821 7.32387 2 9.61305 2 12Z","fill","#0096FF"],[2,"color","red"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"p",1),l(2),n(3,"span",2),l(4),i()(),u(5,v,6,1,"button",3),i()),o&2&&(r(2),m(c.loadingText),r(2),m(c.dots),r(1),C(5,c.returnBtn?5:-1))},dependencies:[f],styles:['.loading-block[_ngcontent-%COMP%]{border-radius:20px;background:#FFF;padding:30px;display:flex;flex-direction:column;justify-content:space-between}.loading-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}.loading-block[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{display:inline-block;color:#111;font-family:Sora;font-size:34px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;height:50px}.loading-block[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:#555;animation:_ngcontent-%COMP%_dotsAnimation 1.5s infinite;color:#111;font-family:Sora;font-size:26px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;margin-bottom:5px}@keyframes _ngcontent-%COMP%_dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,to{content:"..."}}.loading-block[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:auto}.loading-block[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%]{font-weight:400;font-size:18px;color:#0096ff}']});let e=t;return e})();var z=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-no-result-found"]],standalone:!0,features:[x],decls:7,vars:0,consts:[[1,"no-result-block"],["src","../../../assets/icons/no-resullt-icon.svg","alt","no-resullt"],[1,"txt-block"],[1,"oops"],[1,"no-result-txt"]],template:function(o,c){o&1&&(n(0,"div",0),p(1,"img",1),n(2,"div",2)(3,"p",3),l(4,"OOPS!"),i(),n(5,"p",4),l(6,"Coin not found in the list. Please check the spelling or try a different search term. "),i()()())},dependencies:[f],styles:[".no-result-block[_ngcontent-%COMP%]{border-radius:20px;background:#FFF;display:flex;flex-direction:row;gap:20px;align-items:center;padding:30px;transition:all .5s ease}@media only screen and (max-width: 600px){.no-result-block[_ngcontent-%COMP%]{flex-direction:column}}.no-result-block[_ngcontent-%COMP%]:hover{box-shadow:0 20px 50.5px -9px #2d2d2d1a}.no-result-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px;max-height:120px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{color:#111;font-family:Sora;font-size:32px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;margin-bottom:5px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]   .no-result-txt[_ngcontent-%COMP%]{color:#111;font-family:Sora;font-size:16px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.24px}"]});let e=t;return e})();var B="https://api.coingecko.com/api/v3/coins/",R="https://api.coingecko.com/api/v3/search/trending",V="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";export{B as a,R as b,V as c,I as d,z as e};