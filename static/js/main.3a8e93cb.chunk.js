(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{29:function(e,a,t){e.exports={spinner:"preloader_spinner__35WkY",spinner__head:"preloader_spinner__head__uvGMw"}},3:function(e,a,t){e.exports={header:"header_header__J3qgt",out:"header_out__10H5V",dark:"header_dark__2aHwA",header__container:"header_header__container__3RYDU",header__body:"header_header__body__2ufpH",header__column:"header_header__column__1_WTS",header__column_1:"header_header__column_1__1PuED",header__menu:"header_header__menu__16WJ2",header__list:"header_header__list__39Xxp",header__logo:"header_header__logo__2zjR8",header__burger:"header_header__burger__37uwz",header__link:"header_header__link__2OkAC",header__btn:"header_header__btn__3IshA",active:"header_active__kVMDG",switch:"header_switch__2RuJl",slider:"header_slider__3KY-x",round:"header_round__3Rs_u",themeCheck:"header_themeCheck__2FHAH",search:"header_search__8oj5c",searchDark:"header_searchDark__2s4qs",inputSearch:"header_inputSearch__3kC07",inputSearchDark:"header_inputSearchDark__2l_MH",clue:"header_clue__2fv4u",clue__list:"header_clue__list__1bRuA",clue__item:"header_clue__item__1RRGH"}},32:function(e,a,t){},4:function(e,a,t){e.exports={filter:"Filter_filter__XHns-",filter__title:"Filter_filter__title__5gf7b",dark:"Filter_dark__3vMcP",subtitle:"Filter_subtitle__3o8a1",filter__body:"Filter_filter__body__2CwuB",rating__item:"Filter_rating__item__tkoa4",year__item:"Filter_year__item__1bE3k",select:"Filter_select__6jKWr",select__option:"Filter_select__option__s_iwn",value__container:"Filter_value__container__3GZPa",value__column:"Filter_value__column__2vBAW",filter__submit:"Filter_filter__submit__3R8Ri",spoiler__item:"Filter_spoiler__item__f5RoG",spoiler__title:"Filter_spoiler__title__Gpq20",spoiler__body:"Filter_spoiler__body__1OgCJ",active:"Filter_active__2HQZd"}},51:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var i=t(1),n=t(20),c=t.n(n),s=(t(51),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,90)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),i(e),n(e),c(e),s(e)}))}),r=t(14),l=t(41),o=t(5),d="SHOW_FILMS",_="SHOW_LOADING",u="HIDE_LOADING",m="HANDLER_INPUT",j="GET_GENRES",b="SET_FAVOURITE_FILMS",p="DELETE_FAVOURITE_FILMS",g="SET_SELECTED_FILM_ID",h="DELETE_SELECTED_FILM_ID",O="CHANGE_THEME",f={pagesCount:null,films:[],isLoading:!1,currentPage:1,selectedMovie:null,isResponse:!1},v={searchTest:""},x=t(31),N={favouriteFilms:[]},k=t(22),C=t(25),y=t.n(C),L={genres:[],countries:[],rating:null,fromYear:null,toYear:null},F={darkTheme:!1},E={key:"root",storage:y.a,whitelist:["favouriteFilms"]},T={key:"theme",storage:y.a,whitelist:["darkTheme"]},D=Object(r.b)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(o.a)(Object(o.a)({},e),{},{films:a.payload.films,pagesCount:a.payload.pagesCount,currentPage:a.payload.currentPage});case _:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case u:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1});case g:return Object(o.a)(Object(o.a)({},e),{},{selectedMovie:a.payload});case h:return Object(o.a)(Object(o.a)({},e),{},{selectedMovie:null});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;return a.type===m?Object(o.a)(Object(o.a)({},e),{},{searchTest:a.text}):e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;return a.type===j?Object(o.a)(Object(o.a)({},e),{},{genres:a.genres,countries:a.countries}):e},favouriteFilms:Object(k.a)(E,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(o.a)(Object(o.a)({},e),{},{favouriteFilms:[].concat(Object(x.a)(e.favouriteFilms),[a.payload])});case p:return Object(o.a)(Object(o.a)({},e),{},{favouriteFilms:Object(x.a)(e.favouriteFilms.filter((function(e){return e.filmId!==a.payload.filmId})))});default:return e}})),theme:Object(k.a)(T,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;return a.type===O?Object(o.a)(Object(o.a)({},e),{},{darkTheme:!e.darkTheme}):e}))}),R=Object(r.d)(D,Object(r.c)(Object(r.a)(l.a))),P=Object(k.b)(R),S=R,w=t(2),I=t(43),A=t(8),M=t(7),B=t(6),H=(t(59),t(32),t(60),t(44).create({baseURL:"https://kinopoiskapiunofficial.tech/api/v2.1/films",headers:{"Content-Type":"aplication/json","X-API-KEY":"303097b4-2b0a-46a5-8aae-4a1137273ff1"}})),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return H.get("/top?type=TOP_100_POPULAR_FILMS&page=".concat(e))},U=function(e){return H.get("/top?type=TOP_AWAIT_FILMS&page=".concat(e))},Y=function(e,a){return H.get("/search-by-keyword?keyword=".concat(e,"&page=").concat(a))},W=function(){return H.get("filters")},J=function(e,a,t,i,n,c,s,r){return H.get("/search-by-filters?genre=".concat(c,"&country=").concat(s,"&order=").concat(r,"&type=ALL&ratingFrom=").concat(e,"&ratingTo=").concat(a,"&yearFrom=").concat(t,"&yearTo=").concat(i,"&page=").concat(n))},q=function(e){return H.get("".concat(e))},V=function(){return{type:_}},K=function(){return{type:u}},X=function(e,a,t){return{type:d,payload:{films:e,pagesCount:a,currentPage:t}}},z=function(e){return function(a){a(V()),G(e).then((function(t){a(X(t.data.films,t.data.pagesCount,e)),a(K())})).catch((function(){console.log("Error")}))}},Z=function(e){return function(a){a(V()),U(e).then((function(t){a(X(t.data.films,t.data.pagesCount,e)),a(K())})).catch((function(){console.log("Error")}))}},Q=function(e,a){return function(t){t(V()),Y(e,a).then((function(e){t(X(e.data.films,e.data.pagesCount,a)),t(K())})).catch((function(){console.log("Error")}))}},$=function(){return function(e){W().then((function(a){var t,i;e((t=a.data.genres,i=a.data.countries,{type:j,genres:t,countries:i}))}))}},ee=function(e,a,t,i,n,c,s,r){return function(l){l(V()),J(e,a,t,i,n,c,s,r).then((function(e){200===e.status&&(l(X(e.data.films,e.data.pagesCount,n)),l(K()))})).catch((function(){l(X([],null,null)),l(K())}))}},ae=function(e){return{type:g,payload:e}},te=function(){return{type:O}},ie=t(4),ne=t.n(ie),ce=t(26),se=t.n(ce),re=(t(80),function(e){return e.theme.darkTheme}),le=function(e){var a=e.favouriteFilms.favouriteFilms,t=[];if(a.length<=20){for(var i=0;i<a.length;i++)t.push(a[i]);return t}for(var n=0;n<Math.ceil(a.length/20);n++)t[n]=a.slice(20*n,20*n+20);return t},oe=t(0),de=function(){var e=Object(B.f)(),a=Object(w.b)(),t=Object(w.c)((function(e){return e.filter.genres})),n=Object(w.c)((function(e){return e.filter.countries})),c=(new Date).getFullYear(),s=Object(w.c)(re),r=Object(i.useState)(),l=Object(M.a)(r,2),o=l[0],d=l[1],_=Object(i.useState)(),u=Object(M.a)(_,2),m=u[0],j=u[1],b=Object(i.useState)(),p=Object(M.a)(b,2),g=p[0],h=p[1],O=Object(i.useState)(),f=Object(M.a)(O,2),v=f[0],x=f[1],N=Object(i.useState)(),k=Object(M.a)(N,2),C=k[0],y=k[1],L=Object(i.useState)(),F=Object(M.a)(L,2),E=F[0],T=F[1],D=Object(i.useState)(),R=Object(M.a)(D,2),P=R[0],S=R[1];return Object(i.useEffect)((function(){a($())}),[a]),Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsx)("div",{className:ne.a.filter,children:Object(oe.jsx)("div",{className:"filter__container",children:Object(oe.jsxs)("div",{className:ne.a.filter__body,children:[Object(oe.jsx)("h3",{className:s?ne.a.filter__title+" "+ne.a.dark:ne.a.filter__title,children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(oe.jsx)("div",{className:"filter__genre genre",children:Object(oe.jsx)("div",{className:"genre__container",children:Object(oe.jsxs)("select",{className:ne.a.genre__item+" "+ne.a.select,onChange:function(e){return d(e.target.value)},name:"Genre",children:[Object(oe.jsx)("option",{value:"",children:"\u0416\u0430\u043d\u0440"}),t.map((function(e){return Object(oe.jsx)("option",{value:e.id,children:e.genre},e.id)}))]})})}),Object(oe.jsx)("div",{className:"filter__country country",children:Object(oe.jsx)("div",{className:"country__container",children:Object(oe.jsxs)("select",{className:ne.a.country__item+" "+ne.a.select,onChange:function(e){return j(e.target.value)},name:"Country",children:[Object(oe.jsx)("option",{value:"",children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),n.map((function(e){return Object(oe.jsx)("option",{value:e.id,children:e.country},e.id)}))]})})}),Object(oe.jsx)("div",{className:"filter__country order",children:Object(oe.jsx)("div",{className:"order__container",children:Object(oe.jsxs)("select",{className:ne.a.order__item+" "+ne.a.select,onChange:function(e){return S(e.target.value)},children:[Object(oe.jsx)("option",{value:"",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(oe.jsx)("option",{value:"RATING",children:"Rating"}),Object(oe.jsx)("option",{value:"YEAR",children:"Year"})]})})}),Object(oe.jsx)("div",{className:ne.a.filter__year+" "+ne.a.year,children:Object(oe.jsxs)("div",{className:"year__container",children:[Object(oe.jsx)("h3",{className:ne.a.year__title+" "+ne.a.subtitle,children:"\u0413\u043e\u0434"}),Object(oe.jsx)("div",{className:ne.a.year__item,children:Object(oe.jsx)(se.a,{range:{min:1900,max:c},start:[1900,c],step:1,tooltips:!0,connect:!0,onChange:function(e,a,t,i,n){T(t[0]),y(t[1])}})})]})}),Object(oe.jsx)("div",{className:ne.a.filter__rating+" "+ne.a.rating,children:Object(oe.jsxs)("div",{className:"rating__container",children:[Object(oe.jsx)("h3",{className:ne.a.ratting__title+" "+ne.a.subtitle,children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}),Object(oe.jsx)("div",{className:ne.a.rating__item,children:Object(oe.jsx)(se.a,{range:{min:0,max:10},start:[0,10],step:1,tooltips:!0,connect:!0,onChange:function(e,a,t,i,n){x(t[0]),h(t[1])}})})]})}),Object(oe.jsx)("div",{className:ne.a.filter__submit,children:Object(oe.jsx)("button",{onClick:function(){e.push("/films/".concat(void 0===v?0:v,"/").concat(void 0===g?10:g,"/").concat(void 0===E?1950:E,"/").concat(void 0===C?c:C,"/").concat(void 0===o?0:o,"/").concat(void 0===m?0:m,"/").concat(void 0===P?"RATING":P))},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})})]})})})})},_e=t(29),ue=t.n(_e),me=function(){return Object(oe.jsx)("div",{className:ue.a.spinner,children:Object(oe.jsx)("div",{className:ue.a.spinner__head})})},je=(t(86),t.p+"static/media/defaultMovieImage.6bef6ac0.jpg"),be=function(e){var a=e.film,t=e.filmId,i=e.nameRu,n=e.posterUrlPreview,c=e.favouriteFilms,s=(e.rating,Object(w.c)(re));return Object(oe.jsx)("div",{className:"cards__column",children:Object(oe.jsxs)("div",{className:s?"cards__item dark":"cards__item",children:[Object(oe.jsx)("div",{className:"cards__image",children:Object(oe.jsx)(A.b,{to:"/cinemaInfo/".concat(t),children:Object(oe.jsx)("img",{src:n||je,alt:""})})}),Object(oe.jsxs)("div",{className:"cards__body",children:[Object(oe.jsx)("div",{className:s?"cards__title dark":"cards__title",children:i}),Object(oe.jsx)(pe,{filmId:t,favouriteFilms:c,film:a})]})]})})},pe=function(e){var a=e.filmId,t=e.favouriteFilms,i=e.film,n=Object(w.b)(),c=Object(w.c)(re);return Object(oe.jsx)(oe.Fragment,{children:t.some((function(e){return e.filmId===a}))?Object(oe.jsx)("button",{onClick:function(){return n({type:p,payload:i})},className:c?"cards__btn cards__btn_danger dark":"cards__btn cards__btn_danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"}):Object(oe.jsx)("button",{onClick:function(){return n({type:b,payload:i})},className:c?"cards__btn dark":"cards__btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})},ge=function(e){var a=e.films;console.log("Render Films");var t=Object(w.c)((function(e){return e.favouriteFilms.favouriteFilms})),i=Object(w.c)((function(e){return e.films.isLoading})),n=Object(w.c)(re);return 0===a.length?Object(oe.jsx)("h2",{className:n?"warningText warningTextDark":"warningText",children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}):Object(oe.jsx)("section",{className:"cards",children:Object(oe.jsx)("div",{className:"cards__row",children:i?Object(oe.jsx)(me,{}):a.map((function(e){return Object(oe.jsx)(be,{filmId:e.filmId,film:e,nameRu:e.nameRu,posterUrlPreview:e.posterUrlPreview,favouriteFilms:t,rating:e.rating},e.filmId)}))})})},he=t(9),Oe=t.n(he),fe=function(){var e=Object(w.c)((function(e){return e.films.pagesCount})),a=Object(w.c)((function(e){return e.films.films})),t=Object(B.g)(),n=t.ratingFrom,c=t.ratingTo,s=t.yearFrom,r=t.yearTo,l=t.genre,o=t.country,d=t.order,_=Object(w.b)();Object(i.useEffect)((function(){console.log("Screening of films by genre "),_(ee(n,c,s,r,1,l,o,d))}),[_,n,c,s,r,l,o,d]);var u=function(e){var a=e.selected+1;_(ee(n,c,s,r,a,l,o,d))};return Object(oe.jsxs)("div",{className:"container__film",children:[Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:e>20?20:e,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:u,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}),Object(oe.jsx)(ge,{films:a}),Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:e>20?20:e,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:u,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})},ve=function(e){var a=Object(B.g)().name,t=Object(w.c)((function(e){return e.films.films})),n=Object(w.c)((function(e){return e.films.pagesCount})),c=Object(w.b)();Object(i.useEffect)((function(){c(Q(a,1))}),[c,a]);var s=function(e){var t=e.selected+1;c(Q(a,t))};return console.log("Render Show Films By Search"),Object(oe.jsxs)("div",{className:"container__film",children:[Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:n>20?20:n,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:s,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}),Object(oe.jsx)(ge,{films:t}),Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:n>20?20:n,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:s,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})},xe=function(){console.log("Render start page");var e=Object(w.c)((function(e){return e.films.pagesCount})),a=Object(w.c)((function(e){return e.films.currentPage})),t=Object(w.c)((function(e){return e.films.films})),n=Object(w.b)();Object(i.useEffect)((function(){n(Z(a))}),[n,a]);var c=function(e){var a=e.selected+1;n(Z(a))};return Object(oe.jsxs)("div",{className:"container__film",children:[Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:e>20?20:e,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:c,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}),Object(oe.jsx)(ge,{films:t}),Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:e>20?20:e,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:c,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})},Ne=function(){console.log("Render Top 100");var e=Object(w.c)((function(e){return e.films.currentPage})),a=Object(w.c)((function(e){return e.films.pagesCount})),t=Object(w.c)((function(e){return e.films.films})),n=Object(w.b)();Object(i.useEffect)((function(){n(z(e))}),[n,e]);var c=function(e){var a=e.selected+1;n(z(a))};return Object(oe.jsxs)("div",{className:"container__film",children:[Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:a>20?20:a,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:c,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}),Object(oe.jsx)(ge,{films:t}),Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:a>20?20:a,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:c,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})},ke=(t(87),function(){var e=Object(B.g)().id,a=Object(w.b)(),t=Object(w.c)((function(e){return e.films.selectedMovie})),n=Object(w.c)((function(e){return e.films.isLoading})),c=Object(w.c)((function(e){return e.favouriteFilms.favouriteFilms})),s=Object(w.c)(re);return Object(i.useEffect)((function(){return a(function(e){return function(a){a(V()),q(e).then((function(e){a(ae(e.data.data)),a(K())}))}}(e)),function(){a({type:h})}}),[a,e]),t?Object(oe.jsx)("div",{className:"description",children:n?Object(oe.jsx)(me,{}):Object(oe.jsxs)("div",{className:"description__container",children:[Object(oe.jsxs)("div",{className:"description__row",children:[Object(oe.jsx)("div",{className:"description__column description__column_1",children:Object(oe.jsxs)("div",{className:"description__image",children:[Object(oe.jsx)("img",{src:t.posterUrl,alt:""}),Object(oe.jsx)("br",{})]})}),Object(oe.jsxs)("div",{className:"description__column",children:[Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.nameRu})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u0421\u043b\u043e\u0430\u0433\u043d:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.slogan||"\u0411\u0435\u0437 \u0441\u043b\u043e\u0433\u0430\u043d\u0430"})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.filmLength})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u0413\u043e\u0434:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.year})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u0416\u0430\u043d\u0440:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.genres.map((function(e,a){return Object(oe.jsxs)("span",{children:[e.genre," "]},a)}))})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u0421\u0442\u0440\u0430\u043d\u0430:"}),Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:t.countries.map((function(e,a){return Object(oe.jsxs)("span",{children:[e.country," "]},a)}))})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsxs)("div",{className:"description__item",children:[Object(oe.jsx)("div",{className:s?"description__title dark":"description__title",children:"\u0412\u043e\u0437\u0440\u0430\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f:"}),Object(oe.jsxs)("div",{className:s?"description__value dark":"description__value",children:[t.ratingAgeLimits,"+"]})]})}),Object(oe.jsx)("div",{className:"description__body",children:Object(oe.jsx)("div",{className:s?"description__value dark":"description__value",children:Object(oe.jsx)(pe,{favouriteFilms:c,film:t,filmId:t.filmId})})})]})]}),Object(oe.jsx)("div",{className:s?"description__text dark":"description__text",children:Object(oe.jsx)("p",{children:t.description})})]})}):null}),Ce=function(){var e=Object(w.c)(le),a=Object(i.useState)(0),t=Object(M.a)(a,2),n=t[0],c=t[1],s=1;s=Array.isArray(e[0])?e.length:1;return Object(oe.jsxs)("div",{className:"container__film",children:[Object(oe.jsx)(Oe.a,{previousLabel:"Back",nextLabel:"Next",breakLabel:"...",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var a=e.selected;c(a)},containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}),Object(oe.jsx)(ge,{films:Array.isArray(e[0])?e[n]:e})]})},ye=t(30),Le=t.n(ye),Fe=t(46),Ee=t(3),Te=t.n(Ee),De=t.p+"static/media/logo.6ce24c58.svg",Re=function(e,a,t,i){var n=a;return t&&(n+=" "+e.active),i&&(n+=" "+e.dark),n},Pe=function(e){var a=e.themeToggler,t=e.burgerActive,n=e.setBurgerActive;console.log("Render Header");var c=Object(B.f)(),s=Object(i.useState)(""),r=Object(M.a)(s,2),l=r[0],o=r[1],d=Object(w.c)(re),_=Object(i.useState)(null),u=Object(M.a)(_,2),m=u[0],j=u[1],b=Object(w.b)();return Object(i.useEffect)((function(){""!==l&&(m&&clearTimeout(m),j(setTimeout(Object(Fe.a)(Le.a.mark((function e(){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.push("/film/".concat(l));case 2:case"end":return e.stop()}}),e)}))),500)))}),[m,c,l]),Object(i.useEffect)((function(){document.querySelector("body").classList.toggle("lock")}),[t]),Object(oe.jsx)("header",{className:d?Te.a.header+" "+Te.a.dark:Te.a.header,children:Object(oe.jsx)("div",{className:Te.a.header__container,children:Object(oe.jsxs)("div",{className:Te.a.header__body,children:[Object(oe.jsxs)("div",{className:Te.a.header__column+" "+Te.a.header__column_1,children:[Object(oe.jsxs)(A.b,{to:"/",className:Te.a.header__logo,children:[Object(oe.jsx)("img",{src:De,alt:""})," "]}),Object(oe.jsx)("div",{className:Re(Te.a,Te.a.header__burger,t,d),onClick:function(){return n((function(e){return!e}))},children:Object(oe.jsx)("span",{})}),Object(oe.jsx)("nav",{className:Re(Te.a,Te.a.header__menu,t,d),children:Object(oe.jsxs)("ul",{className:Te.a.header__list,children:[Object(oe.jsx)("li",{children:Object(oe.jsx)(A.b,{to:"/top100",className:d?Te.a.header__link+" "+Te.a.dark:Te.a.header__link,children:"\u0422\u043e\u043f 100"})}),Object(oe.jsx)("li",{children:Object(oe.jsx)(A.b,{to:"/favourite",className:d?Te.a.header__link+" "+Te.a.dark:Te.a.header__link,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})}),Object(oe.jsxs)("li",{className:Te.a.themeCheck,children:[Object(oe.jsx)("label",{htmlFor:"theme",className:d?Te.a.header__link+" "+Te.a.dark:Te.a.header__link,children:"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430"}),Object(oe.jsxs)("label",{className:Te.a.switch,children:[Object(oe.jsx)("input",{type:"checkbox",checked:d&&!0,onChange:function(){return b(a())},id:"theme"}),Object(oe.jsx)("span",{className:Te.a.slider+" "+Te.a.round})]})]})]})})]}),Object(oe.jsx)("div",{className:Te.a.header__column,children:Object(oe.jsxs)("form",{className:"form",children:[Object(oe.jsx)("input",{onChange:function(e){return function(e){return o(e.target.value)}(e)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",className:d?Te.a.inputSearch+" "+Te.a.inputSearchDark:Te.a.inputSearch,value:l}),Object(oe.jsx)("div",{className:d?Te.a.search+" "+Te.a.searchDark:Te.a.search})]})})]})})})},Se=function(){var e=Object(i.useState)(!1),a=Object(M.a)(e,2),t=a[0],n=a[1],c=Object(w.c)(re);return Object(oe.jsx)("div",{className:ne.a.spoiler,children:Object(oe.jsxs)("div",{className:ne.a.spoiler__item,children:[Object(oe.jsx)("h2",{className:Re(ne.a,ne.a.spoiler__title,t,c),onClick:function(){return n((function(e){return!e}))},children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(oe.jsx)("div",{className:t?ne.a.spoiler__body+" "+ne.a.active:ne.a.spoiler__body,children:Object(oe.jsx)(de,{})})]})})},we=Object(i.memo)(ve),Ie=Object(i.memo)(Ne),Ae=Object(i.memo)(xe),Me=Object(i.memo)(Ce),Be=Object(i.memo)(ke),He=Object(i.memo)(fe),Ge=function(){var e=Object(i.useState)(!1),a=Object(M.a)(e,2),t=a[0],n=a[1],c=Object(w.c)(re),s=Object(i.useState)(window.matchMedia("(min-width: 992px)").matches),r=Object(M.a)(s,2),l=r[0],o=r[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 992px)").addEventListener("change",(function(e){return o(e.matches)}))}),[l]),console.log("Render App");var d,_=window.matchMedia("(max-width: 768px)");return Object(oe.jsxs)(A.a,{children:[Object(oe.jsx)(Pe,{themeToggler:te,burgerActive:t,setBurgerActive:n}),Object(oe.jsxs)("div",{className:c?"container dark":"container",children:[(d=_,d.matches?Object(oe.jsx)(Se,{}):Object(oe.jsx)(de,{})),Object(oe.jsxs)(B.c,{children:[Object(oe.jsx)(B.a,{exact:!0,path:"/",component:Ae}),Object(oe.jsx)(B.a,{path:"/favourite",component:Me}),Object(oe.jsx)(B.a,{path:"/cinemaInfo/:id",render:function(){return Object(oe.jsx)(Be,{})}}),Object(oe.jsx)(B.a,{path:"/film/:name",component:we}),Object(oe.jsx)(B.a,{path:"/films/:ratingFrom/:ratingTo/:yearFrom/:yearTo/:genre/:country/:order",component:He}),Object(oe.jsx)(B.a,{path:"/top100",render:function(){return Object(oe.jsx)(Ie,{})}})]})]})]})};c.a.render(Object(oe.jsx)(A.a,{children:Object(oe.jsx)(w.a,{store:S,children:Object(oe.jsx)(I.a,{persistor:P,children:Object(oe.jsx)(Ge,{})})})}),document.getElementById("root")),s()}},[[89,1,2]]]);
//# sourceMappingURL=main.3a8e93cb.chunk.js.map