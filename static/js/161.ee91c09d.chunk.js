(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[161],{1912:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return K}));var n=a(11),c=a(0),i=a(574),r=a(798),l=a(776),s=a(777),o=a(700),d=a(1021),b=a(172),u=a(659),j=a(63),h=a(582),g=a(584),p=a(655),m=a(797),O=a(774),x=a(775),f=a(1988),v=a(641),k=a(176),S=a(675),P=a(719),y=a.n(P),C=a(1306),w=a.n(C),N=a(1);function D(e,t,a,n,c){return{name:e,calories:t,fat:a,carbs:n,protein:c}}var B=[D("Cupcake",305,3.7,67,4.3),D("Donut",452,25,51,4.9),D("Eclair",262,16,24,6),D("Frozen yoghurt",159,6,24,4),D("Gingerbread",356,16,49,3.9),D("Honeycomb",408,3.2,87,6.5),D("Ice cream sandwich",237,9,37,4.3),D("Jelly Bean",375,0,94,0),D("KitKat",518,26,65,7),D("Lollipop",392,.2,98,0),D("Marshmallow",318,0,81,2),D("Nougat",360,19,9,37),D("Oreo",437,18,63,4)];function R(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function F(e,t){return"desc"===e?function(e,a){return R(e,a,t)}:function(e,a){return-R(e,a,t)}}function I(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var J=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}],T=Object(i.a)((function(e){return{root:{width:"100%",height:400},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},sortSpan:v.a}}));function q(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,c=e.orderBy,i=e.numSelected,b=e.rowCount,u=e.onRequestSort;return Object(N.jsx)(r.a,{children:Object(N.jsxs)(l.a,{children:[Object(N.jsx)(s.a,{padding:"checkbox",sx:{pl:3},children:Object(N.jsx)(o.a,{color:"primary",indeterminate:i>0&&i<b,checked:b>0&&i===b,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),J.map((function(e){return Object(N.jsx)(s.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:c===e.id&&n,children:Object(N.jsxs)(d.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(a=e.id,function(e){u(e,a)}),children:[e.label,c===e.id?Object(N.jsx)("span",{className:t.sortSpan,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var z=Object(i.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:{backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.activatedOpacity)},title:{flex:"1 1 100%"}}})),A=function(e){var t=z(),a=e.numSelected;return Object(N.jsxs)(u.a,{className:t.root,children:[a>0?Object(N.jsxs)(j.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}):Object(N.jsx)(j.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),a>0?Object(N.jsx)(h.a,{title:"Delete",children:Object(N.jsx)(g.a,{children:Object(N.jsx)(y.a,{})})}):Object(N.jsx)(h.a,{title:"Filter list",children:Object(N.jsx)(g.a,{children:Object(N.jsx)(w.a,{})})})]})};function K(){var e=T(),t=c.useState("asc"),a=Object(n.a)(t,2),i=a[0],r=a[1],d=c.useState("calories"),b=Object(n.a)(d,2),u=b[0],j=b[1],h=c.useState([]),g=Object(n.a)(h,2),v=g[0],P=g[1],y=c.useState(0),C=Object(n.a)(y,2),w=C[0],D=C[1],R=c.useState(!1),J=Object(n.a)(R,1)[0],z=c.useState(5),K=Object(n.a)(z,2),L=K[0],M=K[1],E=w>0?Math.max(0,(1+w)*L-B.length):0;return Object(N.jsx)(k.a,{content:!1,title:"Data Tables",secondary:Object(N.jsx)(S.a,{link:"https://next.material-ui.com/components/tables/"}),children:Object(N.jsxs)(p.a,{className:e.paper,children:[Object(N.jsx)(A,{numSelected:v.length}),Object(N.jsx)(m.a,{children:Object(N.jsxs)(O.a,{className:e.table,"aria-labelledby":"tableTitle",size:J?"small":"medium",children:[Object(N.jsx)(q,{classes:e,numSelected:v.length,order:i,orderBy:u,onSelectAllClick:function(e){if(e.target.checked){var t=B.map((function(e){return e.name}));P(t)}else P([])},onRequestSort:function(e,t){r(u===t&&"asc"===i?"desc":"asc"),j(t)},rowCount:B.length}),Object(N.jsxs)(x.a,{children:[I(B,F(i,u)).slice(w*L,w*L+L).map((function(e,t){var a,n=(a=e.name,-1!==v.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return Object(N.jsxs)(l.a,{hover:!0,onClick:function(t){return function(e,t){var a=v.indexOf(t),n=[];-1===a?n=n.concat(v,t):0===a?n=n.concat(v.slice(1)):a===v.length-1?n=n.concat(v.slice(0,-1)):a>0&&(n=n.concat(v.slice(0,a),v.slice(a+1))),P(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[Object(N.jsx)(s.a,{padding:"checkbox",sx:{pl:3},children:Object(N.jsx)(o.a,{color:"primary",checked:n,inputProps:{"aria-labelledby":c}})}),Object(N.jsx)(s.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(N.jsx)(s.a,{align:"right",children:e.calories}),Object(N.jsx)(s.a,{align:"right",children:e.fat}),Object(N.jsx)(s.a,{align:"right",children:e.carbs}),Object(N.jsx)(s.a,{sx:{pr:3},align:"right",children:e.protein})]},e.name)})),E>0&&Object(N.jsx)(l.a,{style:{height:(J?33:53)*E},children:Object(N.jsx)(s.a,{colSpan:6})})]})]})}),Object(N.jsx)(f.a,{rowsPerPageOptions:[5,10,25],component:"div",count:B.length,rowsPerPage:L,page:w,onPageChange:function(e,t){D(t)},onRowsPerPageChange:function(e){M(parseInt(e.target.value,10)),D(0)}})]})})}}}]);
//# sourceMappingURL=161.ee91c09d.chunk.js.map