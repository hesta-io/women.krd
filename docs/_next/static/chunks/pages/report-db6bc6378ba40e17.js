(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686,542],{7480:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/report",function(){return t(8330)}])},9542:function(e,n,t){"use strict";t.r(n),t.d(n,{OnDefault:function(){return c},OnDesktop:function(){return i},OnMobile:function(){return s},OnTablet:function(){return l},isSmallDevice:function(){return a}});var r=t(1852);function i(e){var n=e.children;return(0,r.useMediaQuery)({minWidth:992})?n:null}function l(e){var n=e.children;return(0,r.useMediaQuery)({minWidth:768,maxWidth:991})?n:null}function s(e){var n=e.children;return(0,r.useMediaQuery)({maxWidth:767})?n:null}function a(){return(0,r.useMediaQuery)({maxWidth:991})}function c(e){var n=e.children;return(0,r.useMediaQuery)({minWidth:768})?n:null}},8330:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var r=t(5893),i=t(7294),l=t(9008),s=t.n(l),a=t(1945),c=t(8662),o=t(7511),u=t(1230),d=t(5746),p=t(3575),h=t(8462),f=t(381),m=t.n(f),x=t(5715),j=t(1342),g=t(7527),y=t(5265),v=t(2645),b=t(6024),_=t(5152),Z=t.n(_),k=t(1416);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=Z()((function(){return Promise.resolve().then(t.bind(t,9542)).then((function(e){return e.OnDesktop}))}),{loadableGenerated:{webpack:function(){return[9542]}},ssr:!1}),I=Z()((function(){return Promise.resolve().then(t.bind(t,9542)).then((function(e){return e.OnMobile}))}),{loadableGenerated:{webpack:function(){return[9542]}},ssr:!1});function C(e){var n,t,l,s,a,o,p,h=S(x.Z.useForm(),1)[0],f=(0,i.useContext)(k.Z).types,m=(0,i.useState)(!0),_=m[0],Z=m[1],w=(0,i.useState)(!1),C=w[0],P=w[1],A=function(){P((function(e){return!e}))},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{e.onValuesChange(n,t)}catch(r){}},D=function(){h.resetFields(),M(null,!0),Z(!0)},z=(0,r.jsx)(x.Z,{style:{marginBottom:-20},form:h,onValuesChange:function(e,n){n.date||n.province||n.age||n.occupation||n.suspect_relationship||n.circumstance||n.method||n.suspect_status?(Z(!1),M(n,!1)):(M(n,!0),Z(!0))},layout:"vertical",children:(0,r.jsxs)(u.Z,{gutter:[10,0],children:[(0,r.jsx)(d.Z,{xs:24,sm:24,md:4,lg:4,children:(0,r.jsx)(x.Z.Item,{label:"Date",name:"date",children:(0,r.jsx)(j.Z.RangePicker,{style:{width:"100%"}})})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:2,lg:2,children:(0,r.jsx)(x.Z.Item,{label:"Provinces",name:"province",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(n=f.provinces)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"Provinces")})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:2,lg:2,children:(0,r.jsx)(x.Z.Item,{label:"Age",name:"age",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(t=f.ageGroups)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"Age")})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:3,lg:3,children:(0,r.jsx)(x.Z.Item,{label:"Occupation",name:"occupation",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(l=f.occupations)||void 0===l?void 0:l.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"Occupation")})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:3,lg:3,children:(0,r.jsx)(x.Z.Item,{label:"Relationship",name:"suspect_relationship",children:(0,r.jsx)(g.Z,{label:"key",allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(s=f.relationships)||void 0===s?void 0:s.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))})})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:3,lg:3,children:(0,r.jsx)(x.Z.Item,{label:"Suspect Status",name:"suspect_status",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(a=f.suspectStatuses)||void 0===a?void 0:a.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"suspect-status")})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:3,lg:3,children:(0,r.jsx)(x.Z.Item,{label:"Method",name:"method",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(o=f.methodsOfKilling)||void 0===o?void 0:o.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"Method")})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:3,lg:3,children:(0,r.jsx)(x.Z.Item,{label:"Circumstance",name:"circumstance",children:(0,r.jsx)(g.Z,{allowClear:!0,style:{width:"100%"},children:null===f||void 0===f||null===(p=f.apparentCircumstances)||void 0===p?void 0:p.map((function(e){return(0,r.jsx)(g.Z.Option,{value:e,children:e},e)}))},"Circumstance")})}),(0,r.jsx)(O,{children:(0,r.jsx)(d.Z,{xs:24,sm:24,md:1,lg:1,children:(0,r.jsx)(x.Z.Item,{label:" ",children:(0,r.jsx)(c.ZP,{disabled:_,onClick:D,icon:(0,r.jsx)(v.Z,{}),block:!0,danger:!0,type:"primary"})})})}),(0,r.jsxs)(I,{children:[(0,r.jsx)(d.Z,{xs:12,sm:12,md:12,lg:12,children:(0,r.jsx)(x.Z.Item,{label:" ",children:(0,r.jsx)(c.ZP,{disabled:_,onClick:D,icon:(0,r.jsx)(v.Z,{}),block:!0,danger:!0,type:"primary"})})}),(0,r.jsx)(d.Z,{xs:12,sm:12,md:12,lg:12,children:(0,r.jsx)(x.Z.Item,{label:" ",children:(0,r.jsx)(c.ZP,{onClick:A,icon:(0,r.jsx)(b.Z,{}),block:!0,type:"primary",children:"Filter"})})})]})]})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{children:z}),(0,r.jsxs)(I,{children:[(0,r.jsx)(y.Z,{forceRender:!0,title:"Apply Filters",visible:C,onClose:A,width:"100%",children:z}),(0,r.jsx)(c.ZP,{style:{marginBottom:-10},onClick:A,icon:(0,r.jsx)(b.Z,{}),block:!0,type:"primary",children:"Filters"})]})]})}var P=t(3670),A=t(5054),M=t(6805),D=t(7171),z=t(1912),E="YYYY-MM-DD";function R(e,n,t){var r=n.filter((function(n){return m()(n.incident_date).isBetween(e[0],e[1])}));return null!==t&&(t.province&&(r=r.filter((function(e){return e.incident_province===t.province}))),t.age&&(r=r.filter((function(e){return e.age_range===t.age}))),t.occupation&&(r=r.filter((function(e){return e.occupation===t.occupation}))),t.suspect_relationship&&(r=r.filter((function(e){return e.relationship_to_principal_suspect===t.suspect_relationship}))),t.suspect_status&&(r=r.filter((function(e){return e.primary_suspect_status===t.suspect_status}))),t.method&&(r=r.filter((function(e){return e.apparent_method_of_killing===t.method}))),t.circumstance&&(r=r.filter((function(e){return e.apparent_circumstances===t.circumstance})))),r}function N(e){var n=e.ranges,t=e.filters;if(0===n.length)return(0,r.jsx)("span",{});var l=(0,i.useContext)(k.Z),s=R(n[0],l.records,t),a=R(n[1],l.records,t),c=(a.length-s.length)/(0===s.length?1:s.length)*100;return Number.isNaN(c)&&(c=0),(0,r.jsxs)(u.Z,{gutter:[20,20],justify:"center",children:[(0,r.jsx)(d.Z,{xs:24,sm:24,md:5,lg:5,children:(0,r.jsx)(P.Z,{style:{width:"100%",textAlign:"center"},children:(0,r.jsx)(A.Z,{title:"".concat(n[0][0].format(E)," \u2192 ").concat(n[0][1].format(E)),value:s.length,precision:0,prefix:(0,r.jsx)(M.Z,{})})})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:5,lg:5,children:(0,r.jsx)(P.Z,{style:{width:"100%",textAlign:"center"},children:(0,r.jsx)(A.Z,{title:"".concat(n[1][0].format(E)," \u2192 ").concat(n[1][1].format(E)),value:a.length,precision:0,prefix:(0,r.jsx)(M.Z,{})})})}),(0,r.jsx)(d.Z,{xs:24,sm:24,md:5,lg:5,children:(0,r.jsx)(P.Z,{style:{width:"100%",textAlign:"center"},children:(0,r.jsx)(A.Z,{title:"Compared to last period",value:c,precision:1,valueStyle:{color:c<0?"#3f8600":"#cf1322"},prefix:c<0?(0,r.jsx)(D.Z,{}):(0,r.jsx)(z.Z,{}),suffix:"%"})})})]})}var F=t(9542);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){W(e,n,t[n])}))}return e}function B(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==t.return||t.return()}finally{if(a)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(){var e=[{title:"Date",dataIndex:"incident_date",key:"incident_date",width:120,render:function(e){return(0,r.jsx)("span",{children:e})}},{title:"Name",dataIndex:"name",key:"name",render:function(e){return(0,r.jsx)("span",{children:e})}},{title:"Age",dataIndex:"age_range",key:"age_range",width:100,render:function(e){return(0,r.jsx)("span",{children:e})},responsive:["md"]},{title:"Province",dataIndex:"incident_province",key:"incident_province",width:100,render:function(e){return(0,r.jsx)("span",{children:e})},responsive:["lg"]},{title:"Occupation",dataIndex:"occupation",key:"occupation",width:150,render:function(e){return(0,r.jsx)("span",{children:e})},responsive:["lg"]},{title:"Suspect",dataIndex:"relationship_to_principal_suspect",key:"relationship_to_principal_suspect",width:250,render:function(e,n){return(0,r.jsxs)("span",{children:[e," ","(",n.primary_suspect_status,")"]})},responsive:["sm"]},{title:"Method",dataIndex:"apparent_method_of_killing",key:"apparent_method_of_killing",width:150,render:function(e){return(0,r.jsx)("span",{children:e})},responsive:["lg"]}],n={pageSize:10,current:1,hideOnSinglePage:!0},t=(0,i.useContext)(k.Z),l=(0,i.useState)(n),f=l[0],x=l[1],j=(0,i.useState)([]),g=j[0],y=j[1],v=(0,i.useState)([m()(),m()()]),b=v[0],_=v[1],Z=(0,i.useState)([m()(),m()()]),w=Z[0],S=Z[1],O=(0,i.useState)(!1),I=O[0],P=O[1],A=(0,i.useState)(null),M=A[0],D=A[1];return(0,i.useEffect)((function(){y(t.records),x((function(){return T({},n,{total:t.records.length})}))}),[t]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Women.krd"}),(0,r.jsx)("meta",{name:"description",content:"is a virtual platform that documents women and girls killed in the name of honour within the Iraqi Kurdistan Region"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(u.Z,{gutter:[10,20],children:[(0,r.jsx)(d.Z,{span:24,children:(0,r.jsx)(C,{onValuesChange:function(e,r){if(P(!1),r)D(null),y(t.records),x((function(){return T({},n,{total:t.records.length})}));else{D(e);var i=t.records;if(e.date&&e.date.length>0){var l=B(e.date,2),s=l[0],a=l[1],c=Math.abs(s.diff(a,"days")),o=[m()(s).subtract(c,"days"),s];S(e.date),_(o),P(!0),i=i.filter((function(e){return m()(e.incident_date).isBetween(s,a)}))}e.province&&(i=i.filter((function(n){return n.incident_province===e.province}))),e.age&&(i=i.filter((function(n){return n.age_range===e.age}))),e.occupation&&(i=i.filter((function(n){return n.occupation===e.occupation}))),e.suspect_relationship&&(i=i.filter((function(n){return n.relationship_to_principal_suspect===e.suspect_relationship}))),e.suspect_status&&(i=i.filter((function(n){return n.primary_suspect_status===e.suspect_status}))),e.method&&(i=i.filter((function(n){return n.apparent_method_of_killing===e.method}))),e.circumstance&&(i=i.filter((function(n){return n.apparent_circumstances===e.circumstance}))),y(i),x((function(){return T({},n,{current:1,total:i.length})}))}}})}),(0,r.jsx)(d.Z,{span:24,children:(0,r.jsx)(N,{ranges:I?[b,w]:[],filters:M})}),(0,r.jsx)(d.Z,{span:24,children:(0,r.jsx)(p.Z.Ribbon,{text:(0,r.jsx)("a",{style:{color:"white"},target:"_blank",href:"https://docs.google.com/spreadsheets/d/18CX2__ItXMn_gqQS4wCMIkirzeRl_zidpQGdC1kboD4",rel:"noreferrer",children:"Explore Data"}),color:"green",children:(0,r.jsx)(h.Z,{size:"small",bordered:!0,columns:e,dataSource:g,onChange:function(e){x((function(n){return T({},n,e)}))},pagination:f,rowKey:function(e){return"".concat(e.name,"-").concat(e.incident_date,"-").concat(e.age_range)},expandable:{expandedRowRender:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(F.OnDesktop,{children:[(0,r.jsx)(a.Z.Paragraph,{style:{margin:0,padding:10,borderRadius:5},copyable:!0,children:e.incident_description}),""!==e.link1?(0,r.jsx)(c.ZP,{size:"small",href:e.link1,target:"_blank",type:"primary",children:"Source 1"}):null,"\xa0",""!==e.link2?(0,r.jsx)(c.ZP,{size:"small",href:e.link2,target:"_blank",type:"primary",children:"Source 2"}):null,"\xa0",""!==e.link3?(0,r.jsx)(c.ZP,{size:"small",href:e.link3,target:"_blank",type:"primary",children:"Source 3"}):null]}),(0,r.jsx)(F.OnMobile,{children:(0,r.jsxs)(o.Z,{column:24,layout:"vertical",bordered:!0,size:"small",children:[(0,r.jsx)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Method of killing"}),children:e.apparent_method_of_killing}),(0,r.jsx)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Circumstances"}),children:e.apparent_circumstances}),(0,r.jsxs)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Suspect"}),children:[e.relationship_to_principal_suspect,"(",e.primary_suspect_status,")"]}),(0,r.jsx)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Occupation"}),children:e.occupation}),(0,r.jsx)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Province"}),children:e.incident_province}),(0,r.jsxs)(o.Z.Item,{span:12,label:(0,r.jsx)("b",{children:"Sources"}),children:[""!==e.link1?(0,r.jsx)(c.ZP,{size:"small",href:e.link1,target:"_blank",type:"primary",children:"Source 1"}):null,"\xa0",""!==e.link2?(0,r.jsx)(c.ZP,{size:"small",href:e.link2,target:"_blank",type:"primary",children:"Source 2"}):null,"\xa0",""!==e.link3?(0,r.jsx)(c.ZP,{size:"small",href:e.link3,target:"_blank",type:"primary",children:"Source 3"}):null]}),(0,r.jsx)(o.Z.Item,{span:24,label:(0,r.jsx)("b",{children:"Description"}),children:(0,r.jsx)(a.Z.Paragraph,{style:{margin:0,padding:10,borderRadius:5},copyable:!0,children:e.incident_description})})]})})]})},rowExpandable:function(e){return""!==e.incident_description}}})})})]})]})}}},function(e){e.O(0,[885,589,577,945,852,469,500,824,774,888,179],(function(){return n=7480,e(e.s=n);var n}));var n=e.O();_N_E=n}]);