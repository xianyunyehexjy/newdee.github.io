"use strict";window.onload=function(){var t=document.querySelector(".hitokoto");document.querySelector(".from");gethi=new XMLHttpRequest,gethi.open("GET","https://sslapi.hitokoto.cn/?c=a"),gethi.send(),gethi.onreadystatechange=function(){if(4===gethi.readyState&&200===gethi.status){var e=JSON.parse(gethi.responseText);t.innerHTML=e.hitokoto}}};