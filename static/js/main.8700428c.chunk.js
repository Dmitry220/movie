(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{25:function(e,t,c){e.exports={filter_block:"Filter_filter_block__3kjbO",listGroup:"Filter_listGroup__gtJto",accordionButton:"Filter_accordionButton__1yZ1u"}},43:function(e,t,c){e.exports={preloader:"preloader_preloader__2se3H"}},48:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(21),i=c.n(n),r=(c(48),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))}),s=c(12),o=c(36),l=c(3),d="SHOW_FILMS",b="SHOW_LOADING",j="HIDE_LOADING",u="HANDLER_INPUT",O="GET_GENRES",x="SET_FAVOURITE_FILMS",p="DELETE_FAVOURITE_FILMS",h="SET_SELECTED_FILM_ID",f="DELETE_SELECTED_FILM_ID",m={pagesCount:null,films:[],isLoading:!1,currentPage:1,selectedMovie:null},v={searchTest:""},g=c(17),N={favouriteFilms:[]},y=c(27),E=c(37),_={genres:[],countries:[],rating:null,fromYear:null,toYear:null},F={key:"root",storage:c.n(E).a,whitelist:["favouriteFilms"]},S=Object(s.b)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{films:t.payload.films,pagesCount:t.payload.pagesCount,currentPage:t.payload.currentPage});case b:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{selectedMovie:t.payload});case f:return Object(l.a)(Object(l.a)({},e),{},{selectedMovie:null});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(l.a)(Object(l.a)({},e),{},{searchTest:t.text}):e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(l.a)(Object(l.a)({},e),{},{genres:t.genres,countries:t.countries}):e},favouriteFilms:Object(y.a)(F,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{favouriteFilms:[].concat(Object(g.a)(e.favouriteFilms),[t.payload])});case p:return Object(l.a)(Object(l.a)({},e),{},{favouriteFilms:Object(g.a)(e.favouriteFilms.filter((function(e){return e.filmId!==t.payload.filmId})))});default:return e}}))}),T=Object(s.d)(S,Object(s.c)(Object(s.a)(o.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),L=Object(y.b)(T),C=T,I=c(2),w=c(39),k=c(5),D=c(6),A=c(40).create({baseURL:"https://kinopoiskapiunofficial.tech/api/v2.1/films/",headers:{"Content-Type":"aplication/json","X-API-KEY":"303097b4-2b0a-46a5-8aae-4a1137273ff1"}}),R=function(){return A.get("filters")},G=function(){return function(e){R().then((function(t){var c,a;e((c=t.data.genres,a=t.data.countries,{type:O,genres:c,countries:a}))}))}},M=c(25),P=c.n(M),U=c(18),Y=c(0),H=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.filter.genres})),c=Object(I.c)((function(e){return e.filter.countries})),n=Object(a.useState)(""),i=Object(D.a)(n,2),r=i[0],s=i[1],o=Object(a.useState)([]),d=Object(D.a)(o,2),b=d[0],j=d[1],u=Object(a.useState)([]),O=Object(D.a)(u,2),x=O[0],p=O[1],h=Object(a.useState)(""),f=Object(D.a)(h,2),m=f[0],v=f[1],N=Object(a.useState)(""),y=Object(D.a)(N,2),E=y[0],_=y[1],F=Object(a.useState)({x:1880}),S=Object(D.a)(F,2),T=S[0],L=S[1],C=Object(a.useState)({x:2021}),w=Object(D.a)(C,2),A=w[0],R=w[1],M=Object(a.useState)({x:0}),H=Object(D.a)(M,2),X=H[0],B=H[1],V=Object(a.useState)({x:10}),J=Object(D.a)(V,2),W=J[0],K=J[1],Z=Object(a.useState)("order=YEAR"),q=Object(D.a)(Z,2),z=q[0],Q=q[1];return Object(a.useEffect)((function(){j(c)}),[c]),Object(a.useEffect)((function(){e(G())}),[e]),Object(a.useEffect)((function(){var e=c.filter((function(e){if(0===e.country.toLocaleLowerCase().indexOf(r.toLocaleLowerCase()))return e}));j(e)}),[r]),Object(a.useEffect)((function(){return p((function(e){return[].concat(Object(g.a)(e),[z,m,E,"&yearFrom=".concat(T.x),"&yearTo=".concat(A.x),"&ratingFrom=".concat(X.x),"&ratingTo=".concat(W.x)])})),function(){p([])}}),[m,E,T.x,A.x,X.x,W.x,z]),Object(Y.jsx)("div",{className:"container-fluid pt-5",children:Object(Y.jsxs)("div",{className:"accordion dark",id:"accordionExample",children:[Object(Y.jsxs)("div",{className:"accordion-item",children:[Object(Y.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(Y.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",children:"\u0416\u0430\u043d\u0440\u044b"})}),Object(Y.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(Y.jsx)("ul",{className:"list-group ".concat(P.a.filter_block),children:t.map((function(e){return Object(Y.jsx)("li",{className:"list-group-item ".concat(m==="&genre=".concat(e.id)&&"active"),style:{cursor:"pointer"},onClick:function(t){return v("&genre=".concat(e.id))},children:e.genre},e.id)}))})})]}),Object(Y.jsxs)("div",{className:"accordion-item",children:[Object(Y.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(Y.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"\u0421\u0442\u0440\u0430\u043d\u044b"})}),Object(Y.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(Y.jsxs)("ul",{className:"list-group ".concat(P.a.filter_block),children:[Object(Y.jsx)("input",{type:"text",value:r,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b",onChange:function(e){return s(e.target.value)}}),!b.length&&Object(Y.jsx)("li",{className:"list-group-item",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),b.map((function(e){return Object(Y.jsx)("li",{className:"list-group-item ".concat(E==="&country=".concat(e.id)&&"active"),style:{cursor:"pointer"},onClick:function(t){return _("&country=".concat(e.id))},children:e.country},e.id)}))]})})]}),Object(Y.jsxs)("div",{className:"accordion-item",children:[Object(Y.jsx)("h2",{className:"accordion-header",id:"headingFour",children:Object(Y.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour",children:"\u0413\u043e\u0434"})}),Object(Y.jsx)("div",{id:"collapseFour",className:"accordion-collapse collapse","aria-labelledby":"headingFour","data-bs-parent":"#accordionExample",children:Object(Y.jsxs)("div",{className:"accordion-body",children:[Object(Y.jsxs)("div",{children:["\u041e\u0442 ",T.x]}),Object(Y.jsx)("div",{children:Object(Y.jsx)(U.a,{axis:"x",x:T.x,xmin:1880,xmax:2021,onChange:function(e){var t=e.x;return L((function(e){return Object(l.a)(Object(l.a)({},e),{},{x:t})}))}})}),Object(Y.jsxs)("div",{children:["\u0414\u043e ",A.x]}),Object(Y.jsx)("div",{children:Object(Y.jsx)(U.a,{axis:"x",x:A.x,xmin:T.x,xmax:2021,onChange:function(e){var t=e.x;return R((function(e){return Object(l.a)(Object(l.a)({},e),{},{x:t})}))}})})]})})]}),Object(Y.jsxs)("div",{className:"accordion-item",children:[Object(Y.jsx)("h2",{className:"accordion-header",id:"headingFour",children:Object(Y.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFive","aria-expanded":"false","aria-controls":"headingFive",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"})}),Object(Y.jsx)("div",{id:"collapseFive",className:"accordion-collapse collapse","aria-labelledby":"headingFive","data-bs-parent":"#accordionExample",children:Object(Y.jsxs)("div",{className:"accordion-body",children:[Object(Y.jsxs)("div",{children:["\u041e\u0442 ",X.x]}),Object(Y.jsx)("div",{children:Object(Y.jsx)(U.a,{axis:"x",x:X.x,xmin:0,xmax:10,onChange:function(e){var t=e.x;return B((function(e){return Object(l.a)(Object(l.a)({},e),{},{x:t})}))}})}),Object(Y.jsxs)("div",{children:["\u0414\u043e ",W.x]}),Object(Y.jsx)("div",{children:Object(Y.jsx)(U.a,{axis:"x",x:W.x,xmin:X.x,xmax:10,onChange:function(e){var t=e.x;return K((function(e){return Object(l.a)(Object(l.a)({},e),{},{x:t})}))}})})]})})]}),Object(Y.jsxs)("div",{className:"accordion-item",children:[Object(Y.jsx)("h2",{className:"accordion-header",id:"headingFour",children:Object(Y.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseSix","aria-expanded":"false","aria-controls":"headingSix",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"})}),Object(Y.jsx)("div",{id:"collapseSix",className:"accordion-collapse collapse","aria-labelledby":"headingSix","data-bs-parent":"#accordionExample",children:Object(Y.jsx)("div",{className:"accordion-body",children:Object(Y.jsxs)("ul",{className:"list-group",children:[Object(Y.jsx)("li",{className:"list-group-item ".concat("order=RATING"===z&&"active"),style:{cursor:"pointer"},onClick:function(e){return Q("order=RATING")},children:"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"}),Object(Y.jsx)("li",{className:"list-group-item ".concat("order=YEAR"===z&&"active"),style:{cursor:"pointer"},onClick:function(e){return Q("order=YEAR")},children:"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0433\u043e\u0434\u0443"})]})})})]}),Object(Y.jsx)(k.b,{to:"/films/".concat(x.join("")),className:"btn btn-outline-primary p-2 justify-content-center d-flex text-white border-white",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"})]})})},X=(c(80),c(43),c(81),c(4)),B=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(Y.jsx)("span",{className:"visually-hidden",children:"Loading..."})]})},V=function(){var e=Object(X.d)(),t=Object(a.useState)(""),c=Object(D.a)(t,2),n=c[0],i=c[1],r=Object(I.c)((function(e){return e.films.isLoading})),s=Object(I.b)(),o=function(t,c){t.preventDefault(),s({type:u,text:c}),e.push("/film/".concat(c))};return Object(Y.jsx)("div",{children:Object(Y.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(Y.jsxs)("div",{className:"container-fluid d-flex justify-content-center",children:[Object(Y.jsx)("ul",{className:"nav nav-pills nav-fill",children:Object(Y.jsx)("li",{className:"nav-item",children:Object(Y.jsx)(k.b,{to:"/top100",className:"btn btn-primary",children:"\u0422\u043e\u043f 100 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"})})}),Object(Y.jsxs)("form",{className:"d-flex p-3",onSubmit:function(e){o(e,n)},children:[Object(Y.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430!",value:n,onChange:function(e){i(e.target.value)}}),Object(Y.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:function(e){return o(e,n)},children:r?Object(Y.jsx)(B,{}):"\u041f\u043e\u0438\u0441\u043a"})]}),Object(Y.jsx)(k.b,{to:"/favourite",className:"btn btn-primary",children:"\u041c\u043e\u0438 \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]})})})},J=(c(82),function(){return Object(Y.jsx)(k.a,{children:Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(V,{}),Object(Y.jsxs)("div",{className:"row",children:[Object(Y.jsx)("div",{className:"col-3",children:Object(Y.jsx)(H,{})}),Object(Y.jsx)("div",{className:"col-9"})]})]})})});console.log("/movie"),i.a.render(Object(Y.jsx)(k.a,{basename:"/movie",children:Object(Y.jsx)(I.a,{store:C,children:Object(Y.jsx)(w.a,{persistor:L,children:Object(Y.jsx)(J,{})})})}),document.getElementById("root")),r()}},[[83,1,2]]]);
//# sourceMappingURL=main.8700428c.chunk.js.map