!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.src.length;var t,n,r=e.width,o=e.height;(t=r*o/4e6)>1?(t=Math.sqrt(t),r/=t,o/=t):t=1;if(canvas.width=r,canvas.height=o,ctx.fillStyle="#fff",ctx.fillRect(0,0,canvas.width,canvas.height),(n=r*o/1e6)>1){n=~~(Math.sqrt(n)+1);var i=~~(r/n),a=~~(o/n);tCanvas.width=i,tCanvas.height=a;for(var u=0;u<n;u++)for(var c=0;c<n;c++)tctx.drawImage(e,u*i*t,c*a*t,i*t,a*t,0,0,i,a),ctx.drawImage(tCanvas,u*i,c*a,i,a)}else ctx.drawImage(e,0,0,r,o);var s=canvas.toDataURL("image/jpeg",.1);return tCanvas.width=tCanvas.height=canvas.width=canvas.height=0,s}},function(e,t,n){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):function(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;u.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):a("cannot fetch resource: "+e+", status: "+o.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):a("timeout of "+t+"ms occured while fetching resource: "+e)},o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),u.impl.options.imagePlaceholder){var i=u.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(e){console.error(e),n("")}})},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e})},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return t(e)?Promise.resolve(e).then(r).then(function(t){var r=Promise.resolve(e);return t.forEach(function(e){r=r.then(function(t){return o(t,e,n,i)})}),r}):Promise.resolve(e)},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter(function(e){return!n.isDataUrl(e)})}function o(e,t,r,o){return Promise.resolve(t).then(function(e){return r?n.resolveUrl(e,r):e}).then(o||n.getAndEncode).then(function(e){return n.dataAsUrl(e,n.mimeType(t))}).then(function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(e){var t=[];return e.forEach(function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}}),t}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return r.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(t){return t.map(e)});function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){if(!(o instanceof Element))return Promise.resolve(o);return function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}(o).then(function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map(function(e){return t(e)}))})},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then(function(t){return n.dataAsUrl(t,n.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n,e.onerror=r,e.src=t})})}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},u={toSvg:c,toPng:function(e,t){return s(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return s(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return s(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return s(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data})},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function c(e,t){return function(e){void 0===e.imagePlaceholder?u.impl.options.imagePlaceholder=a.imagePlaceholder:u.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?u.impl.options.cacheBust=a.cacheBust:u.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then(function(e){return function(e,t,r){if(!r&&t&&!t(e))return Promise.resolve();return Promise.resolve(e).then(function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}).then(function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}(t,n.asArray(o),r).then(function(){return t})}(e,r,t)}).then(function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(function(){var r,o;r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(r,o)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var u=document.createElement("style");u.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(a,r,o)),t.appendChild(u)}}(r)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}).then(function(){return t}):t}(e,t)})}(e,t.filter,!0)}).then(f).then(h).then(function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]});return e}).then(function(r){return function(e,t,r){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(n.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(r,t.width||n.width(e),t.height||n.height(e))})}function s(e,t){return c(e,t).then(n.makeImage).then(n.delay(100)).then(function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o})}function l(e,t,r){if(!r&&t&&!t(e))return Promise.resolve();return Promise.resolve(e).then(o).then(function(n){return i(e,n,t)}).then(function(t){return a(e,t)});function o(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}(t,n.asArray(o),r).then(function(){return t});function i(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}}function a(e,t){return t instanceof Element?Promise.resolve().then(function(){!function(e,t){e.cssText?t.cssText=e.cssText:function(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""===i||"none"===i)return;var a=n.uid();t.className=t.className+" "+a;var u=document.createElement("style");u.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(a,r,o)),t.appendChild(u)}(r)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value);e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){if(!(t instanceof SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(t instanceof SVGRectElement))return;["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})}).then(function(){return t}):t;function r(){function r(e,t){if(e.cssText)t.cssText=e.cssText;else r(e,t);function r(e,t){n.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(i===""||i==="none")return;var a=n.uid();t.className=t.className+" "+a;var u=document.createElement("style");function c(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):u(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function u(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}u.appendChild(c(a,r,o)),t.appendChild(u)}[":before",":after"].forEach(function(e){r(e)})}function i(){if(e instanceof HTMLTextAreaElement)t.innerHTML=e.value;if(e instanceof HTMLInputElement)t.setAttribute("value",e.value)}function a(){if(!(t instanceof SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(t instanceof SVGRectElement))return;["width","height"].forEach(function(e){var n=t.getAttribute(e);if(!n)return;t.style.setProperty(e,n)})}}}function f(e){return o.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function h(e){return i.inlineAll(e).then(function(){return e})}e.exports=u}()},function(e,t,n){"use strict";var r=o(n(1));o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var i,a=[{word:"时光荏苒，今年的栀子花又来了！毕业遥遥无期，眼就各奔东西。"},{word:"学子即将成校友！愿此去繁花似锦，归来仍是邮子。"},{word:"愿走过天梯的你，无畏泥泞，扬帆星辰大海！"},{word:"告别八教的凌霄，却终怀凌云志。"},{word:"今日，目送你日渐强壮丰满的羽翼；未来，在彼此都看不到的岁月里熠熠生辉！"},{word:"以德修身，以礼待人。道德一直是国人做人的基础，礼貌不仅是你人品的大标签，更是新世纪素质修养的表现。"},{word:"学海无涯，求学路远。知识永远是你坚硬的后盾，好学则是铺路石。愿你持初心，爱求索，勿忘用知识来充盈自己。"},{word:"实践是检验真理的唯一标准。是非对错往往困扰我们前行的道路，我们应该在实践中求证真理真确与否。"},{word:"空气可以排除，光源可以被阻挡，但思维往往无所可以禁锢。活跃的思维是人生的财富，创新推动社会的进步。"},{word:"莘莘学子，母校见证了你们从稚嫩走向成熟的蜕变，愿你们谨记校训，前程似锦，带着梦想扬帆起航。"},{word:"修德。德性是行走社会的准则。毕业，其实你的人生才刚刚开始。"},{word:"博学。校园之外是更广阔的书山学海，坚持不懈地汲取才能博学明理。"},{word:"求实，纯真岁月渐行渐远，求实之路道阻且长。即将远行的邮子们，加油！"},{word:"创新。展翅高飞时，请带上追梦的初心和创新的执着。"},{word:"热情，过去的四年是学术的积淀，是热情的蓄力，不忘初心，砥砺前行。"},{word:"吻过暖春的落樱，以金秋银杏作伴。春华秋实，我们的故事未完待续。"},{word:"没有雨红莲上的欢声笑语，你也要笑对未来；没有情人坡上的柔情蜜意，你也过得甜蜜蜜。"},{word:"没有校车送你到目的地，你也要为梦奔跑；没有南部校区的实验楼，你也要坚持追求真理。"},{word:"就算没有备好三餐等你的中心食堂，也不要忘记准点吃饭。就算没有聚餐圣地堕落街，也不要和我断了联系。"},{word:"告别图书馆的香氛书页，也不要停止汲取知识的芬芳。邮子们，望一愿名成就，不负流年逝！"},{word:"即将远行的邮子，这些年母校见证了你从稚嫩到成熟的蜕变。愿你谨记校训，为梦起航！"}];function u(e,t){for(var n=[],r=0;r<=e;r++)n.push(r);return n.sort(function(){return.5-Math.random()}),n.length=t,n}$(document).ready(function(){var e,t,n,r,o,i;void 0!=localStorage.getItem("username")&&void 0!=localStorage.getItem("img")||(alert("请完善信息"),$(location).attr("href","/")),e=localStorage.getItem("username"),$(".toName").text(e),t=localStorage.getItem("headimgurl"),n=document.createElement("img"),$(n).attr({src:t}),$(".headPic").append(n),r=u(19,9),$.each(r,function(e,t){var n=document.createElement("img");$(n).attr({src:"./images/"+r[e]+".png"}),$(".photoItem")[e].append(n)}),$(".myPhoto").find("img").remove(),function(){var e=document.createElement("img"),t=localStorage.getItem("img");$(e).attr({src:t}),$(".myPhoto").append(e)}(),o=u(20,1)[0],i=a[o].word,$(".sentence").text(i)}),window.onload=(i=document.querySelector("body"),void r.default.toPng(i).then(function(e){var t=new Image;t.src=e,console.log(t),$(".container").append(t),$(t).css({position:"absolute",top:"0",opacity:"0"})}))}]);
//# sourceMappingURL=produce.js.map