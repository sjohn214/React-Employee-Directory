(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(14),s=c.n(r),a=c(3),o=(c(21),c(4),c(0));function j(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return e.handleSortEmployeeByState()},className:"searchBtn",children:"Sort By State"}),Object(o.jsx)("button",{onClick:function(){return e.handleSortEmployeeByGender()},className:"searchBtn",children:"Sort By Gender"})]})}c(23);function i(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(o.jsx)("div",{className:"maincontainer",children:Object(o.jsxs)("div",{className:"cardHeader",children:[Object(o.jsx)("input",{className:"searchbar",type:"text",placeholder:"Enter Employee Name",value:r,onChange:function(e){s(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){return e.handleSearch(r)},className:"searchBtn",disabled:null===r,children:"Search"})]})})}var l=c(48);c(24);function b(e){return Object(o.jsxs)(l.a,{id:"employees",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{className:"category",children:["id","picture","name","gender","email","location"].map((function(e,t){return Object(o.jsx)("th",{children:e.toUpperCase()},t)}))})}),Object(o.jsx)("tbody",{children:e.employees&&e.employees.map((function(e){var t=e.id,c=t.name,n=t.value,r=e.picture.large,s=e.name,a=s.title,j=s.first,i=s.last,l=e.gender,b=e.email,d=e.location,u=d.city,O=d.state,h=d.country;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"".concat(c," \n                ").concat(n)}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:r,alt:"Profile"})}),Object(o.jsx)("td",{children:"".concat(a,". ").concat(j," ").concat(i)}),Object(o.jsx)("td",{children:l}),Object(o.jsx)("td",{children:b}),Object(o.jsx)("td",{children:"".concat(u,", ").concat(O,", ").concat(h)})]},n)}))})]})}function d(){return Object(o.jsx)("div",{})}var u=function(e){return Object(o.jsxs)("div",{className:"row",children:[e.children,Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};c(25);function O(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("span",{children:"React-Employee-Directory  2021 \xa9 Shannondale Page"})})}c(26);var h=function(e){return Object(o.jsx)("main",{className:"wrapper",children:e.children})},x=c(16),m=c.n(x),f=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")};var p=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),l=Object(a.a)(s,2),x=l[0],m=l[1];return Object(n.useEffect)((function(){f().then((function(e){console.log(e),r(e.data.results)}))}),[]),console.log(c),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(h,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:"appTitle",children:"React-Employee-Directory"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"searchEmployees",children:"Search Employees, sort by State or Gender"}),Object(o.jsx)(i,{handleSearch:function(e){var t=c.filter((function(t){return t.name.first.toLowerCase().startsWith(e.toLocaleLowerCase())}));r(t)}}),Object(o.jsx)(j,{handleSortEmployeeByState:function(){x?(r(c.sort((function(e,t){return e.location.state>t.location.state?-1:1}))),m(!1)):(r(c.sort((function(e,t){return e.location.state>t.location.state?1:-1}))),m(!0))},handleSortEmployeeByGender:function(){x?(r(c.sort((function(e,t){return e.gender>t.gender?-1:1}))),m(!1)):(r(c.sort((function(e,t){return e.gender>t.gender?1:-1}))),m(!0))}}),Object(o.jsx)(u,{}),Object(o.jsx)(b,{employees:c}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)(O,{})]})};c(45);console.log(p),s.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.65f45295.chunk.js.map