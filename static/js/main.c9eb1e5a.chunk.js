(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(10),r=n.n(c),a=n(6),o=n(4),s=n(2),i=n.n(s),u=n(1),d=n.n(u),l=(n(17),n(7)),f=n.n(l),b=(n(9),n(0)),j=d.a.memo((function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"good",style:{color:t.color,marginLeft:"".concat(30,"px"),listStyle:"square"},children:t.name},t.id)}))})})),p=n(11);function m(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){var t=Object(u.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(u.useState)(!1),s=Object(o.a)(r,2),d=s[0],l=s[1],h=Object(u.useState)(!1),O=Object(o.a)(h,2),y=O[0],x=O[1],v=Object(u.useState)(!1),g=Object(o.a)(v,2),k=g[0],w=g[1],N=function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,c(e),l(!0),x(!1),w(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m().then((function(t){return Object(p.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 2:e=t.sent,c(e),l(!1),x(!0),w(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:e=t.sent,c(e),l(!1),x(!1),w(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title is-2",children:"Dynamic list of Goods"}),Object(b.jsx)("button",{type:"button","data-cy":"all-button",onClick:N,className:f()("button","is-info",{"is-success":d}),children:"Load all goods"}),Object(b.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:S,className:f()("button","is-info",{"is-success":y}),children:"Load 5 first goods"}),Object(b.jsx)("button",{type:"button","data-cy":"red-button",onClick:C,className:f()("button","is-info",{"is-success":k}),children:"Load red goods"}),Object(b.jsx)(j,{goods:n})]})};r.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c9eb1e5a.chunk.js.map