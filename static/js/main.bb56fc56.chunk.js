(this["webpackJsonpportal-educativo"]=this["webpackJsonpportal-educativo"]||[]).push([[0],{30:function(e,t,n){},43:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(14),s=n.n(a),r=(n(43),n(38)),o=n(74),h=n(76),l=n(8),u=n(33),m=n.n(u);var j=function(e){return{type:"MAKE_SEARCH",payload:e}},d=n(71),b=n(72),p=n(34),g=n(3),f=Object(l.b)((function(e){return{name:e.name,id:e.id,height:e.height,weight:e.weight,img:e.img,types:e.types,stats:e.stats,abilities:e.abilities}}),(function(e){return{clearRedux:function(){e({type:"CLEAR"})}}}))((function(e){function t(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(g.jsxs)("section",{id:"pokemon",children:[Object(g.jsxs)("div",{className:"d-flex flex-row justify-content-around align-items-center",children:[Object(g.jsx)("h2",{children:t(e.name)}),Object(g.jsx)("img",{className:"w-25 img-fluid",src:e.img,alt:e.name})]}),Object(g.jsx)(d.a,{fluid:!0,children:e.stats.map((function(e,n){return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(p.a,{sm:6,children:Object(g.jsx)("h5",{children:t(e.name)})}),Object(g.jsx)(p.a,{sm:6,children:Object(g.jsx)("p",{children:e.value})})]},"key-".concat(n))}))}),Object(g.jsx)(h.a,{onClick:function(){e.clearRedux()},variant:"success",children:"Search Again!"})]})})),O=n(36),x=n(35),v=n(75),y=n(73),S=(n(30),function(e){return Object(g.jsxs)("div",{className:"search-container",children:[Object(g.jsx)("h2",{children:"Time to search for your pokemon!"}),Object(g.jsxs)(v.a,{inline:!0,className:"d-flex flex-row justify-content-center align-items-center",children:[Object(g.jsx)(v.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Search"}),Object(g.jsx)(y.a,{className:"w-50",children:Object(g.jsx)(v.a.Control,{onChange:e.handleSearch,value:e.search,className:"rounded-0",id:"inlineFormInputGroup",placeholder:"Example: venusaur, charizard..."})}),Object(g.jsx)(h.a,{onClick:e.submit,className:"rounded-0",type:"submit",variant:"secondary",children:Object(g.jsx)(x.a,{icon:O.a})})]})]})}),k=Object(l.b)((function(e){return{name:e.name}}),(function(e){return{searchPokemon:function(t){e(function(e){return function(t){return m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){var n=e.data;console.log("lo que se fetchio"),console.log(n),t(j(n))})).catch((function(e){}))}}(t))},clearRedux:function(){e({type:"CLEAR"})}}}))((function(e){var t=Object(c.useState)({search:"",isSearching:!1,timer:!1}),n=Object(r.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){!e.name&&i.isSearching&&setTimeout((function(){a({timer:!0,search:i.search,isSearching:i.isSearching})}),1e4)}));var s=document.documentElement;return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"app-child",children:[Object(g.jsx)("header",{children:Object(g.jsx)("h1",{children:"PokePlace"})}),Object(g.jsx)("main",{className:"main-container rounded ".concat(s.clientHeight>s.scrollHeight?"change-width":""),children:e.name&&i.isSearching?Object(g.jsx)(f,{}):!e.name&&i.isSearching&&i.timer?Object(g.jsxs)("div",{className:"failed-connect",children:[Object(g.jsx)(o.a,{animation:"border"}),Object(g.jsx)("p",{children:"Seem's like you have connection problems or you have written the pokemon's name wrong!"}),Object(g.jsx)(h.a,{id:"clear-button",onClick:function(t){e.clearRedux(),a({search:"",isSearching:!1,timer:!1})},variant:"success",children:"Try Again!"})]}):e.name||!i.isSearching||i.timer?Object(g.jsx)(S,{search:i.search,handleSearch:function(e){e.preventDefault(),a({search:e.target.value,isSearching:!1,timer:!1})},submit:function(t){t.preventDefault(),e.searchPokemon(i.search.trim().toLowerCase()),a({search:"",isSearching:!0,timer:!1})}}):Object(g.jsx)(o.a,{animation:"border"})}),Object(g.jsx)("footer",{children:Object(g.jsx)("a",{href:"https://github.com/aefuen1",children:"\xa9 Andres Fuentes"})})]})})})),w=(n(69),n(10)),A=n(11),C=n(37),E={name:"",id:0,height:0,weight:0,img:"",types:[],stats:[],abilities:[]};var N=Object(A.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return"MAKE_SEARCH"===n?(console.log("de nuevo"),console.log(c.forms[0].name),Object(w.a)(Object(w.a)({},e),{},{name:c.forms[0].name,id:c.id,height:c.height,weight:c.weight,img:"https://pokeres.bastionbot.org/images/pokemon/".concat(c.id,".png"),types:c.types.map((function(e){return e.type.name})),abilities:c.abilities.map((function(e){return e.ability.name})),stats:c.stats.map((function(e){return{name:e.stat.name,value:e.base_stat}}))})):"CLEAR"===n?Object(w.a)(Object(w.a)({},e),{},{name:"",id:0,height:0,weight:0,img:"",types:[],stats:[],abilities:[]}):Object(w.a)({},e)}),Object(A.a)(C.a));s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(l.a,{store:N,children:Object(g.jsx)(k,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.bb56fc56.chunk.js.map