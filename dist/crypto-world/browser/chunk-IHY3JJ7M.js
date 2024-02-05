import{c as j}from"./chunk-PV7LVT4F.js";import{C as a,I as g,L as C,M as _,R as o,S as r,T as d,X as s,Y as l,Z as y,_ as v,ba as D,ca as w,ea as u,f as M,fa as x,ga as P,j as O,la as S,m as h,o as f,oa as k,pa as I,qa as T,r as b,ra as z,sa as E,ta as F,y as m}from"./chunk-3PASIEOY.js";function U(n,e){n&1&&(o(0,"div",3),l(1," Loading ... "),r(),o(2,"div",4),d(3,"div",5),o(4,"div",6),l(5," Loading ... "),o(6,"div",7),l(7," Loading ... "),r()()())}function B(n,e){if(n&1&&d(0,"img",0),n&2){let t=s(2);g("src",t.coinData==null||t.coinData.item==null?null:t.coinData.item.small,m)}}function G(n,e){if(n&1&&d(0,"img",0),n&2){let t=s(2);g("src",t.coinData==null?null:t.coinData.image,m)}}function H(n,e){n&1&&d(0,"div",5)}function N(n,e){if(n&1&&(o(0,"p",18),l(1),u(2,"currency"),r()),n&2){let t=s(2);a(1),y(P(2,1,t.coinData==null?null:t.coinData.current_price,"$"))}}function $(n,e){if(n&1&&(o(0,"p",18),l(1),r()),n&2){let t=s(2);a(1),y(t.coinData==null||t.coinData.item==null||t.coinData.item.data==null?null:t.coinData.item.data.price)}}var q=n=>({"down-arrow":n});function A(n,e){if(n&1&&(o(0,"div",3)(1,"div",8),C(2,B,1,1,"img",0)(3,G,1,1),r(),o(4,"div",9)(5,"h4",10),l(6),u(7,"titlecase"),r(),o(8,"h6",11),l(9),u(10,"uppercase"),r()()(),o(11,"div",4),C(12,H,1,0,"div",12),o(13,"div",6),C(14,N,3,4,"p",13)(15,$,2,1),o(16,"div",7)(17,"p",14),l(18),u(19,"number"),r(),o(20,"div",15),d(21,"img",16)(22,"img",17),r()()()()),n&2){let t=s(),c,i,p;a(2),_(2,!(t.coinData==null||t.coinData.item==null)&&t.coinData.item.small?2:3),a(4),y(x(7,8,(c=t.coinData==null||t.coinData.item==null?null:t.coinData.item.name)!==null&&c!==void 0?c:t.coinData==null?null:t.coinData.name)),a(3),y(x(10,10,(i=t.coinData==null||t.coinData.item==null?null:t.coinData.item.symbol)!==null&&i!==void 0?i:t.coinData==null?null:t.coinData.symbol)),a(3),_(12,t.showGraphic?12:-1),a(2),_(14,t.coinData!=null&&t.coinData.current_price?14:15),a(4),v("",P(19,12,t.changeIn24h,"1.1-1"),"%"),a(3),g("src",(p=t.coinData==null||t.coinData.item==null?null:t.coinData.item.small)!==null&&p!==void 0?p:t.coinData==null?null:t.coinData.image,m),a(1),g("ngClass",w(15,q,t.changeIn24h<0))}}var Q=(()=>{let e=class e{constructor(){this.coinData={},this.isLoading=!0,this.showGraphic=!1,this.changeIn24h=0}ngOnChanges(c){this.changeIn24h=this.coinData?.item?.data?.price_change_percentage_24h?.usd??this.coinData?.price_change_percentage_24h}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-crypto-card-small"]],inputs:{coinData:"coinData",isLoading:"isLoading",showGraphic:"showGraphic"},standalone:!0,features:[b,D],decls:5,vars:2,consts:[["alt","",3,"src"],[1,"crypto-card"],[1,"crypto-card-body"],[1,"card-header"],[1,"card-body"],[1,"diagram"],[1,"crypto-currency-block"],[1,"percent"],[1,"crypto-icon"],[1,"crypto-title-block"],[1,"crypto-title"],[1,"crypto-abbreviation"],["class","diagram"],["class","price"],[1,"percent-txt"],[1,"percent-icon"],["alt","",1,"percent-icon-bg",3,"src"],["src","../../../assets/icons/percent-arrow-icon.svg","alt","",1,"percent-icon-arrow",3,"ngClass"],[1,"price"]],template:function(i,p){i&1&&(d(0,"img",0),o(1,"div",1)(2,"div",2),C(3,U,8,0)(4,A,23,17),r()()),i&2&&(g("src",p.coinData==null?null:p.coinData.large,m),a(3),_(3,p.isLoading?3:4))},dependencies:[E,S,I,T,k,z],styles:[".crypto-card[_ngcontent-%COMP%]{padding:18px 23px 23px;border-radius:20px;background:#FCFCFC;box-shadow:0 20px 50.5px -9px #2d2d2d1a;width:100%;max-height:295px;color:#111;font-style:normal;line-height:normal;transition:box-shadow .3s ease-in-out;cursor:pointer;transition:all .3s ease-in-out}.crypto-card[_ngcontent-%COMP%]:hover{box-shadow:0 20px 50.5px -9px #2d2d2d40;transform:scale(1.05)}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:18px;align-items:center;min-height:52px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .crypto-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px;object-fit:cover}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .crypto-title-block[_ngcontent-%COMP%]   .crypto-title[_ngcontent-%COMP%]{font-size:22px;font-weight:600;letter-spacing:-.22px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .crypto-title-block[_ngcontent-%COMP%]   .crypto-abbreviation[_ngcontent-%COMP%]{font-size:16px;font-weight:400;letter-spacing:-.16px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{margin-top:10px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .diagram[_ngcontent-%COMP%]{min-height:135px;background-color:#cccccc42}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:26px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:24px;font-weight:400;letter-spacing:-.24px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .percent-txt[_ngcontent-%COMP%]{font-size:16px;font-weight:400;letter-spacing:-.16px}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .percent-icon[_ngcontent-%COMP%]{width:20px;height:20px;object-fit:cover;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .percent-icon[_ngcontent-%COMP%]   .percent-icon-bg[_ngcontent-%COMP%]{background-size:cover;filter:blur(10px)}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .percent-icon[_ngcontent-%COMP%]   .percent-icon-arrow[_ngcontent-%COMP%]{width:12px;position:absolute;z-index:2}.crypto-card[_ngcontent-%COMP%]   .crypto-card-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crypto-currency-block[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .percent-icon[_ngcontent-%COMP%]   .down-arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}"]});let n=e;return n})();var Y=(()=>{let e=class e{constructor(c){this.http=c}getMarketCoins(c){return this.http.get(j).pipe(M(i=>c?i.slice(0,c):i))}};e.\u0275fac=function(i){return new(i||e)(h(F))},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{Y as a,Q as b};