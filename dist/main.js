(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),d=new URL(t(693),t.b),c=new URL(t(32),t.b),u=new URL(t(585),t.b),m=new URL(t(685),t.b),l=o()((function(n){return n[1]})),s=a()(d),p=a()(c),g=a()(u),f=a()(m);l.push([n.id,".homeBakery{\n   grid-column-start: 1;\n   grid-column-end: 4;\n   width: 100%;\n   height: 100%;\n   object-fit: cover;\n   grid-row: 1;\n   margin: auto; \n}\n\n#content{\n   display: grid;\n   grid-template-rows: 200px 106px 20px 60vh 60vh;\n   grid-template-columns: 1fr 1fr 1fr;\n   background-color: wheat;\n}\n\n#hrLine{\n   grid-column-end: 4;\n   grid-column-start: 1;\n   grid-row: 3;\n   border: 1px solid gray;\n   margin: auto;\n   width: 90%;\n}\n\n#homePage{\n   display: grid;\n   margin: auto;\n   grid-row: 4;\n   grid-column: 2;\n   grid-template-columns: repeat(4, 1fr);\n   grid-template-rows: repeat(4, 1fr);\n}\n\n#home0{\n   grid-column-start: 1;\n   grid-column-end: 5;\n   grid-row: 1;\n}\n\n#home1{\n   grid-column-start: 1;\n   grid-column-end: 5;\n   grid-row: 2\n}\n\n#homeGif{\n   display: block;\n   grid-row-start: 3;\n   grid-row-end: 5;\n   grid-column-start: 2;\n   object-fit: cover;\n   margin: auto;\n   grid-column-end: 4;\n   max-width: 100%;\n   max-height: 100%;\n}\n\n\n#contactPage{\n   display: grid;\n   margin: auto;\n   grid-row: 5;\n   grid-column: 2;\n}\n\n#map{\n   display: block;\n   grid-row-start: 2;\n   grid-row-end: 5;\n   grid-column-start: 2;\n   object-fit: cover;\n   margin: auto;\n   grid-column-end: 4;\n   max-width: 100%;\n   max-height: 100%;;\n\n}\n\n.text{\n   display: inline-block;\n   font-family: Arial, Helvetica, sans-serif;\n   font-size: 20px;\n   color: black;\n   margin:auto;\n   animation: fadeIn linear 1s;\n }\n\n /* @media screen and (min-width: 601px) {\n   .text{\n     font-size: 80px;\n   } */\n\n \n#navBar{\n   display: grid;\n   margin: auto;\n   width: 300px;\n   height: 100px;\n   grid-template-columns: 100px 100px 100px;\n   grid-template-rows: 1fr;\n   grid-row: 2;\n   grid-column: 2;\n}\n\n#menuButton{\n   margin: auto;\n   border: none;\n}\n\n#homeButton{\n   margin: auto;\n   border: none;\n}\n\n#contactButton{\n   margin: auto;\n   border: none;\n}\n\n#contactPage{\n   display: grid;\n   grid-row-end: 6;\n   grid-column-start: 1;\n   grid-column-end: 5;\n   grid-row-start: 2;\n   width: 80%;\n   height: 80%;\n   grid-template-columns: repeat(4, 1fr);\n   grid-template-rows: 100px repeat(5, 150px);\n}\n\n#contact0{\n   grid-column-start: 2;\n   grid-column-end: 4;\n   grid-row: 5;\n   margin: 10px auto;\n}\n\n#contact1{\n   grid-column-start: 2;\n   grid-column-end: 4;\n   grid-row: 5;\n}\n\n.contactText{\n   grid-row-start: 5;\n   grid-row-end: 6;\n   grid-column-start: 2;\n   grid-column-end: 4;\n}\n.menuGrid{\n   box-sizing: border-box;\n   margin: auto;\n   grid-row: 4;\n   grid-column-start: 1;\n   grid-column-end: 4;\n   max-width: 100%;\n   max-height: 100%;\n   grid-auto-flow: column;\n   grid-auto-columns: 300px 100px;\n   display: grid;\n   grid-template-columns: repeat(3, 1fr);\n   gap: 10px;\n   grid-auto-rows: 100px 200px;\n   background-color: whitesmoke;\n   animation: fadeIn linear 1s;\n}\n\n#menuSign{\n   font-size: 40px;\n   font-family: Arial, Helvetica, sans-serif;\n   grid-column-start: 2;\n   grid-column-end: 4;\n   margin: auto;\n}\n\n #menuImage0{\n    grid-row: 2;\n    grid-column: 1;\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n    margin: 10px 10px 10px 20px;\n    background-image: url("+s+");\n    background-color: black;\n }\n\n #menuImage1{\n    grid-row: 2;\n    grid-column: 3;\n    margin: 10px 10px 10px 20px;\n    background-image:url("+p+");\n }\n\n #menuImage0:hover {\n   opacity: 0.5;\n}\n\n#menuImage1:hover {\n   opacity: 0.5;\n}\n\n#menuImage2{\n   grid-row: 3;\n   grid-column: 1;\n   margin: 10px 10px 10px 20px;\n   background-image:url("+g+");\n}\n\n#menuImage2:hover {\n   opacity: 0.5;\n}\n\n#menuImage3{\n   grid-row: 3;\n   grid-column: 3;\n   margin: 10px 10px 10px 20px;\n   background-image:url("+f+");\n}\n\n\n#menuImage3:hover {\n   opacity: 0.5;\n}\n\n#menuBar{\n   grid-row: 2;\n   box-sizing: border-box;\n}\n\n.menuItem{\n   display: grid;\n   width: 200px;\n   height: 75px;\n   text-align: center;\n   justify-content: center;\n   align-content: center;\n}\n#menuItem0{\n   grid-column: 2;\n   grid-row: 2;\n}\n\n#menuItem1{\n   grid-column: 4;\n   grid-row: 2;\n}\n\n#menuItem2{\n   grid-column: 2;\n   grid-row: 3;\n}\n\n#menuItem3{\n   grid-column: 4;\n   grid-row: 3;\n}\n\n@media screen and (max-width: 600px) {\n   div.text {\n     font-size: 30px;\n   }\n }\n\n@keyframes fadeIn {\n   0% {opacity:0;}\n   100% {opacity:1;}\n }\n \n @-moz-keyframes fadeIn {\n   0% {opacity:0;}\n   100% {opacity:1;}\n }\n \n @-webkit-keyframes fadeIn {\n   0% {opacity:0;}\n   100% {opacity:1;}\n }\n \n @-o-keyframes fadeIn {\n   0% {opacity:0;}\n   100% {opacity:1;}\n }\n \n @-ms-keyframes fadeIn {\n   0% {opacity:0;}\n   100% {opacity:1;}\n }\n",""]);const h=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],u=r.base?c[0]+r.base:c[0],m=i[u]||0,l="".concat(u," ").concat(m);i[u]=m+1;var s=t(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(e[s].references++,e[s].updater(p)):e.push({identifier:l,updater:o(p,r),references:1}),a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=r(n,o),u=0;u<i.length;u++){var m=t(i[u]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},32:(n,e,t)=>{n.exports=t.p+"91904a9944fe90430e62.png"},685:(n,e,t)=>{n.exports=t.p+"510c61bd5a91aa300f50.png"},585:(n,e,t)=>{n.exports=t.p+"fa167c1f556446e6e080.png"},693:(n,e,t)=>{n.exports=t.p+"d1672b5a9a9b5c5383da.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{let n=(()=>{let n=document.getElementById("content"),e=document.createElement("div");return e.setAttribute("class","menuGrid"),n.appendChild(e),{menuGrid:e,content:n}})();let e=()=>{for(let e=0;e<c.length;e++){let t=document.createElement("div"),r=document.createElement("div");t.setAttribute("class","menuItem, text"),t.setAttribute("id",`menuItem${e}`),r.setAttribute("class","menuImage"),r.setAttribute("id",`menuImage${e}`),n.menuGrid.appendChild(t),n.menuGrid.appendChild(r),t.appendChild(o(`${c[e].foodName}         ${c[e].foodPrice}`))}},r=(n,e)=>({foodName:n,foodPrice:e});function o(n){let e=document.createElement("p");return e.setAttribute("class","text"),e.textContent=n,e}let i=r("Bread Loaf","2.00"),a=r("Matcha Bread","4.00"),d=r("Coffee Bun","2.50"),c=[a,i,r("Marble Loaf","3.00"),d],u=(()=>{let n=document.getElementById("content"),e=document.createElement("div");return e.setAttribute("id","contactPage"),n.appendChild(e),{contactPage:e}})();function m(n,e){let t=document.createElement("p");return t.textContent=n,t.setAttribute("class","text"),t.setAttribute("id",e),t}const l=(()=>{let n=document.getElementById("content"),e=document.createElement("div");return e.setAttribute("id","homePage"),n.appendChild(e),{homePageBody:e}})();function s(n,e){let t=document.createElement("p");return t.textContent=n,t.setAttribute("class","text"),t.setAttribute("id",e),t}var p=t(379),g=t.n(p),f=t(795),h=t.n(f),x=t(569),b=t.n(x),v=t(565),w=t.n(v),y=t(216),C=t.n(y),I=t(589),A=t.n(I),E=t(28),k={};k.styleTagTransform=A(),k.setAttributes=w(),k.insert=b().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=C(),g()(E.Z,k),E.Z&&E.Z.locals&&E.Z.locals;let B=document.getElementById("content"),P=!0,L=!1,S=!1,T=!1;const M=(()=>{(()=>{let n=document.createElement("img");n.classList.add("homeBakery"),n.src="baked_goods.png",B.appendChild(n)})();let n=document.createElement("div");n.setAttribute("id","navBar"),B.appendChild(n);let e=document.createElement("button");e.setAttribute("id","homeButton"),e.textContent="homepage",n.appendChild(e);let t=document.createElement("button");t.setAttribute("id","menuButton"),t.textContent="menu",n.appendChild(t);let r=document.createElement("button");return r.setAttribute("id","contactButton"),r.textContent="contact",n.appendChild(r),{homepage:e,menuBtn:t,contactBtn:r}})();let j=document.createElement("hr");function G(){!0===P&&(U(),function(){l.homePageBody.appendChild(s("Welcome to Toasties!","home0")),l.homePageBody.appendChild(s("We serve the freshest bread at the best prices!","home1"));let n=document.createElement("img");n.setAttribute("id","homeGif"),n.src="eatUp.gif",l.homePageBody.appendChild(n)}()),!0===L&&(U(),function(){let e=document.createElement("p");e.setAttribute("id","menuSign"),e.setAttribute("class","text"),e.textContent="Menu",n.menuGrid.appendChild(e)}(),e(),console.log("menu made")),!0===S&&(U(),function(){let n=document.createElement("img");n.classList.add("map"),n.src="toastiesLocation.png",n.setAttribute("id","map"),u.contactPage.appendChild(n),u.contactPage.appendChild(n),u.contactPage.appendChild(m("123 BreadLane, Washington","contact0")),u.contactPage.appendChild(m("555-Get-Loaf","contact1"))}())}function z(n){if(null!=n){for(;n.firstChild;)n.removeChild(n.firstChild);console.log("work")}}function U(){document.querySelectorAll(".text");let n=document.querySelector("#homePage"),e=document.querySelector(".menuGrid"),t=document.querySelector("#contactPage");1!=S&&z(t),1!=L&&z(e),1!=P&&(z(n),console.log("lizard"))}j.setAttribute("id","hrLine"),B.appendChild(j),M.homepage.addEventListener("click",(()=>{1!=P&&(P=!0,L=!1,S=!1,T=!1,G())})),M.menuBtn.addEventListener("click",(()=>{1!=L&&(L=!0,P=!1,T=!1,S=!1,G(),console.log("working"))})),M.contactBtn.addEventListener("click",(()=>{1!=S&&(S=!0,T=!0,P=!1,L=!1,G(),console.log("working"))})),G()})()})();