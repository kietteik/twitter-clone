(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{37:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(26),l=a.n(r);a(37),a(67),a(68),a(69);var i=function(e){var t=e.active,a=e.text,n=e.Icon;return c.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active")},c.a.createElement(n,{className:"icon"}),c.a.createElement("h2",null,a))},o=a(41),s=a.n(o),m=a(46),u=a.n(m),d=a(47),p=a.n(d),E=a(48),v=a.n(E),f=a(49),h=a.n(f),N=a(50),_=a.n(N),w=a(51),b=a.n(w),g=a(52),k=a.n(g),x=a(53),I=a.n(x),y=a(95);function S(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(s.a,null),c.a.createElement(i,{active:!0,Icon:u.a,text:"Home"}),c.a.createElement(i,{Icon:p.a,text:"Explore"}),c.a.createElement(i,{Icon:v.a,text:"Notifications"}),c.a.createElement(i,{Icon:h.a,text:"Messages"}),c.a.createElement(i,{Icon:_.a,text:"Bookmark"}),c.a.createElement(i,{Icon:b.a,text:"Lists"}),c.a.createElement(i,{Icon:k.a,text:"Profile"}),c.a.createElement(i,{Icon:I.a,text:"More"}),c.a.createElement(y.a,{className:"sidebar__tweet"},"Tweet"))}var j=a(31),O=(a(75),a(76),a(96)),B=a(60).a.initializeApp({apiKey:"AIzaSyBHWA2K-kwgV1P0BEleUtV0usx444DSi2k",authDomain:"twitter-clone-106d4.firebaseapp.com",databaseURL:"https://twitter-clone-106d4.firebaseio.com",projectId:"twitter-clone-106d4",storageBucket:"twitter-clone-106d4.appspot.com",messagingSenderId:"493688103076",appId:"1:493688103076:web:76a110506fbacd5f2d4631",measurementId:"G-28GR96Q19L"}).firestore();var T=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),i=Object(j.a)(l,2),o=i[0],s=i[1];return c.a.createElement("div",{className:"tweetbox"},c.a.createElement("form",{action:""},c.a.createElement("div",{className:"tweetbox__input"},c.a.createElement(O.a,{src:"https://loremflickr.com/320/240"}),c.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:a,placeholder:"Nulla ab nisi vero tempora ?"})),c.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},className:"tweetbox_imgInput",placeholder:"Nulla ab nisi vero tempora obcaecati dolore?"}),c.a.createElement(y.a,{onClick:function(e){e.preventDefault(),B.collection("posts").add({displayName:"My Name",username:"myname",verified:!0,text:a||null,image:o||null,avatar:"https://loremflickr.com/320/240"}),r(""),s("")},type:"submit"},"Tweet")))},A=(a(80),a(55)),D=a.n(A),M=a(56),W=a.n(M),C=a(57),H=a.n(C),L=a(58),z=a.n(L),G=a(54),J=a.n(G);var K=function(e){var t=e.displayName,a=e.username,n=e.verified,r=e.text,l=e.image,i=e.avatar;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__avatar"},c.a.createElement(O.a,{src:i})),c.a.createElement("div",{className:"post__body"},c.a.createElement("div",{className:"post__header"},c.a.createElement("div",{className:"post__headerText"},c.a.createElement("h4",null,t," ",c.a.createElement("span",{className:"post__headerSmall"},n&&c.a.createElement(J.a,{className:"post__badge"})," ","@",a))),c.a.createElement("div",{className:"post__headerDes"},r)),c.a.createElement("img",{src:l,alt:"",srcset:""}),c.a.createElement("div",{className:"post__footer"},c.a.createElement(D.a,null),c.a.createElement(W.a,null),c.a.createElement(H.a,null),c.a.createElement(z.a,null))))};var P=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return B.collection("posts").onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))})),function(){}}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement("div",{className:"feed__header"},c.a.createElement("h2",null,"Home")),c.a.createElement(T,null),a.map((function(e){return c.a.createElement(K,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,image:e.image,avatar:e.avatar})})))},R=(a(81),a(59)),U=a.n(R),V=a(32);var Q=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"widgets__input"},c.a.createElement(U.a,{className:"widgets__searchIcon"}),c.a.createElement("input",{placeholder:"Search Twitter",type:"text",className:"widgets__search"})),c.a.createElement("div",{className:"widgets__container"},c.a.createElement("h2",null,"What's happening"),c.a.createElement(V.d,{tweetId:"933354946111705097"}),c.a.createElement(V.c,{sourceType:"profile",screenName:"kietteik",options:{height:400}}),c.a.createElement("div",{className:"widgets__moreButton"},c.a.createElement(V.b,{url:"https://facebook.com/kietteik",options:{text:"#reactjs is awesome",via:"kietteik"}}),c.a.createElement(V.a,{screenName:"kietteik"}))))};var $=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement(P,null),c.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.6e6e1d82.chunk.js.map