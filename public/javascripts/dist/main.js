!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=63)}({11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.src.length;var t,a,n=e.width,o=e.height;(t=n*o/4e6)>1?(t=Math.sqrt(t),n/=t,o/=t):t=1;if(canvas.width=n,canvas.height=o,ctx.fillStyle="#fff",ctx.fillRect(0,0,canvas.width,canvas.height),(a=n*o/1e6)>1){a=~~(Math.sqrt(a)+1);var r=~~(n/a),i=~~(o/a);tCanvas.width=r,tCanvas.height=i;for(var l=0;l<a;l++)for(var c=0;c<a;c++)tctx.drawImage(e,l*r*t,c*i*t,r*t,i*t,0,0,r,i),ctx.drawImage(tCanvas,l*r,c*i,r,i)}else ctx.drawImage(e,0,0,n,o);var s=canvas.toDataURL("image/jpeg",.1);return tCanvas.width=tCanvas.height=canvas.width=canvas.height=0,s}},60:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=$("#username")[0].value;localStorage.setItem("username",e),console.log(localStorage)}},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=new Image;n.onload=function(){var e,n,o,r,i=0;e=this.naturalWidth,n=this.naturalHeight;var l=Math.max(e,n);if(l>1024){var c=Math.min(e,n);c=c/l*1024,l=1024,e>n?(e=l,n=c):(e=c,n=l)}var s=document.createElement("canvas");s.width=o=e,s.height=r=n;var u=s.getContext("2d");switch(t){case 3:i=180,e=-o,n=-r;break;case 6:s.width=r,s.height=o,i=90,e=o,n=-r;break;case 8:s.width=r,s.height=o,i=270,e=-o,n=r}u.rotate(i*Math.PI/180),u.drawImage(this,0,0,e,n),a(s.toDataURL("image/jpeg",.8))},n.src=e}},62:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0==localStorage.getItem("username"))return void alert("请先输入名字");var t,a=e.target.files[0];if(["jpeg","png","gif","jpg"].indexOf(a.type.split("/")[1])<0)return void alert("文件格式不对");if(a.size>1024e4)return void alert("文件过大");if(!this.files.length)return;var r=new FileReader;a.size,a.size;EXIF.getData(a,function(){t=EXIF.getTag(this,"Orientation")||""}),r.onload=function(){var e=this.result,a=new Image;if(a.src=e,3===t||6===t||8===t?(0,o.default)(e,t,function(t){console.log(t==e),$(".photoinput").css("background-image","url("+t+")"),$(".cameraContainer").hide(),$(".add").hide(),a.src=t}):($(".photoinput").css("background-image","url("+e+")"),$(".cameraContainer").hide(),$(".add").hide()),e.length<=102400)return localStorage.setItem("img",e),void(a=null);function r(){var e=(0,n.default)(a),t=a.width,o=a.height;console.log(t),console.log(o),localStorage.setItem("img",e);var r=localStorage.getItem("username");$.ajax({url:"https://wx.idsbllp.cn/graduate/u/upload/",type:"POST",data:{b64f:e,name:r}}).done(function(){console.log("success")}).fail(function(){console.log("error")}).always(function(){console.log("complete")}),a=null}a.complete?r():a.onload=r},r.readAsDataURL(a)};var n=r(a(11)),o=r(a(61));function r(e){return e&&e.__esModule?e:{default:e}}},63:function(e,t,a){"use strict";r(a(11));var n=r(a(62)),o=r(a(60));function r(e){return e&&e.__esModule?e:{default:e}}$(".members").click(function(e){$(".black").css({backgroundColor:"rgba(0,0,0,0.7)",zIndex:"10000"}),$(".membersContainer").css({display:"block"})}),$(".close").click(function(e){$(".membersContainer").css({display:"none"}),$(".black").css({backgroundColor:"rgba(0,0,0,0)",zIndex:"-1"})}),$.ajax({url:"https://wx.idsbllp.cn/graduate/c/getsinfo/ ",type:"POST"}).done(function(e){console.log(e),localStorage.setItem("headimgurl",e.headimgurl),localStorage.setItem("nickname",e.nickname)}).fail(function(){console.log("error")}).always(function(){console.log("complete")}),document.getElementById("username").addEventListener("change",o.default),document.getElementById("camera_image").addEventListener("change",n.default)}});
//# sourceMappingURL=main.js.map