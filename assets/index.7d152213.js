var D=Object.defineProperty;var a=(e,t)=>D(e,"name",{value:t,configurable:!0});import{g as T}from"./iframe.1d7af70f.js";function V(e,t){for(var n=0;n<t.length;n++){const u=t[n];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(u,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(V,"_mergeNamespaces");var S={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}a(G,"A");var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,O={};function y(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}a(y,"E");y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x(){}a(x,"F");x.prototype=y.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}a(b,"G");var E=b.prototype=new x;E.constructor=b;C(E,y.prototype);E.isPureReactComponent=!0;var g=Array.isArray,P=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var u,o={},c=null,s=null;if(t!=null)for(u in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(c=""+t.key),t)P.call(t,u)&&!I.hasOwnProperty(u)&&(o[u]=t[u]);var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){for(var i=Array(f),p=0;p<f;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(u in f=e.defaultProps,f)o[u]===void 0&&(o[u]=f[u]);return{$$typeof:d,type:e,key:c,ref:s,props:o,_owner:R.current}}a(A,"M");function J(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}a(J,"N");function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}a(k,"O");function K(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}a(K,"escape");var $=/\/+/g;function v(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K(""+e.key):t.toString(36)}a(v,"Q");function h(e,t,n,u,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case d:case F:s=!0}}if(s)return s=e,o=o(s),e=u===""?"."+v(s,0):u,g(o)?(n="",e!=null&&(n=e.replace($,"$&/")+"/"),h(o,t,n,"",function(p){return p})):o!=null&&(k(o)&&(o=J(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace($,"$&/")+"/")+e)),t.push(o)),1;if(s=0,u=u===""?".":u+":",g(e))for(var f=0;f<e.length;f++){c=e[f];var i=u+v(c,f);s+=h(c,t,n,i,o)}else if(i=G(e),typeof i=="function")for(e=i.call(e),f=0;!(c=e.next()).done;)c=c.value,i=u+v(c,f++),s+=h(c,t,n,i,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}a(h,"R");function _(e,t,n){if(e==null)return e;var u=[],o=0;return h(e,u,"","",function(c){return t.call(n,c,o++)}),u}a(_,"S");function Q(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}a(Q,"T");var l={current:null},m={transition:null},Y={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:R};r.Children={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=y;r.Fragment=U;r.Profiler=L;r.PureComponent=b;r.StrictMode=q;r.Suspense=B;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=C({},e.props),o=e.key,c=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,s=R.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)P.call(t,i)&&!I.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&f!==void 0?f[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){f=Array(i);for(var p=0;p<i;p++)f[p]=arguments[p+2];u.children=f}return{$$typeof:d,type:e.type,key:o,ref:c,props:u,_owner:s}};r.createContext=function(e){return e={$$typeof:N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e};r.createElement=A;r.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:z,render:e}};r.isValidElement=k;r.lazy=function(e){return{$$typeof:W,_payload:{_status:-1,_result:e},_init:Q}};r.memo=function(e,t){return{$$typeof:H,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.2.0";(function(e){e.exports=r})(S);const X=T(S.exports),te=V({__proto__:null,default:X},[S.exports]);export{X as R,te as a,S as r};
//# sourceMappingURL=index.7d152213.js.map
