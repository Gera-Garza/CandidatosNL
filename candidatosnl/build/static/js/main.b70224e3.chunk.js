(this.webpackJsonpcandidatosnl=this.webpackJsonpcandidatosnl||[]).push([[0],{117:function(e,t){},135:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(38),s=a.n(n),i=(a(85),a(86),a(23)),r=a.n(i),o=a(25),l=a(27),d=a(16),j=a(52),u=(j.a.initializeApp({apiKey:"AIzaSyCZpCmTd9hlMYhZIJeD7sbgAaCkpKV0Z_w",authDomain:"candidatosnl-7199e.firebaseapp.com",projectId:"candidatosnl-7199e",storageBucket:"candidatosnl-7199e.appspot.com",messagingSenderId:"1029557888770",appId:"1:1029557888770:web:a17f08094f329f9bf9441b",measurementId:"G-7FW8V2EQHJ"}),j.a.firestore()),b=a(46),p=a(47),h=a.n(p),O=a(14),m=(a(135),a(3)),x=function(e){var t,a=Object(c.useState)(!0),n=Object(d.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)({imagen:null,nombre:null,propuestas:null,logrosHistorial:null,email:null,facebook:null,instagram:null}),j=Object(d.a)(o,2),p=j[0],x=j[1],f=Object(O.f)().id,v=Object(c.useState)(!1),g=Object(d.a)(v,2),N=g[0],y=g[1],C=Object(c.useState)(!1),P=Object(d.a)(C,2),k=P[0],T=P[1],S=function(){return Object(m.jsx)("div",{className:"tab-pane fade show active text-left",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab",children:h()(p.propuestas)})},w=function(){return Object(m.jsx)("div",{className:"tab-pane fade show active text-left",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab",children:h()(p.logrosHistorial)})},E=function(){return Object(m.jsx)("div",{className:"tab-pane fade show active text-left",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab",children:"Noticias"})},M=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.collection("candidatosnl"),e.next=3,t.get();case 3:a=e.sent,[],a.docs.forEach((function(e){void 0!=e.data()[f]&&x(e.data()[f])}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){M()}),[]),Object(m.jsx)("div",{className:"container candidatoPerfilContainer",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",(t={className:"col-sm-3"},Object(b.a)(t,"className","social"),Object(b.a)(t,"children",[Object(m.jsx)("img",{src:p.imagen,alt:"",srcset:"",style:{width:"200px",height:"200px",objectFit:"cover"}}),Object(m.jsx)("h3",{children:p.nombre}),Object(m.jsx)("hr",{}),p.email?Object(m.jsx)("p",{children:p.email}):null,p.facebook?Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://facebook.com/"+p.facebook,target:"blank",children:"Facebook"})}):null,p.instagram?Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://instagram.com/"+p.instagram,target:"blank",children:"Instagram"})}):null]),t)),Object(m.jsx)("div",{className:"col-sm",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"candidatoPerfilNav",children:Object(m.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[Object(m.jsx)("button",{className:"nav-link",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true",onClick:function(){i(!0),y(!1),T(!1)},children:"Propuestas"}),Object(m.jsx)("button",{className:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false",onClick:function(){y(!0),i(!1),T(!1)},children:"Historial y logros"})]})}),Object(m.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[s?Object(m.jsx)(S,{}):null,N?Object(m.jsx)(w,{}):null,k?Object(m.jsx)(E,{}):null]})]})})]})})},f=a(20),v=(a(144),function(e){return Object(m.jsx)("div",{className:"candidatoCard",children:Object(m.jsx)("div",{className:"col-sm",style:{marginBottom:"30px"},children:Object(m.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(m.jsx)("img",{className:"card-img-top",src:e.imagen,alt:"Card cap"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.nombre}),Object(m.jsx)("p",{className:"card-text",children:e.body}),Object(m.jsx)("a",{className:"btn btn-primary",children:Object(m.jsx)(f.b,{to:{pathname:"/CandidatoPerfil/"+e.url},children:"Ver candidato"})})]})]})})})}),g=(a(145),function(e){return Object(m.jsx)("div",{className:"col-sm",children:Object(m.jsxs)("div",{className:"card",style:{width:"18rem",marginBottom:"30px"},children:[Object(m.jsx)("img",{className:"card-img-top",src:e.imagen,alt:"Card image cap"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.titulo}),Object(m.jsx)("p",{className:"card-text",children:e.descripcion}),Object(m.jsx)("a",{href:e.enlace,className:"btn btn-primary",target:"_blank",children:"Ver noticia"})]})]})})}),N=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.collection("noticias"),e.next=3,t.get();case 3:a=e.sent,c=[],a.docs.forEach((function(e){c=[].concat(Object(o.a)(c),Object(o.a)(Object.values(e.data())))})),n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(m.jsx)("div",{className:"row",children:a&&a.map((function(e){return Object(m.jsx)(g,{titulo:e.titulo,descripcion:e.descripcion,imagen:e.imagen,enlace:e.enlace},e.titulo)}))})},y=(a(146),a(80));var C=function(e){var t=Object(O.e)(),a=Object(c.useState)(),n=Object(d.a)(a,2),s=n[0],i=n[1],r=e.allCandidates.map((function(e){return{id:e.url,name:e.nombre}}));return Object(m.jsx)("div",{class:"searchBar",children:Object(m.jsxs)("form",{class:"form-inline my-2 my-lg-2",children:[Object(m.jsx)(y.a,{id:"basic-typeahead-single",labelKey:"name",options:r,placeholder:"Buscar candidatos...",onChange:function(e){console.log(e),i(e[0].id)}}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){s&&t.push("/CandidatoPerfil/"+s)},children:"Buscar"})]})})};var P=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=(t[1],Object(c.useState)([])),s=Object(d.a)(n,2),i=s[0],j=s[1],b=Object(c.useState)([]),p=Object(d.a)(b,2),h=p[0],O=p[1],x=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.collection("candidatosnl"),e.next=3,t.get();case 3:a=e.sent,c=[],a.docs.forEach((function(e){for(var t=Object.values(e.data()),a=0;a<t.length;a++)t[a].url=Object.keys(e.data())[a];c=[].concat(Object(o.a)(c),Object(o.a)(t))})),O(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x();var e=h&&h.filter((function(e){return e.nombre===a}));j(e)}),[a]),Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{handleChange:function(e){console.log(e[0])},allCandidates:h}),Object(m.jsxs)("div",{class:"container",style:{paddingBottom:"10px"},children:[i.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Candidato(s) encontrado"}),Object(m.jsx)(v,{nombre:e.nombre,body:e.descripcion,imagen:e.imagen,logros:e.logrosHistorial,propuestas:e.propuestas},e.nombre)]})})),Object(m.jsx)("h1",{className:"text-left",children:"\xdaltimas noticias"}),Object(m.jsx)(N,{})]})]})},k=(a(161),a(162),a(163),function(){var e=Object(c.useState)("Gobernador"),t=Object(d.a)(e,2),a=t[0],n=(t[1],Object(c.useState)([])),s=Object(d.a)(n,2),i=s[0],j=s[1],b=Object(c.useState)(),p=Object(d.a)(b,2),h=p[0],O=p[1],x=Object(c.useState)("Todos"),v=Object(d.a)(x,2),g=v[0],N=v[1],y=Object(c.useState)("Todos"),C=Object(d.a)(y,2),P=C[0],k=C[1],T=Object(c.useState)([]),S=Object(d.a)(T,2),w=S[0],E=S[1],M=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.collection("candidatosnl"),e.next=3,t.get();case 3:a=e.sent,c=[],a.docs.forEach((function(e){for(var t=Object.values(e.data()),a=0;a<t.length;a++)t[a].url=Object.keys(e.data())[a];c=[].concat(Object(o.a)(c),Object(o.a)(t))})),E(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){M()}),[]),Object(c.useEffect)((function(){var e=w&&w.filter((function(e){return e.partido===a||e.candidatura==a||!0}));j(e)}),[w]);var A=(h||i).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.imagen?e.imagen:"https://i0.wp.com/prikachi.com/wp-content/uploads/2020/07/DPP1.jpg",width:30,height:40,style:{objectFit:"cover"}})}),Object(m.jsx)("td",{style:{textAlign:"left"},children:Object(m.jsx)(f.b,{to:"/CandidatoPerfil/"+e.url,children:e.nombre})}),Object(m.jsx)("td",{children:e.partido}),Object(m.jsx)("td",{children:e.candidatura})]})}));return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-end",style:{marginBottom:"15px",marginTop:"15px"},children:[Object(m.jsxs)("div",{class:"input-group",children:[Object(m.jsx)("div",{class:"input-group-prepend",children:Object(m.jsx)("label",{class:"input-group-text",for:"inputGroupSelect01",children:"Partido"})}),Object(m.jsxs)("select",{class:"custom-select",id:"inputGroupSelect01",onChange:function(e){var t;"Todos"===e.target.value&&"Todos"===P&&(t=i.filter((function(e){return!0}))),"Todos"===e.target.value&&"Todos"!==P&&(t=i.filter((function(e){return!!e.candidatura&&e.candidatura.includes(P)}))),"Todos"!==e.target.value&&"Todos"===P&&(t=i.filter((function(t){return!!t.candidatura&&t.partido.includes(e.target.value)}))),"Todos"!==e.target.value&&"Todos"!==P&&(t=i.filter((function(t){return!!t.partido&&t.partido.includes(e.target.value)&&!!t.candidatura&&t.candidatura.includes(P)}))),N(e.target.value),O(t)},children:[Object(m.jsx)("option",{selected:!0,value:"Todos",children:"Todos"}),Object(m.jsx)("option",{value:"PAN",children:"PAN"}),Object(m.jsx)("option",{value:"PRI",children:"PRI"}),Object(m.jsx)("option",{value:"PRD",children:"PRD"}),Object(m.jsx)("option",{value:"PT",children:"PT"}),Object(m.jsx)("option",{value:"PVEM",children:"PVEM"}),Object(m.jsx)("option",{value:"MC",children:"MC"}),Object(m.jsx)("option",{value:"Morena",children:"Morena"}),Object(m.jsx)("option",{value:"PES",children:"PES"}),Object(m.jsx)("option",{value:"RSP",children:"RSP"}),Object(m.jsx)("option",{value:"Fuerza por M\xe9xico",children:"Fuerza por M\xe9xico"}),Object(m.jsx)("option",{value:"Nueva Alianza",children:"Nueva Alianza"})]})]}),Object(m.jsxs)("div",{class:"input-group",children:[Object(m.jsx)("div",{class:"input-group-prepend",children:Object(m.jsx)("label",{class:"input-group-text",for:"inputGroupSelect01",children:"Candidatura"})}),Object(m.jsxs)("select",{class:"custom-select",id:"inputGroupSelect01",onChange:function(e){var t;console.log("2",e.target.value,g),i.filter((function(e){return console.log(e.candidatura),null!==e.candidatura})),"Todos"===e.target.value&&"Todos"===g&&(t=i.filter((function(e){return!0}))),"Todos"===e.target.value&&"Todos"!==g&&(t=i.filter((function(e){return e.partido?e.partido.includes(g):null}))),"Todos"!==e.target.value&&"Todos"===g&&(t=i.filter((function(t){return!!t.candidatura&&t.candidatura.includes(e.target.value)}))),"Todos"!==e.target.value&&"Todos"!==g&&(t=i.filter((function(t){return!!t.candidatura&&t.candidatura.includes(e.target.value)&&!!t.partido&&t.partido.includes(g)}))),k(e.target.value),O(t)},children:[Object(m.jsx)("option",{selected:!0,children:"Todos"}),Object(m.jsx)("option",{value:"Gobernador",children:"Gobernador"}),Object(m.jsx)("option",{value:"Presidencia Municipal",children:"Presidencia Municipal"}),Object(m.jsx)("option",{value:"Distrito",children:"Diputado"})]})]})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("table",{class:"table",children:[Object(m.jsx)("thead",{class:"thead-dark",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col"}),Object(m.jsx)("th",{scope:"col",children:"Nombre"}),Object(m.jsx)("th",{scope:"col",children:"Partido"}),Object(m.jsx)("th",{scope:"col",children:"Candidatura"})]})}),Object(m.jsx)("tbody",{children:A})]})})]})})}),T=a.p+"static/media/logo.50b8ad93.png";var S=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)(f.b,{className:"navbar-brand",to:"/",children:Object(m.jsx)("img",{src:T,height:30})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(f.b,{className:"nav-link",to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(f.b,{className:"nav-link",to:"/Candidatos",children:"Candidatos"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(f.b,{className:"nav-link",to:"/tipos-candidaturas",children:"Tipos de candidaturas"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(f.b,{className:"nav-link",to:"/Nosotros",children:"Acerca de nosotros"})})]})})},w=(a(164),function(){return Object(m.jsxs)("div",{className:"container acercaContainer",children:[Object(m.jsx)("h2",{children:"Acera de nosotros"}),Object(m.jsxs)("p",{children:["Nuestro objetivo es que cualquier persona que visite nuestro portal pueda indagar m\xe1s sobre los candidatos en Nuevo Le\xf3n, desde gobernadores, diputados y presidentes municipales, tambi\xe9n podr\xe1n encontrar informaci\xf3n como su trayectoria profesional, propuestas diferentes cargos que ha tenido y sus redes sociales.",Object(m.jsx)("br",{}),"Todo esto con el prop\xf3sito para que puedan llevar un seguimiento de todo lo que han hecho los candidatos, as\xed como todo lo que planean hacer para mejoramiento de la comunidad y en base a esto puedan tomar mejores decisiones al momento de decantarse por alg\xfan candidato"]})]})}),E=(a(165),function(e){return Object(m.jsxs)("div",{class:"tipos-candidatos",children:[Object(m.jsxs)("div",{class:"grey",children:[Object(m.jsx)("h2",{children:"El gobernador tiene dos funciones"}),Object(m.jsx)("p",{children:"Promulgar, ejecutar y hacer que se cumplan las leyes, decretos y dem\xe1s disposiciones, as\xed como iniciar ante el Congreso leyes y decretos en beneficio del pueblo."})]}),Object(m.jsxs)("div",{class:"white",children:[Object(m.jsx)("h2",{children:"Diputado"}),Object(m.jsx)("p",{children:"Es el encargado de elaborar leyes o llevar a cabo modificaciones a \xe9stas para adecuarlas a las necesidades actuales de la poblaci\xf3n. Es un regulador de la estructura y del funcionamiento del Estado."})]}),Object(m.jsxs)("div",{class:"grey",children:[Object(m.jsx)("h2",{children:"Presidente Municipal"}),Object(m.jsx)("p",{children:"Responsable directo de la Administraci\xf3n P\xfablica Municipal y encargado de velar por la correcta ejecuci\xf3n de los Programas de Obras y Servicios y dem\xe1s programas municipales"})]})]})});var M=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(S,{}),Object(m.jsx)(O.a,{exact:!0,path:"/",component:P}),Object(m.jsx)(O.a,{exact:!0,path:"/Candidatos",component:k}),Object(m.jsx)(O.a,{exact:!0,path:"/CandidatoPerfil/:id",component:x}),Object(m.jsx)(O.a,{path:"/tipos-candidaturas",component:E}),Object(m.jsx)(O.a,{path:"/Nosotros",component:w})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};s.a.render(Object(m.jsx)(f.a,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),A()},85:function(e,t,a){},86:function(e,t,a){}},[[166,1,2]]]);
//# sourceMappingURL=main.b70224e3.chunk.js.map