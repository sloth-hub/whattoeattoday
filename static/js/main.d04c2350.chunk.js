(this.webpackJsonpwhat_to_eat_today=this.webpackJsonpwhat_to_eat_today||[]).push([[0],{217:function(e,t,a){e.exports=a(476)},475:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);a(218),a(151),a(266);var n=a(0),o=a.n(n),c=a(95),l=a(213),r=a.n(l),i=a(126),m=a.n(i),s=a(214),u=a(34),d=a(215),p=a.n(d),g=a(63),h=a(19),E=a(44),b=a.n(E),f={Haze:{iconName:"./images/009-cloudy.png",title:"Haze"},Thunderstorm:{iconName:"./images/013-thunder.png",title:"Thunderstrom"},Drizzle:{iconName:"./images/021-rain.png",title:"Drizzle"},Rain:{iconName:"./images/002-rainy.png",title:"Rain"},Snow:{iconName:"./images/025-snow.png",title:"Snow"},Clear:{iconName:"./images/005-sun.png",title:"Clear"},Clouds:{iconName:"./images/001-cloud.png",title:"Clouds"},Mist:{iconName:"./images/016-mist.png",title:"Mist"},Dust:{iconName:"./images/012-windy.png",title:"Dust"},Tornado:{iconName:"./images/015-tornado.png",title:"Tornado"}},y=function(e){var t=e.weatherObj;return o.a.createElement("div",{className:"weatherbox"},o.a.createElement("p",{className:"weatherTemp"},Math.round(t.temp),"\u02daC"),o.a.createElement("img",{src:f[t.condition].iconName,className:"weatherIcon",alt:t.condition}))},v=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Chae Hyerin \xa9 ",o.a.createElement("a",{href:"https://github.com/sloth-hub/whattoeattoday",target:"_blank",rel:"noopener noreferrer"},"github")))},w=function(e){var t=e.isLoading,a=e.weatherObj;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null,o.a.createElement("div",{className:"home_container"},o.a.createElement("section",{className:"home_title"},o.a.createElement("h1",null,"WHAT TO EAT TODAY?"),o.a.createElement("h2",null,"\uc624\ub298 \ubb50 \uba39\uc9c0?")),o.a.createElement("section",{className:"home_weather"},t?o.a.createElement("p",{className:"home_loading"},"loading.."):o.a.createElement(b.a,null,o.a.createElement(y,{weatherObj:a}))),o.a.createElement("section",{className:"home_start"},o.a.createElement(g.b,{to:"/ask"},o.a.createElement("button",{className:"btn"},"START"))))))},N=function(){Object(n.useEffect)((function(){window.Kakao.isInitialized()||window.Kakao.init("3e3386155ff10f2ce4483d3a453c928e")}),[]);return o.a.createElement("button",{id:"kakao-link-btn",className:"sns_btn",onClick:function(){window.Kakao.isInitialized()&&window.Kakao.Link.sendCustom({templateId:39266,templateArgs:{currentFood:document.querySelector("meta[property='og\\:image']").getAttribute("content")}})}},o.a.createElement("img",{src:"//dev.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png",alt:"kakao-share-icon"}))},k=function(e){var t=e.img,a=e.menu;return o.a.createElement(c.a,null,o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"WHAT TO EAT TODAY?"}),o.a.createElement("meta",{property:"og:url",content:"https://sloth-hub.github.io/whattoeattoday/"}),o.a.createElement("meta",{property:"og:description",content:'"\uc624\ub298 \ubb50 \uba39\uc9c0?" \ud558\uace0 \uace0\ubbfc\ud558\uc168\uc8e0? '.concat(a," \uc5b4\ub5a0\uc138\uc694?")}),o.a.createElement("meta",{property:"og:image",content:t}))},O=a(129),_=a.n(O);a(473);_.a.initializeApp({apiKey:"AIzaSyAMvNCuoh3ipygWxjczfMWDIWwvfvvL-2g",authDomain:"whattoeattoday-5c793.firebaseapp.com",databaseURL:"https://whattoeattoday-5c793.firebaseio.com",projectId:"whattoeattoday-5c793",storageBucket:"whattoeattoday-5c793.appspot.com",messagingSenderId:"837219318834",appId:"1:837219318834:web:93dae4136cb2de9272902b",measurementId:"G-QFP73VCNRK"});var j=_.a.database(),C=function(e){var t=e.weatherObj,a=Object(n.useState)({isLoading:!0}),c=Object(u.a)(a,2),l=c[0],r=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],d=m[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),E=g[0],f=g[1],y=Object(n.useState)(""),v=Object(u.a)(y,2),w=v[0],O=v[1],_=Object(h.g)(),C=Object(h.f)(),S=1;Object(n.useEffect)((function(){_.state?x():C.push("/")}),[C,_.state]);var x=function(){j.ref("foods").orderByChild("taste").equalTo(_.state.taste).once("value").then((function(e){var t=Object.values(e.val());T(t)}))},T=function(e){var a;a=t.temp<10?"cold":t.temp>=10&&t.temp<24?"normal":"hot";var n=e.filter((function(e){return e.weather.includes(t.condition)&&e.mood.includes(_.state.mood)&&e.temp.includes(a)})).sort((function(){return.5-Math.random()}));d(n),r({isLoading:!1}),f(n[0].name),O(n[0].img)};return o.a.createElement("div",{className:"result_container"},o.a.createElement(b.a,null,l.isLoading?o.a.createElement("img",{src:"./images/loading.gif",alt:"loading...",className:"result_loading"}):o.a.createElement("div",{className:"result_wrap"},o.a.createElement("div",{className:"result_listwarp"},o.a.createElement("div",{className:"result_list"},s.map((function(e,t){return o.a.createElement(b.a,{key:t},o.a.createElement("img",{src:e.img,alt:e.name,className:0===t?"list_item active":"list_item"}))}))),o.a.createElement("h1",{className:"result_title"},o.a.createElement("span",{className:"foodName"},E),"\uc5b4\ub5a0\uc138\uc694?")),o.a.createElement("div",{className:"result_btn"},o.a.createElement("button",{className:"nextBtn btn",onClick:function(){return function(){var e=document.querySelectorAll(".list_item");e.forEach((function(e){e.style.display="none",e.classList.remove("active")})),++S>e.length&&(S=1),e[S-1].style.display="block",e[S-1].classList.add("active");var t=document.querySelector("img.active");document.querySelector("span.foodName").innerText=t.alt,document.querySelector("meta[property='og\\:image']").setAttribute("content",t.src),document.querySelector("meta[property='og\\:description']").setAttribute("content",'"\uc624\ub298 \ubb50 \uba39\uc9c0?" \ud558\uace0 \uace0\ubbfc\ud558\uc168\uc8e0? '.concat(t.alt," \uc5b4\ub5a0\uc138\uc694?"))}()}},"NOPE!"),o.a.createElement("button",{className:"homeBtn btn",onClick:function(){C.push("/")}},"HOME")),o.a.createElement("div",{className:"result_share"},o.a.createElement(N,null),o.a.createElement("button",{id:"facebook-link-icon",className:"sns_btn fb-share-button",onClick:function(){window.open("https://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(window.location.href)))}},o.a.createElement("img",{src:"/whattoeattoday/images/facebook-icon.png",alt:"facebook-share-icon"})),o.a.createElement(k,{img:w,menu:E}),o.a.createElement("button",{id:"twitter-link-icon",className:"sns_btn",onClick:function(){return function(){var e=document.querySelector("meta[property='og\\:description']").getAttribute("content");window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e),"&url=").concat(encodeURIComponent(window.location.href)))}()}},o.a.createElement("img",{src:"/whattoeattoday/images/twitter-icon.png",alt:"facebook-share-icon"}))))))},S=function(e){var t=e.mood,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],r=c[1],i=Object(h.f)(),m=function(e){r(e.target.value)};return o.a.createElement("div",{className:"ask_container"},o.a.createElement(b.a,null,o.a.createElement("div",{className:"food_box"},o.a.createElement("h1",{className:"food_ask"},"\uc9c0\uae08 \uc5b4\ub5a4 \ub9db\uc774 \ub561\uae30\ub098\uc694?"),o.a.createElement("div",{className:"foods"},o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"spicy",id:"spicy",onChange:m}),o.a.createElement("label",{htmlFor:"spicy"},o.a.createElement("span",{className:"text"},"\ub9e4\uc6b4\uac70",o.a.createElement("span",{role:"img","aria-label":"spicy"},"\ud83c\udf36")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"oily",id:"oily",onChange:m}),o.a.createElement("label",{htmlFor:"oily"},o.a.createElement("span",{className:"text"},"\uae30\ub984\uc9c4\uac70",o.a.createElement("span",{role:"img","aria-label":"oily"},"\ud83c\udf57")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"light",id:"light",onChange:m}),o.a.createElement("label",{htmlFor:"light"},o.a.createElement("span",{className:"text"},"\ub2f4\ubc31\ud55c\uac70",o.a.createElement("span",{role:"img","aria-label":"light"},"\ud83e\udd6a")))),o.a.createElement("div",{className:"radiobox"},o.a.createElement("input",{type:"radio",name:"taste",value:"soup",id:"soup",onChange:m}),o.a.createElement("label",{htmlFor:"soup"},o.a.createElement("span",{className:"text"},"\ud638\ub85c\ub85d \uad6d\ubb3c\uc788\ub294\uac70",o.a.createElement("span",{role:"img","aria-label":"soup"},"\ud83e\udd63"))))),o.a.createElement("button",{className:"food_next btn",onClick:function(){""===l?alert("\ub561\uae30\ub294 \ub9db\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):i.push({pathname:"/result",state:{mood:t,taste:l}})}},"NEXT"))))},x=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),r=Object(u.a)(l,2),i=r[0],m=r[1],s=function(e){m(e.target.value)};return a?o.a.createElement(S,{mood:i}):o.a.createElement("div",{className:"ask_container"},o.a.createElement(b.a,null,o.a.createElement("div",{className:"mood_box"},o.a.createElement("h1",{className:"mood_ask"},"\ub2f9\uc2e0\uc758 \uc624\ub298 \uae30\ubd84\uc740 \uc5b4\ub5a4\uac00\uc694?"),o.a.createElement("div",{className:"moods"},o.a.createElement("label",{htmlFor:"good"},o.a.createElement("input",{type:"radio",name:"mood",className:"good",id:"good",value:"good",onChange:s}),o.a.createElement("img",{src:"/whattoeattoday/images/001-icon-569501_select.png",alt:"good"})),o.a.createElement("label",{htmlFor:"happy"},o.a.createElement("input",{type:"radio",name:"mood",className:"happy",id:"happy",value:"happy",onChange:s}),o.a.createElement("img",{src:"/whattoeattoday/images/002-icon-569531_select.png",alt:"happy"})),o.a.createElement("label",{htmlFor:"melancholy"},o.a.createElement("input",{type:"radio",name:"mood",className:"melancholy",id:"melancholy",value:"melancholy",onChange:s}),o.a.createElement("img",{src:"/whattoeattoday/images/003-icon-569513_select.png",alt:"melancholy"})),o.a.createElement("label",{htmlFor:"sad"},o.a.createElement("input",{type:"radio",name:"mood",className:"sad",id:"sad",value:"sad",onChange:s}),o.a.createElement("img",{src:"/whattoeattoday/images/004-icon-569569_select.png",alt:"sad"})),o.a.createElement("label",{htmlFor:"angry"},o.a.createElement("input",{type:"radio",name:"mood",className:"angry",id:"angry",value:"angry",onChange:s}),o.a.createElement("img",{src:"/whattoeattoday/images/005-icon-569518_select.png",alt:"angry"}))),o.a.createElement("button",{className:"mood_next btn",onClick:function(){""===i?alert("\uae30\ubd84\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):c(!0)}},"NEXT"))))},T=function(e){var t=e.isLoading,a=e.weatherObj;return o.a.createElement(g.a,null,o.a.createElement(h.b,{exact:!0,path:"/"},o.a.createElement(w,{isLoading:t,weatherObj:a})),o.a.createElement(h.b,{path:"/ask"},o.a.createElement(x,null)),o.a.createElement(h.b,{path:"/result"},o.a.createElement(C,{weatherObj:a})),o.a.createElement(h.a,{from:"*",to:"/"}))},A=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),r=Object(u.a)(l,2),i=r[0],d=r[1],g=localStorage.getItem("cords");Object(n.useEffect)((function(){if(null===g)window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};localStorage.setItem("cords",JSON.stringify(t)),window.location.reload()})):alert("GPS\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");else{var e=JSON.parse(g);h(e.latitude,e.longitude)}}),[g]);var h=function(){var e=Object(s.a)(m.a.mark((function e(t,a){var n,o,l,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("80e4e2378e235fae347d6f18a4538af9","&units=metric"));case 2:n=e.sent,o=n.data,l=o.main.temp,r=o.weather,i=o.name,c({condition:r[0].main,temp:l,city:i}),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"container"},null===g?o.a.createElement("div",{className:"loader"},o.a.createElement("h2",null,"\uc704\uce58\ud655\uc778 \ud5c8\uc6a9\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")):o.a.createElement(T,{isLoading:i,weatherObj:a}),o.a.createElement(v,null))},I=(a(475),document.getElementById("root"));r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(A,null),o.a.createElement(c.a,null,o.a.createElement("script",{src:"https://developers.kakao.com/sdk/js/kakao.js"}),o.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0",nonce:"k6exFkce"}))),I)}},[[217,1,2]]]);
//# sourceMappingURL=main.d04c2350.chunk.js.map