//jsCore v0.5.0 IE8+ github.com/Octane/jsCore
!function(t,e,n,r,i,o,a,u,s,c,f,l,h,p,d,m,g){"use strict";function v(){}var y=y||Element;"textContent"in e.documentElement||n.defineProperty(y.prototype,"textContent",{get:function(){return this.innerText},set:function(t){this.innerText=t}}),"textContent"in e.createTextNode("test")||n.defineProperty(Text.prototype,"textContent",{get:function(){return this.nodeValue},set:function(t){this.nodeValue=t}}),"head"in e||n.defineProperty(e,"head",{get:function(){return e.querySelector("head")}}),{toString:null}.propertyIsEnumerable("toString")||new function(){var t=["constructor","toString","toLocaleString","valueOf","hasOwnProperty","propertyIsEnumerable","isPrototypeOf"];n.keys=function(e){var r,i=t.length,o=[],a=0;for(r in e)n.hasOwnProperty.call(e,r)&&(o[a++]=r);for(;i--;)r=t[i],n.hasOwnProperty.call(e,r)&&(o[a++]=r);return o}},n.create||(n.create=function(t,e){function n(){}if(e)throw new l("Object.create implementation only accepts the 1st parameter");return n.prototype=t,new n});var w=t instanceof n||new function(){function t(){var t;return{get:function(){return t},set:function(e){t=e}}}function e(e){return n.defineProperty(e,"length",t())}return new function(){function t(){return e(n.getElementsByName(i++))}var n=new ActiveXObject("htmlfile"),r=t().constructor.prototype,i=0;return r.urns=void 0,r.tags=void 0,r.item=void 0,r.namedItem=void 0,r=null,t}};r.isArray||(r.isArray=function(t){return"[object Array]"==n.prototype.toString.call(t)}),r.prototype.forEach||(r.prototype.forEach=function(t,e){for(var n=this.length,r=0;n>r;)r in this&&t.call(e,this[r],r,this),r++}),r.prototype.map||(r.prototype.map=function(t,e){for(var n=[],r=this.length,i=0;r>i;)i in this&&(n[i]=t.call(e,this[i],i,this)),i++;return n}),r.prototype.indexOf||(r.prototype.indexOf=function(t){for(var e=this.length,n=0;e>n;){if(n in this&&this[n]===t)return n;n++}return-1}),r.prototype.lastIndexOf||(r.prototype.lastIndexOf=function(t){for(var e=this.length;e--;)if(e in this&&this[e]===t)return e;return-1}),r.prototype.filter||(r.prototype.filter=function(t,e){for(var n=[],r=this.length,i=0;r>i;)i in this&&t.call(e,this[i],i,this)&&n.push(this[i]),i++;return n}),r.prototype.every||(r.prototype.every=function(t,e){for(var n=this.length,r=0;n>r;){if(r in this&&!t.call(e,this[r],r,this))return!1;r++}return!0}),r.prototype.some||(r.prototype.some=function(t,e){for(var n=this.length,r=0;n>r;){if(r in this&&t.call(e,this[r],r,this))return!0;r++}return!1}),r.prototype.reduce||(r.prototype.reduce=function(t,e){var n,r=this.length,i=0;if(arguments.length<2){if(!r)throw new h("Reduce of empty array with no initial value");for(;r>i;){if(i in this){n=this[i],i++;break}i++}}else n=e;for(;r>i;)i in this&&(n=t(n,this[i],i,this)),i++;return n}),r.prototype.reduceRight||(r.prototype.reduceRight=function(t,e){var n,r=this.length;if(arguments.length<2){if(!this.length)throw new h("Reduce of empty array with no initial value");for(;r--;)if(r in this){n=this[r];break}}else n=e;for(;r--;)r in this&&(n=t(n,this[r],r,this));return n}),i.bind||(i.prototype.bind=new function(){function e(e,n){for(var r=[],o=n.length,a=0;o>a;)r.push("arg"+a),a++;return r=r.join(","),new i("Constructor",r,"return new Constructor("+r+")").apply(t,[e].concat(n))}return function(t){function n(){function a(){}var u,s,c;if(n._protoMagic)return n._protoMagic=!1,a.prototype=this,a.prototype.constructor=o,new a;if(s=i.concat(r.from(arguments)),c=s.length,this instanceof n){switch(n._protoMagic=!0,c){case 0:u=new o;break;case 1:u=new o(s[0]);break;case 2:u=new o(s[0],s[1]);break;default:u=e(o,s)}return a.prototype=u,n.prototype=new a,n.prototype.constructor=n,new n}switch(c){case 0:return o.call(t);case 1:return o.call(t,s[0]);case 2:return o.call(t,s[0],s[1])}return o.apply(t,s)}var i=r.slice(arguments,1),o=this;if("function"!=typeof o)throw new h("Function.prototype.bind called on non-function");return n._protoMagic=!1,n}}),o.prototype.trim||(o.prototype.trim=new function(){var t,e,n;return t="	\n\f\r   ᠎ ",t+="        ",t+="    　\u2028\u2029﻿",t="["+t+"]",n=new c("^"+t+t+"*"),e=new c(t+t+"*$"),function(){return this.replace(n,"").replace(e,"")}}),s.now||(s.now=function(){return(new s).getTime()}),function(){var t=n.create({});return t[0]=null,t.hasOwnProperty(0)}()||new function(){var t=n.create;n.create=function(e,r){var i=t(e,r);return n.hasOwnProperty.call(i,0)||(n.defineProperty(i,0,{configurable:!0}),delete i[0]),i}},n.assign||(n.assign=function(t){return r.prototype.slice.call(arguments,1).forEach(function(e){n.keys(e).forEach(function(n){t[n]=e[n]})}),t}),n.is||(n.is=function(t,e){return 0===t&&0===e?1/t===1/e:t!==t?e!==e:t===e}),n.setPrototypeOf||(n.setPrototypeOf=function(t,e){return t.__proto__=e,t}),r.from||(r.from=function(t,e,i){return n(t).length?e?r.map(t,e,i):r.slice(t,0):[]}),r.of||(r.of=function(){return r.from(arguments)}),r.prototype.find||(r.prototype.find=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return n;i++}return void 0}),r.prototype.findIndex||(r.prototype.findIndex=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return i;i++}return-1}),r.prototype.fill||(r.prototype.fill=function(t,e,n){var r,i=this.length;e=a(e)||0,n=2 in arguments?a(n)||0:i,r=0>e?f.max(i+e,0):f.min(e,i),n=0>n?f.max(i+n,0):f.min(n,i);for(;n>r;)this[r]=t,r++;return this}),o.prototype.startsWith||(o.prototype.startsWith=function(t,e){return e||(e=0),this.indexOf(t,e)==e}),o.prototype.endsWith||(o.prototype.endsWith=function(t,e){var n;return e=e||this.length,e-=t.length,n=this.lastIndexOf(t),-1!=n&&n==e}),o.prototype.contains||(o.prototype.contains=function(t,e){return-1!=this.indexOf(t,e||0)}),o.prototype.repeat||(o.prototype.repeat=function(t){return new r(t+1).join(this)}),a.isFinite||(a.isFinite=function(t){return"number"==typeof t&&p(t)}),a.isInteger||(a.isInteger=function(t){return"number"==typeof t&&p(t)&&t>-9007199254740992&&9007199254740992>t&&f.floor(t)==t}),a.isNaN||(a.isNaN=function(t){return"number"==typeof t&&d(t)}),a.parseInt||(a.parseInt=g),a.parseFloat||(a.parseFloat=m),f.trunc||(f.trunc=function(t){return t=a(t),d(t)||0===t||!a.isFinite(t)?t:f.sign(t)*f.floor(f.abs(t))}),f.sign||(f.sign=function(t){return 0===t||d(t)?t:(t>0)-(0>t)}),new function(){function t(t,e){var n=e[0];switch(e.length){case 1:return t.call(n);case 2:return t.call(n,e[1]);case 3:return t.call(n,e[1],e[2])}return t.apply(n,r.prototype.slice.call(e,1))}function e(e){return function(){return t(e,arguments)}}function i(t,n){return n.reduce(function(n,r){return n[r]=e(t[r]),n},{})}function a(t,e){n.keys(e).forEach(function(n){n in t||(t[n]=e[n])})}a(r,i(r.prototype,["concat","every","fill","filter","find","findIndex","forEach","indexOf","join","lastIndexOf","map","pop","push","reduce","reduceRight","reverse","shift","slice","some","sort","splice","unshift"])),a(o,i(o.prototype,["charAt","charCodeAt","concat","contains","endsWith","indexOf","lastIndexOf","match","repeat","replace","search","slice","split","startsWith","substr","substring","toLowerCase","toUpperCase","trim"]))},t.Set||(t.Set=new function(){function t(){if(arguments.length)throw l("Set implementation doesn't accept parameters");this.length=0}return n.assign(t.prototype,{size:0,add:function(t){this.has(t)||(this.size=r.push(this,t))},has:function(t){return-1!=r.findIndex(this,function(e){return n.is(t,e)})},"delete":function(t){var e=r.findIndex(this,function(e){return n.is(t,e)});return-1==e?!1:(r.splice(this,e,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.Map||(t.Map=new function(){function t(){if(arguments.length)throw l("Map implementation doesn't accept parameters");this.length=0}var e=0,i=1;return n.assign(t.prototype,{size:0,_getPair:function(t){return r.find(this,function(r){return n.is(t,r[e])})},set:function(t,e){var n=this._getPair(t);n?n[i]=e:this.size=r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[i]},has:function(t){return u(this._getPair(t))},"delete":function(t){var i=r.findIndex(this,function(r){return n.is(t,r[e])});return-1==i?!1:(r.splice(this,i,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.WeakSet||(t.WeakSet=new function(){function t(){if(arguments.length)throw l("WeakSet implementation doesn't accept parameters");this.length=0}function e(t){return this===t}function i(t){if(n(t)!==t)throw h("Invalid value used in weak set");return t}return n.assign(t.prototype,{add:function(t){this.has(i(t))||r.push(this,t)},has:function(t){return-1!=r.findIndex(this,e,i(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t.WeakMap||(t.WeakMap=new function(){function t(){if(arguments.length)throw l("WeakMap implementation doesn't accept parameters");this.length=0}function e(t){return this===t[o]}function i(t){if(n(t)!==t)throw h("Invalid value used as weak map key");return t}var o=0,a=1;return n.assign(t.prototype,{_getPair:function(t){return r.find(this,e,i(t))},set:function(t,e){var n=this._getPair(t);n?n[a]=e:r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[a]},has:function(t){return u(this._getPair(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t instanceof n||n.assign(t,new function(){function n(e){var n=e[0];switch(e.length){case 1:return n();case 2:return n(e[1]);case 3:return n(e[1],e[2])}return n.apply(t,r.prototype.slice.call(e,1))}var i=0,o={};return{setImmediate:function(){function t(){this.onreadystatechange=null,e.removeChild(this),o[a]&&(delete o[a],n(r))}var r=arguments,a=i++;return o[a]=!0,new function(){var n=e.createElement("script");n.onreadystatechange=t,e.appendChild(n)},a},clearImmediate:function(t){delete o[t]}}}),t.setImmediate||n.assign(t,new function(){function e(e){var n=e[0];switch(e.length){case 1:return n();case 2:return n(e[1]);case 3:return n(e[1],e[2])}return n.apply(t,r.prototype.slice.call(e,1))}function n(t){var n,r=t.data;"string"==typeof r&&r.startsWith(u)&&(n=o[r],n&&(delete o[r],e(n)))}var i=0,o={},a=!0,u="setImmediatePolyfillMessage";return{setImmediate:function(){var e=i++,r=u+e;return o[r]=arguments,a&&(a=!1,t.addEventListener("message",n)),t.postMessage(r,"*"),e},clearImmediate:function(t){delete o[u+t]}}}),t.Promise||(t.Promise=new function(){function e(e){return i(e)?e:new l(function(n,r){t.setImmediate(function(){try{e.then(n,r)}catch(t){r(t)}})})}function r(t){return"function"==typeof t}function i(t){return t instanceof l}function o(t){return n(t)===t&&r(t.then)}function a(t){return t._fulfilled||t._rejected}function u(t){return t}function s(t){throw t}function c(t){t()}function f(t,n,r){function i(t){o(t)?e(t).then(i,a):n(t)}function a(t){o(t)?e(t).then(i,a):r(t)}e(t).then(i,a)}function l(t){n.assign(this,{_fulfilled:!1,_rejected:!1,_value:void 0,_reason:void 0,_onFulfilled:[],_onRejected:[]}),this._resolve(t)}return n.assign(l,{resolve:function(t){return o(t)?e(t):new l(function(e){e(t)})},reject:function(t){return new l(function(e,n){n(t)})},race:function(t){return new l(function(e,n){for(var r,i=t.length,a=0;i>a;)r=t[a],o(r)?f(r,e,n):e(r),a++})},all:function(t){return new l(function(e,n){var r,i=0,a=0,u=t.length,s=0;for(t=t.slice(0);u>s;)r=t[s],o(r)?(i++,f(r,function(n){return function(r){t[n]=r,a++,a==i&&e(t)}}(s),n)):t[s]=r,s++;i||e(t)})}}),n.assign(l.prototype,{_resolve:function(t){function e(t){r._fulfill(t)}function n(t){r._reject(t)}var r=this;try{t(e,n)}catch(i){a(r)||n(i)}},_fulfill:function(t){a(this)||(this._fulfilled=!0,this._value=t,this._onFulfilled.forEach(c),this._clearQueue())},_reject:function(t){a(this)||(this._rejected=!0,this._reason=t,this._onRejected.forEach(c),this._clearQueue())},_enqueue:function(t,e){this._onFulfilled.push(t),this._onRejected.push(e)},_clearQueue:function(){this._onFulfilled=[],this._onRejected=[]},then:function(n,i){var a=this;return n=r(n)?n:u,i=r(i)?i:s,new l(function(r,u){function s(){t.setImmediate(function(){var t;try{t=n(a._value)}catch(i){return void u(i)}o(t)?e(t).then(r,u):r(t)})}function c(){t.setImmediate(function(){var t;try{t=i(a._reason)}catch(n){return void u(n)}o(t)?e(t).then(r,u):r(t)})}n=n||defaultOnFulfilled,i=i||defaultOnRejected,a._fulfilled?s():a._rejected?c():a._enqueue(s,c)})},"catch":function(t){return this.then(void 0,t)}}),l}),t.requestAnimationFrame||n.assign(t,{requestAnimationFrame:[t.msRequestAnimationFrame,t.mozRequestAnimationFrame,t.webkitRequestAnimationFrame,new function(){var e=60,n=1e3/e,r=s.now(),i=r;return function(e){var o=s.now(),a=f.max(0,n-(o-i)),u=o+a;return i=u,t.setTimeout(function(){e(u-r)},a)}}].find(u),cancelAnimationFrame:[t.mozCancelAnimationFrame,t.webkitCancelAnimationFrame,t.cancelRequestAnimationFrame,t.msCancelRequestAnimationFrame,t.mozCancelRequestAnimationFrame,t.webkitCancelRequestAnimationFrame,t.clearTimeout].find(u)}),"dataset"in e.documentElement||n.defineProperty(y.prototype,"dataset",{get:new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.substr(5).replace(/-./g,t)}function i(t){return{get:function(){return t.value},set:function(e){t.value=o(e)}}}function a(t,o){return r.forEach(o,function(r){var o=r.name.toLowerCase();o.startsWith("data-")&&n.defineProperty(t,e(o),i(r))}),t}return function(){return a(new v,this.attributes)}}}),"children"in e.createDocumentFragment()||new function(){function t(t){t in r||n.defineProperty(r,t,{get:o[t]})}var r,i=1,o={firstElementChild:function(){for(var t=this.firstChild;t&&i!=t.nodeType;)t=t.nextSibling;return t},lastElementChild:function(){for(var t=this.lastChild;t&&i!=t.nodeType;)t=t.previousSibling;return t},nextElementSibling:function(){var t=this;do t=t.nextSibling;while(t&&i!=t.nodeType);return t},previousElementSibling:function(){var t=this;do t=t.previousSibling;while(t&&i!=t.nodeType);return t},childElementCount:function(){return this.children.length},children:new function(){function t(){}return t.prototype.item=function(t){return this[t]||null},function(){for(var e,n=new t,r=this.childNodes,o=r.length,a=0,u=0;o>a;)e=r[a],i==e.nodeType&&(n[u++]=e),a++;return n.length=u,n}}};r=y.prototype,n.keys(o).forEach(t),[e.constructor,e.createDocumentFragment().constructor].forEach(function(e){r=e.prototype,["firstElementChild","lastElementChild","childElementCount","children"].forEach(t)})},"append"in e.createDocumentFragment()||new function(){function t(t,e,n){return-1!=r.indexOf(t.querySelectorAll(n),e)}function i(t){var n,i,o,a=t.length;if(1==a)return n=t[0],"string"==typeof n?e.createTextNode(n):n;for(i=e.createDocumentFragment(),t=r.from(t),o=0;a>o;)n=t[o],"string"==typeof n&&(n=e.createTextNode(n)),i.appendChild(n),o++;return i}function o(t){t in s||(s[t]=c[t])}var a=1,s=y.prototype,c={before:function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},after:function(){var t,e,n=this.parentNode;n&&(e=i(arguments),t=this.nextSibling,t?n.insertBefore(e,t):n.appendChild(e))},replace:function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},remove:function(){var t=this.parentNode;t&&t.removeChild(this)},append:function(){this.appendChild(i(arguments))},prepend:function(){this.insertBefore(i(arguments),this.firstChild)},querySelector:s.querySelector,querySelectorAll:s.querySelectorAll,matches:[s.matchesSelector,s.oMatchesSelector,s.msMatchesSelector,s.mozMatchesSelector,s.webkitMatchesSelector,function(n){var r,i;return this===e?!1:(i=this.parentNode)?(a==i.nodeType&&(i=i.ownerDocument),t(i,this,n)):(i=e.createDocumentFragment(),i.appendChild(this),r=t(i,this,n),void i.removeChild(this))}].find(u)};n.keys(c).forEach(o),s=e.constructor.prototype,["querySelector","querySelectorAll"].forEach(o),s=e.createDocumentFragment().constructor.prototype,["append","prepend","querySelector","querySelectorAll","matches"].forEach(o)},"classList"in e.documentElement||n.defineProperty(y.prototype,"classList",{get:new function(){function t(t,e){this._getTokens=t,this._onChange=e}function e(t){return t=t.trim(),t?t.split(/\s\s*/):[]}return n.assign(t.prototype,{_clear:function(){r.splice(this,0,this.length)},_push:function(t){r.prototype.push.apply(this,t)},_update:function(){this._clear(),this._push(this._getTokens())},item:function(t){return this._update(),this[t]||null},add:function(){var t;this._update(),t=this.length,r.forEach(arguments,function(t){-1==r.indexOf(this,t)&&r.push(this,t)},this),t!=this.length&&this._onChange()},remove:function(){var t;this._update(),t=this.length,r.forEach(arguments,function(t){var e=r.indexOf(this,t);-1!=e&&r.splice(this,e,1)},this),t!=this.length&&this._onChange()},toggle:function(t,e){return this._update(),e===!1||this.contains(t)?(this.remove(t),!1):(this.add(t),!0)},contains:function(t){return this._update(),-1!=r.indexOf(this,t)},toString:function(){return r.join(this," ")}}),function(){var n=this;return n._classList||(n._classList=new t(function(){return e(n.className)},function(){n.className=this.toString()})),n._classList._update(),n._classList}}}),t.FormData||(t.FormData=new function(){function t(t){this.boundary=e(),t&&r.prototype.push.apply(this,i(t))}var e=new function(){function t(){var n=f.random().toString().slice(2);return e[n]?t():(e[n]=1,n)}var e={};return function(){return"-------------------------"+t()}},i=new function(){function t(t){return t.selected}function e(e){var n=e.nodeName.toLowerCase(),i=e.type;return e.name?e.disabled?!1:"fieldset"==n?!1:"select"==n&&e.multiple?r.some(e.options,t):"submit"==i||"reset"==i||"button"==i||"file"==i?!1:"radio"!=i&&"checkbox"!=i||!e.checked?!0:!1:!1}function n(e){return"select"==e.tagName.toLowerCase()&&e.multiple?r.reduce(e.options,function(e,n){return t(n)&&e.push(n.value),e},[]):[e.value]}return function(t){return r.reduce(t.elements,function(t,r){return e(r)&&n(r).forEach(function(e){t.push({name:r.name,value:e})}),t},[])}};return n.assign(t.prototype,{notNative:!0,append:function(t,e,n){r.push(this,{name:t,value:e,fileName:n})},toString:function(){var t=this.boundary,e="";return r.forEach(this,function(r){var i,o=r.name,a=r.value;e+="--"+t+"\r\n",n(a)===a?(i=r.fileName||a.name,e+='Content-Disposition: form-data; name="',e+=o+'"; filename="'+i+'"\r\n',e+="Content-Type: "+a.type+"\r\n\r\n",e+=a.content+"\r\n"):(e+='Content-Disposition: form-data; name="',e+=o+'"\r\n\r\n',e+=a+"\r\n")}),e+="--"+t+"--"}}),XMLHttpRequest.prototype.send=new function(){var e=XMLHttpRequest.prototype.send;return function(n){n instanceof t&&(this.setRequestHeader("Content-Type","multipart/form-data; boundary="+n.boundary),n=n.toString()),e.call(this,n)}},t}),new function(){function t(t){for(var e=[],n=t.length,r=0;n>r;)e[r]=t[r],r++;return e}var i=r.prototype.slice;try{r.slice(e.documentElement.childNodes,0)}catch(o){r.slice=function(e,r,o){var a,u=arguments.length;return a=n(e)instanceof n?e:t(e),1==u||2==u&&0==r?a==e?i.call(a,0):a:2==u?i.call(a,r):i.call(a,r,o)}}},function(){var t={0:!0,length:1};return r.splice(t,0,1),t[0]}()&&new function(){var t=r.splice;r.splice=function(e,n,i){var o,a=t.apply(r,arguments);if(!(e instanceof r))for(o=e.length;i--;)delete e[o+i];return a}},"function"==typeof w&&(v=w),function(){var t=e.createElement("div");return t.appendChild(e.createComment("test")),t.children.length}()&&n.defineProperty(y.prototype,"children",{get:n.getOwnPropertyDescriptor(HTMLDocument.prototype,"children").get}),t.addEventListener||new function(){function t(t){var n=e.documentElement;t.pageX=t.clientX+n.scrollLeft,t.pageY=t.clientY+n.scrollTop,t.timeStamp||(t.timeStamp=s.now())}function r(e,n){return function(r){var i,o=e.slice(0),a=o.length,u=0;for(r instanceof d||t(r),r.currentTarget=n;a>u;)i=o[u],i.handleEvent?i.handleEvent(r):i.call(n,r),u++}}function i(t,e,n){var i,o,a,u,s=this;if(n)throw new l("Capturing phase is not supported");s._events||(s._events={}),o=s._events,u=m[t],u&&(t=u.eventType),a=o[t],a||(a={callbacks:[]},i=r(a.callbacks,s),u&&(i=u.decorateListener(i)),a.listener=i,o[t]=a,this.attachEvent("on"+t,i)),-1==a.callbacks.indexOf(e)&&a.callbacks.push(e)}function o(t,e,n){var r,i,o,a,u,s=this;if(n)throw new l("Capturing phase is not supported");s._events&&(i=s._events,u=m[t],u&&(t=u.eventType),i[t]&&(o=i[t],r=o.callbacks,a=r.indexOf(e),-1!=a&&(r.splice(a,1),r.length||(s.detachEvent("on"+t,o.listener),delete i[t]))))}function a(t){var e,n,r=t.type;return t instanceof d?(t.target=this,e=this._events,e&&e[r]&&e[r].listener(t)):(n=m[r],n&&(r=n.eventType),this.fireEvent("on"+r,t)),!t.defaultPrevented}function u(t,e,r){n.assign(this,{type:t,bubbles:e,cancelable:r})}function c(t,e,r,i,o){this.initEvent(t,e,r),n.assign(this,{view:i,detail:o})}function f(t,e,r,i,o,a,u,s,c,f,l,h,p,d,m){this.initUIEvent(t,e,r,i,o),n.assign(this,{_relatedTarget:m,screenX:a,screenY:u,clientX:s,clientY:c,ctrlKey:f,altKey:l,shiftKey:h,metaKey:p,button:d})}function h(){this.defaultPrevented=!0,this.returnValue=!1}function p(){this.cancelBubble=!0}function d(){}var m={DOMContentLoaded:{eventType:"readystatechange",decorateListener:function(t){return function(n){"complete"==e.readyState&&t(n)}}}};n.assign(d.prototype,{type:"",timeStamp:0,detail:null,target:null,currentTarget:null,defaultPrevented:!1,preventDefault:h,stopPropagation:p,initEvent:u,initCustomEvent:function(t,e,n,r){this.initEvent(t,e,n),this.detail=r}}),n.assign(Event.prototype,{timeStamp:0,currentTarget:null,defaultPrevented:!1,preventDefault:h,stopPropagation:p,initEvent:u}),n.defineProperty(Event.prototype,"target",{get:function(){return this.srcElement}}),n.defineProperty(Event.prototype,"relatedTarget",{get:function(){var t=this.type;return this._relatedTarget?this._relatedTarget:"mouseover"==t?this.fromElement:"mouseout"==t?this.toElement:null}}),[y,HTMLDocument,Window,XMLHttpRequest].forEach(function(t){var e=t.prototype;e.dispatchEvent=a,e.addEventListener=i,e.removeEventListener=o}),HTMLDocument.prototype.createEvent=function(t){var e;return t.startsWith("CustomEvent")?e=new d:(e=this.createEventObject(),t.startsWith("UIEvent")?e.initUIEvent=c:t.startsWith("MouseEvent")&&(e.initUIEvent=c,e.initMouseEvent=f)),e.timeStamp=s.now(),e}},"onload"in new XMLHttpRequest||new function(){var r=XMLHttpRequest.prototype,i=r.abort,o=r.send,a=r.open;n.assign(r,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4,_unbind:function(){this.onreadystatechange=null},_fireEvent:function(n){var r=e.createEvent("CustomEvent");r.initEvent(n,!1,!1),this.dispatchEvent(r),n="on"+n,this[n]&&t.setImmediate(function(){r.target[n](r)})},_onReadyStateChange:function(){this.readyState==this.DONE&&(this._unbind(),this._fireEvent("load"))},open:function(){try{a.apply(this,arguments)}catch(t){this._unbind(),this._fireEvent("error")}},send:function(t){this.onreadystatechange=this._onReadyStateChange;try{o.call(this,t)}catch(e){this._unbind(),this._fireEvent("error")}},abort:function(){i.call(this),this._fireEvent("abort")}})},"onload"in e.createElement("script")||n.defineProperty(HTMLScriptElement.prototype,"onload",{set:function(t){this.onreadystatechange="function"==typeof t?function(n){"loaded"==this.readyState&&(this.onreadystatechange=null,n=e.createEvent("CustomEvent"),this.text?(n.initEvent("load",!1,!1),t.call(this,n)):this.onerror&&(n.initEvent("error",!1,!1),this.onerror(n)),this.onerror=null)}:null}}),t instanceof n||new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.replace(/-./g,t)}function r(t,e){return t.replace("{ENABLED}",1!=e)}function i(t){return r(l.replace("{VALUE}",f.trunc(100*t)),t)}function a(t,e){return t.replace(p,i(e))}function u(t){return t.toLowerCase().contains("alpha")}var s=CSSStyleDeclaration.prototype,c="progid:DXImageTransform.Microsoft.",l="Alpha(opacity={VALUE}, enabled={ENABLED})",h=/\bopacity\s*=\s*(\d+)/i,p=/alpha\s*\(.*?\)/i;n.defineProperty(s,"cssFloat",{get:function(){return this.styleFloat},set:function(t){this.styleFloat=t}}),n.defineProperty(s,"opacity",{get:function(){var t="",e=this.filter.trim();return e&&e.replace(p,function(e){e.replace(h,function(e,n){t=o(n/100)})}),t},set:function(t){var e=this.filter.trim();!t||t>1?t=1:0>t&&(t=0),e?u(e)?this.filter=a(e,t):this.filter+=" "+c+i(t):this.filter=c+i(t)}}),n.assign(s,{getPropertyValue:function(t){return t=t.toLowerCase(),"float"==t?this.styleFloat:this[e(t)]},removeProperty:function(t){var n;return t=t.toLowerCase(),"float"==t?(t="styleFloat",n=this.styleFloat):(t=e(t),n=this[t]),this[t]="",n},setProperty:function(t,n){t=t.toLowerCase(),"float"==t&&(this.styleFloat=n),this[e(t)]=n}})},t.getComputedStyle||(t.getComputedStyle=new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.replace(/-./g,t)}function r(t){return t=t.toLowerCase(),"float"==t?this.cssFloat:this[e(t)]}function i(t,e){return{get:function(){return t[e]}}}function a(t){return{get:function(){return t.styleFloat}}}function u(t){return{get:function(){var e=t["DXImageTransform.Microsoft.Alpha"]||t.alpha;return e?o(e.opacity/100):"1"}}}function s(t,e){if(e)throw new l("getComputedStyle implementation only accepts the 1st parameter");var o,s=t._compStyle;return s||(s=t._compStyle=new w,o=t.currentStyle,n.keys(o).forEach(function(t){n.defineProperty(s,t,i(o,t))}),n.defineProperty(s,"cssFloat",a(o)),n.defineProperty(s,"opacity",u(t.filters)),s.getPropertyValue=r),s}return s}),history.pushState||new function(){},t.lib={},lib.classExtends=function(t,e){t.prototype=n.create(e.prototype),t.prototype.constructor=t,t.Super=e},lib.array={count:function(t){return r.reduce(t,function(t){return t+1},0)},contains:function(t,e,n){return-1!=r.indexOf(t,e,n)},unique:function(t){for(var e,n=[],r=t.length,i=0,o=0;r>i;)e=t[i],-1==n.indexOf(e)&&(n[o++]=e),i++;return n},all:function(t,e,r){var i=n(t).length;if(!i)return!1;for(;i--;){if(!(i in t))return!1;if(!e.call(r,t[i]))return!1}return!0},refine:function(t){return r.reduce(t,function(t,e){return t.push(e),t},[])},range:function(t,e){var n=[];1 in arguments||(e=t,t=0);for(;e>t;)n.push(t),t++;return n},shuffle:function(t){for(var e,n,i=r.from(t),o=i.length;o--;)e=f.floor(f.random()*(o+1)),n=i[e],i[e]=i[o],i[o]=n;return i},remove:function(t,e){var n=r.indexOf(t,e);return-1!=n&&r.splice(t,n,1)}},lib.date=new function(){var t=this,e=[31,28,31,30,31,30,31,31,30,31,30,31];t.isLeapYear=function(t){return arguments.length||(t=new s),t instanceof s&&(t=t.getFullYear()),t%4==0&&t%100!=0||t%400==0},t.getMonthLength=function(n,r){return arguments.length||(n=new s),n instanceof s&&(r=n.getFullYear(),n=n.getMonth()),1==n&&t.isLeapYear(r)?29:e[n]}},lib.html={parse:function(t){var n=e.createElement("div"),r=e.createDocumentFragment();for(n.innerHTML=t;n.hasChildNodes();)r.appendChild(n.firstChild);return r},escape:function(t){var n=e.createElement("div");return n.appendChild(e.createTextNode(t)),n.innerHTML},unescape:function(t){var n=e.createElement("div");return n.innerHTML=t,n.textContent}},lib.Template=new function(){function t(t){this.template=t}return t.match=function(t,e){return r.isArray(t)&&(t=t.join("")),n.keys(e).reduceRight(function(t,n){var r=e[n];return t.split("{"+n.toUpperCase()+"}").join(r)},t)},t.prototype.match=function(e){return t.match(this.template,e)},t},lib.I18n=new function(){function t(t){this.messageBundle=this[t]}function e(t,e){this.locale=t,this[t]=e}function n(n,r){function i(t,e){return t in i.messageBundle&&(t=i.messageBundle[t]),e?lib.Template.match(t,e):t}return i.add=e,i.use=t,i.add(n,r),i.use(n),i}return n},lib.css=new function(){var i,o=this;o.prefix=i=new function(){var t={},n=["ms","O","Webkit","Moz"],r=new function(){var t=e.documentElement.style,n=t.constructor.prototype;return"top"in n?n:t};return function(e){var i,o,a;if(e in t)return t[e];if(e in r)return t[e]=e,e;for(o=e.charAt(0).toUpperCase()+e.slice(1),a=n.length;a--;)if(i=n[a]+o,i in r)return t[e]=i,i;return void(t[e]=void 0)}},new function(){var t={animation:["Delay","Direction","Duration","FillMode","IterationCount","Name","PlayState","TimingFunction"],transition:["Delay","Duration","Property","TimingFunction"],transform:["Origin","Style"]};n.keys(t).forEach(function(e){var n=i(e);n&&(o[e]=n,t[e].forEach(function(t){o[e+t]=n+t}))})},o.getAnimationNames=new function(){function t(t){return"none"!=t}var e=/,\s*/;return function(n){var r=n[o.animationName];return r?r.split(e).filter(t):[]}},o.set=new function(){function e(t,e){n.keys(e).forEach(function(n){t[i(n)]=e[n]})}return o.transition||o.animation?function(n,r){var i=t.getComputedStyle(n),a=o.getAnimationNames(i);return e(n.style,r),lib.event.awaitTransAnimEnd(n,a)}:function(t,n){return e(t.style,n),Promise.resolve(t)}},o.get=function(e,n){var o=t.getComputedStyle(e);return r.isArray(n)?n.reduce(function(t,e){return t[e]=o[i(e)],t},{}):o[i(n)]},o.getTransitionTime=o.transition?new function(){function t(t){return t.split(",").map(function(t){return a.parseFloat(t)||0})}function e(t,e){for(var n,r=0,i=f.max(e.length,t.length),o=0;i>o;)n=(t[o]||0)+(e[o]||0),n>r&&(r=n),o++;return f.ceil(1e3*r)}return function(n){return e(t(n[o.transitionDelay]),t(n[o.transitionDuration]))}}:function(){return 0}},lib.event=n.assign({preventDefault:function(t){t.preventDefault()},stopPropagation:function(t){t.stopPropagation()}},new function(){function t(t){t.eventTypes.forEach(function(e){t.element.removeEventListener(e,t.callback)})}function e(t,e,n,r){var i;return 3==arguments.length&&(r=n,n=e,e=void 0),e?(e+=","+e+" *",i=function(n){var i=n.target;i.matches&&i.matches(e)&&(r.handleEvent?r.handleEvent(n):r.call(t,n))}):i=r,"string"==typeof n&&(n=n.split(/[\s,]+/)),n.forEach(function(e){t.addEventListener(e,i)}),{element:t,eventTypes:n,callback:i}}function n(n,r,i,o){function a(e){t(u),o.handleEvent?o.handleEvent(e):o.call(n,e)}var u;3==arguments.length&&(o=i,i=r,r=void 0),u=e(n,r,i,a)}function r(t,e,r){return 2==arguments.length&&(r=e,e=void 0),new Promise(function(i){n(t,e,r,i)})}return{off:t,on:e,one:n,when:r}},new function(){function e(t,e){return t?e.reduce(function(e,n){return-1==t.indexOf(n)&&e.push(n),e},[]):e}function n(t,e){var n=t.indexOf(e);return-1!=n&&t.splice(n,1),t.length}function r(t,e){return e||(e=a.getAnimationNames(t)),e.length?new Promise(function(r){function i(o){o.target!=t||n(e,o.animationName)||(t.removeEventListener(c,i),r(t))}t.addEventListener(c,i)}):Promise.resolve(t)}function i(e,n){var r;return n||(n=t.getComputedStyle(e)),r=a.getTransitionTime(n),r?new Promise(function(n){t.setTimeout(function(){n(e)},r)}):Promise.resolve(e)}function o(n,o){var u=t.getComputedStyle(n),s=a.getAnimationNames(u);return s=e(o,s),Promise.all([r(n,s),i(n,u)]).then(function(){return n})}var a=lib.css,u=a.animation,s=a.transition,c={animation:"animationend",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"}[u],f=Promise.resolve;return{animationEnd:c,animationStart:{animation:"animationstart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"}[u],animationIteration:{animation:"animationiteration",MozAnimation:"mozAnimationIteration",WebkitAnimation:"webkitAnimationIteration"}[u],transitionEnd:{transition:"transitionend",MozTransition:"mozTransitionEnd",WebkitTransition:"webkitTransitionEnd"}[s],awaitAnimationEnd:u?r:f,awaitTransitionEnd:s?i:f,awaitTransAnimEnd:u||s?o:f}}),lib.dom=n.assign({ready:function(){return"complete"==e.readyState?Promise.resolve():lib.event.when(e,"DOMContentLoaded")}},new function(){function e(t,e,n){var r=t.className,i=t.classList;return n.forEach(function(t){i[e](t)}),r!=t.className}function n(t,e){return o(e[0],t,r.slice(e,1))}var i=lib.css,o=i.animation||i.transition?function(n,r,o){var a=t.getComputedStyle(n),u=i.getAnimationNames(a);return e(n,r,o)?lib.event.awaitTransAnimEnd(n,u):Promise.resolve(n)}:function(t,n,r){return e(t,n,r),Promise.resolve(t)};return{addClass:function(){return n("add",arguments)},removeClass:function(){return n("remove",arguments)},toggleClass:function(){return n("toggle",arguments)}}}),lib.request=new function(){function r(t,e){return encodeURIComponent(t)+"="+encodeURIComponent(e)
}function i(t){return n.keys(t).reduce(function(e,n){return e.push(r(n,t[n])),e},[]).join("&")}function o(t){t.onload=null,t.onerror=null,t.ontimeout=null}function a(e){var r=(e.method||"GET").toUpperCase(),a=e.url||t.location.href,s=e.data,c=e.userName||"",f=e.password||"",h=e.timeout||0,p=!1!==e.async,d=!1!==e.caching,m=!0===e.credentials,g=e.mimeType,v={"X-Requested-With":"XMLHttpRequest"};return n(s)===s&&(s instanceof FormData?v["Content-Type"]="multipart/form-data":s=i(s)),"POST"==r?v["Content-Type"]=v["Content-Type"]||"application/x-www-form-urlencoded; charset=UTF-8":(d||(a+="?no-cache="+u()),"string"==typeof s&&(a+=(d?"?":"&")+s),s=null),e.headers&&n.assign(v,e.headers),new Promise(function(t,e){function i(){o(this),this.status>=200&&this.status<400?t(this):e(new l(this.statusText))}function u(){o(this),e(new l(this.statusText))}function d(){o(this),e(new l("time is out"))}!new function(){var t=new XMLHttpRequest;t.open(r,a,p,c,f),m&&(t.withCredentials=!0),g&&t.overrideMimeType(g),n.keys(v).forEach(function(e){t.setRequestHeader(e,v[e])}),t.onload=i,t.onerror=u,h&&(t.timeout=h,t.ontimeout=d),t.send(s)}})}var u=new function(){var t={};return function(){var e=f.random().toString().slice(2);return t[e]?u():(t[e]=1,e)}};return n.assign(a,{toQueryParam:r,toQueryString:i,get:function(t){return"string"==typeof t&&(t={url:t}),t.method="GET",a(t)},post:function(t){return t.method="POST",a(t)},json:function(t){return a.get(t).then(function(t){return JSON.parse(t.responseText)})},jsonp:function(t){return a.script(t)},script:function(r){var a,s,c;return"string"==typeof r&&(r={url:r}),a=r.url||t.location.href,s=r.data,c=r.caching!==!1,n(s)===s&&(s=i(s)),c||(a+="?no-cache="+u()),"string"==typeof s&&(a+=(c?"?":"&")+s),new Promise(function(t,r){e.head.appendChild(n.assign(e.createElement("script"),{onload:function(){o(this),this.remove(),t()},onerror:function(){o(this),this.remove(),r(new l("Could not load script"))},async:!0,defer:!0,src:a}))})}}),a},lib.cookie=new function(){function t(t){return l(f.cookie.replace(new c("(?:(?:^|.*;)\\s*"+h(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function n(t,e,n){n=n||{};var r="",i=n.end,u=n.path,c=n.domain,l=n.secure;if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;if(i)switch(i.constructor){case a:r=1/0===i?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+i;break;case o:r="; expires="+i;break;case s:r="; expires="+i.toUTCString()}return f.cookie=h(t)+"="+h(e)+r+(c?"; domain="+c:"")+(u?"; path="+u:"")+(l?"; secure":""),!0}function r(t,e){e=e||{};var n=e.path,r=e.domain;return t&&i(t)?(f.cookie=h(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(r?"; domain="+r:"")+(n?"; path="+n:""),!0):!1}function i(t){return new c("(?:^|;\\s*)"+h(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(f.cookie)}function u(){return f.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/).map(l)}var f=e,l=decodeURIComponent,h=encodeURIComponent;return{get:t,set:n,has:i,remove:r,keys:u}}}(window,document,Object,Array,Function,String,Number,Boolean,Date,RegExp,Math,Error,TypeError,isFinite,isNaN,parseFloat,parseInt);