(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),l=s(4),a=s.n(l),i=s(2),o=s(15),b=(s(9),s(0)),u=[],j=1e3,r=new o.a((function(e){setInterval((function(){e.next(1e3)}),1e3)}));function d(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),s=t[0],n=t[1],l=Object(c.useState)(null),a=Object(i.a)(l,2),o=a[0],d=a[1],O=Object(c.useState)(0),h=Object(i.a)(O,2),m=h[0],x=h[1],f=Object(c.useCallback)((function(){if(s)console.log("Countdown is OFF"),o.unsubscribe(),n(!s),x(0);else{console.log("Countdown is ON"),n(!s);var e=r.subscribe((function(e){x((function(t){return t+e}))}));d(e)}}),[s,o]),p=Object(c.useCallback)((function(){u.push(Date.now()),3===u.length&&(u.shift(),j=u[1]-u[0]),j<=300&&(console.log("Countdown is PAUSED"),o.unsubscribe(),n(!1),u=[],j=1e3)}),[o]),N=Object(c.useCallback)((function(){console.log("Countdown is RESET"),x(0)}),[]),v=function(e){return String(e).padStart(2,"0")},S=v(Math.floor(m%864e5/36e5)),w=v(Math.floor(m%36e5/6e4)),C=v(Math.floor(m%6e4/1e3));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"clockface",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("span",{className:"value",children:S}),Object(b.jsx)("span",{className:"label",children:"Hours"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("span",{className:"value",children:w}),Object(b.jsx)("span",{className:"label",children:"Minutes"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("span",{className:"value",children:C}),Object(b.jsx)("span",{className:"label",children:"Seconds"})]})]}),Object(b.jsxs)("ul",{className:"button-list",children:[Object(b.jsx)("li",{className:"button-list-item",children:Object(b.jsx)("button",{className:"button",type:"button",onClick:f,children:"Start / Stop"})}),Object(b.jsx)("li",{className:"button-list-item",children:Object(b.jsx)("button",{className:"button",type:"button",onClick:p,disabled:!s,children:"Wait"})}),Object(b.jsx)("li",{className:"button-list-item",children:Object(b.jsx)("button",{className:"button",type:"button",onClick:N,children:"Reset"})})]})]})}var O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d,{})})};s(11),s(12);a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))},9:function(e,t,s){}},[[13,1,2]]]);
//# sourceMappingURL=main.db686682.chunk.js.map