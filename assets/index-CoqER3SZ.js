(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lv={exports:{}},yu={},cv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),fS=Symbol.for("react.portal"),dS=Symbol.for("react.fragment"),hS=Symbol.for("react.strict_mode"),pS=Symbol.for("react.profiler"),mS=Symbol.for("react.provider"),gS=Symbol.for("react.context"),xS=Symbol.for("react.forward_ref"),vS=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),_S=Symbol.for("react.lazy"),xm=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fv=Object.assign,dv={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=Uo.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}var Ip=Dp.prototype=new hv;Ip.constructor=Dp;fv(Ip,Uo.prototype);Ip.isPureReactComponent=!0;var vm=Array.isArray,pv=Object.prototype.hasOwnProperty,Np={current:null},mv={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pv.call(e,i)&&!mv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:el,type:t,key:s,ref:o,props:r,_owner:Np.current}}function MS(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function bS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ym=/\/+/g;function nf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bS(""+t.key):e.toString(36)}function lc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case fS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+nf(o,0):i,vm(r)?(n="",t!=null&&(n=t.replace(ym,"$&/")+"/"),lc(r,e,n,"",function(c){return c})):r!=null&&(Fp(r)&&(r=MS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ym,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+nf(s,a);o+=lc(s,e,n,l,r)}else if(l=SS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+nf(s,a++),o+=lc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var i=[],r=0;return lc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ES(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},cc={transition:null},wS={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:cc,ReactCurrentOwner:Np};function xv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Uo;qe.Fragment=dS;qe.Profiler=pS;qe.PureComponent=Dp;qe.StrictMode=hS;qe.Suspense=vS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;qe.act=xv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Np.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pv.call(e,l)&&!mv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:el,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:gS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mS,_context:t},t.Consumer=t};qe.createElement=gv;qe.createFactory=function(t){var e=gv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:xS,render:t}};qe.isValidElement=Fp;qe.lazy=function(t){return{$$typeof:_S,_payload:{_status:-1,_result:t},_init:ES}};qe.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=cc.transition;cc.transition={};try{t()}finally{cc.transition=e}};qe.unstable_act=xv;qe.useCallback=function(t,e){return dn.current.useCallback(t,e)};qe.useContext=function(t){return dn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return dn.current.useEffect(t,e)};qe.useId=function(){return dn.current.useId()};qe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return dn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};qe.useRef=function(t){return dn.current.useRef(t)};qe.useState=function(t){return dn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return dn.current.useTransition()};qe.version="18.3.1";cv.exports=qe;var Q=cv.exports;const cn=uS(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=Q,AS=Symbol.for("react.element"),CS=Symbol.for("react.fragment"),RS=Object.prototype.hasOwnProperty,PS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)RS.call(e,i)&&!LS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:AS,type:t,key:s,ref:o,props:r,_owner:PS.current}}yu.Fragment=CS;yu.jsx=vv;yu.jsxs=vv;lv.exports=yu;var E=lv.exports,Ad={},yv={exports:{}},On={},_v={exports:{}},Sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var j=N.length;N.push(z);e:for(;0<j;){var ee=j-1>>>1,fe=N[ee];if(0<r(fe,z))N[ee]=z,N[j]=fe,j=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var z=N[0],j=N.pop();if(j!==z){N[0]=j;e:for(var ee=0,fe=N.length,Ie=fe>>>1;ee<Ie;){var Ue=2*(ee+1)-1,Ve=N[Ue],Y=Ue+1,Z=N[Y];if(0>r(Ve,j))Y<fe&&0>r(Z,Ve)?(N[ee]=Z,N[Y]=j,ee=Y):(N[ee]=Ve,N[Ue]=j,ee=Ue);else if(Y<fe&&0>r(Z,j))N[ee]=Z,N[Y]=j,ee=Y;else break e}}return z}function r(N,z){var j=N.sortIndex-z.sortIndex;return j!==0?j:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=N)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _(N){if(v=!1,x(N),!m)if(n(l)!==null)m=!0,G(T);else{var z=n(c);z!==null&&K(_,z.startTime-N)}}function T(N,z){m=!1,v&&(v=!1,h(R),R=-1),p=!0;var j=d;try{for(x(z),f=n(l);f!==null&&(!(f.expirationTime>z)||N&&!L());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,d=f.priorityLevel;var fe=ee(f.expirationTime<=z);z=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&i(l),x(z)}else i(l);f=n(l)}if(f!==null)var Ie=!0;else{var Ue=n(c);Ue!==null&&K(_,Ue.startTime-z),Ie=!1}return Ie}finally{f=null,d=j,p=!1}}var S=!1,A=null,R=-1,b=5,M=-1;function L(){return!(t.unstable_now()-M<b)}function F(){if(A!==null){var N=t.unstable_now();M=N;var z=!0;try{z=A(!0,N)}finally{z?O():(S=!1,A=null)}}else S=!1}var O;if(typeof y=="function")O=function(){y(F)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=F,O=function(){H.postMessage(null)}}else O=function(){g(F,0)};function G(N){A=N,S||(S=!0,O())}function K(N,z){R=g(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,G(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var j=d;d=z;try{return N()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=d;d=N;try{return z()}finally{d=j}},t.unstable_scheduleCallback=function(N,z,j){var ee=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ee+j:ee):j=ee,N){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=j+fe,N={id:u++,callback:z,priorityLevel:N,startTime:j,expirationTime:fe,sortIndex:-1},j>ee?(N.sortIndex=j,e(c,N),n(l)===null&&N===n(c)&&(v?(h(R),R=-1):v=!0,K(_,j-ee))):(N.sortIndex=fe,e(l,N),m||p||(m=!0,G(T))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var z=d;return function(){var j=d;d=z;try{return N.apply(this,arguments)}finally{d=j}}}})(Sv);_v.exports=Sv;var DS=_v.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=Q,Fn=DS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,Ca={};function Es(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,NS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},Sm={};function FS(t){return Cd.call(Sm,t)?!0:Cd.call(_m,t)?!1:NS.test(t)?Sm[t]=!0:(_m[t]=!0,!1)}function US(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OS(t,e,n,i){if(e===null||typeof e>"u"||US(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Op(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,Op);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,Op);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,Op);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OS(e,n,r,i)&&(n=null),i||r===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),js=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,rf;function oa(t){if(rf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rf=e&&e[1]||""}return`
`+rf+t}var sf=!1;function of(t,e){if(!t||sf)return"";sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function kS(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=of(t.type,!1),t;case 11:return t=of(t.type.render,!1),t;case 1:return t=of(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case js:return"Portal";case Rd:return"Profiler";case Bp:return"StrictMode";case Pd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case bv:return(t._context.displayName||"Context")+".Provider";case zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function BS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zS(t){var e=Tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yl(t){t._valueTracker||(t._valueTracker=zS(t))}function Av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Tv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Id(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function Nd(t,e){Cv(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Em(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fd(t,e,n){(e!=="number"||Dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(aa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Rv(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,Lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VS=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){VS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function Dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var GS=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(GS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,co=null,uo=null;function Am(t){if(t=il(t)){if(typeof Vd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Eu(e),Vd(t.stateNode,t.type,e))}}function Nv(t){co?uo?uo.push(t):uo=[t]:co=t}function Fv(){if(co){var t=co,e=uo;if(uo=co=null,Am(t),e)for(t=0;t<e.length;t++)Am(e[t])}}function Uv(t,e){return t(e)}function Ov(){}var af=!1;function kv(t,e,n){if(af)return t(e,n);af=!0;try{return Uv(t,e,n)}finally{af=!1,(co!==null||uo!==null)&&(Ov(),Fv())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Gd=!1;if(Yi)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Gd=!1}function HS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var pa=!1,Ic=null,Nc=!1,Hd=null,WS={onError:function(t){pa=!0,Ic=t}};function jS(t,e,n,i,r,s,o,a,l){pa=!1,Ic=null,HS.apply(WS,arguments)}function XS(t,e,n,i,r,s,o,a,l){if(jS.apply(this,arguments),pa){if(pa){var c=Ic;pa=!1,Ic=null}else throw Error(re(198));Nc||(Nc=!0,Hd=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(t){if(ws(t)!==t)throw Error(re(188))}function $S(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cm(r),t;if(s===i)return Cm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function zv(t){return t=$S(t),t!==null?Vv(t):null}function Vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vv(t);if(e!==null)return e;t=t.sibling}return null}var Gv=Fn.unstable_scheduleCallback,Rm=Fn.unstable_cancelCallback,YS=Fn.unstable_shouldYield,qS=Fn.unstable_requestPaint,Lt=Fn.unstable_now,KS=Fn.unstable_getCurrentPriorityLevel,Hp=Fn.unstable_ImmediatePriority,Hv=Fn.unstable_UserBlockingPriority,Fc=Fn.unstable_NormalPriority,ZS=Fn.unstable_LowPriority,Wv=Fn.unstable_IdlePriority,_u=null,Mi=null;function QS(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:tM,JS=Math.log,eM=Math.LN2;function tM(t){return t>>>=0,t===0?32:31-(JS(t)/eM|0)|0}var Sl=64,Ml=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=la(a):(s&=o,s!==0&&(i=la(s)))}else o=n&~r,o!==0?i=la(o):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function nM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=nM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jv(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function lf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function rM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $v,jp,Yv,qv,Kv,jd=!1,bl=[],Sr=null,Mr=null,br=null,La=new Map,Da=new Map,mr=[],sM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=il(e),e!==null&&jp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function oM(t,e,n,i,r){switch(e){case"focusin":return Sr=Xo(Sr,t,e,n,i,r),!0;case"dragenter":return Mr=Xo(Mr,t,e,n,i,r),!0;case"mouseover":return br=Xo(br,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Xo(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Xo(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function Zv(t){var e=ss(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Bv(n),e!==null){t.blockedOn=e,Kv(t.priority,function(){Yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=il(n),e!==null&&jp(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){uc(t)&&n.delete(e)}function aM(){jd=!1,Sr!==null&&uc(Sr)&&(Sr=null),Mr!==null&&uc(Mr)&&(Mr=null),br!==null&&uc(br)&&(br=null),La.forEach(Lm),Da.forEach(Lm)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,aM)))}function Ia(t){function e(r){return $o(r,t)}if(0<bl.length){$o(bl[0],t);for(var n=1;n<bl.length;n++){var i=bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&$o(Sr,t),Mr!==null&&$o(Mr,t),br!==null&&$o(br,t),La.forEach(e),Da.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)Zv(n),n.blockedOn===null&&mr.shift()}var fo=nr.ReactCurrentBatchConfig,Oc=!0;function lM(t,e,n,i){var r=ot,s=fo.transition;fo.transition=null;try{ot=1,Xp(t,e,n,i)}finally{ot=r,fo.transition=s}}function cM(t,e,n,i){var r=ot,s=fo.transition;fo.transition=null;try{ot=4,Xp(t,e,n,i)}finally{ot=r,fo.transition=s}}function Xp(t,e,n,i){if(Oc){var r=Xd(t,e,n,i);if(r===null)vf(t,e,i,kc,n),Pm(t,i);else if(oM(r,t,e,n,i))i.stopPropagation();else if(Pm(t,i),e&4&&-1<sM.indexOf(t)){for(;r!==null;){var s=il(r);if(s!==null&&$v(s),s=Xd(t,e,n,i),s===null&&vf(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else vf(t,e,i,null,n)}}var kc=null;function Xd(t,e,n,i){if(kc=null,t=Gp(i),t=ss(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function Qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KS()){case Hp:return 1;case Hv:return 4;case Fc:case ZS:return 16;case Wv:return 536870912;default:return 16}default:return 16}}var vr=null,$p=null,fc=null;function Jv(){if(fc)return fc;var t,e=$p,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fc=r.slice(t,1<i?1-i:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Dm(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Dm,this.isPropagationStopped=Dm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=kn(Oo),nl=At({},Oo,{view:0,detail:0}),uM=kn(nl),cf,uf,Yo,Su=At({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(cf=t.screenX-Yo.screenX,uf=t.screenY-Yo.screenY):uf=cf=0,Yo=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:uf}}),Im=kn(Su),fM=At({},Su,{dataTransfer:0}),dM=kn(fM),hM=At({},nl,{relatedTarget:0}),ff=kn(hM),pM=At({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),mM=kn(pM),gM=At({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xM=kn(gM),vM=At({},Oo,{data:0}),Nm=kn(vM),yM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SM[t])?!!e[t]:!1}function qp(){return MM}var bM=At({},nl,{key:function(t){if(t.key){var e=yM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_M[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qp,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),EM=kn(bM),wM=At({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=kn(wM),TM=At({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qp}),AM=kn(TM),CM=At({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),RM=kn(CM),PM=At({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LM=kn(PM),DM=[9,13,27,32],Kp=Yi&&"CompositionEvent"in window,ma=null;Yi&&"documentMode"in document&&(ma=document.documentMode);var IM=Yi&&"TextEvent"in window&&!ma,ey=Yi&&(!Kp||ma&&8<ma&&11>=ma),Um=" ",Om=!1;function ty(t,e){switch(t){case"keyup":return DM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function NM(t,e){switch(t){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(Om=!0,Um);case"textInput":return t=e.data,t===Um&&Om?null:t;default:return null}}function FM(t,e){if($s)return t==="compositionend"||!Kp&&ty(t,e)?(t=Jv(),fc=$p=vr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UM[t.type]:e==="textarea"}function iy(t,e,n,i){Nv(i),e=Bc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Na=null;function OM(t){py(t,0)}function Mu(t){var e=Ks(t);if(Av(e))return t}function kM(t,e){if(t==="change")return e}var ry=!1;if(Yi){var df;if(Yi){var hf="oninput"in document;if(!hf){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),hf=typeof Bm.oninput=="function"}df=hf}else df=!1;ry=df&&(!document.documentMode||9<document.documentMode)}function zm(){ga&&(ga.detachEvent("onpropertychange",sy),Na=ga=null)}function sy(t){if(t.propertyName==="value"&&Mu(Na)){var e=[];iy(e,Na,t,Gp(t)),kv(OM,e)}}function BM(t,e,n){t==="focusin"?(zm(),ga=e,Na=n,ga.attachEvent("onpropertychange",sy)):t==="focusout"&&zm()}function zM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Na)}function VM(t,e){if(t==="click")return Mu(e)}function GM(t,e){if(t==="input"||t==="change")return Mu(e)}function HM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:HM;function Fa(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Vm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vm(n)}}function oy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ay(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dc(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WM(t){var e=ay(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oy(n.ownerDocument.documentElement,n)){if(i!==null&&Zp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gm(n,s);var o=Gm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jM=Yi&&"documentMode"in document&&11>=document.documentMode,Ys=null,$d=null,xa=null,Yd=!1;function Hm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Ys==null||Ys!==Dc(i)||(i=Ys,"selectionStart"in i&&Zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Fa(xa,i)||(xa=i,i=Bc($d,"onSelect"),0<i.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},pf={},ly={};Yi&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function bu(t){if(pf[t])return pf[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ly)return pf[t]=e[n];return t}var cy=bu("animationend"),uy=bu("animationiteration"),fy=bu("animationstart"),dy=bu("transitionend"),hy=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){hy.set(t,e),Es(e,[t])}for(var mf=0;mf<Wm.length;mf++){var gf=Wm[mf],XM=gf.toLowerCase(),$M=gf[0].toUpperCase()+gf.slice(1);Or(XM,"on"+$M)}Or(cy,"onAnimationEnd");Or(uy,"onAnimationIteration");Or(fy,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(dy,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function jm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,XS(i,e,void 0,t),t.currentTarget=null}function py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;jm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;jm(r,a,c),s=l}}}if(Nc)throw t=Hd,Nc=!1,Hd=null,t}function xt(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(my(e,t,2,!1),n.add(i))}function xf(t,e,n){var i=0;e&&(i|=4),my(n,t,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[Tl]){t[Tl]=!0,Mv.forEach(function(n){n!=="selectionchange"&&(YM.has(n)||xf(n,!1,t),xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,xf("selectionchange",!1,e))}}function my(t,e,n,i){switch(Qv(e)){case 1:var r=lM;break;case 4:r=cM;break;default:r=Xp}n=r.bind(null,e,n,t),r=void 0,!Gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}kv(function(){var c=s,u=Gp(n),f=[];e:{var d=hy.get(t);if(d!==void 0){var p=Yp,m=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":p=EM;break;case"focusin":m="focus",p=ff;break;case"focusout":m="blur",p=ff;break;case"beforeblur":case"afterblur":p=ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=AM;break;case cy:case uy:case fy:p=mM;break;case dy:p=RM;break;case"scroll":p=uM;break;case"wheel":p=LM;break;case"copy":case"cut":case"paste":p=xM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fm}var v=(e&4)!==0,g=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var y=c,x;y!==null;){x=y;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,h!==null&&(_=Pa(y,h),_!=null&&v.push(Oa(y,_,x)))),g)break;y=y.return}0<v.length&&(d=new p(d,m,null,n,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==zd&&(m=n.relatedTarget||n.fromElement)&&(ss(m)||m[qi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?ss(m):null,m!==null&&(g=ws(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=Im,_="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=Fm,_="onPointerLeave",h="onPointerEnter",y="pointer"),g=p==null?d:Ks(p),x=m==null?d:Ks(m),d=new v(_,y+"leave",p,n,u),d.target=g,d.relatedTarget=x,_=null,ss(u)===c&&(v=new v(h,y+"enter",m,n,u),v.target=x,v.relatedTarget=g,_=v),g=_,p&&m)t:{for(v=p,h=m,y=0,x=v;x;x=Rs(x))y++;for(x=0,_=h;_;_=Rs(_))x++;for(;0<y-x;)v=Rs(v),y--;for(;0<x-y;)h=Rs(h),x--;for(;y--;){if(v===h||h!==null&&v===h.alternate)break t;v=Rs(v),h=Rs(h)}v=null}else v=null;p!==null&&Xm(f,d,p,v,!1),m!==null&&g!==null&&Xm(f,g,m,v,!0)}}e:{if(d=c?Ks(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=kM;else if(km(d))if(ry)T=GM;else{T=zM;var S=BM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=VM);if(T&&(T=T(t,c))){iy(f,T,n,u);break e}S&&S(t,d,c),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Fd(d,"number",d.value)}switch(S=c?Ks(c):window,t){case"focusin":(km(S)||S.contentEditable==="true")&&(Ys=S,$d=c,xa=null);break;case"focusout":xa=$d=Ys=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Hm(f,n,u);break;case"selectionchange":if(jM)break;case"keydown":case"keyup":Hm(f,n,u)}var A;if(Kp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else $s?ty(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ey&&n.locale!=="ko"&&($s||R!=="onCompositionStart"?R==="onCompositionEnd"&&$s&&(A=Jv()):(vr=u,$p="value"in vr?vr.value:vr.textContent,$s=!0)),S=Bc(c,R),0<S.length&&(R=new Nm(R,t,null,n,u),f.push({event:R,listeners:S}),A?R.data=A:(A=ny(n),A!==null&&(R.data=A)))),(A=IM?NM(t,n):FM(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new Nm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}py(f,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=Pa(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pa(n,s),l!=null&&o.unshift(Oa(n,l,a))):r||(l=Pa(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qM=/\r\n?/g,KM=/\u0000|\uFFFD/g;function $m(t){return(typeof t=="string"?t:""+t).replace(qM,`
`).replace(KM,"")}function Al(t,e,n){if(e=$m(e),$m(t)!==e&&n)throw Error(re(425))}function zc(){}var qd=null,Kd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(t){return Ym.resolve(null).then(t).catch(JM)}:Qd;function JM(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ia(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),_i="__reactFiber$"+ko,ka="__reactProps$"+ko,qi="__reactContainer$"+ko,Jd="__reactEvents$"+ko,eb="__reactListeners$"+ko,tb="__reactHandles$"+ko;function ss(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qm(t);t!==null;){if(n=t[_i])return n;t=qm(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[_i]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Eu(t){return t[ka]||null}var eh=[],Zs=-1;function kr(t){return{current:t}}function yt(t){0>Zs||(t.current=eh[Zs],eh[Zs]=null,Zs--)}function pt(t,e){Zs++,eh[Zs]=t.current,t.current=e}var Ir={},rn=kr(Ir),_n=kr(!1),xs=Ir;function vo(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Vc(){yt(_n),yt(rn)}function Km(t,e,n){if(rn.current!==Ir)throw Error(re(168));pt(rn,e),pt(_n,n)}function gy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,BS(t)||"Unknown",r));return At({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,xs=rn.current,pt(rn,t),pt(_n,_n.current),!0}function Zm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=gy(t,e,xs),i.__reactInternalMemoizedMergedChildContext=t,yt(_n),yt(rn),pt(rn,t)):yt(_n),pt(_n,n)}var Ui=null,wu=!1,_f=!1;function xy(t){Ui===null?Ui=[t]:Ui.push(t)}function nb(t){wu=!0,xy(t)}function Br(){if(!_f&&Ui!==null){_f=!0;var t=0,e=ot;try{var n=Ui;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,wu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),Gv(Hp,Br),r}finally{ot=e,_f=!1}}return null}var Qs=[],Js=0,Hc=null,Wc=0,Wn=[],jn=0,vs=null,ki=1,Bi="";function Zr(t,e){Qs[Js++]=Wc,Qs[Js++]=Hc,Hc=t,Wc=e}function vy(t,e,n){Wn[jn++]=ki,Wn[jn++]=Bi,Wn[jn++]=vs,vs=t;var i=ki;t=Bi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-ui(e)+r|n<<r|i,Bi=s+t}else ki=1<<s|n<<r|i,Bi=t}function Qp(t){t.return!==null&&(Zr(t,1),vy(t,1,0))}function Jp(t){for(;t===Hc;)Hc=Qs[--Js],Qs[Js]=null,Wc=Qs[--Js],Qs[Js]=null;for(;t===vs;)vs=Wn[--jn],Wn[jn]=null,Bi=Wn[--jn],Wn[jn]=null,ki=Wn[--jn],Wn[jn]=null}var Dn=null,Ln=null,_t=!1,si=null;function yy(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vs!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(_t){var e=Ln;if(e){var n=e;if(!Qm(t,e)){if(th(t))throw Error(re(418));e=Er(n.nextSibling);var i=Dn;e&&Qm(t,e)?yy(i,n):(t.flags=t.flags&-4097|2,_t=!1,Dn=t)}}else{if(th(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Dn=t}}}function Jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Cl(t){if(t!==Dn)return!1;if(!_t)return Jm(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=Ln)){if(th(t))throw _y(),Error(re(418));for(;e;)yy(t,e),e=Er(e.nextSibling)}if(Jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?Er(t.stateNode.nextSibling):null;return!0}function _y(){for(var t=Ln;t;)t=Er(t.nextSibling)}function yo(){Ln=Dn=null,_t=!1}function e0(t){si===null?si=[t]:si.push(t)}var ib=nr.ReactCurrentBatchConfig;function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Rl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function eg(t){var e=t._init;return e(t._payload)}function Sy(t){function e(h,y){if(t){var x=h.deletions;x===null?(h.deletions=[y],h.flags|=16):x.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=Cr(h,y),h.index=0,h.sibling=null,h}function s(h,y,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<y?(h.flags|=2,y):x):(h.flags|=2,y)):(h.flags|=1048576,y)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,y,x,_){return y===null||y.tag!==6?(y=Af(x,h.mode,_),y.return=h,y):(y=r(y,x),y.return=h,y)}function l(h,y,x,_){var T=x.type;return T===Xs?u(h,y,x.props.children,_,x.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&eg(T)===y.type)?(_=r(y,x.props),_.ref=qo(h,y,x),_.return=h,_):(_=yc(x.type,x.key,x.props,null,h.mode,_),_.ref=qo(h,y,x),_.return=h,_)}function c(h,y,x,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Cf(x,h.mode,_),y.return=h,y):(y=r(y,x.children||[]),y.return=h,y)}function u(h,y,x,_,T){return y===null||y.tag!==7?(y=ds(x,h.mode,_,T),y.return=h,y):(y=r(y,x),y.return=h,y)}function f(h,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Af(""+y,h.mode,x),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vl:return x=yc(y.type,y.key,y.props,null,h.mode,x),x.ref=qo(h,null,y),x.return=h,x;case js:return y=Cf(y,h.mode,x),y.return=h,y;case dr:var _=y._init;return f(h,_(y._payload),x)}if(aa(y)||Wo(y))return y=ds(y,h.mode,x,null),y.return=h,y;Rl(h,y)}return null}function d(h,y,x,_){var T=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,y,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:return x.key===T?l(h,y,x,_):null;case js:return x.key===T?c(h,y,x,_):null;case dr:return T=x._init,d(h,y,T(x._payload),_)}if(aa(x)||Wo(x))return T!==null?null:u(h,y,x,_,null);Rl(h,x)}return null}function p(h,y,x,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(x)||null,a(y,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vl:return h=h.get(_.key===null?x:_.key)||null,l(y,h,_,T);case js:return h=h.get(_.key===null?x:_.key)||null,c(y,h,_,T);case dr:var S=_._init;return p(h,y,x,S(_._payload),T)}if(aa(_)||Wo(_))return h=h.get(x)||null,u(y,h,_,T,null);Rl(y,_)}return null}function m(h,y,x,_){for(var T=null,S=null,A=y,R=y=0,b=null;A!==null&&R<x.length;R++){A.index>R?(b=A,A=null):b=A.sibling;var M=d(h,A,x[R],_);if(M===null){A===null&&(A=b);break}t&&A&&M.alternate===null&&e(h,A),y=s(M,y,R),S===null?T=M:S.sibling=M,S=M,A=b}if(R===x.length)return n(h,A),_t&&Zr(h,R),T;if(A===null){for(;R<x.length;R++)A=f(h,x[R],_),A!==null&&(y=s(A,y,R),S===null?T=A:S.sibling=A,S=A);return _t&&Zr(h,R),T}for(A=i(h,A);R<x.length;R++)b=p(A,h,R,x[R],_),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?R:b.key),y=s(b,y,R),S===null?T=b:S.sibling=b,S=b);return t&&A.forEach(function(L){return e(h,L)}),_t&&Zr(h,R),T}function v(h,y,x,_){var T=Wo(x);if(typeof T!="function")throw Error(re(150));if(x=T.call(x),x==null)throw Error(re(151));for(var S=T=null,A=y,R=y=0,b=null,M=x.next();A!==null&&!M.done;R++,M=x.next()){A.index>R?(b=A,A=null):b=A.sibling;var L=d(h,A,M.value,_);if(L===null){A===null&&(A=b);break}t&&A&&L.alternate===null&&e(h,A),y=s(L,y,R),S===null?T=L:S.sibling=L,S=L,A=b}if(M.done)return n(h,A),_t&&Zr(h,R),T;if(A===null){for(;!M.done;R++,M=x.next())M=f(h,M.value,_),M!==null&&(y=s(M,y,R),S===null?T=M:S.sibling=M,S=M);return _t&&Zr(h,R),T}for(A=i(h,A);!M.done;R++,M=x.next())M=p(A,h,R,M.value,_),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),y=s(M,y,R),S===null?T=M:S.sibling=M,S=M);return t&&A.forEach(function(F){return e(h,F)}),_t&&Zr(h,R),T}function g(h,y,x,_){if(typeof x=="object"&&x!==null&&x.type===Xs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:e:{for(var T=x.key,S=y;S!==null;){if(S.key===T){if(T=x.type,T===Xs){if(S.tag===7){n(h,S.sibling),y=r(S,x.props.children),y.return=h,h=y;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&eg(T)===S.type){n(h,S.sibling),y=r(S,x.props),y.ref=qo(h,S,x),y.return=h,h=y;break e}n(h,S);break}else e(h,S);S=S.sibling}x.type===Xs?(y=ds(x.props.children,h.mode,_,x.key),y.return=h,h=y):(_=yc(x.type,x.key,x.props,null,h.mode,_),_.ref=qo(h,y,x),_.return=h,h=_)}return o(h);case js:e:{for(S=x.key;y!==null;){if(y.key===S)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(h,y.sibling),y=r(y,x.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Cf(x,h.mode,_),y.return=h,h=y}return o(h);case dr:return S=x._init,g(h,y,S(x._payload),_)}if(aa(x))return m(h,y,x,_);if(Wo(x))return v(h,y,x,_);Rl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,x),y.return=h,h=y):(n(h,y),y=Af(x,h.mode,_),y.return=h,h=y),o(h)):n(h,y)}return g}var _o=Sy(!0),My=Sy(!1),jc=kr(null),Xc=null,eo=null,t0=null;function n0(){t0=eo=Xc=null}function i0(t){var e=jc.current;yt(jc),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){Xc=t,t0=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(t0!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(Xc===null)throw Error(re(308));eo=t,Xc.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var os=null;function r0(t){os===null?os=[t]:os.push(t)}function by(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,r0(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function s0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,r0(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}function tg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(p,f,d):m,d==null)break e;f=At({},f,d);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=f}}function ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var rl={},bi=kr(rl),Ba=kr(rl),za=kr(rl);function as(t){if(t===rl)throw Error(re(174));return t}function o0(t,e){switch(pt(za,e),pt(Ba,t),pt(bi,rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}yt(bi),pt(bi,e)}function So(){yt(bi),yt(Ba),yt(za)}function wy(t){as(za.current);var e=as(bi.current),n=Od(e,t.type);e!==n&&(pt(Ba,t),pt(bi,n))}function a0(t){Ba.current===t&&(yt(bi),yt(Ba))}var Et=kr(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sf=[];function l0(){for(var t=0;t<Sf.length;t++)Sf[t]._workInProgressVersionPrimary=null;Sf.length=0}var pc=nr.ReactCurrentDispatcher,Mf=nr.ReactCurrentBatchConfig,ys=0,Tt=null,Bt=null,jt=null,qc=!1,va=!1,Va=0,rb=0;function Zt(){throw Error(re(321))}function c0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function u0(t,e,n,i,r,s){if(ys=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pc.current=t===null||t.memoizedState===null?lb:cb,t=n(i,r),va){s=0;do{if(va=!1,Va=0,25<=s)throw Error(re(301));s+=1,jt=Bt=null,e.updateQueue=null,pc.current=ub,t=n(i,r)}while(va)}if(pc.current=Kc,e=Bt!==null&&Bt.next!==null,ys=0,jt=Bt=Tt=null,qc=!1,e)throw Error(re(300));return t}function f0(){var t=Va!==0;return Va=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Tt.memoizedState=jt=t:jt=jt.next=t,jt}function Kn(){if(Bt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?Tt.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(re(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?Tt.memoizedState=jt=t:jt=jt.next=t}return jt}function Ga(t,e){return typeof e=="function"?e(t):e}function bf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ys&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=u,_s|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,_s|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ty(){}function Ay(t,e){var n=Tt,i=Kn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,d0(Py.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,Ry.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(re(349));ys&30||Cy(n,e,r)}return r}function Cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ry(t,e,n,i){e.value=n,e.getSnapshot=i,Ly(e)&&Dy(t)}function Py(t,e,n){return n(function(){Ly(e)&&Dy(t)})}function Ly(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Dy(t){var e=Ki(t,1);e!==null&&fi(e,t,1,-1)}function ig(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=ab.bind(null,Tt,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Iy(){return Kn().memoizedState}function mc(t,e,n,i){var r=xi();Tt.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function Tu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&c0(i,o.deps)){r.memoizedState=Ha(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function rg(t,e){return mc(8390656,8,t,e)}function d0(t,e){return Tu(2048,8,t,e)}function Ny(t,e){return Tu(4,2,t,e)}function Fy(t,e){return Tu(4,4,t,e)}function Uy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Oy(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,Uy.bind(null,e,t),n)}function h0(){}function ky(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&c0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function By(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&c0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zy(t,e,n){return ys&21?(hi(n,e)||(n=jv(),Tt.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function sb(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Mf.transition;Mf.transition={};try{t(!1),e()}finally{ot=n,Mf.transition=i}}function Vy(){return Kn().memoizedState}function ob(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gy(t))Hy(e,n);else if(n=by(t,e,n,i),n!==null){var r=un();fi(n,t,i,r),Wy(n,e,i)}}function ab(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gy(t))Hy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,r0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=by(t,e,r,i),n!==null&&(r=un(),fi(n,t,i,r),Wy(n,e,i))}}function Gy(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Hy(t,e){va=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wp(t,n)}}var Kc={readContext:qn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},lb={readContext:qn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mc(4194308,4,Uy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return mc(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ob.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:ig,useDebugValue:h0,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=ig(!1),e=t[0];return t=sb.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=xi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),$t===null)throw Error(re(349));ys&30||Cy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rg(Py.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,Ry.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=$t.identifierPrefix;if(_t){var n=Bi,i=ki;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cb={readContext:qn,useCallback:ky,useContext:qn,useEffect:d0,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Fy,useMemo:By,useReducer:bf,useRef:Iy,useState:function(){return bf(Ga)},useDebugValue:h0,useDeferredValue:function(t){var e=Kn();return zy(e,Bt.memoizedState,t)},useTransition:function(){var t=bf(Ga)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Ay,useId:Vy,unstable_isNewReconciler:!1},ub={readContext:qn,useCallback:ky,useContext:qn,useEffect:d0,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Fy,useMemo:By,useReducer:Ef,useRef:Iy,useState:function(){return Ef(Ga)},useDebugValue:h0,useDeferredValue:function(t){var e=Kn();return Bt===null?e.memoizedState=t:zy(e,Bt.memoizedState,t)},useTransition:function(){var t=Ef(Ga)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Ay,useId:Vy,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Ar(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(fi(e,t,r,i),hc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Ar(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(fi(e,t,r,i),hc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Ar(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(fi(e,t,i,n),hc(e,t,i))}};function sg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function jy(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Sn(e)?xs:rn.current,i=e.contextTypes,s=(i=i!=null)?vo(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function og(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},s0(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Sn(e)?xs:rn.current,r.context=vo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Au.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=kS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fb=typeof WeakMap=="function"?WeakMap:Map;function Xy(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,gh=i),oh(t,e)},n}function $y(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ag(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wb.bind(null,t,e,n),e.then(t,t))}function lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var db=nr.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?My(e,null,n,i):_o(e,t.child,n,i)}function ug(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=u0(t,e,n,i,s,r),n=f0(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(_t&&n&&Qp(e),e.flags|=1,ln(t,e,i,r),e.child)}function fg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!S0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yy(t,e,s,i,r)):(t=yc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Yy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return ah(t,e,n,i,r)}function qy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(no,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(no,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(no,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(no,Pn),Pn|=i;return ln(t,e,r,n),e.child}function Ky(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,i,r){var s=Sn(n)?xs:rn.current;return s=vo(e,s),ho(e,r),n=u0(t,e,n,i,s,r),i=f0(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(_t&&i&&Qp(e),e.flags|=1,ln(t,e,n,r),e.child)}function dg(t,e,n,i,r){if(Sn(n)){var s=!0;Gc(e)}else s=!1;if(ho(e,r),e.stateNode===null)gc(t,e),jy(e,n,i),sh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Sn(n)?xs:rn.current,c=vo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&og(e,o,i,c),hr=!1;var d=e.memoizedState;o.state=d,$c(e,i,o,r),l=e.memoizedState,a!==i||d!==l||_n.current||hr?(typeof u=="function"&&(rh(e,n,u,i),l=e.memoizedState),(a=hr||sg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ey(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Sn(n)?xs:rn.current,l=vo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&og(e,o,i,l),hr=!1,d=e.memoizedState,o.state=d,$c(e,i,o,r);var m=e.memoizedState;a!==f||d!==m||_n.current||hr?(typeof p=="function"&&(rh(e,n,p,i),m=e.memoizedState),(c=hr||sg(e,n,c,i,d,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return lh(t,e,n,i,s,r)}function lh(t,e,n,i,r,s){Ky(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zm(e,n,!1),Zi(t,e,s);i=e.stateNode,db.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&Zm(e,n,!0),e.child}function Zy(t){var e=t.stateNode;e.pendingContext?Km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(t,e.context,!1),o0(t,e.containerInfo)}function hg(t,e,n,i,r){return yo(),e0(r),e.flags|=256,ln(t,e,n,i),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qy(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Et,r&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,i,0,null),t=ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uh(n),e.memoizedState=ch,t):p0(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hb(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ds(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ch,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function p0(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,i){return i!==null&&e0(i),_o(e,t.child,null,n),t=p0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hb(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wf(Error(re(422))),Pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pu({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=uh(o),e.memoizedState=ch,s);if(!(e.mode&1))return Pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=wf(s,i,void 0),Pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),fi(i,t,r,-1))}return _0(),i=wf(Error(re(421))),Pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Er(r.nextSibling),Dn=e,_t=!0,si=null,t!==null&&(Wn[jn++]=ki,Wn[jn++]=Bi,Wn[jn++]=vs,ki=t.id,Bi=t.overflow,vs=e),e=p0(e,i.children),e.flags|=4096,e)}function pg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ih(t.return,e,n)}function Tf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,n,e);else if(t.tag===19)pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tf(e,!0,n,null,s);break;case"together":Tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pb(t,e,n){switch(e.tag){case 3:Zy(e),yo();break;case 5:wy(e);break;case 1:Sn(e.type)&&Gc(e);break;case 4:o0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Qy(t,e,n):(pt(Et,Et.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);pt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,qy(t,e,n)}return Zi(t,e,n)}var e_,fh,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};t_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,as(bi.current);var s=null;switch(n){case"input":r=Id(t,r),i=Id(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Ud(t,r),i=Ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ko(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mb(t,e,n){var i=e.pendingProps;switch(Jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Vc(),Qt(e),null;case 3:return i=e.stateNode,So(),yt(_n),yt(rn),l0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(yh(si),si=null))),fh(t,e),Qt(e),null;case 5:a0(e);var r=as(za.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Qt(e),null}if(t=as(bi.current),Cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)xt(ca[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":bm(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":wm(i,s),xt("invalid",i)}kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(n){case"input":yl(i),Em(i,s,!0);break;case"textarea":yl(i),Tm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_i]=e,t[ka]=i,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)xt(ca[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":bm(t,i),r=Id(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),xt("invalid",t);break;case"textarea":wm(t,i),r=Ud(t,i),xt("invalid",t);break;default:r=i}kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Iv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&kp(t,s,l,o))}switch(n){case"input":yl(t),Em(t,i,!1);break;case"textarea":yl(t),Tm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=as(za.current),as(bi.current),Cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Qt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Ln!==null&&e.mode&1&&!(e.flags&128))_y(),yo(),e.flags|=98560,s=!1;else if(s=Cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[_i]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else si!==null&&(yh(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?zt===0&&(zt=3):_0())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return So(),fh(t,e),t===null&&Ua(e.stateNode.containerInfo),Qt(e),null;case 10:return i0(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Vc(),Qt(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ko(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,Ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>bo&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Qt(e),null}else 2*Lt()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Et.current,pt(Et,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return y0(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function gb(t,e){switch(Jp(e),e.tag){case 1:return Sn(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),yt(_n),yt(rn),l0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return a0(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return So(),null;case 10:return i0(e.type._context),null;case 22:case 23:return y0(),null;case 24:return null;default:return null}}var Ll=!1,nn=!1,xb=typeof WeakSet=="function"?WeakSet:Set,ye=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function dh(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var mg=!1;function vb(t,e){if(qd=Oc,t=ay(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Oc=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:ii(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(_){Pt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return m=mg,mg=!1,m}function ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dh(e,n,s)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[ka],delete e[Jd],delete e[eb],delete e[tb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Yt=null,ri=!1;function ir(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:nn||to(n,e);case 6:var i=Yt,r=ri;Yt=null,ir(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),Ia(t)):yf(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,ir(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dh(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!nn&&(to(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,ir(t,e,n),nn=i):ir(t,e,n);break;default:ir(t,e,n)}}function xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xb),e.forEach(function(i){var r=Ab.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ri=!1;break e;case 3:Yt=a.stateNode.containerInfo,ri=!0;break e;case 4:Yt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Yt===null)throw Error(re(160));s_(s,o,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),gi(t),i&4){try{ya(3,t,t.return),Cu(3,t)}catch(v){Pt(t,t.return,v)}try{ya(5,t,t.return)}catch(v){Pt(t,t.return,v)}}break;case 1:Jn(e,t),gi(t),i&512&&n!==null&&to(n,n.return);break;case 5:if(Jn(e,t),gi(t),i&512&&n!==null&&to(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(v){Pt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cv(r,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Iv(r,f):u==="dangerouslySetInnerHTML"?Lv(r,f):u==="children"?Ra(r,f):kp(r,u,f,c)}switch(a){case"input":Nd(r,s);break;case"textarea":Rv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(v){Pt(t,t.return,v)}}break;case 6:if(Jn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Pt(t,t.return,v)}}break;case 3:if(Jn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(v){Pt(t,t.return,v)}break;case 4:Jn(e,t),gi(t);break;case 13:Jn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(x0=Lt())),i&4&&xg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Jn(e,t),nn=c):Jn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(f=ye=u;ye!==null;){switch(d=ye,p=d.child,d.tag){case 0:case 11:case 14:case 15:ya(4,d,d.return);break;case 1:to(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Pt(i,n,v)}}break;case 5:to(d,d.return);break;case 22:if(d.memoizedState!==null){yg(f);continue}}p!==null?(p.return=d,ye=p):yg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dv("display",o))}catch(v){Pt(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Pt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,t),gi(t),i&4&&xg(t);break;case 21:break;default:Jn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=gg(t);mh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=gg(t);ph(t,a,o);break;default:throw Error(re(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yb(t,e,n){ye=t,a_(t)}function a_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Ll;var c=nn;if(Ll=o,(nn=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?_g(r):l!==null?(l.return=o,ye=l):_g(r);for(;s!==null;)ye=s,a_(s),s=s.sibling;ye=r,Ll=a,nn=c}vg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):vg(t)}}function vg(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ng(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ng(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}nn||e.flags&512&&hh(e)}catch(d){Pt(e,e.return,d)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function yg(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function _g(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{hh(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{hh(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var _b=Math.ceil,Zc=nr.ReactCurrentDispatcher,m0=nr.ReactCurrentOwner,Yn=nr.ReactCurrentBatchConfig,et=0,$t=null,kt=null,qt=0,Pn=0,no=kr(0),zt=0,Wa=null,_s=0,Ru=0,g0=0,_a=null,xn=null,x0=0,bo=1/0,Ni=null,Qc=!1,gh=null,Tr=null,Dl=!1,yr=null,Jc=0,Sa=0,xh=null,xc=-1,vc=0;function un(){return et&6?Lt():xc!==-1?xc:xc=Lt()}function Ar(t){return t.mode&1?et&2&&qt!==0?qt&-qt:ib.transition!==null?(vc===0&&(vc=jv()),vc):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Qv(t.type)),t):1}function fi(t,e,n,i){if(50<Sa)throw Sa=0,xh=null,Error(re(185));tl(t,n,i),(!(et&2)||t!==$t)&&(t===$t&&(!(et&2)&&(Ru|=n),zt===4&&gr(t,qt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(bo=Lt()+500,wu&&Br()))}function Mn(t,e){var n=t.callbackNode;iM(t,e);var i=Uc(t,t===$t?qt:0);if(i===0)n!==null&&Rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rm(n),e===1)t.tag===0?nb(Sg.bind(null,t)):xy(Sg.bind(null,t)),QM(function(){!(et&6)&&Br()}),n=null;else{switch(Xv(i)){case 1:n=Hp;break;case 4:n=Hv;break;case 16:n=Fc;break;case 536870912:n=Wv;break;default:n=Fc}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(xc=-1,vc=0,et&6)throw Error(re(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Uc(t,t===$t?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=et;et|=2;var s=u_();($t!==t||qt!==e)&&(Ni=null,bo=Lt()+500,fs(t,e));do try{bb();break}catch(a){c_(t,a)}while(!0);n0(),Zc.current=s,et=r,kt!==null?e=0:($t=null,qt=0,e=zt)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=vh(t,r))),e===1)throw n=Wa,fs(t,0),gr(t,i),Mn(t,Lt()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sb(r)&&(e=eu(t,i),e===2&&(s=Wd(t),s!==0&&(i=s,e=vh(t,s))),e===1))throw n=Wa,fs(t,0),gr(t,i),Mn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Qr(t,xn,Ni);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=x0+500-Lt(),10<e)){if(Uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qd(Qr.bind(null,t,xn,Ni),e);break}Qr(t,xn,Ni);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_b(i/1960))-i,10<i){t.timeoutHandle=Qd(Qr.bind(null,t,xn,Ni),i);break}Qr(t,xn,Ni);break;case 5:Qr(t,xn,Ni);break;default:throw Error(re(329))}}}return Mn(t,Lt()),t.callbackNode===n?l_.bind(null,t):null}function vh(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=eu(t,e),t!==2&&(e=xn,xn=n,e!==null&&yh(e)),t}function yh(t){xn===null?xn=t:xn.push.apply(xn,t)}function Sb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~g0,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function Sg(t){if(et&6)throw Error(re(327));po();var e=Uc(t,0);if(!(e&1))return Mn(t,Lt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=vh(t,i))}if(n===1)throw n=Wa,fs(t,0),gr(t,e),Mn(t,Lt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,xn,Ni),Mn(t,Lt()),null}function v0(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(bo=Lt()+500,wu&&Br())}}function Ss(t){yr!==null&&yr.tag===0&&!(et&6)&&po();var e=et;et|=1;var n=Yn.transition,i=ot;try{if(Yn.transition=null,ot=1,t)return t()}finally{ot=i,Yn.transition=n,et=e,!(et&6)&&Br()}}function y0(){Pn=no.current,yt(no)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZM(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Jp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:So(),yt(_n),yt(rn),l0();break;case 5:a0(i);break;case 4:So();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:i0(i.type._context);break;case 22:case 23:y0()}n=n.return}if($t=t,kt=t=Cr(t.current,null),qt=Pn=e,zt=0,Wa=null,g0=Ru=_s=0,xn=_a=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}os=null}return t}function c_(t,e){do{var n=kt;try{if(n0(),pc.current=Kc,qc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(ys=0,jt=Bt=Tt=null,va=!1,Va=0,m0.current=null,n===null||n.return===null){zt=1,Wa=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=lg(o);if(p!==null){p.flags&=-257,cg(p,o,a,s,e),p.mode&1&&ag(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){ag(s,c,e),_0();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var g=lg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),cg(g,o,a,s,e),e0(Mo(l,a));break e}}s=l=Mo(l,a),zt!==4&&(zt=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Xy(s,l,e);tg(s,h);break e;case 1:a=l;var y=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tr===null||!Tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=$y(s,a,e);tg(s,_);break e}}s=s.return}while(s!==null)}d_(n)}catch(T){e=T,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function u_(){var t=Zc.current;return Zc.current=Kc,t===null?Kc:t}function _0(){(zt===0||zt===3||zt===2)&&(zt=4),$t===null||!(_s&268435455)&&!(Ru&268435455)||gr($t,qt)}function eu(t,e){var n=et;et|=2;var i=u_();($t!==t||qt!==e)&&(Ni=null,fs(t,e));do try{Mb();break}catch(r){c_(t,r)}while(!0);if(n0(),et=n,Zc.current=i,kt!==null)throw Error(re(261));return $t=null,qt=0,zt}function Mb(){for(;kt!==null;)f_(kt)}function bb(){for(;kt!==null&&!YS();)f_(kt)}function f_(t){var e=p_(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?d_(t):kt=e,m0.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gb(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,kt=null;return}}else if(n=mb(n,e,Pn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);zt===0&&(zt=5)}function Qr(t,e,n){var i=ot,r=Yn.transition;try{Yn.transition=null,ot=1,Eb(t,e,n,i)}finally{Yn.transition=r,ot=i}return null}function Eb(t,e,n,i){do po();while(yr!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rM(t,s),t===$t&&(kt=$t=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,m_(Fc,function(){return po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ot;ot=1;var a=et;et|=4,m0.current=null,vb(t,n),o_(n,t),WM(Kd),Oc=!!qd,Kd=qd=null,t.current=n,yb(n),qS(),et=a,ot=o,Yn.transition=s}else t.current=n;if(Dl&&(Dl=!1,yr=t,Jc=r),s=t.pendingLanes,s===0&&(Tr=null),QS(n.stateNode),Mn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=gh,gh=null,t;return Jc&1&&t.tag!==0&&po(),s=t.pendingLanes,s&1?t===xh?Sa++:(Sa=0,xh=t):Sa=0,Br(),null}function po(){if(yr!==null){var t=Xv(Jc),e=Yn.transition,n=ot;try{if(Yn.transition=null,ot=16>t?16:t,yr===null)var i=!1;else{if(t=yr,yr=null,Jc=0,et&6)throw Error(re(331));var r=et;for(et|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:ya(8,u,s)}var f=u.child;if(f!==null)f.return=u,ye=f;else for(;ye!==null;){u=ye;var d=u.sibling,p=u.return;if(i_(u),u===c){ye=null;break}if(d!==null){d.return=p,ye=d;break}ye=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ye=h;break e}ye=s.return}}var y=t.current;for(ye=y;ye!==null;){o=ye;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ye=x;else e:for(o=y;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(T){Pt(a,a.return,T)}if(a===o){ye=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,ye=_;break e}ye=a.return}}if(et=r,Br(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{ot=n,Yn.transition=e}}return!1}function Mg(t,e,n){e=Mo(n,e),e=Xy(t,e,1),t=wr(t,e,1),e=un(),t!==null&&(tl(t,1,e),Mn(t,e))}function Pt(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=Mo(n,t),t=$y(e,t,1),e=wr(e,t,1),t=un(),e!==null&&(tl(e,1,t),Mn(e,t));break}}e=e.return}}function wb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(qt&n)===n&&(zt===4||zt===3&&(qt&130023424)===qt&&500>Lt()-x0?fs(t,0):g0|=n),Mn(t,e)}function h_(t,e){e===0&&(t.mode&1?(e=Ml,Ml<<=1,!(Ml&130023424)&&(Ml=4194304)):e=1);var n=un();t=Ki(t,e),t!==null&&(tl(t,e,n),Mn(t,n))}function Tb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function Ab(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),h_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,pb(t,e,n);vn=!!(t.flags&131072)}else vn=!1,_t&&e.flags&1048576&&vy(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gc(t,e),t=e.pendingProps;var r=vo(e,rn.current);ho(e,n),r=u0(null,e,i,t,r,n);var s=f0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,s0(e),r.updater=Au,e.stateNode=r,r._reactInternals=e,sh(e,i,t,n),e=lh(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Qp(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Rb(i),t=ii(i,t),r){case 0:e=ah(null,e,i,t,n);break e;case 1:e=dg(null,e,i,t,n);break e;case 11:e=ug(null,e,i,t,n);break e;case 14:e=fg(null,e,i,ii(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),dg(t,e,i,r,n);case 3:e:{if(Zy(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ey(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(re(423)),e),e=hg(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(re(424)),e),e=hg(t,e,i,n,r);break e}else for(Ln=Er(e.stateNode.containerInfo.firstChild),Dn=e,_t=!0,si=null,n=My(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),i===r){e=Zi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return wy(e),t===null&&nh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zd(i,r)?o=null:s!==null&&Zd(i,s)&&(e.flags|=32),Ky(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return Qy(t,e,n);case 4:return o0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),ug(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(jc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!_n.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ih(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=qn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),fg(t,e,i,r,n);case 15:return Yy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),gc(t,e),e.tag=1,Sn(i)?(t=!0,Gc(e)):t=!1,ho(e,n),jy(e,i,r),sh(e,i,r,n),lh(null,e,i,!0,t,n);case 19:return Jy(t,e,n);case 22:return qy(t,e,n)}throw Error(re(156,e.tag))};function m_(t,e){return Gv(t,e)}function Cb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Cb(t,e,n,i)}function S0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rb(t){if(typeof t=="function")return S0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zp)return 11;if(t===Vp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")S0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return ds(n.children,r,s,e);case Bp:o=8,r|=8;break;case Rd:return t=Xn(12,n,e,r|2),t.elementType=Rd,t.lanes=s,t;case Pd:return t=Xn(13,n,e,r),t.elementType=Pd,t.lanes=s,t;case Ld:return t=Xn(19,n,e,r),t.elementType=Ld,t.lanes=s,t;case wv:return Pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bv:o=10;break e;case Ev:o=9;break e;case zp:o=11;break e;case Vp:o=14;break e;case dr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ds(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function Af(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function Cf(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Pb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lf(0),this.expirationTimes=lf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function M0(t,e,n,i,r,s,o,a,l){return t=new Pb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},s0(s),t}function Lb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return Ir;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Sn(n))return gy(t,n,e)}return e}function x_(t,e,n,i,r,s,o,a,l){return t=M0(n,i,!0,t,r,s,o,a,l),t.context=g_(null),n=t.current,i=un(),r=Ar(n),s=Hi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,tl(t,r,i),Mn(t,i),t}function Lu(t,e,n,i){var r=e.current,s=un(),o=Ar(r);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(fi(t,r,o,s),hc(t,r,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function b0(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function Db(){return null}var v_=typeof reportError=="function"?reportError:function(t){console.error(t)};function E0(t){this._internalRoot=t}Du.prototype.render=E0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Lu(t,e,null,null)};Du.prototype.unmount=E0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){Lu(null,t,null,null)}),e[qi]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&Zv(t)}};function w0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function Ib(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tu(o);s.call(c)}}var o=x_(e,i,t,0,null,!1,!1,"",Eg);return t._reactRootContainer=o,t[qi]=o.current,Ua(t.nodeType===8?t.parentNode:t),Ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tu(l);a.call(c)}}var l=M0(t,0,!1,null,null,!1,!1,"",Eg);return t._reactRootContainer=l,t[qi]=l.current,Ua(t.nodeType===8?t.parentNode:t),Ss(function(){Lu(e,l,n,i)}),l}function Nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tu(o);a.call(l)}}Lu(e,o,t,r)}else o=Ib(n,e,t,r,i);return tu(o)}$v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Wp(e,n|1),Mn(e,Lt()),!(et&6)&&(bo=Lt()+500,Br()))}break;case 13:Ss(function(){var i=Ki(t,1);if(i!==null){var r=un();fi(i,t,1,r)}}),b0(t,1)}};jp=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=un();fi(e,t,134217728,n)}b0(t,134217728)}};Yv=function(t){if(t.tag===13){var e=Ar(t),n=Ki(t,e);if(n!==null){var i=un();fi(n,t,e,i)}b0(t,e)}};qv=function(){return ot};Kv=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Vd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Eu(i);if(!r)throw Error(re(90));Av(i),Nd(i,r)}}}break;case"textarea":Rv(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};Uv=v0;Ov=Ss;var Nb={usingClientEntryPoint:!1,Events:[il,Ks,Eu,Nv,Fv,v0]},Zo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fb={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zv(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Db,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{_u=Il.inject(Fb),Mi=Il}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w0(e))throw Error(re(200));return Lb(t,e,null,n)};On.createRoot=function(t,e){if(!w0(t))throw Error(re(299));var n=!1,i="",r=v_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=M0(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,Ua(t.nodeType===8?t.parentNode:t),new E0(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=zv(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Ss(t)};On.hydrate=function(t,e,n){if(!Iu(e))throw Error(re(200));return Nu(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!w0(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=v_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x_(e,null,t,1,n??null,r,!1,s,o),t[qi]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Du(e)};On.render=function(t,e,n){if(!Iu(e))throw Error(re(200));return Nu(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(re(40));return t._reactRootContainer?(Ss(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};On.unstable_batchedUpdates=v0;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Iu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Nu(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y_)}catch(t){console.error(t)}}y_(),yv.exports=On;var Ub=yv.exports,wg=Ub;Ad.createRoot=wg.createRoot,Ad.hydrateRoot=wg.hydrateRoot;const __=Q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Fu=Q.createContext({}),Uu=Q.createContext(null),Ou=typeof document<"u",T0=Ou?Q.useLayoutEffect:Q.useEffect,S_=Q.createContext({strict:!1}),A0=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ob="framerAppearId",M_="data-"+A0(Ob);function kb(t,e,n,i){const{visualElement:r}=Q.useContext(Fu),s=Q.useContext(S_),o=Q.useContext(Uu),a=Q.useContext(__).reducedMotion,l=Q.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;Q.useInsertionEffect(()=>{c&&c.update(n,o)});const u=Q.useRef(!!(n[M_]&&!window.HandoffComplete));return T0(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),Q.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function io(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Bb(t,e,n){return Q.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):io(n)&&(n.current=i))},[e])}function ja(t){return typeof t=="string"||Array.isArray(t)}function ku(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const C0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],R0=["initial",...C0];function Bu(t){return ku(t.animate)||R0.some(e=>ja(t[e]))}function b_(t){return!!(Bu(t)||t.variants)}function zb(t,e){if(Bu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(i)?i:void 0}}return t.inherit!==!1?e:{}}function Vb(t){const{initial:e,animate:n}=zb(t,Q.useContext(Fu));return Q.useMemo(()=>({initial:e,animate:n}),[Tg(e),Tg(n)])}function Tg(t){return Array.isArray(t)?t.join(" "):t}const Ag={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xa={};for(const t in Ag)Xa[t]={isEnabled:e=>Ag[t].some(n=>!!e[n])};function Gb(t){for(const e in t)Xa[e]={...Xa[e],...t[e]}}const P0=Q.createContext({}),E_=Q.createContext({}),Hb=Symbol.for("motionComponentSymbol");function Wb({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&Gb(t);function s(a,l){let c;const u={...Q.useContext(__),...a,layoutId:jb(a)},{isStatic:f}=u,d=Vb(a),p=i(a,f);if(!f&&Ou){d.visualElement=kb(r,p,u,e);const m=Q.useContext(E_),v=Q.useContext(S_).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,v,t,m))}return Q.createElement(Fu.Provider,{value:d},c&&d.visualElement?Q.createElement(c,{visualElement:d.visualElement,...u}):null,n(r,a,Bb(p,d.visualElement,l),p,f,d.visualElement))}const o=Q.forwardRef(s);return o[Hb]=r,o}function jb({layoutId:t}){const e=Q.useContext(P0).id;return e&&t!==void 0?e+"-"+t:t}function Xb(t){function e(i,r={}){return Wb(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const $b=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function L0(t){return typeof t!="string"||t.includes("-")?!1:!!($b.indexOf(t)>-1||/[A-Z]/.test(t))}const nu={};function Yb(t){Object.assign(nu,t)}const sl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ts=new Set(sl);function w_(t,{layout:e,layoutId:n}){return Ts.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!nu[t]||t==="opacity")}const En=t=>!!(t&&t.getVelocity),qb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kb=sl.length;function Zb(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<Kb;o++){const a=sl[o];if(t[a]!==void 0){const l=qb[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const T_=t=>e=>typeof e=="string"&&e.startsWith(t),A_=T_("--"),_h=T_("var(--"),Qb=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Jb=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Nr=(t,e,n)=>Math.min(Math.max(n,t),e),As={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ma={...As,transform:t=>Nr(0,1,t)},Nl={...As,default:1},ba=t=>Math.round(t*1e5)/1e5,zu=/(-)?([\d]*\.?[\d])+/g,C_=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,eE=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ol(t){return typeof t=="string"}const al=t=>({test:e=>ol(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ur=al("deg"),Ei=al("%"),Fe=al("px"),tE=al("vh"),nE=al("vw"),Cg={...Ei,parse:t=>Ei.parse(t)/100,transform:t=>Ei.transform(t*100)},Rg={...As,transform:Math.round},R_={borderWidth:Fe,borderTopWidth:Fe,borderRightWidth:Fe,borderBottomWidth:Fe,borderLeftWidth:Fe,borderRadius:Fe,radius:Fe,borderTopLeftRadius:Fe,borderTopRightRadius:Fe,borderBottomRightRadius:Fe,borderBottomLeftRadius:Fe,width:Fe,maxWidth:Fe,height:Fe,maxHeight:Fe,size:Fe,top:Fe,right:Fe,bottom:Fe,left:Fe,padding:Fe,paddingTop:Fe,paddingRight:Fe,paddingBottom:Fe,paddingLeft:Fe,margin:Fe,marginTop:Fe,marginRight:Fe,marginBottom:Fe,marginLeft:Fe,rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:Nl,scaleX:Nl,scaleY:Nl,scaleZ:Nl,skew:ur,skewX:ur,skewY:ur,distance:Fe,translateX:Fe,translateY:Fe,translateZ:Fe,x:Fe,y:Fe,z:Fe,perspective:Fe,transformPerspective:Fe,opacity:Ma,originX:Cg,originY:Cg,originZ:Fe,zIndex:Rg,fillOpacity:Ma,strokeOpacity:Ma,numOctaves:Rg};function D0(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const f in e){const d=e[f];if(A_(f)){s[f]=d;continue}const p=R_[f],m=Jb(d,p);if(Ts.has(f)){if(l=!0,o[f]=m,!u)continue;d!==(p.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,a[f]=m):r[f]=m}if(e.transform||(l||i?r.transform=Zb(t.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const I0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P_(t,e,n){for(const i in e)!En(e[i])&&!w_(i,n)&&(t[i]=e[i])}function iE({transformTemplate:t},e,n){return Q.useMemo(()=>{const i=I0();return D0(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function rE(t,e,n){const i=t.style||{},r={};return P_(r,i,t),Object.assign(r,iE(t,e,n)),t.transformValues?t.transformValues(r):r}function sE(t,e,n){const i={},r=rE(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const oE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function iu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||oE.has(t)}let L_=t=>!iu(t);function aE(t){t&&(L_=e=>e.startsWith("on")?!iu(e):t(e))}try{aE(require("@emotion/is-prop-valid").default)}catch{}function lE(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(L_(r)||n===!0&&iu(r)||!e&&!iu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Pg(t,e,n){return typeof t=="string"?t:Fe.transform(e+n*t)}function cE(t,e,n){const i=Pg(e,t.x,t.width),r=Pg(n,t.y,t.height);return`${i} ${r}`}const uE={offset:"stroke-dashoffset",array:"stroke-dasharray"},fE={offset:"strokeDashoffset",array:"strokeDasharray"};function dE(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?uE:fE;t[s.offset]=Fe.transform(-i);const o=Fe.transform(e),a=Fe.transform(n);t[s.array]=`${o} ${a}`}function N0(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f,d){if(D0(t,c,u,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:v}=t;p.transform&&(v&&(m.transform=p.transform),delete p.transform),v&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=cE(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&dE(p,o,a,l,!1)}const D_=()=>({...I0(),attrs:{}}),F0=t=>typeof t=="string"&&t.toLowerCase()==="svg";function hE(t,e,n,i){const r=Q.useMemo(()=>{const s=D_();return N0(s,e,{enableHardwareAcceleration:!1},F0(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};P_(s,t.style,t),r.style={...s,...r.style}}return r}function pE(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(L0(n)?hE:sE)(i,s,o,n),u={...lE(i,typeof n=="string",t),...l,ref:r},{children:f}=i,d=Q.useMemo(()=>En(f)?f.get():f,[f]);return Q.createElement(n,{...u,children:d})}}function I_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const N_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function F_(t,e,n,i){I_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(N_.has(r)?r:A0(r),e.attrs[r])}function U0(t,e){const{style:n}=t,i={};for(const r in n)(En(n[r])||e.style&&En(e.style[r])||w_(r,t))&&(i[r]=n[r]);return i}function U_(t,e){const n=U0(t,e);for(const i in t)if(En(t[i])||En(e[i])){const r=sl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function O0(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function O_(t){const e=Q.useRef(null);return e.current===null&&(e.current=t()),e.current}const ru=t=>Array.isArray(t),mE=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),gE=t=>ru(t)?t[t.length-1]||0:t;function _c(t){const e=En(t)?t.get():t;return mE(e)?e.toValue():e}function xE({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:vE(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const k_=t=>(e,n)=>{const i=Q.useContext(Fu),r=Q.useContext(Uu),s=()=>xE(t,e,i,r);return n?s():O_(s)};function vE(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=_c(s[d]);let{initial:o,animate:a}=t;const l=Bu(t),c=b_(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;return f&&typeof f!="boolean"&&!ku(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const m=O0(t,p);if(!m)return;const{transitionEnd:v,transition:g,...h}=m;for(const y in h){let x=h[y];if(Array.isArray(x)){const _=u?x.length-1:0;x=x[_]}x!==null&&(r[y]=x)}for(const y in v)r[y]=v[y]}),r}const Dt=t=>t;class Lg{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function yE(t){let e=new Lg,n=new Lg,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:n;return c&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const Fl=["prepare","read","update","preRender","render","postRender"],_E=40;function SE(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Fl.reduce((f,d)=>(f[d]=yE(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,_E),1),r.timestamp=f,r.isProcessing=!0,Fl.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:Fl.reduce((f,d)=>{const p=s[d];return f[d]=(m,v=!1,g=!1)=>(n||l(),p.schedule(m,v,g)),f},{}),cancel:f=>Fl.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:mt,cancel:Qi,state:tn,steps:Rf}=SE(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dt,!0),ME={useVisualState:k_({scrapeMotionValuesFromProps:U_,createRenderState:D_,onMount:(t,e,{renderState:n,latestValues:i})=>{mt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),mt.render(()=>{N0(n,i,{enableHardwareAcceleration:!1},F0(e.tagName),t.transformTemplate),F_(e,n)})}})},bE={useVisualState:k_({scrapeMotionValuesFromProps:U0,createRenderState:I0})};function EE(t,{forwardMotionProps:e=!1},n,i){return{...L0(t)?ME:bE,preloadedFeatures:n,useRender:pE(e),createVisualElement:i,Component:t}}function zi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const B_=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Vu(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const wE=t=>e=>B_(e)&&t(e,Vu(e));function Wi(t,e,n,i){return zi(t,e,wE(n),i)}const TE=(t,e)=>n=>e(t(n)),Rr=(...t)=>t.reduce(TE);function z_(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Dg=z_("dragHorizontal"),Ig=z_("dragVertical");function V_(t){let e=!1;if(t==="y")e=Ig();else if(t==="x")e=Dg();else{const n=Dg(),i=Ig();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function G_(){const t=V_(!0);return t?(t(),!1):!0}class zr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Ng(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||G_())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&mt.update(()=>a[i](s,o))};return Wi(t.current,n,r,{passive:!t.getProps()[i]})}class AE extends zr{mount(){this.unmount=Rr(Ng(this.node,!0),Ng(this.node,!1))}unmount(){}}class CE extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rr(zi(this.node.current,"focus",()=>this.onFocus()),zi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const H_=(t,e)=>e?t===e?!0:H_(t,e.parentElement):!1;function Pf(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Vu(n))}class RE extends zr{constructor(){super(...arguments),this.removeStartListeners=Dt,this.removeEndListeners=Dt,this.removeAccessibleListeners=Dt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Wi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps();mt.update(()=>{!f&&!H_(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=Wi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Rr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Pf("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&mt.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=zi(this.node.current,"keyup",o),Pf("down",(a,l)=>{this.startPress(a,l)})},n=zi(this.node.current,"keydown",e),i=()=>{this.isPressing&&Pf("cancel",(s,o)=>this.cancelPress(s,o))},r=zi(this.node.current,"blur",i);this.removeAccessibleListeners=Rr(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&mt.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!G_()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&mt.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Wi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=zi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Rr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Sh=new WeakMap,Lf=new WeakMap,PE=t=>{const e=Sh.get(t.target);e&&e(t)},LE=t=>{t.forEach(PE)};function DE({root:t,...e}){const n=t||document;Lf.has(n)||Lf.set(n,{});const i=Lf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(LE,{root:t,...e})),i[r]}function IE(t,e,n){const i=DE(e);return Sh.set(t,n),i.observe(t),()=>{Sh.delete(t),i.unobserve(t)}}const NE={some:0,all:1};class FE extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:NE[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return IE(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(UE(e,n))&&this.startObserver()}unmount(){}}function UE({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const OE={inView:{Feature:FE},tap:{Feature:RE},focus:{Feature:CE},hover:{Feature:AE}};function W_(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function kE(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function BE(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Gu(t,e,n){const i=t.getProps();return O0(i,e,n!==void 0?n:i.custom,kE(t),BE(t))}let k0=Dt;const hs=t=>t*1e3,ji=t=>t/1e3,zE={current:!1},j_=t=>Array.isArray(t)&&typeof t[0]=="number";function X_(t){return!!(!t||typeof t=="string"&&$_[t]||j_(t)||Array.isArray(t)&&t.every(X_))}const ua=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,$_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ua([0,.65,.55,1]),circOut:ua([.55,0,1,.45]),backIn:ua([.31,.01,.66,-.59]),backOut:ua([.33,1.53,.69,.99])};function Y_(t){if(t)return j_(t)?ua(t):Array.isArray(t)?t.map(Y_):$_[t]}function VE(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Y_(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function GE(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const q_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,HE=1e-7,WE=12;function jE(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=q_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>HE&&++a<WE);return o}function ll(t,e,n,i){if(t===e&&n===i)return Dt;const r=s=>jE(s,0,1,t,n);return s=>s===0||s===1?s:q_(r(s),e,i)}const XE=ll(.42,0,1,1),$E=ll(0,0,.58,1),K_=ll(.42,0,.58,1),YE=t=>Array.isArray(t)&&typeof t[0]!="number",Z_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Q_=t=>e=>1-t(1-e),B0=t=>1-Math.sin(Math.acos(t)),J_=Q_(B0),qE=Z_(B0),e2=ll(.33,1.53,.69,.99),z0=Q_(e2),KE=Z_(z0),ZE=t=>(t*=2)<1?.5*z0(t):.5*(2-Math.pow(2,-10*(t-1))),QE={linear:Dt,easeIn:XE,easeInOut:K_,easeOut:$E,circIn:B0,circInOut:qE,circOut:J_,backIn:z0,backInOut:KE,backOut:e2,anticipate:ZE},Fg=t=>{if(Array.isArray(t)){k0(t.length===4);const[e,n,i,r]=t;return ll(e,n,i,r)}else if(typeof t=="string")return QE[t];return t},V0=(t,e)=>n=>!!(ol(n)&&eE.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),t2=(t,e,n)=>i=>{if(!ol(i))return i;const[r,s,o,a]=i.match(zu);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},JE=t=>Nr(0,255,t),Df={...As,transform:t=>Math.round(JE(t))},ls={test:V0("rgb","red"),parse:t2("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Df.transform(t)+", "+Df.transform(e)+", "+Df.transform(n)+", "+ba(Ma.transform(i))+")"};function ew(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Mh={test:V0("#"),parse:ew,transform:ls.transform},ro={test:V0("hsl","hue"),parse:t2("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ei.transform(ba(e))+", "+Ei.transform(ba(n))+", "+ba(Ma.transform(i))+")"},an={test:t=>ls.test(t)||Mh.test(t)||ro.test(t),parse:t=>ls.test(t)?ls.parse(t):ro.test(t)?ro.parse(t):Mh.parse(t),transform:t=>ol(t)?t:t.hasOwnProperty("red")?ls.transform(t):ro.transform(t)},wt=(t,e,n)=>-n*t+n*e+t;function If(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function tw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=If(l,a,t+1/3),s=If(l,a,t),o=If(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Nf=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},nw=[Mh,ls,ro],iw=t=>nw.find(e=>e.test(t));function Ug(t){const e=iw(t);let n=e.parse(t);return e===ro&&(n=tw(n)),n}const n2=(t,e)=>{const n=Ug(t),i=Ug(e),r={...n};return s=>(r.red=Nf(n.red,i.red,s),r.green=Nf(n.green,i.green,s),r.blue=Nf(n.blue,i.blue,s),r.alpha=wt(n.alpha,i.alpha,s),ls.transform(r))};function rw(t){var e,n;return isNaN(t)&&ol(t)&&(((e=t.match(zu))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(C_))===null||n===void 0?void 0:n.length)||0)>0}const i2={regex:Qb,countKey:"Vars",token:"${v}",parse:Dt},r2={regex:C_,countKey:"Colors",token:"${c}",parse:an.parse},s2={regex:zu,countKey:"Numbers",token:"${n}",parse:As.parse};function Ff(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function su(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ff(n,i2),Ff(n,r2),Ff(n,s2),n}function o2(t){return su(t).values}function a2(t){const{values:e,numColors:n,numVars:i,tokenised:r}=su(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(i2.token,o[l]):l<i+n?a=a.replace(r2.token,an.transform(o[l])):a=a.replace(s2.token,ba(o[l]));return a}}const sw=t=>typeof t=="number"?0:t;function ow(t){const e=o2(t);return a2(t)(e.map(sw))}const Fr={test:rw,parse:o2,createTransformer:a2,getAnimatableNone:ow},l2=(t,e)=>n=>`${n>0?e:t}`;function c2(t,e){return typeof t=="number"?n=>wt(t,e,n):an.test(t)?n2(t,e):t.startsWith("var(")?l2(t,e):f2(t,e)}const u2=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>c2(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},aw=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=c2(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},f2=(t,e)=>{const n=Fr.createTransformer(e),i=su(t),r=su(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?Rr(u2(i.values,r.values),n):l2(t,e)},$a=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Og=(t,e)=>n=>wt(t,e,n);function lw(t){return typeof t=="number"?Og:typeof t=="string"?an.test(t)?n2:f2:Array.isArray(t)?u2:typeof t=="object"?aw:Og}function cw(t,e,n){const i=[],r=n||lw(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Dt:e;a=Rr(l,a)}i.push(a)}return i}function d2(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(k0(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=cw(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const f=$a(t[u],t[u+1],c);return o[u](f)};return n?c=>l(Nr(t[0],t[s-1],c)):l}function uw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=$a(0,e,i);t.push(wt(n,1,r))}}function fw(t){const e=[0];return uw(e,t.length-1),e}function dw(t,e){return t.map(n=>n*e)}function hw(t,e){return t.map(()=>e||K_).splice(0,t.length-1)}function ou({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=YE(i)?i.map(Fg):Fg(i),s={done:!1,value:e[0]},o=dw(n&&n.length===e.length?n:fw(e),t),a=d2(o,e,{ease:Array.isArray(r)?r:hw(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function h2(t,e){return e?t*(1e3/e):0}const pw=5;function p2(t,e,n){const i=Math.max(e-pw,0);return h2(n-t(i),e-i)}const Uf=.001,mw=.01,gw=10,xw=.05,vw=1;function yw({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=Nr(xw,vw,o),t=Nr(mw,gw,ji(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=bh(c,o),m=Math.exp(-f);return Uf-d/p*m},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-f),v=bh(Math.pow(c,2),o);return(-r(c)+Uf>0?-1:1)*((d-p)*m)/v}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Uf+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=Sw(r,s,a);if(t=hs(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const _w=12;function Sw(t,e,n){let i=n;for(let r=1;r<_w;r++)i=i-t(i)/e(i);return i}function bh(t,e){return t*Math.sqrt(1-e*e)}const Mw=["duration","bounce"],bw=["stiffness","damping","mass"];function kg(t,e){return e.some(n=>t[n]!==void 0)}function Ew(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!kg(t,bw)&&kg(t,Mw)){const n=yw(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function m2({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:d}=Ew({...i,velocity:-ji(i.velocity||0)}),p=f||0,m=l/(2*Math.sqrt(a*c)),v=s-r,g=ji(Math.sqrt(a/c)),h=Math.abs(v)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let y;if(m<1){const x=bh(g,m);y=_=>{const T=Math.exp(-m*g*_);return s-T*((p+m*g*v)/x*Math.sin(x*_)+v*Math.cos(x*_))}}else if(m===1)y=x=>s-Math.exp(-g*x)*(v+(p+g*v)*x);else{const x=g*Math.sqrt(m*m-1);y=_=>{const T=Math.exp(-m*g*_),S=Math.min(x*_,300);return s-T*((p+m*g*v)*Math.sinh(S)+x*v*Math.cosh(S))/x}}return{calculatedDuration:d&&u||null,next:x=>{const _=y(x);if(d)o.done=x>=u;else{let T=p;x!==0&&(m<1?T=p2(y,x,_):T=0);const S=Math.abs(T)<=n,A=Math.abs(s-_)<=e;o.done=S&&A}return o.value=o.done?s:_,o}}}function Bg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,m=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let v=n*e;const g=f+v,h=o===void 0?g:o(g);h!==g&&(v=h-f);const y=R=>-v*Math.exp(-R/i),x=R=>h+y(R),_=R=>{const b=y(R),M=x(R);d.done=Math.abs(b)<=c,d.value=d.done?h:M};let T,S;const A=R=>{p(d.value)&&(T=R,S=m2({keyframes:[d.value,m(d.value)],velocity:p2(x,R,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:R=>{let b=!1;return!S&&T===void 0&&(b=!0,_(R),A(R)),T!==void 0&&R>T?S.next(R-T):(!b&&_(R),d)}}}const ww=t=>{const e=({timestamp:n})=>t(n);return{start:()=>mt.update(e,!0),stop:()=>Qi(e),now:()=>tn.isProcessing?tn.timestamp:performance.now()}},zg=2e4;function Vg(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<zg;)e+=n,i=t.next(e);return e>=zg?1/0:e}const Tw={decay:Bg,inertia:Bg,tween:ou,keyframes:ou,spring:m2};function au({autoplay:t=!0,delay:e=0,driver:n=ww,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:f,...d}){let p=1,m=!1,v,g;const h=()=>{g=new Promise(ee=>{v=ee})};h();let y;const x=Tw[r]||ou;let _;x!==ou&&typeof i[0]!="number"&&(_=d2([0,100],i,{clamp:!1}),i=[0,100]);const T=x({...d,keyframes:i});let S;a==="mirror"&&(S=x({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let A="idle",R=null,b=null,M=null;T.calculatedDuration===null&&s&&(T.calculatedDuration=Vg(T));const{calculatedDuration:L}=T;let F=1/0,O=1/0;L!==null&&(F=L+o,O=F*(s+1)-o);let U=0;const H=ee=>{if(b===null)return;p>0&&(b=Math.min(b,ee)),p<0&&(b=Math.min(ee-O/p,b)),R!==null?U=R:U=Math.round(ee-b)*p;const fe=U-e*(p>=0?1:-1),Ie=p>=0?fe<0:fe>O;U=Math.max(fe,0),A==="finished"&&R===null&&(U=O);let Ue=U,Ve=T;if(s){const ve=Math.min(U,O)/F;let ge=Math.floor(ve),Ee=ve%1;!Ee&&ve>=1&&(Ee=1),Ee===1&&ge--,ge=Math.min(ge,s+1),!!(ge%2)&&(a==="reverse"?(Ee=1-Ee,o&&(Ee-=o/F)):a==="mirror"&&(Ve=S)),Ue=Nr(0,1,Ee)*F}const Y=Ie?{done:!1,value:i[0]}:Ve.next(Ue);_&&(Y.value=_(Y.value));let{done:Z}=Y;!Ie&&L!==null&&(Z=p>=0?U>=O:U<=0);const le=R===null&&(A==="finished"||A==="running"&&Z);return f&&f(Y.value),le&&N(),Y},G=()=>{y&&y.stop(),y=void 0},K=()=>{A="idle",G(),v(),h(),b=M=null},N=()=>{A="finished",u&&u(),G(),v()},z=()=>{if(m)return;y||(y=n(H));const ee=y.now();l&&l(),R!==null?b=ee-R:(!b||A==="finished")&&(b=ee),A==="finished"&&h(),M=b,R=null,A="running",y.start()};t&&z();const j={then(ee,fe){return g.then(ee,fe)},get time(){return ji(U)},set time(ee){ee=hs(ee),U=ee,R!==null||!y||p===0?R=ee:b=y.now()-ee/p},get duration(){const ee=T.calculatedDuration===null?Vg(T):T.calculatedDuration;return ji(ee)},get speed(){return p},set speed(ee){ee===p||!y||(p=ee,j.time=ji(U))},get state(){return A},play:z,pause:()=>{A="paused",R=U},stop:()=>{m=!0,A!=="idle"&&(A="idle",c&&c(),K())},cancel:()=>{M!==null&&H(M),K()},complete:()=>{A="finished"},sample:ee=>(b=0,H(ee))};return j}function Aw(t){let e;return()=>(e===void 0&&(e=t()),e)}const Cw=Aw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Rw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ul=10,Pw=2e4,Lw=(t,e)=>e.type==="spring"||t==="backgroundColor"||!X_(e.ease);function Dw(t,e,{onUpdate:n,onComplete:i,...r}){if(!(Cw()&&Rw.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(x=>{a=x})};u();let{keyframes:f,duration:d=300,ease:p,times:m}=r;if(Lw(e,r)){const x=au({...r,repeat:0,delay:0});let _={done:!1,value:f[0]};const T=[];let S=0;for(;!_.done&&S<Pw;)_=x.sample(S),T.push(_.value),S+=Ul;m=void 0,f=T,d=S-Ul,p="linear"}const v=VE(t.owner.current,e,f,{...r,duration:d,ease:p,times:m}),g=()=>{c=!1,v.cancel()},h=()=>{c=!0,mt.update(g),a(),u()};return v.onfinish=()=>{c||(t.set(GE(f,r)),i&&i(),h())},{then(x,_){return l.then(x,_)},attachTimeline(x){return v.timeline=x,v.onfinish=null,Dt},get time(){return ji(v.currentTime||0)},set time(x){v.currentTime=hs(x)},get speed(){return v.playbackRate},set speed(x){v.playbackRate=x},get duration(){return ji(d)},play:()=>{o||(v.play(),Qi(g))},pause:()=>v.pause(),stop:()=>{if(o=!0,v.playState==="idle")return;const{currentTime:x}=v;if(x){const _=au({...r,autoplay:!1});t.setWithVelocity(_.sample(x-Ul).value,_.sample(x).value,Ul)}h()},complete:()=>{c||v.finish()},cancel:h}}function Iw({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Dt,pause:Dt,stop:Dt,then:s=>(s(),Promise.resolve()),cancel:Dt,complete:Dt});return e?au({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const Nw={type:"spring",stiffness:500,damping:25,restSpeed:10},Fw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Uw={type:"keyframes",duration:.8},Ow={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kw=(t,{keyframes:e})=>e.length>2?Uw:Ts.has(t)?t.startsWith("scale")?Fw(e[1]):Nw:Ow,Eh=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Fr.test(e)||e==="0")&&!e.startsWith("url(")),Bw=new Set(["brightness","contrast","saturate","opacity"]);function zw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(zu)||[];if(!i)return t;const r=n.replace(i,"");let s=Bw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Vw=/([a-z-]*)\(.*?\)/g,wh={...Fr,getAnimatableNone:t=>{const e=t.match(Vw);return e?e.map(zw).join(" "):t}},Gw={...R_,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:wh,WebkitFilter:wh},G0=t=>Gw[t];function g2(t,e){let n=G0(t);return n!==wh&&(n=Fr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const x2=t=>/^0[^.\s]+$/.test(t);function Hw(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||x2(t)}function Ww(t,e,n,i){const r=Eh(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),Hw(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];s[u]=g2(e,a)}return s}function jw({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function H0(t,e){return t[e]||t.default||t}const Xw={skipAnimations:!1},W0=(t,e,n,i={})=>r=>{const s=H0(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-hs(o);const l=Ww(e,t,n,s),c=l[0],u=l[l.length-1],f=Eh(t,c),d=Eh(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(jw(s)||(p={...p,...kw(t,p)}),p.duration&&(p.duration=hs(p.duration)),p.repeatDelay&&(p.repeatDelay=hs(p.repeatDelay)),!f||!d||zE.current||s.type===!1||Xw.skipAnimations)return Iw(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=Dw(e,t,p);if(m)return m}return au(p)};function lu(t){return!!(En(t)&&t.add)}const v2=t=>/^\-?\d*\.?\d+$/.test(t);function j0(t,e){t.indexOf(e)===-1&&t.push(e)}function X0(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class $0{constructor(){this.subscriptions=[]}add(e){return j0(this.subscriptions,e),()=>X0(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $w=t=>!isNaN(parseFloat(t));class Yw{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=tn;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,mt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>mt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=$w(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new $0);const i=this.events[e].add(n);return e==="change"?()=>{i(),mt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?h2(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(t,e){return new Yw(t,e)}const y2=t=>e=>e.test(t),qw={test:t=>t==="auto",parse:t=>t},_2=[As,Fe,Ei,ur,nE,tE,qw],Qo=t=>_2.find(y2(t)),Kw=[..._2,an,Fr],Zw=t=>Kw.find(y2(t));function Qw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Eo(n))}function Jw(t,e){const n=Gu(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=gE(s[o]);Qw(t,o,a)}}function eT(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),u!=null&&(typeof u=="string"&&(v2(u)||x2(u))?u=parseFloat(u):!Zw(u)&&Fr.test(c)&&(u=g2(l,c)),t.addValue(l,Eo(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function tT(t,e){return e?(e[t]||e.default||e).from:void 0}function nT(t,e,n){const i={};for(const r in t){const s=tT(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function iT({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function rT(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function S2(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||u&&iT(u,f))continue;const m={delay:n,elapsed:0,...H0(s||{},f)};if(window.HandoffAppearAnimations){const h=t.getProps()[M_];if(h){const y=window.HandoffAppearAnimations(h,f,d,mt);y!==null&&(m.elapsed=y,m.isHandoff=!0)}}let v=!m.isHandoff&&!rT(d,p);if(m.type==="spring"&&(d.getVelocity()||m.velocity)&&(v=!1),d.animation&&(v=!1),v)continue;d.start(W0(f,d,p,t.shouldReduceMotion&&Ts.has(f)?{type:!1}:m));const g=d.animation;lu(l)&&(l.add(f),g.then(()=>l.remove(f))),c.push(g)}return o&&Promise.all(c).then(()=>{o&&Jw(t,o)}),c}function Th(t,e,n={}){const i=Gu(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(S2(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return sT(t,e,c+l,u,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function sT(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(oT).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Th(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function oT(t,e){return t.sortNodePosition(e)}function aT(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Th(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Th(t,e,n);else{const r=typeof e=="function"?Gu(t,e,n.custom):e;i=Promise.all(S2(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const lT=[...C0].reverse(),cT=C0.length;function uT(t){return e=>Promise.all(e.map(({animation:n,options:i})=>aT(t,n,i)))}function fT(t){let e=uT(t);const n=hT();let i=!0;const r=(l,c)=>{const u=Gu(t,c);if(u){const{transition:f,transitionEnd:d,...p}=u;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,c){const u=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let m={},v=1/0;for(let h=0;h<cT;h++){const y=lT[h],x=n[y],_=u[y]!==void 0?u[y]:f[y],T=ja(_),S=y===c?x.isActive:null;S===!1&&(v=h);let A=_===f[y]&&_!==u[y]&&T;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),x.protectedKeys={...m},!x.isActive&&S===null||!_&&!x.prevProp||ku(_)||typeof _=="boolean")continue;let b=dT(x.prevProp,_)||y===c&&x.isActive&&!A&&T||h>v&&T,M=!1;const L=Array.isArray(_)?_:[_];let F=L.reduce(r,{});S===!1&&(F={});const{prevResolvedValues:O={}}=x,U={...O,...F},H=G=>{b=!0,p.has(G)&&(M=!0,p.delete(G)),x.needsAnimating[G]=!0};for(const G in U){const K=F[G],N=O[G];if(m.hasOwnProperty(G))continue;let z=!1;ru(K)&&ru(N)?z=!W_(K,N):z=K!==N,z?K!==void 0?H(G):p.add(G):K!==void 0&&p.has(G)?H(G):x.protectedKeys[G]=!0}x.prevProp=_,x.prevResolvedValues=F,x.isActive&&(m={...m,...F}),i&&t.blockInitialAnimation&&(b=!1),b&&(!A||M)&&d.push(...L.map(G=>({animation:G,options:{type:y,...l}})))}if(p.size){const h={};p.forEach(y=>{const x=t.getBaseTarget(y);x!==void 0&&(h[y]=x)}),d.push({animation:h})}let g=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(d):Promise.resolve()}function a(l,c,u){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const d=o(u,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function dT(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!W_(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hT(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}class pT extends zr{constructor(e){super(e),e.animationState||(e.animationState=fT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),ku(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let mT=0;class gT extends zr{constructor(){super(...arguments),this.id=mT++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const xT={animation:{Feature:pT},exit:{Feature:gT}},Gg=(t,e)=>Math.abs(t-e);function vT(t,e){const n=Gg(t.x,e.x),i=Gg(t.y,e.y);return Math.sqrt(n**2+i**2)}class M2{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=kf(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=vT(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:m}=f,{timestamp:v}=tn;this.history.push({...m,timestamp:v});const{onStart:g,onMove:h}=this.handlers;d||(g&&g(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Of(d,this.transformPagePoint),mt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=kf(f.type==="pointercancel"?this.lastMoveEventInfo:Of(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,g),m&&m(f,g)},!B_(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Vu(e),a=Of(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=tn;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,kf(a,this.history)),this.removeListeners=Rr(Wi(this.contextWindow,"pointermove",this.handlePointerMove),Wi(this.contextWindow,"pointerup",this.handlePointerUp),Wi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Qi(this.updatePoint)}}function Of(t,e){return e?{point:e(t.point)}:t}function Hg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function kf({point:t},e){return{point:t,delta:Hg(t,b2(e)),offset:Hg(t,yT(e)),velocity:_T(e,.1)}}function yT(t){return t[0]}function b2(t){return t[t.length-1]}function _T(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=b2(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>hs(e)));)n--;if(!i)return{x:0,y:0};const s=ji(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Un(t){return t.max-t.min}function Ah(t,e=0,n=.01){return Math.abs(t-e)<=n}function Wg(t,e,n,i=.5){t.origin=i,t.originPoint=wt(e.min,e.max,t.origin),t.scale=Un(n)/Un(e),(Ah(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=wt(n.min,n.max,t.origin)-t.originPoint,(Ah(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Ea(t,e,n,i){Wg(t.x,e.x,n.x,i?i.originX:void 0),Wg(t.y,e.y,n.y,i?i.originY:void 0)}function jg(t,e,n){t.min=n.min+e.min,t.max=t.min+Un(e)}function ST(t,e,n){jg(t.x,e.x,n.x),jg(t.y,e.y,n.y)}function Xg(t,e,n){t.min=e.min-n.min,t.max=t.min+Un(e)}function wa(t,e,n){Xg(t.x,e.x,n.x),Xg(t.y,e.y,n.y)}function MT(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?wt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?wt(n,t,i.max):Math.min(t,n)),t}function $g(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function bT(t,{top:e,left:n,bottom:i,right:r}){return{x:$g(t.x,n,r),y:$g(t.y,e,i)}}function Yg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function ET(t,e){return{x:Yg(t.x,e.x),y:Yg(t.y,e.y)}}function wT(t,e){let n=.5;const i=Un(t),r=Un(e);return r>i?n=$a(e.min,e.max-i,t.min):i>r&&(n=$a(t.min,t.max-r,e.min)),Nr(0,1,n)}function TT(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ch=.35;function AT(t=Ch){return t===!1?t=0:t===!0&&(t=Ch),{x:qg(t,"left","right"),y:qg(t,"top","bottom")}}function qg(t,e,n){return{min:Kg(t,e),max:Kg(t,n)}}function Kg(t,e){return typeof t=="number"?t:t[e]||0}const Zg=()=>({translate:0,scale:1,origin:0,originPoint:0}),so=()=>({x:Zg(),y:Zg()}),Qg=()=>({min:0,max:0}),Ut=()=>({x:Qg(),y:Qg()});function Gn(t){return[t("x"),t("y")]}function E2({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function CT({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function RT(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Bf(t){return t===void 0||t===1}function Rh({scale:t,scaleX:e,scaleY:n}){return!Bf(t)||!Bf(e)||!Bf(n)}function Jr(t){return Rh(t)||w2(t)||t.z||t.rotate||t.rotateX||t.rotateY}function w2(t){return Jg(t.x)||Jg(t.y)}function Jg(t){return t&&t!=="0%"}function cu(t,e,n){const i=t-n,r=e*i;return n+r}function ex(t,e,n,i,r){return r!==void 0&&(t=cu(t,r,i)),cu(t,n,i)+e}function Ph(t,e=0,n=1,i,r){t.min=ex(t.min,e,n,i,r),t.max=ex(t.max,e,n,i,r)}function T2(t,{x:e,y:n}){Ph(t.x,e.translate,e.scale,e.originPoint),Ph(t.y,n.translate,n.scale,n.originPoint)}function PT(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&oo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,T2(t,o)),i&&Jr(s.latestValues)&&oo(t,s.latestValues))}e.x=tx(e.x),e.y=tx(e.y)}function tx(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function pr(t,e){t.min=t.min+e,t.max=t.max+e}function nx(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=wt(t.min,t.max,s);Ph(t,e[n],e[i],o,e.scale)}const LT=["x","scaleX","originX"],DT=["y","scaleY","originY"];function oo(t,e){nx(t.x,e,LT),nx(t.y,e,DT)}function A2(t,e){return E2(RT(t.getBoundingClientRect(),e))}function IT(t,e,n){const i=A2(t,n),{scroll:r}=e;return r&&(pr(i.x,r.offset.x),pr(i.y,r.offset.y)),i}const C2=({current:t})=>t?t.ownerDocument.defaultView:null,NT=new WeakMap;class FT{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Vu(u,"page").point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:m}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=V_(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(Ei.test(h)){const{projection:y}=this.visualElement;if(y&&y.layout){const x=y.layout.layoutBox[g];x&&(h=Un(x)*(parseFloat(h)/100))}}this.originPoint[g]=h}),m&&mt.update(()=>m(u,f),!1,!0);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:m,onDrag:v}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:g}=f;if(p&&this.currentDirection===null){this.currentDirection=UT(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),v&&v(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Gn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new M2(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:C2(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&mt.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ol(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=MT(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&io(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=bT(r.layoutBox,n):this.constraints=!1,this.elastic=AT(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=TT(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!io(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=IT(i,r.root,this.visualElement.getTransformPagePoint());let o=ET(r.layout.layoutBox,s);if(n){const a=n(CT(o));this.hasMutatedConstraints=!!a,a&&(o=E2(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Gn(u=>{if(!Ol(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(W0(e,i,0,n))}stopAnimation(){Gn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gn(n=>{const{drag:i}=this.getProps();if(!Ol(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-wt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!io(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=wT({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gn(o=>{if(!Ol(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(wt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;NT.set(this.visualElement,this);const e=this.visualElement.current,n=Wi(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();io(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=zi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Ch,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ol(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function UT(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class OT extends zr{constructor(e){super(e),this.removeGroupControls=Dt,this.removeListeners=Dt,this.controls=new FT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dt}unmount(){this.removeGroupControls(),this.removeListeners()}}const ix=t=>(e,n)=>{t&&mt.update(()=>t(e,n))};class kT extends zr{constructor(){super(...arguments),this.removePointerDownListener=Dt}onPointerDown(e){this.session=new M2(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:C2(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:ix(e),onStart:ix(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&mt.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=Wi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function BT(){const t=Q.useContext(Uu);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=Q.useId();return Q.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Sc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function rx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Jo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Fe.test(t))t=parseFloat(t);else return t;const n=rx(t,e.target.x),i=rx(t,e.target.y);return`${n}% ${i}%`}},zT={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Fr.parse(t);if(r.length>5)return i;const s=Fr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=wt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class VT extends cn.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;Yb(GT),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Sc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||mt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function R2(t){const[e,n]=BT(),i=Q.useContext(P0);return cn.createElement(VT,{...t,layoutGroup:i,switchLayoutGroup:Q.useContext(E_),isPresent:e,safeToRemove:n})}const GT={borderRadius:{...Jo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Jo,borderTopRightRadius:Jo,borderBottomLeftRadius:Jo,borderBottomRightRadius:Jo,boxShadow:zT},P2=["TopLeft","TopRight","BottomLeft","BottomRight"],HT=P2.length,sx=t=>typeof t=="string"?parseFloat(t):t,ox=t=>typeof t=="number"||Fe.test(t);function WT(t,e,n,i,r,s){r?(t.opacity=wt(0,n.opacity!==void 0?n.opacity:1,jT(i)),t.opacityExit=wt(e.opacity!==void 0?e.opacity:1,0,XT(i))):s&&(t.opacity=wt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<HT;o++){const a=`border${P2[o]}Radius`;let l=ax(e,a),c=ax(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ox(l)===ox(c)?(t[a]=Math.max(wt(sx(l),sx(c),i),0),(Ei.test(c)||Ei.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=wt(e.rotate||0,n.rotate||0,i))}function ax(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const jT=L2(0,.5,J_),XT=L2(.5,.95,Dt);function L2(t,e,n){return i=>i<t?0:i>e?1:n($a(t,e,i))}function lx(t,e){t.min=e.min,t.max=e.max}function zn(t,e){lx(t.x,e.x),lx(t.y,e.y)}function cx(t,e,n,i,r){return t-=e,t=cu(t,1/n,i),r!==void 0&&(t=cu(t,1/r,i)),t}function $T(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ei.test(e)&&(e=parseFloat(e),e=wt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=wt(s.min,s.max,i);t===s&&(a-=e),t.min=cx(t.min,e,n,a,r),t.max=cx(t.max,e,n,a,r)}function ux(t,e,[n,i,r],s,o){$T(t,e[n],e[i],e[r],e.scale,s,o)}const YT=["x","scaleX","originX"],qT=["y","scaleY","originY"];function fx(t,e,n,i){ux(t.x,e,YT,n?n.x:void 0,i?i.x:void 0),ux(t.y,e,qT,n?n.y:void 0,i?i.y:void 0)}function dx(t){return t.translate===0&&t.scale===1}function D2(t){return dx(t.x)&&dx(t.y)}function KT(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function I2(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function hx(t){return Un(t.x)/Un(t.y)}class ZT{constructor(){this.members=[]}add(e){j0(this.members,e),e.scheduleRender()}remove(e){if(X0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function px(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const QT=(t,e)=>t.depth-e.depth;class JT{constructor(){this.children=[],this.isDirty=!1}add(e){j0(this.children,e),this.isDirty=!0}remove(e){X0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(QT),this.isDirty=!1,this.children.forEach(e)}}function eA(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Qi(i),t(s-e))};return mt.read(i,!0),()=>Qi(i)}function tA(t){window.MotionDebug&&window.MotionDebug.record(t)}function nA(t){return t instanceof SVGElement&&t.tagName!=="svg"}function iA(t,e,n){const i=En(t)?t:Eo(t);return i.start(W0("",i,e,n)),i.animation}const mx=["","X","Y","Z"],rA={visibility:"hidden"},gx=1e3;let sA=0;const es={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function N2({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=sA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,es.totalNodes=es.resolvedTargetDeltas=es.recalculatedProjection=0,this.nodes.forEach(lA),this.nodes.forEach(hA),this.nodes.forEach(pA),this.nodes.forEach(cA),tA(es)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new JT)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new $0),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=nA(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=eA(d,250),Sc.hasAnimatedSinceResize&&(Sc.hasAnimatedSinceResize=!1,this.nodes.forEach(vx))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||yA,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=u.getProps(),y=!this.targetLayout||!I2(this.targetLayout,m)||p,x=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const _={...H0(v,"layout"),onPlay:g,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else d||vx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xx);return}this.isUpdating||this.nodes.forEach(fA),this.isUpdating=!1,this.nodes.forEach(dA),this.nodes.forEach(oA),this.nodes.forEach(aA),this.clearAllSnapshots();const a=performance.now();tn.delta=Nr(0,1e3/60,a-tn.timestamp),tn.timestamp=a,tn.isProcessing=!0,Rf.update.process(tn),Rf.preRender.process(tn),Rf.render.process(tn),tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(uA),this.sharedNodes.forEach(gA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,mt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){mt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ut(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!D2(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Jr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),_A(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Ut();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(pr(a.x,l.offset.x),pr(a.y,l.offset.y)),a}removeElementScroll(o){const a=Ut();zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){zn(a,o);const{scroll:d}=this.root;d&&(pr(a.x,-d.offset.x),pr(a.y,-d.offset.y))}pr(a.x,u.offset.x),pr(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=Ut();zn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&oo(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Jr(u.latestValues)&&oo(l,u.latestValues)}return Jr(this.latestValues)&&oo(l,this.latestValues),l}removeTransform(o){const a=Ut();zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Jr(c.latestValues))continue;Rh(c.latestValues)&&c.updateSnapshot();const u=Ut(),f=c.measurePageBox();zn(u,f),fx(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Jr(this.latestValues)&&fx(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=tn.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),wa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ST(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zn(this.target,this.layout.layoutBox),T2(this.target,this.targetDelta)):zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),wa(this.relativeTargetOrigin,this.target,p.target),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}es.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rh(this.parent.latestValues)||w2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===tn.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;zn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;PT(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=so(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=so(),this.projectionDeltaWithTransform=so());const v=this.projectionTransform;Ea(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=px(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),es.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=so();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Ut(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,v=p!==m,g=this.getStack(),h=!g||g.members.length<=1,y=!!(v&&!h&&this.options.crossfade===!0&&!this.path.some(vA));this.animationProgress=0;let x;this.mixTargetDelta=_=>{const T=_/1e3;yx(f.x,o.x,T),yx(f.y,o.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xA(this.relativeTarget,this.relativeTargetOrigin,d,T),x&&KT(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ut()),zn(x,this.relativeTarget)),v&&(this.animationValues=u,WT(u,c,this.latestValues,T,y,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=mt.update(()=>{Sc.hasAnimatedSinceResize=!0,this.currentAnimation=iA(0,gx,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&F2(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ut();const f=Un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=Un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}zn(a,l),oo(a,u),Ea(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ZT),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<mx.length;u++){const f="rotate"+mx[u];l[f]&&(c[f]=l[f],o.setStaticValue(f,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return rA;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=_c(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=_c(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=px(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:m}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in nu){if(d[v]===void 0)continue;const{correct:g,applyTo:h}=nu[v],y=c.transform==="none"?d[v]:g(d[v],f);if(h){const x=h.length;for(let _=0;_<x;_++)c[h[_]]=y}else c[v]=y}return this.options.layoutId&&(c.pointerEvents=f===this?_c(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(xx),this.root.sharedNodes.clear()}}}function oA(t){t.updateLayout()}function aA(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Gn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Un(d);d.min=i[f].min,d.max=d.min+p}):F2(s,n.layoutBox,i)&&Gn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Un(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=so();Ea(a,i,n.layoutBox);const l=so();o?Ea(l,t.applyTransform(r,!0),n.measuredBox):Ea(l,i,n.layoutBox);const c=!D2(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const m=Ut();wa(m,n.layoutBox,d.layoutBox);const v=Ut();wa(v,i,p.layoutBox),I2(m,v)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=m,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function lA(t){es.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function cA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function uA(t){t.clearSnapshot()}function xx(t){t.clearMeasurements()}function fA(t){t.isLayoutDirty=!1}function dA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function vx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hA(t){t.resolveTargetDelta()}function pA(t){t.calcProjection()}function mA(t){t.resetRotation()}function gA(t){t.removeLeadSnapshot()}function yx(t,e,n){t.translate=wt(e.translate,0,n),t.scale=wt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _x(t,e,n,i){t.min=wt(e.min,n.min,i),t.max=wt(e.max,n.max,i)}function xA(t,e,n,i){_x(t.x,e.x,n.x,i),_x(t.y,e.y,n.y,i)}function vA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yA={duration:.45,ease:[.4,0,.1,1]},Sx=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Mx=Sx("applewebkit/")&&!Sx("chrome/")?Math.round:Dt;function bx(t){t.min=Mx(t.min),t.max=Mx(t.max)}function _A(t){bx(t.x),bx(t.y)}function F2(t,e,n){return t==="position"||t==="preserve-aspect"&&!Ah(hx(e),hx(n),.2)}const SA=N2({attachResizeListener:(t,e)=>zi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zf={current:void 0},U2=N2({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zf.current){const t=new SA({});t.mount(window),t.setOptions({layoutScroll:!0}),zf.current=t}return zf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),MA={pan:{Feature:kT},drag:{Feature:OT,ProjectionNode:U2,MeasureLayout:R2}},bA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function EA(t){const e=bA.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Lh(t,e,n=1){const[i,r]=EA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return v2(o)?parseFloat(o):o}else return _h(r)?Lh(r,e,n+1):r}function wA(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!_h(s))return;const o=Lh(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!_h(s))continue;const o=Lh(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const TA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),O2=t=>TA.has(t),AA=t=>Object.keys(t).some(O2),Ex=t=>t===As||t===Fe,wx=(t,e)=>parseFloat(t.split(", ")[e]),Tx=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return wx(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?wx(s[1],t):0}},CA=new Set(["x","y","z"]),RA=sl.filter(t=>!CA.has(t));function PA(t){const e=[];return RA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const wo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Tx(4,13),y:Tx(5,14)};wo.translateX=wo.x;wo.translateY=wo.y;const LA=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=wo[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=wo[c](l,s)}),t},DA=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(O2);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],f=Qo(u);const d=e[l];let p;if(ru(d)){const m=d.length,v=d[0]===null?1:0;u=d[v],f=Qo(u);for(let g=v;g<m&&d[g]!==null;g++)p?k0(Qo(d[g])===p):p=Qo(d[g])}else p=Qo(d);if(f!==p)if(Ex(f)&&Ex(p)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===Fe&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(u===0||d===0)?u===0?c.set(p.transform(u)):e[l]=f.transform(d):(o||(s=PA(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=LA(e,t,a);return s.length&&s.forEach(([u,f])=>{t.getValue(u).set(f)}),t.render(),Ou&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function IA(t,e,n,i){return AA(e)?DA(t,e,n,i):{target:e,transitionEnd:i}}const NA=(t,e,n,i)=>{const r=wA(t,e,i);return e=r.target,i=r.transitionEnd,IA(t,e,n,i)},Dh={current:null},k2={current:!1};function FA(){if(k2.current=!0,!!Ou)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Dh.current=t.matches;t.addListener(e),e()}else Dh.current=!1}function UA(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(En(s))t.addValue(r,s),lu(i)&&i.add(r);else if(En(o))t.addValue(r,Eo(s,{owner:t})),lu(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Eo(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Ax=new WeakMap,B2=Object.keys(Xa),OA=B2.length,Cx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],kA=R0.length;class BA{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>mt.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Bu(n),this.isVariantNode=b_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const f in u){const d=u[f];a[f]!==void 0&&En(d)&&(d.set(a[f],!1),lu(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Ax.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),k2.current||FA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ax.delete(this.current),this.projection&&this.projection.unmount(),Qi(this.notifyUpdate),Qi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Ts.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&mt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<OA;l++){const c=B2[l],{isEnabled:u,Feature:f,ProjectionNode:d,MeasureLayout:p}=Xa[c];d&&(o=d),u(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&io(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Cx.length;i++){const r=Cx[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=UA(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<kA;i++){const r=R0[i],s=this.props[r];(ja(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Eo(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=O0(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!En(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new $0),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class z2 extends BA{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=nT(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){eT(this,i,o);const a=NA(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function zA(t){return window.getComputedStyle(t)}class VA extends z2{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Ts.has(n)){const i=G0(n);return i&&i.default||0}else{const i=zA(e),r=(A_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return A2(e,n)}build(e,n,i,r){D0(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return U0(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){I_(e,n,i,r)}}class GA extends z2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ts.has(n)){const i=G0(n);return i&&i.default||0}return n=N_.has(n)?n:A0(n),e.getAttribute(n)}measureInstanceViewportBox(){return Ut()}scrapeMotionValuesFromProps(e,n){return U_(e,n)}build(e,n,i,r){N0(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){F_(e,n,i,r)}mount(e){this.isSVGTag=F0(e.tagName),super.mount(e)}}const HA=(t,e)=>L0(t)?new GA(e,{enableHardwareAcceleration:!1}):new VA(e,{enableHardwareAcceleration:!0}),WA={layout:{ProjectionNode:U2,MeasureLayout:R2}},jA={...xT,...OE,...MA,...WA},Te=Xb((t,e)=>EE(t,e,jA,HA));function V2(){const t=Q.useRef(!1);return T0(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function XA(){const t=V2(),[e,n]=Q.useState(0),i=Q.useCallback(()=>{t.current&&n(e+1)},[e]);return[Q.useCallback(()=>mt.postRender(i),[i]),e]}class $A extends Q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function YA({children:t,isPresent:e}){const n=Q.useId(),i=Q.useRef(null),r=Q.useRef({width:0,height:0,top:0,left:0});return Q.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),Q.createElement($A,{isPresent:e,childRef:i,sizeRef:r},Q.cloneElement(t,{ref:i}))}const Vf=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=O_(qA),l=Q.useId(),c=Q.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u=>{a.set(u,!0);for(const f of a.values())if(!f)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?void 0:[n]);return Q.useMemo(()=>{a.forEach((u,f)=>a.set(f,!1))},[n]),Q.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=Q.createElement(YA,{isPresent:n},t)),Q.createElement(Uu.Provider,{value:c},t)};function qA(){return new Map}function KA(t){return Q.useEffect(()=>()=>t(),[])}const ts=t=>t.key||"";function ZA(t,e){t.forEach(n=>{const i=ts(n);e.set(i,n)})}function QA(t){const e=[];return Q.Children.forEach(t,n=>{Q.isValidElement(n)&&e.push(n)}),e}const G2=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=Q.useContext(P0).forceRender||XA()[0],l=V2(),c=QA(t);let u=c;const f=Q.useRef(new Map).current,d=Q.useRef(u),p=Q.useRef(new Map).current,m=Q.useRef(!0);if(T0(()=>{m.current=!1,ZA(c,p),d.current=u}),KA(()=>{m.current=!0,p.clear(),f.clear()}),m.current)return Q.createElement(Q.Fragment,null,u.map(y=>Q.createElement(Vf,{key:ts(y),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},y)));u=[...u];const v=d.current.map(ts),g=c.map(ts),h=v.length;for(let y=0;y<h;y++){const x=v[y];g.indexOf(x)===-1&&!f.has(x)&&f.set(x,void 0)}return o==="wait"&&f.size&&(u=[]),f.forEach((y,x)=>{if(g.indexOf(x)!==-1)return;const _=p.get(x);if(!_)return;const T=v.indexOf(x);let S=y;if(!S){const A=()=>{f.delete(x);const R=Array.from(p.keys()).filter(b=>!g.includes(b));if(R.forEach(b=>p.delete(b)),d.current=c.filter(b=>{const M=ts(b);return M===x||R.includes(M)}),!f.size){if(l.current===!1)return;a(),i&&i()}};S=Q.createElement(Vf,{key:ts(_),isPresent:!1,onExitComplete:A,custom:e,presenceAffectsLayout:s,mode:o},_),f.set(x,S)}u.splice(T,0,S)}),u=u.map(y=>{const x=y.key;return f.has(x)?y:Q.createElement(Vf,{key:ts(y),isPresent:!0,presenceAffectsLayout:s,mode:o},y)}),Q.createElement(Q.Fragment,null,f.size?u:u.map(y=>Q.cloneElement(y)))};var yn=function(){return yn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yn.apply(this,arguments)};function uu(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var vt="-ms-",Ta="-moz-",rt="-webkit-",H2="comm",Hu="rule",Y0="decl",JA="@import",W2="@keyframes",eC="@layer",j2=Math.abs,q0=String.fromCharCode,Ih=Object.assign;function tC(t,e){return Xt(t,0)^45?(((e<<2^Xt(t,0))<<2^Xt(t,1))<<2^Xt(t,2))<<2^Xt(t,3):0}function X2(t){return t.trim()}function Fi(t,e){return(t=e.exec(t))?t[0]:t}function Xe(t,e,n){return t.replace(e,n)}function Mc(t,e,n){return t.indexOf(e,n)}function Xt(t,e){return t.charCodeAt(e)|0}function To(t,e,n){return t.slice(e,n)}function vi(t){return t.length}function $2(t){return t.length}function fa(t,e){return e.push(t),t}function nC(t,e){return t.map(e).join("")}function Rx(t,e){return t.filter(function(n){return!Fi(n,e)})}var Wu=1,Ao=1,Y2=0,Zn=0,Ot=0,Bo="";function ju(t,e,n,i,r,s,o,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Wu,column:Ao,length:o,return:"",siblings:a}}function fr(t,e){return Ih(ju("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ps(t){for(;t.root;)t=fr(t.root,{children:[t]});fa(t,t.siblings)}function iC(){return Ot}function rC(){return Ot=Zn>0?Xt(Bo,--Zn):0,Ao--,Ot===10&&(Ao=1,Wu--),Ot}function di(){return Ot=Zn<Y2?Xt(Bo,Zn++):0,Ao++,Ot===10&&(Ao=1,Wu++),Ot}function ps(){return Xt(Bo,Zn)}function bc(){return Zn}function Xu(t,e){return To(Bo,t,e)}function Nh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sC(t){return Wu=Ao=1,Y2=vi(Bo=t),Zn=0,[]}function oC(t){return Bo="",t}function Gf(t){return X2(Xu(Zn-1,Fh(t===91?t+2:t===40?t+1:t)))}function aC(t){for(;(Ot=ps())&&Ot<33;)di();return Nh(t)>2||Nh(Ot)>3?"":" "}function lC(t,e){for(;--e&&di()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return Xu(t,bc()+(e<6&&ps()==32&&di()==32))}function Fh(t){for(;di();)switch(Ot){case t:return Zn;case 34:case 39:t!==34&&t!==39&&Fh(Ot);break;case 40:t===41&&Fh(t);break;case 92:di();break}return Zn}function cC(t,e){for(;di()&&t+Ot!==57;)if(t+Ot===84&&ps()===47)break;return"/*"+Xu(e,Zn-1)+"*"+q0(t===47?t:di())}function uC(t){for(;!Nh(ps());)di();return Xu(t,Zn)}function fC(t){return oC(Ec("",null,null,null,[""],t=sC(t),0,[0],t))}function Ec(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,f=o,d=0,p=0,m=0,v=1,g=1,h=1,y=0,x="",_=r,T=s,S=i,A=x;g;)switch(m=y,y=di()){case 40:if(m!=108&&Xt(A,f-1)==58){Mc(A+=Xe(Gf(y),"&","&\f"),"&\f",j2(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:A+=Gf(y);break;case 9:case 10:case 13:case 32:A+=aC(m);break;case 92:A+=lC(bc()-1,7);continue;case 47:switch(ps()){case 42:case 47:fa(dC(cC(di(),bc()),e,n,l),l);break;default:A+="/"}break;case 123*v:a[c++]=vi(A)*h;case 125*v:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:h==-1&&(A=Xe(A,/\f/g,"")),p>0&&vi(A)-f&&fa(p>32?Lx(A+";",i,n,f-1,l):Lx(Xe(A," ","")+";",i,n,f-2,l),l);break;case 59:A+=";";default:if(fa(S=Px(A,e,n,c,u,r,a,x,_=[],T=[],f,s),s),y===123)if(u===0)Ec(A,e,S,S,_,s,f,a,T);else switch(d===99&&Xt(A,3)===110?100:d){case 100:case 108:case 109:case 115:Ec(t,S,S,i&&fa(Px(t,S,S,0,0,r,a,x,r,_=[],f,T),T),r,T,f,a,i?_:T);break;default:Ec(A,S,S,S,[""],T,0,a,T)}}c=u=p=0,v=h=1,x=A="",f=o;break;case 58:f=1+vi(A),p=m;default:if(v<1){if(y==123)--v;else if(y==125&&v++==0&&rC()==125)continue}switch(A+=q0(y),y*v){case 38:h=u>0?1:(A+="\f",-1);break;case 44:a[c++]=(vi(A)-1)*h,h=1;break;case 64:ps()===45&&(A+=Gf(di())),d=ps(),u=f=vi(x=A+=uC(bc())),y++;break;case 45:m===45&&vi(A)==2&&(v=0)}}return s}function Px(t,e,n,i,r,s,o,a,l,c,u,f){for(var d=r-1,p=r===0?s:[""],m=$2(p),v=0,g=0,h=0;v<i;++v)for(var y=0,x=To(t,d+1,d=j2(g=o[v])),_=t;y<m;++y)(_=X2(g>0?p[y]+" "+x:Xe(x,/&\f/g,p[y])))&&(l[h++]=_);return ju(t,e,n,r===0?Hu:a,l,c,u,f)}function dC(t,e,n,i){return ju(t,e,n,H2,q0(iC()),To(t,2,-2),0,i)}function Lx(t,e,n,i,r){return ju(t,e,n,Y0,To(t,0,i),To(t,i+1,-1),i,r)}function q2(t,e,n){switch(tC(t,e)){case 5103:return rt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return rt+t+t;case 4789:return Ta+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+t+Ta+t+vt+t+t;case 5936:switch(Xt(t,e+11)){case 114:return rt+t+vt+Xe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return rt+t+vt+Xe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return rt+t+vt+Xe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return rt+t+vt+t+t;case 6165:return rt+t+vt+"flex-"+t+t;case 5187:return rt+t+Xe(t,/(\w+).+(:[^]+)/,rt+"box-$1$2"+vt+"flex-$1$2")+t;case 5443:return rt+t+vt+"flex-item-"+Xe(t,/flex-|-self/g,"")+(Fi(t,/flex-|baseline/)?"":vt+"grid-row-"+Xe(t,/flex-|-self/g,""))+t;case 4675:return rt+t+vt+"flex-line-pack"+Xe(t,/align-content|flex-|-self/g,"")+t;case 5548:return rt+t+vt+Xe(t,"shrink","negative")+t;case 5292:return rt+t+vt+Xe(t,"basis","preferred-size")+t;case 6060:return rt+"box-"+Xe(t,"-grow","")+rt+t+vt+Xe(t,"grow","positive")+t;case 4554:return rt+Xe(t,/([^-])(transform)/g,"$1"+rt+"$2")+t;case 6187:return Xe(Xe(Xe(t,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),t,"")+t;case 5495:case 3959:return Xe(t,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return Xe(Xe(t,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+rt+t+t;case 4200:if(!Fi(t,/flex-|baseline/))return vt+"grid-column-align"+To(t,e)+t;break;case 2592:case 3360:return vt+Xe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Fi(i.props,/grid-\w+-end/)})?~Mc(t+(n=n[e].value),"span",0)?t:vt+Xe(t,"-start","")+t+vt+"grid-row-span:"+(~Mc(n,"span",0)?Fi(n,/\d+/):+Fi(n,/\d+/)-+Fi(t,/\d+/))+";":vt+Xe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Fi(i.props,/grid-\w+-start/)})?t:vt+Xe(Xe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Xe(t,/(.+)-inline(.+)/,rt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vi(t)-1-e>6)switch(Xt(t,e+1)){case 109:if(Xt(t,e+4)!==45)break;case 102:return Xe(t,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+Ta+(Xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mc(t,"stretch",0)?q2(Xe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Xe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return vt+r+":"+s+c+(o?vt+r+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Xt(t,e+6)===121)return Xe(t,":",":"+rt)+t;break;case 6444:switch(Xt(t,Xt(t,14)===45?18:11)){case 120:return Xe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(Xt(t,14)===45?"inline-":"")+"box$3$1"+rt+"$2$3$1"+vt+"$2box$3")+t;case 100:return Xe(t,":",":"+vt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(t,"scroll-","scroll-snap-")+t}return t}function fu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function hC(t,e,n,i){switch(t.type){case eC:if(t.children.length)break;case JA:case Y0:return t.return=t.return||t.value;case H2:return"";case W2:return t.return=t.value+"{"+fu(t.children,i)+"}";case Hu:if(!vi(t.value=t.props.join(",")))return""}return vi(n=fu(t.children,i))?t.return=t.value+"{"+n+"}":""}function pC(t){var e=$2(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function mC(t){return function(e){e.root||(e=e.return)&&t(e)}}function gC(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Y0:t.return=q2(t.value,t.length,n);return;case W2:return fu([fr(t,{value:Xe(t.value,"@","@"+rt)})],i);case Hu:if(t.length)return nC(n=t.props,function(r){switch(Fi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ps(fr(t,{props:[Xe(r,/:(read-\w+)/,":"+Ta+"$1")]})),Ps(fr(t,{props:[r]})),Ih(t,{props:Rx(n,i)});break;case"::placeholder":Ps(fr(t,{props:[Xe(r,/:(plac\w+)/,":"+rt+"input-$1")]})),Ps(fr(t,{props:[Xe(r,/:(plac\w+)/,":"+Ta+"$1")]})),Ps(fr(t,{props:[Xe(r,/:(plac\w+)/,vt+"input-$1")]})),Ps(fr(t,{props:[r]})),Ih(t,{props:Rx(n,i)});break}return""})}}var xC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rn={},Co=typeof process<"u"&&Rn!==void 0&&(Rn.REACT_APP_SC_ATTR||Rn.SC_ATTR)||"data-styled",K2="active",Z2="data-styled-version",$u="6.1.19",K0=`/*!sc*/
`,du=typeof window<"u"&&typeof document<"u",vC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==""?Rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.SC_DISABLE_SPEEDY!==void 0&&Rn.SC_DISABLE_SPEEDY!==""&&Rn.SC_DISABLE_SPEEDY!=="false"&&Rn.SC_DISABLE_SPEEDY),Yu=Object.freeze([]),Ro=Object.freeze({});function yC(t,e,n){return n===void 0&&(n=Ro),t.theme!==n.theme&&t.theme||e||n.theme}var Q2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_C=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SC=/(^-|-$)/g;function Dx(t){return t.replace(_C,"-").replace(SC,"")}var MC=/(a)(d)/gi,kl=52,Ix=function(t){return String.fromCharCode(t+(t>25?39:97))};function Uh(t){var e,n="";for(e=Math.abs(t);e>kl;e=e/kl|0)n=Ix(e%kl)+n;return(Ix(e%kl)+n).replace(MC,"$1-$2")}var Hf,J2=5381,ao=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},e3=function(t){return ao(J2,t)};function bC(t){return Uh(e3(t)>>>0)}function EC(t){return t.displayName||t.name||"Component"}function Wf(t){return typeof t=="string"&&!0}var t3=typeof Symbol=="function"&&Symbol.for,n3=t3?Symbol.for("react.memo"):60115,wC=t3?Symbol.for("react.forward_ref"):60112,TC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},AC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CC=((Hf={})[wC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hf[n3]=i3,Hf);function Nx(t){return("type"in(e=t)&&e.type.$$typeof)===n3?i3:"$$typeof"in t?CC[t.$$typeof]:TC;var e}var RC=Object.defineProperty,PC=Object.getOwnPropertyNames,Fx=Object.getOwnPropertySymbols,LC=Object.getOwnPropertyDescriptor,DC=Object.getPrototypeOf,Ux=Object.prototype;function r3(t,e,n){if(typeof e!="string"){if(Ux){var i=DC(e);i&&i!==Ux&&r3(t,i,n)}var r=PC(e);Fx&&(r=r.concat(Fx(e)));for(var s=Nx(t),o=Nx(e),a=0;a<r.length;++a){var l=r[a];if(!(l in AC||n&&n[l]||o&&l in o||s&&l in s)){var c=LC(e,l);try{RC(t,l,c)}catch{}}}}return t}function Po(t){return typeof t=="function"}function Z0(t){return typeof t=="object"&&"styledComponentId"in t}function cs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ox(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Ya(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Oh(t,e,n){if(n===void 0&&(n=!1),!n&&!Ya(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Oh(t[i],e[i]);else if(Ya(e))for(var i in e)t[i]=Oh(t[i],e[i]);return t}function Q0(t,e){Object.defineProperty(t,"toString",{value:e})}function cl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var IC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw cl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(K0);return n},t}(),wc=new Map,hu=new Map,Tc=1,Bl=function(t){if(wc.has(t))return wc.get(t);for(;hu.has(Tc);)Tc++;var e=Tc++;return wc.set(t,e),hu.set(e,t),e},NC=function(t,e){Tc=e+1,wc.set(t,e),hu.set(e,t)},FC="style[".concat(Co,"][").concat(Z2,'="').concat($u,'"]'),UC=new RegExp("^".concat(Co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),OC=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},kC=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(K0),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(UC);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(NC(u,c),OC(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},kx=function(t){for(var e=document.querySelectorAll(FC),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(Co)!==K2&&(kC(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function BC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var s3=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Co,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(Co,K2),i.setAttribute(Z2,$u);var o=BC();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},zC=function(){function t(e){this.element=s3(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===n)return o}throw cl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),VC=function(){function t(e){this.element=s3(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),GC=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Bx=du,HC={isServer:!du,useCSSOMInjection:!vC},o3=function(){function t(e,n,i){e===void 0&&(e=Ro),n===void 0&&(n={});var r=this;this.options=yn(yn({},HC),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&du&&Bx&&(Bx=!1,kx(this)),Q0(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var d=function(h){return hu.get(h)}(f);if(d===void 0)return"continue";var p=s.names.get(d),m=o.getGroup(f);if(p===void 0||!p.size||m.length===0)return"continue";var v="".concat(Co,".g").concat(f,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(h){h.length>0&&(g+="".concat(h,","))}),l+="".concat(m).concat(v,'{content:"').concat(g,'"}').concat(K0)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return Bl(e)},t.prototype.rehydrate=function(){!this.server&&du&&kx(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(yn(yn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new GC(r):i?new zC(r):new VC(r)}(this.options),new IC(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Bl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Bl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Bl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),WC=/&/g,jC=/^\s*\/\/.*$/gm;function a3(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=a3(n.children,e)),n})}function XC(t){var e,n,i,r=Ro,s=r.options,o=s===void 0?Ro:s,a=r.plugins,l=a===void 0?Yu:a,c=function(d,p,m){return m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===Hu&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(WC,n).replace(i,c))}),o.prefix&&u.push(gC),u.push(hC);var f=function(d,p,m,v){p===void 0&&(p=""),m===void 0&&(m=""),v===void 0&&(v="&"),e=v,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=d.replace(jC,""),h=fC(m||p?"".concat(m," ").concat(p," { ").concat(g," }"):g);o.namespace&&(h=a3(h,o.namespace));var y=[];return fu(h,pC(u.concat(mC(function(x){return y.push(x)})))),y};return f.hash=l.length?l.reduce(function(d,p){return p.name||cl(15),ao(d,p.name)},J2).toString():"",f}var $C=new o3,kh=XC(),l3=cn.createContext({shouldForwardProp:void 0,styleSheet:$C,stylis:kh});l3.Consumer;cn.createContext(void 0);function zx(){return Q.useContext(l3)}var YC=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=kh);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Q0(this,function(){throw cl(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=kh),this.name+e.hash},t}(),qC=function(t){return t>="A"&&t<="Z"};function Vx(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;qC(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var c3=function(t){return t==null||t===!1||t===""},u3=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!c3(s)&&(Array.isArray(s)&&s.isCss||Po(s)?i.push("".concat(Vx(r),":"),s,";"):Ya(s)?i.push.apply(i,uu(uu(["".concat(r," {")],u3(s),!1),["}"],!1)):i.push("".concat(Vx(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in xC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ms(t,e,n,i){if(c3(t))return[];if(Z0(t))return[".".concat(t.styledComponentId)];if(Po(t)){if(!Po(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return ms(r,e,n,i)}var s;return t instanceof YC?n?(t.inject(n,i),[t.getName(i)]):[t]:Ya(t)?u3(t):Array.isArray(t)?Array.prototype.concat.apply(Yu,t.map(function(o){return ms(o,e,n,i)})):[t.toString()]}function KC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Po(n)&&!Z0(n))return!1}return!0}var ZC=e3($u),QC=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&KC(e),this.componentId=n,this.baseHash=ao(ZC,n),this.baseStyle=i,o3.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=cs(r,this.staticRulesId);else{var s=Ox(ms(this.rules,e,n,i)),o=Uh(ao(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}r=cs(r,o),this.staticRulesId=o}else{for(var l=ao(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var d=Ox(ms(f,e,n,i));l=ao(l,d+u),c+=d}}if(c){var p=Uh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=cs(r,p)}}return r},t}(),f3=cn.createContext(void 0);f3.Consumer;var jf={};function JC(t,e,n){var i=Z0(t),r=t,s=!Wf(t),o=e.attrs,a=o===void 0?Yu:o,l=e.componentId,c=l===void 0?function(_,T){var S=typeof _!="string"?"sc":Dx(_);jf[S]=(jf[S]||0)+1;var A="".concat(S,"-").concat(bC($u+S+jf[S]));return T?"".concat(T,"-").concat(A):A}(e.displayName,e.parentComponentId):l,u=e.displayName,f=u===void 0?function(_){return Wf(_)?"styled.".concat(_):"Styled(".concat(EC(_),")")}(t):u,d=e.displayName&&e.componentId?"".concat(Dx(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;m=function(_,T){return v(_,T)&&g(_,T)}}else m=v}var h=new QC(n,d,i?r.componentStyle:void 0);function y(_,T){return function(S,A,R){var b=S.attrs,M=S.componentStyle,L=S.defaultProps,F=S.foldedComponentIds,O=S.styledComponentId,U=S.target,H=cn.useContext(f3),G=zx(),K=S.shouldForwardProp||G.shouldForwardProp,N=yC(A,H,L)||Ro,z=function(Ve,Y,Z){for(var le,ve=yn(yn({},Y),{className:void 0,theme:Z}),ge=0;ge<Ve.length;ge+=1){var Ee=Po(le=Ve[ge])?le(ve):le;for(var tt in Ee)ve[tt]=tt==="className"?cs(ve[tt],Ee[tt]):tt==="style"?yn(yn({},ve[tt]),Ee[tt]):Ee[tt]}return Y.className&&(ve.className=cs(ve.className,Y.className)),ve}(b,A,N),j=z.as||U,ee={};for(var fe in z)z[fe]===void 0||fe[0]==="$"||fe==="as"||fe==="theme"&&z.theme===N||(fe==="forwardedAs"?ee.as=z.forwardedAs:K&&!K(fe,j)||(ee[fe]=z[fe]));var Ie=function(Ve,Y){var Z=zx(),le=Ve.generateAndInjectStyles(Y,Z.styleSheet,Z.stylis);return le}(M,z),Ue=cs(F,O);return Ie&&(Ue+=" "+Ie),z.className&&(Ue+=" "+z.className),ee[Wf(j)&&!Q2.has(j)?"class":"className"]=Ue,R&&(ee.ref=R),Q.createElement(j,ee)}(x,_,T)}y.displayName=f;var x=cn.forwardRef(y);return x.attrs=p,x.componentStyle=h,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=i?cs(r.foldedComponentIds,r.styledComponentId):"",x.styledComponentId=d,x.target=i?r.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=i?function(T){for(var S=[],A=1;A<arguments.length;A++)S[A-1]=arguments[A];for(var R=0,b=S;R<b.length;R++)Oh(T,b[R],!0);return T}({},r.defaultProps,_):_}}),Q0(x,function(){return".".concat(x.styledComponentId)}),s&&r3(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Gx(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Hx=function(t){return Object.assign(t,{isCss:!0})};function e5(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Po(t)||Ya(t))return Hx(ms(Gx(Yu,uu([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ms(i):Hx(ms(Gx(i,e)))}function Bh(t,e,n){if(n===void 0&&(n=Ro),!e)throw cl(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,e5.apply(void 0,uu([r],s,!1)))};return i.attrs=function(r){return Bh(t,e,yn(yn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Bh(t,e,yn(yn({},n),r))},i}var d3=function(t){return Bh(JC,t)},st=d3;Q2.forEach(function(t){st[t]=d3(t)});const t5=()=>E.jsx(n5,{children:E.jsxs("div",{className:"loader-wrapper",children:[E.jsx("span",{className:"loader-letter",children:"G"}),E.jsx("span",{className:"loader-letter",children:"e"}),E.jsx("span",{className:"loader-letter",children:"n"}),E.jsx("span",{className:"loader-letter",children:"e"}),E.jsx("span",{className:"loader-letter",children:"r"}),E.jsx("span",{className:"loader-letter",children:"a"}),E.jsx("span",{className:"loader-letter",children:"t"}),E.jsx("span",{className:"loader-letter",children:"i"}),E.jsx("span",{className:"loader-letter",children:"n"}),E.jsx("span",{className:"loader-letter",children:"g"}),E.jsx("div",{className:"loader"})]})}),n5=st.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    width: auto;
    margin: 2rem;
    font-family: 'Poppins', sans-serif;
    font-size: 14em;
    font-weight: 600;
    user-select: none;
    color: #fff;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: transparent;
    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 6px,
      black 7px,
      black 8px
    );
  }

  .loader::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 50%),
      radial-gradient(circle at 45% 45%, #a78bfa 0%, transparent 45%),
      radial-gradient(circle at 55% 55%, #7c3aed 0%, transparent 45%),
      radial-gradient(circle at 45% 55%, #8b5cf6 0%, transparent 45%),
      radial-gradient(circle at 55% 45%, #a78bfa 0%, transparent 45%);
    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );
    animation: transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;
    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  @keyframes transform-animation {
    0% {
      transform: translate(-55%);
    }
    100% {
      transform: translate(55%);
    }
  }

  @keyframes opacity-animation {
    0%,
    100% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0;
    animation: loader-letter-anim 4s infinite linear;
    z-index: 2;
  }

  .loader-letter:nth-child(1) {
    animation-delay: 0.1s;
  }
  .loader-letter:nth-child(2) {
    animation-delay: 0.205s;
  }
  .loader-letter:nth-child(3) {
    animation-delay: 0.31s;
  }
  .loader-letter:nth-child(4) {
    animation-delay: 0.415s;
  }
  .loader-letter:nth-child(5) {
    animation-delay: 0.521s;
  }
  .loader-letter:nth-child(6) {
    animation-delay: 0.626s;
  }
  .loader-letter:nth-child(7) {
    animation-delay: 0.731s;
  }
  .loader-letter:nth-child(8) {
    animation-delay: 0.837s;
  }
  .loader-letter:nth-child(9) {
    animation-delay: 0.942s;
  }
  .loader-letter:nth-child(10) {
    animation-delay: 1.047s;
  }

  @keyframes loader-letter-anim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      text-shadow: 0 0 4px #fff;
      transform: scale(1.1) translateY(-2px);
    }
    20% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`;var h3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wx=cn.createContext&&cn.createContext(h3),Pr=function(){return Pr=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Pr.apply(this,arguments)},i5=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function p3(t){return t&&t.map(function(e,n){return cn.createElement(e.tag,Pr({key:n},e.attr),p3(e.child))})}function pi(t){return function(e){return cn.createElement(r5,Pr({attr:Pr({},t.attr)},e),p3(t.child))}}function r5(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,o=i5(t,["attr","size","title"]),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),cn.createElement("svg",Pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Pr(Pr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&cn.createElement("title",null,s),t.children)};return Wx!==void 0?cn.createElement(Wx.Consumer,null,function(n){return e(n)}):e(h3)}function pu(t){return pi({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function s5(t){return pi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(t)}function m3(t){return pi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function o5(t){return pi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function a5(t){return pi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function g3(t){return pi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(t)}function x3(t){return pi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}function l5(t){return pi({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(t)}function c5(t){return pi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(t)}function u5(t){return pi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function f5(t){return pi({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const jx=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Resume",href:"#rolesresume"},{name:"Projects",href:"#projects"},{name:"Certifications",href:"#certifications"},{name:"Contact",href:"#contact"}],d5=()=>{const[t,e]=Q.useState(!1),[n,i]=Q.useState(!1);return Q.useEffect(()=>{const r=()=>e(window.scrollY>50);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),E.jsxs(E.Fragment,{children:[E.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",padding:t?"20px 0":"30px 0",zIndex:1e3,transition:"all 0.3s ease",pointerEvents:"none"},children:E.jsxs(Te.nav,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.2},style:{pointerEvents:"auto"},children:[E.jsx("div",{style:{display:"flex",alignItems:"center",gap:"30px",padding:"12px 30px",background:t?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.3)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"50px",boxShadow:t?"0 8px 32px rgba(0, 0, 0, 0.4)":"0 4px 16px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease"},className:"desktop-nav",children:jx.map((r,s)=>E.jsx(Te.a,{href:r.href,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.3+s*.08},whileHover:{scale:1.05,color:"#8b5cf6"},style:{color:"#fff",fontSize:"0.9rem",fontWeight:500,transition:"color 0.3s",whiteSpace:"nowrap"},children:r.name},r.name))}),E.jsx("button",{onClick:()=>i(!n),className:"mobile-menu-btn",style:{display:"none",background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.3)",borderRadius:"50%",width:"50px",height:"50px",color:"#8b5cf6",fontSize:"1.3rem",cursor:"pointer",alignItems:"center",justifyContent:"center"},children:n?E.jsx(f5,{}):E.jsx(a5,{})})]})}),E.jsx(G2,{children:n&&E.jsx(Te.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{type:"tween"},className:"mobile-nav",style:{position:"fixed",top:0,right:0,width:"70%",height:"100vh",background:"rgba(0, 0, 0, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",padding:"100px 40px",display:"flex",flexDirection:"column",gap:"30px",zIndex:999,borderLeft:"1px solid rgba(139, 92, 246, 0.3)"},children:jx.map(r=>E.jsx(Te.a,{href:r.href,onClick:()=>i(!1),whileHover:{x:10,color:"#8b5cf6"},style:{color:"#fff",fontSize:"1.2rem",fontWeight:500,transition:"all 0.3s"},children:r.name},r.name))})}),E.jsx("style",{children:`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `})]})};function Aa(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function zh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function h5(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Xx(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function $x(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function p5(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function m5(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function Xf(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function g5(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function x5(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Yx(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function v5(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function y5(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Vh(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function v3(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function qx(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=r*l-s*a,t[1]=s*o-i*l,t[2]=i*a-r*o,t}function _5(t,e,n,i){let r=e[0],s=e[1],o=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=o+i*(n[2]-o),t}function S5(t,e,n,i,r){const s=Math.exp(-i*r);let o=e[0],a=e[1],l=e[2];return t[0]=n[0]+(o-n[0])*s,t[1]=n[1]+(a-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function M5(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/o,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/o,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/o,t}function b5(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/o,t[1]=(n[1]*i+n[5]*r+n[9]*s)/o,t[2]=(n[2]*i+n[6]*r+n[10]*s)/o,t}function E5(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function w5(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2],c=n[3],u=a*s-l*r,f=l*i-o*s,d=o*r-a*i,p=a*d-l*f,m=l*u-o*d,v=o*f-a*u,g=c*2;return u*=g,f*=g,d*=g,p*=2,m*=2,v*=2,t[0]=i+u+p,t[1]=r+f+m,t[2]=s+d+v,t}const T5=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){zh(t,n),zh(e,i),Vh(t,t),Vh(e,e);let r=v3(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function A5(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class li extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(h5(this,e,n,i),this)}copy(e){return zh(this,e),this}add(e,n){return n?Xx(this,e,n):Xx(this,this,e),this}sub(e,n){return n?$x(this,e,n):$x(this,this,e),this}multiply(e){return e.length?p5(this,this,e):Xf(this,this,e),this}divide(e){return e.length?m5(this,this,e):Xf(this,this,1/e),this}inverse(e=this){return y5(this,e),this}len(){return Aa(this)}distance(e){return e?g5(this,e):Aa(this)}squaredLen(){return Yx(this)}squaredDistance(e){return e?x5(this,e):Yx(this)}negate(e=this){return v5(this,e),this}cross(e,n){return n?qx(this,e,n):qx(this,this,e),this}scale(e){return Xf(this,this,e),this}normalize(){return Vh(this,this),this}dot(e){return v3(this,e)}equals(e){return A5(this,e)}applyMatrix3(e){return E5(this,this,e),this}applyMatrix4(e){return M5(this,this,e),this}scaleRotateMatrix4(e){return b5(this,this,e),this}applyQuaternion(e){return w5(this,this,e),this}angle(e){return T5(this,e)}lerp(e,n){return _5(this,this,e,n),this}smoothLerp(e,n,i){return S5(this,this,e,n,i),this}clone(){return new li(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const Kx=new li;let C5=1,R5=1,Zx=!1;class P5{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=C5++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=R5++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;r===35674&&(o=2),r===35675&&(o=3),r===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*4,c=o===1?0:o*4;for(let u=0;u<o;u++)this.gl.vertexAttribPointer(n+u,a,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(n+u),this.gl.renderer.vertexAttribDivisor(n+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:o})=>{const a=this.attributes[o];a.needsUpdate&&this.updateAttribute(a)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Zx)return console.warn("No position buffer data found to compute bounds"),Zx=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new li,max:new li,center:new li,scale:new li,radius:1/0});const r=this.bounds.min,s=this.bounds.max,o=this.bounds.center,a=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const u=n[l],f=n[l+1],d=n[l+2];r.x=Math.min(u,r.x),r.y=Math.min(f,r.y),r.z=Math.min(d,r.z),s.x=Math.max(u,s.x),s.y=Math.max(f,s.y),s.z=Math.max(d,s.z)}a.sub(s,r),o.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,o=n.length;s<o;s+=i)Kx.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(Kx));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let L5=1;const Qx={};class y3{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:o=e.BACK,frontFace:a=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=L5++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=o,this.frontFace=a,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Jx(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Jx(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let o=0;o<i;o++){let a=this.gl.getActiveUniform(this.program,o);this.uniformLocations.set(a,this.gl.getUniformLocation(this.program,a.name));const l=a.name.match(/(\w+)/g);a.uniformName=l[0],a.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const a=this.gl.getActiveAttrib(this.program,o),l=this.gl.getAttribLocation(this.program,a.name);l!==-1&&(r[l]=a.name,this.attributeLocations.set(a,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let o=this.uniforms[s.uniformName];for(const a of s.nameComponents){if(!o)break;if(a in o)o=o[a];else{if(Array.isArray(o.value))break;o=void 0;break}}if(!o)return e1(`Active uniform ${s.name} has not been supplied`);if(o&&o.value===void 0)return e1(`${s.name} uniform is missing a value parameter`);if(o.value.texture)return n=n+1,o.value.update(n),$f(this.gl,s.type,r,n);if(o.value.length&&o.value[0].texture){const a=[];return o.value.forEach(l=>{n=n+1,l.update(n),a.push(n)}),$f(this.gl,s.type,r,a)}$f(this.gl,s.type,r,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function $f(t,e,n,i){i=i.length?D5(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(I5(r,i))return;r.set?r.set(i):N5(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function Jx(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function D5(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=Qx[i];r||(Qx[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function I5(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function N5(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Yf=0;function e1(t){Yf>100||(console.warn(t),Yf++,Yf>100&&console.warn("More than 100 program warnings - stopping logs."))}const qf=new li;let F5=1;class _3{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:f="default",autoClear:d=!0,webgl:p=2}={}){const m={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f};this.dpr=r,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=c,this.autoClear=d,this.id=F5++,p===2&&(this.gl=e.getContext("webgl2",m)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",m)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;o.draw&&(i&&o.frustumCulled&&n&&!n.frustumIntersectsMesh(o)||s.push(o))}),r){const o=[],a=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?a.push(c):l.push(c):o.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(qf),qf.applyMatrix4(n.projectionViewMatrix),c.zDepth=qf.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),l.sort(this.sortUI),s=o.concat(a,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:o=!0,clear:a}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(a||this.autoClear&&a!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:o,sort:s}).forEach(c=>{c.draw({camera:n})})}}function U5(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function O5(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function k5(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=i*o,t[2]=r*o,t[3]=s*o,t}function B5(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function z5(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function V5(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function t1(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+o*a+r*c-s*l,t[1]=r*u+o*l+s*a-i*c,t[2]=s*u+o*c+i*l-r*a,t[3]=o*u-i*a-r*l-s*c,t}function G5(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+o*a,t[1]=r*l+s*a,t[2]=s*l-r*a,t[3]=o*l-i*a,t}function H5(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*a,t[1]=r*l+o*a,t[2]=s*l+i*a,t[3]=o*l-r*a,t}function W5(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*a,t[1]=r*l-i*a,t[2]=s*l+o*a,t[3]=o*l-s*a,t}function j5(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=e[3],l=n[0],c=n[1],u=n[2],f=n[3],d,p,m,v,g;return p=r*l+s*c+o*u+a*f,p<0&&(p=-p,l=-l,c=-c,u=-u,f=-f),1-p>1e-6?(d=Math.acos(p),m=Math.sin(d),v=Math.sin((1-i)*d)/m,g=Math.sin(i*d)/m):(v=1-i,g=i),t[0]=v*r+g*l,t[1]=v*s+g*c,t[2]=v*o+g*u,t[3]=v*a+g*f,t}function X5(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s,a=o?1/o:0;return t[0]=-n*a,t[1]=-i*a,t[2]=-r*a,t[3]=s*a,t}function $5(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Y5(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,o=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+o]-e[o*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[o]=(e[o*3+r]+e[r*3+o])*i}return t}function q5(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),a=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="YXZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="ZXY"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="ZYX"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="YZX"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l-i*s*a):n==="XZY"&&(t[0]=i*o*l-r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l+i*s*a),t}const K5=U5,Z5=O5,Q5=B5,J5=k5;class e4 extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return z5(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(Z5(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return G5(this._target,this._target,e),this.onChange(),this}rotateY(e){return H5(this._target,this._target,e),this.onChange(),this}rotateZ(e){return W5(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return X5(this._target,e),this.onChange(),this}conjugate(e=this._target){return $5(this._target,e),this.onChange(),this}copy(e){return K5(this._target,e),this.onChange(),this}normalize(e=this._target){return J5(this._target,e),this.onChange(),this}multiply(e,n){return n?t1(this._target,e,n):t1(this._target,this._target,e),this.onChange(),this}dot(e){return Q5(this._target,e)}fromMatrix3(e){return Y5(this._target,e),this.onChange(),this}fromEuler(e,n){return q5(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return V5(this._target,e,n),this.onChange(),this}slerp(e,n){return j5(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const t4=1e-6;function n4(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function i4(t,e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t[9]=u,t[10]=f,t[11]=d,t[12]=p,t[13]=m,t[14]=v,t[15]=g,t}function r4(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function s4(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],h=e[15],y=n*a-i*o,x=n*l-r*o,_=n*c-s*o,T=i*l-r*a,S=i*c-s*a,A=r*c-s*l,R=u*v-f*m,b=u*g-d*m,M=u*h-p*m,L=f*g-d*v,F=f*h-p*v,O=d*h-p*g,U=y*O-x*F+_*L+T*M-S*b+A*R;return U?(U=1/U,t[0]=(a*O-l*F+c*L)*U,t[1]=(r*F-i*O-s*L)*U,t[2]=(v*A-g*S+h*T)*U,t[3]=(d*S-f*A-p*T)*U,t[4]=(l*M-o*O-c*b)*U,t[5]=(n*O-r*M+s*b)*U,t[6]=(g*_-m*A-h*x)*U,t[7]=(u*A-d*_+p*x)*U,t[8]=(o*F-a*M+c*R)*U,t[9]=(i*M-n*F-s*R)*U,t[10]=(m*S-v*_+h*y)*U,t[11]=(f*_-u*S-p*y)*U,t[12]=(a*b-o*L-l*R)*U,t[13]=(n*L-i*b+r*R)*U,t[14]=(v*x-m*T-g*y)*U,t[15]=(u*T-f*x+d*y)*U,t):null}function S3(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],p=t[12],m=t[13],v=t[14],g=t[15],h=e*o-n*s,y=e*a-i*s,x=e*l-r*s,_=n*a-i*o,T=n*l-r*o,S=i*l-r*a,A=c*m-u*p,R=c*v-f*p,b=c*g-d*p,M=u*v-f*m,L=u*g-d*m,F=f*g-d*v;return h*F-y*L+x*M+_*b-T*R+S*A}function n1(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=e[9],p=e[10],m=e[11],v=e[12],g=e[13],h=e[14],y=e[15],x=n[0],_=n[1],T=n[2],S=n[3];return t[0]=x*i+_*a+T*f+S*v,t[1]=x*r+_*l+T*d+S*g,t[2]=x*s+_*c+T*p+S*h,t[3]=x*o+_*u+T*m+S*y,x=n[4],_=n[5],T=n[6],S=n[7],t[4]=x*i+_*a+T*f+S*v,t[5]=x*r+_*l+T*d+S*g,t[6]=x*s+_*c+T*p+S*h,t[7]=x*o+_*u+T*m+S*y,x=n[8],_=n[9],T=n[10],S=n[11],t[8]=x*i+_*a+T*f+S*v,t[9]=x*r+_*l+T*d+S*g,t[10]=x*s+_*c+T*p+S*h,t[11]=x*o+_*u+T*m+S*y,x=n[12],_=n[13],T=n[14],S=n[15],t[12]=x*i+_*a+T*f+S*v,t[13]=x*r+_*l+T*d+S*g,t[14]=x*s+_*c+T*p+S*h,t[15]=x*o+_*u+T*m+S*y,t}function o4(t,e,n){let i=n[0],r=n[1],s=n[2],o,a,l,c,u,f,d,p,m,v,g,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(o=e[0],a=e[1],l=e[2],c=e[3],u=e[4],f=e[5],d=e[6],p=e[7],m=e[8],v=e[9],g=e[10],h=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=c,t[4]=u,t[5]=f,t[6]=d,t[7]=p,t[8]=m,t[9]=v,t[10]=g,t[11]=h,t[12]=o*i+u*r+m*s+e[12],t[13]=a*i+f*r+v*s+e[13],t[14]=l*i+d*r+g*s+e[14],t[15]=c*i+p*r+h*s+e[15]),t}function a4(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function l4(t,e,n,i){let r=i[0],s=i[1],o=i[2],a=Math.hypot(r,s,o),l,c,u,f,d,p,m,v,g,h,y,x,_,T,S,A,R,b,M,L,F,O,U,H;return Math.abs(a)<t4?null:(a=1/a,r*=a,s*=a,o*=a,l=Math.sin(n),c=Math.cos(n),u=1-c,f=e[0],d=e[1],p=e[2],m=e[3],v=e[4],g=e[5],h=e[6],y=e[7],x=e[8],_=e[9],T=e[10],S=e[11],A=r*r*u+c,R=s*r*u+o*l,b=o*r*u-s*l,M=r*s*u-o*l,L=s*s*u+c,F=o*s*u+r*l,O=r*o*u+s*l,U=s*o*u-r*l,H=o*o*u+c,t[0]=f*A+v*R+x*b,t[1]=d*A+g*R+_*b,t[2]=p*A+h*R+T*b,t[3]=m*A+y*R+S*b,t[4]=f*M+v*L+x*F,t[5]=d*M+g*L+_*F,t[6]=p*M+h*L+T*F,t[7]=m*M+y*L+S*F,t[8]=f*O+v*U+x*H,t[9]=d*O+g*U+_*H,t[10]=p*O+h*U+T*H,t[11]=m*O+y*U+S*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function c4(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function M3(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],o=e[5],a=e[6],l=e[8],c=e[9],u=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,o,a),t[2]=Math.hypot(l,c,u),t}function u4(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],o=t[6],a=t[8],l=t[9],c=t[10];const u=e*e+n*n+i*i,f=r*r+s*s+o*o,d=a*a+l*l+c*c;return Math.sqrt(Math.max(u,f,d))}const b3=function(){const t=[1,1,1];return function(e,n){let i=t;M3(i,n);let r=1/i[0],s=1/i[1],o=1/i[2],a=n[0]*r,l=n[1]*s,c=n[2]*o,u=n[4]*r,f=n[5]*s,d=n[6]*o,p=n[8]*r,m=n[9]*s,v=n[10]*o,g=a+f+v,h=0;return g>0?(h=Math.sqrt(g+1)*2,e[3]=.25*h,e[0]=(d-m)/h,e[1]=(p-c)/h,e[2]=(l-u)/h):a>f&&a>v?(h=Math.sqrt(1+a-f-v)*2,e[3]=(d-m)/h,e[0]=.25*h,e[1]=(l+u)/h,e[2]=(p+c)/h):f>v?(h=Math.sqrt(1+f-a-v)*2,e[3]=(p-c)/h,e[0]=(l+u)/h,e[1]=.25*h,e[2]=(d+m)/h):(h=Math.sqrt(1+v-a-f)*2,e[3]=(l-u)/h,e[0]=(p+c)/h,e[1]=(d+m)/h,e[2]=.25*h),e}}();function f4(t,e,n,i){let r=Aa([t[0],t[1],t[2]]);const s=Aa([t[4],t[5],t[6]]),o=Aa([t[8],t[9],t[10]]);S3(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,u=1/s,f=1/o;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=f,l[9]*=f,l[10]*=f,b3(e,l),i[0]=r,i[1]=s,i[2]=o}function d4(t,e,n,i){const r=t,s=e[0],o=e[1],a=e[2],l=e[3],c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,m=s*f,v=o*u,g=o*f,h=a*f,y=l*c,x=l*u,_=l*f,T=i[0],S=i[1],A=i[2];return r[0]=(1-(v+h))*T,r[1]=(p+_)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(p-_)*S,r[5]=(1-(d+h))*S,r[6]=(g+y)*S,r[7]=0,r[8]=(m+x)*A,r[9]=(g-y)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function h4(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,c=n*o,u=i*o,f=i*a,d=r*o,p=r*a,m=r*l,v=s*o,g=s*a,h=s*l;return t[0]=1-f-m,t[1]=u+h,t[2]=d-g,t[3]=0,t[4]=u-h,t[5]=1-c-m,t[6]=p+v,t[7]=0,t[8]=d+g,t[9]=p-v,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p4(t,e,n,i,r){let s=1/Math.tan(e/2),o=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*o,t[15]=0,t}function m4(t,e,n,i,r,s,o){let a=1/(e-n),l=1/(i-r),c=1/(s-o);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*a,t[13]=(r+i)*l,t[14]=(o+s)*c,t[15]=1,t}function g4(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=i[0],l=i[1],c=i[2],u=r-n[0],f=s-n[1],d=o-n[2],p=u*u+f*f+d*d;p===0?d=1:(p=1/Math.sqrt(p),u*=p,f*=p,d*=p);let m=l*d-c*f,v=c*u-a*d,g=a*f-l*u;return p=m*m+v*v+g*g,p===0&&(c?a+=1e-6:l?c+=1e-6:l+=1e-6,m=l*d-c*f,v=c*u-a*d,g=a*f-l*u,p=m*m+v*v+g*g),p=1/Math.sqrt(p),m*=p,v*=p,g*=p,t[0]=m,t[1]=v,t[2]=g,t[3]=0,t[4]=f*g-d*v,t[5]=d*m-u*g,t[6]=u*v-f*m,t[7]=0,t[8]=u,t[9]=f,t[10]=d,t[11]=0,t[12]=r,t[13]=s,t[14]=o,t[15]=1,t}function i1(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function r1(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function x4(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class mu extends Array{constructor(e=1,n=0,i=0,r=0,s=0,o=1,a=0,l=0,c=0,u=0,f=1,d=0,p=0,m=0,v=0,g=1){return super(e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g){return e.length?this.copy(e):(i4(this,e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g),this)}translate(e,n=this){return o4(this,n,e),this}rotate(e,n,i=this){return l4(this,i,e,n),this}scale(e,n=this){return a4(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?i1(this,e,n):i1(this,this,e),this}sub(e,n){return n?r1(this,e,n):r1(this,this,e),this}multiply(e,n){return e.length?n?n1(this,e,n):n1(this,this,e):x4(this,this,e),this}identity(){return r4(this),this}copy(e){return n4(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return p4(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:o}){return m4(this,e,n,i,r,s,o),this}fromQuaternion(e){return h4(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return s4(this,e),this}compose(e,n,i){return d4(this,e,n,i),this}decompose(e,n,i){return f4(this,e,n,i),this}getRotation(e){return b3(e,this),this}getTranslation(e){return c4(e,this),this}getScaling(e){return M3(e,this),this}getMaxScaleOnAxis(){return u4(this)}lookAt(e,n,i){return g4(this,e,n,i),this}determinant(){return S3(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function v4(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const s1=new mu;let y4=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return v4(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return s1.fromQuaternion(e),this._target.fromRotationMatrix(s1,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class _4{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new mu,this.worldMatrix=new mu,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new li,this.quaternion=new e4,this.scale=new li(1),this.rotation=new y4,this.up=new li(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function S4(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function M4(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,c=n*o,u=i*o,f=i*a,d=r*o,p=r*a,m=r*l,v=s*o,g=s*a,h=s*l;return t[0]=1-f-m,t[3]=u-h,t[6]=d+g,t[1]=u+h,t[4]=1-c-m,t[7]=p-v,t[2]=d-g,t[5]=p+v,t[8]=1-c-f,t}function b4(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function E4(t,e,n,i,r,s,o,a,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t}function w4(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function T4(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=-u*s+a*l,p=c*s-o*l,m=n*f+i*d+r*p;return m?(m=1/m,t[0]=f*m,t[1]=(-u*i+r*c)*m,t[2]=(a*i-r*o)*m,t[3]=d*m,t[4]=(u*n-r*l)*m,t[5]=(-a*n+r*s)*m,t[6]=p*m,t[7]=(-c*n+i*l)*m,t[8]=(o*n-i*s)*m,t):null}function o1(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],h=n[5],y=n[6],x=n[7],_=n[8];return t[0]=d*i+p*o+m*c,t[1]=d*r+p*a+m*u,t[2]=d*s+p*l+m*f,t[3]=v*i+g*o+h*c,t[4]=v*r+g*a+h*u,t[5]=v*s+g*l+h*f,t[6]=y*i+x*o+_*c,t[7]=y*r+x*a+_*u,t[8]=y*s+x*l+_*f,t}function A4(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=n[0],p=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=o,t[4]=a,t[5]=l,t[6]=d*i+p*o+c,t[7]=d*r+p*a+u,t[8]=d*s+p*l+f,t}function C4(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=Math.sin(n),p=Math.cos(n);return t[0]=p*i+d*o,t[1]=p*r+d*a,t[2]=p*s+d*l,t[3]=p*o-d*i,t[4]=p*a-d*r,t[5]=p*l-d*s,t[6]=c,t[7]=u,t[8]=f,t}function R4(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function P4(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],h=e[15],y=n*a-i*o,x=n*l-r*o,_=n*c-s*o,T=i*l-r*a,S=i*c-s*a,A=r*c-s*l,R=u*v-f*m,b=u*g-d*m,M=u*h-p*m,L=f*g-d*v,F=f*h-p*v,O=d*h-p*g,U=y*O-x*F+_*L+T*M-S*b+A*R;return U?(U=1/U,t[0]=(a*O-l*F+c*L)*U,t[1]=(l*M-o*O-c*b)*U,t[2]=(o*F-a*M+c*R)*U,t[3]=(r*F-i*O-s*L)*U,t[4]=(n*O-r*M+s*b)*U,t[5]=(i*M-n*F-s*R)*U,t[6]=(v*A-g*S+h*T)*U,t[7]=(g*_-m*A-h*x)*U,t[8]=(m*S-v*_+h*y)*U,t):null}class L4 extends Array{constructor(e=1,n=0,i=0,r=0,s=1,o=0,a=0,l=0,c=1){return super(e,n,i,r,s,o,a,l,c),this}set(e,n,i,r,s,o,a,l,c){return e.length?this.copy(e):(E4(this,e,n,i,r,s,o,a,l,c),this)}translate(e,n=this){return A4(this,n,e),this}rotate(e,n=this){return C4(this,n,e),this}scale(e,n=this){return R4(this,n,e),this}multiply(e,n){return n?o1(this,e,n):o1(this,this,e),this}identity(){return w4(this),this}copy(e){return b4(this,e),this}fromMatrix4(e){return S4(this,e),this}fromQuaternion(e){return M4(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return T4(this,e),this}getNormalMatrix(e){return P4(this,e),this}}let D4=0,E3=class extends _4{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=D4++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=o,this.modelViewMatrix=new mu,this.normalMatrix=new L4,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};function I4(t,e){return t[0]=e[0],t[1]=e[1],t}function N4(t,e,n){return t[0]=e,t[1]=n,t}function a1(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function l1(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function F4(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function U4(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function Kf(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function O4(t,e){var n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)}function k4(t,e){var n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i}function c1(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function B4(t){var e=t[0],n=t[1];return e*e+n*n}function z4(t,e){return t[0]=-e[0],t[1]=-e[1],t}function V4(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function G4(t,e){var n=e[0],i=e[1],r=n*n+i*i;return r>0&&(r=1/Math.sqrt(r)),t[0]=e[0]*r,t[1]=e[1]*r,t}function H4(t,e){return t[0]*e[0]+t[1]*e[1]}function u1(t,e){return t[0]*e[1]-t[1]*e[0]}function W4(t,e,n,i){var r=e[0],s=e[1];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t}function j4(t,e,n,i,r){const s=Math.exp(-i*r);let o=e[0],a=e[1];return t[0]=n[0]+(o-n[0])*s,t[1]=n[1]+(a-n[1])*s,t}function X4(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[3]*r+n[6],t[1]=n[1]*i+n[4]*r+n[7],t}function $4(t,e,n){let i=e[0],r=e[1];return t[0]=n[0]*i+n[4]*r+n[12],t[1]=n[1]*i+n[5]*r+n[13],t}function Y4(t,e){return t[0]===e[0]&&t[1]===e[1]}class J0 extends Array{constructor(e=0,n=e){return super(e,n),this}get x(){return this[0]}get y(){return this[1]}set x(e){this[0]=e}set y(e){this[1]=e}set(e,n=e){return e.length?this.copy(e):(N4(this,e,n),this)}copy(e){return I4(this,e),this}add(e,n){return n?a1(this,e,n):a1(this,this,e),this}sub(e,n){return n?l1(this,e,n):l1(this,this,e),this}multiply(e){return e.length?F4(this,this,e):Kf(this,this,e),this}divide(e){return e.length?U4(this,this,e):Kf(this,this,1/e),this}inverse(e=this){return V4(this,e),this}len(){return c1(this)}distance(e){return e?O4(this,e):c1(this)}squaredLen(){return this.squaredDistance()}squaredDistance(e){return e?k4(this,e):B4(this)}negate(e=this){return z4(this,e),this}cross(e,n){return n?u1(e,n):u1(this,e)}scale(e){return Kf(this,this,e),this}normalize(){return G4(this,this),this}dot(e){return H4(this,e)}equals(e){return Y4(this,e)}applyMatrix3(e){return X4(this,this,e),this}applyMatrix4(e){return $4(this,this,e),this}lerp(e,n){return W4(this,this,e,n),this}smoothLerp(e,n,i){return j4(this,this,e,n,i),this}clone(){return new J0(this[0],this[1])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e}}let w3=class extends P5{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const q4="#ffffff",K4=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},Z4=(t,e,n)=>{switch(t){case"top-left":return{anchor:[0,-.2*n],dir:[0,1]};case"top-right":return{anchor:[e,-.2*n],dir:[0,1]};case"left":return{anchor:[-.2*e,.5*n],dir:[1,0]};case"right":return{anchor:[(1+.2)*e,.5*n],dir:[-1,0]};case"bottom-left":return{anchor:[0,(1+.2)*n],dir:[0,-1]};case"bottom-center":return{anchor:[.5*e,(1+.2)*n],dir:[0,-1]};case"bottom-right":return{anchor:[e,(1+.2)*n],dir:[0,-1]};default:return{anchor:[.5*e,-.2*n],dir:[0,1]}}},Q4=({raysOrigin:t="top-center",raysColor:e=q4,raysSpeed:n=1,lightSpread:i=1,rayLength:r=2,pulsating:s=!1,fadeDistance:o=1,saturation:a=1,followMouse:l=!0,mouseInfluence:c=.1,noiseAmount:u=0,distortion:f=0,className:d=""})=>{const p=Q.useRef(null),m=Q.useRef(null),v=Q.useRef(null),g=Q.useRef({x:.5,y:.5}),h=Q.useRef({x:.5,y:.5}),y=Q.useRef(null),x=Q.useRef(null),_=Q.useRef(null),[T,S]=Q.useState(!1),A=Q.useRef(null);return Q.useEffect(()=>{if(p.current)return A.current=new IntersectionObserver(R=>{const b=R[0];S(b.isIntersecting)},{threshold:.1}),A.current.observe(p.current),()=>{A.current&&(A.current.disconnect(),A.current=null)}},[]),Q.useEffect(()=>!T||!p.current?void 0:(_.current&&(_.current(),_.current=null),(async()=>{if(!p.current||(await new Promise(z=>setTimeout(z,10)),!p.current))return;const b=new _3({dpr:Math.min(window.devicePixelRatio,2),alpha:!0});v.current=b;const M=b.gl;for(M.canvas.style.width="100%",M.canvas.style.height="100%";p.current.firstChild;)p.current.removeChild(p.current.firstChild);p.current.appendChild(M.canvas);const L=`
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,F=`
        precision highp float;
        uniform float iTime;
        uniform vec2  iResolution;
        uniform vec2  rayPos;
        uniform vec2  rayDir;
        uniform vec3  raysColor;
        uniform float raysSpeed;
        uniform float lightSpread;
        uniform float rayLength;
        uniform float pulsating;
        uniform float fadeDistance;
        uniform float saturation;
        uniform vec2  mousePos;
        uniform float mouseInfluence;
        uniform float noiseAmount;
        uniform float distortion;
        varying vec2 vUv;

        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
          vec2 sourceToCoord = coord - raySource;
          vec2 dirNorm = normalize(sourceToCoord);
          float cosAngle = dot(dirNorm, rayRefDirection);
          float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
          float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
          float distance = length(sourceToCoord);
          float maxDistance = iResolution.x * rayLength;
          float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
          float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
          float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
          float baseStrength = clamp(
            (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
            (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
            0.0, 1.0
          );
          return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
        }

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
          vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
          vec2 finalRayDir = rayDir;
          
          if (mouseInfluence > 0.0) {
            vec2 mouseScreenPos = mousePos * iResolution.xy;
            vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
            finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
          }

          vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
          vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);
          
          fragColor = rays1 * 0.5 + rays2 * 0.4;

          if (noiseAmount > 0.0) {
            float n = noise(coord * 0.01 + iTime * 0.1);
            fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
          }

          float brightness = 1.0 - (coord.y / iResolution.y);
          fragColor.x *= 0.1 + brightness * 0.8;
          fragColor.y *= 0.3 + brightness * 0.6;
          fragColor.z *= 0.5 + brightness * 0.5;

          if (saturation != 1.0) {
            float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
            fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
          }

          fragColor.rgb *= raysColor;
        }

        void main() {
          vec4 color;
          mainImage(color, gl_FragCoord.xy);
          gl_FragColor = color;
        }
      `,O={iTime:{value:0},iResolution:{value:[1,1]},rayPos:{value:[0,0]},rayDir:{value:[0,1]},raysColor:{value:K4(e)},raysSpeed:{value:n},lightSpread:{value:i},rayLength:{value:r},pulsating:{value:s?1:0},fadeDistance:{value:o},saturation:{value:a},mousePos:{value:[.5,.5]},mouseInfluence:{value:c},noiseAmount:{value:u},distortion:{value:f}};m.current=O;const U=new w3(M),H=new y3(M,{vertex:L,fragment:F,uniforms:O}),G=new E3(M,{geometry:U,program:H});x.current=G;const K=()=>{if(!p.current||!b)return;b.dpr=Math.min(window.devicePixelRatio,2);const{clientWidth:z,clientHeight:j}=p.current;b.setSize(z,j);const ee=b.dpr,fe=z*ee,Ie=j*ee;O.iResolution.value=[fe,Ie];const{anchor:Ue,dir:Ve}=Z4(t,fe,Ie);O.rayPos.value=Ue,O.rayDir.value=Ve},N=z=>{if(!(!v.current||!m.current||!x.current)){O.iTime.value=z*.001,l&&c>0&&(h.current.x=h.current.x*.92+g.current.x*(1-.92),h.current.y=h.current.y*.92+g.current.y*(1-.92),O.mousePos.value=[h.current.x,h.current.y]);try{b.render({scene:G}),y.current=requestAnimationFrame(N)}catch(j){console.warn("WebGL rendering error:",j);return}}};window.addEventListener("resize",K),K(),y.current=requestAnimationFrame(N),_.current=()=>{if(y.current&&(cancelAnimationFrame(y.current),y.current=null),window.removeEventListener("resize",K),b)try{const z=b.gl.canvas,j=b.gl.getExtension("WEBGL_lose_context");j&&j.loseContext(),z&&z.parentNode&&z.parentNode.removeChild(z)}catch(z){console.warn("Error during WebGL cleanup:",z)}v.current=null,m.current=null,x.current=null}})(),()=>{_.current&&(_.current(),_.current=null)}),[T,t,e,n,i,r,s,o,a,l,c,u,f]),Q.useEffect(()=>{const R=b=>{if(!p.current||!v.current)return;const M=p.current.getBoundingClientRect(),L=(b.clientX-M.left)/M.width,F=(b.clientY-M.top)/M.height;g.current={x:L,y:F}};if(l)return window.addEventListener("mousemove",R),()=>window.removeEventListener("mousemove",R)},[l]),E.jsx("div",{ref:p,className:`light-rays-container ${d}`.trim(),style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,pointerEvents:"none",zIndex:1,overflow:"hidden"}})},J4=`
attribute vec2 position;
void main(){
  gl_Position=vec4(position,0.0,1.0);
}
`,eR=`
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;
#define iTime uTime
#define iResolution uResolution
vec4 buf[8];
float rand(vec2 c){
  return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);
}
mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);
vec3 hueShiftRGB(vec3 col,float deg){
  vec3 yiq=rgb2yiq*col;
  float rad=radians(deg);
  float cosh=cos(rad),sinh=sin(rad);
  vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);
  return clamp(yiq2rgb*yiqShift,0.0,1.0);
}
vec4 sigmoid(vec4 x){
  return 1./(1.+exp(-x));
}
vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
  buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);
  buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
  buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);
  buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);
  buf[0]=sigmoid(buf[0]);
  buf[1]=sigmoid(buf[1]);
  buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);
  buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);
  buf[2]=sigmoid(buf[2]);
  buf[3]=sigmoid(buf[3]);
  buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345358,1.4542528,-1.1118771),vec4(19.872723,-7.337935,-42.941723,-98.52709),vec4(8.337645,-2.7312303,-2.2927687,-36.142323))*buf[2]+mat4(vec4(-16.298317,3.5471997,-0.44300047,-9.444417),vec4(57.5077,-35.609753,16.163465,-4.1534753),vec4(-0.07470326,-3.8656476,-7.0901804,3.1523974),vec4(-12.559385,-7.077619,1.490437,-0.8211543))*buf[3]+vec4(-7.67914,15.927437,1.3207729,-1.6686112);
  buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.37908727,0.53738135,4.389061,-1.3024765),vec4(-0.70647055,2.0111287,-5.1659346,-3.728635),vec4(-13.562562,10.487719,-0.9173751,-2.6487076))*buf[2]+mat4(vec4(-8.645013,6.5546675,-6.3944063,-5.5933375),vec4(-0.57783127,-1.077275,36.91025,5.736769),vec4(14.283112,3.7146652,7.1452246,-4.5958776),vec4(2.7192075,3.6021907,-4.366337,-2.3653464))*buf[3]+vec4(-5.9000807,-4.329569,1.2427121,8.59503);
  buf[4]=sigmoid(buf[4]);
  buf[5]=sigmoid(buf[5]);
  buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.12359311,-0.5258442,0.43852118),vec4(9.6752825,-22.853785,2.062431,0.099892326),vec4(-4.3196306,-17.730087,2.5184598,5.30267))*buf[2]+mat4(vec4(-6.545563,-15.790176,-6.0438633,-5.415399),vec4(-43.591583,28.551912,-16.00161,18.84728),vec4(4.212382,8.394307,3.0958717,8.657522),vec4(-5.0237565,-4.450633,-4.4768,-5.5010443))*buf[3]+mat4(vec4(1.6985557,-67.05806,6.897715,1.9004834),vec4(1.8680354,2.3915145,2.5231109,4.081538),vec4(11.158006,1.7294737,2.0738268,7.386411),vec4(-4.256034,-306.24686,8.258898,-17.132736))*buf[4]+mat4(vec4(1.6889864,-4.5852966,3.8534803,-6.3482175),vec4(1.3543309,-1.2640043,9.932754,2.9079645),vec4(-5.2770967,0.07150358,-0.13962056,3.3269649),vec4(28.34703,-4.918278,6.1044083,4.085355))*buf[5]+vec4(6.6818056,12.522166,-3.7075126,-4.104386);
  buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,4.8310084,1.7425908,-3.437416),vec4(2.117492,0.16342592,-104.56341,16.949184),vec4(-5.22543,-2.994248,3.8350096,-1.9364246))*buf[2]+mat4(vec4(-5.900337,1.7946124,-13.604192,-3.8060522),vec4(6.6583457,31.911177,25.164474,91.81147),vec4(11.840538,4.1503043,-0.7314397,6.768467),vec4(-6.3967767,4.034772,6.1714606,-0.32874924))*buf[3]+mat4(vec4(3.4992442,-196.91893,-8.923708,2.8142626),vec4(3.4806502,-3.1846354,5.1725626,5.1804223),vec4(-2.4009497,15.585794,1.2863957,2.0252278),vec4(-71.25271,-62.441242,-8.138444,0.50670296))*buf[4]+mat4(vec4(-12.291733,-11.176166,-7.3474145,4.390294),vec4(10.805477,5.6337385,-0.9385842,-4.7348723),vec4(-12.869276,-7.039391,5.3029537,7.5436664),vec4(1.4593618,8.91898,3.5101583,5.840625))*buf[5]+vec4(2.2415268,-6.705987,-0.98861027,-2.117676);
  buf[6]=sigmoid(buf[6]);
  buf[7]=sigmoid(buf[7]);
  buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.272854,0.),vec4(0.945728,0.8861938,1.2766753,0.))*buf[2]+mat4(vec4(-2.4218085,-1.968602,-4.35166,0.),vec4(-22.683098,-18.0544,-41.954372,0.),vec4(0.63792,0.5470648,1.1078634,0.),vec4(-1.5489894,-1.3075932,-2.6444845,0.))*buf[3]+mat4(vec4(-0.49252132,-0.39877754,-0.91366625,0.),vec4(0.95609266,0.7923952,1.640221,0.),vec4(0.30616966,0.15693925,0.8639857,0.),vec4(1.1825981,0.94504964,2.176963,0.))*buf[4]+mat4(vec4(0.35446745,0.3293795,0.59547555,0.),vec4(-0.58784515,-0.48177817,-1.0614829,0.),vec4(2.5271258,1.9991658,4.6846647,0.),vec4(0.13042648,0.08864098,0.30187556,0.))*buf[5]+mat4(vec4(-1.7718065,-1.4033192,-3.3355875,0.),vec4(3.1664357,2.638297,5.378702,0.),vec4(-3.1724713,-2.6107926,-5.549295,0.),vec4(-2.851368,-2.249092,-5.3013067,0.))*buf[6]+mat4(vec4(1.5203838,1.2212278,2.8404984,0.),vec4(1.5210563,1.2651345,2.683903,0.),vec4(2.9789467,2.4364579,5.2347264,0.),vec4(2.2270417,1.8825914,3.8028636,0.))*buf[7]+vec4(-1.5468478,-3.6171484,0.24762098,0.);
  buf[0]=sigmoid(buf[0]);
  return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}
void mainImage(out vec4 fragColor,in vec2 fragCoord){
  vec2 uv=fragCoord/uResolution.xy*2.-1.;
  uv.y*=-1.;
  uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;
  fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));
}
void main(){
  vec4 col;
  mainImage(col,gl_FragCoord.xy);
  col.rgb=hueShiftRGB(col.rgb,uHueShift);
  float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.5+0.5;
  col.rgb*=1.-(scanline_val*scanline_val)*uScan;
  col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
  gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);
}
`;function tR({hueShift:t=199,noiseIntensity:e=0,scanlineIntensity:n=0,speed:i=2.4,scanlineFrequency:r=0,warpAmount:s=1,resolutionScale:o=1}){const a=Q.useRef(null);return Q.useEffect(()=>{const l=a.current,c=l.parentElement,u=new _3({dpr:Math.min(window.devicePixelRatio,2),canvas:l}),f=u.gl,d=new w3(f),p=new y3(f,{vertex:J4,fragment:eR,uniforms:{uTime:{value:0},uResolution:{value:new J0},uHueShift:{value:t},uNoise:{value:e},uScan:{value:n},uScanFreq:{value:r},uWarp:{value:s}}}),m=new E3(f,{geometry:d,program:p}),v=()=>{const x=c.clientWidth,_=c.clientHeight;u.setSize(x*o,_*o),p.uniforms.uResolution.value.set(x,_)};window.addEventListener("resize",v),v();const g=performance.now();let h=0;const y=()=>{p.uniforms.uTime.value=(performance.now()-g)/1e3*i,p.uniforms.uHueShift.value=t,p.uniforms.uNoise.value=e,p.uniforms.uScan.value=n,p.uniforms.uScanFreq.value=r,p.uniforms.uWarp.value=s,u.render({scene:m}),h=requestAnimationFrame(y)};return y(),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",v)}},[t,e,n,i,r,s,o]),E.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",objectFit:"cover"}})}const nR=()=>E.jsx(iR,{children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:200,width:200,viewBox:"0 0 200 200",children:E.jsxs("g",{style:{order:-1},children:[E.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:1,stroke:"#8b5cf6",fill:"none",points:"70,70 148,50 130,130 50,150",id:"bounce"}),E.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:1,stroke:"#8b5cf6",fill:"none",points:"70,70 148,50 130,130 50,150",id:"bounce2"}),E.jsx("polygon",{transform:"rotate(45 100 100)",strokeWidth:2,stroke:!0,fill:"#414750",points:"70,70 150,50 130,130 50,150"}),E.jsx("polygon",{strokeWidth:2,stroke:!0,fill:"url(#gradiente)",points:"100,70 150,100 100,130 50,100"}),E.jsx("defs",{children:E.jsxs("linearGradient",{y2:"100%",x2:"10%",y1:"0%",x1:"0%",id:"gradiente",children:[E.jsx("stop",{style:{stopColor:"#1e2026",stopOpacity:1},offset:"20%"}),E.jsx("stop",{style:{stopColor:"#414750",stopOpacity:1},offset:"60%"})]})}),E.jsx("polygon",{transform:"translate(20, 31)",strokeWidth:2,stroke:!0,fill:"#7c3aed",points:"80,50 80,75 80,99 40,75"}),E.jsx("polygon",{transform:"translate(20, 31)",strokeWidth:2,stroke:!0,fill:"url(#gradiente2)",points:"40,-40 80,-40 80,99 40,75"}),E.jsx("defs",{children:E.jsxs("linearGradient",{y2:"100%",x2:"0%",y1:"-17%",x1:"10%",id:"gradiente2",children:[E.jsx("stop",{style:{stopColor:"#8b5cf600",stopOpacity:1},offset:"20%"}),E.jsx("stop",{style:{stopColor:"#8b5cf654",stopOpacity:1},offset:"100%",id:"animatedStop"})]})}),E.jsx("polygon",{transform:"rotate(180 100 100) translate(20, 20)",strokeWidth:2,stroke:!0,fill:"#8b5cf6",points:"80,50 80,75 80,99 40,75"}),E.jsx("polygon",{transform:"rotate(0 100 100) translate(60, 20)",strokeWidth:2,stroke:!0,fill:"url(#gradiente3)",points:"40,-40 80,-40 80,85 40,110.2"}),E.jsx("defs",{children:E.jsxs("linearGradient",{y2:"100%",x2:"10%",y1:"0%",x1:"0%",id:"gradiente3",children:[E.jsx("stop",{style:{stopColor:"#8b5cf600",stopOpacity:1},offset:"20%"}),E.jsx("stop",{style:{stopColor:"#8b5cf654",stopOpacity:1},offset:"100%",id:"animatedStop2"})]})}),E.jsx("polygon",{transform:"rotate(45 100 100) translate(80, 95)",strokeWidth:2,stroke:!0,fill:"#a78bfa",points:"5,0 5,5 0,5 0,0",id:"particles"}),E.jsx("polygon",{transform:"rotate(45 100 100) translate(80, 55)",strokeWidth:2,stroke:!0,fill:"#8b5cf6",points:"6,0 6,6 0,6 0,0",id:"particles2"}),E.jsx("polygon",{transform:"rotate(45 100 100) translate(70, 80)",strokeWidth:2,stroke:!0,fill:"#fff",points:"2,0 2,2 0,2 0,0",id:"particles3"}),E.jsx("polygon",{strokeWidth:2,stroke:!0,fill:"#292d34",points:"29.5,99.8 100,142 100,172 29.5,130"}),E.jsx("polygon",{transform:"translate(50, 92)",strokeWidth:2,stroke:!0,fill:"#1f2127",points:"50,50 120.5,8 120.5,35 50,80"})]})})}),iR=st.div`
  svg {
    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.4)) 
            drop-shadow(0 0 40px rgba(139, 92, 246, 0.2));
  }

  @keyframes bounce {
    0%,
    100% {
      translate: 0px 36px;
    }
    50% {
      translate: 0px 46px;
    }
  }

  @keyframes bounce2 {
    0%,
    100% {
      translate: 0px 46px;
    }
    50% {
      translate: 0px 56px;
    }
  }

  @keyframes umbral {
    0% {
      stop-color: #8b5cf62e;
    }
    50% {
      stop-color: rgba(139, 92, 246, 0.8);
    }
    100% {
      stop-color: #8b5cf62e;
    }
  }

  @keyframes particles {
    0%,
    100% {
      translate: 0px 16px;
      opacity: 1;
    }
    50% {
      translate: 0px 6px;
      opacity: 0.6;
    }
  }

  #particles,
  #particles2,
  #particles3 {
    animation: particles 4s ease-in-out infinite;
  }

  #particles2 {
    animation-delay: 0.3s;
  }

  #particles3 {
    animation-delay: 0.6s;
  }

  #animatedStop,
  #animatedStop2 {
    animation: umbral 4s infinite;
  }

  #bounce {
    animation: bounce 4s ease-in-out infinite;
    translate: 0px 36px;
    filter: drop-shadow(0 2px 8px rgba(139, 92, 246, 0.6));
  }

  #bounce2 {
    animation: bounce2 4s ease-in-out infinite;
    translate: 0px 46px;
    animation-delay: 0.5s;
    filter: drop-shadow(0 2px 8px rgba(139, 92, 246, 0.4));
  }
`,rR=()=>{const t=["Data Engineer","Data Analyst","Business Analyst","DataOps"];return E.jsx(sR,{children:E.jsxs("div",{className:"cube-loader",children:[E.jsx("div",{className:"cube-top"}),E.jsx("div",{className:"cube-wrapper",children:t.map((e,n)=>E.jsx("span",{className:"cube-span",style:{"--i":n},children:E.jsx("span",{className:"cube-text",children:e})},n))})]})})},sR=st.div`
  .cube-loader {
    position: relative;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-loader .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube-loader .cube-wrapper .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    background: linear-gradient(
      to bottom,
      hsl(270, 70%, 60%) 0%,
      hsl(270, 70%, 50%) 50%,
      hsl(270, 70%, 40%) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube-text {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    padding: 10px;
    line-height: 1.2;
  }

  .cube-top {
    position: absolute;
    width: 150px;
    height: 150px;
    background: hsl(270, 70%, 40%);
    transform: rotateX(90deg) translateZ(75px);
    transform-style: preserve-3d;
  }

  .cube-top::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    
    transform: translateZ(-90px);
    filter: blur(10px);
    
  }
`,oR=()=>E.jsxs("section",{id:"home",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"flex-start",background:"#000",position:"relative",padding:"100px 20px 50px",overflow:"hidden"},children:[E.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",opacity:.5,mixBlendMode:"screen",zIndex:1},children:E.jsx(tR,{hueShift:0,noiseIntensity:0,scanlineIntensity:0,speed:2.5,scanlineFrequency:0,warpAmount:.8,resolutionScale:1})}),E.jsx(Q4,{raysOrigin:"top-center",raysColor:"#8b5cf6",raysSpeed:.5,lightSpread:1.5,rayLength:1.5,pulsating:!1,fadeDistance:1.2,saturation:.8,followMouse:!0,mouseInfluence:.15,noiseAmount:.1,distortion:.05}),E.jsxs("div",{className:"container",style:{position:"relative",zIndex:10,display:"flex",justifyContent:"space-between",alignItems:"center",gap:"60px"},children:[E.jsxs("div",{style:{maxWidth:"900px",marginLeft:0,flex:1},children:[E.jsx(Te.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},style:{color:"#8b5cf6",fontSize:"1.2rem",fontWeight:500,letterSpacing:"3px",marginBottom:"20px"},children:"👋 HELLO, I'M"}),E.jsxs(Te.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},style:{fontFamily:"Ephesis, cursive",fontSize:"clamp(3.5rem, 10vw, 6rem)",fontWeight:700,lineHeight:1.1,marginBottom:"10px",color:"#fff"},children:["Vinit",E.jsx("br",{}),E.jsx("span",{style:{color:"#8b5cf6"},children:"Prajapati"})]}),E.jsx(Te.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},style:{fontSize:"clamp(1.2rem, 3vw, 1.8rem)",color:"#888",marginBottom:"30px",fontWeight:300}}),E.jsx(Te.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},style:{fontSize:"1.1rem",color:"#aaa",maxWidth:"600px",lineHeight:1.8,marginBottom:"40px"},children:"A Computer Science student with a traditional mindset and a modern skillset. Passionate about turning data into smart decisions and real-world impact."}),E.jsxs(Te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},style:{display:"flex",gap:"20px",flexWrap:"wrap",marginBottom:"50px"},children:[E.jsx(Te.a,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},className:"btn",children:"Get In Touch"}),E.jsxs(Te.a,{href:"#rolesresume",whileHover:{scale:1.05},whileTap:{scale:.95},className:"btn btn-outline",children:[E.jsx(g3,{})," Download CV"]})]}),E.jsxs(Te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},style:{display:"flex",gap:"25px"},children:[E.jsx(Te.a,{href:"https://www.linkedin.com/in/vinitkumar-prajapati/",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#fff",transition:"color 0.3s"},children:E.jsx(m3,{})}),E.jsx(Te.a,{href:"https://github.com/vinit-oza",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#fff",transition:"color 0.3s"},children:E.jsx(pu,{})}),E.jsx(Te.a,{href:"mailto:vinitoza1702@gmail.com",whileHover:{y:-5,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#fff",transition:"color 0.3s"},children:E.jsx(x3,{})})]})]}),E.jsxs(Te.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:1.2},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"40px"},className:"cube-container",children:[E.jsx(rR,{}),E.jsx(nR,{})]})]}),E.jsxs(Te.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},style:{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[E.jsx("span",{style:{fontSize:"0.8rem",color:"#888",letterSpacing:"2px"},children:"SCROLL"}),E.jsx(Te.div,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},style:{width:"2px",height:"40px",background:"linear-gradient(to bottom, #8b5cf6, transparent)"}})]}),E.jsx("style",{children:`
        @media (max-width: 900px) {
          .cube-container {
            display: none !important;
          }
        }
      `})]});var Gh=new Map,zl=new WeakMap,f1=0,aR=void 0;function lR(t){return t?(zl.has(t)||(f1+=1,zl.set(t,f1.toString())),zl.get(t)):"0"}function cR(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?lR(t.root):t[e]}`).toString()}function uR(t){const e=cR(t);let n=Gh.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},Gh.set(e,n)}return n}function fR(t,e,n={},i=aR){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=uR(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),Gh.delete(r))}}function qu({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[f,d]=Q.useState(null),p=Q.useRef(c),[m,v]=Q.useState({inView:!!a,entry:void 0});p.current=c,Q.useEffect(()=>{if(o||!f)return;let x;return x=fR(f,(_,T)=>{v({inView:_,entry:T}),p.current&&p.current(_,T),T.isIntersecting&&s&&x&&(x(),x=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{x&&x()}},[Array.isArray(t)?t.toString():t,f,r,i,s,o,n,l,e]);const g=(u=m.entry)==null?void 0:u.target,h=Q.useRef(void 0);!f&&g&&!s&&!o&&h.current!==g&&(h.current=g,v({inView:!!a,entry:void 0}));const y=[d,m.inView,m.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const dR=()=>{const t=["Communication Skills","Leadership","Critical Thinking","Timekeeping","Decision-making","teamwork","Statistics","adaptability","Visualization","problem-solving"];return E.jsx(hR,{children:E.jsxs("div",{className:"card",children:[E.jsx("span",{className:"title",children:"Soft Skills"}),E.jsx("div",{className:"card__tags",children:E.jsx("ul",{className:"tag",children:t.map((e,n)=>E.jsx("li",{className:"tag__name",children:e},n))})})]})})},hR=st.div`
  .card {
    width: 100%;
    min-height: 300px;
    background: rgba(139, 92, 246, 0.05);
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    border-radius: 15px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  }

  .title {
    font-weight: 700;
    font-size: 1.5em;
    width: 100%;
    margin-bottom: 20px;
    color: #8b5cf6;
    letter-spacing: 0.5px;
  }

  .card__tags {
    width: 100%;
  }

  .tag {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tag__name {
    display: inline-block;
    color: #fff;
    font-size: 0.95em;
    background-color: rgba(139, 92, 246, 0.2);
    padding: 8px 20px;
    border-radius: 25px;
    margin: 6px 8px 6px 0;
    margin-left: 0px;
    position: relative;
    text-transform: capitalize;
    cursor: default;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: blur(10px);
  }

  .tag__name::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8b5cf6;
    left: 8px;
  }

  .tag__name:hover {
    transform: scale(1.05);
    background-color: rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
  }
`,pR=()=>{const[t,e]=qu({threshold:.2,triggerOnce:!0}),n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},i={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return E.jsxs(E.Fragment,{children:[E.jsx("section",{id:"about",className:"section",style:{background:"#000"},children:E.jsx("div",{className:"container",children:E.jsxs(Te.div,{ref:t,variants:n,initial:"hidden",animate:e?"visible":"hidden",children:[E.jsxs(Te.h2,{variants:i,className:"section-title",children:["About ",E.jsx("span",{className:"highlight",children:"Me"})]}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"60px",alignItems:"start"},children:[E.jsxs(Te.div,{variants:i,children:[E.jsxs("p",{style:{fontSize:"1.1rem",lineHeight:1.9,color:"#ccc",marginBottom:"30px"},children:["I'm a ",E.jsx("span",{style:{color:"#8b5cf6",fontWeight:600},children:"Computer Science student"})," with a traditional mindset and a modern skillset. I'm deeply passionate about",E.jsx("span",{style:{color:"#8b5cf6",fontWeight:600},children:" Data Engineer, Data Analytics, and Business Analytics"}),", constantly exploring how data can be turned into smart decisions and real-world impact."]}),E.jsx("p",{style:{fontSize:"1rem",lineHeight:1.8,color:"#999"},children:"Currently pursuing my Bachelor of Technology degree at Parul University with a focus on Big Data Analytics. I combine technical expertise with business acumen to deliver actionable insights."})]}),E.jsx(Te.div,{variants:i,style:{display:"flex",justifyContent:"center"},children:E.jsx(mR,{children:E.jsxs("div",{className:"cardContainer",children:[E.jsx("div",{className:"profileDiv",children:E.jsx("img",{src:"/profile.jpg",alt:"Vinit Prajapati",className:"profile-image"})}),E.jsxs("div",{className:"infoDiv",children:[E.jsxs("div",{className:"nameDiv",children:[E.jsx("p",{className:"name",children:"Vinit Prajapati"}),E.jsx("p",{className:"role",children:"DataOps"})]}),E.jsxs("div",{className:"socialDiv",children:[E.jsx("a",{href:"#github",children:E.jsx("svg",{viewBox:"0 0 496 512",className:"socials github",children:E.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),E.jsx("a",{href:"#linkedin",children:E.jsx("svg",{viewBox:"0 0 448 512",className:"socials linkedin",children:E.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})}),E.jsx("a",{href:"#instagram",children:E.jsx("svg",{className:"socials instagram",viewBox:"0 0 448 512",children:E.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})})]})]})]})})})]})]})})}),E.jsx("section",{className:"section",style:{background:"#0a0a0a"},children:E.jsx("div",{className:"container",children:E.jsxs(Te.div,{variants:n,initial:"hidden",animate:e?"visible":"hidden",children:[E.jsxs(Te.h2,{variants:i,className:"section-title",children:["Education & ",E.jsx("span",{className:"highlight",children:"Skills"})]}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"40px"},children:[E.jsxs(Te.div,{variants:i,style:{padding:"30px",background:"rgba(139, 92, 246, 0.03)",border:"1px solid rgba(139, 92, 246, 0.1)",borderRadius:"15px"},children:[E.jsx("h4",{style:{color:"#8b5cf6",marginBottom:"25px",fontSize:"1.2rem"},children:"Education"}),E.jsxs("div",{style:{borderLeft:"2px solid #8b5cf6",paddingLeft:"20px"},children:[E.jsxs("div",{style:{marginBottom:"25px"},children:[E.jsx("p",{style:{color:"#fff",fontWeight:600,fontSize:"1.05rem"},children:"B.TECH in CSE - Big Data Analytics"}),E.jsx("p",{style:{color:"#888",fontSize:"0.9rem",marginTop:"5px"},children:"Parul University (PIET) • 2022-2026"}),E.jsx("p",{style:{color:"#8b5cf6",fontSize:"0.9rem",marginTop:"5px"},children:"CGPA: 7.25"})]}),E.jsxs("div",{children:[E.jsx("p",{style:{color:"#fff",fontWeight:600,fontSize:"1.05rem"},children:"Higher Secondary School"}),E.jsx("p",{style:{color:"#888",fontSize:"0.9rem",marginTop:"5px"},children:"ShreeRam Vidhayalaya • 2021-2022"}),E.jsx("p",{style:{color:"#8b5cf6",fontSize:"0.9rem",marginTop:"5px"},children:"First Class Distinction"})]})]})]}),E.jsx(Te.div,{variants:i,children:E.jsx(dR,{})})]})]})})})]})},mR=st.div`
  .cardContainer {
    width: 300px;
    height: 350px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition-duration: .5s;
    cursor: pointer;
  }

  .profileDiv {
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(24, 24, 24);
    transition-duration: .5s;
    color: rgb(155, 155, 155);
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .cardContainer:hover .profileDiv {
    transform: translateX(-25%) translateY(-20%);
    transition-duration: .5s;
  }

  .infoDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    z-index: 1;
  }

  .nameDiv {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(255, 255, 255);
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    gap: 2px;
  }

  .name {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  .role {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: rgb(48, 48, 48);
    margin-bottom: 5px;
  }

  .socialDiv {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(14, 14, 14);
    gap: 25px;
  }

  .infoDiv a {
    width: 50%;
    transition: all 0.3s;
  }

  .infoDiv a:hover {
    transform: scale(1.15);
  }

  .socials {
    width: 100%;
    fill: rgb(14, 14, 14);
    transition: all 0.3s;
  }

  .socials:hover {
    fill: rgb(100, 100, 100);
  }
`,gR=()=>{const[t,e]=qu({threshold:.1,triggerOnce:!0}),n=Q.useRef(null),i=Q.useRef(!1),r=Q.useRef({x:0,y:0}),s=Q.useRef({x:0,y:0}),o=[{name:"Python",icon:"https://img.icons8.com/color/96/python--v1.png"},{name:"MongoDB",icon:"https://img.icons8.com/color/96/mongodb.png"},{name:"SQL",icon:"https://img.icons8.com/color/96/mysql-logo.png"},{name:"n8n",icon:"https://avatars.githubusercontent.com/u/45487711?s=200&v=4"},{name:"Jira",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"},{name:"Power BI",icon:"https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png"},{name:"Git",icon:"https://img.icons8.com/color/96/git.png"},{name:"GitHub",icon:"https://img.icons8.com/ios-glyphs/96/github.png"},{name:"Docker",icon:"https://img.icons8.com/color/96/docker.png"},{name:"Tableau",icon:"https://img.icons8.com/color/96/tableau-software.png"},{name:"ChatGPT",icon:"https://img.icons8.com/color/96/chatgpt.png"},{name:"Gemini",icon:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"},{name:"Jupyter",icon:"https://img.icons8.com/fluency/96/jupyter.png"},{name:"Google Colab",icon:"https://img.icons8.com/color/96/google-colab.png"},{name:"PyCharm",icon:"https://img.icons8.com/color/96/pycharm--v2.png"},{name:"Kiro",icon:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#8B5CF6"/><path d="M35 35 Q35 65 50 65 Q50 50 50 35" fill="white"/><circle cx="40" cy="45" r="4" fill="#8B5CF6"/><circle cx="55" cy="45" r="4" fill="#8B5CF6"/></svg>')},{name:"Confluence",icon:"https://img.icons8.com/color/96/confluence--v2.png"},{name:"Excel",icon:"https://img.icons8.com/color/96/microsoft-excel-2019--v1.png"},{name:"Anaconda",icon:"https://img.icons8.com/dusk/96/anaconda--v2.png"},{name:"Antigravity",icon:"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="#1a1a1a"/><defs><linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ff0000"/><stop offset="25%" style="stop-color:#ffff00"/><stop offset="50%" style="stop-color:#00ff00"/><stop offset="75%" style="stop-color:#00ffff"/><stop offset="100%" style="stop-color:#0066ff"/></linearGradient></defs><path d="M50 15 L20 85 Q50 70 80 85 Z" fill="url(#rainbow)"/></svg>')}];return Q.useEffect(()=>{if(!n.current)return;const a=n.current,l=a.querySelectorAll(".floating-icon"),c=l.length,u=200;let f=0,d=0;const p=.002,m=.003,v=(1+Math.sqrt(5))/2,g=(b,M,L)=>{const F=1-b/(c-1)*2,O=Math.sqrt(1-F*F),U=2*Math.PI*b/v;let H=Math.cos(U)*O,G=Math.sin(U)*O;const K=Math.cos(M),N=Math.sin(M),z=Math.cos(L),j=Math.sin(L),ee=F*K-G*N,fe=F*N+G*K,Ie=H*z+fe*j,Ue=-H*j+fe*z;return{x:Ie*u,y:ee*u,z:Ue*u}},h=()=>{i.current?(f+=s.current.x,d+=s.current.y):(s.current.x*=.95,s.current.y*=.95,f+=p+s.current.x,d+=m+s.current.y),l.forEach((b,M)=>{const L=g(M,f,d),F=(L.z+u)/(2*u),O=F*.5+.5,U=F*.6+.4;b.style.transform=`translate3d(${L.x}px, ${L.y}px, ${L.z}px) scale(${O})`,b.style.opacity=U,b.style.zIndex=Math.round(L.z+500)}),requestAnimationFrame(h)},y=b=>{i.current=!0,r.current={x:b.clientX,y:b.clientY},a.style.cursor="grabbing"},x=b=>{if(!i.current)return;const M=b.clientX-r.current.x,L=b.clientY-r.current.y;s.current.x=L*.008,s.current.y=M*.008,r.current={x:b.clientX,y:b.clientY}},_=()=>{i.current=!1,a.style.cursor="grab"},T=()=>{i.current=!1,a.style.cursor="grab"},S=b=>{i.current=!0,r.current={x:b.touches[0].clientX,y:b.touches[0].clientY}},A=b=>{if(!i.current)return;const M=b.touches[0].clientX-r.current.x,L=b.touches[0].clientY-r.current.y;s.current.x=L*.008,s.current.y=M*.008,r.current={x:b.touches[0].clientX,y:b.touches[0].clientY}},R=()=>{i.current=!1};return a.addEventListener("mousedown",y),a.addEventListener("mousemove",x),a.addEventListener("mouseup",_),a.addEventListener("mouseleave",T),a.addEventListener("touchstart",S),a.addEventListener("touchmove",A),a.addEventListener("touchend",R),h(),()=>{a.removeEventListener("mousedown",y),a.removeEventListener("mousemove",x),a.removeEventListener("mouseup",_),a.removeEventListener("mouseleave",T),a.removeEventListener("touchstart",S),a.removeEventListener("touchmove",A),a.removeEventListener("touchend",R)}},[]),E.jsxs("section",{id:"skills",className:"section",style:{background:"#000",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"},children:[E.jsx("div",{className:"container",style:{width:"100%",maxWidth:"1400px"},children:E.jsxs(Te.div,{ref:t,initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:.6},children:[E.jsxs(Te.h2,{initial:{y:50,opacity:0},animate:e?{y:0,opacity:1}:{y:50,opacity:0},transition:{duration:.6},className:"section-title",style:{textAlign:"center",display:"block",marginBottom:"60px"},children:["Technical ",E.jsx("span",{className:"highlight",children:"Skills"})]}),E.jsxs("div",{className:"skills-layout",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",alignItems:"center"},children:[E.jsx("div",{ref:n,style:{position:"relative",width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center",perspective:"1000px",cursor:"grab",userSelect:"none"},children:o.map(a=>E.jsx("img",{className:"floating-icon",src:a.icon,alt:a.name,style:{position:"absolute",width:"45px",height:"45px",objectFit:"contain",filter:a.name==="GitHub"?"invert(1)":"none",pointerEvents:"none"},draggable:!1},`float-${a.name}`))}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},className:"cards-grid",children:o.map((a,l)=>E.jsxs(Te.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.4,delay:l*.03},whileHover:{scale:1.05,borderColor:"rgba(139, 92, 246, 0.5)"},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",padding:"20px 12px",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",cursor:"default",transition:"all 0.3s ease"},children:[E.jsx("div",{style:{width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center"},children:E.jsx("img",{src:a.icon,alt:a.name,style:{width:"32px",height:"32px",objectFit:"contain",filter:a.name==="GitHub"?"invert(0.8)":"none",opacity:.9}})}),E.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.7rem",textAlign:"center",fontWeight:400},children:a.name})]},`card-${a.name}`))})]})]})}),E.jsx("style",{children:`
        @media (max-width: 1000px) {
          .skills-layout {
            grid-template-columns: 1fr !important;
          }
          .cards-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `})]})},xR=()=>{const[t,e]=Q.useState("engineer"),n={engineer:{level:"Data Engineer",downloadLink:"https://drive.google.com/file/d/18h7rZnGk2Fh_BO9RC38aVC3EjOksbUK1/view?usp=sharing"},analyst:{level:"Data Analyst",downloadLink:"https://drive.google.com/file/d/18h7rZnGk2Fh_BO9RC38aVC3EjOksbUK1/view?usp=sharing"},business:{level:"Business Analyst",downloadLink:"https://drive.google.com/file/d/11QZsbKDLCE9har7GIc6tevGaSNVS-bFg/view?usp=sharing"}};return E.jsx("section",{id:"rolesresume",className:"section",style:{background:"#000"},children:E.jsxs("div",{className:"container",children:[E.jsx(Te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:E.jsxs("h2",{className:"section-title",children:["Roles & ",E.jsx("span",{className:"highlight",children:"Resume"})]})}),E.jsxs(AR,{children:[E.jsx(CR,{children:E.jsxs(vR,{children:[E.jsxs("div",{className:"wrap",children:[E.jsx("input",{hidden:!0,className:"rd-1",name:"radio",id:"rd-1",type:"radio",checked:t==="engineer",onChange:()=>e("engineer")}),E.jsx("label",{className:"label",htmlFor:"rd-1",children:E.jsx("span",{children:"Data Engineer"})}),E.jsx("input",{hidden:!0,className:"rd-2",name:"radio",id:"rd-2",type:"radio",checked:t==="analyst",onChange:()=>e("analyst")}),E.jsx("label",{className:"label",htmlFor:"rd-2",children:E.jsx("span",{children:"Data Analyst"})}),E.jsx("input",{hidden:!0,className:"rd-3",name:"radio",id:"rd-3",type:"radio",checked:t==="business",onChange:()=>e("business")}),E.jsx("label",{className:"label",htmlFor:"rd-3",children:E.jsx("span",{children:"Business Analyst"})}),E.jsx("div",{className:"bar"}),E.jsx("div",{className:"slidebar"})]}),E.jsxs(yR,{as:Te.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[E.jsxs(_R,{children:[E.jsx(SR,{children:n[t].level}),E.jsx(MR,{children:n[t].title})]}),E.jsx(bR,{children:n[t].description}),E.jsxs(ER,{as:"a",href:n[t].downloadLink,target:"_blank",rel:"noopener noreferrer",children:["Download CV",E.jsx("svg",{className:"w-6 h-6 fill-current",height:100,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 100 100",width:100,xmlns:"http://www.w3.org/2000/svg",children:E.jsx("path",{d:"M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z",fillRule:"evenodd"})})]}),E.jsx(wR,{className:"user-icon-bg",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:E.jsx("path",{"data-name":"layer1",d:"M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z",strokeMiterlimit:10,strokeWidth:5})})}),E.jsx(TR,{className:"user-icon-fg",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:E.jsx("path",{"data-name":"layer1",d:"M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z",strokeMiterlimit:10,strokeWidth:2})})})]},t)]})}),E.jsx(RR,{as:Te.div,initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:E.jsx(PR,{})})]})]})})};st.p`
  text-align: center;
  color: #999;
  font-size: 1.1rem;
  margin-bottom: 4rem;
`;const vR=st.div`
  --color-pure: #fff;
  --color-primary: rgba(255, 255, 255, 0.05);
  --color-secondary: #999;
  --muted: rgba(139, 92, 246, 0.2);
  --round: 15px;
  --p-x: 12px;
  --p-y: 8px;
  --w-label: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .wrap {
    display: flex;
    align-items: center;
    padding: var(--p-y) var(--p-x);
    position: relative;
    background: var(--color-primary);
    border: 1px solid rgba(139, 92, 246, 0.15);
    border-radius: var(--round);
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  }

  .wrap input {
    height: 0;
    width: 0;
    position: absolute;
    overflow: hidden;
    display: none;
    visibility: hidden;
  }

  .label {
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: var(--color-secondary);
    background: transparent;
    padding: 18px 24px;
    width: var(--w-label);
    min-width: var(--w-label);
    text-decoration: none;
    user-select: none;
    transition: color 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
  }

  .label span {
    overflow: visible;
    text-overflow: clip;
  }

  .wrap input[class*="rd-"]:checked + label {
    color: var(--color-pure);
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    transform-origin: 0 0 0;
    height: 100%;
    width: var(--w-label);
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }

  .bar::before,
  .bar::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
  }

  .bar::before {
    top: 0;
    border-radius: 0 0 9999px 9999px;
  }

  .bar::after {
    bottom: 0;
    border-radius: 9999px 9999px 0 0;
  }

  .slidebar {
    position: absolute;
    height: calc(100% - (var(--p-y) * 4));
    width: var(--w-label);
    border-radius: calc(var(--round) - var(--p-y));
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(167, 139, 250, 0.3));
    transform-origin: 0 0 0;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }

  .rd-1:checked ~ .bar,
  .rd-1:checked ~ .slidebar {
    transform: translateX(0) scaleX(1);
  }

  .rd-2:checked ~ .bar,
  .rd-2:checked ~ .slidebar {
    transform: translateX(100%) scaleX(1);
  }

  .rd-3:checked ~ .bar,
  .rd-3:checked ~ .slidebar {
    transform: translateX(200%) scaleX(1);
  }

  @media (max-width: 768px) {
    --w-label: 140px;

    .label {
      font-size: 0.95rem;
      padding: 16px 20px;
    }
  }

  @media (max-width: 480px) {
    --w-label: 120px;

    .label {
      font-size: 0.85rem;
      padding: 14px 16px;
    }
  }
`,yR=st.div`
  position: relative;
  background: linear-gradient(145deg, rgba(139, 92, 246, 0.08), rgba(10, 10, 10, 0.9));
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 240px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }

  &:hover .user-icon-bg,
  &:hover .user-icon-fg {
    transform: scale(1.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 220px;
    max-width: 380px;
  }
`,_R=st.div`
  color: #ffffff;
  z-index: 2;
  position: relative;
`,SR=st.span`
  font-weight: 700;
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.25rem;
  color: #8b5cf6;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,MR=st.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,bR=st.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #999;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,ER=st.a`
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  width: fit-content;
  font-size: 0.9rem;
  text-decoration: none;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: currentColor;
  }

  &:hover {
    background: #8b5cf6;
    color: #fff;
    border-color: #8b5cf6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`,wR=st.svg`
  position: absolute;
  bottom: -0.125rem;
  right: -4rem;
  width: 10rem;
  height: 10rem;
  z-index: 1;
  margin: -0.5rem;
  fill: rgba(139, 92, 246, 0.05);
  stroke: rgba(139, 92, 246, 0.15);
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    right: -3rem;
  }
`,TR=st.svg`
  position: absolute;
  bottom: -0.125rem;
  right: -4rem;
  width: 10rem;
  height: 10rem;
  z-index: 1;
  margin: -0.5rem;
  fill: rgba(139, 92, 246, 0.08);
  stroke: rgba(139, 92, 246, 0.25);
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
    right: -3rem;
  }
`,AR=st.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,CR=st.div`
  display: flex;
  justify-content: center;
`,RR=st.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 420px;
`,PR=()=>E.jsxs(LR,{children:[E.jsxs("svg",{style:{position:"absolute",width:0,height:0},children:[E.jsx("filter",{id:"unopaq",y:"-100%",height:"300%",x:"-100%",width:"300%",children:E.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0"})}),E.jsx("filter",{id:"unopaq2",y:"-100%",height:"300%",x:"-100%",width:"300%",children:E.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0"})}),E.jsx("filter",{id:"unopaq3",y:"-100%",height:"300%",x:"-100%",width:"300%",children:E.jsx("feColorMatrix",{values:"1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0"})})]}),E.jsxs("div",{className:"card-container",children:[E.jsx("div",{className:"spin spin-blur"}),E.jsx("div",{className:"spin spin-intense"}),E.jsx("div",{className:"backdrop"}),E.jsx("div",{className:"card-border",children:E.jsx("div",{className:"spin spin-inside"})}),E.jsxs("div",{className:"card",children:[E.jsxs("div",{className:"header",children:[E.jsxs("div",{className:"top-header",children:[E.jsx("div",{className:"gh-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})})}),E.jsxs("div",{className:"repo",children:[E.jsx("a",{className:"repo-owner",href:"#",children:"Portfolio"}),E.jsx("span",{className:"repo-slash",children:"/"}),E.jsx("a",{className:"repo-name",href:"#",children:"Projects"})]})]}),E.jsx("div",{className:"btm-header",children:E.jsxs("div",{className:"tab active",children:[E.jsx("div",{className:"tab-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsx("div",{className:"tab-text",children:"Contributions"})]})})]}),E.jsx("div",{className:"content",children:E.jsxs("div",{className:"prs",children:[E.jsxs("a",{href:"https://github.com/vinit-oza/Cricket-project",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"Cricket Data Analytics"}),E.jsx("div",{className:"pr-desc",children:"Power BI Dashboard"})]})]}),E.jsxs("a",{href:"https://github.com/vinit-oza/Sales-Insights-Business-analytics-",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"Sales Insights Business Analytics"}),E.jsx("div",{className:"pr-desc",children:"Python, SQL & Power BI"})]})]}),E.jsxs("a",{href:"https://github.com/vinit-oza/-Project-Weather-Prediction-Model-",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"Weather Prediction Model"}),E.jsx("div",{className:"pr-desc",children:"Python, ML, Kiro"})]})]}),E.jsxs("a",{href:"https://github.com/vinit-oza/Credit-Card-Fraud-Analysis-ML-",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"Credit Card Fraud Analysis"}),E.jsx("div",{className:"pr-desc",children:"Python, ML, Kiro"})]})]}),E.jsxs("a",{href:"https://github.com/vinit-oza/HR-Analytics",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"HR Analytics"}),E.jsx("div",{className:"pr-desc",children:"Excel & Power BI"})]})]}),E.jsxs("a",{href:"https://github.com/vinit-oza/Store-_Power-BI-Dashboard",target:"_blank",rel:"noopener noreferrer",className:"pr",children:[E.jsx("div",{className:"pr-icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:E.jsx("path",{d:"M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"})})}),E.jsxs("div",{className:"pr-text",children:[E.jsx("div",{className:"pr-title",children:"Store Power BI Dashboard"}),E.jsx("div",{className:"pr-desc",children:"Power BI & Jupyter"})]})]})]})})]})]})]}),LR=st.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  .card-container {
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 420px;
    border-radius: 1em;
  }

  .card-border {
    position: absolute;
    inset: 0;
    background: rgba(139, 92, 246, 0.2);
    border-radius: inherit;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }

  .card {
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: linear-gradient(145deg, rgba(139, 92, 246, 0.05), #111215);
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .header {
    background: #0b0d10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid #1d1f23;
  }

  .top-header {
    background: #0b0d10;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 12px;
  }

  .repo > a, .repo > span {
    text-decoration: none;
    color: #bebebe;
    font-weight: 300;
    font-size: 14px;
  }

  .repo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .repo-slash {
    font-size: 10px;
    pointer-events: none;
  }

  .repo-name {
    color: #fff;
    font-weight: 400;
  }

  .gh-icon, .gh-icon svg {
    height: 2em;
    fill: #8b5cf6;
  }

  .btm-header {
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    gap: 8px;
    color: #fff;
    fill: #fff;
  }

  .tab {
    position: relative;
    padding: 4px 4px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .tab-icon {
    width: 1em;
    height: 1.25em;
    fill: #797d86;
  }

  .tab.active {
    border-bottom: 2px solid #8b5cf6;
  }

  .tab.active .tab-icon {
    fill: #8b5cf6;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

  .prs {
    margin: 12px;
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #343539;
    border-radius: 6px;
    overflow: auto;
  }

  .prs::-webkit-scrollbar {
    width: 4px;
  }

  .prs::-webkit-scrollbar-thumb {
    background: #8b5cf6;
    border-radius: 4px;
  }

  .pr {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    outline: 1px solid #343539;
    padding: 12px;
    transition: background 0.3s;
    text-decoration: none;
    color: inherit;
  }

  .pr:hover {
    background: rgba(139, 92, 246, 0.05);
  }

  .pr:visited {
    color: inherit;
  }

  .pr-icon {
    display: flex;
    width: 1em;
    height: 1em;
    fill: #8b5cf6;
    flex-shrink: 0;
  }

  .pr-text {
    display: flex;
    flex-direction: column;
  }

  .pr-title {
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
  }

  .pr-title:hover {
    color: #8b5cf6;
  }

  .pr-desc {
    padding-left: 2px;
    font-size: 11px;
    color: #797d86;
  }

  .backdrop {
    position: absolute;
    inset: -100%;
    background: radial-gradient(circle at 50% 50%, #0000 0, #0000 20%, #111111aa 50%);
    background-size: 3px 3px;
    z-index: -1;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(3em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.5em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, #8b5cf6, #0000 46% 54%, #a78bfa);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, #9d6ff8, #0000 35% 65%, #b89ffa);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, #b89ffa, #0000 35% 65%, #d4c5fc);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    to {
      rotate: 370deg;
    }
  }

  @media (max-width: 768px) {
    .card-container {
      max-width: 380px;
      height: 380px;
    }
  }
`,DR=()=>{const[t,e]=qu({threshold:.1,triggerOnce:!0}),n=[{title:"Cricket Detailed Data Analytics",description:"Full-stack data analytics project analyzing 2019 T20 World Cup performance with interactive Power BI dashboard for comprehensive insights.",tags:["Power BI","Data Analysis","Sports Analytics","Python"],github:"https://github.com/vinit-oza/Cricket-project",demo:"#",image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop"},{title:"Sales Insights Business Analytics",description:"Full-stack business intelligence solution with Python, SQL, and Power BI for tracking sales performance and customer behavior patterns.",tags:["Python","SQL","Power BI","Business Intelligence"],github:"https://github.com/vinit-oza/Sales-Insights-Business-analytics-",demo:"#",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"},{title:"Weather Prediction Model",description:"Machine learning model for weather prediction using Python with advanced algorithms for accurate forecasting and data visualization.",tags:["Python","Machine Learning","Data Science","Scikit-learn"],github:"https://github.com/vinit-oza/-Project-Weather-Prediction-Model-",demo:"#",image:"https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop"}];return E.jsxs("section",{id:"projects",className:"section",style:{background:"#000"},children:[E.jsx("div",{className:"container",children:E.jsxs(Te.div,{ref:t,initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},children:[E.jsxs(Te.h2,{initial:{y:50,opacity:0},animate:e?{y:0,opacity:1}:{y:50,opacity:0},transition:{duration:.6},className:"section-title",children:["Featured ",E.jsx("span",{className:"highlight",children:"Projects"})]}),E.jsx("div",{className:"projects-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"30px"},children:n.map((i,r)=>E.jsxs(Te.div,{initial:{y:80,opacity:0},animate:e?{y:0,opacity:1}:{y:80,opacity:0},transition:{duration:.6,delay:r*.15},whileHover:{y:-15,borderColor:"rgba(139, 92, 246, 0.5)"},style:{background:"linear-gradient(145deg, rgba(30, 30, 35, 0.9), rgba(10, 10, 15, 0.95))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"25px",overflow:"hidden",cursor:"pointer",transition:"all 0.4s ease",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.5)"},children:[E.jsxs("div",{style:{width:"100%",height:"250px",overflow:"hidden",position:"relative",background:"linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(167, 139, 250, 0.1))"},children:[E.jsx(Te.img,{whileHover:{scale:1.1},transition:{duration:.4},src:i.image,alt:i.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:.8}}),E.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to bottom, transparent 50%, rgba(10, 10, 15, 0.9))"}})]}),E.jsxs("div",{style:{padding:"30px"},children:[E.jsx("h3",{style:{fontSize:"1.6rem",fontWeight:700,color:"#fff",marginBottom:"15px",fontFamily:"Space Grotesk, sans-serif"},children:i.title}),E.jsx("p",{style:{color:"#aaa",lineHeight:1.7,marginBottom:"25px",fontSize:"0.95rem"},children:i.description}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"25px"},children:i.tags.map(s=>E.jsx("span",{style:{padding:"8px 16px",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",borderRadius:"20px",fontSize:"0.85rem",color:"#c4b5fd",fontWeight:500},children:s},s))}),E.jsxs(Te.a,{href:i.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,background:"#8b5cf6",borderColor:"#8b5cf6"},whileTap:{scale:.95},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 20px",background:"rgba(139, 92, 246, 0.2)",border:"1px solid rgba(139, 92, 246, 0.4)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",fontWeight:600,textDecoration:"none",transition:"all 0.3s"},children:[E.jsx(pu,{})," View Code"]})]})]},i.title))}),E.jsx(Te.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:.8},style:{textAlign:"center",marginTop:"50px"},children:E.jsxs(Te.a,{href:"https://github.com/vinit-oza",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},className:"btn btn-outline",children:[E.jsx(pu,{})," View All Projects on GitHub"]})})]})}),E.jsx("style",{children:`
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},IR=()=>{const[t,e]=qu({threshold:.2,triggerOnce:!0}),n=[{title:"ETL Process",issuer:"Microsoft",grade:"96.06%",image:"/Microsoft.png",verifyLink:"https://www.coursera.org/account/accomplishments/verify/8VD1TFJXU2XT",description:"A Microsoft ETL certification focuses on skills related to data integration using Microsoft tools like Power BI or Azure services."},{title:"Generative AI for Data Analysts",issuer:"IBM",grade:"93.86%",image:"/IBM.png",verifyLink:"https://www.coursera.org/account/accomplishments/specialization/YK5SU2GETIRJ",description:"Advanced course on leveraging generative AI tools for data analysis workflows."},{title:"Agile Project Management",issuer:"Google",grade:"96%",image:"/Google.png",verifyLink:"https://www.coursera.org/account/accomplishments/verify/V2KJ78YSYZZK",description:"Professional certification in Agile methodologies and project management practices."}];return E.jsx("section",{id:"certifications",className:"section",style:{background:"#000"},children:E.jsx("div",{className:"container",children:E.jsxs(Te.div,{ref:t,initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},children:[E.jsxs(Te.h2,{initial:{y:50,opacity:0},animate:e?{y:0,opacity:1}:{y:50,opacity:0},transition:{duration:.6},className:"section-title",children:["Certifications & ",E.jsx("span",{className:"highlight",children:"Courses"})]}),E.jsx(NR,{children:n.map((i,r)=>E.jsx(FR,{as:Te.div,initial:{x:r%2===0?-50:50,opacity:0},animate:e?{x:0,opacity:1}:{x:r%2===0?-50:50,opacity:0},transition:{duration:.6,delay:r*.15},children:E.jsxs(T3,{className:"card",children:[E.jsx(UR,{src:i.image,alt:`${i.issuer} Certificate`}),E.jsxs(OR,{className:"card__content",children:[E.jsx(kR,{children:i.grade}),E.jsx(BR,{className:"card__title",children:i.title}),E.jsx(zR,{children:i.issuer}),E.jsx(VR,{className:"card__description",children:i.description}),E.jsxs(GR,{type:"button",onClick:()=>window.open(i.verifyLink,"_blank"),children:[E.jsx("span",{className:"button__text",children:"Click to Verify"}),E.jsx("span",{className:"button__icon",children:E.jsx("svg",{className:"svg",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",children:E.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},i.title))})]})})})},NR=st.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,FR=st.div`
  perspective: 1000px;
`,T3=st.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(10, 10, 10, 0.95));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px rgba(139, 92, 246, 0.2);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(139, 92, 246, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
  }

  &:hover img {
    scale: 0;
    opacity: 0;
  }
`,UR=st.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
`,OR=st.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: linear-gradient(145deg, rgba(139, 92, 246, 0.15), rgba(10, 10, 10, 0.98));
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${T3}:hover & {
    transform: rotateX(0deg);
  }
`,kR=st.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
  color: #0a0a0a;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 2;
`,BR=st.p`
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
`,zR=st.p`
  margin: 0 0 15px 0;
  font-size: 1rem;
  color: #8b5cf6;
  font-weight: 600;
`,VR=st.p`
  margin: 0 0 20px 0;
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
`,GR=st.button`
  --main-focus: #8b5cf6;
  --font-color: #dedede;
  --bg-color-sub: #1a1a1a;
  --bg-color: #2a2a2a;
  --main-color: #8b5cf6;
  
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
  margin-top: auto;

  .button__text {
    transform: translateX(21px);
    color: var(--font-color);
    font-weight: 600;
    transition: all 0.3s;
  }

  .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .svg {
    width: 20px;
    fill: var(--main-color);
  }

  &:hover {
    background: var(--bg-color);
  }

  &:hover .button__text {
    color: transparent;
  }

  &:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
  }
`;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="181",HR=0,d1=1,WR=2,A3=1,jR=2,Ii=3,Ur=0,bn=1,Oi=2,Xi=0,mo=1,h1=2,p1=3,m1=4,XR=5,is=100,$R=101,YR=102,qR=103,KR=104,ZR=200,QR=201,JR=202,eP=203,Hh=204,Wh=205,tP=206,nP=207,iP=208,rP=209,sP=210,oP=211,aP=212,lP=213,cP=214,jh=0,Xh=1,$h=2,Lo=3,Yh=4,qh=5,Kh=6,Zh=7,C3=0,uP=1,fP=2,Lr=0,dP=1,hP=2,pP=3,mP=4,gP=5,xP=6,vP=7,R3=300,Do=301,Io=302,Qh=303,Jh=304,Ku=306,ep=1e3,Vi=1001,tp=1002,In=1003,yP=1004,Vl=1005,$n=1006,Zf=1007,us=1008,Ji=1009,P3=1010,L3=1011,qa=1012,tm=1013,Ms=1014,Gi=1015,zo=1016,nm=1017,im=1018,Ka=1020,D3=35902,I3=35899,N3=1021,F3=1022,ci=1023,Za=1026,Qa=1027,U3=1028,rm=1029,sm=1030,om=1031,am=1033,Ac=33776,Cc=33777,Rc=33778,Pc=33779,np=35840,ip=35841,rp=35842,sp=35843,op=36196,ap=37492,lp=37496,cp=37808,up=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,xp=37816,vp=37817,yp=37818,_p=37819,Sp=37820,Mp=37821,bp=36492,Ep=36494,wp=36495,Tp=36283,Ap=36284,Cp=36285,Rp=36286,_P=3200,SP=3201,MP=0,bP=1,xr="",Hn="srgb",No="srgb-linear",gu="linear",ct="srgb",Ls=7680,g1=519,EP=512,wP=513,TP=514,O3=515,AP=516,CP=517,RP=518,PP=519,x1=35044,v1="300 es",Si=2e3,xu=2001;function k3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LP(){const t=vu("canvas");return t.style.display="block",t}const y1={};function _1(...t){const e="THREE."+t.shift();console.log(e,...t)}function He(...t){const e="THREE."+t.shift();console.warn(e,...t)}function It(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ja(...t){const e=t.join(" ");e in y1||(y1[e]=!0,He(...t))}function DP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Vo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,Pp=180/Math.PI;function ul(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function IP(t,e){return(t%e+e)%e}function Jf(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==m){let g=l*d+c*p+u*m+f*v;g<0&&(d=-d,p=-p,m=-m,v=-v,g=-g);let h=1-a;if(g<.9995){const y=Math.acos(g),x=Math.sin(y);h=Math.sin(h*y)/x,a=Math.sin(a*y)/x,l=l*h+d*a,c=c*h+p*a,u=u*h+m*a,f=f*h+v*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+m*a,f=f*h+v*a;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*f+l*p-c*d,e[n+1]=l*m+u*d+c*f-a*p,e[n+2]=c*m+u*p+a*d-l*f,e[n+3]=u*m-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"YZX":this._x=d*u*f+c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f-d*p*m;break;case"XZY":this._x=d*u*f-c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f+d*p*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(S1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(S1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new $,S1=new fl;class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],m=i[8],v=r[0],g=r[3],h=r[6],y=r[1],x=r[4],_=r[7],T=r[2],S=r[5],A=r[8];return s[0]=o*v+a*y+l*T,s[3]=o*g+a*x+l*S,s[6]=o*h+a*_+l*A,s[1]=c*v+u*y+f*T,s[4]=c*g+u*x+f*S,s[7]=c*h+u*_+f*A,s[2]=d*v+p*y+m*T,s[5]=d*g+p*x+m*S,s[8]=d*h+p*_+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,m=n*f+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(td.makeScale(e,n)),this}rotate(e){return this.premultiply(td.makeRotation(-e)),this}translate(e,n){return this.premultiply(td.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const td=new We,M1=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b1=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NP(){const t={enabled:!0,workingColorSpace:No,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?gu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[No]:{primaries:e,whitePoint:i,transfer:gu,toXYZ:M1,fromXYZ:b1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:M1,fromXYZ:b1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const it=NP();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function go(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class FP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=vu("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UP=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UP++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nd(r[o].image)):s.push(nd(r[o]))}else s=nd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let OP=0;const id=new $;class fn extends Vo{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Vi,r=Vi,s=$n,o=us,a=ci,l=Ji,c=fn.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OP++}),this.uuid=ul(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R3)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ep:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ep:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=R3;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,_=(p+1)/2,T=(h+1)/2,S=(u+d)/4,A=(f+v)/4,R=(m+g)/4;return x>_&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=S/i,s=A/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=S/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=R/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kP extends Vo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends kP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B3 extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BP extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Hl.subVectors(this.max,ta),Is.subVectors(e.a,ta),Ns.subVectors(e.b,ta),Fs.subVectors(e.c,ta),rr.subVectors(Ns,Is),sr.subVectors(Fs,Ns),jr.subVectors(Is,Fs);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-jr.z,jr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,jr.z,0,-jr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-jr.y,jr.x,0];return!rd(n,Is,Ns,Fs,Hl)||(n=[1,0,0,0,1,0,0,0,1],!rd(n,Is,Ns,Fs,Hl))?!1:(Wl.crossVectors(rr,sr),n=[Wl.x,Wl.y,Wl.z],rd(n,Is,Ns,Fs,Hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new $,new $,new $,new $,new $,new $,new $,new $],ei=new $,Gl=new dl,Is=new $,Ns=new $,Fs=new $,rr=new $,sr=new $,jr=new $,ta=new $,Hl=new $,Wl=new $,Xr=new $;function rd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zP=new dl,na=new $,sd=new $;class cm{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(sd)),this.expandByPoint(na.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new $,od=new $,jl=new $,or=new $,ad=new $,Xl=new $,ld=new $;class VP{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){od.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(od);const s=e.distanceTo(n)*.5,o=-this.direction.dot(jl),a=or.dot(this.direction),l=-or.dot(jl),c=or.lengthSq(),u=Math.abs(1-o*o);let f,d,p,m;if(u>0)if(f=o*l-a,d=o*a-l,m=s*u,f>=0)if(d>=-m)if(d<=m){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(od).addScaledVector(jl,d),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){ad.subVectors(n,e),Xl.subVectors(i,e),ld.crossVectors(ad,Xl);let o=this.direction.dot(ld),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(or,Xl));if(l<0)return null;const c=a*this.direction.dot(ad.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(ld);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,m,v,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=m,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,m=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,m=c*u,v=c*f;n[0]=d+v*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,m=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,m=a*u,v=a*f;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=m*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+m,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-m,n[2]=m*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GP,e,HP)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),ar.crossVectors(i,An),ar.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ar.crossVectors(i,An)),ar.normalize(),$l.crossVectors(An,ar),r[0]=ar.x,r[4]=$l.x,r[8]=An.x,r[1]=ar.y,r[5]=$l.y,r[9]=An.y,r[2]=ar.z,r[6]=$l.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],m=i[2],v=i[6],g=i[10],h=i[14],y=i[3],x=i[7],_=i[11],T=i[15],S=r[0],A=r[4],R=r[8],b=r[12],M=r[1],L=r[5],F=r[9],O=r[13],U=r[2],H=r[6],G=r[10],K=r[14],N=r[3],z=r[7],j=r[11],ee=r[15];return s[0]=o*S+a*M+l*U+c*N,s[4]=o*A+a*L+l*H+c*z,s[8]=o*R+a*F+l*G+c*j,s[12]=o*b+a*O+l*K+c*ee,s[1]=u*S+f*M+d*U+p*N,s[5]=u*A+f*L+d*H+p*z,s[9]=u*R+f*F+d*G+p*j,s[13]=u*b+f*O+d*K+p*ee,s[2]=m*S+v*M+g*U+h*N,s[6]=m*A+v*L+g*H+h*z,s[10]=m*R+v*F+g*G+h*j,s[14]=m*b+v*O+g*K+h*ee,s[3]=y*S+x*M+_*U+T*N,s[7]=y*A+x*L+_*H+T*z,s[11]=y*R+x*F+_*G+T*j,s[15]=y*b+x*O+_*K+T*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],m=e[3],v=e[7],g=e[11],h=e[15];return m*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],h=e[15],y=f*g*c-v*d*c+v*l*p-a*g*p-f*l*h+a*d*h,x=m*d*c-u*g*c-m*l*p+o*g*p+u*l*h-o*d*h,_=u*v*c-m*f*c+m*a*p-o*v*p-u*a*h+o*f*h,T=m*f*l-u*v*l-m*a*d+o*v*d+u*a*g-o*f*g,S=n*y+i*x+r*_+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=y*A,e[1]=(v*d*s-f*g*s-v*r*p+i*g*p+f*r*h-i*d*h)*A,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*g*s-m*d*s+m*r*p-n*g*p-u*r*h+n*d*h)*A,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=_*A,e[9]=(m*f*s-u*v*s-m*i*p+n*v*p+u*i*h-n*f*h)*A,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=T*A,e[13]=(u*v*r-m*f*r+m*i*d-n*v*d-u*i*g+n*f*g)*A,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*g-n*a*g)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,m=s*f,v=o*u,g=o*f,h=a*f,y=l*c,x=l*u,_=l*f,T=i.x,S=i.y,A=i.z;return r[0]=(1-(v+h))*T,r[1]=(p+_)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(p-_)*S,r[5]=(1-(d+h))*S,r[6]=(g+y)*S,r[7]=0,r[8]=(m+x)*A,r[9]=(g-y)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/o,f=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Si)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Si)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===xu)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Us=new $,ti=new Vt,GP=new $(0,0,0),HP=new $(1,1,1),ar=new $,$l=new $,An=new $,E1=new Vt,w1=new fl;class er{constructor(e=0,n=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return E1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return w1.setFromEuler(this),this.setFromQuaternion(w1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class z3{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WP=0;const T1=new $,Os=new fl,Ri=new Vt,Yl=new $,ia=new $,jP=new $,XP=new fl,A1=new $(1,0,0),C1=new $(0,1,0),R1=new $(0,0,1),P1={type:"added"},$P={type:"removed"},ks={type:"childadded",child:null},cd={type:"childremoved",child:null};class Nn extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WP++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new $,n=new er,i=new fl,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new We}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(A1,e)}rotateY(e){return this.rotateOnAxis(C1,e)}rotateZ(e){return this.rotateOnAxis(R1,e)}translateOnAxis(e,n){return T1.copy(e).applyQuaternion(this.quaternion),this.position.add(T1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A1,e)}translateY(e){return this.translateOnAxis(C1,e)}translateZ(e){return this.translateOnAxis(R1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yl.copy(e):Yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ia,Yl,this.up):Ri.lookAt(Yl,ia,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Ri),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P1),ks.child=e,this.dispatchEvent(ks),ks.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($P),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P1),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,jP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,XP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new $(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new $,Pi=new $,ud=new $,Li=new $,Bs=new $,zs=new $,L1=new $,fd=new $,dd=new $,hd=new $,pd=new Nt,md=new Nt,gd=new Nt;class ai{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Pi.subVectors(i,n),ud.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Pi),l=ni.dot(ud),c=Pi.dot(Pi),u=Pi.dot(ud),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,n),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pd,s.x),o.addScaledVector(md,s.y),o.addScaledVector(gd,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Pi.subVectors(e,n),ni.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ni.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Bs.subVectors(r,i),zs.subVectors(s,i),fd.subVectors(e,i);const l=Bs.dot(fd),c=zs.dot(fd);if(l<=0&&c<=0)return n.copy(i);dd.subVectors(e,r);const u=Bs.dot(dd),f=zs.dot(dd);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Bs,o);hd.subVectors(e,s);const p=Bs.dot(hd),m=zs.dot(hd);if(m>=0&&p<=m)return n.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(zs,a);const g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return L1.subVectors(s,r),a=(f-u)/(f-u+(p-m)),n.copy(r).addScaledVector(L1,a);const h=1/(g+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=IP(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xd(o,s,e+1/3),this.g=xd(o,s,e),this.b=xd(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=V3[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return it.workingToColorSpace(en.copy(this),e),Math.round(Qe(en.r*255,0,255))*65536+Math.round(Qe(en.g*255,0,255))*256+Math.round(Qe(en.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Hn){it.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(ql);const i=Jf(lr.h,ql.h,n),r=Jf(lr.s,ql.s,n),s=Jf(lr.l,ql.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ut;ut.NAMES=V3;let YP=0;class Zu extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YP++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=mo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Wh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Wh&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class G3 extends Zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=C3,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new $,Kl=new Je;let qP=0;class wi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=x1,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Kl.fromBufferAttribute(this,n),Kl.applyMatrix3(e),this.setXY(n,Kl.x,Kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x1&&(e.usage=this.usage),e}}class H3 extends wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W3 extends wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gs extends wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KP=0;const Vn=new Vt,vd=new Nn,Vs=new $,Cn=new dl,ra=new dl,Wt=new $;class Vr extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KP++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k3(e)?W3:H3)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gs(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Cn.min,ra.min),Cn.expandByPoint(Wt),Wt.addVectors(Cn.max,ra.max),Cn.expandByPoint(Wt)):(Cn.expandByPoint(ra.min),Cn.expandByPoint(ra.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),Wt.add(Vs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;const c=new $,u=new $,f=new $,d=new Je,p=new Je,m=new Je,v=new $,g=new $;function h(R,b,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),m.sub(d);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),a[R].add(v),a[b].add(v),a[M].add(v),l[R].add(g),l[b].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,b=y.length;R<b;++R){const M=y[R],L=M.start,F=M.count;for(let O=L,U=L+F;O<U;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new $,_=new $,T=new $,S=new $;function A(R){T.fromBufferAttribute(r,R),S.copy(T);const b=a[R];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(S,b);const L=_.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,b=y.length;R<b;++R){const M=y[R],L=M.start,F=M.count;for(let O=L,U=L+F;O<U;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[m++]=c[p++]}return new wi(d,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D1=new Vt,$r=new VP,Zl=new cm,I1=new $,Ql=new $,Jl=new $,ec=new $,yd=new $,tc=new $,N1=new $,nc=new $;class tr extends Nn{constructor(e=new Vr,n=new G3){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(yd.fromBufferAttribute(f,e),o?tc.addScaledVector(yd,u):tc.addScaledVector(yd.sub(n),u))}n.add(tc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Zl.containsPoint($r.origin)===!1&&($r.intersectSphere(Zl,I1)===null||$r.origin.distanceToSquared(I1)>(e.far-e.near)**2))&&(D1.copy(s).invert(),$r.copy(e.ray).applyMatrix4(D1),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],h=o[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,T=x;_<T;_+=3){const S=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);r=ic(this,h,e,i,c,u,f,S,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const y=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);r=ic(this,o,e,i,c,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],h=o[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,T=x;_<T;_+=3){const S=_,A=_+1,R=_+2;r=ic(this,h,e,i,c,u,f,S,A,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const y=g,x=g+1,_=g+2;r=ic(this,o,e,i,c,u,f,y,x,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ZP(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;nc.copy(a),nc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nc);return c<n.near||c>n.far?null:{distance:c,point:nc.clone(),object:t}}function ic(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ql),t.getVertexPosition(l,Jl),t.getVertexPosition(c,ec);const u=ZP(t,e,n,i,Ql,Jl,ec,N1);if(u){const f=new $;ai.getBarycoord(N1,Ql,Jl,ec,f),r&&(u.uv=ai.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=ai.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=ai.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};ai.getNormal(Ql,Jl,ec,d.normal),u.face=d,u.barycoord=f}return u}class hl extends Vr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gs(c,3)),this.setAttribute("normal",new gs(u,3)),this.setAttribute("uv",new gs(f,2));function m(v,g,h,y,x,_,T,S,A,R,b){const M=_/A,L=T/R,F=_/2,O=T/2,U=S/2,H=A+1,G=R+1;let K=0,N=0;const z=new $;for(let j=0;j<G;j++){const ee=j*L-O;for(let fe=0;fe<H;fe++){const Ie=fe*M-F;z[v]=Ie*y,z[g]=ee*x,z[h]=U,c.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[h]=S>0?1:-1,u.push(z.x,z.y,z.z),f.push(fe/A),f.push(1-j/R),K+=1}}for(let j=0;j<R;j++)for(let ee=0;ee<A;ee++){const fe=d+ee+H*j,Ie=d+ee+H*(j+1),Ue=d+(ee+1)+H*(j+1),Ve=d+(ee+1)+H*j;l.push(fe,Ie,Ve),l.push(Ie,Ue,Ve),N+=6}a.addGroup(p,N,b),p+=N,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function QP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j3(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const JP={clone:Fo,merge:on};var eL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eL,this.fragmentShader=tL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=QP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X3 extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new $,F1=new Je,U1=new Je;class oi extends X3{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,F1,U1),n.subVectors(U1,F1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gs=-90,Hs=1;class nL extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(Gs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new oi(Gs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new oi(Gs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new oi(Gs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new oi(Gs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new oi(Gs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class $3 extends fn{constructor(e=[],n=Do,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iL extends bs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $3(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hl(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Xi});s.uniforms.tEquirect.value=n;const o=new tr(r,s),a=n.minFilter;return n.minFilter===us&&(n.minFilter=$n),new nL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class rc extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rL={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),h=this._getHandJoint(c,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sL extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class oL extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=In,u=In,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new $,aL=new $,lL=new We;class ns{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sd.subVectors(i,n).cross(aL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lL.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new cm,cL=new Je(.5,.5),sc=new $;class Y3{constructor(e=new ns,n=new ns,i=new ns,r=new ns,s=new ns,o=new ns){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],m=s[8],v=s[9],g=s[10],h=s[11],y=s[12],x=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,h-m,T-y).normalize(),r[1].setComponents(c+o,p+u,h+m,T+y).normalize(),r[2].setComponents(c+a,p+f,h+v,T+x).normalize(),r[3].setComponents(c-a,p-f,h-v,T-x).normalize(),i)r[4].setComponents(l,d,g,_).normalize(),r[5].setComponents(c-l,p-d,h-g,T-_).normalize();else if(r[4].setComponents(c-l,p-d,h-g,T-_).normalize(),n===Si)r[5].setComponents(c+l,p+d,h+g,T+_).normalize();else if(n===xu)r[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=cL.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q3 extends fn{constructor(e,n,i=Ms,r,s,o,a=In,l=In,c,u=Za,f=1){if(u!==Za&&u!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class K3 extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends Vr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],m=[],v=[],g=[];for(let h=0;h<u;h++){const y=h*d-o;for(let x=0;x<c;x++){const _=x*f-s;m.push(_,-y,0),v.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const x=y+c*h,_=y+c*(h+1),T=y+1+c*(h+1),S=y+1+c*h;p.push(x,_,S),p.push(_,T,S)}this.setIndex(p),this.setAttribute("position",new gs(m,3)),this.setAttribute("normal",new gs(v,3)),this.setAttribute("uv",new gs(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class uL extends Zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_P,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fL extends Zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Z3 extends X3{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class dL extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function O1(t,e,n,i){const r=pL(i);switch(n){case N3:return t*e;case U3:return t*e/r.components*r.byteLength;case rm:return t*e/r.components*r.byteLength;case sm:return t*e*2/r.components*r.byteLength;case om:return t*e*2/r.components*r.byteLength;case F3:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case am:return t*e*4/r.components*r.byteLength;case Ac:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ip:case sp:return Math.max(t,16)*Math.max(e,8)/4;case np:case rp:return Math.max(t,8)*Math.max(e,8)/2;case op:case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ep:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Tp:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cp:case Rp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pL(t){switch(t){case Ji:case P3:return{byteLength:1,components:1};case qa:case L3:case zo:return{byteLength:2,components:1};case nm:case im:return{byteLength:2,components:4};case Ms:case tm:case Gi:return{byteLength:4,components:1};case D3:case I3:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q3(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mL(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_L=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ML=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XL="gl_FragColor = linearToOutputTexel( gl_FragColor );",$L=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_D=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ED=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ID=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ND=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$D=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e6=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t6=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n6=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i6=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r6=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s6=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o6=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a6=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l6=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c6=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u6=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p6=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m6=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g6=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x6=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v6=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y6=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_6=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S6=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M6=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b6=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E6=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w6=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T6=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A6=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C6=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R6=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P6=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L6=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D6=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I6=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N6=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F6=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U6=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B6=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z6=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V6=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G6=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H6=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W6=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j6=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X6=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$6=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y6=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:gL,alphahash_pars_fragment:xL,alphamap_fragment:vL,alphamap_pars_fragment:yL,alphatest_fragment:_L,alphatest_pars_fragment:SL,aomap_fragment:ML,aomap_pars_fragment:bL,batching_pars_vertex:EL,batching_vertex:wL,begin_vertex:TL,beginnormal_vertex:AL,bsdfs:CL,iridescence_fragment:RL,bumpmap_pars_fragment:PL,clipping_planes_fragment:LL,clipping_planes_pars_fragment:DL,clipping_planes_pars_vertex:IL,clipping_planes_vertex:NL,color_fragment:FL,color_pars_fragment:UL,color_pars_vertex:OL,color_vertex:kL,common:BL,cube_uv_reflection_fragment:zL,defaultnormal_vertex:VL,displacementmap_pars_vertex:GL,displacementmap_vertex:HL,emissivemap_fragment:WL,emissivemap_pars_fragment:jL,colorspace_fragment:XL,colorspace_pars_fragment:$L,envmap_fragment:YL,envmap_common_pars_fragment:qL,envmap_pars_fragment:KL,envmap_pars_vertex:ZL,envmap_physical_pars_fragment:lD,envmap_vertex:QL,fog_vertex:JL,fog_pars_vertex:eD,fog_fragment:tD,fog_pars_fragment:nD,gradientmap_pars_fragment:iD,lightmap_pars_fragment:rD,lights_lambert_fragment:sD,lights_lambert_pars_fragment:oD,lights_pars_begin:aD,lights_toon_fragment:cD,lights_toon_pars_fragment:uD,lights_phong_fragment:fD,lights_phong_pars_fragment:dD,lights_physical_fragment:hD,lights_physical_pars_fragment:pD,lights_fragment_begin:mD,lights_fragment_maps:gD,lights_fragment_end:xD,logdepthbuf_fragment:vD,logdepthbuf_pars_fragment:yD,logdepthbuf_pars_vertex:_D,logdepthbuf_vertex:SD,map_fragment:MD,map_pars_fragment:bD,map_particle_fragment:ED,map_particle_pars_fragment:wD,metalnessmap_fragment:TD,metalnessmap_pars_fragment:AD,morphinstance_vertex:CD,morphcolor_vertex:RD,morphnormal_vertex:PD,morphtarget_pars_vertex:LD,morphtarget_vertex:DD,normal_fragment_begin:ID,normal_fragment_maps:ND,normal_pars_fragment:FD,normal_pars_vertex:UD,normal_vertex:OD,normalmap_pars_fragment:kD,clearcoat_normal_fragment_begin:BD,clearcoat_normal_fragment_maps:zD,clearcoat_pars_fragment:VD,iridescence_pars_fragment:GD,opaque_fragment:HD,packing:WD,premultiplied_alpha_fragment:jD,project_vertex:XD,dithering_fragment:$D,dithering_pars_fragment:YD,roughnessmap_fragment:qD,roughnessmap_pars_fragment:KD,shadowmap_pars_fragment:ZD,shadowmap_pars_vertex:QD,shadowmap_vertex:JD,shadowmask_pars_fragment:e6,skinbase_vertex:t6,skinning_pars_vertex:n6,skinning_vertex:i6,skinnormal_vertex:r6,specularmap_fragment:s6,specularmap_pars_fragment:o6,tonemapping_fragment:a6,tonemapping_pars_fragment:l6,transmission_fragment:c6,transmission_pars_fragment:u6,uv_pars_fragment:f6,uv_pars_vertex:d6,uv_vertex:h6,worldpos_vertex:p6,background_vert:m6,background_frag:g6,backgroundCube_vert:x6,backgroundCube_frag:v6,cube_vert:y6,cube_frag:_6,depth_vert:S6,depth_frag:M6,distanceRGBA_vert:b6,distanceRGBA_frag:E6,equirect_vert:w6,equirect_frag:T6,linedashed_vert:A6,linedashed_frag:C6,meshbasic_vert:R6,meshbasic_frag:P6,meshlambert_vert:L6,meshlambert_frag:D6,meshmatcap_vert:I6,meshmatcap_frag:N6,meshnormal_vert:F6,meshnormal_frag:U6,meshphong_vert:O6,meshphong_frag:k6,meshphysical_vert:B6,meshphysical_frag:z6,meshtoon_vert:V6,meshtoon_frag:G6,points_vert:H6,points_frag:W6,shadow_vert:j6,shadow_frag:X6,sprite_vert:$6,sprite_frag:Y6},de={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yi={basic:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ut(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ut(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([de.common,de.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([de.lights,de.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};yi.physical={uniforms:on([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const oc={r:0,b:0,g:0},qr=new er,q6=new Vt;function K6(t,e,n,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function v(x){let _=!1;const T=m(x);T===null?h(a,l):T&&T.isColor&&(h(T,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,_){const T=m(_);T&&(T.isCubeTexture||T.mapping===Ku)?(u===void 0&&(u=new tr(new hl(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Fo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qr.copy(_.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q6.makeRotationFromEuler(qr)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,(f!==T||d!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new tr(new pl(2,2),new Ti({name:"BackgroundMaterial",uniforms:Fo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,_){x.getRGB(oc,j3(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:v,addToRenderList:g,dispose:y}}function Z6(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,F,O,U){let H=!1;const G=f(O,F,L);s!==G&&(s=G,c(s.object)),H=p(M,O,F,U),H&&m(M,O,F,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,L,F,O),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,L,F){const O=F.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let H=U[L.id];H===void 0&&(H={},U[L.id]=H);let G=H[O];return G===void 0&&(G=d(l()),H[O]=G),G}function d(M){const L=[],F=[],O=[];for(let U=0;U<n;U++)L[U]=0,F[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,L,F,O){const U=s.attributes,H=L.attributes;let G=0;const K=F.getAttributes();for(const N in K)if(K[N].location>=0){const j=U[N];let ee=H[N];if(ee===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function m(M,L,F,O){const U={},H=L.attributes;let G=0;const K=F.getAttributes();for(const N in K)if(K[N].location>=0){let j=H[N];j===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),U[N]=ee,G++}s.attributes=U,s.attributesNum=G,s.index=O}function v(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){h(M,0)}function h(M,L){const F=s.newAttributes,O=s.enabledAttributes,U=s.attributeDivisors;F[M]=1,O[M]===0&&(t.enableVertexAttribArray(M),O[M]=1),U[M]!==L&&(t.vertexAttribDivisor(M,L),U[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,O=L.length;F<O;F++)L[F]!==M[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function x(M,L,F,O,U,H,G){G===!0?t.vertexAttribIPointer(M,L,F,U,H):t.vertexAttribPointer(M,L,F,O,U,H)}function _(M,L,F,O){v();const U=O.attributes,H=F.getAttributes(),G=L.defaultAttributeValues;for(const K in H){const N=H[K];if(N.location>=0){let z=U[K];if(z===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),z!==void 0){const j=z.normalized,ee=z.itemSize,fe=e.get(z);if(fe===void 0)continue;const Ie=fe.buffer,Ue=fe.type,Ve=fe.bytesPerElement,Y=Ue===t.INT||Ue===t.UNSIGNED_INT||z.gpuType===tm;if(z.isInterleavedBufferAttribute){const Z=z.data,le=Z.stride,ve=z.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<N.locationSize;ge++)h(N.location+ge,Z.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<N.locationSize;ge++)g(N.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ge=0;ge<N.locationSize;ge++)x(N.location+ge,ee/N.locationSize,Ue,j,le*Ve,(ve+ee/N.locationSize*ge)*Ve,Y)}else{if(z.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)h(N.location+Z,z.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Z=0;Z<N.locationSize;Z++)g(N.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Z=0;Z<N.locationSize;Z++)x(N.location+Z,ee/N.locationSize,Ue,j,ee*Ve,ee/N.locationSize*Z*Ve,Y)}}else if(G!==void 0){const j=G[K];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(N.location,j);break;case 3:t.vertexAttrib3fv(N.location,j);break;case 4:t.vertexAttrib4fv(N.location,j);break;default:t.vertexAttrib1fv(N.location,j)}}}}y()}function T(){R();for(const M in i){const L=i[M];for(const F in L){const O=L[F];for(const U in O)u(O[U].object),delete O[U];delete L[F]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const O=L[F];for(const U in O)u(O[U].object),delete O[U];delete L[F]}delete i[M.id]}function A(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const O=F[M.id];for(const U in O)u(O[U].object),delete O[U];delete F[M.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Q6(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*d[v];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J6(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ci&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ji&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:S}}function e9(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ns,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,x=y*4;let _=h.clippingState||null;l.value=_,_=u(m,d,x,p);for(let T=0;T!==x;++T)_[T]=n[T];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const h=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,_=p;x!==v;++x,_+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function t9(t){let e=new WeakMap;function n(o,a){return a===Qh?o.mapping=Do:a===Jh&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qh||a===Jh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iL(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _r=4,k1=[.125,.215,.35,.446,.526,.582],rs=20,n9=256,sa=new Z3,B1=new ut;let Md=null,bd=0,Ed=0,wd=!1;const i9=new $;class z1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=i9}=s;Md=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,bd,Ed),this._renderer.xr.enabled=wd,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:zo,format:ci,colorSpace:No,depthBuffer:!1},r=V1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V1(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r9(s)),this._blurMaterial=o9(s,e,n),this._ggxMaterial=s9(s,e,n)}return r}_compileMaterial(e){const n=new tr(new Vr,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,i,r,s){const l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(B1),f.toneMapping=Lr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tr(new hl,new G3({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let h=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,h=!0):(g.color.copy(B1),h=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const T=this._cubeSize;Ws(r,_*T,x>2?T:0,T,T),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=H1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,p=f*d,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-_r?i-m+_r:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Ws(s,g,h,3*v,2*v),r.setRenderTarget(s),r.render(a,sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ws(e,g,h,3*v,2*v),r.setRenderTarget(e),r.render(a,sa)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):rs;g>rs&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rs}`);const h=[];let y=0;for(let A=0;A<rs;++A){const R=A/v,b=Math.exp(-R*R/2);h.push(b),A===0?y+=b:A<g&&(y+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const _=this._sizeLods[r],T=3*_*(r>x-_r?r-x+_r:0),S=4*(this._cubeSize-_);Ws(n,T,S,3*_,2*_),l.setRenderTarget(n),l.render(f,sa)}}function r9(t){const e=[],n=[],i=[];let r=t;const s=t-_r+1+k1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-_r?l=k1[o-t+_r-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,v=3,g=2,h=1,y=new Float32Array(v*m*p),x=new Float32Array(g*m*p),_=new Float32Array(h*m*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,R=S>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(b,v*m*S),x.set(d,g*m*S);const M=[S,S,S,S,S,S];_.set(M,h*m*S)}const T=new Vr;T.setAttribute("position",new wi(y,v)),T.setAttribute("uv",new wi(x,g)),T.setAttribute("faceIndex",new wi(_,h)),i.push(new tr(T,null)),r>_r&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function V1(t,e,n){const i=new bs(t,e,n);return i.texture.mapping=Ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function s9(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n9,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function o9(t,e,n){const i=new Float32Array(rs),r=new $(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function G1(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function H1(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function a9(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qh||l===Jh,u=l===Do||l===Io;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new z1(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new z1(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function l9(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("WebGLRenderer: "+i+" extension not supported."),r}}}function c9(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,m=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){const T=y[x+0],S=y[x+1],A=y[x+2];d.push(T,S,S,A,A,T)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const T=x+0,S=x+1,A=x+2;d.push(T,S,S,A,A,T)}}else return;const g=new(k3(d)?W3:H3)(d,1);g.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function u9(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,d*o,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function f(d,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,m);let h=0;for(let y=0;y<m;y++)h+=p[y]*v[y];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function f9(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:It("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function d9(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let T=a.attributes.position.count*_,S=1;T>e.maxTextureSize&&(S=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*S*4*f),R=new B3(A,T,S,f);R.type=Gi,R.needsUpdate=!0;const b=_*4;for(let L=0;L<f;L++){const F=h[L],O=y[L],U=x[L],H=T*S*4*L;for(let G=0;G<F.count;G++){const K=G*b;m===!0&&(r.fromBufferAttribute(F,G),A[H+K+0]=r.x,A[H+K+1]=r.y,A[H+K+2]=r.z,A[H+K+3]=0),v===!0&&(r.fromBufferAttribute(O,G),A[H+K+4]=r.x,A[H+K+5]=r.y,A[H+K+6]=r.z,A[H+K+7]=0),g===!0&&(r.fromBufferAttribute(U,G),A[H+K+8]=r.x,A[H+K+9]=r.y,A[H+K+10]=r.z,A[H+K+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Je(T,S)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function h9(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const J3=new fn,W1=new q3(1,1),eS=new B3,tS=new BP,nS=new $3,j1=[],X1=[],$1=new Float32Array(16),Y1=new Float32Array(9),q1=new Float32Array(4);function Go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=j1[r];if(s===void 0&&(s=new Float32Array(r),j1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ju(t,e){let n=X1[e];n===void 0&&(n=new Int32Array(e),X1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p9(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function g9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function x9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function v9(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;q1.set(i),t.uniformMatrix2fv(this.addr,!1,q1),Ht(n,i)}}function y9(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Y1.set(i),t.uniformMatrix3fv(this.addr,!1,Y1),Ht(n,i)}}function _9(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;$1.set(i),t.uniformMatrix4fv(this.addr,!1,$1),Ht(n,i)}}function S9(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function b9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function E9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function w9(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function T9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function A9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function C9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function R9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(W1.compareFunction=O3,s=W1):s=J3,n.setTexture2D(e||s,r)}function P9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tS,r)}function L9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nS,r)}function D9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||eS,r)}function I9(t){switch(t){case 5126:return p9;case 35664:return m9;case 35665:return g9;case 35666:return x9;case 35674:return v9;case 35675:return y9;case 35676:return _9;case 5124:case 35670:return S9;case 35667:case 35671:return M9;case 35668:case 35672:return b9;case 35669:case 35673:return E9;case 5125:return w9;case 36294:return T9;case 36295:return A9;case 36296:return C9;case 35678:case 36198:case 36298:case 36306:case 35682:return R9;case 35679:case 36299:case 36307:return P9;case 35680:case 36300:case 36308:case 36293:return L9;case 36289:case 36303:case 36311:case 36292:return D9}}function N9(t,e){t.uniform1fv(this.addr,e)}function F9(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function U9(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function O9(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function k9(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B9(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z9(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V9(t,e){t.uniform1iv(this.addr,e)}function G9(t,e){t.uniform2iv(this.addr,e)}function H9(t,e){t.uniform3iv(this.addr,e)}function W9(t,e){t.uniform4iv(this.addr,e)}function j9(t,e){t.uniform1uiv(this.addr,e)}function X9(t,e){t.uniform2uiv(this.addr,e)}function $9(t,e){t.uniform3uiv(this.addr,e)}function Y9(t,e){t.uniform4uiv(this.addr,e)}function q9(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||J3,s[o])}function K9(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tS,s[o])}function Z9(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||nS,s[o])}function Q9(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||eS,s[o])}function J9(t){switch(t){case 5126:return N9;case 35664:return F9;case 35665:return U9;case 35666:return O9;case 35674:return k9;case 35675:return B9;case 35676:return z9;case 5124:case 35670:return V9;case 35667:case 35671:return G9;case 35668:case 35672:return H9;case 35669:case 35673:return W9;case 5125:return j9;case 36294:return X9;case 36295:return $9;case 36296:return Y9;case 35678:case 36198:case 36298:case 36306:case 35682:return q9;case 35679:case 36299:case 36307:return K9;case 35680:case 36300:case 36308:case 36293:return Z9;case 36289:case 36303:case 36311:case 36292:return Q9}}class e8{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=I9(n.type)}}class t8{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=J9(n.type)}}class n8{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function K1(t,e){t.seq.push(e),t.map[e.id]=e}function i8(t,e,n){const i=t.name,r=i.length;for(Td.lastIndex=0;;){const s=Td.exec(i),o=Td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){K1(n,c===void 0?new e8(a,t,e):new t8(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new n8(a),K1(n,f)),n=f}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);i8(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Z1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const r8=37297;let s8=0;function o8(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Q1=new We;function a8(t){it._getMatrix(Q1,it.workingColorSpace,t);const e=`mat3( ${Q1.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case gu:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function J1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+o8(t.getShaderSource(e),a)}else return s}function l8(t,e){const n=a8(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function c8(t,e){let n;switch(e){case dP:n="Linear";break;case hP:n="Reinhard";break;case pP:n="Cineon";break;case mP:n="ACESFilmic";break;case xP:n="AgX";break;case vP:n="Neutral";break;case gP:n="Custom";break;default:He("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ac=new $;function u8(){it.getLuminanceCoefficients(ac);const t=ac.x.toFixed(4),e=ac.y.toFixed(4),n=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f8(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function d8(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function h8(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function da(t){return t!==""}function ev(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p8=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(t){return t.replace(p8,g8)}const m8=new Map;function g8(t,e){let n=je[e];if(n===void 0){const i=m8.get(e);if(i!==void 0)n=je[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lp(n)}const x8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(t){return t.replace(x8,v8)}function v8(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function iv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y8(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A3?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function _8(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S8(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function M8(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case C3:e="ENVMAP_BLENDING_MULTIPLY";break;case uP:e="ENVMAP_BLENDING_MIX";break;case fP:e="ENVMAP_BLENDING_ADD";break}return e}function b8(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function E8(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=y8(n),c=_8(n),u=S8(n),f=M8(n),d=b8(n),p=f8(n),m=d8(s),v=r.createProgram();let g,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(da).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(da).join(`
`),h.length>0&&(h+=`
`)):(g=[iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),h=[iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Lr?"#define TONE_MAPPING":"",n.toneMapping!==Lr?je.tonemapping_pars_fragment:"",n.toneMapping!==Lr?c8("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,l8("linearToOutputTexel",n.outputColorSpace),u8(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),o=Lp(o),o=ev(o,n),o=tv(o,n),a=Lp(a),a=ev(a,n),a=tv(a,n),o=nv(o),a=nv(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===v1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===v1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=y+g+o,_=y+h+a,T=Z1(r,r.VERTEX_SHADER,x),S=Z1(r,r.FRAGMENT_SHADER,_);r.attachShader(v,T),r.attachShader(v,S),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(T)||"",U=r.getShaderInfoLog(S)||"",H=F.trim(),G=O.trim(),K=U.trim();let N=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,S);else{const j=J1(r,T,"vertex"),ee=J1(r,S,"fragment");It("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+ee)}else H!==""?He("WebGLProgram: Program Info Log:",H):(G===""||K==="")&&(z=!1);z&&(L.diagnostics={runnable:N,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:K,prefix:h}})}r.deleteShader(T),r.deleteShader(S),R=new Lc(r,v),b=h8(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,r8)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=s8++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let w8=0;class T8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new A8(e),n.set(e,i)),i}}class A8{constructor(e){this.id=w8++,this.code=e,this.usedTimes=0}}function C8(t,e,n,i,r,s,o){const a=new z3,l=new T8,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,F,O){const U=F.fog,H=O.geometry,G=b.isMeshStandardMaterial?F.environment:null,K=(b.isMeshStandardMaterial?n:e).get(b.envMap||G),N=K&&K.mapping===Ku?K.image.height:null,z=m[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&He("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=j!==void 0?j.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let Ie,Ue,Ve,Y;if(z){const at=yi[z];Ie=at.vertexShader,Ue=at.fragmentShader}else Ie=b.vertexShader,Ue=b.fragmentShader,l.update(b),Ve=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const Z=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),ve=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Ee=!!b.map,tt=!!b.matcap,$e=!!K,dt=!!b.aoMap,D=!!b.lightMap,Ye=!!b.bumpMap,Ke=!!b.normalMap,ht=!!b.displacementMap,be=!!b.emissiveMap,St=!!b.metalnessMap,Re=!!b.roughnessMap,Ge=b.anisotropy>0,P=b.clearcoat>0,w=b.dispersion>0,V=b.iridescence>0,J=b.sheen>0,ne=b.transmission>0,q=Ge&&!!b.anisotropyMap,Ae=P&&!!b.clearcoatMap,he=P&&!!b.clearcoatNormalMap,Pe=P&&!!b.clearcoatRoughnessMap,we=V&&!!b.iridescenceMap,ie=V&&!!b.iridescenceThicknessMap,ae=J&&!!b.sheenColorMap,Oe=J&&!!b.sheenRoughnessMap,De=!!b.specularMap,xe=!!b.specularColorMap,Be=!!b.specularIntensityMap,I=ne&&!!b.transmissionMap,pe=ne&&!!b.thicknessMap,ce=!!b.gradientMap,ue=!!b.alphaMap,se=b.alphaTest>0,te=!!b.alphaHash,Se=!!b.extensions;let ze=Lr;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ze=t.toneMapping);const gt={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Ue,defines:b.defines,customVertexShaderID:Ve,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:ve,instancingColor:ve&&O.instanceColor!==null,instancingMorph:ve&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:No,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:tt,envMap:$e,envMapMode:$e&&K.mapping,envMapCubeUVHeight:N,aoMap:dt,lightMap:D,bumpMap:Ye,normalMap:Ke,displacementMap:d&&ht,emissiveMap:be,normalMapObjectSpace:Ke&&b.normalMapType===bP,normalMapTangentSpace:Ke&&b.normalMapType===MP,metalnessMap:St,roughnessMap:Re,anisotropy:Ge,anisotropyMap:q,clearcoat:P,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:w,iridescence:V,iridescenceMap:we,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:ae,sheenRoughnessMap:Oe,specularMap:De,specularColorMap:xe,specularIntensityMap:Be,transmission:ne,transmissionMap:I,thicknessMap:pe,gradientMap:ce,opaque:b.transparent===!1&&b.blending===mo&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:se,alphaHash:te,combine:b.combine,mapUv:Ee&&v(b.map.channel),aoMapUv:dt&&v(b.aoMap.channel),lightMapUv:D&&v(b.lightMap.channel),bumpMapUv:Ye&&v(b.bumpMap.channel),normalMapUv:Ke&&v(b.normalMap.channel),displacementMapUv:ht&&v(b.displacementMap.channel),emissiveMapUv:be&&v(b.emissiveMap.channel),metalnessMapUv:St&&v(b.metalnessMap.channel),roughnessMapUv:Re&&v(b.roughnessMap.channel),anisotropyMapUv:q&&v(b.anisotropyMap.channel),clearcoatMapUv:Ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(b.sheenRoughnessMap.channel),specularMapUv:De&&v(b.specularMap.channel),specularColorMapUv:xe&&v(b.specularColorMap.channel),specularIntensityMapUv:Be&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:pe&&v(b.thicknessMap.channel),alphaMapUv:ue&&v(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ke||Ge),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ee||ue),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:be&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Se&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&b.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function h(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=m[b.type];let L;if(M){const F=yi[M];L=JP.clone(F.uniforms)}else L=b.uniforms;return L}function T(b,M){let L;for(let F=0,O=u.length;F<O;F++){const U=u[F];if(U.cacheKey===M){L=U,++L.usedTimes;break}}return L===void 0&&(L=new E8(t,M,b,s),u.push(L)),L}function S(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:R}}function R8(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function P8(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,m,v,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=v,h.group=g),e++,h}function a(f,d,p,m,v,g){const h=o(f,d,p,m,v,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,m,v,g){const h=o(f,d,p,m,v,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||P8),i.length>1&&i.sort(d||rv),r.length>1&&r.sort(d||rv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function L8(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sv,t.set(i,[o])):r>=s.length?(o=new sv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function D8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new ut};break;case"SpotLight":n={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function I8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let N8=0;function F8(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function U8(t){const e=new D8,n=I8(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Vt,o=new Vt;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,v=0,g=0,h=0,y=0,x=0,_=0,T=0,S=0,A=0;c.sort(F8);for(let b=0,M=c.length;b<M;b++){const L=c[b],F=L.color,O=L.intensity,U=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*O,f+=F.g*O,d+=F.b*O;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],O);A++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(O),G.distance=U,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;const K=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,K.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[v]=K.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=H,_++}v++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(F).multiplyScalar(O),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=G,g++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const K=L.shadow,N=n.get(L);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=L.shadow.matrix,x++}i.point[m]=G,m++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(O),G.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[h]=G,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,R.directionalLength=p,R.pointLength=m,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=A,i.version=N8++)}function l(c,u){let f=0,d=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const x=c[h];if(x.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(x.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function ov(t){const e=new U8(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function O8(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ov(t),e.set(r,[a])):s>=o.length?(a=new ov(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const k8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B8=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z8(t,e,n){let i=new Y3;const r=new Je,s=new Je,o=new Nt,a=new uL({depthPacking:SP}),l=new fL,c={},u=n.maxTextureSize,f={[Ur]:bn,[bn]:Ur,[Oi]:Oi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:k8,fragmentShader:B8}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Vr;m.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tr(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A3;let h=this.type;this.render=function(S,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=h!==Ii&&this.type===Ii,U=h===Ii&&this.type!==Ii;for(let H=0,G=S.length;H<G;H++){const K=S[H],N=K.shadow;if(N===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();if(r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null||O===!0||U===!0){const ee=this.type!==Ii?{minFilter:In,magFilter:In}:{};N.map!==null&&N.map.dispose(),N.map=new bs(r.x,r.y,ee),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const j=N.getViewportCount();for(let ee=0;ee<j;ee++){const fe=N.getViewport(ee);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(o),N.updateMatrices(K,ee),i=N.getFrustum(),_(A,R,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===Ii&&y(N,R),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(b,M,L)};function y(S,A){const R=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bs(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,R,p,v,null)}function x(S,A,R,b){let M=null;const L=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=M.uuid,O=A.uuid;let U=c[F];U===void 0&&(U={},c[F]=U);let H=U[O];H===void 0&&(H=M.clone(),U[O]=H,A.addEventListener("dispose",T)),M=H}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Ii?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=R}return M}function _(S,A,R,b,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ii)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const O=e.update(S),U=S.material;if(Array.isArray(U)){const H=O.groups;for(let G=0,K=H.length;G<K;G++){const N=H[G],z=U[N.materialIndex];if(z&&z.visible){const j=x(S,z,b,M);S.onBeforeShadow(t,S,A,R,O,j,N),t.renderBufferDirect(R,null,O,j,S,N),S.onAfterShadow(t,S,A,R,O,j,N)}}}else if(U.visible){const H=x(S,U,b,M);S.onBeforeShadow(t,S,A,R,O,H,null),t.renderBufferDirect(R,null,O,H,S,null),S.onAfterShadow(t,S,A,R,O,H,null)}}const F=S.children;for(let O=0,U=F.length;O<U;O++)_(F[O],A,R,b,M)}function T(S){S.target.removeEventListener("dispose",T);for(const R in c){const b=c[R],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const V8={[jh]:Xh,[$h]:Kh,[Yh]:Zh,[Lo]:qh,[Xh]:jh,[Kh]:$h,[Zh]:Yh,[qh]:Lo};function G8(t,e){function n(){let I=!1;const pe=new Nt;let ce=null;const ue=new Nt(0,0,0,0);return{setMask:function(se){ce!==se&&!I&&(t.colorMask(se,se,se,se),ce=se)},setLocked:function(se){I=se},setClear:function(se,te,Se,ze,gt){gt===!0&&(se*=ze,te*=ze,Se*=ze),pe.set(se,te,Se,ze),ue.equals(pe)===!1&&(t.clearColor(se,te,Se,ze),ue.copy(pe))},reset:function(){I=!1,ce=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,pe=!1,ce=null,ue=null,se=null;return{setReversed:function(te){if(pe!==te){const Se=e.get("EXT_clip_control");te?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),pe=te;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return pe},setTest:function(te){te?Z(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(te){ce!==te&&!I&&(t.depthMask(te),ce=te)},setFunc:function(te){if(pe&&(te=V8[te]),ue!==te){switch(te){case jh:t.depthFunc(t.NEVER);break;case Xh:t.depthFunc(t.ALWAYS);break;case $h:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case Yh:t.depthFunc(t.EQUAL);break;case qh:t.depthFunc(t.GEQUAL);break;case Kh:t.depthFunc(t.GREATER);break;case Zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=te}},setLocked:function(te){I=te},setClear:function(te){se!==te&&(pe&&(te=1-te),t.clearDepth(te),se=te)},reset:function(){I=!1,ce=null,ue=null,se=null,pe=!1}}}function r(){let I=!1,pe=null,ce=null,ue=null,se=null,te=null,Se=null,ze=null,gt=null;return{setTest:function(at){I||(at?Z(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(at){pe!==at&&!I&&(t.stencilMask(at),pe=at)},setFunc:function(at,mi,Qn){(ce!==at||ue!==mi||se!==Qn)&&(t.stencilFunc(at,mi,Qn),ce=at,ue=mi,se=Qn)},setOp:function(at,mi,Qn){(te!==at||Se!==mi||ze!==Qn)&&(t.stencilOp(at,mi,Qn),te=at,Se=mi,ze=Qn)},setLocked:function(at){I=at},setClear:function(at){gt!==at&&(t.clearStencil(at),gt=at)},reset:function(){I=!1,pe=null,ce=null,ue=null,se=null,te=null,Se=null,ze=null,gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],m=null,v=!1,g=null,h=null,y=null,x=null,_=null,T=null,S=null,A=new ut(0,0,0),R=0,b=!1,M=null,L=null,F=null,O=null,U=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=K>=2);let z=null,j={};const ee=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),Ie=new Nt().fromArray(ee),Ue=new Nt().fromArray(fe);function Ve(I,pe,ce,ue){const se=new Uint8Array(4),te=t.createTexture();t.bindTexture(I,te),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ce;Se++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(pe+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return te}const Y={};Y[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(Lo),Ye(!1),Ke(d1),Z(t.CULL_FACE),dt(Xi);function Z(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function le(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function ve(I,pe){return f[I]!==pe?(t.bindFramebuffer(I,pe),f[I]=pe,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function ge(I,pe){let ce=p,ue=!1;if(I){ce=d.get(pe),ce===void 0&&(ce=[],d.set(pe,ce));const se=I.textures;if(ce.length!==se.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Se=se.length;te<Se;te++)ce[te]=t.COLOR_ATTACHMENT0+te;ce.length=se.length,ue=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ce)}function Ee(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const tt={[is]:t.FUNC_ADD,[$R]:t.FUNC_SUBTRACT,[YR]:t.FUNC_REVERSE_SUBTRACT};tt[qR]=t.MIN,tt[KR]=t.MAX;const $e={[ZR]:t.ZERO,[QR]:t.ONE,[JR]:t.SRC_COLOR,[Hh]:t.SRC_ALPHA,[sP]:t.SRC_ALPHA_SATURATE,[iP]:t.DST_COLOR,[tP]:t.DST_ALPHA,[eP]:t.ONE_MINUS_SRC_COLOR,[Wh]:t.ONE_MINUS_SRC_ALPHA,[rP]:t.ONE_MINUS_DST_COLOR,[nP]:t.ONE_MINUS_DST_ALPHA,[oP]:t.CONSTANT_COLOR,[aP]:t.ONE_MINUS_CONSTANT_COLOR,[lP]:t.CONSTANT_ALPHA,[cP]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(I,pe,ce,ue,se,te,Se,ze,gt,at){if(I===Xi){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(Z(t.BLEND),v=!0),I!==XR){if(I!==g||at!==b){if((h!==is||_!==is)&&(t.blendEquation(t.FUNC_ADD),h=is,_=is),at)switch(I){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case h1:t.blendFunc(t.ONE,t.ONE);break;case p1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case m1:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:It("WebGLState: Invalid blending: ",I);break}else switch(I){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case h1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case p1:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m1:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",I);break}y=null,x=null,T=null,S=null,A.set(0,0,0),R=0,g=I,b=at}return}se=se||pe,te=te||ce,Se=Se||ue,(pe!==h||se!==_)&&(t.blendEquationSeparate(tt[pe],tt[se]),h=pe,_=se),(ce!==y||ue!==x||te!==T||Se!==S)&&(t.blendFuncSeparate($e[ce],$e[ue],$e[te],$e[Se]),y=ce,x=ue,T=te,S=Se),(ze.equals(A)===!1||gt!==R)&&(t.blendColor(ze.r,ze.g,ze.b,gt),A.copy(ze),R=gt),g=I,b=!1}function D(I,pe){I.side===Oi?le(t.CULL_FACE):Z(t.CULL_FACE);let ce=I.side===bn;pe&&(ce=!ce),Ye(ce),I.blending===mo&&I.transparent===!1?dt(Xi):dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ue=I.stencilWrite;a.setTest(ue),ue&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function Ke(I){I!==HR?(Z(t.CULL_FACE),I!==L&&(I===d1?t.cullFace(t.BACK):I===WR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),L=I}function ht(I){I!==F&&(G&&t.lineWidth(I),F=I)}function be(I,pe,ce){I?(Z(t.POLYGON_OFFSET_FILL),(O!==pe||U!==ce)&&(t.polygonOffset(pe,ce),O=pe,U=ce)):le(t.POLYGON_OFFSET_FILL)}function St(I){I?Z(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function Re(I){I===void 0&&(I=t.TEXTURE0+H-1),z!==I&&(t.activeTexture(I),z=I)}function Ge(I,pe,ce){ce===void 0&&(z===null?ce=t.TEXTURE0+H-1:ce=z);let ue=j[ce];ue===void 0&&(ue={type:void 0,texture:void 0},j[ce]=ue),(ue.type!==I||ue.texture!==pe)&&(z!==ce&&(t.activeTexture(ce),z=ce),t.bindTexture(I,pe||Y[I]),ue.type=I,ue.texture=pe)}function P(){const I=j[z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function w(){try{t.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function J(){try{t.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ne(){try{t.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function he(){try{t.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Pe(){try{t.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function we(){try{t.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ie(){try{t.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ae(I){Ie.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function Oe(I){Ue.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ue.copy(I))}function De(I,pe){let ce=c.get(pe);ce===void 0&&(ce=new WeakMap,c.set(pe,ce));let ue=ce.get(I);ue===void 0&&(ue=t.getUniformBlockIndex(pe,I.name),ce.set(I,ue))}function xe(I,pe){const ue=c.get(pe).get(I);l.get(pe)!==ue&&(t.uniformBlockBinding(pe,ue,I.__bindingPointIndex),l.set(pe,ue))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},z=null,j={},f={},d=new WeakMap,p=[],m=null,v=!1,g=null,h=null,y=null,x=null,_=null,T=null,S=null,A=new ut(0,0,0),R=0,b=!1,M=null,L=null,F=null,O=null,U=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:le,bindFramebuffer:ve,drawBuffers:ge,useProgram:Ee,setBlending:dt,setMaterial:D,setFlipSided:Ye,setCullFace:Ke,setLineWidth:ht,setPolygonOffset:be,setScissorTest:St,activeTexture:Re,bindTexture:Ge,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:we,texImage3D:ie,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:ae,viewport:Oe,reset:Be}}function H8(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return p?new OffscreenCanvas(P,w):vu("canvas")}function v(P,w,V){let J=1;const ne=Ge(P);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(J*ne.width),Ae=Math.floor(J*ne.height);f===void 0&&(f=m(q,Ae));const he=w?m(q,Ae):f;return he.width=q,he.height=Ae,he.getContext("2d").drawImage(P,0,0,q,Ae),He("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+Ae+")."),he}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(P,w,V,J,ne=!1){if(P!==null){if(t[P]!==void 0)return t[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=w;if(w===t.RED&&(V===t.FLOAT&&(q=t.R32F),V===t.HALF_FLOAT&&(q=t.R16F),V===t.UNSIGNED_BYTE&&(q=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(q=t.R8UI),V===t.UNSIGNED_SHORT&&(q=t.R16UI),V===t.UNSIGNED_INT&&(q=t.R32UI),V===t.BYTE&&(q=t.R8I),V===t.SHORT&&(q=t.R16I),V===t.INT&&(q=t.R32I)),w===t.RG&&(V===t.FLOAT&&(q=t.RG32F),V===t.HALF_FLOAT&&(q=t.RG16F),V===t.UNSIGNED_BYTE&&(q=t.RG8)),w===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(q=t.RG8UI),V===t.UNSIGNED_SHORT&&(q=t.RG16UI),V===t.UNSIGNED_INT&&(q=t.RG32UI),V===t.BYTE&&(q=t.RG8I),V===t.SHORT&&(q=t.RG16I),V===t.INT&&(q=t.RG32I)),w===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(q=t.RGB8UI),V===t.UNSIGNED_SHORT&&(q=t.RGB16UI),V===t.UNSIGNED_INT&&(q=t.RGB32UI),V===t.BYTE&&(q=t.RGB8I),V===t.SHORT&&(q=t.RGB16I),V===t.INT&&(q=t.RGB32I)),w===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),V===t.UNSIGNED_INT&&(q=t.RGBA32UI),V===t.BYTE&&(q=t.RGBA8I),V===t.SHORT&&(q=t.RGBA16I),V===t.INT&&(q=t.RGBA32I)),w===t.RGB&&(V===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),w===t.RGBA){const Ae=ne?gu:it.getTransfer(J);V===t.FLOAT&&(q=t.RGBA32F),V===t.HALF_FLOAT&&(q=t.RGBA16F),V===t.UNSIGNED_BYTE&&(q=Ae===ct?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(P,w){let V;return P?w===null||w===Ms||w===Ka?V=t.DEPTH24_STENCIL8:w===Gi?V=t.DEPTH32F_STENCIL8:w===qa&&(V=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===Ka?V=t.DEPTH_COMPONENT24:w===Gi?V=t.DEPTH_COMPONENT32F:w===qa&&(V=t.DEPTH_COMPONENT16),V}function T(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){const w=P.target;w.removeEventListener("dispose",S),R(w),w.isVideoTexture&&u.delete(w)}function A(P){const w=P.target;w.removeEventListener("dispose",A),M(w)}function R(P){const w=i.get(P);if(w.__webglInit===void 0)return;const V=P.source,J=d.get(V);if(J){const ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(P),Object.keys(J).length===0&&d.delete(V)}i.remove(P)}function b(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const V=P.source,J=d.get(V);delete J[w.__cacheKey],o.memory.textures--}function M(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let J=0,ne=V.length;J<ne;J++){const q=i.get(V[J]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(P)}let L=0;function F(){L=0}function O(){const P=L;return P>=r.maxTextures&&He("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function H(P,w){const V=i.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const J=P.image;if(J===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,P,w);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function G(P,w){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Y(V,P,w);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function K(P,w){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Y(V,P,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function N(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const z={[ep]:t.REPEAT,[Vi]:t.CLAMP_TO_EDGE,[tp]:t.MIRRORED_REPEAT},j={[In]:t.NEAREST,[yP]:t.NEAREST_MIPMAP_NEAREST,[Vl]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[Zf]:t.LINEAR_MIPMAP_NEAREST,[us]:t.LINEAR_MIPMAP_LINEAR},ee={[EP]:t.NEVER,[PP]:t.ALWAYS,[wP]:t.LESS,[O3]:t.LEQUAL,[TP]:t.EQUAL,[RP]:t.GEQUAL,[AP]:t.GREATER,[CP]:t.NOTEQUAL};function fe(P,w){if(w.type===Gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===$n||w.magFilter===Zf||w.magFilter===Vl||w.magFilter===us||w.minFilter===$n||w.minFilter===Zf||w.minFilter===Vl||w.minFilter===us)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,z[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,z[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,z[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,j[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==Vl&&w.minFilter!==us||w.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));const J=w.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const q=U(w);if(q!==P.__cacheKey){ne[q]===void 0&&(ne[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[q].usedTimes++;const Ae=ne[P.__cacheKey];Ae!==void 0&&(ne[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(w)),P.__cacheKey=q,P.__webglTexture=ne[q].texture}return V}function Ue(P,w,V){return Math.floor(Math.floor(P/V)/w)}function Ve(P,w,V,J){const q=P.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,V,J,w.data);else{q.sort((ie,ae)=>ie.start-ae.start);let Ae=0;for(let ie=1;ie<q.length;ie++){const ae=q[Ae],Oe=q[ie],De=ae.start+ae.count,xe=Ue(Oe.start,w.width,4),Be=Ue(ae.start,w.width,4);Oe.start<=De+1&&xe===Be&&Ue(Oe.start+Oe.count-1,w.width,4)===xe?ae.count=Math.max(ae.count,Oe.start+Oe.count-ae.start):(++Ae,q[Ae]=Oe)}q.length=Ae+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),we=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let ie=0,ae=q.length;ie<ae;ie++){const Oe=q[ie],De=Math.floor(Oe.start/4),xe=Math.ceil(Oe.count/4),Be=De%w.width,I=Math.floor(De/w.width),pe=xe,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Be,I,pe,ce,V,J,w.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,we)}}function Y(P,w,V){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Ie(P,w),q=w.source;n.bindTexture(J,P.__webglTexture,t.TEXTURE0+V);const Ae=i.get(q);if(q.version!==Ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const he=it.getPrimaries(it.workingColorSpace),Pe=w.colorSpace===xr?null:it.getPrimaries(w.colorSpace),we=w.colorSpace===xr||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=v(w.image,!1,r.maxTextureSize);ie=Re(w,ie);const ae=s.convert(w.format,w.colorSpace),Oe=s.convert(w.type);let De=x(w.internalFormat,ae,Oe,w.colorSpace,w.isVideoTexture);fe(J,w);let xe;const Be=w.mipmaps,I=w.isVideoTexture!==!0,pe=Ae.__version===void 0||ne===!0,ce=q.dataReady,ue=T(w,ie);if(w.isDepthTexture)De=_(w.format===Qa,w.type),pe&&(I?n.texStorage2D(t.TEXTURE_2D,1,De,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Oe,null));else if(w.isDataTexture)if(Be.length>0){I&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,De,Be[0].width,Be[0].height);for(let se=0,te=Be.length;se<te;se++)xe=Be[se],I?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,ae,Oe,xe.data):n.texImage2D(t.TEXTURE_2D,se,De,xe.width,xe.height,0,ae,Oe,xe.data);w.generateMipmaps=!1}else I?(pe&&n.texStorage2D(t.TEXTURE_2D,ue,De,ie.width,ie.height),ce&&Ve(w,ie,ae,Oe)):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Oe,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){I&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,Be[0].width,Be[0].height,ie.depth);for(let se=0,te=Be.length;se<te;se++)if(xe=Be[se],w.format!==ci)if(ae!==null)if(I){if(ce)if(w.layerUpdates.size>0){const Se=O1(xe.width,xe.height,w.format,w.type);for(const ze of w.layerUpdates){const gt=xe.data.subarray(ze*Se/xe.data.BYTES_PER_ELEMENT,(ze+1)*Se/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,ze,xe.width,xe.height,1,ae,gt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ie.depth,ae,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,De,xe.width,xe.height,ie.depth,0,xe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ie.depth,ae,Oe,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,De,xe.width,xe.height,ie.depth,0,ae,Oe,xe.data)}else{I&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,De,Be[0].width,Be[0].height);for(let se=0,te=Be.length;se<te;se++)xe=Be[se],w.format!==ci?ae!==null?I?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,ae,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,se,De,xe.width,xe.height,0,xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,ae,Oe,xe.data):n.texImage2D(t.TEXTURE_2D,se,De,xe.width,xe.height,0,ae,Oe,xe.data)}else if(w.isDataArrayTexture)if(I){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,De,ie.width,ie.height,ie.depth),ce)if(w.layerUpdates.size>0){const se=O1(ie.width,ie.height,w.format,w.type);for(const te of w.layerUpdates){const Se=ie.data.subarray(te*se/ie.data.BYTES_PER_ELEMENT,(te+1)*se/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,ae,Oe,Se)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Oe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ae,Oe,ie.data);else if(w.isData3DTexture)I?(pe&&n.texStorage3D(t.TEXTURE_3D,ue,De,ie.width,ie.height,ie.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Oe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ae,Oe,ie.data);else if(w.isFramebufferTexture){if(pe)if(I)n.texStorage2D(t.TEXTURE_2D,ue,De,ie.width,ie.height);else{let se=ie.width,te=ie.height;for(let Se=0;Se<ue;Se++)n.texImage2D(t.TEXTURE_2D,Se,De,se,te,0,ae,Oe,null),se>>=1,te>>=1}}else if(Be.length>0){if(I&&pe){const se=Ge(Be[0]);n.texStorage2D(t.TEXTURE_2D,ue,De,se.width,se.height)}for(let se=0,te=Be.length;se<te;se++)xe=Be[se],I?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ae,Oe,xe):n.texImage2D(t.TEXTURE_2D,se,De,ae,Oe,xe);w.generateMipmaps=!1}else if(I){if(pe){const se=Ge(ie);n.texStorage2D(t.TEXTURE_2D,ue,De,se.width,se.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Oe,ie)}else n.texImage2D(t.TEXTURE_2D,0,De,ae,Oe,ie);g(w)&&h(J),Ae.__version=q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Z(P,w,V){if(w.image.length!==6)return;const J=Ie(P,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+V);const q=i.get(ne);if(ne.version!==q.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const Ae=it.getPrimaries(it.workingColorSpace),he=w.colorSpace===xr?null:it.getPrimaries(w.colorSpace),Pe=w.colorSpace===xr||Ae===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let te=0;te<6;te++)!we&&!ie?ae[te]=v(w.image[te],!0,r.maxCubemapSize):ae[te]=ie?w.image[te].image:w.image[te],ae[te]=Re(w,ae[te]);const Oe=ae[0],De=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Be=x(w.internalFormat,De,xe,w.colorSpace),I=w.isVideoTexture!==!0,pe=q.__version===void 0||J===!0,ce=ne.dataReady;let ue=T(w,Oe);fe(t.TEXTURE_CUBE_MAP,w);let se;if(we){I&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Be,Oe.width,Oe.height);for(let te=0;te<6;te++){se=ae[te].mipmaps;for(let Se=0;Se<se.length;Se++){const ze=se[Se];w.format!==ci?De!==null?I?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,ze.width,ze.height,De,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Be,ze.width,ze.height,0,ze.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,ze.width,ze.height,De,xe,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Be,ze.width,ze.height,0,De,xe,ze.data)}}}else{if(se=w.mipmaps,I&&pe){se.length>0&&ue++;const te=Ge(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Be,te.width,te.height)}for(let te=0;te<6;te++)if(ie){I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ae[te].width,ae[te].height,De,xe,ae[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ae[te].width,ae[te].height,0,De,xe,ae[te].data);for(let Se=0;Se<se.length;Se++){const gt=se[Se].image[te].image;I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,gt.width,gt.height,De,xe,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Be,gt.width,gt.height,0,De,xe,gt.data)}}else{I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,xe,ae[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,De,xe,ae[te]);for(let Se=0;Se<se.length;Se++){const ze=se[Se];I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,De,xe,ze.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Be,De,xe,ze.image[te])}}}g(w)&&h(t.TEXTURE_CUBE_MAP),q.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function le(P,w,V,J,ne,q){const Ae=s.convert(V.format,V.colorSpace),he=s.convert(V.type),Pe=x(V.internalFormat,Ae,he,V.colorSpace),we=i.get(w),ie=i.get(V);if(ie.__renderTarget=w,!we.__hasExternalTextures){const ae=Math.max(1,w.width>>q),Oe=Math.max(1,w.height>>q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,q,Pe,ae,Oe,w.depth,0,Ae,he,null):n.texImage2D(ne,q,Pe,ae,Oe,0,Ae,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,ie.__webglTexture,0,ht(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,ie.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(P,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,q=_(w.stencilBuffer,ne),Ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=ht(w);be(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,q,w.width,w.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,P)}else{const J=w.textures;for(let ne=0;ne<J.length;ne++){const q=J[ne],Ae=s.convert(q.format,q.colorSpace),he=s.convert(q.type),Pe=x(q.internalFormat,Ae,he,q.colorSpace),we=ht(w);V&&be(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,Pe,w.width,w.height):be(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,Pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const ne=J.__webglTexture,q=ht(w);if(w.depthTexture.format===Za)be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Qa)be(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const w=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=P.texture.mipmaps;J&&J.length>0?ge(w.__webglFramebuffer[0],P):ge(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),ve(w.__webglDepthbuffer[J],P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,q)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ve(w.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(P,w,V){const J=i.get(P);w!==void 0&&le(J.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ee(P)}function $e(P){const w=P.texture,V=i.get(P),J=i.get(w);P.addEventListener("dispose",A);const ne=P.textures,q=P.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)V.__webglFramebuffer[he][Pe]=t.createFramebuffer()}else V.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[he]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let he=0,Pe=ne.length;he<Pe;he++){const we=i.get(ne[he]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&be(P)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Pe=ne[he];V.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const we=s.convert(Pe.format,Pe.colorSpace),ie=s.convert(Pe.type),ae=x(Pe.internalFormat,we,ie,Pe.colorSpace,P.isXRRenderTarget===!0),Oe=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ae,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,V.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(V.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),fe(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le(V.__webglFramebuffer[he][Pe],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else le(V.__webglFramebuffer[he],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let he=0,Pe=ne.length;he<Pe;he++){const we=ne[he],ie=i.get(we);let ae=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ie.__webglTexture),fe(ae,we),le(V.__webglFramebuffer,P,we,t.COLOR_ATTACHMENT0+he,ae,0),g(we)&&h(ae)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,J.__webglTexture),fe(he,w),w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le(V.__webglFramebuffer[Pe],P,w,t.COLOR_ATTACHMENT0,he,Pe);else le(V.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&h(he),n.unbindTexture()}P.depthBuffer&&Ee(P)}function dt(P){const w=P.textures;for(let V=0,J=w.length;V<J;V++){const ne=w[V];if(g(ne)){const q=y(P),Ae=i.get(ne).__webglTexture;n.bindTexture(q,Ae),h(q),n.unbindTexture()}}}const D=[],Ye=[];function Ke(P){if(P.samples>0){if(be(P)===!1){const w=P.textures,V=P.width,J=P.height;let ne=t.COLOR_BUFFER_BIT;const q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(P),he=w.length>1;if(he)for(let we=0;we<w.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<w.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=i.get(w[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,V,J,0,0,V,J,ne,t.NEAREST),l===!0&&(D.length=0,Ye.length=0,D.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(q),Ye.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<w.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=i.get(w[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function be(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function St(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Re(P,w){const V=P.colorSpace,J=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==No&&V!==xr&&(it.getTransfer(V)===ct?(J!==ci||ne!==Ji)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",V)),w}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=tt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=le,this.useMultisampledRTT=be}function W8(t,e){function n(i,r=xr){let s;const o=it.getTransfer(r);if(i===Ji)return t.UNSIGNED_BYTE;if(i===nm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===im)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D3)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I3)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===P3)return t.BYTE;if(i===L3)return t.SHORT;if(i===qa)return t.UNSIGNED_SHORT;if(i===tm)return t.INT;if(i===Ms)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===zo)return t.HALF_FLOAT;if(i===N3)return t.ALPHA;if(i===F3)return t.RGB;if(i===ci)return t.RGBA;if(i===Za)return t.DEPTH_COMPONENT;if(i===Qa)return t.DEPTH_STENCIL;if(i===U3)return t.RED;if(i===rm)return t.RED_INTEGER;if(i===sm)return t.RG;if(i===om)return t.RG_INTEGER;if(i===am)return t.RGBA_INTEGER;if(i===Ac||i===Cc||i===Rc||i===Pc)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===np||i===ip||i===rp||i===sp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===np)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ip)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===op||i===ap||i===lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===op||i===ap)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===xp||i===vp||i===yp||i===_p||i===Sp||i===Mp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===up)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_p)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bp||i===Ep||i===wp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bp)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tp||i===Ap||i===Cp||i===Rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const j8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X8=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new K3(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:j8,fragmentShader:X8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tr(new pl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y8 extends Vo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",g=new $8,h={},y=n.getContextAttributes();let x=null,_=null;const T=[],S=[],A=new Je;let R=null;const b=new oi;b.viewport=new Nt;const M=new oi;M.viewport=new Nt;const L=[b,M],F=new dL;let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=T[Y];return Z===void 0&&(Z=new _d,T[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=T[Y];return Z===void 0&&(Z=new _d,T[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=T[Y];return Z===void 0&&(Z=new _d,T[Y]=Z),Z.getHandSpace()};function H(Y){const Z=S.indexOf(Y.inputSource);if(Z===-1)return;const le=T[Z];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){const Z=S[Y];Z!==null&&(S[Y]=null,T[Y].disconnect(Z))}O=null,U=null,g.reset();for(const Y in h)delete h[Y];e.setRenderTarget(x),p=null,d=null,f=null,r=null,_=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ve=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=y.stencil?Qa:Za,ve=y.stencil?Ka:Ms);const Ee={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new bs(d.textureWidth,d.textureHeight,{format:ci,type:Ji,depthTexture:new q3(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bs(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let Z=0;Z<Y.removed.length;Z++){const le=Y.removed[Z],ve=S.indexOf(le);ve>=0&&(S[ve]=null,T[ve].disconnect(le))}for(let Z=0;Z<Y.added.length;Z++){const le=Y.added[Z];let ve=S.indexOf(le);if(ve===-1){for(let Ee=0;Ee<T.length;Ee++)if(Ee>=S.length){S.push(le),ve=Ee;break}else if(S[Ee]===null){S[Ee]=le,ve=Ee;break}if(ve===-1)break}const ge=T[ve];ge&&ge.connect(le)}}const N=new $,z=new $;function j(Y,Z,le){N.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const ve=N.distanceTo(z),ge=Z.projectionMatrix.elements,Ee=le.projectionMatrix.elements,tt=ge[14]/(ge[10]-1),$e=ge[14]/(ge[10]+1),dt=(ge[9]+1)/ge[5],D=(ge[9]-1)/ge[5],Ye=(ge[8]-1)/ge[0],Ke=(Ee[8]+1)/Ee[0],ht=tt*Ye,be=tt*Ke,St=ve/(-Ye+Ke),Re=St*-Ye;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ge=tt+St,P=$e+St,w=ht-Re,V=be+(ve-Re),J=dt*$e/P*Ge,ne=D*$e/P*Ge;Y.projectionMatrix.makePerspective(w,V,J,ne,Ge,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,le=Y.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(le=g.depthFar)),F.near=M.near=b.near=Z,F.far=M.far=b.far=le,(O!==F.near||U!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,U=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const ve=Y.parent,ge=F.cameras;ee(F,ve);for(let Ee=0;Ee<ge.length;Ee++)ee(ge[Ee],ve);ge.length===2?j(F,b,M):F.projectionMatrix.copy(b.projectionMatrix),fe(Y,F,ve)};function fe(Y,Z,le){le===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return h[Y]};let Ie=null;function Ue(Y,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ve=!1;le.length!==F.cameras.length&&(F.cameras.length=0,ve=!0);for(let $e=0;$e<le.length;$e++){const dt=le[$e];let D=null;if(p!==null)D=p.getViewport(dt);else{const Ke=f.getViewSubImage(d,dt);D=Ke.viewport,$e===0&&(e.setRenderTargetTextures(_,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(_))}let Ye=L[$e];Ye===void 0&&(Ye=new oi,Ye.layers.enable($e),Ye.viewport=new Nt,L[$e]=Ye),Ye.matrix.fromArray(dt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(dt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(D.x,D.y,D.width,D.height),$e===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ve===!0&&F.cameras.push(Ye)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const $e=f.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&g.init($e,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let $e=0;$e<le.length;$e++){const dt=le[$e].camera;if(dt){let D=h[dt];D||(D=new K3,h[dt]=D);const Ye=f.getCameraImage(dt);D.sourceTexture=Ye}}}}for(let le=0;le<T.length;le++){const ve=S[le],ge=T[le];ve!==null&&ge!==void 0&&ge.update(ve,Z,c||o)}Ie&&Ie(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Ve=new Q3;Ve.setAnimationLoop(Ue),this.setAnimationLoop=function(Y){Ie=Y},this.dispose=function(){}}}const Kr=new er,q8=new Vt;function K8(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,j3(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,y,x,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,_)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,y,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===bn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===bn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const y=e.get(h),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Kr.copy(_),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4(q8.makeRotationFromEuler(Kr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z8(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(m(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(y,T);const S=e.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function u(y){const x=f();y.__bindingPointIndex=x;const _=t.createBuffer(),T=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,_),_}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],_=y.uniforms,T=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let S=0,A=_.length;S<A;S++){const R=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,M=R.length;b<M;b++){const L=R[b];if(p(L,S,b,T)===!0){const F=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let H=0;H<O.length;H++){const G=O[H],K=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+U,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,x,_,T){const S=y.value,A=x+"_"+_;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const R=T[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return T[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function m(y){const x=y.uniforms;let _=0;const T=16;for(let A=0,R=x.length;A<R;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,L=b.length;M<L;M++){const F=b[M],O=Array.isArray(F.value)?F.value:[F.value];for(let U=0,H=O.length;U<H;U++){const G=O[U],K=v(G),N=_%T,z=N%K.boundary,j=N+z;_+=z,j!==0&&T-j<K.storage&&(_+=T-j),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=K.storage}}}const S=_%T;return S>0&&(_+=T-S),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const Q8=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Di=null;function J8(){return Di===null&&(Di=new oL(Q8,32,32,sm,zo),Di.minFilter=$n,Di.magFilter=$n,Di.wrapS=Vi,Di.wrapT=Vi,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class eI{constructor(e={}){const{canvas:n=LP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Set([am,om,rm]),v=new Set([Ji,Ms,qa,Ka,nm,im]),g=new Uint32Array(4),h=new Int32Array(4);let y=null,x=null;const _=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Hn;let R=0,b=0,M=null,L=-1,F=null;const O=new Nt,U=new Nt;let H=null;const G=new ut(0);let K=0,N=n.width,z=n.height,j=1,ee=null,fe=null;const Ie=new Nt(0,0,N,z),Ue=new Nt(0,0,N,z);let Ve=!1;const Y=new Y3;let Z=!1,le=!1;const ve=new Vt,ge=new $,Ee=new Nt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function dt(){return M===null?j:1}let D=i;function Ye(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${em}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",Se,!1),D===null){const k="webgl2";if(D=Ye(k,C),D===null)throw Ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Ke,ht,be,St,Re,Ge,P,w,V,J,ne,q,Ae,he,Pe,we,ie,ae,Oe,De,xe,Be,I,pe;function ce(){Ke=new l9(D),Ke.init(),Be=new W8(D,Ke),ht=new J6(D,Ke,e,Be),be=new G8(D,Ke),ht.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),St=new f9(D),Re=new R8,Ge=new H8(D,Ke,be,Re,ht,Be,St),P=new t9(S),w=new a9(S),V=new mL(D),I=new Z6(D,V),J=new c9(D,V,St,I),ne=new h9(D,J,V,St),Oe=new d9(D,ht,Ge),we=new e9(Re),q=new C8(S,P,w,Ke,ht,I,we),Ae=new K8(S,Re),he=new L8,Pe=new O8(Ke),ae=new K6(S,P,w,be,ne,p,l),ie=new z8(S,ne,ht),pe=new Z8(D,St,ht,be),De=new Q6(D,Ke,St),xe=new u9(D,Ke,St),St.programs=q.programs,S.capabilities=ht,S.extensions=Ke,S.properties=Re,S.renderLists=he,S.shadowMap=ie,S.state=be,S.info=St}ce();const ue=new Y8(S,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(N,z,!1))},this.getSize=function(C){return C.set(N,z)},this.setSize=function(C,k,W=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,z=k,n.width=Math.floor(C*j),n.height=Math.floor(k*j),W===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(N*j,z*j).floor()},this.setDrawingBufferSize=function(C,k,W){N=C,z=k,j=W,n.width=Math.floor(C*W),n.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Ie)},this.setViewport=function(C,k,W,X){C.isVector4?Ie.set(C.x,C.y,C.z,C.w):Ie.set(C,k,W,X),be.viewport(O.copy(Ie).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,k,W,X){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,k,W,X),be.scissor(U.copy(Ue).multiplyScalar(j).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){be.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,W=!0){let X=0;if(C){let B=!1;if(M!==null){const oe=M.texture.format;B=m.has(oe)}if(B){const oe=M.texture.type,me=v.has(oe),Me=ae.getClearColor(),_e=ae.getClearAlpha(),Ne=Me.r,ke=Me.g,Ce=Me.b;me?(g[0]=Ne,g[1]=ke,g[2]=Ce,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(h[0]=Ne,h[1]=ke,h[2]=Ce,h[3]=_e,D.clearBufferiv(D.COLOR,0,h))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),ae.dispose(),he.dispose(),Pe.dispose(),Re.dispose(),P.dispose(),w.dispose(),ne.dispose(),I.dispose(),pe.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",um),ue.removeEventListener("sessionend",fm),Gr.stop()};function se(C){C.preventDefault(),_1("WebGLRenderer: Context Lost."),A=!0}function te(){_1("WebGLRenderer: Context Restored."),A=!1;const C=St.autoReset,k=ie.enabled,W=ie.autoUpdate,X=ie.needsUpdate,B=ie.type;ce(),St.autoReset=C,ie.enabled=k,ie.autoUpdate=W,ie.needsUpdate=X,ie.type=B}function Se(C){It("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const k=C.target;k.removeEventListener("dispose",ze),gt(k)}function gt(C){at(C),Re.remove(C)}function at(C){const k=Re.get(C).programs;k!==void 0&&(k.forEach(function(W){q.releaseProgram(W)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,X,B,oe){k===null&&(k=tt);const me=B.isMesh&&B.matrixWorld.determinant()<0,Me=rS(C,k,W,X,B);be.setMaterial(X,me);let _e=W.index,Ne=1;if(X.wireframe===!0){if(_e=J.getWireframeAttribute(W),_e===void 0)return;Ne=2}const ke=W.drawRange,Ce=W.attributes.position;let Ze=ke.start*Ne,lt=(ke.start+ke.count)*Ne;oe!==null&&(Ze=Math.max(Ze,oe.start*Ne),lt=Math.min(lt,(oe.start+oe.count)*Ne)),_e!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,_e.count)):Ce!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Ce.count));const Ct=lt-Ze;if(Ct<0||Ct===1/0)return;I.setup(B,X,Me,W,_e);let Rt,ft=De;if(_e!==null&&(Rt=V.get(_e),ft=xe,ft.setIndex(Rt)),B.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*dt()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(B.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*dt()),B.isLineSegments?ft.setMode(D.LINES):B.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else B.isPoints?ft.setMode(D.POINTS):B.isSprite&&ft.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Le=B._multiDrawStarts,Mt=B._multiDrawCounts,nt=B._multiDrawCount,wn=_e?V.get(_e).bytesPerElement:1,Cs=Re.get(X).currentProgram.getUniforms();for(let Tn=0;Tn<nt;Tn++)Cs.setValue(D,"_gl_DrawID",Tn),ft.render(Le[Tn]/wn,Mt[Tn])}else if(B.isInstancedMesh)ft.renderInstances(Ze,Ct,B.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,Le);ft.renderInstances(Ze,Ct,Mt)}else ft.render(Ze,Ct)};function mi(C,k,W){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,gl(C,k,W),C.side=Ur,C.needsUpdate=!0,gl(C,k,W),C.side=Oi):gl(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),x=Pe.get(W),x.init(k),T.push(x),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(x.pushLight(B),B.castShadow&&x.pushShadow(B))}),x.setupLights();const X=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Me=oe[me];mi(Me,W,B),X.add(Me)}else mi(oe,W,B),X.add(oe)}),x=T.pop(),X},this.compileAsync=function(C,k,W=null){const X=this.compile(C,k,W);return new Promise(B=>{function oe(){if(X.forEach(function(me){Re.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){B(C);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Qn=null;function iS(C){Qn&&Qn(C)}function um(){Gr.stop()}function fm(){Gr.start()}const Gr=new Q3;Gr.setAnimationLoop(iS),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(C){Qn=C,ue.setAnimationLoop(C),C===null?Gr.stop():Gr.start()},ue.addEventListener("sessionstart",um),ue.addEventListener("sessionend",fm),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,k,M),x=Pe.get(C,T.length),x.init(k),T.push(x),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(ve,Si,k.reversedDepth),le=this.localClippingEnabled,Z=we.init(this.clippingPlanes,le),y=he.get(C,_.length),y.init(),_.push(y),ue.enabled===!0&&ue.isPresenting===!0){const oe=S.xr.getDepthSensingMesh();oe!==null&&ef(oe,k,-1/0,S.sortObjects)}ef(C,k,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(ee,fe),$e=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,$e&&ae.addToRenderList(y,C),this.info.render.frame++,Z===!0&&we.beginShadows();const W=x.state.shadowsArray;ie.render(W,C,k),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=y.opaque,B=y.transmissive;if(x.setupLights(),k.isArrayCamera){const oe=k.cameras;if(B.length>0)for(let me=0,Me=oe.length;me<Me;me++){const _e=oe[me];hm(X,B,C,_e)}$e&&ae.render(C);for(let me=0,Me=oe.length;me<Me;me++){const _e=oe[me];dm(y,C,_e,_e.viewport)}}else B.length>0&&hm(X,B,C,k),$e&&ae.render(C),dm(y,C,k);M!==null&&b===0&&(Ge.updateMultisampleRenderTarget(M),Ge.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(S,C,k),I.resetDefaultState(),L=-1,F=null,T.pop(),T.length>0?(x=T[T.length-1],Z===!0&&we.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?y=_[_.length-1]:y=null};function ef(C,k,W,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){X&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const me=ne.update(C),Me=C.material;Me.visible&&y.push(C,me,Me,W,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const me=ne.update(C),Me=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ee.copy(me.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){const _e=me.groups;for(let Ne=0,ke=_e.length;Ne<ke;Ne++){const Ce=_e[Ne],Ze=Me[Ce.materialIndex];Ze&&Ze.visible&&y.push(C,me,Ze,W,Ee.z,Ce)}}else Me.visible&&y.push(C,me,Me,W,Ee.z,null)}}const oe=C.children;for(let me=0,Me=oe.length;me<Me;me++)ef(oe[me],k,W,X)}function dm(C,k,W,X){const{opaque:B,transmissive:oe,transparent:me}=C;x.setupLightsView(W),Z===!0&&we.setGlobalState(S.clippingPlanes,W),X&&be.viewport(O.copy(X)),B.length>0&&ml(B,k,W),oe.length>0&&ml(oe,k,W),me.length>0&&ml(me,k,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function hm(C,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[X.id]===void 0&&(x.state.transmissionRenderTarget[X.id]=new bs(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?zo:Ji,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const oe=x.state.transmissionRenderTarget[X.id],me=X.viewport||O;oe.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const Me=S.getRenderTarget(),_e=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor(G),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),$e&&ae.render(W);const ke=S.toneMapping;S.toneMapping=Lr;const Ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),Z===!0&&we.setGlobalState(S.clippingPlanes,X),ml(C,W,X),Ge.updateMultisampleRenderTarget(oe),Ge.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,Ct=k.length;lt<Ct;lt++){const Rt=k[lt],{object:ft,geometry:Le,material:Mt,group:nt}=Rt;if(Mt.side===Oi&&ft.layers.test(X.layers)){const wn=Mt.side;Mt.side=bn,Mt.needsUpdate=!0,pm(ft,W,X,Le,Mt,nt),Mt.side=wn,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(oe),Ge.updateRenderTargetMipmap(oe))}S.setRenderTarget(Me,_e,Ne),S.setClearColor(G,K),Ce!==void 0&&(X.viewport=Ce),S.toneMapping=ke}function ml(C,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,oe=C.length;B<oe;B++){const me=C[B],{object:Me,geometry:_e,group:Ne}=me;let ke=me.material;ke.allowOverride===!0&&X!==null&&(ke=X),Me.layers.test(W.layers)&&pm(Me,k,W,_e,ke,Ne)}}function pm(C,k,W,X,B,oe){C.onBeforeRender(S,k,W,X,B,oe),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(S,k,W,X,C,oe),B.transparent===!0&&B.side===Oi&&B.forceSinglePass===!1?(B.side=bn,B.needsUpdate=!0,S.renderBufferDirect(W,k,X,B,C,oe),B.side=Ur,B.needsUpdate=!0,S.renderBufferDirect(W,k,X,B,C,oe),B.side=Oi):S.renderBufferDirect(W,k,X,B,C,oe),C.onAfterRender(S,k,W,X,B,oe)}function gl(C,k,W){k.isScene!==!0&&(k=tt);const X=Re.get(C),B=x.state.lights,oe=x.state.shadowsArray,me=B.state.version,Me=q.getParameters(C,B.state,oe,k,W),_e=q.getProgramCacheKey(Me);let Ne=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?w:P).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ne===void 0&&(C.addEventListener("dispose",ze),Ne=new Map,X.programs=Ne);let ke=Ne.get(_e);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===me)return gm(C,Me),ke}else Me.uniforms=q.getUniforms(C),C.onBeforeCompile(Me,S),ke=q.acquireProgram(Me,_e),Ne.set(_e,ke),X.uniforms=Me.uniforms;const Ce=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=we.uniform),gm(C,Me),X.needsLights=oS(C),X.lightsStateVersion=me,X.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function mm(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Lc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function gm(C,k){const W=Re.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function rS(C,k,W,X,B){k.isScene!==!0&&(k=tt),Ge.resetTextureUnits();const oe=k.fog,me=X.isMeshStandardMaterial?k.environment:null,Me=M===null?S.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:No,_e=(X.isMeshStandardMaterial?w:P).get(X.envMap||me),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,lt=!!W.morphAttributes.color;let Ct=Lr;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ct=S.toneMapping);const Rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=Rt!==void 0?Rt.length:0,Le=Re.get(X),Mt=x.state.lights;if(Z===!0&&(le===!0||C!==F)){const sn=C===F&&X.id===L;we.setState(X,C,sn)}let nt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mt.state.version||Le.outputColorSpace!==Me||B.isBatchedMesh&&Le.batching===!1||!B.isBatchedMesh&&Le.batching===!0||B.isBatchedMesh&&Le.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Le.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Le.instancing===!1||!B.isInstancedMesh&&Le.instancing===!0||B.isSkinnedMesh&&Le.skinning===!1||!B.isSkinnedMesh&&Le.skinning===!0||B.isInstancedMesh&&Le.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Le.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Le.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Le.instancingMorph===!1&&B.morphTexture!==null||Le.envMap!==_e||X.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==we.numPlanes||Le.numIntersection!==we.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==ke||Le.morphTargets!==Ce||Le.morphNormals!==Ze||Le.morphColors!==lt||Le.toneMapping!==Ct||Le.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Le.__version=X.version);let wn=Le.currentProgram;nt===!0&&(wn=gl(X,k,B));let Cs=!1,Tn=!1,Ho=!1;const bt=wn.getUniforms(),pn=Le.uniforms;if(be.useProgram(wn.program)&&(Cs=!0,Tn=!0,Ho=!0),X.id!==L&&(L=X.id,Tn=!0),Cs||F!==C){be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(D,"projectionMatrix",C.projectionMatrix),bt.setValue(D,"viewMatrix",C.matrixWorldInverse);const mn=bt.map.cameraPosition;mn!==void 0&&mn.setValue(D,ge.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Tn=!0,Ho=!0)}if(B.isSkinnedMesh){bt.setOptional(D,B,"bindMatrix"),bt.setOptional(D,B,"bindMatrixInverse");const sn=B.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),bt.setValue(D,"boneTexture",sn.boneTexture,Ge))}B.isBatchedMesh&&(bt.setOptional(D,B,"batchingTexture"),bt.setValue(D,"batchingTexture",B._matricesTexture,Ge),bt.setOptional(D,B,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",B._indirectTexture,Ge),bt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",B._colorsTexture,Ge));const Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Oe.update(B,W,wn),(Tn||Le.receiveShadow!==B.receiveShadow)&&(Le.receiveShadow=B.receiveShadow,bt.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pn.envMap.value=_e,pn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(pn.envMapIntensity.value=k.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=J8()),Tn&&(bt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&sS(pn,Ho),oe&&X.fog===!0&&Ae.refreshFogUniforms(pn,oe),Ae.refreshMaterialUniforms(pn,X,j,z,x.state.transmissionRenderTarget[C.id]),Lc.upload(D,mm(Le),pn,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lc.upload(D,mm(Le),pn,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(D,"center",B.center),bt.setValue(D,"modelViewMatrix",B.modelViewMatrix),bt.setValue(D,"normalMatrix",B.normalMatrix),bt.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const sn=X.uniformsGroups;for(let mn=0,tf=sn.length;mn<tf;mn++){const Hr=sn[mn];pe.update(Hr,wn),pe.bind(Hr,wn)}}return wn}function sS(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function oS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,W){const X=Re.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Re.get(C.texture).__webglTexture=k,Re.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const W=Re.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const aS=D.createFramebuffer();this.setRenderTarget=function(C,k=0,W=0){M=C,R=k,b=W;let X=!0,B=null,oe=!1,me=!1;if(C){const _e=Re.get(C);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(_e.__webglFramebuffer===void 0)Ge.setupRenderTarget(C);else if(_e.__hasExternalTextures)Ge.rebindTextures(C,Re.get(C.texture).__webglTexture,Re.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ce=C.depthTexture;if(_e.__boundDepthTexture!==Ce){if(Ce!==null&&Re.has(Ce)&&(C.width!==Ce.image.width||C.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(C)}}const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const ke=Re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?B=ke[k][W]:B=ke[k],oe=!0):C.samples>0&&Ge.useMultisampledRTT(C)===!1?B=Re.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[W]:B=ke,O.copy(C.viewport),U.copy(C.scissor),H=C.scissorTest}else O.copy(Ie).multiplyScalar(j).floor(),U.copy(Ue).multiplyScalar(j).floor(),H=Ve;if(W!==0&&(B=aS),be.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&be.drawBuffers(C,B),be.viewport(O),be.scissor(U),be.setScissorTest(H),oe){const _e=Re.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,W)}else if(me){const _e=k;for(let Ne=0;Ne<C.textures.length;Ne++){const ke=Re.get(C.textures[Ne]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ne,ke.__webglTexture,W,_e)}}else if(C!==null&&W!==0){const _e=Re.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,W)}L=-1},this.readRenderTargetPixels=function(C,k,W,X,B,oe,me,Me=0){if(!(C&&C.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){be.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Ne=C.textures[Me],ke=Ne.format,Ce=Ne.type;if(!ht.textureFormatReadable(ke)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ce)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&W>=0&&W<=C.height-B&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(k,W,X,B,Be.convert(ke),Be.convert(Ce),oe))}finally{const Ne=M!==null?Re.get(M).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,k,W,X,B,oe,me,Me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(k>=0&&k<=C.width-X&&W>=0&&W<=C.height-B){be.bindFramebuffer(D.FRAMEBUFFER,_e);const Ne=C.textures[Me],ke=Ne.format,Ce=Ne.type;if(!ht.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(k,W,X,B,Be.convert(ke),Be.convert(Ce),0);const lt=M!==null?Re.get(M).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,lt);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await DP(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Ze),D.deleteSync(Ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,W=0){const X=Math.pow(2,-W),B=Math.floor(C.image.width*X),oe=Math.floor(C.image.height*X),me=k!==null?k.x:0,Me=k!==null?k.y:0;Ge.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,me,Me,B,oe),be.unbindTexture()};const lS=D.createFramebuffer(),cS=D.createFramebuffer();this.copyTextureToTexture=function(C,k,W=null,X=null,B=0,oe=null){oe===null&&(B!==0?(Ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let me,Me,_e,Ne,ke,Ce,Ze,lt,Ct;const Rt=C.isCompressedTexture?C.mipmaps[oe]:C.image;if(W!==null)me=W.max.x-W.min.x,Me=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,ke=W.min.y,Ce=W.isBox3?W.min.z:0;else{const Bn=Math.pow(2,-B);me=Math.floor(Rt.width*Bn),Me=Math.floor(Rt.height*Bn),C.isDataArrayTexture?_e=Rt.depth:C.isData3DTexture?_e=Math.floor(Rt.depth*Bn):_e=1,Ne=0,ke=0,Ce=0}X!==null?(Ze=X.x,lt=X.y,Ct=X.z):(Ze=0,lt=0,Ct=0);const ft=Be.convert(k.format),Le=Be.convert(k.type);let Mt;k.isData3DTexture?(Ge.setTexture3D(k,0),Mt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ge.setTexture2DArray(k,0),Mt=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(k,0),Mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),wn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Cs=D.getParameter(D.UNPACK_SKIP_PIXELS),Tn=D.getParameter(D.UNPACK_SKIP_ROWS),Ho=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const bt=C.isDataArrayTexture||C.isData3DTexture,pn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Bn=Re.get(C),sn=Re.get(k),mn=Re.get(Bn.__renderTarget),tf=Re.get(sn.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,tf.__webglFramebuffer);for(let Hr=0;Hr<_e;Hr++)bt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(C).__webglTexture,B,Ce+Hr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,oe,Ct+Hr)),D.blitFramebuffer(Ne,ke,me,Me,Ze,lt,me,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||C.isRenderTargetTexture||Re.has(C)){const Bn=Re.get(C),sn=Re.get(k);be.bindFramebuffer(D.READ_FRAMEBUFFER,lS),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,cS);for(let mn=0;mn<_e;mn++)bt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bn.__webglTexture,B,Ce+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bn.__webglTexture,B),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,oe,Ct+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,oe),B!==0?D.blitFramebuffer(Ne,ke,me,Me,Ze,lt,me,Me,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(Mt,oe,Ze,lt,Ct+mn,Ne,ke,me,Me):D.copyTexSubImage2D(Mt,oe,Ze,lt,Ne,ke,me,Me);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Mt,oe,Ze,lt,Ct,me,Me,_e,ft,Le,Rt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,oe,Ze,lt,Ct,me,Me,_e,ft,Rt.data):D.texSubImage3D(Mt,oe,Ze,lt,Ct,me,Me,_e,ft,Le,Rt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,oe,Ze,lt,me,Me,ft,Le,Rt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,oe,Ze,lt,Rt.width,Rt.height,ft,Rt.data):D.texSubImage2D(D.TEXTURE_2D,oe,Ze,lt,me,Me,ft,Le,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Cs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ho),oe===0&&k.generateMipmaps&&D.generateMipmap(Mt),be.unbindTexture()},this.initRenderTarget=function(C){Re.get(C).__webglFramebuffer===void 0&&Ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ge.setTextureCube(C,0):C.isData3DTexture?Ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ge.setTexture2DArray(C,0):Ge.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){R=0,b=0,M=null,be.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const tI=`
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nI=`
precision highp float;
uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;
uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;
uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;
uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;
uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;
uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;
uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;
uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;
  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }
  vec3 gradientColor;
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);
    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    gradientColor = mix(c1, c2, f);
  }
  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;
  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;
  
  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }
  
  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }
  
  vec3 col = vec3(0.0);
  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);
  
  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }
  
  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }
  
  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }
  
  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,av=8;function iI(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new $(n/255,i/255,r/255)}function rI({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:s,bottomWavePosition:o={x:2,y:-.7,rotate:-1},animationSpeed:a=1,interactive:l=!0,bendRadius:c=5,bendStrength:u=-.5,mouseDamping:f=.05,parallax:d=!0,parallaxStrength:p=.2,mixBlendMode:m="screen"}){const v=Q.useRef(null),g=Q.useRef(new Je(-1e3,-1e3)),h=Q.useRef(new Je(-1e3,-1e3)),y=Q.useRef(0),x=Q.useRef(0),_=Q.useRef(new Je(0,0)),T=Q.useRef(new Je(0,0)),S=U=>{if(typeof n=="number")return n;if(!e.includes(U))return 0;const H=e.indexOf(U);return n[H]??6},A=U=>{if(typeof i=="number")return i;if(!e.includes(U))return .1;const H=e.indexOf(U);return i[H]??.1},R=e.includes("top")?S("top"):0,b=e.includes("middle")?S("middle"):0,M=e.includes("bottom")?S("bottom"):0,L=e.includes("top")?A("top")*.01:.01,F=e.includes("middle")?A("middle")*.01:.01,O=e.includes("bottom")?A("bottom")*.01:.01;return Q.useEffect(()=>{if(!v.current)return;const U=new sL,H=new Z3(-1,1,1,-1,0,1);H.position.z=1;const G=new eI({antialias:!0,alpha:!1});G.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),G.domElement.style.width="100%",G.domElement.style.height="100%",v.current.appendChild(G.domElement);const K={iTime:{value:0},iResolution:{value:new $(1,1,1)},animationSpeed:{value:a},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:R},middleLineCount:{value:b},bottomLineCount:{value:M},topLineDistance:{value:L},middleLineDistance:{value:F},bottomLineDistance:{value:O},topWavePosition:{value:new $((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new $((s==null?void 0:s.x)??5,(s==null?void 0:s.y)??0,(s==null?void 0:s.rotate)??.2)},bottomWavePosition:{value:new $((o==null?void 0:o.x)??2,(o==null?void 0:o.y)??-.7,(o==null?void 0:o.rotate)??.4)},iMouse:{value:new Je(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:c},bendStrength:{value:u},bendInfluence:{value:0},parallax:{value:d},parallaxStrength:{value:p},parallaxOffset:{value:new Je(0,0)},lineGradient:{value:Array.from({length:av},()=>new $(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const le=t.slice(0,av);K.lineGradientCount.value=le.length,le.forEach((ve,ge)=>{const Ee=iI(ve);K.lineGradient.value[ge].set(Ee.x,Ee.y,Ee.z)})}const N=new Ti({uniforms:K,vertexShader:tI,fragmentShader:nI}),z=new pl(2,2),j=new tr(z,N);U.add(j);const ee=new hL,fe=()=>{const le=v.current,ve=le.clientWidth||1,ge=le.clientHeight||1;G.setSize(ve,ge,!1);const Ee=G.domElement.width,tt=G.domElement.height;K.iResolution.value.set(Ee,tt,1)};fe();const Ie=typeof ResizeObserver<"u"?new ResizeObserver(fe):null;Ie&&v.current&&Ie.observe(v.current);const Ue=le=>{const ve=G.domElement.getBoundingClientRect(),ge=le.clientX-ve.left,Ee=le.clientY-ve.top,tt=G.getPixelRatio();if(g.current.set(ge*tt,(ve.height-Ee)*tt),y.current=1,d){const $e=ve.width/2,dt=ve.height/2,D=(ge-$e)/ve.width,Ye=-(Ee-dt)/ve.height;_.current.set(D*p,Ye*p)}},Ve=()=>{y.current=0};l&&(G.domElement.addEventListener("pointermove",Ue),G.domElement.addEventListener("pointerleave",Ve));let Y=0;const Z=()=>{K.iTime.value=ee.getElapsedTime(),l&&(h.current.lerp(g.current,f),K.iMouse.value.copy(h.current),x.current+=(y.current-x.current)*f,K.bendInfluence.value=x.current),d&&(T.current.lerp(_.current,f),K.parallaxOffset.value.copy(T.current)),G.render(U,H),Y=requestAnimationFrame(Z)};return Z(),()=>{cancelAnimationFrame(Y),Ie&&v.current&&Ie.disconnect(),l&&(G.domElement.removeEventListener("pointermove",Ue),G.domElement.removeEventListener("pointerleave",Ve)),z.dispose(),N.dispose(),G.dispose(),G.domElement.parentElement&&G.domElement.parentElement.removeChild(G.domElement)}},[t,e,n,i,r,s,o,a,l,c,u,f,d,p]),E.jsx("div",{ref:v,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,overflow:"hidden",mixBlendMode:m}})}const sI=()=>E.jsxs("section",{id:"contact",className:"section",style:{background:"#000",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"100px 20px"},children:[E.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",zIndex:0,opacity:.6},children:E.jsx(rI,{enabledWaves:["top","middle","bottom"],lineCount:[6,5,4],lineDistance:[5,4,3],animationSpeed:.6,interactive:!0,bendRadius:6,bendStrength:-.4,mouseDamping:.08,parallax:!0,parallaxStrength:.15,mixBlendMode:"screen"})}),E.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"clamp(8rem, 20vw, 15rem)",fontWeight:900,color:"rgba(255, 255, 255, 0.02)",userSelect:"none",pointerEvents:"none",whiteSpace:"nowrap",zIndex:0},children:"Contact"}),E.jsxs("div",{className:"container",style:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto"},children:[E.jsxs(Te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},style:{textAlign:"center",marginBottom:"60px"},children:[E.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 3.5rem)",fontWeight:700,color:"#fff",marginBottom:"15px"},children:"Contact Me"}),E.jsx("p",{style:{color:"#999",fontSize:"1.1rem"},children:"Below are the details to reach out to me!"})]}),E.jsxs(Te.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},style:{display:"flex",flexDirection:"row",justifyContent:"center",gap:"25px",marginBottom:"80px",flexWrap:"wrap"},className:"contact-cards-container",children:[E.jsxs(Te.div,{whileHover:{y:-10,borderColor:"rgba(139, 92, 246, 0.5)"},transition:{duration:.3},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px",padding:"30px 25px",background:"rgba(139, 92, 246, 0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"15px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",minWidth:"220px",flex:"1",maxWidth:"280px"},children:[E.jsx("div",{style:{width:"70px",height:"70px",minWidth:"70px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",color:"#8b5cf6",border:"2px solid rgba(139, 92, 246, 0.3)"},children:E.jsx(l5,{})}),E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("h3",{style:{color:"#fff",fontSize:"1rem",fontWeight:600,marginBottom:"8px",letterSpacing:"1px"},children:"ADDRESS"}),E.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"Gujarat, India"})]})]}),E.jsxs(Te.div,{whileHover:{y:-10,borderColor:"rgba(139, 92, 246, 0.5)"},transition:{duration:.3},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px",padding:"30px 25px",background:"rgba(139, 92, 246, 0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"15px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",minWidth:"220px",flex:"1",maxWidth:"280px"},children:[E.jsx("div",{style:{width:"70px",height:"70px",minWidth:"70px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",color:"#8b5cf6",border:"2px solid rgba(139, 92, 246, 0.3)"},children:E.jsx(u5,{})}),E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("h3",{style:{color:"#fff",fontSize:"1rem",fontWeight:600,marginBottom:"8px",letterSpacing:"1px"},children:"CONTACT NUMBER"}),E.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"+91 9898471702"})]})]}),E.jsxs(Te.div,{whileHover:{y:-10,borderColor:"rgba(139, 92, 246, 0.5)"},transition:{duration:.3},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px",padding:"30px 25px",background:"rgba(139, 92, 246, 0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"15px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",minWidth:"220px",flex:"1",maxWidth:"280px"},children:[E.jsx("div",{style:{width:"70px",height:"70px",minWidth:"70px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",color:"#8b5cf6",border:"2px solid rgba(139, 92, 246, 0.3)"},children:E.jsx(c5,{})}),E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("h3",{style:{color:"#fff",fontSize:"1rem",fontWeight:600,marginBottom:"8px",letterSpacing:"1px"},children:"EMAIL ADDRESS"}),E.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"vinitoza1702@gmail.com"})]})]}),E.jsxs(Te.div,{whileHover:{y:-10,borderColor:"rgba(139, 92, 246, 0.5)"},transition:{duration:.3},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px",padding:"30px 25px",background:"rgba(139, 92, 246, 0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(139, 92, 246, 0.2)",borderRadius:"15px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",minWidth:"220px",flex:"1",maxWidth:"280px"},children:[E.jsx("div",{style:{width:"70px",height:"70px",minWidth:"70px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",color:"#8b5cf6",border:"2px solid rgba(139, 92, 246, 0.3)"},children:E.jsx(g3,{})}),E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("h3",{style:{color:"#fff",fontSize:"1rem",fontWeight:600,marginBottom:"8px",letterSpacing:"1px"},children:"DOWNLOAD RESUME"}),E.jsx("a",{href:"#rolesresume",style:{color:"#999",fontSize:"0.9rem",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:t=>t.target.style.color="#8b5cf6",onMouseLeave:t=>t.target.style.color="#999",children:"Resumelink"})]})]})]}),E.jsx("style",{children:`
          @media (max-width: 1024px) {
            .contact-cards-container {
              flex-direction: column !important;
              align-items: center;
            }
          }
        `}),E.jsxs(Te.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6,delay:.4},viewport:{once:!0},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px",flexWrap:"wrap"},children:[E.jsx("span",{style:{color:"#999",fontSize:"1rem"},children:"Find me on"}),E.jsx(Te.a,{href:"https://www.linkedin.com/in/vinitkumar-prajapati/",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#999",transition:"color 0.3s"},children:E.jsx(m3,{})}),E.jsx(Te.a,{href:"https://github.com/vinit-oza",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#999",transition:"color 0.3s"},children:E.jsx(pu,{})}),E.jsx(Te.a,{href:"mailto:vinitoza1702@gmail.com",whileHover:{scale:1.2,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#999",transition:"color 0.3s"},children:E.jsx(x3,{})}),E.jsx(Te.a,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#999",transition:"color 0.3s"},children:E.jsx(o5,{})}),E.jsx(Te.a,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.2,color:"#8b5cf6"},style:{fontSize:"1.5rem",color:"#999",transition:"color 0.3s"},children:E.jsx(s5,{})})]})]})]}),oI=()=>{const t=new Date().getFullYear();return E.jsx("footer",{style:{background:"#000",borderTop:"1px solid rgba(255, 255, 255, 0.1)",padding:"20px 0"},children:E.jsx("div",{className:"container",children:E.jsxs("p",{style:{color:"#888",fontSize:"0.9rem",textAlign:"center",margin:0},children:["© ",t," Vinit Prajapati. All rights reserved."]})})})};function aI(){const[t,e]=Q.useState(!0);return Q.useEffect(()=>{const n=setTimeout(()=>e(!1),3e3);return()=>clearTimeout(n)},[]),E.jsxs(E.Fragment,{children:[E.jsx(G2,{mode:"wait",children:t&&E.jsx(Te.div,{exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},children:E.jsx(t5,{})},"preloader")}),!t&&E.jsxs(Te.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut"},children:[E.jsx(d5,{}),E.jsx(oR,{}),E.jsx(pR,{}),E.jsx(gR,{}),E.jsx(xR,{}),E.jsx(DR,{}),E.jsx(IR,{}),E.jsx(sI,{}),E.jsx(oI,{})]})]})}Ad.createRoot(document.getElementById("root")).render(E.jsx(cn.StrictMode,{children:E.jsx(aI,{})}));
