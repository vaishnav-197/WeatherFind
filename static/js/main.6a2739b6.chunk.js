(this.webpackJsonpweatherfind=this.webpackJsonpweatherfind||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),o=(t(9),t(1)),m="6ae4e210f7cb5fce015f786ecfc5d5cc",i="https://api.openweathermap.org/data/2.5/";var s=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),s=Object(o.a)(l,2),u=s[0],d=s[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"App warm":"App"},r.a.createElement("main",null,r.a.createElement("div",{className:"brand"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fa fa-sun"})," WeatherFind")),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"search.... (city name)",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch(" ".concat(i,"weather?q=").concat(t,"&units=metric&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){d(e),c(""),console.log(e)}))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name," , ",u.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return" ".concat(a," ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather "},u.weather[0].main),r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"date "}," ",r.a.createElement("br",null),'"',u.weather[0].description,'"')),r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"date "},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),'"Stay tuned for more"',r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))):r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"date"},"*enter a valid city ")),r.a.createElement("div",{className:"footer"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Copyright \xa9 2020 |  \u2764\ufe0f vaishnav | ",r.a.createElement("a",{href:"https://github.com/vaishnav-197/WeatherFind.git"}," ",r.a.createElement("i",{className:"fa fa-github"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.6a2739b6.chunk.js.map