(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{30:function(e,a,c){},31:function(e,a,c){"use strict";c.r(a);var t=c(23),n=c.n(t),r=c(8),i=c(2),s=c(5),l=c(0),o=c(21),j=c.n(o);function b(e,a){var c=new URLSearchParams(e.toString());return Object.entries(a).forEach((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];null===n?c.delete(t):Array.isArray(n)?(c.delete(t),n.forEach((function(e){c.append(t,e)}))):c.set(t,n)})),c.toString()}var d=c(4),h=function(e){var a=e.pages,c=e.currentPage,t=e.itemsToShow,n=Object(r.c)(),i=Object(s.a)(n,1)[0],l=c===a[0],o=c===a[a.length-1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:j()("page-item",{disabled:l}),children:Object(d.jsx)(r.b,{"data-cy":"nextLink",className:"page-link",to:{search:b(i,{page:"".concat(+c-1)})},"aria-disabled":l?"true":"false",children:"\xab"})}),a.map((function(e){return Object(d.jsx)("li",{className:j()("page-item",{active:e===c}),children:Object(d.jsx)(r.b,{"data-cy":"pageLink",className:"page-link",to:{search:b(i,{page:e})},children:e})},e)})),Object(d.jsx)("li",{className:j()("page-item",{disabled:o}),children:Object(d.jsx)(r.b,{"data-cy":"nextLink",className:"page-link",to:{search:b(i,{page:"".concat(+c+1)})},"aria-disabled":o?"true":"false",children:"\xbb"})})]}),Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};function u(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t.toString());return c}var p=u(1,42),g=function(){var e=Object(r.c)(),a=Object(s.a)(e,2),c=a[0],t=a[1],n=c.get("page")||"1",i=c.get("perPage")||"5";Object(l.useEffect)((function(){t(b(c,{page:n,perPage:i}))}),[]);var o=Object(l.useCallback)((function(e){var a=e.target.value;t(b(c,{page:"1",perPage:a}))}),[c]),j=Object(l.useCallback)((function(e,a,c){var t=(+e-1)*+a,n=Math.min(t+ +a,42);return c?c.slice(t,n):["".concat(t+1," - ").concat(n)]}),[42]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(n," (items ").concat(j(n,i)," of ").concat(42,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:i,onChange:o,children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(h,{currentPage:n,itemsToShow:j(n,i,p),pages:u(1,Math.ceil(42/+i))})]})},m=(c(30),function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{index:!0,element:Object(d.jsx)(g,{})})})})});n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b4d33d1b.chunk.js.map