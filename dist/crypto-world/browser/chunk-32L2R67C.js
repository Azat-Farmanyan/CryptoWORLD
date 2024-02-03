import{A as d,N as e,O as l,P as m,U as i,V as g,Z as r,n as a,oa as s}from"./chunk-LRLJ6IC5.js";var u=(()=>{let t=class t{constructor(){this.loadingText="Loading",this.dots=""}ngOnInit(){this.interval=setInterval(()=>{this.updateDots()},500)}ngOnDestroy(){clearInterval(this.interval)}updateDots(){this.dots.length<3?this.dots+=".":this.dots=""}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-loading"]],standalone:!0,features:[r],decls:5,vars:2,consts:[[1,"loading-block"],[1,"loading"],[1,"dots"]],template:function(n,p){n&1&&(e(0,"div",0)(1,"p",1),i(2),e(3,"span",2),i(4),l()()()),n&2&&(d(2),g(p.loadingText),d(2),g(p.dots))},dependencies:[s],styles:['.loading-block[_ngcontent-%COMP%]{border-radius:20px;background:#FFF;padding:30px}.loading-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}.loading-block[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{display:inline-block;margin-left:10px;color:#111;font-family:Sora;font-size:26px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;margin-bottom:5px;margin-top:20px}.loading-block[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:#555;animation:_ngcontent-%COMP%_dotsAnimation 1.5s infinite;color:#111;font-family:Sora;font-size:26px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;margin-bottom:5px}@keyframes _ngcontent-%COMP%_dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,to{content:"..."}}']});let o=t;return o})();var M=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["app-no-result-found"]],standalone:!0,features:[r],decls:9,vars:0,consts:[[1,"no-result-block"],["src","../../../assets/icons/404-error_8452605 1.svg","alt","no-resullt"],[1,"txt-block"],[1,"oops"],[1,"no-result-txt"]],template:function(n,p){n&1&&(e(0,"div",0),m(1,"img",1),e(2,"div",2)(3,"p",3),i(4,"OOPS!"),l(),e(5,"p",4),i(6,"Coin not found in the list. Please check the spelling or try a different search term. "),l(),e(7,"p",4),i(8,"If the issue persists, contact support. Apologies for any inconvenience."),l()()())},dependencies:[s],styles:[".no-result-block[_ngcontent-%COMP%]{border-radius:20px;background:#FFF;display:flex;flex-direction:row;gap:20px;align-items:center;padding:30px}@media only screen and (max-width: 600px){.no-result-block[_ngcontent-%COMP%]{flex-direction:column}}.no-result-block[_ngcontent-%COMP%]:hover{box-shadow:0 20px 50.5px -9px #2d2d2d1a}.no-result-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px;max-height:120px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{color:#111;font-family:Sora;font-size:32px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.64px;margin-bottom:5px}.no-result-block[_ngcontent-%COMP%]   .txt-block[_ngcontent-%COMP%]   .no-result-txt[_ngcontent-%COMP%]{color:#111;font-family:Sora;font-size:16px;font-style:normal;font-weight:400;line-height:normal;letter-spacing:-.24px}"]});let o=t;return o})();export{u as a,M as b};