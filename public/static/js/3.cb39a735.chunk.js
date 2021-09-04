(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{44:function(t,e,r){(function(e){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,o="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,u=o||i||Function("return this")(),l=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return u.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=s.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):n.test(t)?NaN:+t}t.exports=function(t,e,r){var n,s,a,c,o,i,u=0,l=!1,j=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var r=n,a=s;return n=s=void 0,u=e,c=t.apply(a,r)}function y(t){return u=t,o=setTimeout(O,e),l?m(t):c}function x(t){var r=t-i;return void 0===i||r>=e||r<0||j&&t-u>=a}function O(){var t=p();if(x(t))return g(t);o=setTimeout(O,function(t){var r=e-(t-i);return j?f(r,a-(t-u)):r}(t))}function g(t){return o=void 0,v&&n?m(t):(n=s=void 0,c)}function w(){var t=p(),r=x(t);if(n=arguments,s=this,i=t,r){if(void 0===o)return y(i);if(j)return o=setTimeout(O,e),m(i)}return void 0===o&&(o=setTimeout(O,e)),c}return e=h(e)||0,b(r)&&(l=!!r.leading,a=(j="maxWait"in r)?d(h(r.maxWait)||0,e):a,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==o&&clearTimeout(o),u=0,n=i=s=o=void 0},w.flush=function(){return void 0===o?c:g(p())},w}}).call(this,r(45))},45:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r},47:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,s=!1,a=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(i){s=!0,a=i}finally{try{n||null==o.return||o.return()}finally{if(s)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e),r.d(e,"default",(function(){return N}));var a,c,o,i=r(1),u=r(5),l=r.n(u),d=r(10),f=r(44),p=r.n(f),b=r(8),h=null!==(a="api/v1.0")?a:"",j={search:[[{development:null!==(c="http://localhost:9000")?c:"",production:window.location.origin,test:null!==(o="http://localhost:9000")?o:""}.production,h].join("/"),"search"].join("/"),login:""},v=function(){var t;return{"Content-Type":"application/json",Authorization:"Bearer ".concat(null!==(t=localStorage.getItem("token"))&&void 0!==t?t:"")}},m=Array.from(new Array(200),(function(t,e){return e+200})),y={get:function(){var t=Object(d.a)(l.a.mark((function t(e,r){var n,s,a,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(),void 0!==r&&(s=r.headers,a=void 0===s?{}:s,Object.assign(n,a)),t.next=4,fetch(e,{method:"GET",headers:n});case 4:return c=t.sent,t.next=7,c.json();case 7:return t.t0=t.sent,t.t1=c.status,o={response:t.t0,status:t.t1,error:!1},m.includes(o.status)||(o.error=!0),t.abrupt("return",o);case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),post:function(){var t=Object(d.a)(l.a.mark((function t(e,r){var n,s,a,c,o,i,u,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(),void 0!==r&&(a=r.headers,c=void 0===a?{}:a,o=r.body,i=void 0===o?{}:o,Object.assign(n,c),s=i),t.next=4,fetch(e,{method:"POST",headers:n,body:JSON.stringify(s)});case 4:return u=t.sent,t.next=7,u.json();case 7:return t.t0=t.sent,t.t1=u.status,d={response:t.t0,status:t.t1,error:!1},m.includes(d.status)||(d.error=!0),t.abrupt("return",d);case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),put:function(){var t=Object(d.a)(l.a.mark((function t(e,r){var n,s,a,c,o,i,u,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(),void 0!==r&&(a=r.headers,c=void 0===a?{}:a,o=r.body,i=void 0===o?{}:o,Object.assign(n,c),s=i),t.next=4,fetch(e,{method:"PUT",headers:n,body:JSON.stringify(s)});case 4:return u=t.sent,t.next=7,u.json();case 7:return t.t0=t.sent,t.t1=u.status,d={response:t.t0,status:t.t1,error:!1},m.includes(d.status)||(d.error=!0),t.abrupt("return",d);case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),delete:function(){var t=Object(d.a)(l.a.mark((function t(e,r){var n,s,a,c,o,i,u,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(),void 0!==r&&(a=r.headers,c=void 0===a?{}:a,o=r.body,i=void 0===o?{}:o,Object.assign(n,c),s=i),t.next=4,fetch(e,{method:"DELETE",headers:n,body:JSON.stringify(s)});case 4:return u=t.sent,t.next=7,u.json();case 7:return t.t0=t.sent,t.t1=u.status,d={response:t.t0,status:t.t1,error:!1},m.includes(d.status)||(d.error=!0),t.abrupt("return",d);case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},x={byType:function(){var t=Object(d.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.post(j.search,{body:e});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O={byType:function(){var t=Object(d.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.byType(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=r(0),w=function(t){var e=t.setUsers,r=t.setRepositories,n=s(Object(i.useState)("users"),2),a=n[0],c=n[1],o=s(Object(i.useState)(""),2),u=o[0],f=o[1],h=s(Object(i.useState)("idle"),2),j=h[0],v=h[1],m=s(Object(i.useState)(""),2),y=m[0],x=m[1],w=function(){var t=Object(d.a)(l.a.mark((function t(){var e,r,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.byType({q:u,type:a});case 2:if(e=t.sent,r=e.error,n=e.response,!r){t.next=7;break}throw new Error(n.message);case 7:return t.abrupt("return",n.data);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=Object(i.useCallback)(p()((function(){e(void 0),r(void 0),v("pending"),w().then((function(t){v("success"),"users"===a?e(t):"repositories"===a&&r(t)})).catch((function(t){v("error"),x(t.message)}))}),1e3),[u,a]);return Object(i.useEffect)((function(){return u.length>=3?N():(e(void 0),r(void 0)),N.cancel}),[u,a,N]),Object(g.jsxs)("div",{className:"pt-4",children:[Object(g.jsx)("h1",{children:"GitHub Searcher"}),Object(g.jsx)("p",{children:"Search users of repositories below"}),"error"===j&&Object(g.jsx)("span",{children:y}),"pending"===j&&Object(g.jsx)(b.c,{}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-5 col-md-8 col-sm-8",children:Object(g.jsx)(b.b,{type:"text",className:"form-control",placeholder:"Start typing to search ..",onInput:f})}),Object(g.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-4",children:Object(g.jsx)(b.d,{className:"form-select",options:[{text:"Users",value:"users"},{text:"Repositories",value:"repositories"}],onChange:c})})]})]})},N=function(){var t=s(Object(i.useState)(),2),e=t[0],r=t[1],n=s(Object(i.useState)(),2),a=n[0],c=n[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{setUsers:r,setRepositories:c}),Object(g.jsx)("div",{className:"row mt-4",children:void 0!==e?e.items.map((function(t,e){return Object(g.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 mb-4",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{src:t.avatar_url,width:"100%",alt:"..."}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h5",{className:"card-title",children:["Name: ",t.login]}),Object(g.jsx)("a",{href:t.html_url,target:"_blank",className:"btn btn-primary",children:"Go to profile"})]})]})},"user-".concat(e))})):void 0!==a?a.items.map((function(t,e){var r,n;return Object(g.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 mb-4",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{src:"https://via.placeholder.com/300x150",className:"card-img-top",alt:"..."}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h5",{className:"card-title",children:["Name: ",t.name]}),Object(g.jsxs)("p",{className:"card-text",children:["Author: ",null!==(r=null===t||void 0===t||null===(n=t.owner)||void 0===n?void 0:n.login)&&void 0!==r?r:""]}),Object(g.jsxs)("p",{className:"card-text",children:["Stars: ",t.stargazers_count]}),Object(g.jsxs)("p",{className:"card-text",children:["description: ",t.description]}),Object(g.jsx)("a",{href:t.html_url,target:"_blank",className:"btn btn-primary",children:"Go to repository"})]})]})},"repositorie-".concat(e))})):null})]})}}}]);
//# sourceMappingURL=3.cb39a735.chunk.js.map