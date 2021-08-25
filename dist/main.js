(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".homeBakery{\n   width:  100vh;\n   height:  25vh;\n   grid-row: 1;\n}\n\n.menuGrid{\n   display: grid;\n   box-sizing: border-box;\n   grid-template-columns: repeat(4, 1fr);\n   grid-template-rows: repeat(8, 1fr) ;\n   grid-row: 3;\n}\n\n.homePage{\n   display: grid;\n   \n}\n\n#navBar{\n   width: 1fr;\n   height: 100px;\n   border: solid;\n   grid-row: 2;\n}\n\n.menuItem{\n   margin: auto;\n   margin: 10px 10px 10px 10px;\n}\n\n#content{\n   display: grid;\n   grid-template-rows: 1fr, 1fr, 1fr;\n}\n\n#menuBar{\n   grid-row: 2;\n   box-sizing: border-box;\n}\n\n\n#menuItem0{\n   grid-column: 2;\n   border: solid;\n}\n\n#menuItem1{\n   grid-column: 3;\n   border: solid;\n}\n\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var m=t(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:l,updater:o(p,r),references:1}),i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{let e=document.getElementById("content"),n=document.getElementById("content"),r=document.createElement("div");r.setAttribute("class","menuGrid"),n.appendChild(r);let o=(e,n)=>({foodName:e,foodPrice:n});function a(e){let n=document.createElement("p");return n.textContent=e,n}let i=o("bread loaf","2.00"),d=[o("matcha bread","4.00"),i];var c=t(379),s=t.n(c),u=t(795),l=t.n(u),m=t(569),p=t.n(m),f=t(565),h=t.n(f),v=t(216),g=t.n(v),b=t(589),y=t.n(b),x=t(28),C={};C.styleTagTransform=y(),C.setAttributes=h(),C.insert=p().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=g(),s()(x.Z,C),x.Z&&x.Z.locals&&x.Z.locals;let w=document.getElementById("content");!function(){let e=document.createElement("div");e.setAttribute("id","navBar"),w.appendChild(e)}(),function(){let n=document.createElement("div"),t=document.createElement("img");n.classList.add("homePage"),e.appendChild(n),t.classList.add("homeBakery"),t.src="baked_goods.png",e.appendChild(t)}(),(()=>{for(let e=0;e<d.length;e++){let n=document.createElement("div");n.setAttribute("class","menuItem"),n.setAttribute("id",`menuItem${e}`),r.appendChild(n),n.appendChild(a(`${d[e].foodName}`)),n.appendChild(a(`${d[e].foodPrice}`))}})(),console.log("simple")})()})();