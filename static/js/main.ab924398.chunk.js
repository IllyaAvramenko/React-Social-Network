(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{124:function(e,t,n){"use strict";n.d(t,"b",(function(){return j}));var r=n(7),a=n.n(r),c=n(11),i=n(28),o=n(3),s=n(19),u="SEND-MESSAGE",l={dialogs:[{name:"Illya",avatar:"https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png",id:1},{name:"Ann",avatar:"https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png",id:2},{name:"Natalia",avatar:"https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png",id:3},{name:"Artem",avatar:"https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png",id:4},{name:"Ruslan",avatar:"https://www.planetaexcel.ru/upload/main/fc3/721.jpg.png",id:5}],messages:[{message:"Hiiii",id:1},{message:"Hellllooooo",id:2},{message:"Wsem Hi",id:3}]},d=function(e){return{type:u,newMessageBody:e}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(d(e)),n(Object(s.a)("dialogAddMessageForm"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[{message:t.newMessageBody,id:e.messages.length+1}])});default:return e}}},127:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return y})),n.d(t,"d",(function(){return C}));var r=n(7),a=n.n(r),c=n(11),i=n(28),o=n(3),s=n(13),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",j="SET_USERS",f="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",h="TOGGLE_IN_FOLOWING_PROGRESS",m={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(e){return{type:l,userId:e}},v=function(e){return{type:d,userId:e}},g=function(e){return{type:b,isFetching:e}},x=function(e,t){return{type:b,folowingInProgress:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r({type:f,currPage:e}),n.next=4,s.c.getUsers(e,t);case 4:c=n.sent,r(g(!1)),r((i=c.items,{type:j,users:i})),r((a=c.totalCount,{type:p,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,s.c.follow.bind(s.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,s.c.unFollow.bind(s.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case j:return Object(o.a)(Object(o.a)({},e),{},{users:Object(i.a)(t.users)});case f:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currPage});case p:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case b:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case h:return Object(o.a)(Object(o.a)({},e),{},{folowingInProgress:t.folowingInProgress?[].concat(Object(i.a)(e.folowingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(130),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bbe2716a-fdf3-4aa2-aa7d-154ac621832f"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return a.get("profile/".concat(e))}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},168:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(62),i=n.n(c),o=n(18),s=(n(168),n(49)),u=n(50),l=n(52),d=n(51),j=n(87),f=n.n(j),p=n(9),b=n(10),h=n(3),m=n(31),O=n(39),v=n.n(O),g=n(1),x=function(e){return Object(g.jsx)("header",{className:v.a.header,children:Object(g.jsxs)("div",{className:v.a.headerContainer,children:[Object(g.jsx)("h2",{children:"Own Social Network"}),Object(g.jsx)("div",{className:v.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[" ",e.login," - ",Object(g.jsx)("button",{className:v.a.btn,onClick:e.logout,children:"Log out"})]}):Object(g.jsx)(m.b,{className:v.a.btn,to:"/login",children:"Login"})})]})})},_=n(7),w=n.n(_),y=n(11),C=n(19),S=n(13),I="SET_USER_DATA",k={userId:null,email:null,login:null,isAuth:!1},z=function(e,t,n,r){return{type:I,payload:{userId:e,email:t,login:n,isAuth:r}}},P=function(){return function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r,a,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(z(a,i,c,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)(x,Object(h.a)({},this.props))}}]),n}(r.Component),N=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(z(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(M),T=n(33),A=n.n(T),L=function(e){return Object(g.jsx)("div",{className:A.a.navItem,children:Object(g.jsx)(m.b,{to:e.link,activeClassName:A.a.active,children:Object(g.jsxs)("div",{className:A.a.navItemWrapper,children:[Object(g.jsx)("div",{className:A.a.navItemIcon,children:e.children}),Object(g.jsx)("div",{className:A.a.navItemText,children:Object(g.jsx)("p",{children:e.text})})]})})})},F=function(){return Object(g.jsxs)("nav",{className:A.a.nav,children:[Object(g.jsx)(L,{link:"/profile",text:"My Profile",children:Object(g.jsx)("svg",{fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{"clip-rule":"evenodd",d:"M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z",fill:"currentColor","fill-rule":"evenodd"})})}),Object(g.jsx)(L,{link:"/dialogs",text:"Messages",children:Object(g.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("g",{id:"message_outline_20__Page-2",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(g.jsxs)("g",{id:"message_outline_20__message_outline_20",children:[Object(g.jsx)("path",{id:"message_outline_20__Shape",opacity:".4",d:"M0 0h20v20H0z"}),Object(g.jsx)("path",{d:"M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z",id:"message_outline_20__Icon-Color",fill:"currentColor","fill-rule":"nonzero"})]})})})}),Object(g.jsx)(L,{link:"/users",text:"Users",children:Object(g.jsx)("svg",{fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{"clip-rule":"evenodd",d:"M10 7.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.25 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0110 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 01-.35 4.98.75.75 0 010-1.5 1 1 0 00.14-1.99.75.75 0 01-.63-.85zM15.76 10a.75.75 0 000 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 000 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 00-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 000-1.5.57.57 0 01-.47-.2.86.86 0 01-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 01.22 1.48 1 1 0 00.14 1.99.75.75 0 110 1.5 2.5 2.5 0 01-.36-4.97z",fill:"currentColor","fill-rule":"evenodd"})})}),Object(g.jsx)(L,{link:"/music",text:"Music",children:Object(g.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("g",{id:"music_outline_20__Icons",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(g.jsx)("g",{id:"music_outline_20__Icons-20/music_outline_20",children:Object(g.jsxs)("g",{id:"music_outline_20__music_outline_20",children:[Object(g.jsx)("path",{d:"M0 0h20v20H0z"}),Object(g.jsx)("path",{d:"M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z",id:"music_outline_20__Icon-Color",fill:"currentColor","fill-rule":"nonzero"})]})})})})}),Object(g.jsx)(L,{link:"/settings",text:"Settings",children:Object(g.jsx)("svg",{fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{"clip-rule":"evenodd",d:"M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 01-.47-.77 2.25 2.25 0 010-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 01-.77-.46 13.4 13.4 0 01-.74-.7l-.26-.28-.27-.26zm4.4-1.03l-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 01-.27.18.75.75 0 01-.46 0A.86.86 0 0114 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 01-.18-.27.75.75 0 010-.46.85.85 0 01.18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 01.27-.18.75.75 0 01.46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 01-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 01-.98-.98 2.3 2.3 0 01-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.86.86 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 001.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 001.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 00-.23-.87 2.25 2.25 0 00-.98-.98 2.3 2.3 0 00-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 00-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 00.33-.33.85.85 0 00.06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 00-.06-.32.75.75 0 00-.33-.33.86.86 0 00-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 00-.32.06.75.75 0 00-.33.33.85.85 0 00-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 01-1.86-1.2 2.3 2.3 0 01-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.85.85 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02z",fill:"currentColor","fill-rule":"evenodd"})})})]})},U=function(e){return Object(g.jsx)("div",{children:"Music"})},R=function(e){return Object(g.jsx)("div",{children:"Settings"})},G=n(86),B=n(125),H=n(69),D=n(53),W=n(34),J=n.n(W),Z=Object(B.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(g.jsxs)("form",{onSubmit:t,className:J.a.loginForm,children:[Object(g.jsx)("div",{children:Object(g.jsx)(G.a,{placeholder:"Email",name:"email",component:D.a,validate:[H.b]})}),Object(g.jsx)("div",{children:Object(g.jsx)(G.a,{type:"password",placeholder:"Password",name:"password",component:D.a,validate:[H.b]})}),Object(g.jsx)("div",{children:Object(g.jsxs)("label",{className:J.a.checkbox,children:[Object(g.jsx)(G.a,{type:"checkbox",name:"rememberMe",component:D.a,text:"Remember me"}),Object(g.jsx)("p",{children:"Remember me"})]})}),n&&Object(g.jsx)("div",{className:J.a.formSummaryError,children:n}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:J.a.btn,children:"Login"})})]})})),q=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(y.a)(w.a.mark((function r(a){var c,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?(a(P()),a(Object(C.a)("login"))):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(C.b)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login;return t?Object(g.jsx)(p.a,{to:"/profile"}):Object(g.jsxs)("div",{className:J.a.loginPage,children:[Object(g.jsx)("div",{className:J.a.loginTitle,children:Object(g.jsx)("h1",{children:"Login"})}),Object(g.jsx)(Z,{onSubmit:function(e){var t=e.email,r=e.password,a=e.rememberMe;n(t,r,a)}})]})})),K=n(84),V="SET_INITIALIZED_SUCCESS",X={initialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},Q=a.a.lazy((function(){return n.e(5).then(n.bind(null,308))})),$=a.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),ee=a.a.lazy((function(){return n.e(4).then(n.bind(null,309))})),te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{}),Object(g.jsxs)("div",{className:f.a.appContainer,children:[Object(g.jsx)(F,{}),Object(g.jsx)("div",{className:f.a.appContent,children:Object(g.jsxs)(r.Suspense,{fallback:Object(g.jsx)(K.a,{}),children:[Object(g.jsx)(p.b,{path:"/dialogs",render:function(){return Object(g.jsx)(Q,{})}}),Object(g.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)($,{})}}),Object(g.jsx)(p.b,{path:"/users",render:function(){return Object(g.jsx)(ee,{})}}),Object(g.jsx)(p.b,{path:"/login",render:function(){return Object(g.jsx)(q,{})}}),Object(g.jsx)(p.b,{path:"/music",component:U}),Object(g.jsx)(p.b,{path:"/settings",component:R})]})})]})]}):Object(g.jsx)(K.a,{})}}]),n}(r.Component),ne=Object(b.d)(p.f,Object(o.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(P());Promise.all([t]).then(e({type:V}))}}}))(te),re=n(133),ae=n(126),ce=n(93),ie=n(124),oe={},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;return e},ue=n(127),le=Object(b.c)({profilePage:ce.b,dialogsPage:ie.a,sidebar:se,usersPage:ue.a,auth:E,form:ae.a,app:Y}),de=Object(b.e)(le,Object(b.a)(re.a));i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(m.a,{children:Object(g.jsx)(o.a,{store:de,children:Object(g.jsx)(ne,{})})})}),document.getElementById("root"))},33:function(e,t,n){e.exports={nav:"navbar_nav__2Kra0",navItem:"navbar_navItem__2G0I5",navItemWrapper:"navbar_navItemWrapper__1fp-d",navItemIcon:"navbar_navItemIcon__3y9Sb",navItemText:"navbar_navItemText__2AEY1",active:"navbar_active__1IM_G"}},34:function(e,t,n){e.exports={formSummaryError:"Login_formSummaryError__3To8_",btn:"Login_btn__20HqJ",loginPage:"Login_loginPage__3XKtx",loginTitle:"Login_loginTitle__2LXJ1",loginForm:"Login_loginForm__ZLGzi",checkbox:"Login_checkbox__2_nGp"}},39:function(e,t,n){e.exports={header:"header_header__13FZ0",headerContainer:"header_headerContainer__3RlOg",loginBlock:"header_loginBlock__T7gj8",btn:"header_btn__3yhHg"}},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(3),a=n(85),c=(n(0),n(86)),i=n(90),o=n.n(i),s=n(1),u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:"".concat(o.a.formsControl," ").concat(c?o.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(s.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(s.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},p=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(s.jsx)("div",{children:Object(s.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i))})}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},84:function(e,t,n){"use strict";n(0),n(292);var r=n(1);t.a=function(){return Object(r.jsx)("div",{className:"loadingio-spinner-rolling-vwo7mpmvoza",children:Object(r.jsx)("div",{className:"ldio-ve802hqup4",children:Object(r.jsx)("div",{})})})}},87:function(e,t,n){e.exports={appContainer:"App_appContainer__1dyhW",appContent:"App_appContent__3Adk5"}},90:function(e,t,n){e.exports={formsControl:"FormsControls_formsControl__2gG8R",error:"FormsControls_error__2tacN"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return w}));var r=n(7),a=n.n(r),c=n(11),i=n(28),o=n(3),s=n(19),u=n(13),l="ADD-POST",d="DELETE_POST",j="SET_USER_PROFILE",f="SET_STATUS",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,name:"Alfred",message:"Hi, it is my first post",likeCount:15},{id:2,name:"Zigmund",message:"Hello",likeCount:12},{id:3,name:"Leibnits",message:"Blalala",likeCount:42},{id:4,name:"Steven",message:"Dada",likeCount:182}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},m=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(h(e)),n(Object(s.a)("ProfileAddNewPostForm"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:j,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&(console.log(r.data),n((a=r.data.data.photos,{type:p,photos:a})));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=9;break}console.log(i.data),n(v(c)),t.next=11;break;case 9:return n(Object(s.b)("editProfile",{_error:i.data.messages[0]})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:e.posts.length+1,message:t.newPostText,likeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case d:return Object(o.a)(Object(o.a)({},e),{},{posts:Object(i.a)(e.posts.filter((function(e){return e.id!==t.postId})))});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.ab924398.chunk.js.map