!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);void 0!==typeof l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function(a){this.require,this.exports,this.module;a.registerDynamic("@system-env",[],!1,function(){return{default:!0}}),a.registerDynamic("2",["@system-env"],!0,function(a,b,c){function d(){l=!1,h.length?k=h.concat(k):m=-1,k.length&&e()}function e(){if(!l){var a=setTimeout(d);l=!0;for(var b=k.length;b;){for(h=k,k=[];++m<b;)h&&h[m].run();m=-1,b=k.length}h=null,l=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=(this||self,a("@system-env").production),j=c.exports={},k=[],l=!1,m=-1;return j.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];k.push(new f(a,b)),1!==k.length||l||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},j.title="browser",j.browser=!0,j.env={NODE_ENV:i?"production":"development"},j.argv=[],j.version="",j.versions={},j.on=g,j.addListener=g,j.once=g,j.off=g,j.removeListener=g,j.removeAllListeners=g,j.emit=g,j.binding=function(a){throw new Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(a){throw new Error("process.chdir is not supported")},j.umask=function(){return 0},c.exports}),a.registerDynamic("3",["2"],!0,function(a,b,c){"use strict";function d(a){return(a+"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function e(a,b){for(var c=a.length,d=0;d<c;)if(a[d++]==b)return!0;return!1}function f(a){return a.replace(hb,"$1-$2").toLowerCase()}function g(){}function h(a,b,c){if("type"===b&&"INPUT"===a.tagName){var d=a.value;a.setAttribute(b,""+c),a.value=d}else a.setAttribute(nb[b]||b,""+c)}function i(a,b,c){c?h(a,b,c):m(a,b)}function j(a,b,c){a[b]=c}function k(a,b,c){if(lb){var d=typeof c;if("object"!==d)return void jb.error('"'+b+'" attribute expects an object as a value, not a '+d)}var e=a[b];for(var f in c)e[f]=null==c[f]?"":c[f]}function l(a,b,c){"value"===b&&"SELECT"===a.tagName?o(a,c):a[b]!==c&&(a[b]=c)}function m(a,b){a.removeAttribute(nb[b]||b)}function n(a,b){"style"===b?a[b].cssText="":"value"===b&&"SELECT"===a.tagName?p(a):a[b]=t(a.tagName,b)}function o(a,b){for(var c=Array.isArray(b),d=a.options,f=d.length,g=0,h=void 0;g<f;)h=d[g++],h.selected=null!=b&&(c?e(b,h.value):h.value==b)}function p(a){for(var b=a.options,c=b.length,d=0;d<c;)b[d++].selected=!1}function q(a,b){return(nb[a]||a)+'="'+d(b)+'"'}function r(a,b){return b?a:""}function s(a,b){var c="";for(var d in b)null!=b[d]&&(c+=f(d)+":"+b[d]+";");return c?a+'="'+c+'"':c}function t(a,b){var c=mb[a]||(mb[a]={});return b in c?c[b]:c[b]=document.createElement(a)[b]}function u(a){return sb[a]||ob}function v(a,b){if(Array.isArray(a))x(b,a[1]);else if(Array.isArray(b)){for(var c=b[0],d=void 0,e=b[1];c!==e;)d=c.nextSibling,a.appendChild(c),c=d;a.appendChild(e)}else a.appendChild(b)}function w(a){if(Array.isArray(a)){for(var b=a[0],c=void 0,d=a[1],e=d.parentNode;b!==d;)c=b.nextSibling,e.removeChild(b),b=c;e.removeChild(d)}else a.parentNode.removeChild(a)}function x(a,b){if(Array.isArray(b)&&(b=b[0]),Array.isArray(a)){for(var c=a[0],d=void 0,e=a[1],f=e.parentNode;c!==e;)d=c.nextSibling,f.insertBefore(c,b),c=d;f.insertBefore(e,b)}else b.parentNode.insertBefore(a,b)}function y(a,b,c){if(c){Array.isArray(b)&&(b=b[1]);var d=b.nextSibling;d?x(a,d):v(b.parentNode,a)}else x(a,b)}function z(a,b){Array.isArray(a)?(x(b,a),w(a)):a.parentNode.replaceChild(b,a)}function A(a){if(Array.isArray(a))for(var b=a[0].nextSibling,c=void 0,d=a[1],e=d.parentNode;b!==d;)c=b.nextSibling,e.removeChild(b),b=c;else a.textContent=""}function B(a,b,c){if(Array.isArray(a)){var d=a[1],e=d.previousSibling;e===a[0]?d.parentNode.insertBefore(document.createTextNode(b),d):e.nodeValue=b}else if(c){var f=a.firstChild;f?f.nodeValue=b:a.textContent=b}else a.innerHTML=b}function C(a){if(Array.isArray(a)){var b=a[0].nextSibling;b.parentNode.removeChild(b)}else a.textContent=""}function D(a){var b="on"+a;if(b in document)return!0;var c=document.createElement("div");return c.setAttribute(b,"return;"),"function"==typeof c[b]||"wheel"===a&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&document.implementation.hasFeature("Events.wheel","3.0")}function E(a,b){this.type=a,this.target=b.target,this.nativeEvent=b,this._isPropagationStopped=!1,this._isDefaultPrevented=!1,this._isSeized=!1}function F(a,b){var c=ub[a];return c&&!c._isPersisted?(c.target=b.target,c.nativeEvent=b,c._isPropagationStopped=!1,c._isDefaultPrevented=!1,c):ub[a]=new E(a,b)}function G(a,b){return a[vb]||(b?null:a[vb]=wb++)}function H(a,b){if(Ib){b||(b=a.type);for(var c=Hb[b],d=a.target,e=c.listenersCounter,f=void 0,g=void 0,h=void 0,i=void 0;e>0&&d&&d!==document;)(i=G(d,!0))&&(f=Gb.get(i),f&&(g=f[b])&&(h?h.push(g):h=[g],--e)),d=d.parentNode;if(h)for(var j=F(b,a),k=h.length,l=0;l<k&&(h[l++](j),!j.isPropagationStopped()););}}function I(a){Ib&&Gb.get(G(a.currentTarget))[a.type](F(a.type,a))}function J(a,b,c){var d=Hb[b];if(d){d.set||(d.setup?d.setup():d.bubbles&&document.addEventListener(b,H,!1),d.set=!0);var e=G(a),f=Gb.get(e);f||Gb.set(e,f={}),f[b]||(d.bubbles?++d.listenersCounter:a.addEventListener(b,I,!1)),f[b]=c}}function K(a,b){var c=G(a,!0);if(c){var d=Gb.get(c);if(d&&d[b]){d[b]=null;var e=Hb[b];e&&(e.bubbles?--e.listenersCounter:a.removeEventListener(b,I))}}}function L(a){var b=G(a,!0);if(b){var c=Gb.get(b);if(c){Gb.delete(b);for(var d in c)K(a,d)}}}function M(){Ib=!1}function N(){Ib=!0}function O(a){return Array.isArray(a)?P(a):a.namespaceURI===Jb?null:a.namespaceURI}function P(a){return O((Array.isArray(a)?a[a.length-1]:a).parentNode)}function Q(a,b){var c=a.getDomNode();tb.append(c,b.renderToDom(O(c))),b.mount()}function R(a,b){var c=b.getDomNode();tb.insertBefore(a.renderToDom(P(c)),c),a.mount()}function S(a){var b=a.getDomNode();a.unmount(),tb.remove(b)}function T(a,b,c){var d=document.activeElement;M(),tb.move(a.getDomNode(),b.getDomNode(),c),document.activeElement!==d&&d.focus(),N()}function U(a){for(var b=a.getDomNode(),c=a._children,d=c.length,e=0;e<d;)c[e++].unmount();tb.removeChildren(b)}function V(a,b){var c=a.getDomNode();a.unmount(),tb.replace(c,b.renderToDom(P(c))),b.mount()}function W(a,b,c){var d=a.getDomNode();Kb[b]?J(d,Kb[b],c):u(b).set(d,b,c)}function X(a,b){var c=a.getDomNode();Kb[b]?K(c,Kb[b]):u(b).remove(c,b)}function Y(a,b,c){tb.updateText(a.getDomNode(),b,c)}function Z(a){tb.removeText(a.getDomNode())}function $(a,b){a.getDomNode()&&console.error("You're trying to reuse the same node \""+b+'" more than once.')}function _(a){for(var b={},c=a.length,d=0,e=void 0;d<c;)e=a[d++],"object"!=typeof e?jb.error("You mustn't use simple child in case of multiple children."):null!=e._key&&(e._key in b?jb.error("Childrens' keys must be unique across the children. Found duplicate of \""+e._key+'" key.'):b[e._key]=!0)}function aa(a,b){var c=a._children,d=b._children,e=c.length,f=d.length;if(1===e&&1===f)return void c[0].patch(d[0]);for(var g=0,h=e-1,i=c[g],j=i._key,k=c[h],l=k._key,m=0,n=f-1,o=d[m],p=o._key,q=d[n],r=q._key,s=!1,t=!1,u=!1,v=!1,w={},x=void 0,y=void 0,z=void 0;g<=h&&m<=n;)w[g]?s=!0:w[h]?t=!0:j===p?(i.patch(o),s=!0,u=!0):l===r?(k.patch(q),t=!0,v=!0):null!=j&&j===r?(Lb.moveChild(i,k,!0),i.patch(q),s=!0,v=!0):null!=l&&l===p?(Lb.moveChild(k,i,!1),k.patch(o),t=!0,u=!0):null!=j&&null==p?(Lb.insertChild(o,i),u=!0):null==j&&null!=p?(Lb.removeChild(i),s=!0):(x||(x=ba(c,g,h)),null==(y=x[p])?Lb.insertChild(o,i):(z=c[y],w[y]=!0,Lb.moveChild(z,i,!1),z.patch(o)),u=!0),s&&(s=!1,++g<=h&&(i=c[g],j=i._key)),t&&(t=!1,--h>=g&&(k=c[h],l=k._key)),u&&(u=!1,++m<=n&&(o=d[m],p=o._key)),v&&(v=!1,--n>=m&&(q=d[n],r=q._key));for(;g<=h;)w[g]||Lb.removeChild(c[g]),++g;for(;m<=n;)n<f-1?Lb.insertChild(d[m],d[n+1]):Lb.appendChild(b,d[m]),++m}function ba(a,b,c){for(var d={},e=void 0;b<c;)e=a[b],null!=e._key&&(d[e._key]=b),++b;return d}function ca(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(a,b){var c=void 0;if(b){var d=b+":"+a;c=Nb[d]||(Nb[d]=document.createElementNS(b,a))}else c=Nb[a]||(Nb[a]="!"===a?document.createComment(""):document.createElement(a));return c.cloneNode()}function ea(a,b,c){var d=Pb[b]||"div",e=Qb[d]||(Qb[d]=document.createElement(d));if(!c||!Ob[c]||Ob[c]===b)return e.innerHTML=a,e.removeChild(e.firstChild);var f=Ob[c];return e.innerHTML="<"+f+' xmlns="'+c+'">'+a+"</"+f+">",e.removeChild(e.firstChild).firstChild}function fa(a){this.type=Sb,this._tag=a,this._domNode=null,this._key=null,this._ns=null,this._attrs=null,this._children=null,this._escapeChildren=!0,this._ctx=Mb}function ga(a){if(null==a)return null;var b=typeof a;if("object"===b){var c=Array.isArray(a)?a:[a];return lb&&_(c),c}return"string"===b?a:a.toString()}function ha(a){for(var b in a)"on"!==b.substr(0,2)||Kb[b]||jb.error("You're trying to add unsupported event listener \""+b+'".')}function ia(a){this.type=Vb,this._component=a,this._key=null,this._attrs=null,this._instance=null,this._children=null,this._ctx=Mb}function ja(a){this.type=Wb,this._component=a,this._key=null,this._attrs=Mb,this._rootNode=null,this._children=null,this._ctx=Mb}function ka(){this.type=Ub,this._domNode=null,this._key=null,this._children=null,this._ctx=Mb}function la(a){if(null==a)return null;var b=Array.isArray(a)?a:[a];return lb&&_(b),b}function ma(){this.type=Tb,this._domNode=null,this._key=null,this._children=null}function na(a){return null==a||"string"==typeof a?a:a.toString()}function oa(){for(var a=0;a<$b.length;)$b[a++]();$b=[]}function pa(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}function qa(){this._listeners={}}function ra(a){this.type=Rb,this._childNode=a,this._ns=null}function sa(a,b,c,d,e){var f=G(a),g=ac.get(f),h=void 0;if(g&&g.tree){h=++g.id;var i=function(){if(g=ac.get(f),g&&g.id===h){var a=g.tree,e=new ra(b);e.ns(a._ns).ctx(c),a.patch(e),g.tree=e,ua(d),lb&&cc.emit("replace",a,e)}};e?i():_b(i)}else{if(ac.set(f,g={tree:null,id:h=++bc}),a.childNodes.length){var j=va(a);if(j){var k=g.tree=new ra(b);return k.ns(O(a)).ctx(c),k.adoptDom(j),k.mount(),ua(d),void(lb&&cc.emit("mount",k))}a.textContent=""}var l=function(){var e=ac.get(f);if(e&&e.id===h){var g=e.tree=new ra(b);g.ns(O(a)).ctx(c),tb.append(a,g.renderToDom()),g.mount(),ua(d),lb&&cc.emit("mount",g)}};e?l():_b(l)}}function ta(a,b,c){var d=G(a),e=ac.get(d);e?!function(){var a=++e.id,f=function(){if(e=ac.get(d),e&&e.id===a){ac.delete(d);var c=e.tree;if(c){var f=c.getDomNode();c.unmount(),tb.remove(f)}ua(b),lb&&c&&cc.emit("unmount",c)}};e.tree?c?f():_b(f):c||ua(b)}():c||ua(b)}function ua(a){a&&a()}function va(a){for(var b=a.childNodes,c=b.length,d=0,e=void 0,f=void 0;d<c;)f=b[d++],e?e.push(f):f.nodeType===Node.COMMENT_NODE&&"vidom"===f.textContent&&(e=[]);return e}function wa(a,b,c,d){"function"==typeof c&&(d=c,c=this),sa(a,b,c,d,!1)}function xa(a,b,c,d){lb&&console.warn("mountToDom() is deprecated, use mount() instead."),wa(a,b,c,d)}function ya(a,b,c){sa(a,b,c,null,!0)}function za(a,b){ta(a,b,!1)}function Aa(a,b){lb&&console.warn("unmountFromDom() is deprecated, use unmount() instead."),za(a,b)}function Ba(a){ta(a,null,!0)}function Ca(){var a=[];return ac.forEach(function(b){var c=b.tree;c&&a.push(c)}),a}function Da(){this.__isMounted=!0,this.onMount(this.__attrs,this.__children)}function Ea(){this.__isMounted=!1,this.__domRefs=null,this.onUnmount()}function Fa(a,b,c){a=this.__buildAttrs(a);var d=this.__rootNode,e=this.__attrs,f=this.__children;if((e!==a||f!==b)&&(this.__attrs=a,this.isMounted())){var g=this.__isUpdating;this.__isUpdating=!0,this.onAttrsReceive(a,e,b,f),this.__isUpdating=g}if(this.__children=b,this.__ctx=c,!this.__isUpdating){var h=this.shouldUpdate(a,e,b,f);if(lb){var i=typeof h;"boolean"!==i&&jb.warn("Component#shouldUpdate() should return boolean instead of "+i)}h&&(this.__rootNode=this.render(),d.patch(this.__rootNode),this.isMounted()&&this.onUpdate(a,e,b,f))}}function Ga(){return!0}function Ha(a){return this.__rootNode.renderToDom(a)}function Ia(){return this.__rootNode.renderToString()}function Ja(a,b){return this.__rootNode.adoptDom(a,b)}function Ka(){return this.__rootNode.getDomNode()}function La(){return this.__attrs}function Ma(){return Mb}function Na(){return Mb}function Oa(a){this.__prevState=this.__state,this.__state=pa(this.__state,a),this.update(Pa)}function Pa(){this.__prevState=this.__state}function Qa(){return this.__state}function Ra(){return this.__prevState}function Sa(){this.__domRefs={};var a=this.onRender(this.__attrs,this.__children)||cb("!");lb&&("object"!=typeof a||Array.isArray(a))&&jb.error("Component#onRender must return a single node object on the top level");var b=this.onChildContextRequest(this.__attrs);return a.ctx(b===Mb?this.__ctx:this.__ctx===Mb?b:pa(this.__ctx,b)),a}function Ta(a){var b=this;this.__isUpdating?a&&_b(function(){return a.call(b)}):(this.__isUpdating=!0,_b(function(){if(b.isMounted()){b.__isUpdating=!1;var c=b.__rootNode;b.patch(b.__attrs,b.__children,b.__ctx),a&&a.call(b),lb&&cc.emit("replace",c,b.__rootNode)}}))}function Ua(){return this.__rootNode}function Va(){return this.__isMounted}function Wa(a,b){return this.__domRefs[a]=b}function Xa(a){return this.__domRefs[a]?this.__domRefs[a].getDomNode():null}function Ya(){return this.__ctx}function Za(){return Mb}function $a(a){if(this.__attrs&&a===this.__attrs)return a;var b=this.constructor,c=b.__defaultAttrs||(b.__defaultAttrs=b.getDefaultAttrs());return a?c===Mb?a:pa(c,a):c}function _a(a,b){var c=function(a,b,c){this.__attrs=this.__buildAttrs(a),this.__children=b,this.__ctx=c,this.__domRefs=null,this.__isMounted=!1,this.__isUpdating=!1,this.__state=this.onInitialStateRequest(this.__attrs,b),this.__prevState=this.__state,this.onInit(this.__attrs,b),this.__rootNode=this.render()},d={constructor:c,onInitialStateRequest:Na,onInit:g,mount:Da,unmount:Ea,onMount:g,onUnmount:g,onAttrsReceive:g,shouldUpdate:Ga,onUpdate:g,isMounted:Va,getState:Qa,getPrevState:Ra,setState:Oa,renderToDom:Ha,renderToString:Ia,adoptDom:Ja,getDomNode:Ka,getRootNode:Ua,render:Sa,onRender:g,update:Ta,patch:Fa,getDomRef:Xa,setDomRef:Wa,getAttrs:La,onChildContextRequest:Ma,getContext:Ya,__buildAttrs:$a};for(var e in a)d[e]=a[e];c.prototype=d,c.getDefaultAttrs=Za;for(var f in b)c[f]=b[f];return c.__vidom__component__=!0,c}function ab(a,b){(dc[a]||(dc[a]=[])).push(b)}function bb(a,b){for(var c=dc[a],d=c.length,e=0;e<d;){if(c[e]===b){if(1===d)return void delete dc[a];c.splice(e,1);break}e++}}function cb(a){switch(typeof a){case"string":switch(a){case"fragment":return new ka;case"text":return new ma;default:return hc[a]?new ia(hc[a]):new fa(a)}case"function":return a.__vidom__component__?new ia(a):new ja(a);default:lb&&jb.error("Unsupported type of node")}}function db(a){if(null==a)return null;var b=typeof a;if("object"!==b)return"string"===b?a||null:""+a;if(!Array.isArray(a))return a;if(!a.length)return null;for(var c=a,d=0,e=a.length,f=!1,g={},h=void 0;d<e;){if(h=d in g?g[d]:db(a[d]),null===h)null!==c&&(f?c===a&&(c=a.slice(0,d)):c=null);else if("object"==typeof h)Array.isArray(h)?c=f?(c===a?c.slice(0,d):Array.isArray(c)?c:[eb(c)]).concat(h):h:c!==a?f?Array.isArray(c)?c.push(h):c=[eb(c),h]:c=h:h!==a[d]&&(f?(c=c.slice(0,d),c.push(h)):c=h),f=!0;else{for(var i=void 0,j=d;++j<e;)if(i=g[j]=db(a[j]),"string"==typeof i)h+=i;else if(null!==i)break;f?Array.isArray(c)?(c===a&&(c=c.slice(0,d)),c.push(eb(h))):c=[c,eb(h)]:c=""+h,d=j-1,f=!0}++d}return c}function eb(a){return"object"==typeof a?a:cb("text").children(a)}function fb(a){var b=db(a);return null===b||"object"!=typeof b||Array.isArray(b)||(b=[b]),b}var gb=a("2");this||self;Object.defineProperty(b,"__esModule",{value:!0});var hb=/([^A-Z]+)([A-Z])/g,ib="undefined"==typeof console?null:console,jb={},kb={log:"",info:"",warn:"Warning!",error:"Error!"};["log","info","warn","error"].forEach(function(a){jb[a]=ib?ib[a]?function(b,c,d,e,f){var g=kb[a];switch(arguments.length){case 1:ib[a](g,b);break;case 2:ib[a](g,b,c);break;case 3:ib[a](g,b,c,d);break;case 4:ib[a](g,b,c,d,e);break;case 5:ib[a](g,b,c,d,e,f)}}:function(){ib.log.apply(ib,arguments)}:g});var lb="undefined"==typeof gb||!1,mb={},nb={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset",tabIndex:"tabindex"},ob={set:h,remove:m,toString:q},pb={set:i,remove:m,toString:r},qb={set:j,remove:n,toString:q},rb={set:j,remove:n,toString:r},sb={checked:rb,controls:qb,disabled:pb,id:qb,ismap:pb,loop:qb,multiple:rb,muted:qb,open:pb,readOnly:rb,selected:rb,srcDoc:qb,style:{set:k,remove:n,toString:s},value:{set:l,remove:n,toString:q}},tb={append:v,remove:w,insertBefore:x,move:y,replace:z,removeChildren:A,updateText:B,removeText:C};E.prototype={stopPropagation:function(){this._isPropagationStopped=!0;var a=this.nativeEvent;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},isPropagationStopped:function(){return this._isPropagationStopped},preventDefault:function(){this._isDefaultPrevented=!0;var a=this.nativeEvent;a.preventDefault?a.preventDefault():a.returnValue=!1},isDefaultPrevented:function(){return this._isDefaultPrevented},persist:function(){this._isPersisted=!0}};var ub={},vb="__vidom__id__",wb=1,xb=void 0;"undefined"==typeof Map?(xb=function(){this._storage={}},xb.prototype={has:function(a){return a in this._storage},get:function(a){return this._storage[a]},set:function(a,b){return this._storage[a]=b,this},delete:function(a){return delete this._storage[a]},forEach:function(a,b){var c=this._storage;for(var d in c)a.call(b,c[d],d,this)}}):xb=Map;var yb=xb,zb="undefined"==typeof navigator?"":navigator.userAgent,Ab=zb.indexOf("Trident")>-1,Bb=zb.indexOf("Edge")>-1,Cb=/iPad|iPhone|iPod/.test(zb)&&"undefined"==typeof MSStream,Db=["click","mousedown","mousemove","mouseout","mouseover","mouseup"],Eb=["blur","change","contextmenu","copy","cut","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","focus","input","keydown","keypress","keyup","paste","submit","touchcancel","touchend","touchmove","touchstart","wheel"],Fb=["canplay","canplaythrough","complete","durationchange","emptied","ended","error","load","loadeddata","loadedmetadata","loadstart","mouseenter","mouseleave","pause","play","playing","progress","ratechange","scroll","seeked","seeking","select","stalled","suspend","timeupdate","volumechange","waiting"];Cb?Fb=[].concat(Fb,Db):Eb=[].concat(Eb,Db);var Gb=new yb,Hb={},Ib=!0;"undefined"!=typeof document&&!function(){for(var a={focus:"focusin",blur:"focusout"},b=0,c=void 0;b<Eb.length;)c=Eb[b++],Hb[c]={type:c,bubbles:!0,listenersCounter:0,set:!1,setup:a[c]?D(a[c])?function(){var b=this.type;document.addEventListener(a[b],function(a){H(a,b)})}:function(){document.addEventListener(this.type,H,!0)}:null};for(b=0;b<Fb.length;)Hb[Fb[b++]]={type:c,bubbles:!1,set:!1}}();var Jb="http://www.w3.org/1999/xhtml",Kb={onBlur:"blur",onCanPlay:"canplay",onCanPlayThrough:"canplaythrough",onChange:"change",onClick:"click",onComplete:"complete",onContextMenu:"contextmenu",onCopy:"copy",onCut:"cut",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragEnter:"dragenter",onDragLeave:"dragleave",onDragOver:"dragover",onDragStart:"dragstart",onDrop:"drop",onDurationChange:"durationchange",onEmptied:"emptied",onEnded:"ended",onError:"error",onFocus:"focus",onInput:"input",onKeyDown:"keydown",onKeyPress:"keypress",onKeyUp:"keyup",onLoad:"load",onLoadedData:"loadeddata",onLoadedMetadata:"loadedmetadata",onLoadStart:"loadstart",onMouseDown:"mousedown",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPaste:"paste",onPause:"pause",onPlay:"play",onPlaying:"playing",onProgress:"progress",onRateChange:"ratechange",onScroll:"scroll",onSeeked:"seeked",onSeeking:"seeking",onSelect:"select",onStalled:"stalled",onSubmit:"submit",onSuspend:"suspend",onTimeUpdate:"timeupdate",onTouchCancel:"touchcancel",onTouchEnd:"touchend",onTouchMove:"touchmove",onTouchStart:"touchstart",onVolumeChange:"volumechange",onWaiting:"waiting",onWheel:"wheel"},Lb={appendChild:Q,insertChild:R,removeChild:S,moveChild:T,removeChildren:U,replace:V,updateAttr:W,removeAttr:X,updateText:Y,removeText:Z},Mb={},Nb={},Ob={"http://www.w3.org/2000/svg":"svg","http://www.w3.org/1998/Math/MathML":"math"},Pb={thead:"table",tbody:"table",tfoot:"table",tr:"tbody",td:"tr"},Qb={},Rb=1,Sb=2,Tb=3,Ub=4,Vb=5,Wb=6,Xb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Yb=Ab||Bb;fa.prototype={getDomNode:function(){return this._domNode},key:function(a){return this._key=a,this},ns:function(a){return this._ns=a,this},attrs:function(a){return this._attrs=a,lb&&ha(a),this},children:function(a){return lb&&null!==this._children&&jb.warn("You're trying to set children or html more than once or pass both children and html."),this._children=ga(a),this},ctx:function(a){if(a!==Mb){this._ctx=a;var b=this._children;if(b&&"string"!=typeof b)for(var c=b.length,d=0;d<c;)b[d++].ctx(a)}return this},html:function(a){return lb&&null!==this._children&&jb.warn("You're trying to set children or html more than once or pass both children and html."),this._children=a,this._escapeChildren=!1,this},renderToDom:function(a){lb&&$(this,this._tag);var b=this._ns||a,c=this._children;if(Yb&&c&&"string"!=typeof c){var d=ea(this.renderToString(),this._tag,b);return this.adoptDom([d],0),d}var e=this._domNode=da(this._tag,b),f=this._attrs;if(c)if("string"==typeof c)this._escapeChildren?e.textContent=c:e.innerHTML=c;else for(var g=0,h=c.length;g<h;)e.appendChild(c[g++].renderToDom(b));if(f){var i=void 0,j=void 0;for(i in f)null!=(j=f[i])&&(Kb[i]?J(e,Kb[i],j):u(i).set(e,i,j))}return e},renderToString:function(){var a=this._tag;if("!"===a)return"<!---->";var b=this._ns,c=this._attrs,d=this._children,f="<"+a;if(b&&(f+=' xmlns="'+b+'"'),c){var g=void 0,h=void 0,i=void 0;for(g in c)if(h=c[g],null!=h){if("value"===g)switch(a){case"textarea":d=h;continue;case"select":this.ctx({value:h,multiple:c.multiple});continue;case"option":(this._ctx.multiple?e(this._ctx.value,h):this._ctx.value===h)&&(f+=" "+u("selected").toString("selected",!0))}!Kb[g]&&(i=u(g).toString(g,h))&&(f+=" "+i)}}if(Xb[a])f+="/>";else{if(f+=">",d)if("string"==typeof d)f+=this._escapeChildren?ca(d):d;else for(var j=0,k=d.length;j<k;)f+=d[j++].renderToString();f+="</"+a+">"}return f},adoptDom:function(a,b){lb&&$(this,this._tag);var c=this._domNode=a[b],d=this._attrs,e=this._children;if(d){var f=void 0,g=void 0;for(f in d)null!=(g=d[f])&&Kb[f]&&J(c,Kb[f],g)}if(e&&"string"!=typeof e){var h=0,i=e.length;if(i)for(var j=c.childNodes,k=0;h<i;)k=e[h++].adoptDom(j,k)}return b+1},mount:function(){var a=this._children;if(a&&"string"!=typeof a)for(var b=0,c=a.length;b<c;)a[b++].mount()},unmount:function(){var a=this._children;if(a&&"string"!=typeof a)for(var b=0,c=a.length;b<c;)a[b++].unmount();L(this._domNode),this._domNode=null},patch:function(a){if(this===a)return void this._patchChildren(a);switch(a.type){case Sb:this._tag!==a._tag||this._ns!==a._ns?Lb.replace(this,a):(a._domNode=this._domNode,this._patchChildren(a),this._patchAttrs(a));break;case Vb:var b=a._getInstance();this.patch(b.getRootNode()),b.mount();break;case Wb:this.patch(a._getRootNode());break;default:Lb.replace(this,a)}},_patchChildren:function(a){var b=this._children,c=a._children;if(b||c){var d="string"==typeof b,e="string"==typeof c;if(e)return d?void(b!==c&&Lb.updateText(this,c,a._escapeChildren)):(b&&b.length&&Lb.removeChildren(this),void(c&&Lb.updateText(this,c,a._escapeChildren)));if(!c||!c.length)return void(b&&(d?Lb.removeText(this):b.length&&Lb.removeChildren(this)));if(d&&b&&Lb.removeText(this),!d&&b&&b.length)aa(this,a);else for(var f=c.length,g=0;g<f;)Lb.appendChild(a,c[g++])}},_patchAttrs:function(a){var b=this._attrs,c=a._attrs;if(b!==c){var d=void 0;if(c){var e=void 0,f=void 0,g=void 0,h=void 0;for(d in c)f=c[d],b&&null!=(e=b[d])?null==f?Lb.removeAttr(this,d):"object"==typeof f&&"object"==typeof e?(h=Array.isArray(f),g=Array.isArray(e),h||g?h&&g?this._patchAttrArr(d,e,f):Lb.updateAttr(this,d,f):this._patchAttrObj(d,e,f)):e!==f&&Lb.updateAttr(this,d,f):null!=f&&Lb.updateAttr(this,d,f)}if(b)for(d in b)c&&d in c||null==b[d]||Lb.removeAttr(this,d)}},_patchAttrArr:function(a,b,c){if(b!==c){var d=b.length,e=!1;if(d===c.length)for(var f=0;!e&&f<d;)b[f]!=c[f]&&(e=!0),++f;else e=!0;e&&Lb.updateAttr(this,a,c)}},_patchAttrObj:function(a,b,c){if(b!==c){var d=!1,e={};for(var f in c)b[f]!=c[f]&&(d=!0,e[f]=c[f]);for(var g in b)null==b[g]||g in c||(d=!0,e[g]=null);d&&Lb.updateAttr(this,a,e)}}},ia.prototype={getDomNode:function(){return this._instance&&this._instance.getDomNode()},key:function(a){return this._key=a,this},attrs:function(a){return this._attrs=a,this},children:function(a){return this._children=a,this},ctx:function(a){return this._ctx=a,this},renderToDom:function(a){return lb&&$(this,this._component.name||"Anonymous"),this._getInstance().renderToDom(a)},renderToString:function(){return this._getInstance().renderToString()},adoptDom:function(a,b){return lb&&$(this,this._component.name||"Anonymous"),this._getInstance().adoptDom(a,b)},mount:function(){this._instance.getRootNode().mount(),this._instance.mount()},unmount:function(){this._instance&&(this._instance.getRootNode().unmount(),this._instance.unmount(),this._instance=null)},patch:function(a){var b=this._getInstance();if(this===a)b.patch(a._attrs,a._children,a._ctx);else{if(this.type===a.type)if(this._component===a._component)b.patch(a._attrs,a._children,a._ctx),a._instance=b;else{b.unmount();var c=a._getInstance();b.getRootNode().patch(c.getRootNode()),c.mount()}else b.unmount(),b.getRootNode().patch(a);this._instance=null}},_getInstance:function(){return this._instance||(this._instance=new this._component(this._attrs,this._children,this._ctx))}},ja.prototype={getDomNode:function(){return this._rootNode&&this._rootNode.getDomNode()},key:function(a){return this._key=a,this},attrs:function(a){return this._attrs=a,this},children:function(a){return this._children=a,this},ctx:function(a){return this._ctx=a,this},renderToDom:function(a){return lb&&$(this,this._component.name||"Anonymous"),this._getRootNode().renderToDom(a)},renderToString:function(){return this._getRootNode().renderToString()},adoptDom:function(a,b){return lb&&$(this,this._component.name||"Anonymous"),this._getRootNode().adoptDom(a,b)},mount:function(){this._getRootNode().mount()},unmount:function(){this._rootNode&&(this._rootNode.unmount(),this._rootNode=null)},patch:function(a){if(this===a){var b=this._getRootNode();this._rootNode=null,b.patch(this._getRootNode())}else this._getRootNode().patch(this.type===a.type?a._getRootNode():a),this._rootNode=null},_getRootNode:function(){if(this._rootNode)return this._rootNode;var a=this._component(this._attrs,this._children,this._ctx)||cb("!");return lb&&("object"!=typeof a||Array.isArray(a))&&console.error("Function component must return a single node object on the top level"),a.ctx(this._ctx),this._rootNode=a}},ka.prototype={getDomNode:function(){return this._domNode},key:function(a){return this._key=a,this},children:function(a){return lb&&null!==this._children&&jb.warn("You're trying to set children to fragment more than once."),this._children=la(a),this},ctx:function(a){if(a!==Mb){this._ctx=a;var b=this._children;if(b)for(var c=b.length,d=0;d<c;)b[d++].ctx(a)}return this},renderToDom:function(a){lb&&$(this,"fragment");var b=this._children,c=[da("!"),da("!")],d=document.createDocumentFragment();if(d.appendChild(c[0]),b)for(var e=b.length,f=0;f<e;)d.appendChild(b[f++].renderToDom(a));return d.appendChild(c[1]),
this._domNode=c,d},renderToString:function(){var a=this._children,b="<!---->";if(a)for(var c=a.length-1;c>=0;)b=a[c--].renderToString()+b;return"<!---->"+b},adoptDom:function(a,b){lb&&$(this,"fragment");var c=[a[b++]],d=this._children;if(d)for(var e=d.length,f=0;f<e;)b=d[f++].adoptDom(a,b);return c.push(a[b]),this._domNode=c,b+1},mount:function(){var a=this._children;if(a)for(var b=0,c=a.length;b<c;)a[b++].mount()},unmount:function(){var a=this._children;if(a)for(var b=a.length,c=0;c<b;)a[c++].unmount()},patch:function(a){if(this===a)return void this._patchChildren(a);switch(a.type){case Ub:a._domNode=this._domNode,this._patchChildren(a);break;case Vb:var b=a._getInstance();this.patch(b.getRootNode()),b.mount();break;case Wb:this.patch(a._getRootNode());break;default:Lb.replace(this,a)}},_patchChildren:function(a){var b=this._children,c=a._children;if(b||c){if(!c||!c.length)return void(b&&b.length&&Lb.removeChildren(this));if(b&&b.length)aa(this,a);else for(var d=c.length,e=0;e<d;)Lb.appendChild(a,c[e++])}}},ma.prototype={getDomNode:function(){return this._domNode},key:function(a){return this._key=a,this},children:function(a){return lb&&null!==this._children&&jb.warn("You're trying to set children to fragment more than once."),this._children=na(a),this},ctx:function(){return this},renderToDom:function(){lb&&$(this,"text");var a=document.createDocumentFragment(),b=[da("!"),da("!")],c=this._children;return a.appendChild(b[0]),c&&a.appendChild(document.createTextNode(c)),a.appendChild(b[1]),this._domNode=b,a},renderToString:function(){return"<!---->"+(this._children||"")+"<!---->"},adoptDom:function(a,b){lb&&$(this,"text");var c=[a[b++]];return this._children&&b++,c.push(a[b++]),this._domNode=c,b},mount:function(){},unmount:function(){},patch:function(a){if(this!==a)switch(a.type){case Tb:a._domNode=this._domNode,this._patchChildren(a);break;case Vb:var b=a._getInstance();this.patch(b.getRootNode()),b.mount();break;case Wb:this.patch(a._getRootNode());break;default:Lb.replace(this,a)}},_patchChildren:function(a){var b=this._children,c=a._children;b!==c&&(c?Lb.updateText(this,c,!1):b&&Lb.removeText(this))}};var Zb="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)||function(a){setTimeout(a,1e3/60)},$b=[],_b=function(a){1===$b.push(a)&&Zb(oa)};qa.prototype={on:function(a,b){var c=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return(this._listeners[a]||(this._listeners[a]=[])).push({fn:b,fnCtx:c}),this},off:function(a,b){var c=arguments.length<=2||void 0===arguments[2]?null:arguments[2],d=this._listeners[a];if(d)for(var e=0,f=void 0;e<d.length;){if(f=d[e],f.fn===b&&f.fnCtx===c){d.splice(e,1);break}e++}return this},emit:function(a){var b=this._listeners[a];if(b){for(var c=0,d=arguments.length,e=Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];for(;c<b.length;){var g=b[c++],h=g.fn,i=g.fnCtx;h.call.apply(h,[i].concat(e))}}return this}},ra.prototype={getDomNode:function(){return this._childNode.getDomNode()},ns:function(a){return a&&(this._ns=a),this},ctx:function(a){return a&&this._childNode.ctx(a),this},renderToDom:function(){return this._childNode.renderToDom(this._ns)},adoptDom:function(a){this._childNode.adoptDom(a,0)},patch:function(a){this._childNode.patch(a._childNode)},mount:function(){this._childNode.mount()},unmount:function(){this._childNode.unmount()}};var ac=new yb,bc=0,cc=new qa;cc.getRootNodes=Ca,lb&&"undefined"!=typeof window&&(window.__vidom__hook__=cc);var dc={},ec=_a({onInit:function(){var a=this;this.onInput=function(b){var c=a.getAttrs();if(c.onInput&&c.onInput(b),c.onChange&&c.onChange(b),oa(),a.isMounted()){var d=a.getDomRef("control"),e=a.getAttrs(),f=e.value;"undefined"!=typeof f&&d.value!==f&&(d.value=f)}},this.onChange=function(b){var c=a.getAttrs(),d=a.getDomRef("control");if(c.onClick&&c.onClick(b),c.onChange&&c.onChange(b),oa(),a.isMounted()){var e=a.getAttrs(),f=e.name,g=e.type,h=e.checked;if("undefined"!=typeof h&&d.checked!==h)if("radio"===g&&f){for(var i=dc[f],j=i.length,k=0,l=void 0,m=void 0;k<j;)if(l=i[k++],m=l.getAttrs().checked,"undefined"!=typeof m){var n=l.getDomRef("control");m!==n.checked&&(n.checked=m)}}else d.checked=h}}},onRender:function(a){var b=void 0;return"file"===a.type?b=a:(b=pa(a,{onChange:null}),"checkbox"===a.type||"radio"===a.type?b.onChange=this.onChange:b.onInput=this.onInput),this.setDomRef("control",new fa("input").attrs(b))},onMount:function(a){var b=a.type,c=a.name;"radio"===b&&c&&ab(c,this)},onUpdate:function(a,b){var c=a.type,d=a.name,e=b.type,f=b.name;"radio"===e?c!==e?f&&bb(f,this):d!==f&&(f&&bb(f,this),d&&ab(d,this)):"radio"===c&&d&&ab(d,this)},onUnmount:function(){var a=this.getAttrs(),b=a.type,c=a.name;"radio"===b&&c&&bb(c,this)}}),fc=_a({onInit:function(){var a=this;this.onInput=function(b){var c=a.getAttrs();if(c.onInput&&c.onInput(b),c.onChange&&c.onChange(b),oa(),a.isMounted()){var d=a.getDomRef("control"),e=a.getAttrs(),f=e.value;"undefined"!=typeof f&&d.value!==f&&(d.value=f)}}},onRender:function(a){return this.setDomRef("control",new fa("textarea").attrs(pa(a,{onInput:this.onInput,onChange:null})))}}),gc=_a({onInit:function(){var a=this;this.onChange=function(b){var c=a.getAttrs();if(c.onChange&&c.onChange(b),oa(),a.isMounted()){var d=a.getDomRef("control"),e=a.getAttrs(),f=e.value;"undefined"!=typeof f&&d.value!==f&&(d.value=f)}}},onRender:function(a,b){return this.setDomRef("control",new fa("select").attrs(pa(a,{onChange:this.onChange})).children(b))}}),hc={input:ec,textarea:fc,select:gc},ic=function(a){return"<!--vidom-->"+a.renderToString()},jc=_a();return lb&&jb.info("You're using dev version of Vidom"),b.node=cb,b.createComponent=_a,b.renderToString=ic,b.normalizeChildren=fb,b.IS_DEBUG=lb,b.console=jb,b.Component=jc,b.mount=wa,b.mountToDom=xa,b.mountSync=ya,b.unmount=za,b.unmountFromDom=Aa,b.unmountSync=Ba,b.getMountedRootNodes=Ca,c.exports}),a.register("1",["3"],function(a,b){"use strict";var c,d,e,f;return{setters:[function(a){c=a}],execute:function(){d=c.mount,e=function(a){var b=a.name;return c.node("div").children(c.normalizeChildren(["Hello ",b]))},f=function(){d(document.getElementById("app-container"),e({name:"World!"}))},"complete"===document.readyState||"loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f)}}})})(function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a():a()});