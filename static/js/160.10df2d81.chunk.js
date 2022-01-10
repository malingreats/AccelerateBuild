(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[160],{1959:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),s=a(49),i=a(176),l=a(64),n=a(4),c=a(11),d=a(30),b=a(209),p=a(710),h=a.n(p),j=a(34),u=a.n(j),m=a(1),x={chart:{height:350,type:"area"},colors:[u.a.secondaryMain,u.a.primaryMain],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}}},y=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=Object(r.useState)([{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}]),p=Object(c.a)(l,1)[0],j=Object(r.useState)(x),u=Object(c.a)(j,2),y=u[0],O=u[1];return o.a.useEffect((function(){O((function(r){return Object(n.a)(Object(n.a)({},r),{},{colors:[e.palette.secondary.main,e.palette.primary.main],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:e.palette.grey[500]}}})}))}),[t,a,s,i,e]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:y,series:p,type:"area",height:350})})},O={chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},f=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.success.dark,p=Object(r.useState)([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]),j=Object(c.a)(p,1)[0],u=Object(r.useState)(O),x=Object(c.a)(u,2),y=x[0],f=x[1];return o.a.useEffect((function(){f((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[l],xaxis:{labels:{style:{colors:[a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a,a]}}},grid:{borderColor:"dark"===t?s+20:i},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,s,i,l]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:y,series:j,type:"bar",height:350})})},g={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]},k=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.secondary.main,p=e.palette.primary.main,j=e.palette.success.dark,u=Object(r.useState)([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]),x=Object(c.a)(u,1)[0],y=Object(r.useState)(g),O=Object(c.a)(y,2),f=O[0],k=O[1];return o.a.useEffect((function(){k((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[l,p,j],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,s,i,l,p,j]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:f,series:x,type:"bar",height:350})})},v={chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},w=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.secondary.main,p=Object(r.useState)([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]),j=Object(c.a)(p,1)[0],u=Object(r.useState)(v),x=Object(c.a)(u,2),y=x[0],O=x[1];return o.a.useEffect((function(){O((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[l],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,s,i,l]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:y,series:j,type:"line",height:350})})},S={chart:{type:"line",stacked:!1,height:450},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}}},C=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.secondary.main,p=e.palette.primary.main,j=e.palette.success.dark,u=Object(r.useState)([{name:"Income",type:"column",data:[14,2,25,15,25,28,38,46]},{name:"Cashflow",type:"column",data:[11,3,31,4,41,49,65,85]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}]),x=Object(c.a)(u,1)[0],y=Object(r.useState)(S),O=Object(c.a)(y,2),f=O[0],g=O[1];return o.a.useEffect((function(){g((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[l,p,j],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,s,i,l,p,j]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:f,series:x,type:"line"})})},z={chart:{type:"pie",width:450,height:450},labels:["Team A","Team B","Team C","Team D","Team E"],legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},T=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.background.paper,p=Object(r.useState)([44,55,13,43,22]),j=Object(c.a)(p,1)[0],u=Object(r.useState)(z),x=Object(c.a)(u,2),y=x[0],O=x[1],f=e.palette.secondary.main,g=e.palette.primary.main,k=e.palette.success.dark,v=e.palette.error.main,w=e.palette.warning.dark,S=e.palette.orange.dark;return o.a.useEffect((function(){O((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[f,g,k,v,w,S],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},legend:{labels:{colors:"grey.500"}},stroke:{colors:[l]}})}))}),[t,a,s,i,l,f,g,k,v,w,S]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:y,series:j,type:"pie"})})},F={chart:{width:450,height:450,type:"polarArea"},fill:{opacity:1},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},M=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=e.palette.background.paper,p=Object(r.useState)([14,23,21,17,15,10,12,17,21]),j=Object(c.a)(p,1)[0],u=Object(r.useState)(F),x=Object(c.a)(u,2),y=x[0],O=x[1],f=e.palette.secondary.main,g=e.palette.primary.main,k=e.palette.success.dark,v=e.palette.error.main,w=e.palette.warning.dark,S=e.palette.orange.dark;return o.a.useEffect((function(){O((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[f,g,k,v,w,S,v],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},legend:{labels:{colors:"grey.500"}},stroke:{colors:[l]},plotOptions:{polarArea:{rings:{strokeColor:"dark"===t?s+20:i},spokes:{connectorColors:"dark"===t?s+20:i}}}})}))}),[t,a,s,i,l,f,g,k,v,w,S]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:y,series:j,type:"polarArea"})})},B={chart:{type:"radialBar",width:450,height:450},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"16px",position:"left",offsetX:0,offsetY:15,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return"".concat(e,": ").concat(t.w.globals.series[t.seriesIndex])},itemMargin:{vertical:3}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},E=function(){var e=Object(b.a)(),t=Object(d.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,s=e.palette.dark.light,i=e.palette.grey[200],l=Object(r.useState)([76,67,61,90]),p=Object(c.a)(l,1)[0],j=Object(r.useState)(B),u=Object(c.a)(j,2),x=u[0],y=u[1],O=e.palette.secondary.main,f=e.palette.primary.main,g=e.palette.success.dark,k=e.palette.error.main;return o.a.useEffect((function(){y((function(e){return Object(n.a)(Object(n.a)({},e),{},{colors:[O,f,g,k],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?s+20:i},plotOptions:{radialBar:{track:{background:"dark"===t?s+20:i}}}})}))}),[t,a,s,i,O,f,g,k]),Object(m.jsx)("div",{id:"chart",children:Object(m.jsx)(h.a,{options:x,series:p,type:"radialBar"})})};t.default=function(){return Object(m.jsxs)(s.a,{container:!0,spacing:l.c,children:[Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:6,children:Object(m.jsx)(i.a,{title:"Column Chart",children:Object(m.jsx)(k,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:6,children:Object(m.jsx)(i.a,{title:"Bar Chart",children:Object(m.jsx)(f,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(i.a,{title:"Line Chart",children:Object(m.jsx)(w,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(i.a,{title:"Area Chart",children:Object(m.jsx)(y,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(i.a,{title:"Mixed Chart",children:Object(m.jsx)(C,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(i.a,{title:"Redial Chart",children:Object(m.jsx)(E,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(i.a,{title:"Polar Chart",children:Object(m.jsx)(M,{})})}),Object(m.jsx)(s.a,{item:!0,xs:12,md:6,xl:4,children:Object(m.jsx)(i.a,{title:"Pie Chart",children:Object(m.jsx)(T,{})})})]})}}}]);
//# sourceMappingURL=160.10df2d81.chunk.js.map