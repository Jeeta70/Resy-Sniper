import{a2 as l,a3 as c,a4 as p}from"./index-b727b4c8.js";var v=function(e,t,n){if(e&&"reportValidity"in e){var r=l(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},d=function(e,t){var n=function(s){var i=t.fields[s];i&&i.ref&&"reportValidity"in i.ref?v(i.ref,s,e):i.refs&&i.refs.forEach(function(o){return v(o,s,e)})};for(var r in t.fields)n(r)},y=function(e,t){t.shouldUseNativeValidation&&d(e,t);var n={};for(var r in e){var s=l(t.fields,r),i=Object.assign(e[r]||{},{ref:s&&s.ref});if(E(t.names||Object.keys(e),r)){var o=Object.assign({},g(l(n,r)));c(o,"root",i),c(n,r,o)}else c(n,r,i)}return n},g=function(e){return Array.isArray(e)?e.filter(Boolean):[]},E=function(e,t){return e.some(function(n){return n.startsWith(t+".")})},V=function(e,t){for(var n={};e.length;){var r=e[0],s=r.code,i=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[o]={message:a.message,type:a.code}}else n[o]={message:i,type:s};if("unionErrors"in r&&r.unionErrors.forEach(function(h){return h.errors.forEach(function(m){return e.push(m)})}),t){var f=n[o].types,u=f&&f[r.code];n[o]=p(o,t,n,s,u?[].concat(u,r.message):r.message)}e.shift()}return n},b=function(e,t,n){return n===void 0&&(n={}),function(r,s,i){try{return Promise.resolve(function(o,a){try{var f=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return i.shouldUseNativeValidation&&d({},i),{errors:{},values:n.raw?r:u}})}catch(u){return a(u)}return f&&f.then?f.then(void 0,a):f}(0,function(o){if(function(a){return a.errors!=null}(o))return{values:{},errors:y(V(o.errors,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw o}))}catch(o){return Promise.reject(o)}}};export{b as t};
