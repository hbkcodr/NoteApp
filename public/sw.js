if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-eedcc1fe"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/strategy128.png",revision:"c39894499297918ce816122149e92063"},{url:"icons/strategy144.png",revision:"effbc0ae8bcf533de3fde142b05d7276"},{url:"icons/strategy152.png",revision:"f99f498e3848a50c3a256a1eb02f2af8"},{url:"icons/strategy192.png",revision:"bc4468e2c954a813024ac391e6b09116"},{url:"icons/strategy384.png",revision:"3a59066470581c09433e08672ca60e84"},{url:"icons/strategy72.png",revision:"d6e38ebb47b75745d9f1e09b16b2b8a8"},{url:"icons/strategy96.png",revision:"8053cb93c5147ac2176bcb5e0c2c8b8b"},{url:"index.html",revision:"5c57eb62d333e227ee1e01c686d1b348"},{url:"manifest.json",revision:"63a5a47bb0074d09162ac122eb1bf48a"}],{})}));
//# sourceMappingURL=sw.js.map
