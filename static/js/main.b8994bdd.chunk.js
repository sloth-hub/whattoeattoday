(this.webpackJsonpwhat_to_eat_today=this.webpackJsonpwhat_to_eat_today||[]).push([[0],{31:function(e,a,t){e.exports=t(63)},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(11),c=t(1),r=t(29),i=t.n(r),m=t(12),s=t.n(m),d=t(13),u=t(7),p=t(14),E=t.n(p),g=t(8),h=t.n(g),b={Haze:{iconName:"./images/009-cloudy.png",title:"Haze"},Thunderstorm:{iconName:"./images/013-thunder.png",title:"Thunderstrom"},Drizzle:{iconName:"./images/021-rain.png",title:"Drizzle"},Rain:{iconName:"./images/002-rainy.png",title:"Rain"},Snow:{iconName:"./images/025-snow.png",title:"Snow"},Clear:{iconName:"./images/005-sun.png",title:"Clear"},Clouds:{iconName:"./images/001-cloud.png",title:"Clouds"},Mist:{iconName:"./images/016-mist.png",title:"Mist"},Dust:{iconName:"./images/012-windy.png",title:"Dust"},Tornado:{iconName:"./images/015-tornado.png",title:"Tornado"}},N=function(e){var a=e.temp,t=e.condition;return l.a.createElement("div",{className:"weatherbox"},l.a.createElement("p",{className:"weatherTemp"},Math.round(a),"\u02daC"),l.a.createElement("img",{src:b[t].iconName,className:"weatherIcon",alt:t}))},v=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9 Chae Hyerin"),l.a.createElement("p",null,l.a.createElement("span",null,"icon \xa9"),l.a.createElement("a",{href:"https://www.flaticon.com/kr/authors/bqlqn",title:"bqlqn"}," bqlqn")," from ",l.a.createElement("a",{href:"https://www.flaticon.com/kr/",title:"Flaticon"}," www.flaticon.com")))},f=(t(58),function(){var e=Object(n.useState)({isLoading:!0,condition:"",temp:"",city:""}),a=Object(u.a)(e,2),t=a[0],c=a[1],r=localStorage.getItem("cords"),i=function(){var e=Object(d.a)(s.a.mark((function e(a,t){var n,l,o,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(t,"&appid=").concat("80e4e2378e235fae347d6f18a4538af9","&units=metric"));case 2:n=e.sent,l=n.data,o=l.main.temp,r=l.weather,i=l.name,c({isLoading:!1,condition:r[0].main,temp:o,city:i});case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(null===r)window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition((function(e){var a={latitude:e.coords.latitude,longitude:e.coords.longitude};localStorage.setItem("cords",JSON.stringify(a)),window.location.reload()})):alert("GPS\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");else{var e=JSON.parse(r);i(e.latitude,e.longitude)}}),[]),l.a.createElement("div",{className:"container"},null===r?l.a.createElement("div",{className:"loader"},l.a.createElement("h2",null,"\uc704\uce58\ud655\uc778 \ud5c8\uc6a9\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")):l.a.createElement(h.a,null,l.a.createElement("div",{className:"home_container"},l.a.createElement("section",{className:"home_title"},l.a.createElement("h1",null,"WHAT TO EAT TODAY?"),l.a.createElement("h2",null,"\uc624\ub298 \ubb50 \uba39\uc9c0?")),l.a.createElement("section",{className:"home_weather"},t.isLoading?l.a.createElement("p",{className:"home_loading"},"loading.."):l.a.createElement(h.a,null,l.a.createElement(N,{temp:t.temp,condition:t.condition,city:t.city}))),l.a.createElement("section",{className:"home_start"},l.a.createElement(o.b,{to:{pathname:"/ask",state:{temp:t.temp,condition:t.condition}}},l.a.createElement("button",{className:"btn"},"START"))))),l.a.createElement(v,null))}),y=function(e){var a=e.state,t=Object(n.useState)({isLoading:!0}),c=Object(u.a)(t,2),r=c[0],i=c[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),g=p[0],b=p[1],N=Object(n.useState)(""),v=Object(u.a)(N,2),f=v[0],y=v[1],w=1;Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(d.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://whattoeattoday-5c793.firebaseio.com/.json");case 2:a=e.sent,t=a.data.foods,_(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){var t;t=a.temp<10?"cold":a.temp>=10&&a.temp<24?"normal":"hot";var n=e.filter((function(e){return e.weather.includes(a.condition)&&e.mood.includes(a.mood)&&e.taste===a.taste&&e.temp.includes(t)}));b(n),i({isLoading:!1}),y(n[0].name)},O=function(e){var a=document.querySelector("div.result_list"),t=a.children;e>t.length?w=1:e<1&&(w=t.length);for(var n=0;n<t.length;n++)t[n].style.display="none",t[n].classList.remove("active");t[w-1].style.display="initial",t[w-1].classList.add("active");var l=a.querySelector(".active").getAttribute("alt");document.querySelector("span.foodName").innerText=l},j=function(e){var a=e.img,t=e.name;return l.a.createElement(h.a,null,l.a.createElement("img",{src:a,alt:t,className:"list_item"}))};return l.a.createElement("div",{className:"result_container"},l.a.createElement(h.a,null,r.isLoading?l.a.createElement("img",{src:"./images/loading.gif",alt:"loading...",className:"result_loading"}):l.a.createElement("div",{className:"result_wrap"},l.a.createElement("div",{className:"result_list"},g.map((function(e,a){return l.a.createElement(j,{key:a,name:e.name,img:e.img})}))),l.a.createElement("h1",{className:"result_title"},l.a.createElement("span",{className:"foodName"},f)," \uc5b4\ub5a0\uc138\uc694?"),l.a.createElement("div",{className:"result_btn"},l.a.createElement("button",{className:"nextBtn btn",onClick:function(){O(w+=1)}},"\ub2e4\ub978\uac70!"),l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"homeBtn btn"},"\ud648\uc73c\ub85c"))))))},w=function(e){var a=e.state,t=e.toggle,o=e.setToggle,c=Object(n.useState)(""),r=Object(u.a)(c,2),i=r[0],m=r[1],s=function(e){m(e.target.value)};return t.isGetFood?l.a.createElement(y,{state:a}):l.a.createElement("div",{className:"food_container"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"food_box"},l.a.createElement("h1",{className:"food_ask"},"\uc9c0\uae08 \uc5b4\ub5a4 \ub9db\uc774 \ub561\uae30\ub098\uc694?"),l.a.createElement("div",{className:"foods"},l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"taste",value:"spicy",id:"spicy",onChange:s}),l.a.createElement("label",{htmlFor:"spicy"},l.a.createElement("span",{className:"text"},"\ub9e4\uc6b4\uac70",l.a.createElement("span",{role:"img","aria-label":"spicy"},"\ud83c\udf36")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"taste",value:"oily",id:"oily",onChange:s}),l.a.createElement("label",{htmlFor:"oily"},l.a.createElement("span",{className:"text"},"\uae30\ub984\uc9c4\uac70",l.a.createElement("span",{role:"img","aria-label":"oily"},"\ud83c\udf57")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"taste",value:"light",id:"light",onChange:s}),l.a.createElement("label",{htmlFor:"light"},l.a.createElement("span",{className:"text"},"\ub2f4\ubc31\ud55c\uac70",l.a.createElement("span",{role:"img","aria-label":"light"},"\ud83e\udd6a")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"taste",value:"soup",id:"soup",onChange:s}),l.a.createElement("label",{htmlFor:"soup"},l.a.createElement("span",{className:"text"},"\ud638\ub85c\ub85d \uad6d\ubb3c\uc788\ub294\uac70",l.a.createElement("span",{role:"img","aria-label":"soup"},"\ud83e\udd63"))))),l.a.createElement("button",{className:"food_next btn",onClick:function(){""===i?alert("\ub561\uae30\ub294 \ub9db\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):(a.taste=i,o({isGetMood:!0,isGetFood:!0}))}},"NEXT"))))},x=function(e){var a=e.state,t=Object(n.useState)(""),o=Object(u.a)(t,2),c=o[0],r=o[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],d=m[1],p=function(e){d(e.target.value)};return c.isGetMood?l.a.createElement(w,{state:a,toggle:c,setToggle:r}):l.a.createElement("div",{className:"mood_container"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"mood_box"},l.a.createElement("h1",{className:"mood_ask"},"\ub2f9\uc2e0\uc758 \uc624\ub298 \uae30\ubd84\uc740 \uc5b4\ub5a4\uac00\uc694?"),l.a.createElement("div",{className:"moods"},l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"mood",value:"good",id:"good",onChange:p}),l.a.createElement("label",{htmlFor:"good"},l.a.createElement("span",{className:"text"},"\uc88b\uc74c",l.a.createElement("span",{role:"img","aria-label":"good"},"\ud83d\ude42")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"mood",value:"happy",id:"happy",onChange:p}),l.a.createElement("label",{htmlFor:"happy"},l.a.createElement("span",{className:"text"},"\ud589\ubcf5\ud568",l.a.createElement("span",{role:"img","aria-label":"happy"},"\ud83e\udd70")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"mood",value:"melancholy",id:"melancholy",onChange:p}),l.a.createElement("label",{htmlFor:"melancholy"},l.a.createElement("span",{className:"text"},"\uc6b0\uc6b8\ud568",l.a.createElement("span",{role:"img","aria-label":"melancholy"},"\ud83d\ude14")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"mood",value:"sad",id:"sad",onChange:p}),l.a.createElement("label",{htmlFor:"sad"},l.a.createElement("span",{className:"text"},"\uc2ac\ud514",l.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83d\ude25")))),l.a.createElement("div",{className:"radiobox"},l.a.createElement("input",{type:"radio",name:"mood",value:"angry",id:"angry",onChange:p}),l.a.createElement("label",{htmlFor:"angry"},l.a.createElement("span",{className:"text"},"\ud654\ub0a8",l.a.createElement("span",{role:"img","aria-label":"angry"},"\ud83d\ude21"))))),l.a.createElement("button",{className:"mood_next btn",onClick:function(){""===s?alert("\uae30\ubd84\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):(a.mood=s,r({isGetMood:!0,isGetFood:!1}))}},"NEXT"))))},_=function(e){return void 0===e.location.state&&window.location.replace("/#"),l.a.createElement("div",{className:"container"},l.a.createElement(x,{state:e.location.state}),l.a.createElement(v,null))},O=(t(62),function(){return l.a.createElement(o.a,null,l.a.createElement(c.a,{path:"/",exact:!0,component:f}),l.a.createElement(c.a,{path:"/ask",component:_}))}),j=document.getElementById("root");i.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null)),j)}},[[31,1,2]]]);
//# sourceMappingURL=main.b8994bdd.chunk.js.map