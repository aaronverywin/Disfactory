(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"04a1":function(e,t,n){"use strict";var r=n("288d"),o=n.n(r);o.a},"288d":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("OSM")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"root"})},i=[],u=(n("99af"),n("e587")),s=n("5eee"),l=n("a2c7"),f=n("480c"),p=n("d510"),d=n("6ed8"),g=n("256f"),h=n("0af5"),v=(n("a630"),n("fb6a"),n("45fc"),n("d3b7"),n("3ca3"),n("96cf"),n("89ba")),w=window.OffscreenCanvas?new OffscreenCanvas(500,500):document.createElement("canvas"),m=w.getContext("2d"),b=function(e){return function(t){return new Promise((function(n){var r=new Image;r.crossOrigin="",r.src=t,r.style.display="none",r.onload=Object(v["a"])(regeneratorRuntime.mark((function t(){var o,a,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return w.width=r.width,w.height=r.height,m.clearRect(0,0,w.width,w.height),m.drawImage(r,0,0),o=m.getImageData(0,0,r.width,r.height),a=o.data,t.next=8,Promise.resolve(e(a));case 8:c=document.createElement("canvas"),i=c.getContext("2d"),c.width=r.width,c.height=r.height,i.putImageData(o,0,0),n(c.toDataURL()),r.remove(),c.remove();case 16:case"end":return t.stop()}}),t)})))}))}},y=(b((function(e){for(var t=0;t<e.length;t+=4){var n=(e[t]+e[t+1]+e[t+2])/3;e[t]=n,e[t+1]=n,e[t+2]=n}})),[[152,230,0],[209,255,115],[171,220,97],[110,221,97],[233,255,190],[198,230,150],[56,204,61],[200,205,56],[126,237,39],[99,192,59],[170,192,60],[142,169,68],[138,255,218],[159,177,105],[112,134,79],[147,203,62],[168,168,0],[107,144,75],[77,101,57]]),O=function(e,t){return!e.some((function(e,n){return t[n]!==e}))},j=function(e){return y.some((function(t){return O(t,e)}))},x=b((function(e){for(var t=0;t<e.length;t+=4){var n=Array.from(e.slice(t,t+3));j(n)?(e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0):(e[t]=0,e[t+1]=0,e[t+2]=0)}})),P=(n("5bc0"),n("750b")),S=Object(P["a"])({setup:function(){var e=Object(P["d"])(null),t=function(){for(var e=Object(g["d"])("EPSG:3857"),t=e.getExtent(),n=new Array(20),r=Object(h["E"])(t)/256,o=new Array(20),a=0;a<20;++a)n[a]=r/Math.pow(2,a),o[a]=a;return new d["b"]({origin:Object(h["C"])(t),resolutions:n,matrixIds:o})},n=function(e){return new f["a"]({source:new p["a"]({matrixSet:"EPSG:3857",format:"image/png",url:"https://wmts.nlsc.gov.tw/wmts",layer:"EMAP",tileGrid:e,crossOrigin:"Anonymous",style:"default",wrapX:!0,attributions:'<a href="https://maps.nlsc.gov.tw/" target="_blank">國土測繪圖資服務雲</a>'}),opacity:.5})},r=function(e){return new f["a"]({source:new p["a"]({matrixSet:"EPSG:3857",format:"image/png",url:"https://wmts.nlsc.gov.tw/wmts/LUIMAP/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",layer:"LUIMAP",requestEncoding:"REST",tileGrid:e,tileLoadFunction:function(e,t){var n=e.getImage();x(t).then((function(e){n.src=e}))},crossOrigin:"Anonymous",style:"default",wrapX:!0,attributions:'<a href="https://maps.nlsc.gov.tw/" target="_blank">國土測繪圖資服務雲</a>'}),opacity:.5})};return Object(P["c"])((function(){var o=t(),a=new s["a"]({target:e.value,layers:[n(o),r(o)],view:new l["a"]({center:[0,0],zoom:2})});a.on("click",(function(e){a.forEachLayerAtPixel(e.pixel,(function(e,t){var n=Object(u["a"])(t,4),r=n[0],o=n[1],a=n[2],c=n[3];console.log("rgba(".concat(r,", ").concat(o,", ").concat(a,", ").concat(c,")"))}),{layerFilter:function(e){return"LUIMAP"===e.getProperties().source.layer_}})}))})),{root:e}}}),E=S,M=(n("04a1"),n("2877")),_=Object(M["a"])(E,c,i,!1,null,"3d14248a",null),A=_.exports,I=Object(P["a"])({components:{OSM:A},setup:function(){}}),T=I,k=(n("5c0b"),Object(M["a"])(T,o,a,!1,null,null,null)),C=k.exports;r["a"].config.productionTip=!1,r["a"].use(P["b"]),new r["a"]({render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.1ba23d38.js.map