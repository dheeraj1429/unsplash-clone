(this["webpackJsonpunsplish-clone"]=this["webpackJsonpunsplish-clone"]||[]).push([[0],{60:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),s=n(41),i=n.n(s),r=(n(60),n(13)),l=n(15),o=n(19),j="SET_DATA_FIRST",d="SET_DATA_SECOND",u="SET_DATA_THIRD",h="SEARCH_DATA",b="REMOVE_SEARCH_DATA",O="SELECTED_IMAGES",p="OPEN_MODEL_TAB",m=function(e){return{type:j,payload:e}},v=function(e){return{type:d,payload:e}},x=function(e){return{type:u,payload:e}},f=function(e){return{type:O,payload:e}},g=function(e){return{type:p,payload:e}},C=(n(65),n(5));var D=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(o.b)();return Object(C.jsx)("div",{className:"SearchInputDiv",children:Object(C.jsxs)("div",{className:e.class?"SearchDivInner ".concat(e.class):"SearchDivInner",children:[Object(C.jsx)("div",{className:"SearchIconDiv",children:Object(C.jsx)("i",{class:"fas fa-search",onClick:function(){i({type:h,payload:c})}})}),Object(C.jsx)("input",{type:"search",placeholder:"Search free high-resolution photos",value:c,onChange:function(e){s(e.target.value)}}),Object(C.jsx)("div",{className:"SearchSideDiv",children:Object(C.jsx)("img",{src:"data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20class%3D%22VdNCI%20nT46U%20VETef%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M6.7%2025.3H12V28H6.7C5.2%2028%204%2026.8%204%2025.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2%204%204%205.2%204%206.7V12h2.7V6.7zM25.3%204H20v2.7h5.3V12H28V6.7C28%205.2%2026.8%204%2025.3%204zm0%2021.3H20V28h5.3c1.5%200%202.7-1.2%202.7-2.7V20h-2.7v5.3zm-4-9.3c0%202.9-2.4%205.3-5.3%205.3s-5.3-2.4-5.3-5.3%202.4-5.3%205.3-5.3%205.3%202.4%205.3%205.3zm-2.6%200c0-1.5-1.2-2.7-2.7-2.7s-2.7%201.2-2.7%202.7%201.2%202.7%202.7%202.7%202.7-1.2%202.7-2.7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"})})]})})};n(67);var w=function(){return Object(C.jsx)("div",{className:"BannerComponent",children:Object(C.jsx)("div",{className:"BannerContent",children:Object(C.jsxs)("div",{className:"Container_sm",children:[Object(C.jsx)("h1",{children:"Unsplash Clone"}),Object(C.jsx)("p",{children:"The internet\u2019s source of freely-usable images. Powered by creators everywhere."}),Object(C.jsx)(D,{class:"RoudedNone"})]})})})},S=n(0),I=n.n(S),N=n(1);n(69);var y=function(){var e=Object(o.c)((function(e){return e.user})),t=Object(o.b)(),n=function(){var e=Object(N.a)(I.a.mark((function e(n,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){return e.json()})).then((function(e){return t(a(e))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n("https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=&image_type=photos=true",m),n("https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=nature&image_type=photos=true",v),n("https://pixabay.com/api/?key=22490979-1f9ed0f6cf9068fab5840a079&q=flower&image_type=photos=true",x)}),[]),Object(C.jsx)("div",{className:"ImageDivContainer",children:Object(C.jsx)("div",{className:"Container",children:Object(C.jsxs)("div",{className:"ImgBox",children:[Object(C.jsx)("div",{children:e?e.imageCollectionDataFirst.map((function(e){return e.hits.map((function(e){return Object(C.jsx)("img",{src:e.largeImageURL,onClick:function(){t(f(e)),t(g(!0))}})}))})):null}),Object(C.jsx)("div",{children:e?e.imageCollectionDataSecond.map((function(e){return e.hits.map((function(e){return Object(C.jsx)("img",{src:e.largeImageURL,onClick:function(){t(f(e)),t(g(!0))}})}))})):null}),Object(C.jsx)("div",{children:e?e.imageCollectionDataThird.map((function(e){return e.hits.map((function(e){return Object(C.jsx)("img",{src:e.largeImageURL,onClick:function(){t(f(e)),t(g(!0))}})}))})):null})]})})})};n(70);var E=function(){var e=Object(o.c)((function(e){return e.user})),t=Object(o.b)();return Object(C.jsxs)("div",{className:"ImgModelDiv",children:[Object(C.jsx)("i",{class:"fas fa-times",onClick:function(){return t(g(!1))}}),null!==e.SelectedImages?e.SelectedImages.map((function(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"ModelInner",children:Object(C.jsx)("img",{src:e.largeImageURL})}),Object(C.jsxs)("div",{className:"Img__Details",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Views"}),Object(C.jsx)("p",{children:e.views})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Download"}),Object(C.jsx)("p",{children:e.downloads})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Featured in"}),Object(C.jsx)("p",{children:"Editorial"})]})]}),Object(C.jsxs)("div",{className:"User_Details",children:[Object(C.jsxs)("p",{children:[Object(C.jsx)("i",{class:"fa fa-map-marker-alt"}),e.tags]}),Object(C.jsxs)("p",{children:[Object(C.jsx)("i",{class:"fas fa-briefcase"}),"Published 3d ago"]}),Object(C.jsxs)("p",{children:[Object(C.jsx)("i",{class:"fas fa-camera"}),e.user]}),Object(C.jsxs)("p",{children:[Object(C.jsx)("i",{class:"fas fa-paper-plane"}),"Free to use under the Unsplash License"]})]})]},e.id)})):null]})};var _=function(){var e=Object(o.c)((function(e){return e.user.OpenModelWindow}));return Object(C.jsxs)(C.Fragment,{children:[1==e?Object(C.jsx)(E,{}):null,Object(C.jsx)(w,{}),Object(C.jsx)(y,{})]})},A=n(29);n(71);var F=function(e){var t=e.InnerData;return Object(C.jsx)("div",{className:"PopUpInnerDiv",children:Object(C.jsx)("div",{className:"PopUpContentDiv",children:void 0!==t?t.map((function(e){return e.heading?Object(C.jsx)("h3",{children:e.heading},e.heading):Object(C.jsx)(A.b,{to:e.title.replaceAll(" ","_"),children:Object(C.jsx)("p",{children:e.title},e.title)})})):null})})},k=n(18),U=n(37),B=(n(88),n(74),function(){var e=Object(N.a)(I.a.mark((function e(t,n){var a,c,s,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=T.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,s=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(k.a)({displayName:c,email:s,EntryDate:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());U.a.initializeApp({apiKey:"AIzaSyCY1LevgeCg5C8RRAhmw4wFMnaDTY8SQYk",authDomain:"unsplash-clone-2f9f4.firebaseapp.com",databaseURL:"https://unsplash-clone-2f9f4-default-rtdb.firebaseio.com",projectId:"unsplash-clone-2f9f4",storageBucket:"unsplash-clone-2f9f4.appspot.com",messagingSenderId:"14226727256",appId:"1:14226727256:web:e1656f05f7adc58472c52d"});var M=U.a.auth(),T=U.a.firestore(),L=new U.a.auth.GoogleAuthProvider;L.setCustomParameters({prompt:"select_account"});var P=function(){return M.signInWithPopup(L)};U.a,n(76);var R=function(e){var t=e.ContentData,n=e.ClassData,c=e.SideBarContentPopUp,s=e.userName,i=Object(l.f)();null!==s&&i.push("/");var o=Object(a.useState)({MegaNavCollection:{},UserCollectionContent:{}}),j=Object(r.a)(o,2),d=j[0],u=j[1];return Object(a.useEffect)((function(){if(null!==t){var e=t.navInnerContent,n=e.firstContent,a=e.secondContent,c=e.threeContent;u({MegaNavCollection:{firstContent:n,secondContent:a,threeContent:c},UserCollectionContent:[t.navBarUserContent]})}}),[]),d.MegaNavCollection&&"MenuMegaBar"==c?Object(C.jsxs)("div",{className:n?"MenuInner ".concat(n):"MenuInner",children:[Object(C.jsx)("div",{className:"ArrowLine"}),Object(C.jsxs)("div",{className:"PopUpInnerContent",children:[Object(C.jsx)(F,{InnerData:d.MegaNavCollection.firstContent}),Object(C.jsx)(F,{InnerData:d.MegaNavCollection.secondContent}),Object(C.jsx)(F,{InnerData:d.MegaNavCollection.threeContent})]})]}):d.UserCollectionContent&&"UserDetails"==c?Object(C.jsxs)("div",{className:n?"MenuInner ".concat(n):"MenuInner",children:[Object(C.jsx)("div",{className:"ArrowLine"}),Object(C.jsx)("div",{className:"PopUpInnerContent",children:s?Object(C.jsxs)("div",{className:"User_Content_data",children:[Object(C.jsx)("p",{children:s.email}),Object(C.jsx)("p",{onClick:function(){return M.signOut()},style:{cursor:"pointer"},children:"Log Out"})]}):null})]}):void 0};n(77);n(78);var V=function(e){var t=e.User,n=Object(a.useState)(!1),c=Object(r.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(!1),j=Object(r.a)(l,2),d=j[0],u=j[1],h=Object(a.useState)([{title:"Brand",id:1},{title:"Unsplash Awards",id:2},{title:"New Photos",id:3}]),b=Object(r.a)(h,2),O=b[0],p=(b[1],Object(o.c)((function(e){return e.user})));return Object(C.jsxs)("div",{className:"TopNavbarComponent",children:[Object(C.jsx)("div",{className:"LogoDiv",children:Object(C.jsx)("div",{children:Object(C.jsx)(A.b,{to:"/",children:Object(C.jsx)("img",{src:"data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20class%3D%22hic6U%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-labelledby%3D%22unsplash-home%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%20id%3D%22unsplash-home%22%3EUnsplash%20Home%3C%2Ftitle%3E%3Cpath%20d%3D%22M10%209V0h12v9H10zm12%205h10v18H0V14h10v9h12v-9z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"})})})}),Object(C.jsx)("div",{className:"SearchDivContainer",children:Object(C.jsx)(D,{class:"Round"})}),Object(C.jsx)("div",{className:"TopNavbarContent",children:Object(C.jsxs)("div",{className:"NavLinkDiv",children:[O.map((function(e){return Object(C.jsx)(A.b,{to:e.title.replaceAll(" ","_"),children:Object(C.jsx)("p",{children:e.title},e.id)})})),null==t?Object(C.jsx)(A.b,{to:"/user/Login",children:Object(C.jsx)("p",{children:"Sign In"})}):Object(C.jsxs)("div",{className:"UserProfileDiv",children:[Object(C.jsx)("div",{className:"userDiv",onClick:function(){0==d?(u(!0),i(!1)):u(!1)}}),Object(C.jsx)(R,{SideBarContentPopUp:"UserDetails",userName:t,ContentData:null,ClassData:1==d?"hideMenu":""})]}),Object(C.jsx)("img",{src:"data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20aria-hidden%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M19.1263%2028.2c-6.1826%202.1388-11.82761%201.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666%208.28215%207.5675%207.21273%208.91155%206.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103%201.8817.13368%202.1505%201.06942l.2688.80206c1.7473-.13368%203.3601.26735%204.8386%201.20309%201.6129%201.06941%202.8225%202.53985%203.4945%204.54503l1.0753%203.3419c.2688.6684.9408%201.6041%201.7472%201.8715%201.4785.5347%202.5537%201.4704%202.9569%202.8072%201.3441%203.3419-2.4193%207.6195-8.6019%209.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668%204.8124-6.98906%206.2828c.53762%201.4705%204.30096%202.2725%209.40836.5347s7.5267-4.8123%206.989-6.2828zm-10.0803%205.4808c-1.3441%200-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011%200-.5348.9408-.802%202.2848-1.6041%204.4353-2.4061.8064-.2674%201.6129-.5347%202.4193-.6684.2688%200%20.4032.1337.4032.2673v.6684c0%201.6041-.9408%203.0746-2.2849%203.743.1344%200-.9408.5347-1.7472.5347z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}),Object(C.jsxs)("div",{className:"MenuDiv",children:[Object(C.jsx)("i",{class:"fas fa-bars",onClick:function(){0==s?(i(!0),u(!1)):i(!1)}}),Object(C.jsx)(R,{SideBarContentPopUp:"MenuMegaBar",ContentData:p,ClassData:1==s?"hideMenu":""})]})]})})]})};n(79);var H=function(){var e=Object(o.c)((function(e){return e.user.navData}));return Object(C.jsx)("div",{className:"SecondNavbarDiv",children:Object(C.jsx)("ul",{children:e.map((function(e){return Object(C.jsx)(A.b,{to:e.title.replaceAll(" ","_"),children:Object(C.jsx)("li",{className:"SecondNavBarDivClass",children:e.title},e.title)})}))})})},z=n(4);n(80);var W=function(e){var t=e.InnerText,n=e.ButtonClass,a=e.onClick;return Object(C.jsx)("button",{type:"submit",className:n?"Btn_Button ".concat(n):"Btn_Button",onClick:a||null,children:t})};n(81);var G=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)({email:"",password:""}),o=Object(r.a)(i,2),j=o[0],d=o[1],u=j.email,h=j.password,b=function(e){var t,n;t=e.target.name,n=e.target.value,d(Object(k.a)(Object(k.a)({},j),{},Object(z.a)({},t,n)))};return Object(C.jsx)("div",{className:"SignInDiv",children:Object(C.jsx)("div",{className:"SignInContainer",children:Object(C.jsxs)("form",{children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",value:j.email,onChange:b}),Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{type:"password",name:"password",placeholder:"password",value:j.password,onChange:b}),Object(C.jsx)("p",{children:c||null}),Object(C.jsx)(W,{InnerText:"Sign In",ButtonClass:"Sign_In_Botton",onClick:function(t){t.preventDefault(),M.createUserWithEmailAndPassword(u,h).then((function(t){t&&e.push("/")})).catch((function(e){e.name;var t=e.code;e.customData;s(t)}))}})]})})})};n(82);var X=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(l.f)(),i=Object(a.useState)({email:"",password:""}),o=Object(r.a)(i,2),j=o[0],d=o[1],u=j.email,h=j.password,b=function(e){var t=e.target.name,n=e.target.value;d(Object(k.a)(Object(k.a)({},j),{},Object(z.a)({},t,n)))};return Object(C.jsx)("div",{className:"LogInContainerDiv",children:Object(C.jsxs)("div",{children:[Object(C.jsxs)("form",{children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",value:j.email,onChange:b}),Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{type:"password",name:"password",placeholder:"password",value:j.password,onChange:b}),Object(C.jsx)("p",{children:n||null}),Object(C.jsx)(W,{InnerText:"Log In",ButtonClass:"Log_In_Button",onClick:function(e){e.preventDefault(),M.signInWithEmailAndPassword(u,h).then((function(e){e&&s.push("/")})).catch((function(e){var t=e.code;e.name,e.customData;c(t)}))}})]}),Object(C.jsxs)("div",{className:"OtherSingInOption",children:[Object(C.jsx)("p",{children:"Or"}),Object(C.jsx)(W,{InnerText:"Sign in with Google",ButtonClass:"Google_SignIn_Button",onClick:P})]})]})})};n(83);var q=function(){var e=Object(a.useState)({ShowSignInComponent:!0,ShowLogInComponent:!1}),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(C.jsx)("div",{className:"SignInAndLoginDiv",children:Object(C.jsxs)("div",{className:"Container",children:[Object(C.jsxs)("div",{className:"LoginIcon__Icon",children:[Object(C.jsx)("img",{src:"https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"}),Object(C.jsx)("p",{children:"Welcome back."}),Object(C.jsxs)("div",{className:"Sign_In_And_Login_Options",children:[Object(C.jsx)("p",{onClick:function(){c({ShowLogInComponent:!1}),c({ShowSignInComponent:!0})},children:"Sign In /"}),Object(C.jsx)("p",{onClick:function(){c({ShowLogInComponent:!0})},children:"Log In"})]})]}),Object(C.jsxs)("div",{className:"FlexDiv",children:[1==n.ShowSignInComponent?Object(C.jsx)(G,{}):null,1==n.ShowLogInComponent?Object(C.jsx)(X,{}):null]})]})})};n(84);var J=function(){var e=Object(a.useState)({currentUserData:null}),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){M.onAuthStateChanged((function(e){B(e),c({currentUserData:e})}))}),[]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(V,{User:n.currentUserData}),Object(C.jsx)(H,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(C.jsx)(l.a,{exact:!0,path:"/user/LogIn",component:q})]})]})},Y=n(32),K=n(24),Q={navData:[{title:"Editorial"},{title:"Following"},{title:"3D Renders"},{title:"Architecture & Interior"},{title:"Current Events"},{title:"Experimental"},{title:"Fashion"},{title:"Film"},{title:"Food & Drink"},{title:"Health & Wellness"},{title:"Nature"},{title:"People"},{title:"Street Photography"}],navInnerContent:{firstContent:[{heading:"Company"},{title:"About"},{title:"Brand"},{title:"History"},{title:"Join the team"},{title:"Press"},{title:"Contact us"},{title:"help"}],secondContent:[{heading:"Propduct"},{title:"Developers/Api"},{title:"Unsplash Database"},{title:"Unsplash for IOS"},{title:"Apps & Plugins"}],threeContent:[{heading:"Community"},{title:"Become a Contributor"},{title:"Topics"},{title:"Collections"},{title:"Trends"},{title:"Unsplash Awards"},{title:"stats"}]},imageCollectionDataFirst:[],imageCollectionDataSecond:[],imageCollectionDataThird:[],SearchDataCollection:[],ShowNavBarDivBox:[],SelectedImages:null,OpenModelWindow:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(k.a)(Object(k.a)({},e),{},{imageCollectionDataFirst:[Object(k.a)({},t.payload)]});case d:return Object(k.a)(Object(k.a)({},e),{},{imageCollectionDataSecond:[Object(k.a)({},t.payload)]});case u:return Object(k.a)(Object(k.a)({},e),{},{imageCollectionDataThird:[Object(k.a)({},t.payload)]});case h:return Object(k.a)(Object(k.a)({},e),{},{SearchDataCollection:[].concat(Object(K.a)(e.SearchDataCollection),[{data:t.payload}])});case b:return Object(k.a)(Object(k.a)({},e),{},{SearchDataCollection:[]});case O:return Object(k.a)(Object(k.a)({},e),{},{SelectedImages:[t.payload]});case p:return Object(k.a)(Object(k.a)({},e),{},{OpenModelWindow:t.payload});default:return e}},$=n(54),ee=n.n($),te=n(46),ne={key:"root",storage:ee.a,whiteList:["user"]},ae=Object(Y.a)({user:Z}),ce=Object(te.a)(ne,ae),se=Object(Y.b)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ie=Object(te.b)(se),re=n(55);i.a.render(Object(C.jsx)(A.a,{children:Object(C.jsx)(o.a,{store:se,children:Object(C.jsx)(re.a,{persistor:ie,children:Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(J,{})})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.4923c98d.chunk.js.map