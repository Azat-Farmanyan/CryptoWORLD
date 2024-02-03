import{a as k}from"./chunk-DXHRM6NG.js";import{a as j}from"./chunk-K4YR7IRC.js";import{a as S,b as D}from"./chunk-32L2R67C.js";import"./chunk-2WFZDX4G.js";import{a as W,b as $}from"./chunk-LGBOVJPT.js";import{A as o,G as h,J as C,K as f,L as d,M as s,N as l,O as i,P as p,T as u,U as a,V as c,W as y,X as T,Z as F,j as v,m as _,n as M,o as b,oa as P,q as I,w as x,za as E}from"./chunk-LRLJ6IC5.js";function U(e,n){e&1&&p(0,"app-loading")}function R(e,n){e&1&&p(0,"app-no-result-found")}var g=(e,n)=>n._id;function V(e,n){if(e&1&&(l(0,"div",5),p(1,"img",6),l(2,"div",7)(3,"h6"),a(4),i(),l(5,"p"),a(6),i()()()),e&2){let t=n.$implicit;o(1),h("src",t==null||t.item==null?null:t.item.small,x),o(3),c(t==null||t.item==null?null:t.item.name),o(2),c(t==null||t.item==null?null:t.item.symbol)}}function q(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function A(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function B(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function G(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function H(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function J(e,n){if(e&1&&(l(0,"div",8),a(1),i()),e&2){let t=n.$implicit;o(1),c(t==null||t.item==null||t.item.data==null?null:t.item.data.price)}}function K(e,n){if(e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),a(3,"Coin"),i(),d(4,V,7,3,"div",9,g),i(),l(6,"div",3)(7,"div",4)(8,"div",2),a(9,"Price"),i(),d(10,q,2,1,"div",10,g),i(),l(12,"div",4)(13,"div",2),a(14,"1h"),i(),d(15,A,2,1,"div",10,g),i(),l(17,"div",4)(18,"div",2),a(19,"24h"),i(),d(20,B,2,1,"div",10,g),i(),l(22,"div",4)(23,"div",2),a(24,"7d"),i(),d(25,G,2,1,"div",10,g),i(),l(27,"div",4)(28,"div",2),a(29,"24h Volume"),i(),d(30,H,2,1,"div",10,g),i(),l(32,"div",4)(33,"div",2),a(34,"Market Cap"),i(),d(35,J,2,1,"div",10,g),i()()()),e&2){let t=u(2);o(4),s(t.trendingCoins),o(6),s(t.trendingCoins),o(5),s(t.trendingCoins),o(5),s(t.trendingCoins),o(5),s(t.trendingCoins),o(5),s(t.trendingCoins),o(5),s(t.trendingCoins)}}function Q(e,n){if(e&1&&C(0,R,1,0,"app-no-result-found")(1,K,37,0),e&2){let t=u();f(0,t.trendingCoins.length===0?0:1)}}var z=(()=>{let n=class n{constructor(){this.trendingService=_(j),this.searchService=_(k),this.windowParamsService=_(W),this.MenuParamsService=_($),this.trendCoinsLoading=!0,this.trendingCoins=[],this.originalTrendingCoins=[],this.contentWidth=0,this.searchedWord=""}ngOnInit(){this.getTrendingCoins(),this.getContentWidth()}getTrendingCoins(){this.trendingServiceSubs=this.trendingService.getTrendingCoins().subscribe(m=>{this.originalTrendingCoins=m,this.trendingCoins=m,this.trendCoinsLoading=!1,this.searchWordSubs=this.searchService.searchedWord.subscribe(r=>{this.searchedWord=r,this.filterData(r)})})}getContentWidth(){this.windowParamsService.contentWidth.subscribe(m=>{console.log(m),this.contentWidth=m})}filterData(m){m.length===0?this.trendingCoins=this.originalTrendingCoins:this.trendingCoins=this.trendingCoins.filter(r=>r?.item?.name.toLowerCase().includes(m.toLowerCase()))}ngOnDestroy(){this.trendingServiceSubs&&this.trendingServiceSubs.unsubscribe(),this.searchWordSubs&&this.searchWordSubs.unsubscribe()}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=M({type:n,selectors:[["app-trending"]],decls:2,vars:1,consts:[[1,"crypto-table"],[1,"fixed-column"],[1,"column-title"],[1,"scrollable-content"],[1,"info-column"],[1,"coin-item"],["alt","",1,"coin-img",3,"src"],[1,"coin-item-title"],[1,"table-item"],["class","coin-item"],["class","table-item"]],template:function(r,O){r&1&&C(0,U,1,0,"app-loading")(1,Q,2,1),r&2&&f(0,O.trendCoinsLoading?0:1)},dependencies:[D,S],styles:[".crypto-table[_ngcontent-%COMP%]{width:100%;border-radius:20px;background:#FCFCFC;box-shadow:0 20px 50.5px -9px #2d2d2d1a;padding:35px 33px;display:flex;gap:20px;justify-content:space-between;overflow-x:auto}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:20px}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]   .coin-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;height:55px}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]   .coin-item[_ngcontent-%COMP%]   .coin-img[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;border-radius:5px}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]   .coin-item[_ngcontent-%COMP%]   .coin-item-title[_ngcontent-%COMP%]{display:flex;flex-direction:column}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]   .coin-item[_ngcontent-%COMP%]   .coin-item-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#111;font-size:18px;font-style:normal;font-weight:600;line-height:normal;letter-spacing:-.18px}.crypto-table[_ngcontent-%COMP%]   .fixed-column[_ngcontent-%COMP%]   .coin-item[_ngcontent-%COMP%]   .coin-item-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#111;font-size:14px;font-style:normal;font-weight:300;line-height:normal;letter-spacing:-.14px}.crypto-table[_ngcontent-%COMP%]   .scrollable-content[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:space-between;overflow-x:auto;max-width:50vw;width:100%}.crypto-table[_ngcontent-%COMP%]   .scrollable-content[_ngcontent-%COMP%]   .info-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;max-width:400px;width:100%}.crypto-table[_ngcontent-%COMP%]   .scrollable-content[_ngcontent-%COMP%]   .info-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{text-align:right;min-height:50px}.crypto-table[_ngcontent-%COMP%]   .scrollable-content[_ngcontent-%COMP%]   .info-column[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]{display:flex;align-items:right;justify-content:flex-end;height:55px}.column-title[_ngcontent-%COMP%]{color:#111;font-size:18px;font-style:normal;font-weight:600;line-height:normal;letter-spacing:-.18px;min-height:50px}"]});let e=n;return e})();var X=[{path:"",component:z}],L=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=b({type:n}),n.\u0275inj=v({imports:[E.forChild(X),E]});let e=n;return e})();function Y(e,n){if(e&1&&(p(0,"img",9),a(1)),e&2){let t=u(2);h("src",t.Data==null?null:t.Data.image,x)("alt",t.Data==null?null:t.Data.name),o(1),T(" ",t.Data==null||t.Data.item==null?null:t.Data.item.name," ",t.Data==null||t.Data.item==null?null:t.Data.item.symbol," ")}}function Z(e,n){if(e&1&&(p(0,"img",9),a(1)),e&2){let t=u(2);h("src",t.Data==null||t.Data.item==null?null:t.Data.item.small,x)("alt",t.Data==null?null:t.Data.name),o(1),T(" ",t.Data==null||t.Data.item==null?null:t.Data.item.name," ",t.Data==null||t.Data.item==null?null:t.Data.item.symbol," ")}}function tt(e,n){if(e&1&&(l(0,"div",1),C(1,Y,2,4)(2,Z,2,4),i(),l(3,"div",2)(4,"div",3),a(5),i(),l(6,"div",4),a(7,"undefined"),i(),l(8,"div",5),a(9,"undefined"),i(),l(10,"div",6),a(11,"undefined"),i(),l(12,"div",7),a(13),i(),l(14,"div",8),a(15),i()()),e&2){let t=u();o(1),f(1,t.Data!=null&&t.Data.image?1:2),o(4),y(" ",t.Data==null||t.Data.item==null||t.Data.item.data==null?null:t.Data.item.data.price," "),o(8),y(" ",t.Data==null||t.Data.item==null||t.Data.item.data==null?null:t.Data.item.data.total_volume," "),o(2),y(" ",t.Data==null||t.Data.item==null||t.Data.item.data==null?null:t.Data.item.data.market_cap," ")}}var N=(()=>{let n=class n{constructor(){this.Data={}}ngOnChanges(m){}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=M({type:n,selectors:[["app-trending-item"]],inputs:{Data:"Data"},standalone:!0,features:[I,F],decls:2,vars:1,consts:[[1,"trending-item"],[1,"name"],[1,"info-block"],[1,"price"],[1,"1h"],[1,"24h"],[1,"7d"],[1,"24h-volume"],[1,"market-cap"],[3,"src","alt"]],template:function(r,O){r&1&&(l(0,"div",0),C(1,tt,16,4),i()),r&2&&(o(1),f(1,O.Data?1:-1))},dependencies:[P],styles:[".trending-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 6fr;text-align:center;gap:10px;color:#111;font-family:Sora;font-size:18px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.18px}.trending-item[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);text-align:center;gap:10px;overflow-x:scroll}"]});let e=n;return e})();var bt=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=b({type:n}),n.\u0275inj=v({imports:[P,L,N,D,S]});let e=n;return e})();export{bt as TrendingModule};