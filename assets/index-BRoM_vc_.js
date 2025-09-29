(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function xw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pm={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function Vw(){if(Ov)return Hl;Ov=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Hl.Fragment=e,Hl.jsx=n,Hl.jsxs=n,Hl}var Mv;function kw(){return Mv||(Mv=1,pm.exports=Vw()),pm.exports}var O=kw(),gm={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function Lw(){if(Pv)return De;Pv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function R(T){return T===null||typeof T!="object"?null:(T=A&&T[A]||T["@@iterator"],typeof T=="function"?T:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function B(T,V,te){this.props=T,this.context=V,this.refs=J,this.updater=te||k}B.prototype.isReactComponent={},B.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},B.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function Q(){}Q.prototype=B.prototype;function Y(T,V,te){this.props=T,this.context=V,this.refs=J,this.updater=te||k}var re=Y.prototype=new Q;re.constructor=Y,$(re,B.prototype),re.isPureReactComponent=!0;var fe=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},pe=Object.prototype.hasOwnProperty;function N(T,V,te,Z,oe,ge){return te=ge.ref,{$$typeof:i,type:T,key:V,ref:te!==void 0?te:null,props:ge}}function b(T,V){return N(T.type,V,void 0,void 0,void 0,T.props)}function I(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function x(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(te){return V[te]})}var M=/\/+/g;function U(T,V){return typeof T=="object"&&T!==null&&T.key!=null?x(""+T.key):V.toString(36)}function D(){}function st(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(D,D):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function qe(T,V,te,Z,oe){var ge=typeof T;(ge==="undefined"||ge==="boolean")&&(T=null);var le=!1;if(T===null)le=!0;else switch(ge){case"bigint":case"string":case"number":le=!0;break;case"object":switch(T.$$typeof){case i:case e:le=!0;break;case E:return le=T._init,qe(le(T._payload),V,te,Z,oe)}}if(le)return oe=oe(T),le=Z===""?"."+U(T,0):Z,fe(oe)?(te="",le!=null&&(te=le.replace(M,"$&/")+"/"),qe(oe,V,te,"",function(dn){return dn})):oe!=null&&(I(oe)&&(oe=b(oe,te+(oe.key==null||T&&T.key===oe.key?"":(""+oe.key).replace(M,"$&/")+"/")+le)),V.push(oe)),1;le=0;var Je=Z===""?".":Z+":";if(fe(T))for(var we=0;we<T.length;we++)Z=T[we],ge=Je+U(Z,we),le+=qe(Z,V,te,ge,oe);else if(we=R(T),typeof we=="function")for(T=we.call(T),we=0;!(Z=T.next()).done;)Z=Z.value,ge=Je+U(Z,we++),le+=qe(Z,V,te,ge,oe);else if(ge==="object"){if(typeof T.then=="function")return qe(st(T),V,te,Z,oe);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return le}function X(T,V,te){if(T==null)return T;var Z=[],oe=0;return qe(T,Z,"","",function(ge){return V.call(te,ge,oe++)}),Z}function ce(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(te){(T._status===0||T._status===-1)&&(T._status=1,T._result=te)},function(te){(T._status===0||T._status===-1)&&(T._status=2,T._result=te)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var ye=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function Ue(){}return De.Children={map:X,forEach:function(T,V,te){X(T,function(){V.apply(this,arguments)},te)},count:function(T){var V=0;return X(T,function(){V++}),V},toArray:function(T){return X(T,function(V){return V})||[]},only:function(T){if(!I(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},De.Component=B,De.Fragment=n,De.Profiler=o,De.PureComponent=Y,De.StrictMode=s,De.Suspense=p,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,De.__COMPILER_RUNTIME={__proto__:null,c:function(T){return ae.H.useMemoCache(T)}},De.cache=function(T){return function(){return T.apply(null,arguments)}},De.cloneElement=function(T,V,te){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=$({},T.props),oe=T.key,ge=void 0;if(V!=null)for(le in V.ref!==void 0&&(ge=void 0),V.key!==void 0&&(oe=""+V.key),V)!pe.call(V,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&V.ref===void 0||(Z[le]=V[le]);var le=arguments.length-2;if(le===1)Z.children=te;else if(1<le){for(var Je=Array(le),we=0;we<le;we++)Je[we]=arguments[we+2];Z.children=Je}return N(T.type,oe,void 0,void 0,ge,Z)},De.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},De.createElement=function(T,V,te){var Z,oe={},ge=null;if(V!=null)for(Z in V.key!==void 0&&(ge=""+V.key),V)pe.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(oe[Z]=V[Z]);var le=arguments.length-2;if(le===1)oe.children=te;else if(1<le){for(var Je=Array(le),we=0;we<le;we++)Je[we]=arguments[we+2];oe.children=Je}if(T&&T.defaultProps)for(Z in le=T.defaultProps,le)oe[Z]===void 0&&(oe[Z]=le[Z]);return N(T,ge,void 0,void 0,null,oe)},De.createRef=function(){return{current:null}},De.forwardRef=function(T){return{$$typeof:m,render:T}},De.isValidElement=I,De.lazy=function(T){return{$$typeof:E,_payload:{_status:-1,_result:T},_init:ce}},De.memo=function(T,V){return{$$typeof:g,type:T,compare:V===void 0?null:V}},De.startTransition=function(T){var V=ae.T,te={};ae.T=te;try{var Z=T(),oe=ae.S;oe!==null&&oe(te,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Ue,ye)}catch(ge){ye(ge)}finally{ae.T=V}},De.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},De.use=function(T){return ae.H.use(T)},De.useActionState=function(T,V,te){return ae.H.useActionState(T,V,te)},De.useCallback=function(T,V){return ae.H.useCallback(T,V)},De.useContext=function(T){return ae.H.useContext(T)},De.useDebugValue=function(){},De.useDeferredValue=function(T,V){return ae.H.useDeferredValue(T,V)},De.useEffect=function(T,V,te){var Z=ae.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(T,V)},De.useId=function(){return ae.H.useId()},De.useImperativeHandle=function(T,V,te){return ae.H.useImperativeHandle(T,V,te)},De.useInsertionEffect=function(T,V){return ae.H.useInsertionEffect(T,V)},De.useLayoutEffect=function(T,V){return ae.H.useLayoutEffect(T,V)},De.useMemo=function(T,V){return ae.H.useMemo(T,V)},De.useOptimistic=function(T,V){return ae.H.useOptimistic(T,V)},De.useReducer=function(T,V,te){return ae.H.useReducer(T,V,te)},De.useRef=function(T){return ae.H.useRef(T)},De.useState=function(T){return ae.H.useState(T)},De.useSyncExternalStore=function(T,V,te){return ae.H.useSyncExternalStore(T,V,te)},De.useTransition=function(){return ae.H.useTransition()},De.version="19.1.1",De}var xv;function dp(){return xv||(xv=1,gm.exports=Lw()),gm.exports}var G=dp(),ym={exports:{}},Fl={},_m={exports:{}},vm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function Uw(){return Vv||(Vv=1,(function(i){function e(X,ce){var ye=X.length;X.push(ce);e:for(;0<ye;){var Ue=ye-1>>>1,T=X[Ue];if(0<o(T,ce))X[Ue]=ce,X[ye]=T,ye=Ue;else break e}}function n(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ce=X[0],ye=X.pop();if(ye!==ce){X[0]=ye;e:for(var Ue=0,T=X.length,V=T>>>1;Ue<V;){var te=2*(Ue+1)-1,Z=X[te],oe=te+1,ge=X[oe];if(0>o(Z,ye))oe<T&&0>o(ge,Z)?(X[Ue]=ge,X[oe]=ye,Ue=oe):(X[Ue]=Z,X[te]=ye,Ue=te);else if(oe<T&&0>o(ge,ye))X[Ue]=ge,X[oe]=ye,Ue=oe;else break e}}return ce}function o(X,ce){var ye=X.sortIndex-ce.sortIndex;return ye!==0?ye:X.id-ce.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],g=[],E=1,A=null,R=3,k=!1,$=!1,J=!1,B=!1,Q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function fe(X){for(var ce=n(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=X)s(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(g)}}function ae(X){if(J=!1,fe(X),!$)if(n(p)!==null)$=!0,pe||(pe=!0,U());else{var ce=n(g);ce!==null&&qe(ae,ce.startTime-X)}}var pe=!1,N=-1,b=5,I=-1;function x(){return B?!0:!(i.unstable_now()-I<b)}function M(){if(B=!1,pe){var X=i.unstable_now();I=X;var ce=!0;try{e:{$=!1,J&&(J=!1,Y(N),N=-1),k=!0;var ye=R;try{t:{for(fe(X),A=n(p);A!==null&&!(A.expirationTime>X&&x());){var Ue=A.callback;if(typeof Ue=="function"){A.callback=null,R=A.priorityLevel;var T=Ue(A.expirationTime<=X);if(X=i.unstable_now(),typeof T=="function"){A.callback=T,fe(X),ce=!0;break t}A===n(p)&&s(p),fe(X)}else s(p);A=n(p)}if(A!==null)ce=!0;else{var V=n(g);V!==null&&qe(ae,V.startTime-X),ce=!1}}break e}finally{A=null,R=ye,k=!1}ce=void 0}}finally{ce?U():pe=!1}}}var U;if(typeof re=="function")U=function(){re(M)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,st=D.port2;D.port1.onmessage=M,U=function(){st.postMessage(null)}}else U=function(){Q(M,0)};function qe(X,ce){N=Q(function(){X(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_next=function(X){switch(R){case 1:case 2:case 3:var ce=3;break;default:ce=R}var ye=R;R=ce;try{return X()}finally{R=ye}},i.unstable_requestPaint=function(){B=!0},i.unstable_runWithPriority=function(X,ce){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ye=R;R=X;try{return ce()}finally{R=ye}},i.unstable_scheduleCallback=function(X,ce,ye){var Ue=i.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ue+ye:Ue):ye=Ue,X){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=ye+T,X={id:E++,callback:ce,priorityLevel:X,startTime:ye,expirationTime:T,sortIndex:-1},ye>Ue?(X.sortIndex=ye,e(g,X),n(p)===null&&X===n(g)&&(J?(Y(N),N=-1):J=!0,qe(ae,ye-Ue))):(X.sortIndex=T,e(p,X),$||k||($=!0,pe||(pe=!0,U()))),X},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(X){var ce=R;return function(){var ye=R;R=ce;try{return X.apply(this,arguments)}finally{R=ye}}}})(vm)),vm}var kv;function jw(){return kv||(kv=1,_m.exports=Uw()),_m.exports}var Em={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function zw(){if(Lv)return Yt;Lv=1;var i=dp();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:p,containerInfo:g,implementation:E}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},Yt.flushSync=function(p){var g=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=g,s.p=E,s.d.f()}},Yt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,A=m(E,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:R,fetchPriority:k}):E==="script"&&s.d.X(p,{crossOrigin:A,integrity:R,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Yt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Yt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,A=m(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Yt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Yt.requestFormReset=function(p){s.d.r(p)},Yt.unstable_batchedUpdates=function(p,g){return p(g)},Yt.useFormState=function(p,g,E){return f.H.useFormState(p,g,E)},Yt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Yt.version="19.1.1",Yt}var Uv;function Bw(){if(Uv)return Em.exports;Uv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Em.exports=zw(),Em.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function qw(){if(jv)return Fl;jv=1;var i=jw(),e=dp(),n=Bw();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,S=h.child;S;){if(S===a){v=!0,a=h,l=d;break}if(S===l){v=!0,l=h,a=d;break}S=S.sibling}if(!v){for(S=d.child;S;){if(S===a){v=!0,a=d,l=h;break}if(S===l){v=!0,l=d,a=h;break}S=S.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function g(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=g(t),r!==null)return r;t=t.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),re=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var D=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $:return"Fragment";case B:return"Profiler";case J:return"StrictMode";case ae:return"Suspense";case pe:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case re:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case fe:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return r=t.displayName||null,r!==null?r:st(t.type)||"Memo";case b:r=t._payload,t=t._init;try{return st(t(r))}catch{}}return null}var qe=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ue=[],T=-1;function V(t){return{current:t}}function te(t){0>T||(t.current=Ue[T],Ue[T]=null,T--)}function Z(t,r){T++,Ue[T]=t.current,t.current=r}var oe=V(null),ge=V(null),le=V(null),Je=V(null);function we(t,r){switch(Z(le,r),Z(ge,t),Z(oe,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?sv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=sv(r),t=av(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(oe),Z(oe,t)}function dn(){te(oe),te(ge),te(le)}function Lo(t){t.memoizedState!==null&&Z(Je,t);var r=oe.current,a=av(r,t.type);r!==a&&(Z(ge,t),Z(oe,a))}function Ea(t){ge.current===t&&(te(oe),te(ge)),Je.current===t&&(te(Je),Ul._currentValue=ye)}var Ta=Object.prototype.hasOwnProperty,gs=i.unstable_scheduleCallback,Sa=i.unstable_cancelCallback,gf=i.unstable_shouldYield,Uo=i.unstable_requestPaint,sn=i.unstable_now,Nu=i.unstable_getCurrentPriorityLevel,bt=i.unstable_ImmediatePriority,Mt=i.unstable_UserBlockingPriority,Vi=i.unstable_NormalPriority,yf=i.unstable_LowPriority,jo=i.unstable_IdlePriority,_f=i.log,ys=i.unstable_setDisableYieldValue,mr=null,Gt=null;function wn(t){if(typeof _f=="function"&&ys(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(mr,t)}catch{}}var Jt=Math.clz32?Math.clz32:Mu,vf=Math.log,Ou=Math.LN2;function Mu(t){return t>>>=0,t===0?32:31-(vf(t)/Ou|0)|0}var oi=256,pr=4194304;function qn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bn(t,r,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?h=qn(l):(v&=S,v!==0?h=qn(v):a||(a=S&~t,a!==0&&(h=qn(a))))):(S=l&~d,S!==0?h=qn(S):v!==0?h=qn(v):a||(a=l&~t,a!==0&&(h=qn(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function gr(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function Aa(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var t=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),t}function yr(){var t=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),t}function wa(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function mt(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pu(t,r,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,C=t.expirationTimes,q=t.hiddenUpdates;for(a=v&~a;0<a;){var W=31-Jt(a),ne=1<<W;S[W]=0,C[W]=-1;var H=q[W];if(H!==null)for(q[W]=null,W=0;W<H.length;W++){var F=H[W];F!==null&&(F.lane&=-536870913)}a&=~ne}l!==0&&_r(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~r))}function _r(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-Jt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function vr(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-Jt(a),h=1<<l;h&r|t[l]&r&&(t[l]|=r),a&=~h}}function Bo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ki(){var t=ce.p;return t!==0?t:(t=window.event,t===void 0?32:bv(t.type))}function Ef(t,r){var a=ce.p;try{return ce.p=t,r()}finally{ce.p=a}}var li=Math.random().toString(36).slice(2),pt="__reactFiber$"+li,Ut="__reactProps$"+li,Li="__reactContainer$"+li,_s="__reactEvents$"+li,vs="__reactListeners$"+li,Tf="__reactHandles$"+li,Hn="__reactResources$"+li,Er="__reactMarker$"+li;function ba(t){delete t[pt],delete t[Ut],delete t[_s],delete t[vs],delete t[Tf]}function ui(t){var r=t[pt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Li]||a[pt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=cv(t);t!==null;){if(a=t[pt])return a;t=cv(t)}return r}t=a,a=t.parentNode}return null}function ci(t){if(t=t[pt]||t[Li]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function Tr(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function Sr(t){var r=t[Hn];return r||(r=t[Hn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(t){t[Er]=!0}var xu=new Set,Es={};function hi(t,r){fi(t,r),fi(t+"Capture",r)}function fi(t,r){for(Es[t]=r,t=0;t<r.length;t++)xu.add(r[t])}var Ts=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},Ra={};function Sf(t){return Ta.call(Ra,t)?!0:Ta.call(di,t)?!1:Ts.test(t)?Ra[t]=!0:(di[t]=!0,!1)}function Ss(t,r,a){if(Sf(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function As(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function Rn(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}var ws,Ia;function Ui(t){if(ws===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ws=r&&r[1]||"",Ia=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ws+t+Ia}var Ca=!1;function Da(t,r){if(!t||Ca)return"";Ca=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(F){var H=F}Reflect.construct(t,[],ne)}else{try{ne.call()}catch(F){H=F}t.call(ne.prototype)}}else{try{throw Error()}catch(F){H=F}(ne=t())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],S=d[1];if(v&&S){var C=v.split(`
`),q=S.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===q.length)for(l=C.length-1,h=q.length-1;1<=l&&0<=h&&C[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==q[h]){var W=`
`+C[l].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=l&&0<=h);break}}}finally{Ca=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ui(a):""}function Af(t){switch(t.tag){case 26:case 27:case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 15:return Da(t.type,!1);case 11:return Da(t.type.render,!1);case 1:return Da(t.type,!0);case 31:return Ui("Activity");default:return""}}function Fn(t){try{var r="";do r+=Af(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ar(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function bs(t){var r=Ar(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function wr(t){t._valueTracker||(t._valueTracker=bs(t))}function Ye(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Ar(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function ji(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rs=/[\n"\\]/g;function Pt(t){return t.replace(Rs,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ho(t,r,a,l,h,d,v,S){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),r!=null?v==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+ut(r)):t.value!==""+ut(r)&&(t.value=""+ut(r)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),r!=null?Go(t,v,ut(r)):a!=null?Go(t,v,ut(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+ut(S):t.removeAttribute("name")}function Fo(t,r,a,l,h,d,v,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+ut(a):"",r=r!=null?""+ut(r):a,S||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Go(t,r,a){r==="number"&&ji(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function br(t,r,a,l){if(t=t.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=r.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ut(a),r=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Vu(t,r,a){if(r!=null&&(r=""+ut(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+ut(a):""}function ku(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(qe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=ut(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function In(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ko(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||zi.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function $o(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&Ko(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Ko(t,d,r[d])}function Na(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gn(t){return Uu.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Yo=null;function Qo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,en=null;function ju(t){var r=ci(t);if(r&&(t=r.stateNode)){var a=t[Ut]||null;e:switch(t=r.stateNode,r.type){case"input":if(Ho(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var h=l[Ut]||null;if(!h)throw Error(s(90));Ho(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&Ye(l)}break e;case"textarea":Vu(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&br(t,!!a.multiple,r,!1)}}}var Is=!1;function Cs(t,r,a){if(Is)return t(r,a);Is=!0;try{var l=t(r);return l}finally{if(Is=!1,(Rr!==null||en!==null)&&(Cc(),Rr&&(r=Rr,t=en,en=Rr=null,ju(r),t)))for(r=0;r<t.length;r++)ju(t[r])}}function Ir(t,r){var a=t.stateNode;if(a===null)return null;var l=a[Ut]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=!1;if(tn)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Bi=!1}var Cn=null,et=null,Oa=null;function zu(){if(Oa)return Oa;var t,r=et,a=r.length,l,h="value"in Cn?Cn.value:Cn.textContent,d=h.length;for(t=0;t<a&&r[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&r[a-l]===h[d-l];l++);return Oa=h.slice(t,1<l?1-l:void 0)}function Ds(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ns(){return!0}function Xo(){return!1}function Rt(t){function r(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ns:Xo,this.isPropagationStopped=Xo,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),r}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Rt(Kt),Ms=E({},Kt,{view:0,detail:0}),Ps=Rt(Ms),Ma,xs,mi,Vs=E({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(Ma=t.screenX-mi.screenX,xs=t.screenY-mi.screenY):xs=Ma=0,mi=t),Ma)},movementY:function(t){return"movementY"in t?t.movementY:xs}}),ks=Rt(Vs),wf=E({},Vs,{dataTransfer:0}),Bu=Rt(wf),Ls=E({},Ms,{relatedTarget:0}),Pa=Rt(Ls),qu=E({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),Wo=Rt(qu),Zo=E({},Kt,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hu=Rt(Zo),xa=E({},Kt,{data:0}),Jo=Rt(xa),Fu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Gu[t])?!!r[t]:!1}function Va(){return Ku}var $u=E({},Ms,{key:function(t){if(t.key){var r=Fu[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qi[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(t){return t.type==="keypress"?Ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ka=Rt($u),nn=E({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=Rt(nn),Yu=E({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),Dr=Rt(Yu),c=E({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Rt(c),_=E({},Vs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w=Rt(_),z=E({},Kt,{newState:0,oldState:0}),K=Rt(z),ue=[9,13,27,32],Ie=tn&&"CompositionEvent"in window,nt=null;tn&&"documentMode"in document&&(nt=document.documentMode);var Ge=tn&&"TextEvent"in window&&!nt,yt=tn&&(!Ie||nt&&8<nt&&11>=nt),mn=" ",pi=!1;function Kn(t,r){switch(t){case"keyup":return ue.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yn=!1;function tl(t,r){switch(t){case"compositionend":return $n(r);case"keypress":return r.which!==32?null:(pi=!0,mn);case"textInput":return t=r.data,t===mn&&pi?null:t;default:return null}}function oA(t,r){if(Yn)return t==="compositionend"||!Ie&&Kn(t,r)?(t=zu(),Oa=et=Cn=null,Yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yt&&r.locale!=="ko"?null:r.data;default:return null}}var lA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vg(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!lA[t.type]:r==="textarea"}function Eg(t,r,a,l){Rr?en?en.push(l):en=[l]:Rr=l,r=xc(r,"onChange"),0<r.length&&(a=new Os("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var nl=null,il=null;function uA(t){ev(t,0)}function Qu(t){var r=Tr(t);if(Ye(r))return t}function Tg(t,r){if(t==="change")return r}var Sg=!1;if(tn){var bf;if(tn){var Rf="oninput"in document;if(!Rf){var Ag=document.createElement("div");Ag.setAttribute("oninput","return;"),Rf=typeof Ag.oninput=="function"}bf=Rf}else bf=!1;Sg=bf&&(!document.documentMode||9<document.documentMode)}function wg(){nl&&(nl.detachEvent("onpropertychange",bg),il=nl=null)}function bg(t){if(t.propertyName==="value"&&Qu(il)){var r=[];Eg(r,il,t,Qo(t)),Cs(uA,r)}}function cA(t,r,a){t==="focusin"?(wg(),nl=r,il=a,nl.attachEvent("onpropertychange",bg)):t==="focusout"&&wg()}function hA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(il)}function fA(t,r){if(t==="click")return Qu(r)}function dA(t,r){if(t==="input"||t==="change")return Qu(r)}function mA(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var pn=typeof Object.is=="function"?Object.is:mA;function rl(t,r){if(pn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Ta.call(r,h)||!pn(t[h],r[h]))return!1}return!0}function Rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ig(t,r){var a=Rg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rg(a)}}function Cg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Cg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=ji(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=ji(t.document)}return r}function If(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var pA=tn&&"documentMode"in document&&11>=document.documentMode,La=null,Cf=null,sl=null,Df=!1;function Ng(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Df||La==null||La!==ji(l)||(l=La,"selectionStart"in l&&If(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sl&&rl(sl,l)||(sl=l,l=xc(Cf,"onSelect"),0<l.length&&(r=new Os("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=La)))}function Us(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Ua={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Nf={},Og={};tn&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function js(t){if(Nf[t])return Nf[t];if(!Ua[t])return t;var r=Ua[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Og)return Nf[t]=r[a];return t}var Mg=js("animationend"),Pg=js("animationiteration"),xg=js("animationstart"),gA=js("transitionrun"),yA=js("transitionstart"),_A=js("transitioncancel"),Vg=js("transitionend"),kg=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Qn(t,r){kg.set(t,r),hi(r,[t])}var Lg=new WeakMap;function Dn(t,r){if(typeof t=="object"&&t!==null){var a=Lg.get(t);return a!==void 0?a:(r={value:t,source:r,stack:Fn(r)},Lg.set(t,r),r)}return{value:t,source:r,stack:Fn(r)}}var Nn=[],ja=0,Mf=0;function Xu(){for(var t=ja,r=Mf=ja=0;r<t;){var a=Nn[r];Nn[r++]=null;var l=Nn[r];Nn[r++]=null;var h=Nn[r];Nn[r++]=null;var d=Nn[r];if(Nn[r++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ug(a,h,d)}}function Wu(t,r,a,l){Nn[ja++]=t,Nn[ja++]=r,Nn[ja++]=a,Nn[ja++]=l,Mf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Pf(t,r,a,l){return Wu(t,r,a,l),Zu(t)}function za(t,r){return Wu(t,null,null,r),Zu(t)}function Ug(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&r!==null&&(h=31-Jt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Zu(t){if(50<Nl)throw Nl=0,jd=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Ba={};function vA(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,r,a,l){return new vA(t,r,a,l)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,r){var a=t.alternate;return a===null?(a=gn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jg(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Ju(t,r,a,l,h,d){var v=0;if(l=t,typeof t=="function")xf(t)&&(v=1);else if(typeof t=="string")v=Tw(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=gn(31,a,r,h),t.elementType=I,t.lanes=d,t;case $:return zs(a.children,h,d,r);case J:v=8,h|=24;break;case B:return t=gn(12,a,r,h|2),t.elementType=B,t.lanes=d,t;case ae:return t=gn(13,a,r,h),t.elementType=ae,t.lanes=d,t;case pe:return t=gn(19,a,r,h),t.elementType=pe,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:case re:v=10;break e;case Y:v=9;break e;case fe:v=11;break e;case N:v=14;break e;case b:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=gn(v,a,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function zs(t,r,a,l){return t=gn(7,t,l,r),t.lanes=a,t}function Vf(t,r,a){return t=gn(6,t,null,r),t.lanes=a,t}function kf(t,r,a){return r=gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var qa=[],Ha=0,ec=null,tc=0,On=[],Mn=0,Bs=null,Fi=1,Gi="";function qs(t,r){qa[Ha++]=tc,qa[Ha++]=ec,ec=t,tc=r}function zg(t,r,a){On[Mn++]=Fi,On[Mn++]=Gi,On[Mn++]=Bs,Bs=t;var l=Fi;t=Gi;var h=32-Jt(l)-1;l&=~(1<<h),a+=1;var d=32-Jt(r)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Fi=1<<32-Jt(r)+h|a<<h|l,Gi=d+t}else Fi=1<<d|a<<h|l,Gi=t}function Lf(t){t.return!==null&&(qs(t,1),zg(t,1,0))}function Uf(t){for(;t===ec;)ec=qa[--Ha],qa[Ha]=null,tc=qa[--Ha],qa[Ha]=null;for(;t===Bs;)Bs=On[--Mn],On[Mn]=null,Gi=On[--Mn],On[Mn]=null,Fi=On[--Mn],On[Mn]=null}var rn=null,ft=null,He=!1,Hs=null,gi=!1,jf=Error(s(519));function Fs(t){var r=Error(s(418,""));throw ll(Dn(r,t)),jf}function Bg(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[pt]=t,r[Ut]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<Ml.length;a++)xe(Ml[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Fo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),wr(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),ku(r,l.value,l.defaultValue,l.children),wr(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||rv(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=Vc),r=!0):r=!1,r||Fs(t)}function qg(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:rn=rn.return}}function al(t){if(t!==rn)return!1;if(!He)return qg(t),He=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||tm(t.type,t.memoizedProps)),a=!a),a&&ft&&Fs(t),qg(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){ft=Wn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}ft=null}}else r===27?(r=ft,Gr(t.type)?(t=sm,sm=null,ft=t):ft=r):ft=rn?Wn(t.stateNode.nextSibling):null;return!0}function ol(){ft=rn=null,He=!1}function Hg(){var t=Hs;return t!==null&&(ln===null?ln=t:ln.push.apply(ln,t),Hs=null),t}function ll(t){Hs===null?Hs=[t]:Hs.push(t)}var zf=V(null),Gs=null,Ki=null;function Nr(t,r,a){Z(zf,r._currentValue),r._currentValue=a}function $i(t){t._currentValue=zf.current,te(zf)}function Bf(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function qf(t,r,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=h;for(var C=0;C<r.length;C++)if(S.context===r[C]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),Bf(d.return,a,t),l||(v=null);break e}d=S.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Bf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ul(t,r,a,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var S=h.type;pn(h.pendingProps.value,v.value)||(t!==null?t.push(S):t=[S])}}else if(h===Je.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}h=h.return}t!==null&&qf(r,t,a,l),r.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!pn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ks(t){Gs=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return Fg(Gs,t)}function ic(t,r){return Gs===null&&Ks(t),Fg(t,r)}function Fg(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ki=Ki.next=r;return a}var EA=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},TA=i.unstable_scheduleCallback,SA=i.unstable_NormalPriority,It={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hf(){return{controller:new EA,data:new Map,refCount:0}}function cl(t){t.refCount--,t.refCount===0&&TA(SA,function(){t.controller.abort()})}var hl=null,Ff=0,Fa=0,Ga=null;function AA(t,r){if(hl===null){var a=hl=[];Ff=0,Fa=Kd(),Ga={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ff++,r.then(Gg,Gg),r}function Gg(){if(--Ff===0&&hl!==null){Ga!==null&&(Ga.status="fulfilled");var t=hl;hl=null,Fa=0,Ga=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function wA(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Kg=X.S;X.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&AA(t,r),Kg!==null&&Kg(t,r)};var $s=V(null);function Gf(){var t=$s.current;return t!==null?t:tt.pooledCache}function rc(t,r){r===null?Z($s,$s.current):Z($s,r.pool)}function $g(){var t=Gf();return t===null?null:{parent:It._currentValue,pool:t}}var fl=Error(s(460)),Yg=Error(s(474)),sc=Error(s(542)),Kf={then:function(){}};function Qg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ac(){}function Xg(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(ac,ac),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Zg(t),t;default:if(typeof r.status=="string")r.then(ac,ac);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Zg(t),t}throw dl=r,fl}}var dl=null;function Wg(){if(dl===null)throw Error(s(459));var t=dl;return dl=null,t}function Zg(t){if(t===fl||t===sc)throw Error(s(483))}var Or=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Zu(t),Ug(t,null,a),r}return Wu(t,l,r,a),Zu(t)}function ml(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,vr(t,a)}}function Qf(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var Xf=!1;function pl(){if(Xf){var t=Ga;if(t!==null)throw t}}function gl(t,r,a,l){Xf=!1;var h=t.updateQueue;Or=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var C=S,q=C.next;C.next=null,v===null?d=q:v.next=q,v=C;var W=t.alternate;W!==null&&(W=W.updateQueue,S=W.lastBaseUpdate,S!==v&&(S===null?W.firstBaseUpdate=q:S.next=q,W.lastBaseUpdate=C))}if(d!==null){var ne=h.baseState;v=0,W=q=C=null,S=d;do{var H=S.lane&-536870913,F=H!==S.lane;if(F?(je&H)===H:(l&H)===H){H!==0&&H===Fa&&(Xf=!0),W!==null&&(W=W.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var be=t,Te=S;H=r;var We=a;switch(Te.tag){case 1:if(be=Te.payload,typeof be=="function"){ne=be.call(We,ne,H);break e}ne=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Te.payload,H=typeof be=="function"?be.call(We,ne,H):be,H==null)break e;ne=E({},ne,H);break e;case 2:Or=!0}}H=S.callback,H!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[H]:F.push(H))}else F={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},W===null?(q=W=F,C=ne):W=W.next=F,v|=H;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;F=S,S=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);W===null&&(C=ne),h.baseState=C,h.firstBaseUpdate=q,h.lastBaseUpdate=W,d===null&&(h.shared.lanes=0),Br|=v,t.lanes=v,t.memoizedState=ne}}function Jg(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function ey(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jg(a[t],r)}var Ka=V(null),oc=V(0);function ty(t,r){t=er,Z(oc,t),Z(Ka,r),er=t|r.baseLanes}function Wf(){Z(oc,er),Z(Ka,Ka.current)}function Zf(){er=oc.current,te(Ka),te(oc)}var xr=0,Oe=null,Qe=null,Tt=null,lc=!1,$a=!1,Ys=!1,uc=0,yl=0,Ya=null,bA=0;function _t(){throw Error(s(321))}function Jf(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!pn(t[a],r[a]))return!1;return!0}function ed(t,r,a,l,h,d){return xr=d,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,X.H=t===null||t.memoizedState===null?Uy:jy,Ys=!1,d=a(l,h),Ys=!1,$a&&(d=iy(r,a,l,h)),ny(t),d}function ny(t){X.H=pc;var r=Qe!==null&&Qe.next!==null;if(xr=0,Tt=Qe=Oe=null,lc=!1,yl=0,Ya=null,r)throw Error(s(300));t===null||xt||(t=t.dependencies,t!==null&&nc(t)&&(xt=!0))}function iy(t,r,a,l){Oe=t;var h=0;do{if($a&&(Ya=null),yl=0,$a=!1,25<=h)throw Error(s(301));if(h+=1,Tt=Qe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}X.H=MA,d=r(a,l)}while($a);return d}function RA(){var t=X.H,r=t.useState()[0];return r=typeof r.then=="function"?_l(r):r,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(Oe.flags|=1024),r}function td(){var t=uc!==0;return uc=0,t}function nd(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function id(t){if(lc){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}lc=!1}xr=0,Tt=Qe=Oe=null,$a=!1,yl=uc=0,Ya=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Oe.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function St(){if(Qe===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var r=Tt===null?Oe.memoizedState:Tt.next;if(r!==null)Tt=r,Qe=t;else{if(t===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Tt===null?Oe.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function rd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(t){var r=yl;return yl+=1,Ya===null&&(Ya=[]),t=Xg(Ya,t,r),r=Oe,(Tt===null?r.memoizedState:Tt.next)===null&&(r=r.alternate,X.H=r===null||r.memoizedState===null?Uy:jy),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _l(t);if(t.$$typeof===re)return $t(t)}throw Error(s(438,String(t)))}function sd(t){var r=null,a=Oe.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=rd(),Oe.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=x;return r.index++,a}function Yi(t,r){return typeof r=="function"?r(t):r}function hc(t){var r=St();return ad(r,Qe,t)}function ad(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var S=v=null,C=null,q=r,W=!1;do{var ne=q.lane&-536870913;if(ne!==q.lane?(je&ne)===ne:(xr&ne)===ne){var H=q.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ne===Fa&&(W=!0);else if((xr&H)===H){q=q.next,H===Fa&&(W=!0);continue}else ne={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=ne,v=d):C=C.next=ne,Oe.lanes|=H,Br|=H;ne=q.action,Ys&&a(d,ne),d=q.hasEagerState?q.eagerState:a(d,ne)}else H={lane:ne,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=H,v=d):C=C.next=H,Oe.lanes|=ne,Br|=ne;q=q.next}while(q!==null&&q!==r);if(C===null?v=d:C.next=S,!pn(d,t.memoizedState)&&(xt=!0,W&&(a=Ga,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function od(t){var r=St(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);pn(d,r.memoizedState)||(xt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function ry(t,r,a){var l=Oe,h=St(),d=He;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!pn((Qe||h).memoizedState,a);v&&(h.memoizedState=a,xt=!0),h=h.queue;var S=oy.bind(null,l,h,t);if(vl(2048,8,S,[t]),h.getSnapshot!==r||v||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,Qa(9,fc(),ay.bind(null,l,h,a,r),null),tt===null)throw Error(s(349));d||(xr&124)!==0||sy(l,r,a)}return a}function sy(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Oe.updateQueue,r===null?(r=rd(),Oe.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function ay(t,r,a,l){r.value=a,r.getSnapshot=l,ly(r)&&uy(t)}function oy(t,r,a){return a(function(){ly(r)&&uy(t)})}function ly(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!pn(t,a)}catch{return!0}}function uy(t){var r=za(t,2);r!==null&&Tn(r,t,2)}function ld(t){var r=an();if(typeof t=="function"){var a=t;if(t=a(),Ys){wn(!0);try{a()}finally{wn(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},r}function cy(t,r,a,l){return t.baseState=a,ad(t,Qe,typeof l=="function"?l:Yi)}function IA(t,r,a,l,h){if(mc(t))throw Error(s(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};X.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,hy(r,d)):(d.next=a.next,r.pending=a.next=d)}}function hy(t,r){var a=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=X.T,v={};X.T=v;try{var S=a(h,l),C=X.S;C!==null&&C(v,S),fy(t,r,S)}catch(q){ud(t,r,q)}finally{X.T=d}}else try{d=a(h,l),fy(t,r,d)}catch(q){ud(t,r,q)}}function fy(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){dy(t,r,l)},function(l){return ud(t,r,l)}):dy(t,r,a)}function dy(t,r,a){r.status="fulfilled",r.value=a,my(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,hy(t,a)))}function ud(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,my(r),r=r.next;while(r!==l)}t.action=null}function my(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function py(t,r){return r}function gy(t,r){if(He){var a=tt.formState;if(a!==null){e:{var l=Oe;if(He){if(ft){t:{for(var h=ft,d=gi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Wn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ft=Wn(h.nextSibling),l=h.data==="F!";break e}}Fs(l)}l=!1}l&&(r=a[0])}}return a=an(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:py,lastRenderedState:r},a.queue=l,a=Vy.bind(null,Oe,l),l.dispatch=a,l=ld(!1),d=md.bind(null,Oe,!1,l.queue),l=an(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,a=IA.bind(null,Oe,h,d,a),h.dispatch=a,l.memoizedState=t,[r,a,!1]}function yy(t){var r=St();return _y(r,Qe,t)}function _y(t,r,a){if(r=ad(t,r,py)[0],t=hc(Yi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=_l(r)}catch(v){throw v===fl?sc:v}else l=r;r=St();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(Oe.flags|=2048,Qa(9,fc(),CA.bind(null,h,a),null)),[l,d,t]}function CA(t,r){t.action=r}function vy(t){var r=St(),a=Qe;if(a!==null)return _y(r,a,t);St(),r=r.memoizedState,a=St();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function Qa(t,r,a,l){return t={tag:t,create:a,deps:l,inst:r,next:null},r=Oe.updateQueue,r===null&&(r=rd(),Oe.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function fc(){return{destroy:void 0,resource:void 0}}function Ey(){return St().memoizedState}function dc(t,r,a,l){var h=an();l=l===void 0?null:l,Oe.flags|=t,h.memoizedState=Qa(1|r,fc(),a,l)}function vl(t,r,a,l){var h=St();l=l===void 0?null:l;var d=h.memoizedState.inst;Qe!==null&&l!==null&&Jf(l,Qe.memoizedState.deps)?h.memoizedState=Qa(r,d,a,l):(Oe.flags|=t,h.memoizedState=Qa(1|r,d,a,l))}function Ty(t,r){dc(8390656,8,t,r)}function Sy(t,r){vl(2048,8,t,r)}function Ay(t,r){return vl(4,2,t,r)}function wy(t,r){return vl(4,4,t,r)}function by(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Ry(t,r,a){a=a!=null?a.concat([t]):null,vl(4,4,by.bind(null,r,t),a)}function cd(){}function Iy(t,r){var a=St();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Jf(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Cy(t,r){var a=St();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Jf(r,l[1]))return l[0];if(l=t(),Ys){wn(!0);try{t()}finally{wn(!1)}}return a.memoizedState=[l,r],l}function hd(t,r,a){return a===void 0||(xr&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=O_(),Oe.lanes|=t,Br|=t,a)}function Dy(t,r,a,l){return pn(a,r)?a:Ka.current!==null?(t=hd(t,a,l),pn(t,r)||(xt=!0),t):(xr&42)===0?(xt=!0,t.memoizedState=a):(t=O_(),Oe.lanes|=t,Br|=t,r)}function Ny(t,r,a,l,h){var d=ce.p;ce.p=d!==0&&8>d?d:8;var v=X.T,S={};X.T=S,md(t,!1,r,a);try{var C=h(),q=X.S;if(q!==null&&q(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=wA(C,l);El(t,r,W,En(t))}else El(t,r,l,En(t))}catch(ne){El(t,r,{then:function(){},status:"rejected",reason:ne},En())}finally{ce.p=d,X.T=v}}function DA(){}function fd(t,r,a,l){if(t.tag!==5)throw Error(s(476));var h=Oy(t).queue;Ny(t,h,r,ye,a===null?DA:function(){return My(t),a(l)})}function Oy(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:ye},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function My(t){var r=Oy(t).next.queue;El(t,r,{},En())}function dd(){return $t(Ul)}function Py(){return St().memoizedState}function xy(){return St().memoizedState}function NA(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=En();t=Mr(a);var l=Pr(r,t,a);l!==null&&(Tn(l,r,a),ml(l,r,a)),r={cache:Hf()},t.payload=r;return}r=r.return}}function OA(t,r,a){var l=En();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},mc(t)?ky(r,a):(a=Pf(t,r,a,l),a!==null&&(Tn(a,t,l),Ly(a,r,l)))}function Vy(t,r,a){var l=En();El(t,r,a,l)}function El(t,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(mc(t))ky(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,S=d(v,a);if(h.hasEagerState=!0,h.eagerState=S,pn(S,v))return Wu(t,r,h,0),tt===null&&Xu(),!1}catch{}finally{}if(a=Pf(t,r,h,l),a!==null)return Tn(a,t,l),Ly(a,r,l),!0}return!1}function md(t,r,a,l){if(l={lane:2,revertLane:Kd(),action:l,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(r)throw Error(s(479))}else r=Pf(t,a,l,2),r!==null&&Tn(r,t,2)}function mc(t){var r=t.alternate;return t===Oe||r!==null&&r===Oe}function ky(t,r){$a=lc=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Ly(t,r,a){if((a&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,vr(t,a)}}var pc={readContext:$t,use:cc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Uy={readContext:$t,use:cc,useCallback:function(t,r){return an().memoizedState=[t,r===void 0?null:r],t},useContext:$t,useEffect:Ty,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,dc(4194308,4,by.bind(null,r,t),a)},useLayoutEffect:function(t,r){return dc(4194308,4,t,r)},useInsertionEffect:function(t,r){dc(4,2,t,r)},useMemo:function(t,r){var a=an();r=r===void 0?null:r;var l=t();if(Ys){wn(!0);try{t()}finally{wn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=an();if(a!==void 0){var h=a(r);if(Ys){wn(!0);try{a(r)}finally{wn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=OA.bind(null,Oe,t),[l.memoizedState,t]},useRef:function(t){var r=an();return t={current:t},r.memoizedState=t},useState:function(t){t=ld(t);var r=t.queue,a=Vy.bind(null,Oe,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:cd,useDeferredValue:function(t,r){var a=an();return hd(a,t,r)},useTransition:function(){var t=ld(!1);return t=Ny.bind(null,Oe,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=Oe,h=an();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),tt===null)throw Error(s(349));(je&124)!==0||sy(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,Ty(oy.bind(null,l,d,t),[t]),l.flags|=2048,Qa(9,fc(),ay.bind(null,l,d,a,r),null),a},useId:function(){var t=an(),r=tt.identifierPrefix;if(He){var a=Gi,l=Fi;a=(l&~(1<<32-Jt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=uc++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=bA++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:dd,useFormState:gy,useActionState:gy,useOptimistic:function(t){var r=an();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=md.bind(null,Oe,!0,a),a.dispatch=r,[t,r]},useMemoCache:sd,useCacheRefresh:function(){return an().memoizedState=NA.bind(null,Oe)}},jy={readContext:$t,use:cc,useCallback:Iy,useContext:$t,useEffect:Sy,useImperativeHandle:Ry,useInsertionEffect:Ay,useLayoutEffect:wy,useMemo:Cy,useReducer:hc,useRef:Ey,useState:function(){return hc(Yi)},useDebugValue:cd,useDeferredValue:function(t,r){var a=St();return Dy(a,Qe.memoizedState,t,r)},useTransition:function(){var t=hc(Yi)[0],r=St().memoizedState;return[typeof t=="boolean"?t:_l(t),r]},useSyncExternalStore:ry,useId:Py,useHostTransitionStatus:dd,useFormState:yy,useActionState:yy,useOptimistic:function(t,r){var a=St();return cy(a,Qe,t,r)},useMemoCache:sd,useCacheRefresh:xy},MA={readContext:$t,use:cc,useCallback:Iy,useContext:$t,useEffect:Sy,useImperativeHandle:Ry,useInsertionEffect:Ay,useLayoutEffect:wy,useMemo:Cy,useReducer:od,useRef:Ey,useState:function(){return od(Yi)},useDebugValue:cd,useDeferredValue:function(t,r){var a=St();return Qe===null?hd(a,t,r):Dy(a,Qe.memoizedState,t,r)},useTransition:function(){var t=od(Yi)[0],r=St().memoizedState;return[typeof t=="boolean"?t:_l(t),r]},useSyncExternalStore:ry,useId:Py,useHostTransitionStatus:dd,useFormState:vy,useActionState:vy,useOptimistic:function(t,r){var a=St();return Qe!==null?cy(a,Qe,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sd,useCacheRefresh:xy},Xa=null,Tl=0;function gc(t){var r=Tl;return Tl+=1,Xa===null&&(Xa=[]),Xg(Xa,t,r)}function Sl(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function yc(t,r){throw r.$$typeof===A?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function zy(t){var r=t._init;return r(t._payload)}function By(t){function r(L,P){if(t){var j=L.deletions;j===null?(L.deletions=[P],L.flags|=16):j.push(P)}}function a(L,P){if(!t)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=Hi(L,P),L.index=0,L.sibling=null,L}function d(L,P,j){return L.index=j,t?(j=L.alternate,j!==null?(j=j.index,j<P?(L.flags|=67108866,P):j):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function v(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function S(L,P,j,ee){return P===null||P.tag!==6?(P=Vf(j,L.mode,ee),P.return=L,P):(P=h(P,j),P.return=L,P)}function C(L,P,j,ee){var de=j.type;return de===$?W(L,P,j.props.children,ee,j.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===b&&zy(de)===P.type)?(P=h(P,j.props),Sl(P,j),P.return=L,P):(P=Ju(j.type,j.key,j.props,null,L.mode,ee),Sl(P,j),P.return=L,P)}function q(L,P,j,ee){return P===null||P.tag!==4||P.stateNode.containerInfo!==j.containerInfo||P.stateNode.implementation!==j.implementation?(P=kf(j,L.mode,ee),P.return=L,P):(P=h(P,j.children||[]),P.return=L,P)}function W(L,P,j,ee,de){return P===null||P.tag!==7?(P=zs(j,L.mode,ee,de),P.return=L,P):(P=h(P,j),P.return=L,P)}function ne(L,P,j){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Vf(""+P,L.mode,j),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case R:return j=Ju(P.type,P.key,P.props,null,L.mode,j),Sl(j,P),j.return=L,j;case k:return P=kf(P,L.mode,j),P.return=L,P;case b:var ee=P._init;return P=ee(P._payload),ne(L,P,j)}if(qe(P)||U(P))return P=zs(P,L.mode,j,null),P.return=L,P;if(typeof P.then=="function")return ne(L,gc(P),j);if(P.$$typeof===re)return ne(L,ic(L,P),j);yc(L,P)}return null}function H(L,P,j,ee){var de=P!==null?P.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return de!==null?null:S(L,P,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case R:return j.key===de?C(L,P,j,ee):null;case k:return j.key===de?q(L,P,j,ee):null;case b:return de=j._init,j=de(j._payload),H(L,P,j,ee)}if(qe(j)||U(j))return de!==null?null:W(L,P,j,ee,null);if(typeof j.then=="function")return H(L,P,gc(j),ee);if(j.$$typeof===re)return H(L,P,ic(L,j),ee);yc(L,j)}return null}function F(L,P,j,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return L=L.get(j)||null,S(P,L,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case R:return L=L.get(ee.key===null?j:ee.key)||null,C(P,L,ee,de);case k:return L=L.get(ee.key===null?j:ee.key)||null,q(P,L,ee,de);case b:var Me=ee._init;return ee=Me(ee._payload),F(L,P,j,ee,de)}if(qe(ee)||U(ee))return L=L.get(j)||null,W(P,L,ee,de,null);if(typeof ee.then=="function")return F(L,P,j,gc(ee),de);if(ee.$$typeof===re)return F(L,P,j,ic(P,ee),de);yc(P,ee)}return null}function be(L,P,j,ee){for(var de=null,Me=null,_e=P,Se=P=0,kt=null;_e!==null&&Se<j.length;Se++){_e.index>Se?(kt=_e,_e=null):kt=_e.sibling;var Be=H(L,_e,j[Se],ee);if(Be===null){_e===null&&(_e=kt);break}t&&_e&&Be.alternate===null&&r(L,_e),P=d(Be,P,Se),Me===null?de=Be:Me.sibling=Be,Me=Be,_e=kt}if(Se===j.length)return a(L,_e),He&&qs(L,Se),de;if(_e===null){for(;Se<j.length;Se++)_e=ne(L,j[Se],ee),_e!==null&&(P=d(_e,P,Se),Me===null?de=_e:Me.sibling=_e,Me=_e);return He&&qs(L,Se),de}for(_e=l(_e);Se<j.length;Se++)kt=F(_e,L,Se,j[Se],ee),kt!==null&&(t&&kt.alternate!==null&&_e.delete(kt.key===null?Se:kt.key),P=d(kt,P,Se),Me===null?de=kt:Me.sibling=kt,Me=kt);return t&&_e.forEach(function(Xr){return r(L,Xr)}),He&&qs(L,Se),de}function Te(L,P,j,ee){if(j==null)throw Error(s(151));for(var de=null,Me=null,_e=P,Se=P=0,kt=null,Be=j.next();_e!==null&&!Be.done;Se++,Be=j.next()){_e.index>Se?(kt=_e,_e=null):kt=_e.sibling;var Xr=H(L,_e,Be.value,ee);if(Xr===null){_e===null&&(_e=kt);break}t&&_e&&Xr.alternate===null&&r(L,_e),P=d(Xr,P,Se),Me===null?de=Xr:Me.sibling=Xr,Me=Xr,_e=kt}if(Be.done)return a(L,_e),He&&qs(L,Se),de;if(_e===null){for(;!Be.done;Se++,Be=j.next())Be=ne(L,Be.value,ee),Be!==null&&(P=d(Be,P,Se),Me===null?de=Be:Me.sibling=Be,Me=Be);return He&&qs(L,Se),de}for(_e=l(_e);!Be.done;Se++,Be=j.next())Be=F(_e,L,Se,Be.value,ee),Be!==null&&(t&&Be.alternate!==null&&_e.delete(Be.key===null?Se:Be.key),P=d(Be,P,Se),Me===null?de=Be:Me.sibling=Be,Me=Be);return t&&_e.forEach(function(Pw){return r(L,Pw)}),He&&qs(L,Se),de}function We(L,P,j,ee){if(typeof j=="object"&&j!==null&&j.type===$&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case R:e:{for(var de=j.key;P!==null;){if(P.key===de){if(de=j.type,de===$){if(P.tag===7){a(L,P.sibling),ee=h(P,j.props.children),ee.return=L,L=ee;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===b&&zy(de)===P.type){a(L,P.sibling),ee=h(P,j.props),Sl(ee,j),ee.return=L,L=ee;break e}a(L,P);break}else r(L,P);P=P.sibling}j.type===$?(ee=zs(j.props.children,L.mode,ee,j.key),ee.return=L,L=ee):(ee=Ju(j.type,j.key,j.props,null,L.mode,ee),Sl(ee,j),ee.return=L,L=ee)}return v(L);case k:e:{for(de=j.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===j.containerInfo&&P.stateNode.implementation===j.implementation){a(L,P.sibling),ee=h(P,j.children||[]),ee.return=L,L=ee;break e}else{a(L,P);break}else r(L,P);P=P.sibling}ee=kf(j,L.mode,ee),ee.return=L,L=ee}return v(L);case b:return de=j._init,j=de(j._payload),We(L,P,j,ee)}if(qe(j))return be(L,P,j,ee);if(U(j)){if(de=U(j),typeof de!="function")throw Error(s(150));return j=de.call(j),Te(L,P,j,ee)}if(typeof j.then=="function")return We(L,P,gc(j),ee);if(j.$$typeof===re)return We(L,P,ic(L,j),ee);yc(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,P!==null&&P.tag===6?(a(L,P.sibling),ee=h(P,j),ee.return=L,L=ee):(a(L,P),ee=Vf(j,L.mode,ee),ee.return=L,L=ee),v(L)):a(L,P)}return function(L,P,j,ee){try{Tl=0;var de=We(L,P,j,ee);return Xa=null,de}catch(_e){if(_e===fl||_e===sc)throw _e;var Me=gn(29,_e,null,L.mode);return Me.lanes=ee,Me.return=L,Me}finally{}}}var Wa=By(!0),qy=By(!1),Pn=V(null),yi=null;function Vr(t){var r=t.alternate;Z(Ct,Ct.current&1),Z(Pn,t),yi===null&&(r===null||Ka.current!==null||r.memoizedState!==null)&&(yi=t)}function Hy(t){if(t.tag===22){if(Z(Ct,Ct.current),Z(Pn,t),yi===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(yi=t)}}else kr()}function kr(){Z(Ct,Ct.current),Z(Pn,Pn.current)}function Qi(t){te(Pn),yi===t&&(yi=null),te(Ct)}var Ct=V(0);function _c(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rm(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function pd(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gd={enqueueSetState:function(t,r,a){t=t._reactInternals;var l=En(),h=Mr(l);h.payload=r,a!=null&&(h.callback=a),r=Pr(t,h,l),r!==null&&(Tn(r,t,l),ml(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=En(),h=Mr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Pr(t,h,l),r!==null&&(Tn(r,t,l),ml(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=En(),l=Mr(a);l.tag=2,r!=null&&(l.callback=r),r=Pr(t,l,a),r!==null&&(Tn(r,t,a),ml(r,t,a))}};function Fy(t,r,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!rl(a,l)||!rl(h,d):!0}function Gy(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&gd.enqueueReplaceState(r,r.state,null)}function Qs(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var vc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ky(t){vc(t)}function $y(t){console.error(t)}function Yy(t){vc(t)}function Ec(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Qy(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function yd(t,r,a){return a=Mr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ec(t,r)},a}function Xy(t){return t=Mr(t),t.tag=3,t}function Wy(t,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Qy(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Qy(r,a,l),typeof h!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function PA(t,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&ul(r,a,h,!0),a=Pn.current,a!==null){switch(a.tag){case 13:return yi===null?Bd():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Kf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Hd(t,l,h)),!1;case 22:return a.flags|=65536,l===Kf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Hd(t,l,h)),!1}throw Error(s(435,a.tag))}return Hd(t,l,h),Bd(),!1}if(He)return r=Pn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==jf&&(t=Error(s(422),{cause:l}),ll(Dn(t,a)))):(l!==jf&&(r=Error(s(423),{cause:l}),ll(Dn(r,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Dn(l,a),h=yd(t.stateNode,l,h),Qf(t,h),dt!==4&&(dt=2)),!1;var d=Error(s(520),{cause:l});if(d=Dn(d,a),Dl===null?Dl=[d]:Dl.push(d),dt!==4&&(dt=2),r===null)return!0;l=Dn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=yd(a.stateNode,l,t),Qf(a,t),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qr===null||!qr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Xy(h),Wy(h,t,a,l),Qf(a,h),!1}a=a.return}while(a!==null);return!1}var Zy=Error(s(461)),xt=!1;function jt(t,r,a,l){r.child=t===null?qy(r,null,a,l):Wa(r,t.child,a,l)}function Jy(t,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var S in l)S!=="ref"&&(v[S]=l[S])}else v=l;return Ks(r),l=ed(t,r,a,v,d,h),S=td(),t!==null&&!xt?(nd(t,r,h),Xi(t,r,h)):(He&&S&&Lf(r),r.flags|=1,jt(t,r,l,h),r.child)}function e_(t,r,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!xf(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,t_(t,r,d,l,h)):(t=Ju(a.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!bd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:rl,a(v,l)&&t.ref===r.ref)return Xi(t,r,h)}return r.flags|=1,t=Hi(d,l),t.ref=r.ref,t.return=r,r.child=t}function t_(t,r,a,l,h){if(t!==null){var d=t.memoizedProps;if(rl(d,l)&&t.ref===r.ref)if(xt=!1,r.pendingProps=l=d,bd(t,h))(t.flags&131072)!==0&&(xt=!0);else return r.lanes=t.lanes,Xi(t,r,h)}return _d(t,r,a,l,h)}function n_(t,r,a){var l=r.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return i_(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&rc(r,d!==null?d.cachePool:null),d!==null?ty(r,d):Wf(),Hy(r);else return r.lanes=r.childLanes=536870912,i_(t,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(rc(r,d.cachePool),ty(r,d),kr(),r.memoizedState=null):(t!==null&&rc(r,null),Wf(),kr());return jt(t,r,h,a),r.child}function i_(t,r,a,l){var h=Gf();return h=h===null?null:{parent:It._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},t!==null&&rc(r,null),Wf(),Hy(r),t!==null&&ul(t,r,l,!0),null}function Tc(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function _d(t,r,a,l,h){return Ks(r),a=ed(t,r,a,l,void 0,h),l=td(),t!==null&&!xt?(nd(t,r,h),Xi(t,r,h)):(He&&l&&Lf(r),r.flags|=1,jt(t,r,a,h),r.child)}function r_(t,r,a,l,h,d){return Ks(r),r.updateQueue=null,a=iy(r,l,a,h),ny(t),l=td(),t!==null&&!xt?(nd(t,r,d),Xi(t,r,d)):(He&&l&&Lf(r),r.flags|=1,jt(t,r,a,d),r.child)}function s_(t,r,a,l,h){if(Ks(r),r.stateNode===null){var d=Ba,v=a.contextType;typeof v=="object"&&v!==null&&(d=$t(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gd,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},$f(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?$t(v):Ba,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(pd(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&gd.enqueueReplaceState(d,d.state,null),gl(r,l,d,h),pl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var S=r.memoizedProps,C=Qs(a,S);d.props=C;var q=d.context,W=a.contextType;v=Ba,typeof W=="object"&&W!==null&&(v=$t(W));var ne=a.getDerivedStateFromProps;W=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,W||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||q!==v)&&Gy(r,d,l,v),Or=!1;var H=r.memoizedState;d.state=H,gl(r,l,d,h),pl(),q=r.memoizedState,S||H!==q||Or?(typeof ne=="function"&&(pd(r,a,ne,l),q=r.memoizedState),(C=Or||Fy(r,a,C,l,H,q,v))?(W||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=v,l=C):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Yf(t,r),v=r.memoizedProps,W=Qs(a,v),d.props=W,ne=r.pendingProps,H=d.context,q=a.contextType,C=Ba,typeof q=="object"&&q!==null&&(C=$t(q)),S=a.getDerivedStateFromProps,(q=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==ne||H!==C)&&Gy(r,d,l,C),Or=!1,H=r.memoizedState,d.state=H,gl(r,l,d,h),pl();var F=r.memoizedState;v!==ne||H!==F||Or||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof S=="function"&&(pd(r,a,S,l),F=r.memoizedState),(W=Or||Fy(r,a,W,l,H,F,C)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,C)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=F),d.props=l,d.state=F,d.context=C,l=W):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,Tc(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=Wa(r,t.child,null,h),r.child=Wa(r,null,a,h)):jt(t,r,a,h),r.memoizedState=d.state,t=r.child):t=Xi(t,r,h),t}function a_(t,r,a,l){return ol(),r.flags|=256,jt(t,r,a,l),r.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(t){return{baseLanes:t,cachePool:$g()}}function Td(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=xn),t}function o_(t,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Ct.current&2)!==0),v&&(h=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,t===null){if(He){if(h?Vr(r):kr(),He){var S=ft,C;if(C=S){e:{for(C=S,S=gi;C.nodeType!==8;){if(!S){S=null;break e}if(C=Wn(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:Bs!==null?{id:Fi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},C=gn(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,rn=r,ft=null,C=!0):C=!1}C||Fs(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return rm(S)?r.lanes=32:r.lanes=536870912,null;Qi(r)}return S=l.children,l=l.fallback,h?(kr(),h=r.mode,S=Sc({mode:"hidden",children:S},h),l=zs(l,h,a,null),S.return=r,l.return=r,S.sibling=l,r.child=S,h=r.child,h.memoizedState=Ed(a),h.childLanes=Td(t,v,a),r.memoizedState=vd,l):(Vr(r),Sd(r,S))}if(C=t.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(d)r.flags&256?(Vr(r),r.flags&=-257,r=Ad(t,r,a)):r.memoizedState!==null?(kr(),r.child=t.child,r.flags|=128,r=null):(kr(),h=l.fallback,S=r.mode,l=Sc({mode:"visible",children:l.children},S),h=zs(h,S,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Wa(r,t.child,null,a),l=r.child,l.memoizedState=Ed(a),l.childLanes=Td(t,v,a),r.memoizedState=vd,r=h);else if(Vr(r),rm(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var q=v.dgst;v=q,l=Error(s(419)),l.stack="",l.digest=v,ll({value:l,source:null,stack:null}),r=Ad(t,r,a)}else if(xt||ul(t,r,a,!1),v=(a&t.childLanes)!==0,xt||v){if(v=tt,v!==null&&(l=a&-a,l=(l&42)!==0?1:Bo(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,za(t,l),Tn(v,t,l),Zy;S.data==="$?"||Bd(),r=Ad(t,r,a)}else S.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=C.treeContext,ft=Wn(S.nextSibling),rn=r,He=!0,Hs=null,gi=!1,t!==null&&(On[Mn++]=Fi,On[Mn++]=Gi,On[Mn++]=Bs,Fi=t.id,Gi=t.overflow,Bs=r),r=Sd(r,l.children),r.flags|=4096);return r}return h?(kr(),h=l.fallback,S=r.mode,C=t.child,q=C.sibling,l=Hi(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,q!==null?h=Hi(q,h):(h=zs(h,S,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,S=t.child.memoizedState,S===null?S=Ed(a):(C=S.cachePool,C!==null?(q=It._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=$g(),S={baseLanes:S.baseLanes|a,cachePool:C}),h.memoizedState=S,h.childLanes=Td(t,v,a),r.memoizedState=vd,l):(Vr(r),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(v=r.deletions,v===null?(r.deletions=[t],r.flags|=16):v.push(t)),r.child=a,r.memoizedState=null,a)}function Sd(t,r){return r=Sc({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Sc(t,r){return t=gn(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ad(t,r,a){return Wa(r,t.child,null,a),t=Sd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function l_(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Bf(t.return,r,a)}function wd(t,r,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function u_(t,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(jt(t,r,l.children,a),l=Ct.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l_(t,a,r);else if(t.tag===19)l_(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Z(Ct,l),h){case"forwards":for(a=r.child,h=null;a!==null;)t=a.alternate,t!==null&&_c(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),wd(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&_c(t)===null){r.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}wd(r,!0,a,null,d);break;case"together":wd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xi(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Br|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(ul(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=Hi(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function bd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function xA(t,r,a){switch(r.tag){case 3:we(r,r.stateNode.containerInfo),Nr(r,It,t.memoizedState.cache),ol();break;case 27:case 5:Lo(r);break;case 4:we(r,r.stateNode.containerInfo);break;case 10:Nr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Vr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?o_(t,r,a):(Vr(r),t=Xi(t,r,a),t!==null?t.sibling:null);Vr(r);break;case 19:var h=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(ul(t,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return u_(t,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Z(Ct,Ct.current),l)break;return null;case 22:case 23:return r.lanes=0,n_(t,r,a);case 24:Nr(r,It,t.memoizedState.cache)}return Xi(t,r,a)}function c_(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)xt=!0;else{if(!bd(t,a)&&(r.flags&128)===0)return xt=!1,xA(t,r,a);xt=(t.flags&131072)!==0}else xt=!1,He&&(r.flags&1048576)!==0&&zg(r,tc,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")xf(l)?(t=Qs(l,t),r.tag=1,r=s_(null,r,l,t,a)):(r.tag=0,r=_d(null,r,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===fe){r.tag=11,r=Jy(null,r,l,t,a);break e}else if(h===N){r.tag=14,r=e_(null,r,l,t,a);break e}}throw r=st(l)||l,Error(s(306,r,""))}}return r;case 0:return _d(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=Qs(l,r.pendingProps),s_(t,r,l,h,a);case 3:e:{if(we(r,r.stateNode.containerInfo),t===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,Yf(t,r),gl(r,l,null,a);var v=r.memoizedState;if(l=v.cache,Nr(r,It,l),l!==d.cache&&qf(r,[It],a,!0),pl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=a_(t,r,l,a);break e}else if(l!==h){h=Dn(Error(s(424)),r),ll(h),r=a_(t,r,l,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ft=Wn(t.firstChild),rn=r,He=!0,Hs=null,gi=!0,a=qy(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ol(),l===h){r=Xi(t,r,a);break e}jt(t,r,l,a)}r=r.child}return r;case 26:return Tc(t,r),t===null?(a=mv(r.type,null,r.pendingProps,null))?r.memoizedState=a:He||(a=r.type,t=r.pendingProps,l=kc(le.current).createElement(a),l[pt]=r,l[Ut]=t,Bt(l,a,t),gt(l),r.stateNode=l):r.memoizedState=mv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Lo(r),t===null&&He&&(l=r.stateNode=hv(r.type,r.pendingProps,le.current),rn=r,gi=!0,h=ft,Gr(r.type)?(sm=h,ft=Wn(l.firstChild)):ft=h),jt(t,r,r.pendingProps.children,a),Tc(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&He&&((h=l=ft)&&(l=lw(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,rn=r,ft=Wn(l.firstChild),gi=!1,h=!0):h=!1),h||Fs(r)),Lo(r),h=r.type,d=r.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,tm(h,d)?l=null:v!==null&&tm(h,v)&&(r.flags|=32),r.memoizedState!==null&&(h=ed(t,r,RA,null,null,a),Ul._currentValue=h),Tc(t,r),jt(t,r,l,a),r.child;case 6:return t===null&&He&&((t=a=ft)&&(a=uw(a,r.pendingProps,gi),a!==null?(r.stateNode=a,rn=r,ft=null,t=!0):t=!1),t||Fs(r)),null;case 13:return o_(t,r,a);case 4:return we(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Wa(r,null,l,a):jt(t,r,l,a),r.child;case 11:return Jy(t,r,r.type,r.pendingProps,a);case 7:return jt(t,r,r.pendingProps,a),r.child;case 8:return jt(t,r,r.pendingProps.children,a),r.child;case 12:return jt(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Nr(r,r.type,l.value),jt(t,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ks(r),h=$t(h),l=l(h),r.flags|=1,jt(t,r,l,a),r.child;case 14:return e_(t,r,r.type,r.pendingProps,a);case 15:return t_(t,r,r.type,r.pendingProps,a);case 19:return u_(t,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},t===null?(a=Sc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Hi(t.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return n_(t,r,a);case 24:return Ks(r),l=$t(It),t===null?(h=Gf(),h===null&&(h=tt,d=Hf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},$f(r),Nr(r,It,h)):((t.lanes&a)!==0&&(Yf(t,r),gl(r,null,null,a),pl()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Nr(r,It,l)):(l=d.cache,Nr(r,It,l),l!==h.cache&&qf(r,[It],a,!0))),jt(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Wi(t){t.flags|=4}function h_(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!vv(r)){if(r=Pn.current,r!==null&&((je&4194048)===je?yi!==null:(je&62914560)!==je&&(je&536870912)===0||r!==yi))throw dl=Kf,Yg;t.flags|=8192}}function Ac(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?yr():536870912,t.lanes|=r,to|=r)}function Al(t,r){if(!He)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ct(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function VA(t,r,a){var l=r.pendingProps;switch(Uf(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(r),null;case 1:return ct(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),$i(It),dn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(al(r)?Wi(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Hg())),ct(r),null;case 26:return a=r.memoizedState,t===null?(Wi(r),a!==null?(ct(r),h_(r,a)):(ct(r),r.flags&=-16777217)):a?a!==t.memoizedState?(Wi(r),ct(r),h_(r,a)):(ct(r),r.flags&=-16777217):(t.memoizedProps!==l&&Wi(r),ct(r),r.flags&=-16777217),null;case 27:Ea(r),a=le.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ct(r),null}t=oe.current,al(r)?Bg(r):(t=hv(h,l,a),r.stateNode=t,Wi(r))}return ct(r),null;case 5:if(Ea(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ct(r),null}if(t=oe.current,al(r))Bg(r);else{switch(h=kc(le.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[pt]=r,t[Ut]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(Bt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(r)}}return ct(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=le.current,al(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[pt]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||rv(t.nodeValue,a)),t||Fs(r)}else t=kc(t).createTextNode(l),t[pt]=r,r.stateNode=t}return ct(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=al(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[pt]=r}else ol(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ct(r),h=!1}else h=Hg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Qi(r),r):(Qi(r),null)}if(Qi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),Ac(r,r.updateQueue),ct(r),null;case 4:return dn(),t===null&&Xd(r.stateNode.containerInfo),ct(r),null;case 10:return $i(r.type),ct(r),null;case 19:if(te(Ct),h=r.memoizedState,h===null)return ct(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)Al(h,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=_c(t),d!==null){for(r.flags|=128,Al(h,!1),t=d.updateQueue,r.updateQueue=t,Ac(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)jg(a,t),a=a.sibling;return Z(Ct,Ct.current&1|2),r.child}t=t.sibling}h.tail!==null&&sn()>Rc&&(r.flags|=128,l=!0,Al(h,!1),r.lanes=4194304)}else{if(!l)if(t=_c(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,Ac(r,t),Al(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!He)return ct(r),null}else 2*sn()-h.renderingStartTime>Rc&&a!==536870912&&(r.flags|=128,l=!0,Al(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=sn(),r.sibling=null,t=Ct.current,Z(Ct,l?t&1|2:t&1),r):(ct(r),null);case 22:case 23:return Qi(r),Zf(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(ct(r),r.subtreeFlags&6&&(r.flags|=8192)):ct(r),a=r.updateQueue,a!==null&&Ac(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&te($s),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),$i(It),ct(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function kA(t,r){switch(Uf(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return $i(It),dn(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Ea(r),null;case 13:if(Qi(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));ol()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return te(Ct),null;case 4:return dn(),null;case 10:return $i(r.type),null;case 22:case 23:return Qi(r),Zf(),t!==null&&te($s),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return $i(It),null;case 25:return null;default:return null}}function f_(t,r){switch(Uf(r),r.tag){case 3:$i(It),dn();break;case 26:case 27:case 5:Ea(r);break;case 4:dn();break;case 13:Qi(r);break;case 19:te(Ct);break;case 10:$i(r.type);break;case 22:case 23:Qi(r),Zf(),t!==null&&te($s);break;case 24:$i(It)}}function wl(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(S){Ze(r,r.return,S)}}function Lr(t,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,h=r;var C=a,q=S;try{q()}catch(W){Ze(h,C,W)}}}l=l.next}while(l!==d)}}catch(W){Ze(r,r.return,W)}}function d_(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{ey(r,a)}catch(l){Ze(t,t.return,l)}}}function m_(t,r,a){a.props=Qs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ze(t,r,l)}}function bl(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ze(t,r,h)}}function _i(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ze(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ze(t,r,h)}else a.current=null}function p_(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ze(t,t.return,h)}}function Rd(t,r,a){try{var l=t.stateNode;iw(l,t.type,a,r),l[Ut]=r}catch(h){Ze(t,t.return,h)}}function g_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gr(t.type)||t.tag===4}function Id(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Vc));else if(l!==4&&(l===27&&Gr(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for(Cd(t,r,a),t=t.sibling;t!==null;)Cd(t,r,a),t=t.sibling}function wc(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(l===27&&Gr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wc(t,r,a),t=t.sibling;t!==null;)wc(t,r,a),t=t.sibling}function y_(t){var r=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Bt(r,l,a),r[pt]=t,r[Ut]=a}catch(d){Ze(t,t.return,d)}}var Zi=!1,vt=!1,Dd=!1,__=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function LA(t,r){if(t=t.containerInfo,Jd=qc,t=Dg(t),If(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,S=-1,C=-1,q=0,W=0,ne=t,H=null;t:for(;;){for(var F;ne!==a||h!==0&&ne.nodeType!==3||(S=v+h),ne!==d||l!==0&&ne.nodeType!==3||(C=v+l),ne.nodeType===3&&(v+=ne.nodeValue.length),(F=ne.firstChild)!==null;)H=ne,ne=F;for(;;){if(ne===t)break t;if(H===a&&++q===h&&(S=v),H===d&&++W===l&&(C=v),(F=ne.nextSibling)!==null)break;ne=H,H=ne.parentNode}ne=F}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(em={focusedElem:t,selectionRange:a},qc=!1,Vt=r;Vt!==null;)if(r=Vt,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Vt=t;else for(;Vt!==null;){switch(r=Vt,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var be=Qs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(be,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Te){Ze(a,a.return,Te)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)im(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":im(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,Vt=t;break}Vt=r.return}}function v_(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ur(t,a),l&4&&wl(5,a);break;case 1:if(Ur(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(v){Ze(a,a.return,v)}else{var h=Qs(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ze(a,a.return,v)}}l&64&&d_(a),l&512&&bl(a,a.return);break;case 3:if(Ur(t,a),l&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{ey(t,r)}catch(v){Ze(a,a.return,v)}}break;case 27:r===null&&l&4&&y_(a);case 26:case 5:Ur(t,a),r===null&&l&4&&p_(a),l&512&&bl(a,a.return);break;case 12:Ur(t,a);break;case 13:Ur(t,a),l&4&&S_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=KA.bind(null,a),cw(t,a))));break;case 22:if(l=a.memoizedState!==null||Zi,!l){r=r!==null&&r.memoizedState!==null||vt,h=Zi;var d=vt;Zi=l,(vt=r)&&!d?jr(t,a,(a.subtreeFlags&8772)!==0):Ur(t,a),Zi=h,vt=d}break;case 30:break;default:Ur(t,a)}}function E_(t){var r=t.alternate;r!==null&&(t.alternate=null,E_(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&ba(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,on=!1;function Ji(t,r,a){for(a=a.child;a!==null;)T_(t,r,a),a=a.sibling}function T_(t,r,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(mr,a)}catch{}switch(a.tag){case 26:vt||_i(a,r),Ji(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||_i(a,r);var l=at,h=on;Gr(a.type)&&(at=a.stateNode,on=!1),Ji(t,r,a),xl(a.stateNode),at=l,on=h;break;case 5:vt||_i(a,r);case 6:if(l=at,h=on,at=null,Ji(t,r,a),at=l,on=h,at!==null)if(on)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(d){Ze(a,r,d)}else try{at.removeChild(a.stateNode)}catch(d){Ze(a,r,d)}break;case 18:at!==null&&(on?(t=at,uv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ql(t)):uv(at,a.stateNode));break;case 4:l=at,h=on,at=a.stateNode.containerInfo,on=!0,Ji(t,r,a),at=l,on=h;break;case 0:case 11:case 14:case 15:vt||Lr(2,a,r),vt||Lr(4,a,r),Ji(t,r,a);break;case 1:vt||(_i(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&m_(a,r,l)),Ji(t,r,a);break;case 21:Ji(t,r,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,Ji(t,r,a),vt=l;break;default:Ji(t,r,a)}}function S_(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ql(t)}catch(a){Ze(r,r.return,a)}}function UA(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new __),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new __),r;default:throw Error(s(435,t.tag))}}function Nd(t,r){var a=UA(t);r.forEach(function(l){var h=$A.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function yn(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=r,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(Gr(S.type)){at=S.stateNode,on=!1;break e}break;case 5:at=S.stateNode,on=!1;break e;case 3:case 4:at=S.stateNode.containerInfo,on=!0;break e}S=S.return}if(at===null)throw Error(s(160));T_(d,v,h),at=null,on=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)A_(r,t),r=r.sibling}var Xn=null;function A_(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yn(r,t),_n(t),l&4&&(Lr(3,t,t.return),wl(3,t),Lr(5,t,t.return));break;case 1:yn(r,t),_n(t),l&512&&(vt||a===null||_i(a,a.return)),l&64&&Zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Xn;if(yn(r,t),_n(t),l&512&&(vt||a===null||_i(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Er]||d[pt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Bt(d,l,a),d[pt]=t,gt(d),l=d;break e;case"link":var v=yv("link","href",h).get(l+(a.href||""));if(v){for(var S=0;S<v.length;S++)if(d=v[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(S,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=yv("meta","content",h).get(l+(a.content||""))){for(S=0;S<v.length;S++)if(d=v[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(S,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[pt]=t,gt(d),l=d}t.stateNode=l}else _v(h,t.type,t.stateNode);else t.stateNode=gv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?_v(h,t.type,t.stateNode):gv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Rd(t,t.memoizedProps,a.memoizedProps)}break;case 27:yn(r,t),_n(t),l&512&&(vt||a===null||_i(a,a.return)),a!==null&&l&4&&Rd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yn(r,t),_n(t),l&512&&(vt||a===null||_i(a,a.return)),t.flags&32){h=t.stateNode;try{In(h,"")}catch(F){Ze(t,t.return,F)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Rd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Dd=!0);break;case 6:if(yn(r,t),_n(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(F){Ze(t,t.return,F)}}break;case 3:if(jc=null,h=Xn,Xn=Lc(r.containerInfo),yn(r,t),Xn=h,_n(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ql(r.containerInfo)}catch(F){Ze(t,t.return,F)}Dd&&(Dd=!1,w_(t));break;case 4:l=Xn,Xn=Lc(t.stateNode.containerInfo),yn(r,t),_n(t),Xn=l;break;case 12:yn(r,t),_n(t);break;case 13:yn(r,t),_n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kd=sn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nd(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,q=Zi,W=vt;if(Zi=q||h,vt=W||C,yn(r,t),vt=W,Zi=q,_n(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||C||Zi||vt||Xs(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){C=a=r;try{if(d=C.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=C.stateNode;var ne=C.memoizedProps.style,H=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(F){Ze(C,C.return,F)}}}else if(r.tag===6){if(a===null){C=r;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(F){Ze(C,C.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Nd(t,a))));break;case 19:yn(r,t),_n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nd(t,l)));break;case 30:break;case 21:break;default:yn(r,t),_n(t)}}function _n(t){var r=t.flags;if(r&2){try{for(var a,l=t.return;l!==null;){if(g_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Id(t);wc(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(In(v,""),a.flags&=-33);var S=Id(t);wc(t,S,v);break;case 3:case 4:var C=a.stateNode.containerInfo,q=Id(t);Cd(t,q,C);break;default:throw Error(s(161))}}catch(W){Ze(t,t.return,W)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function w_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;w_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Ur(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)v_(t,r.alternate,r),r=r.sibling}function Xs(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Lr(4,r,r.return),Xs(r);break;case 1:_i(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&m_(r,r.return,a),Xs(r);break;case 27:xl(r.stateNode);case 26:case 5:_i(r,r.return),Xs(r);break;case 22:r.memoizedState===null&&Xs(r);break;case 30:Xs(r);break;default:Xs(r)}t=t.sibling}}function jr(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:jr(h,d,a),wl(4,d);break;case 1:if(jr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){Ze(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var S=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Jg(C[h],S)}catch(q){Ze(l,l.return,q)}}a&&v&64&&d_(d),bl(d,d.return);break;case 27:y_(d);case 26:case 5:jr(h,d,a),a&&l===null&&v&4&&p_(d),bl(d,d.return);break;case 12:jr(h,d,a);break;case 13:jr(h,d,a),a&&v&4&&S_(h,d);break;case 22:d.memoizedState===null&&jr(h,d,a),bl(d,d.return);break;case 30:break;default:jr(h,d,a)}r=r.sibling}}function Od(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&cl(a))}function Md(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&cl(t))}function vi(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)b_(t,r,a,l),r=r.sibling}function b_(t,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(t,r,a,l),h&2048&&wl(9,r);break;case 1:vi(t,r,a,l);break;case 3:vi(t,r,a,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&cl(t)));break;case 12:if(h&2048){vi(t,r,a,l),t=r.stateNode;try{var d=r.memoizedProps,v=d.id,S=d.onPostCommit;typeof S=="function"&&S(v,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Ze(r,r.return,C)}}else vi(t,r,a,l);break;case 13:vi(t,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?vi(t,r,a,l):Rl(t,r):d._visibility&2?vi(t,r,a,l):(d._visibility|=2,Za(t,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&Od(v,r);break;case 24:vi(t,r,a,l),h&2048&&Md(r.alternate,r);break;default:vi(t,r,a,l)}}function Za(t,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,v=r,S=a,C=l,q=v.flags;switch(v.tag){case 0:case 11:case 15:Za(d,v,S,C,h),wl(8,v);break;case 23:break;case 22:var W=v.stateNode;v.memoizedState!==null?W._visibility&2?Za(d,v,S,C,h):Rl(d,v):(W._visibility|=2,Za(d,v,S,C,h)),h&&q&2048&&Od(v.alternate,v);break;case 24:Za(d,v,S,C,h),h&&q&2048&&Md(v.alternate,v);break;default:Za(d,v,S,C,h)}r=r.sibling}}function Rl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,h=l.flags;switch(l.tag){case 22:Rl(a,l),h&2048&&Od(l.alternate,l);break;case 24:Rl(a,l),h&2048&&Md(l.alternate,l);break;default:Rl(a,l)}r=r.sibling}}var Il=8192;function Ja(t){if(t.subtreeFlags&Il)for(t=t.child;t!==null;)R_(t),t=t.sibling}function R_(t){switch(t.tag){case 26:Ja(t),t.flags&Il&&t.memoizedState!==null&&Aw(Xn,t.memoizedState,t.memoizedProps);break;case 5:Ja(t);break;case 3:case 4:var r=Xn;Xn=Lc(t.stateNode.containerInfo),Ja(t),Xn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Il,Il=16777216,Ja(t),Il=r):Ja(t));break;default:Ja(t)}}function I_(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Cl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Vt=l,D_(l,t)}I_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C_(t),t=t.sibling}function C_(t){switch(t.tag){case 0:case 11:case 15:Cl(t),t.flags&2048&&Lr(9,t,t.return);break;case 3:Cl(t);break;case 12:Cl(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,bc(t)):Cl(t);break;default:Cl(t)}}function bc(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Vt=l,D_(l,t)}I_(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Lr(8,r,r.return),bc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,bc(r));break;default:bc(r)}t=t.sibling}}function D_(t,r){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Lr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(E_(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}var jA={getCacheForType:function(t){var r=$t(It),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},zA=typeof WeakMap=="function"?WeakMap:Map,Ke=0,tt=null,Pe=null,je=0,$e=0,vn=null,zr=!1,eo=!1,Pd=!1,er=0,dt=0,Br=0,Ws=0,xd=0,xn=0,to=0,Dl=null,ln=null,Vd=!1,kd=0,Rc=1/0,Ic=null,qr=null,zt=0,Hr=null,no=null,io=0,Ld=0,Ud=null,N_=null,Nl=0,jd=null;function En(){if((Ke&2)!==0&&je!==0)return je&-je;if(X.T!==null){var t=Fa;return t!==0?t:Kd()}return ki()}function O_(){xn===0&&(xn=(je&536870912)===0||He?zo():536870912);var t=Pn.current;return t!==null&&(t.flags|=32),xn}function Tn(t,r,a){(t===tt&&($e===2||$e===9)||t.cancelPendingCommit!==null)&&(ro(t,0),Fr(t,je,xn,!1)),mt(t,a),((Ke&2)===0||t!==tt)&&(t===tt&&((Ke&2)===0&&(Ws|=a),dt===4&&Fr(t,je,xn,!1)),Ei(t))}function M_(t,r,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&t.expiredLanes)===0||gr(t,r),h=l?HA(t,r):qd(t,r,!0),d=l;do{if(h===0){eo&&!l&&Fr(t,r,0,!1);break}else{if(a=t.current.alternate,d&&!BA(a)){h=qd(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var S=t;h=Dl;var C=S.current.memoizedState.isDehydrated;if(C&&(ro(S,v).flags|=256),v=qd(S,v,!1),v!==2){if(Pd&&!C){S.errorRecoveryDisabledLanes|=d,Ws|=d,h=4;break e}d=ln,ln=h,d!==null&&(ln===null?ln=d:ln.push.apply(ln,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){ro(t,0),Fr(t,r,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Fr(l,r,xn,!zr);break e;case 2:ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=kd+300-sn(),10<h)){if(Fr(l,r,xn,!zr),bn(l,0,!0)!==0)break e;l.timeoutHandle=ov(P_.bind(null,l,a,ln,Ic,Vd,r,xn,Ws,to,zr,d,2,-0,0),h);break e}P_(l,a,ln,Ic,Vd,r,xn,Ws,to,zr,d,0,-0,0)}}break}while(!0);Ei(t)}function P_(t,r,a,l,h,d,v,S,C,q,W,ne,H,F){if(t.timeoutHandle=-1,ne=r.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(Ll={stylesheets:null,count:0,unsuspend:Sw},R_(r),ne=ww(),ne!==null)){t.cancelPendingCommit=ne(z_.bind(null,t,r,d,a,l,h,v,S,C,W,1,H,F)),Fr(t,d,v,!q);return}z_(t,r,d,a,l,h,v,S,C)}function BA(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!pn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fr(t,r,a,l){r&=~xd,r&=~Ws,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-Jt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&_r(t,a,r)}function Cc(){return(Ke&6)===0?(Ol(0),!1):!0}function zd(){if(Pe!==null){if($e===0)var t=Pe.return;else t=Pe,Ki=Gs=null,id(t),Xa=null,Tl=0,t=Pe;for(;t!==null;)f_(t.alternate,t),t=t.return;Pe=null}}function ro(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,sw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),zd(),tt=t,Pe=a=Hi(t.current,null),je=r,$e=0,vn=null,zr=!1,eo=gr(t,r),Pd=!1,to=xn=xd=Ws=Br=dt=0,ln=Dl=null,Vd=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-Jt(l),d=1<<h;r|=t[h],l&=~d}return er=r,Xu(),a}function x_(t,r){Oe=null,X.H=pc,r===fl||r===sc?(r=Wg(),$e=3):r===Yg?(r=Wg(),$e=4):$e=r===Zy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,vn=r,Pe===null&&(dt=1,Ec(t,Dn(r,t.current)))}function V_(){var t=X.H;return X.H=pc,t===null?pc:t}function k_(){var t=X.A;return X.A=jA,t}function Bd(){dt=4,zr||(je&4194048)!==je&&Pn.current!==null||(eo=!0),(Br&134217727)===0&&(Ws&134217727)===0||tt===null||Fr(tt,je,xn,!1)}function qd(t,r,a){var l=Ke;Ke|=2;var h=V_(),d=k_();(tt!==t||je!==r)&&(Ic=null,ro(t,r)),r=!1;var v=dt;e:do try{if($e!==0&&Pe!==null){var S=Pe,C=vn;switch($e){case 8:zd(),v=6;break e;case 3:case 2:case 9:case 6:Pn.current===null&&(r=!0);var q=$e;if($e=0,vn=null,so(t,S,C,q),a&&eo){v=0;break e}break;default:q=$e,$e=0,vn=null,so(t,S,C,q)}}qA(),v=dt;break}catch(W){x_(t,W)}while(!0);return r&&t.shellSuspendCounter++,Ki=Gs=null,Ke=l,X.H=h,X.A=d,Pe===null&&(tt=null,je=0,Xu()),v}function qA(){for(;Pe!==null;)L_(Pe)}function HA(t,r){var a=Ke;Ke|=2;var l=V_(),h=k_();tt!==t||je!==r?(Ic=null,Rc=sn()+500,ro(t,r)):eo=gr(t,r);e:do try{if($e!==0&&Pe!==null){r=Pe;var d=vn;t:switch($e){case 1:$e=0,vn=null,so(t,r,d,1);break;case 2:case 9:if(Qg(d)){$e=0,vn=null,U_(r);break}r=function(){$e!==2&&$e!==9||tt!==t||($e=7),Ei(t)},d.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:Qg(d)?($e=0,vn=null,U_(r)):($e=0,vn=null,so(t,r,d,7));break;case 5:var v=null;switch(Pe.tag){case 26:v=Pe.memoizedState;case 5:case 27:var S=Pe;if(!v||vv(v)){$e=0,vn=null;var C=S.sibling;if(C!==null)Pe=C;else{var q=S.return;q!==null?(Pe=q,Dc(q)):Pe=null}break t}}$e=0,vn=null,so(t,r,d,5);break;case 6:$e=0,vn=null,so(t,r,d,6);break;case 8:zd(),dt=6;break e;default:throw Error(s(462))}}FA();break}catch(W){x_(t,W)}while(!0);return Ki=Gs=null,X.H=l,X.A=h,Ke=a,Pe!==null?0:(tt=null,je=0,Xu(),dt)}function FA(){for(;Pe!==null&&!gf();)L_(Pe)}function L_(t){var r=c_(t.alternate,t,er);t.memoizedProps=t.pendingProps,r===null?Dc(t):Pe=r}function U_(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=r_(a,r,r.pendingProps,r.type,void 0,je);break;case 11:r=r_(a,r,r.pendingProps,r.type.render,r.ref,je);break;case 5:id(r);default:f_(a,r),r=Pe=jg(r,er),r=c_(a,r,er)}t.memoizedProps=t.pendingProps,r===null?Dc(t):Pe=r}function so(t,r,a,l){Ki=Gs=null,id(r),Xa=null,Tl=0;var h=r.return;try{if(PA(t,h,r,a,je)){dt=1,Ec(t,Dn(a,t.current)),Pe=null;return}}catch(d){if(h!==null)throw Pe=h,d;dt=1,Ec(t,Dn(a,t.current)),Pe=null;return}r.flags&32768?(He||l===1?t=!0:eo||(je&536870912)!==0?t=!1:(zr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),j_(r,t)):Dc(r)}function Dc(t){var r=t;do{if((r.flags&32768)!==0){j_(r,zr);return}t=r.return;var a=VA(r.alternate,r,er);if(a!==null){Pe=a;return}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=t}while(r!==null);dt===0&&(dt=5)}function j_(t,r){do{var a=kA(t.alternate,t);if(a!==null){a.flags&=32767,Pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){Pe=t;return}Pe=t=a}while(t!==null);dt=6,Pe=null}function z_(t,r,a,l,h,d,v,S,C){t.cancelPendingCommit=null;do Nc();while(zt!==0);if((Ke&6)!==0)throw Error(s(327));if(r!==null){if(r===t.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Mf,Pu(t,a,d,v,S,C),t===tt&&(Pe=tt=null,je=0),no=r,Hr=t,io=a,Ld=d,Ud=h,N_=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,YA(Vi,function(){return G_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,h=ce.p,ce.p=2,v=Ke,Ke|=4;try{LA(t,r,a)}finally{Ke=v,ce.p=h,X.T=l}}zt=1,B_(),q_(),H_()}}function B_(){if(zt===1){zt=0;var t=Hr,r=no,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var l=ce.p;ce.p=2;var h=Ke;Ke|=4;try{A_(r,t);var d=em,v=Dg(t.containerInfo),S=d.focusedElem,C=d.selectionRange;if(v!==S&&S&&S.ownerDocument&&Cg(S.ownerDocument.documentElement,S)){if(C!==null&&If(S)){var q=C.start,W=C.end;if(W===void 0&&(W=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(W,S.value.length);else{var ne=S.ownerDocument||document,H=ne&&ne.defaultView||window;if(H.getSelection){var F=H.getSelection(),be=S.textContent.length,Te=Math.min(C.start,be),We=C.end===void 0?Te:Math.min(C.end,be);!F.extend&&Te>We&&(v=We,We=Te,Te=v);var L=Ig(S,Te),P=Ig(S,We);if(L&&P&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==P.node||F.focusOffset!==P.offset)){var j=ne.createRange();j.setStart(L.node,L.offset),F.removeAllRanges(),Te>We?(F.addRange(j),F.extend(P.node,P.offset)):(j.setEnd(P.node,P.offset),F.addRange(j))}}}}for(ne=[],F=S;F=F.parentNode;)F.nodeType===1&&ne.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ne.length;S++){var ee=ne[S];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}qc=!!Jd,em=Jd=null}finally{Ke=h,ce.p=l,X.T=a}}t.current=r,zt=2}}function q_(){if(zt===2){zt=0;var t=Hr,r=no,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var l=ce.p;ce.p=2;var h=Ke;Ke|=4;try{v_(t,r.alternate,r)}finally{Ke=h,ce.p=l,X.T=a}}zt=3}}function H_(){if(zt===4||zt===3){zt=0,Uo();var t=Hr,r=no,a=io,l=N_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?zt=5:(zt=0,no=Hr=null,F_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(qr=null),qo(a),r=r.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(mr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=X.T,h=ce.p,ce.p=2,X.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var S=l[v];d(S.value,{componentStack:S.stack})}}finally{X.T=r,ce.p=h}}(io&3)!==0&&Nc(),Ei(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===jd?Nl++:(Nl=0,jd=t):Nl=0,Ol(0)}}function F_(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,cl(r)))}function Nc(t){return B_(),q_(),H_(),G_()}function G_(){if(zt!==5)return!1;var t=Hr,r=Ld;Ld=0;var a=qo(io),l=X.T,h=ce.p;try{ce.p=32>a?32:a,X.T=null,a=Ud,Ud=null;var d=Hr,v=io;if(zt=0,no=Hr=null,io=0,(Ke&6)!==0)throw Error(s(331));var S=Ke;if(Ke|=4,C_(d.current),b_(d,d.current,v,a),Ke=S,Ol(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(mr,d)}catch{}return!0}finally{ce.p=h,X.T=l,F_(t,r)}}function K_(t,r,a){r=Dn(a,r),r=yd(t.stateNode,r,2),t=Pr(t,r,2),t!==null&&(mt(t,2),Ei(t))}function Ze(t,r,a){if(t.tag===3)K_(t,t,a);else for(;r!==null;){if(r.tag===3){K_(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qr===null||!qr.has(l))){t=Dn(a,t),a=Xy(2),l=Pr(r,a,2),l!==null&&(Wy(a,l,r,t),mt(l,2),Ei(l));break}}r=r.return}}function Hd(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new zA;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Pd=!0,h.add(a),t=GA.bind(null,t,r,a),r.then(t,t))}function GA(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tt===t&&(je&a)===a&&(dt===4||dt===3&&(je&62914560)===je&&300>sn()-kd?(Ke&2)===0&&ro(t,0):xd|=a,to===je&&(to=0)),Ei(t)}function $_(t,r){r===0&&(r=yr()),t=za(t,r),t!==null&&(mt(t,r),Ei(t))}function KA(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),$_(t,a)}function $A(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),$_(t,a)}function YA(t,r){return gs(t,r)}var Oc=null,ao=null,Fd=!1,Mc=!1,Gd=!1,Zs=0;function Ei(t){t!==ao&&t.next===null&&(ao===null?Oc=ao=t:ao=ao.next=t),Mc=!0,Fd||(Fd=!0,XA())}function Ol(t,r){if(!Gd&&Mc){Gd=!0;do for(var a=!1,l=Oc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-Jt(42|t)+1)-1,d&=h&~(v&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,W_(l,d))}else d=je,d=bn(l,l===tt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||gr(l,d)||(a=!0,W_(l,d));l=l.next}while(a);Gd=!1}}function QA(){Y_()}function Y_(){Mc=Fd=!1;var t=0;Zs!==0&&(rw()&&(t=Zs),Zs=0);for(var r=sn(),a=null,l=Oc;l!==null;){var h=l.next,d=Q_(l,r);d===0?(l.next=null,a===null?Oc=h:a.next=h,h===null&&(ao=a)):(a=l,(t!==0||(d&3)!==0)&&(Mc=!0)),l=h}Ol(t)}function Q_(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Jt(d),S=1<<v,C=h[v];C===-1?((S&a)===0||(S&l)!==0)&&(h[v]=Aa(S,r)):C<=r&&(t.expiredLanes|=S),d&=~S}if(r=tt,a=je,a=bn(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===r&&($e===2||$e===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Sa(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||gr(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&Sa(l),qo(a)){case 2:case 8:a=Mt;break;case 32:a=Vi;break;case 268435456:a=jo;break;default:a=Vi}return l=X_.bind(null,t),a=gs(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&Sa(l),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,r){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nc()&&t.callbackNode!==a)return null;var l=je;return l=bn(t,t===tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(M_(t,l,r),Q_(t,sn()),t.callbackNode!=null&&t.callbackNode===a?X_.bind(null,t):null)}function W_(t,r){if(Nc())return null;M_(t,r,!0)}function XA(){aw(function(){(Ke&6)!==0?gs(bt,QA):Y_()})}function Kd(){return Zs===0&&(Zs=zo()),Zs}function Z_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gn(""+t)}function J_(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function WA(t,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=Z_((h[Ut]||null).action),v=l.submitter;v&&(r=(r=v[Ut]||null)?Z_(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var S=new Os("action","action",null,l,h);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Zs!==0){var C=v?J_(h,v):new FormData(h);fd(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(S.preventDefault(),C=v?J_(h,v):new FormData(h),fd(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var $d=0;$d<Of.length;$d++){var Yd=Of[$d],ZA=Yd.toLowerCase(),JA=Yd[0].toUpperCase()+Yd.slice(1);Qn(ZA,"on"+JA)}Qn(Mg,"onAnimationEnd"),Qn(Pg,"onAnimationIteration"),Qn(xg,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(gA,"onTransitionRun"),Qn(yA,"onTransitionStart"),Qn(_A,"onTransitionCancel"),Qn(Vg,"onTransitionEnd"),fi("onMouseEnter",["mouseout","mouseover"]),fi("onMouseLeave",["mouseout","mouseover"]),fi("onPointerEnter",["pointerout","pointerover"]),fi("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ew=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function ev(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var S=l[v],C=S.instance,q=S.currentTarget;if(S=S.listener,C!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=q;try{d(h)}catch(W){vc(W)}h.currentTarget=null,d=C}else for(v=0;v<l.length;v++){if(S=l[v],C=S.instance,q=S.currentTarget,S=S.listener,C!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=q;try{d(h)}catch(W){vc(W)}h.currentTarget=null,d=C}}}}function xe(t,r){var a=r[_s];a===void 0&&(a=r[_s]=new Set);var l=t+"__bubble";a.has(l)||(tv(r,t,2,!1),a.add(l))}function Qd(t,r,a){var l=0;r&&(l|=4),tv(a,t,l,r)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Xd(t){if(!t[Pc]){t[Pc]=!0,xu.forEach(function(a){a!=="selectionchange"&&(ew.has(a)||Qd(a,!1,t),Qd(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Pc]||(r[Pc]=!0,Qd("selectionchange",!1,r))}}function tv(t,r,a,l){switch(bv(r)){case 2:var h=Iw;break;case 8:h=Cw;break;default:h=cm}a=h.bind(null,r,a,t),h=void 0,!Bi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,a,{capture:!0,passive:h}):t.addEventListener(r,a,!0):h!==void 0?t.addEventListener(r,a,{passive:h}):t.addEventListener(r,a,!1)}function Wd(t,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var S=l.stateNode.containerInfo;if(S===h)break;if(v===4)for(v=l.return;v!==null;){var C=v.tag;if((C===3||C===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;S!==null;){if(v=ui(S),v===null)return;if(C=v.tag,C===5||C===6||C===26||C===27){l=d=v;continue e}S=S.parentNode}}l=l.return}Cs(function(){var q=d,W=Qo(a),ne=[];e:{var H=kg.get(t);if(H!==void 0){var F=Os,be=t;switch(t){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":F=ka;break;case"focusin":be="focus",F=Pa;break;case"focusout":be="blur",F=Pa;break;case"beforeblur":case"afterblur":F=Pa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Bu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Dr;break;case Mg:case Pg:case xg:F=Wo;break;case Vg:F=y;break;case"scroll":case"scrollend":F=Ps;break;case"wheel":F=w;break;case"copy":case"cut":case"paste":F=Hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=el;break;case"toggle":case"beforetoggle":F=K}var Te=(r&4)!==0,We=!Te&&(t==="scroll"||t==="scrollend"),L=Te?H!==null?H+"Capture":null:H;Te=[];for(var P=q,j;P!==null;){var ee=P;if(j=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||j===null||L===null||(ee=Ir(P,L),ee!=null&&Te.push(Pl(P,ee,j))),We)break;P=P.return}0<Te.length&&(H=new F(H,be,null,a,W),ne.push({event:H,listeners:Te}))}}if((r&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",H&&a!==Yo&&(be=a.relatedTarget||a.fromElement)&&(ui(be)||be[Li]))break e;if((F||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,F?(be=a.relatedTarget||a.toElement,F=q,be=be?ui(be):null,be!==null&&(We=u(be),Te=be.tag,be!==We||Te!==5&&Te!==27&&Te!==6)&&(be=null)):(F=null,be=q),F!==be)){if(Te=ks,ee="onMouseLeave",L="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(Te=el,ee="onPointerLeave",L="onPointerEnter",P="pointer"),We=F==null?H:Tr(F),j=be==null?H:Tr(be),H=new Te(ee,P+"leave",F,a,W),H.target=We,H.relatedTarget=j,ee=null,ui(W)===q&&(Te=new Te(L,P+"enter",be,a,W),Te.target=j,Te.relatedTarget=We,ee=Te),We=ee,F&&be)t:{for(Te=F,L=be,P=0,j=Te;j;j=oo(j))P++;for(j=0,ee=L;ee;ee=oo(ee))j++;for(;0<P-j;)Te=oo(Te),P--;for(;0<j-P;)L=oo(L),j--;for(;P--;){if(Te===L||L!==null&&Te===L.alternate)break t;Te=oo(Te),L=oo(L)}Te=null}else Te=null;F!==null&&nv(ne,H,F,Te,!1),be!==null&&We!==null&&nv(ne,We,be,Te,!0)}}e:{if(H=q?Tr(q):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var de=Tg;else if(vg(H))if(Sg)de=dA;else{de=hA;var Me=cA}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&Na(q.elementType)&&(de=Tg):de=fA;if(de&&(de=de(t,q))){Eg(ne,de,a,W);break e}Me&&Me(t,H,q),t==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&Go(H,"number",H.value)}switch(Me=q?Tr(q):window,t){case"focusin":(vg(Me)||Me.contentEditable==="true")&&(La=Me,Cf=q,sl=null);break;case"focusout":sl=Cf=La=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Ng(ne,a,W);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":Ng(ne,a,W)}var _e;if(Ie)e:{switch(t){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Yn?Kn(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(yt&&a.locale!=="ko"&&(Yn||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Yn&&(_e=zu()):(Cn=W,et="value"in Cn?Cn.value:Cn.textContent,Yn=!0)),Me=xc(q,Se),0<Me.length&&(Se=new Jo(Se,t,null,a,W),ne.push({event:Se,listeners:Me}),_e?Se.data=_e:(_e=$n(a),_e!==null&&(Se.data=_e)))),(_e=Ge?tl(t,a):oA(t,a))&&(Se=xc(q,"onBeforeInput"),0<Se.length&&(Me=new Jo("onBeforeInput","beforeinput",null,a,W),ne.push({event:Me,listeners:Se}),Me.data=_e)),WA(ne,t,q,a,W)}ev(ne,r)})}function Pl(t,r,a){return{instance:t,listener:r,currentTarget:a}}function xc(t,r){for(var a=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ir(t,a),h!=null&&l.unshift(Pl(t,h,d)),h=Ir(t,r),h!=null&&l.push(Pl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function nv(t,r,a,l,h){for(var d=r._reactName,v=[];a!==null&&a!==l;){var S=a,C=S.alternate,q=S.stateNode;if(S=S.tag,C!==null&&C===l)break;S!==5&&S!==26&&S!==27||q===null||(C=q,h?(q=Ir(a,d),q!=null&&v.unshift(Pl(a,q,C))):h||(q=Ir(a,d),q!=null&&v.push(Pl(a,q,C)))),a=a.return}v.length!==0&&t.push({event:r,listeners:v})}var tw=/\r\n?/g,nw=/\u0000|\uFFFD/g;function iv(t){return(typeof t=="string"?t:""+t).replace(tw,`
`).replace(nw,"")}function rv(t,r){return r=iv(r),iv(t)===r}function Vc(){}function Xe(t,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||In(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&In(t,""+l);break;case"className":As(t,"class",l);break;case"tabIndex":As(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":As(t,a,l);break;case"style":$o(t,l,d);break;case"data":if(r!=="object"){As(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Xe(t,r,"name",h.name,h,null),Xe(t,r,"formEncType",h.formEncType,h,null),Xe(t,r,"formMethod",h.formMethod,h,null),Xe(t,r,"formTarget",h.formTarget,h,null)):(Xe(t,r,"encType",h.encType,h,null),Xe(t,r,"method",h.method,h,null),Xe(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Vc);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Gn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Ss(t,"popover",l);break;case"xlinkActuate":Rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ss(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lu.get(a)||a,Ss(t,a,l))}}function Zd(t,r,a,l,h,d){switch(a){case"style":$o(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?In(t,l):(typeof l=="number"||typeof l=="bigint")&&In(t,""+l);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Vc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Es.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=t[Ut]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ss(t,a,l)}}}function Bt(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Xe(t,r,d,v,a,null)}}h&&Xe(t,r,"srcSet",a.srcSet,a,null),l&&Xe(t,r,"src",a.src,a,null);return;case"input":xe("invalid",t);var S=d=v=h=null,C=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var W=a[l];if(W!=null)switch(l){case"name":h=W;break;case"type":v=W;break;case"checked":C=W;break;case"defaultChecked":q=W;break;case"value":d=W;break;case"defaultValue":S=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:Xe(t,r,l,W,a,null)}}Fo(t,d,S,C,q,v,h,!1),wr(t);return;case"select":xe("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(S=a[h],S!=null))switch(h){case"value":d=S;break;case"defaultValue":v=S;break;case"multiple":l=S;default:Xe(t,r,h,S,a,null)}r=d,a=v,t.multiple=!!l,r!=null?br(t,!!l,r,!1):a!=null&&br(t,!!l,a,!0);return;case"textarea":xe("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(S=a[v],S!=null))switch(v){case"value":l=S;break;case"defaultValue":h=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Xe(t,r,v,S,a,null)}ku(t,l,h,d),wr(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,r,C,l,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(l=0;l<Ml.length;l++)xe(Ml[l],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Xe(t,r,q,l,a,null)}return;default:if(Na(r)){for(W in a)a.hasOwnProperty(W)&&(l=a[W],l!==void 0&&Zd(t,r,W,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&Xe(t,r,S,l,a,null))}function iw(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,S=null,C=null,q=null,W=null;for(F in a){var ne=a[F];if(a.hasOwnProperty(F)&&ne!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=ne;default:l.hasOwnProperty(F)||Xe(t,r,F,null,l,ne)}}for(var H in l){var F=l[H];if(ne=a[H],l.hasOwnProperty(H)&&(F!=null||ne!=null))switch(H){case"type":d=F;break;case"name":h=F;break;case"checked":q=F;break;case"defaultChecked":W=F;break;case"value":v=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==ne&&Xe(t,r,H,F,l,ne)}}Ho(t,v,S,C,q,W,d,h);return;case"select":F=v=S=H=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":F=C;default:l.hasOwnProperty(d)||Xe(t,r,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":H=d;break;case"defaultValue":S=d;break;case"multiple":v=d;default:d!==C&&Xe(t,r,h,d,l,C)}r=S,a=v,l=F,H!=null?br(t,!!a,H,!1):!!l!=!!a&&(r!=null?br(t,!!a,r,!0):br(t,!!a,a?[]:"",!1));return;case"textarea":F=H=null;for(S in a)if(h=a[S],a.hasOwnProperty(S)&&h!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Xe(t,r,S,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":H=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,r,v,h,l,d)}Vu(t,H,F);return;case"option":for(var be in a)if(H=a[be],a.hasOwnProperty(be)&&H!=null&&!l.hasOwnProperty(be))switch(be){case"selected":t.selected=!1;break;default:Xe(t,r,be,null,l,H)}for(C in l)if(H=l[C],F=a[C],l.hasOwnProperty(C)&&H!==F&&(H!=null||F!=null))switch(C){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Xe(t,r,C,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)H=a[Te],a.hasOwnProperty(Te)&&H!=null&&!l.hasOwnProperty(Te)&&Xe(t,r,Te,null,l,H);for(q in l)if(H=l[q],F=a[q],l.hasOwnProperty(q)&&H!==F&&(H!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:Xe(t,r,q,H,l,F)}return;default:if(Na(r)){for(var We in a)H=a[We],a.hasOwnProperty(We)&&H!==void 0&&!l.hasOwnProperty(We)&&Zd(t,r,We,void 0,l,H);for(W in l)H=l[W],F=a[W],!l.hasOwnProperty(W)||H===F||H===void 0&&F===void 0||Zd(t,r,W,H,l,F);return}}for(var L in a)H=a[L],a.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Xe(t,r,L,null,l,H);for(ne in l)H=l[ne],F=a[ne],!l.hasOwnProperty(ne)||H===F||H==null&&F==null||Xe(t,r,ne,H,l,F)}var Jd=null,em=null;function kc(t){return t.nodeType===9?t:t.ownerDocument}function sv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function tm(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nm=null;function rw(){var t=window.event;return t&&t.type==="popstate"?t===nm?!1:(nm=t,!0):(nm=null,!1)}var ov=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(t){return lv.resolve(null).then(t).catch(ow)}:ov;function ow(t){setTimeout(function(){throw t})}function Gr(t){return t==="head"}function uv(t,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&xl(v.documentElement),a&2&&xl(v.body),a&4)for(a=v.head,xl(a),v=a.firstChild;v;){var S=v.nextSibling,C=v.nodeName;v[Er]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=S}}if(h===0){t.removeChild(d),ql(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ql(r)}function im(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":im(a),ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lw(t,r,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Er])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Wn(t.nextSibling),t===null)break}return null}function uw(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Wn(t.nextSibling),t===null))return null;return t}function rm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function cw(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Wn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var sm=null;function cv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function hv(t,r,a){switch(r=kc(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function xl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ba(t)}var Vn=new Map,fv=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tr=ce.d;ce.d={f:hw,r:fw,D:dw,C:mw,L:pw,m:gw,X:_w,S:yw,M:vw};function hw(){var t=tr.f(),r=Cc();return t||r}function fw(t){var r=ci(t);r!==null&&r.tag===5&&r.type==="form"?My(r):tr.r(t)}var lo=typeof document>"u"?null:document;function dv(t,r,a){var l=lo;if(l&&typeof r=="string"&&r){var h=Pt(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),fv.has(h)||(fv.add(h),t={rel:t,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Bt(r,"link",t),gt(r),l.head.appendChild(r)))}}function dw(t){tr.D(t),dv("dns-prefetch",t,null)}function mw(t,r){tr.C(t,r),dv("preconnect",t,r)}function pw(t,r,a){tr.L(t,r,a);var l=lo;if(l&&t&&r){var h='link[rel="preload"][as="'+Pt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Pt(a.imageSizes)+'"]')):h+='[href="'+Pt(t)+'"]';var d=h;switch(r){case"style":d=uo(t);break;case"script":d=co(t)}Vn.has(d)||(t=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),Vn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(Vl(d))||r==="script"&&l.querySelector(kl(d))||(r=l.createElement("link"),Bt(r,"link",t),gt(r),l.head.appendChild(r)))}}function gw(t,r){tr.m(t,r);var a=lo;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=co(t)}if(!Vn.has(d)&&(t=E({rel:"modulepreload",href:t},r),Vn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kl(d)))return}l=a.createElement("link"),Bt(l,"link",t),gt(l),a.head.appendChild(l)}}}function yw(t,r,a){tr.S(t,r,a);var l=lo;if(l&&t){var h=Sr(l).hoistableStyles,d=uo(t);r=r||"default";var v=h.get(d);if(!v){var S={loading:0,preload:null};if(v=l.querySelector(Vl(d)))S.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":r},a),(a=Vn.get(d))&&am(t,a);var C=v=l.createElement("link");gt(C),Bt(C,"link",t),C._p=new Promise(function(q,W){C.onload=q,C.onerror=W}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Uc(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:S},h.set(d,v)}}}function _w(t,r){tr.X(t,r);var a=lo;if(a&&t){var l=Sr(a).hoistableScripts,h=co(t),d=l.get(h);d||(d=a.querySelector(kl(h)),d||(t=E({src:t,async:!0},r),(r=Vn.get(h))&&om(t,r),d=a.createElement("script"),gt(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function vw(t,r){tr.M(t,r);var a=lo;if(a&&t){var l=Sr(a).hoistableScripts,h=co(t),d=l.get(h);d||(d=a.querySelector(kl(h)),d||(t=E({src:t,async:!0,type:"module"},r),(r=Vn.get(h))&&om(t,r),d=a.createElement("script"),gt(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function mv(t,r,a,l){var h=(h=le.current)?Lc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=uo(a.href),a=Sr(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var d=Sr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(Vl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Vn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(t,a),d||Ew(h,t,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=co(a),a=Sr(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function uo(t){return'href="'+Pt(t)+'"'}function Vl(t){return'link[rel="stylesheet"]['+t+"]"}function pv(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function Ew(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Bt(r,"link",a),gt(r),t.head.appendChild(r))}function co(t){return'[src="'+Pt(t)+'"]'}function kl(t){return"script[async]"+t}function gv(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(l)return r.instance=l,gt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gt(l),Bt(l,"style",h),Uc(l,a.precedence,t),r.instance=l;case"stylesheet":h=uo(a.href);var d=t.querySelector(Vl(h));if(d)return r.state.loading|=4,r.instance=d,gt(d),d;l=pv(a),(h=Vn.get(h))&&am(l,h),d=(t.ownerDocument||t).createElement("link"),gt(d);var v=d;return v._p=new Promise(function(S,C){v.onload=S,v.onerror=C}),Bt(d,"link",l),r.state.loading|=4,Uc(d,a.precedence,t),r.instance=d;case"script":return d=co(a.src),(h=t.querySelector(kl(d)))?(r.instance=h,gt(h),h):(l=a,(h=Vn.get(d))&&(l=E({},a),om(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),gt(h),Bt(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Uc(l,a.precedence,t));return r.instance}function Uc(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var S=l[v];if(S.dataset.precedence===r)d=S;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function am(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function om(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var jc=null;function yv(t,r,a){if(jc===null){var l=new Map,h=jc=new Map;h.set(a,l)}else h=jc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[Er]||d[pt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=t+v;var S=l.get(v);S?S.push(d):l.set(v,[d])}}return l}function _v(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function Tw(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function vv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ll=null;function Sw(){}function Aw(t,r,a){if(Ll===null)throw Error(s(475));var l=Ll;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=uo(a.href),d=t.querySelector(Vl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=zc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,gt(d);return}d=t.ownerDocument||t,a=pv(a),(h=Vn.get(h))&&am(a,h),d=d.createElement("link"),gt(d);var v=d;v._p=new Promise(function(S,C){v.onload=S,v.onerror=C}),Bt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=zc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function ww(){if(Ll===null)throw Error(s(475));var t=Ll;return t.stylesheets&&t.count===0&&lm(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&lm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function zc(){if(this.count--,this.count===0){if(this.stylesheets)lm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bc=null;function lm(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bc=new Map,r.forEach(bw,t),Bc=null,zc.call(t))}function bw(t,r){if(!(r.state.loading&4)){var a=Bc.get(t);if(a)var l=a.get(null);else{a=new Map,Bc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=r.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=zc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var Ul={$$typeof:re,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function Rw(t,r,a,l,h,d,v,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.hiddenUpdates=wa(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Ev(t,r,a,l,h,d,v,S,C,q,W,ne){return t=new Rw(t,r,a,v,S,C,q,ne),r=1,d===!0&&(r|=24),d=gn(3,null,null,r),t.current=d,d.stateNode=t,r=Hf(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},$f(d),t}function Tv(t){return t?(t=Ba,t):Ba}function Sv(t,r,a,l,h,d){h=Tv(h),l.context===null?l.context=h:l.pendingContext=h,l=Mr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Pr(t,l,r),a!==null&&(Tn(a,t,r),ml(a,t,r))}function Av(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function um(t,r){Av(t,r),(t=t.alternate)&&Av(t,r)}function wv(t){if(t.tag===13){var r=za(t,67108864);r!==null&&Tn(r,t,67108864),um(t,67108864)}}var qc=!0;function Iw(t,r,a,l){var h=X.T;X.T=null;var d=ce.p;try{ce.p=2,cm(t,r,a,l)}finally{ce.p=d,X.T=h}}function Cw(t,r,a,l){var h=X.T;X.T=null;var d=ce.p;try{ce.p=8,cm(t,r,a,l)}finally{ce.p=d,X.T=h}}function cm(t,r,a,l){if(qc){var h=hm(l);if(h===null)Wd(t,r,l,Hc,a),Rv(t,l);else if(Nw(h,t,r,a,l))l.stopPropagation();else if(Rv(t,l),r&4&&-1<Dw.indexOf(t)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=qn(d.pendingLanes);if(v!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var C=1<<31-Jt(v);S.entanglements[1]|=C,v&=~C}Ei(d),(Ke&6)===0&&(Rc=sn()+500,Ol(0))}}break;case 13:S=za(d,2),S!==null&&Tn(S,d,2),Cc(),um(d,2)}if(d=hm(l),d===null&&Wd(t,r,l,Hc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Wd(t,r,l,null,a)}}function hm(t){return t=Qo(t),fm(t)}var Hc=null;function fm(t){if(Hc=null,t=ui(t),t!==null){var r=u(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=f(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Hc=t,null}function bv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nu()){case bt:return 2;case Mt:return 8;case Vi:case yf:return 32;case jo:return 268435456;default:return 32}default:return 32}}var dm=!1,Kr=null,$r=null,Yr=null,jl=new Map,zl=new Map,Qr=[],Dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rv(t,r){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":jl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(r.pointerId)}}function Bl(t,r,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&wv(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function Nw(t,r,a,l,h){switch(r){case"focusin":return Kr=Bl(Kr,t,r,a,l,h),!0;case"dragenter":return $r=Bl($r,t,r,a,l,h),!0;case"mouseover":return Yr=Bl(Yr,t,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return jl.set(d,Bl(jl.get(d)||null,t,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,zl.set(d,Bl(zl.get(d)||null,t,r,a,l,h)),!0}return!1}function Iv(t){var r=ui(t.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){t.blockedOn=r,Ef(t.priority,function(){if(a.tag===13){var l=En();l=Bo(l);var h=za(a,l);h!==null&&Tn(h,a,l),um(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=hm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Yo=l,a.target.dispatchEvent(l),Yo=null}else return r=ci(a),r!==null&&wv(r),t.blockedOn=a,!1;r.shift()}return!0}function Cv(t,r,a){Fc(t)&&a.delete(r)}function Ow(){dm=!1,Kr!==null&&Fc(Kr)&&(Kr=null),$r!==null&&Fc($r)&&($r=null),Yr!==null&&Fc(Yr)&&(Yr=null),jl.forEach(Cv),zl.forEach(Cv)}function Gc(t,r){t.blockedOn===r&&(t.blockedOn=null,dm||(dm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ow)))}var Kc=null;function Dv(t){Kc!==t&&(Kc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Kc===t&&(Kc=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(fm(l||a)===null)continue;break}var d=ci(a);d!==null&&(t.splice(r,3),r-=3,fd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function ql(t){function r(C){return Gc(C,t)}Kr!==null&&Gc(Kr,t),$r!==null&&Gc($r,t),Yr!==null&&Gc(Yr,t),jl.forEach(r),zl.forEach(r);for(var a=0;a<Qr.length;a++){var l=Qr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Qr.length&&(a=Qr[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&Qr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Ut]||null;if(typeof d=="function")v||Dv(a);else if(v){var S=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Ut]||null)S=v.formAction;else if(fm(h)!==null)continue}else S=v.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),Dv(a)}}}function mm(t){this._internalRoot=t}$c.prototype.render=mm.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=En();Sv(a,l,t,r,null,null)},$c.prototype.unmount=mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Sv(t.current,2,null,t,null,null),Cc(),r[Li]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var r=ki();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Qr.length&&r!==0&&r<Qr[a].priority;a++);Qr.splice(a,0,t),a===0&&Iv(t)}};var Nv=e.version;if(Nv!=="19.1.1")throw Error(s(527,Nv,"19.1.1"));ce.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(r),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Mw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{mr=Yc.inject(Mw),Gt=Yc}catch{}}return Fl.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",h=Ky,d=$y,v=Yy,S=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=Ev(t,1,!1,null,null,a,l,h,d,v,S,null),t[Li]=r.current,Xd(t),new mm(r)},Fl.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Ky,v=$y,S=Yy,C=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),r=Ev(t,1,!0,r,a??null,l,h,d,v,S,C,q),r.context=Tv(null),a=r.current,l=En(),l=Bo(l),h=Mr(l),h.callback=null,Pr(a,h,l),a=l,r.current.lanes=a,mt(r,a),Ei(r),t[Li]=r.current,Xd(t),new $c(r)},Fl.version="19.1.1",Fl}var zv;function Hw(){if(zv)return ym.exports;zv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ym.exports=qw(),ym.exports}var Fw=Hw();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bv="popstate";function Gw(i={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return zm("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:su(o)}return $w(e,n,null,i)}function ot(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function ii(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kw(){return Math.random().toString(36).substring(2,10)}function qv(i,e){return{usr:i.state,key:i.key,idx:e}}function zm(i,e,n=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Do(e):e,state:n,key:e&&e.key||s||Kw()}}function su({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function Do(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function $w(i,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,g=E();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function E(){return(f.state||{idx:null}).idx}function A(){m="POP";let B=E(),Q=B==null?null:B-g;g=B,p&&p({action:m,location:J.location,delta:Q})}function R(B,Q){m="PUSH";let Y=zm(J.location,B,Q);g=E()+1;let re=qv(Y,g),fe=J.createHref(Y);try{f.pushState(re,"",fe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;o.location.assign(fe)}u&&p&&p({action:m,location:J.location,delta:1})}function k(B,Q){m="REPLACE";let Y=zm(J.location,B,Q);g=E();let re=qv(Y,g),fe=J.createHref(Y);f.replaceState(re,"",fe),u&&p&&p({action:m,location:J.location,delta:0})}function $(B){return Yw(B)}let J={get action(){return m},get location(){return i(o,f)},listen(B){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Bv,A),p=B,()=>{o.removeEventListener(Bv,A),p=null}},createHref(B){return e(o,B)},createURL:$,encodeLocation(B){let Q=$(B);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:R,replace:k,go(B){return f.go(B)}};return J}function Yw(i,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:su(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function zT(i,e,n="/"){return Qw(i,e,n,!1)}function Qw(i,e,n,s){let o=typeof e=="string"?Do(e):e,u=lr(o.pathname||"/",n);if(u==null)return null;let f=BT(i);Xw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=ob(u);m=sb(f[p],g,s)}return m}function BT(i,e=[],n=[],s="",o=!1){let u=(f,m,p=o,g)=>{let E={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(s)&&p)return;ot(E.relativePath.startsWith(s),`Absolute route path "${E.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(s.length)}let A=sr([s,E.relativePath]),R=n.concat(E);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),BT(f.children,e,R,A,p)),!(f.path==null&&!f.index)&&e.push({path:A,score:ib(A,f.index),routesMeta:R})};return i.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))u(f,m);else for(let p of qT(f.path))u(f,m,!0,p)}),e}function qT(i){let e=i.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=qT(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function Xw(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:rb(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Ww=/^:[\w-]+$/,Zw=3,Jw=2,eb=1,tb=10,nb=-2,Hv=i=>i==="*";function ib(i,e){let n=i.split("/"),s=n.length;return n.some(Hv)&&(s+=nb),e&&(s+=Jw),n.filter(o=>!Hv(o)).reduce((o,u)=>o+(Ww.test(u)?Zw:u===""?eb:tb),s)}function rb(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function sb(i,e,n=!1){let{routesMeta:s}=i,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",A=gh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),R=p.route;if(!A&&g&&n&&!s[s.length-1].route.index&&(A=gh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),f.push({params:o,pathname:sr([u,A.pathname]),pathnameBase:hb(sr([u,A.pathnameBase])),route:R}),A.pathnameBase!=="/"&&(u=sr([u,A.pathnameBase]))}return f}function gh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,s]=ab(i.path,i.caseSensitive,i.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:A},R)=>{if(E==="*"){let $=m[R]||"";f=u.slice(0,u.length-$.length).replace(/(.)\/+$/,"$1")}const k=m[R];return A&&!k?g[E]=void 0:g[E]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:i}}function ab(i,e=!1,n=!0){ii(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function ob(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ii(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function lr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=i.charAt(n);return s&&s!=="/"?null:i.slice(n)||"/"}function lb(i,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof i=="string"?Do(i):i;return{pathname:n?n.startsWith("/")?n:ub(n,e):e,search:fb(s),hash:db(o)}}function ub(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tm(i,e,n,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cb(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mp(i){let e=cb(i);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function pp(i,e,n,s=!1){let o;typeof i=="string"?o=Do(i):(o={...i},ot(!o.pathname||!o.pathname.includes("?"),Tm("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),Tm("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),Tm("#","search","hash",o)));let u=i===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let A=e.length-1;if(!s&&f.startsWith("..")){let R=f.split("/");for(;R[0]==="..";)R.shift(),A-=1;o.pathname=R.join("/")}m=A>=0?e[A]:"/"}let p=lb(o,m),g=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var sr=i=>i.join("/").replace(/\/\/+/g,"/"),hb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),fb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,db=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function mb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var HT=["POST","PUT","PATCH","DELETE"];new Set(HT);var pb=["GET",...HT];new Set(pb);var No=G.createContext(null);No.displayName="DataRouter";var Gh=G.createContext(null);Gh.displayName="DataRouterState";G.createContext(!1);var FT=G.createContext({isTransitioning:!1});FT.displayName="ViewTransition";var gb=G.createContext(new Map);gb.displayName="Fetchers";var yb=G.createContext(null);yb.displayName="Await";var si=G.createContext(null);si.displayName="Navigation";var yu=G.createContext(null);yu.displayName="Location";var Mi=G.createContext({outlet:null,matches:[],isDataRoute:!1});Mi.displayName="Route";var gp=G.createContext(null);gp.displayName="RouteError";function _b(i,{relative:e}={}){ot(Oo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=G.useContext(si),{hash:o,pathname:u,search:f}=_u(i,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:sr([n,u])),s.createHref({pathname:m,search:f,hash:o})}function Oo(){return G.useContext(yu)!=null}function dr(){return ot(Oo(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(yu).location}var GT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function KT(i){G.useContext(si).static||G.useLayoutEffect(i)}function Mo(){let{isDataRoute:i}=G.useContext(Mi);return i?Ob():vb()}function vb(){ot(Oo(),"useNavigate() may be used only in the context of a <Router> component.");let i=G.useContext(No),{basename:e,navigator:n}=G.useContext(si),{matches:s}=G.useContext(Mi),{pathname:o}=dr(),u=JSON.stringify(mp(s)),f=G.useRef(!1);return KT(()=>{f.current=!0}),G.useCallback((p,g={})=>{if(ii(f.current,GT),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=pp(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:sr([e,E.pathname])),(g.replace?n.replace:n.push)(E,g.state,g)},[e,n,u,o,i])}G.createContext(null);function _u(i,{relative:e}={}){let{matches:n}=G.useContext(Mi),{pathname:s}=dr(),o=JSON.stringify(mp(n));return G.useMemo(()=>pp(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function Eb(i,e){return $T(i,e)}function $T(i,e,n,s,o){ot(Oo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=G.useContext(si),{matches:f}=G.useContext(Mi),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",E=m?m.pathnameBase:"/",A=m&&m.route;{let Y=A&&A.path||"";YT(g,!A||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let R=dr(),k;if(e){let Y=typeof e=="string"?Do(e):e;ot(E==="/"||Y.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),k=Y}else k=R;let $=k.pathname||"/",J=$;if(E!=="/"){let Y=E.replace(/^\//,"").split("/");J="/"+$.replace(/^\//,"").split("/").slice(Y.length).join("/")}let B=zT(i,{pathname:J});ii(A||B!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),ii(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=bb(B&&B.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:sr([E,u.encodeLocation?u.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?E:sr([E,u.encodeLocation?u.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),f,n,s,o);return e&&Q?G.createElement(yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},Q):Q}function Tb(){let i=Nb(),e=mb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:u},"ErrorBoundary")," or"," ",G.createElement("code",{style:u},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),n?G.createElement("pre",{style:o},n):null,f)}var Sb=G.createElement(Tb,null),Ab=class extends G.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.unstable_onError?this.props.unstable_onError(i,e):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?G.createElement(Mi.Provider,{value:this.props.routeContext},G.createElement(gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wb({routeContext:i,match:e,children:n}){let s=G.useContext(No);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Mi.Provider,{value:i},n)}function bb(i,e=[],n=null,s=null,o=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let u=i,f=n?.errors;if(f!=null){let g=u.findIndex(E=>E.route.id&&f?.[E.route.id]!==void 0);ot(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(n)for(let g=0;g<u.length;g++){let E=u[g];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(p=g),E.route.id){let{loaderData:A,errors:R}=n,k=E.route.loader&&!A.hasOwnProperty(E.route.id)&&(!R||R[E.route.id]===void 0);if(E.route.lazy||k){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,E,A)=>{let R,k=!1,$=null,J=null;n&&(R=f&&E.route.id?f[E.route.id]:void 0,$=E.route.errorElement||Sb,m&&(p<0&&A===0?(YT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,J=null):p===A&&(k=!0,J=E.route.hydrateFallbackElement||null)));let B=e.concat(u.slice(0,A+1)),Q=()=>{let Y;return R?Y=$:k?Y=J:E.route.Component?Y=G.createElement(E.route.Component,null):E.route.element?Y=E.route.element:Y=g,G.createElement(wb,{match:E,routeContext:{outlet:g,matches:B,isDataRoute:n!=null},children:Y})};return n&&(E.route.ErrorBoundary||E.route.errorElement||A===0)?G.createElement(Ab,{location:n.location,revalidation:n.revalidation,component:$,error:R,children:Q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:s}):Q()},null)}function yp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rb(i){let e=G.useContext(No);return ot(e,yp(i)),e}function Ib(i){let e=G.useContext(Gh);return ot(e,yp(i)),e}function Cb(i){let e=G.useContext(Mi);return ot(e,yp(i)),e}function _p(i){let e=Cb(i),n=e.matches[e.matches.length-1];return ot(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function Db(){return _p("useRouteId")}function Nb(){let i=G.useContext(gp),e=Ib("useRouteError"),n=_p("useRouteError");return i!==void 0?i:e.errors?.[n]}function Ob(){let{router:i}=Rb("useNavigate"),e=_p("useNavigate"),n=G.useRef(!1);return KT(()=>{n.current=!0}),G.useCallback(async(o,u={})=>{ii(n.current,GT),n.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var Fv={};function YT(i,e,n){!e&&!Fv[i]&&(Fv[i]=!0,ii(!1,n))}G.memo(Mb);function Mb({routes:i,future:e,state:n,unstable_onError:s}){return $T(i,void 0,n,s,e)}function Pb({to:i,replace:e,state:n,relative:s}){ot(Oo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=G.useContext(si);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=G.useContext(Mi),{pathname:f}=dr(),m=Mo(),p=pp(i,mp(u),f,s==="path"),g=JSON.stringify(p);return G.useEffect(()=>{m(JSON.parse(g),{replace:e,state:n,relative:s})},[m,g,s,e,n]),null}function Ti(i){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xb({basename:i="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){ot(!Oo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),m=G.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=Do(n));let{pathname:p="/",search:g="",hash:E="",state:A=null,key:R="default"}=n,k=G.useMemo(()=>{let $=lr(p,f);return $==null?null:{location:{pathname:$,search:g,hash:E,state:A,key:R},navigationType:s}},[f,p,g,E,A,R,s]);return ii(k!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:G.createElement(si.Provider,{value:m},G.createElement(yu.Provider,{children:e,value:k}))}function Vb({children:i,location:e}){return Eb(Bm(i),e)}function Bm(i,e=[]){let n=[];return G.Children.forEach(i,(s,o)=>{if(!G.isValidElement(s))return;let u=[...e,o];if(s.type===G.Fragment){n.push.apply(n,Bm(s.props.children,u));return}ot(s.type===Ti,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Bm(s.props.children,u)),n.push(f)}),n}var ih="get",rh="application/x-www-form-urlencoded";function Kh(i){return i!=null&&typeof i.tagName=="string"}function kb(i){return Kh(i)&&i.tagName.toLowerCase()==="button"}function Lb(i){return Kh(i)&&i.tagName.toLowerCase()==="form"}function Ub(i){return Kh(i)&&i.tagName.toLowerCase()==="input"}function jb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function zb(i,e){return i.button===0&&(!e||e==="_self")&&!jb(i)}var Qc=null;function Bb(){if(Qc===null)try{new FormData(document.createElement("form"),0),Qc=!1}catch{Qc=!0}return Qc}var qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sm(i){return i!=null&&!qb.has(i)?(ii(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rh}"`),null):i}function Hb(i,e){let n,s,o,u,f;if(Lb(i)){let m=i.getAttribute("action");s=m?lr(m,e):null,n=i.getAttribute("method")||ih,o=Sm(i.getAttribute("enctype"))||rh,u=new FormData(i)}else if(kb(i)||Ub(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(s=p?lr(p,e):null,n=i.getAttribute("formmethod")||m.getAttribute("method")||ih,o=Sm(i.getAttribute("formenctype"))||Sm(m.getAttribute("enctype"))||rh,u=new FormData(m,i),!Bb()){let{name:g,type:E,value:A}=i;if(E==="image"){let R=g?`${g}.`:"";u.append(`${R}x`,"0"),u.append(`${R}y`,"0")}else g&&u.append(g,A)}}else{if(Kh(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ih,s=null,o=rh,f=i}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Fb(i,e,n){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&lr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Gb(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function $b(i,e,n){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await Gb(u,n);return f.links?f.links():[]}return[]}));return Wb(s.flat(1).filter(Kb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Gv(i,e,n,s,o,u){let f=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,m=(p,g)=>n[g].pathname!==p.pathname||n[g].route.path?.endsWith("*")&&n[g].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let A=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function Yb(i,e,{includeHydrateFallback:n}={}){return Qb(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Qb(i){return[...new Set(i)]}function Xb(i){let e={},n=Object.keys(i).sort();for(let s of n)e[s]=i[s];return e}function Wb(i,e){let n=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(Xb(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function QT(){let i=G.useContext(No);return vp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Zb(){let i=G.useContext(Gh);return vp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ep=G.createContext(void 0);Ep.displayName="FrameworkContext";function XT(){let i=G.useContext(Ep);return vp(i,"You must render this element inside a <HydratedRouter> element"),i}function Jb(i,e){let n=G.useContext(Ep),[s,o]=G.useState(!1),[u,f]=G.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:A}=e,R=G.useRef(null);G.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let J=Q=>{Q.forEach(Y=>{f(Y.isIntersecting)})},B=new IntersectionObserver(J,{threshold:.5});return R.current&&B.observe(R.current),()=>{B.disconnect()}}},[i]),G.useEffect(()=>{if(s){let J=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(J)}}},[s]);let k=()=>{o(!0)},$=()=>{o(!1),f(!1)};return n?i!=="intent"?[u,R,{}]:[u,R,{onFocus:Gl(m,k),onBlur:Gl(p,$),onMouseEnter:Gl(g,k),onMouseLeave:Gl(E,$),onTouchStart:Gl(A,k)}]:[!1,R,{}]}function Gl(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function eR({page:i,...e}){let{router:n}=QT(),s=G.useMemo(()=>zT(n.routes,i,n.basename),[n.routes,i,n.basename]);return s?G.createElement(nR,{page:i,matches:s,...e}):null}function tR(i){let{manifest:e,routeModules:n}=XT(),[s,o]=G.useState([]);return G.useEffect(()=>{let u=!1;return $b(i,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[i,e,n]),s}function nR({page:i,matches:e,...n}){let s=dr(),{manifest:o,routeModules:u}=XT(),{basename:f}=QT(),{loaderData:m,matches:p}=Zb(),g=G.useMemo(()=>Gv(i,e,p,o,s,"data"),[i,e,p,o,s]),E=G.useMemo(()=>Gv(i,e,p,o,s,"assets"),[i,e,p,o,s]),A=G.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let $=new Set,J=!1;if(e.forEach(Q=>{let Y=o.routes[Q.route.id];!Y||!Y.hasLoader||(!g.some(re=>re.route.id===Q.route.id)&&Q.route.id in m&&u[Q.route.id]?.shouldRevalidate||Y.hasClientLoader?J=!0:$.add(Q.route.id))}),$.size===0)return[];let B=Fb(i,f,"data");return J&&$.size>0&&B.searchParams.set("_routes",e.filter(Q=>$.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[B.pathname+B.search]},[f,m,s,o,g,e,i,u]),R=G.useMemo(()=>Yb(E,o),[E,o]),k=tR(E);return G.createElement(G.Fragment,null,A.map($=>G.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...n})),R.map($=>G.createElement("link",{key:$,rel:"modulepreload",href:$,...n})),k.map(({key:$,link:J})=>G.createElement("link",{key:$,nonce:n.nonce,...J})))}function iR(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var WT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{WT&&(window.__reactRouterVersion="7.8.2")}catch{}function rR({basename:i,children:e,window:n}){let s=G.useRef();s.current==null&&(s.current=Gw({window:n,v5Compat:!0}));let o=s.current,[u,f]=G.useState({action:o.action,location:o.location}),m=G.useCallback(p=>{G.startTransition(()=>f(p))},[f]);return G.useLayoutEffect(()=>o.listen(m),[o,m]),G.createElement(xb,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var ZT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nr=G.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:E,viewTransition:A,...R},k){let{basename:$}=G.useContext(si),J=typeof g=="string"&&ZT.test(g),B,Q=!1;if(typeof g=="string"&&J&&(B=g,WT))try{let I=new URL(window.location.href),x=g.startsWith("//")?new URL(I.protocol+g):new URL(g),M=lr(x.pathname,$);x.origin===I.origin&&M!=null?g=M+x.search+x.hash:Q=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=_b(g,{relative:o}),[re,fe,ae]=Jb(s,R),pe=lR(g,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:A});function N(I){e&&e(I),I.defaultPrevented||pe(I)}let b=G.createElement("a",{...R,...ae,href:B||Y,onClick:Q||u?e:N,ref:iR(k,fe),target:p,"data-discover":!J&&n==="render"?"true":void 0});return re&&!J?G.createElement(G.Fragment,null,b,G.createElement(eR,{page:Y})):b});nr.displayName="Link";var sR=G.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},E){let A=_u(f,{relative:g.relative}),R=dr(),k=G.useContext(Gh),{navigator:$,basename:J}=G.useContext(si),B=k!=null&&dR(A)&&m===!0,Q=$.encodeLocation?$.encodeLocation(A).pathname:A.pathname,Y=R.pathname,re=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(Y=Y.toLowerCase(),re=re?re.toLowerCase():null,Q=Q.toLowerCase()),re&&J&&(re=lr(re,J)||re);const fe=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ae=Y===Q||!o&&Y.startsWith(Q)&&Y.charAt(fe)==="/",pe=re!=null&&(re===Q||!o&&re.startsWith(Q)&&re.charAt(Q.length)==="/"),N={isActive:ae,isPending:pe,isTransitioning:B},b=ae?e:void 0,I;typeof s=="function"?I=s(N):I=[s,ae?"active":null,pe?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let x=typeof u=="function"?u(N):u;return G.createElement(nr,{...g,"aria-current":b,className:I,ref:E,style:x,to:f,viewTransition:m},typeof p=="function"?p(N):p)});sR.displayName="NavLink";var aR=G.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=ih,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:A,...R},k)=>{let $=hR(),J=fR(m,{relative:g}),B=f.toLowerCase()==="get"?"get":"post",Q=typeof m=="string"&&ZT.test(m),Y=re=>{if(p&&p(re),re.defaultPrevented)return;re.preventDefault();let fe=re.nativeEvent.submitter,ae=fe?.getAttribute("formmethod")||f;$(fe||re.currentTarget,{fetcherKey:e,method:ae,navigate:n,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:A})};return G.createElement("form",{ref:k,method:B,action:J,onSubmit:s?p:Y,...R,"data-discover":!Q&&i==="render"?"true":void 0})});aR.displayName="Form";function oR(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JT(i){let e=G.useContext(No);return ot(e,oR(i)),e}function lR(i,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=Mo(),p=dr(),g=_u(i,{relative:u});return G.useCallback(E=>{if(zb(E,e)){E.preventDefault();let A=n!==void 0?n:su(p)===su(g);m(i,{replace:A,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,n,s,e,i,o,u,f])}var uR=0,cR=()=>`__${String(++uR)}__`;function hR(){let{router:i}=JT("useSubmit"),{basename:e}=G.useContext(si),n=Db();return G.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=Hb(s,e);if(o.navigate===!1){let E=o.fetcherKey||cR();await i.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,n])}function fR(i,{relative:e}={}){let{basename:n}=G.useContext(si),s=G.useContext(Mi);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={..._u(i||".",{relative:e})},f=dr();if(i==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(A=>A).forEach(A=>m.append("index",A));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:sr([n,u.pathname])),su(u)}function dR(i,{relative:e}={}){let n=G.useContext(FT);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=JT("useViewTransitionState"),o=_u(i,{relative:e});if(!n.isTransitioning)return!1;let u=lr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=lr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return gh(o.pathname,f)!=null||gh(o.pathname,u)!=null}const mR=()=>{};var Kv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},pR=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],f=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let R=(m&15)<<2|g>>6,k=g&63;p||(k=64,f||(R=64)),s.push(n[E],n[A],n[R],n[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(e0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):pR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const g=o<i.length?n[i.charAt(o)]:64;++o;const A=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||A==null)throw new gR;const R=u<<2|m>>4;if(s.push(R),g!==64){const k=m<<4&240|g>>2;if(s.push(k),A!==64){const $=g<<6&192|A;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class gR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yR=function(i){const e=e0(i);return t0.encodeByteArray(e,!0)},yh=function(i){return yR(i).replace(/\./g,"")},n0=function(i){try{return t0.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=()=>_R().__FIREBASE_DEFAULTS__,ER=()=>{if(typeof process>"u"||typeof Kv>"u")return;const i=Kv.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},TR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&n0(i[1]);return e&&JSON.parse(e)},$h=()=>{try{return mR()||vR()||ER()||TR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},i0=i=>$h()?.emulatorHosts?.[i],r0=i=>{const e=i0(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},s0=()=>$h()?.config,a0=i=>$h()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tp(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[yh(JSON.stringify(n)),yh(JSON.stringify(f)),""].join(".")}const Zl={};function AR(){const i={prod:[],emulator:[]};for(const e of Object.keys(Zl))Zl[e]?i.emulator.push(e):i.prod.push(e);return i}function wR(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let $v=!1;function Sp(i,e){if(typeof window>"u"||typeof document>"u"||!fa(window.location.host)||Zl[i]===e||Zl[i]||$v)return;Zl[i]=e;function n(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=AR().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,k){R.setAttribute("width","24"),R.setAttribute("id",k),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function g(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{$v=!0,f()},R}function E(R,k){R.setAttribute("id",k),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=wR(s),k=n("text"),$=document.getElementById(k)||document.createElement("span"),J=n("learnmore"),B=document.getElementById(J)||document.createElement("a"),Q=n("preprendIcon"),Y=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const re=R.element;m(re),E(B,J);const fe=g();p(Y,Q),re.append(Y,$,B,fe),document.body.appendChild(re)}u?($.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function RR(){const i=$h()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function l0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function CR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const i=Zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function NR(){return!RR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function u0(){try{return typeof indexedDB=="object"}catch{return!1}}function c0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}function OR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="FirebaseError";class zn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=MR,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?PR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new zn(o,m,s)}}function PR(i,e){return i.replace(xR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const xR=/\{\$([^}]+)}/g;function VR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ls(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(Yv(u)&&Yv(f)){if(!ls(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Yv(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function $l(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function kR(i,e){const n=new LR(i,e);return n.subscribe.bind(n)}class LR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");UR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Am),o.error===void 0&&(o.error=Am),o.complete===void 0&&(o.complete=Am);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UR(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Am(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,zR=2,BR=14400*1e3,qR=.5;function Qv(i,e=jR,n=zR){const s=e*Math.pow(n,i),o=Math.round(qR*s*(Math.random()-.5)*2);return Math.min(BR,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(i){return i&&i._delegate?i._delegate:i}class jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new SR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FR(i){return i===Js?void 0:i}function GR(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const $R={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},YR=Ve.INFO,QR={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},XR=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=QR[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=YR,this._logHandler=XR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const WR=(i,e)=>e.some(n=>i instanceof n);let Xv,Wv;function ZR(){return Xv||(Xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JR(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,qm=new WeakMap,f0=new WeakMap,wm=new WeakMap,Ap=new WeakMap;function eI(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(ns(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&h0.set(n,i)}).catch(()=>{}),Ap.set(e,i),e}function tI(i){if(qm.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});qm.set(i,e)}let Hm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return qm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||f0.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function nI(i){Hm=i(Hm)}function iI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(bm(this),e,...n);return f0.set(s,e.sort?e.sort():[e]),ns(s)}:JR().includes(i)?function(...e){return i.apply(bm(this),e),ns(h0.get(this))}:function(...e){return ns(i.apply(bm(this),e))}}function rI(i){return typeof i=="function"?iI(i):(i instanceof IDBTransaction&&tI(i),WR(i,ZR())?new Proxy(i,Hm):i)}function ns(i){if(i instanceof IDBRequest)return eI(i);if(wm.has(i))return wm.get(i);const e=rI(i);return e!==i&&(wm.set(i,e),Ap.set(e,i)),e}const bm=i=>Ap.get(i);function d0(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=ns(f);return s&&f.addEventListener("upgradeneeded",p=>{s(ns(f.result),p.oldVersion,p.newVersion,ns(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const sI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],Rm=new Map;function Zv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Rm.get(e))return Rm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=aI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sI.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[n](...m),o&&p.done]))[0]};return Rm.set(e,u),u}nI(i=>({...i,get:(e,n,s)=>Zv(e,n)||i.get(e,n,s),has:(e,n)=>!!Zv(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lI(i){return i.getComponent()?.type==="VERSION"}const Fm="@firebase/app",Jv="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Yh("@firebase/app"),uI="@firebase/app-compat",cI="@firebase/analytics-compat",hI="@firebase/analytics",fI="@firebase/app-check-compat",dI="@firebase/app-check",mI="@firebase/auth",pI="@firebase/auth-compat",gI="@firebase/database",yI="@firebase/data-connect",_I="@firebase/database-compat",vI="@firebase/functions",EI="@firebase/functions-compat",TI="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",wI="@firebase/messaging-compat",bI="@firebase/performance",RI="@firebase/performance-compat",II="@firebase/remote-config",CI="@firebase/remote-config-compat",DI="@firebase/storage",NI="@firebase/storage-compat",OI="@firebase/firestore",MI="@firebase/ai",PI="@firebase/firestore-compat",xI="firebase",VI="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="[DEFAULT]",kI={[Fm]:"fire-core",[uI]:"fire-core-compat",[hI]:"fire-analytics",[cI]:"fire-analytics-compat",[dI]:"fire-app-check",[fI]:"fire-app-check-compat",[mI]:"fire-auth",[pI]:"fire-auth-compat",[gI]:"fire-rtdb",[yI]:"fire-data-connect",[_I]:"fire-rtdb-compat",[vI]:"fire-fn",[EI]:"fire-fn-compat",[TI]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[wI]:"fire-fcm-compat",[bI]:"fire-perf",[RI]:"fire-perf-compat",[II]:"fire-rc",[CI]:"fire-rc-compat",[DI]:"fire-gcs",[NI]:"fire-gcs-compat",[OI]:"fire-fst",[PI]:"fire-fst-compat",[MI]:"fire-vertex","fire-js":"fire-js",[xI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map,LI=new Map,Km=new Map;function eE(i,e){try{i.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ri(i){const e=i.name;if(Km.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,i);for(const n of _h.values())eE(n,i);for(const n of LI.values())eE(n,i);return!0}function ps(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function cn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new da("app","Firebase",UI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=VI;function m0(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:Gm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw is.create("bad-app-name",{appName:String(o)});if(n||(n=s0()),!n)throw is.create("no-options");const u=_h.get(o);if(u){if(ls(n,u.options)&&ls(s,u.config))return u;throw is.create("duplicate-app",{appName:o})}const f=new KR(o);for(const p of Km.values())f.addComponent(p);const m=new jI(n,s,f);return _h.set(o,m),m}function Qh(i=Gm){const e=_h.get(i);if(!e&&i===Gm&&s0())return m0();if(!e)throw is.create("no-app",{appName:i});return e}function hn(i,e,n){let s=kI[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(f.join(" "));return}ri(new jn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="firebase-heartbeat-database",BI=1,au="firebase-heartbeat-store";let Im=null;function p0(){return Im||(Im=d0(zI,BI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(au)}catch(n){console.warn(n)}}}}).catch(i=>{throw is.create("idb-open",{originalErrorMessage:i.message})})),Im}async function qI(i){try{const n=(await p0()).transaction(au),s=await n.objectStore(au).get(g0(i));return await n.done,s}catch(e){if(e instanceof zn)ur.warn(e.message);else{const n=is.create("idb-get",{originalErrorMessage:e?.message});ur.warn(n.message)}}}async function tE(i,e){try{const s=(await p0()).transaction(au,"readwrite");await s.objectStore(au).put(e,g0(i)),await s.done}catch(n){if(n instanceof zn)ur.warn(n.message);else{const s=is.create("idb-set",{originalErrorMessage:n?.message});ur.warn(s.message)}}}function g0(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1024,FI=30;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $I(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nE();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>FI){const o=YI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nE(),{heartbeatsToSend:n,unsentEntries:s}=KI(this._heartbeatsCache.heartbeats),o=yh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ur.warn(e),""}}}function nE(){return new Date().toISOString().substring(0,10)}function KI(i,e=HI){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),iE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),iE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u0()?c0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function iE(i){return yh(JSON.stringify({version:2,heartbeats:i})).length}function YI(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(i){ri(new jn("platform-logger",e=>new oI(e),"PRIVATE")),ri(new jn("heartbeat",e=>new GI(e),"PRIVATE")),hn(Fm,Jv,i),hn(Fm,Jv,"esm2020"),hn("fire-js","")}QI("");var XI="firebase",WI="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(XI,WI,"app");const y0="@firebase/installations",wp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=1e4,v0=`w:${wp}`,E0="FIS_v2",ZI="https://firebaseinstallations.googleapis.com/v1",JI=3600*1e3,eC="installations",tC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},aa=new da(eC,tC,nC);function T0(i){return i instanceof zn&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0({projectId:i}){return`${ZI}/projects/${i}/installations`}function A0(i){return{token:i.token,requestStatus:2,expiresIn:rC(i.expiresIn),creationTime:Date.now()}}async function w0(i,e){const s=(await e.json()).error;return aa.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function b0({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function iC(i,{refreshToken:e}){const n=b0(i);return n.append("Authorization",sC(e)),n}async function R0(i){const e=await i();return e.status>=500&&e.status<600?i():e}function rC(i){return Number(i.replace("s","000"))}function sC(i){return`${E0} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=S0(i),o=b0(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={fid:n,authVersion:E0,appId:i.appId,sdkVersion:v0},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await R0(()=>fetch(s,m));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:A0(g.authToken)}}else throw await w0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=/^[cdef][\w-]{21}$/,$m="";function uC(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=cC(i);return lC.test(n)?n:$m}catch{return $m}}function cC(i){return oC(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function D0(i,e){const n=Xh(i);N0(n,e),hC(n,e)}function N0(i,e){const n=C0.get(i);if(n)for(const s of n)s(e)}function hC(i,e){const n=fC();n&&n.postMessage({key:i,fid:e}),dC()}let ea=null;function fC(){return!ea&&"BroadcastChannel"in self&&(ea=new BroadcastChannel("[Firebase] FID Change"),ea.onmessage=i=>{N0(i.data.key,i.data.fid)}),ea}function dC(){C0.size===0&&ea&&(ea.close(),ea=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebase-installations-database",pC=1,oa="firebase-installations-store";let Cm=null;function bp(){return Cm||(Cm=d0(mC,pC,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(oa)}}})),Cm}async function vh(i,e){const n=Xh(i),o=(await bp()).transaction(oa,"readwrite"),u=o.objectStore(oa),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&D0(i,e.fid),e}async function O0(i){const e=Xh(i),s=(await bp()).transaction(oa,"readwrite");await s.objectStore(oa).delete(e),await s.done}async function Wh(i,e){const n=Xh(i),o=(await bp()).transaction(oa,"readwrite"),u=o.objectStore(oa),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&D0(i,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(i){let e;const n=await Wh(i.appConfig,s=>{const o=gC(s),u=yC(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===$m?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gC(i){const e=i||{fid:uC(),registrationStatus:0};return M0(e)}function yC(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(aa.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_C(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vC(i)}:{installationEntry:e}}async function _C(i,e){try{const n=await aC(i,e);return vh(i.appConfig,n)}catch(n){throw T0(n)&&n.customData.serverCode===409?await O0(i.appConfig):await vh(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vC(i){let e=await rE(i.appConfig);for(;e.registrationStatus===1;)await I0(100),e=await rE(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rp(i);return s||n}return e}function rE(i){return Wh(i,e=>{if(!e)throw aa.create("installation-not-found");return M0(e)})}function M0(i){return EC(i)?{fid:i.fid,registrationStatus:0}:i}function EC(i){return i.registrationStatus===1&&i.registrationTime+_0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC({appConfig:i,heartbeatServiceProvider:e},n){const s=SC(i,n),o=iC(i,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={installation:{sdkVersion:v0,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await R0(()=>fetch(s,m));if(p.ok){const g=await p.json();return A0(g)}else throw await w0("Generate Auth Token",p)}function SC(i,{fid:e}){return`${S0(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(i,e=!1){let n;const s=await Wh(i.appConfig,u=>{if(!P0(u))throw aa.create("not-registered");const f=u.authToken;if(!e&&bC(f))return u;if(f.requestStatus===1)return n=AC(i,e),u;{if(!navigator.onLine)throw aa.create("app-offline");const m=IC(u);return n=wC(i,m),m}});return n?await n:s.authToken}async function AC(i,e){let n=await sE(i.appConfig);for(;n.authToken.requestStatus===1;)await I0(100),n=await sE(i.appConfig);const s=n.authToken;return s.requestStatus===0?Ip(i,e):s}function sE(i){return Wh(i,e=>{if(!P0(e))throw aa.create("not-registered");const n=e.authToken;return CC(n)?{...e,authToken:{requestStatus:0}}:e})}async function wC(i,e){try{const n=await TC(i,e),s={...e,authToken:n};return await vh(i.appConfig,s),n}catch(n){if(T0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await O0(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await vh(i.appConfig,s)}throw n}}function P0(i){return i!==void 0&&i.registrationStatus===2}function bC(i){return i.requestStatus===2&&!RC(i)}function RC(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+JI}function IC(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function CC(i){return i.requestStatus===1&&i.requestTime+_0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(i){const e=i,{installationEntry:n,registrationPromise:s}=await Rp(e);return s?s.catch(console.error):Ip(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(i,e=!1){const n=i;return await OC(n),(await Ip(n,e)).token}async function OC(i){const{registrationPromise:e}=await Rp(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(i){if(!i||!i.options)throw Dm("App Configuration");if(!i.name)throw Dm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw Dm(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Dm(i){return aa.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="installations",PC="installations-internal",xC=i=>{const e=i.getProvider("app").getImmediate(),n=MC(e),s=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},VC=i=>{const e=i.getProvider("app").getImmediate(),n=ps(e,x0).getImmediate();return{getId:()=>DC(n),getToken:o=>NC(n,o)}};function kC(){ri(new jn(x0,xC,"PUBLIC")),ri(new jn(PC,VC,"PRIVATE"))}kC();hn(y0,wp);hn(y0,wp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="analytics",LC="firebase_id",UC="origin",jC=60*1e3,zC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Yh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new da("analytics","Analytics",BC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(i){if(!i.startsWith(Cp)){const e=Sn.create("invalid-gtag-resource",{gtagURL:i});return fn.warn(e.message),""}return i}function V0(i){return Promise.all(i.map(e=>e.catch(n=>n)))}function HC(i,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,e)),n}function FC(i,e){const n=HC("firebase-js-sdk-policy",{createScriptURL:qC}),s=document.createElement("script"),o=`${Cp}?l=${i}&id=${e}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function GC(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function KC(i,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await V0(n)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(m){fn.error(m)}i("config",o,u)}async function $C(i,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await V0(n);for(const p of f){const g=m.find(A=>A.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,o||{})}catch(u){fn.error(u)}}function YC(i,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await $C(i,e,n,m,p)}else if(u==="config"){const[m,p]=f;await KC(i,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;i("consent",m,p)}else if(u==="get"){const[m,p,g]=f;i("get",m,p,g)}else if(u==="set"){const[m]=f;i("set",m)}else i(u,...f)}catch(m){fn.error(m)}}return o}function QC(i,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=YC(u,i,e,n),{gtagCore:u,wrappedGtag:window[o]}}function XC(i){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cp)&&n.src.includes(i))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=30,ZC=1e3;class JC{constructor(e={},n=ZC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const k0=new JC;function e2(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function t2(i){const{appId:e,apiKey:n}=i,s={method:"GET",headers:e2(n)},o=zC.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function n2(i,e=k0,n){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw Sn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Sn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new s2;return setTimeout(async()=>{m.abort()},jC),L0({appId:s,apiKey:o,measurementId:u},f,m,e)}async function L0(i,{throttleEndTimeMillis:e,backoffCount:n},s,o=k0){const{appId:u,measurementId:f}=i;try{await i2(s,e)}catch(m){if(f)return fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await t2(i);return o.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!r2(p)){if(o.deleteThrottleMetadata(u),f)return fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:f};throw m}const g=Number(p?.customData?.httpStatus)===503?Qv(n,o.intervalMillis,WC):Qv(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+g,backoffCount:n+1};return o.setThrottleMetadata(u,E),fn.debug(`Calling attemptFetch again in ${g} millis`),L0(i,E,s,o)}}function i2(i,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);i.addEventListener(()=>{clearTimeout(u),s(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function r2(i){if(!(i instanceof zn)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class s2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function a2(i,e,n,s,o){if(o&&o.global){i("event",n,s);return}else{const u=await e,f={...s,send_to:u};i("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(){if(u0())try{await c0()}catch(i){return fn.warn(Sn.create("indexeddb-unavailable",{errorInfo:i?.toString()}).message),!1}else return fn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function l2(i,e,n,s,o,u,f){const m=n2(i);m.then(R=>{n[R.measurementId]=R.appId,i.options.measurementId&&R.measurementId!==i.options.measurementId&&fn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>fn.error(R)),e.push(m);const p=o2().then(R=>{if(R)return s.getId()}),[g,E]=await Promise.all([m,p]);XC(u)||FC(u,g.measurementId),o("js",new Date);const A=f?.config??{};return A[UC]="firebase",A.update=!0,E!=null&&(A[LC]=E),o("config",g.measurementId,A),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.app=e}_delete(){return delete Jl[this.app.options.appId],Promise.resolve()}}let Jl={},aE=[];const oE={};let Nm="dataLayer",c2="gtag",lE,U0,uE=!1;function h2(){const i=[];if(l0()&&i.push("This is a browser extension environment."),OR()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Sn.create("invalid-analytics-context",{errorInfo:e});fn.warn(n.message)}}function f2(i,e,n){h2();const s=i.options.appId;if(!s)throw Sn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(Jl[s]!=null)throw Sn.create("already-exists",{id:s});if(!uE){GC(Nm);const{wrappedGtag:u,gtagCore:f}=QC(Jl,aE,oE,Nm,c2);U0=u,lE=f,uE=!0}return Jl[s]=l2(i,aE,oE,e,lE,Nm,n),new u2(i)}function d2(i=Qh()){i=lt(i);const e=ps(i,Eh);return e.isInitialized()?e.getImmediate():m2(i)}function m2(i,e={}){const n=ps(i,Eh);if(n.isInitialized()){const o=n.getImmediate();if(ls(e,n.getOptions()))return o;throw Sn.create("already-initialized")}return n.initialize({options:e})}function p2(i,e,n,s){i=lt(i),a2(U0,Jl[i.app.options.appId],e,n,s).catch(o=>fn.error(o))}const cE="@firebase/analytics",hE="0.10.18";function g2(){ri(new jn(Eh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return f2(s,o,n)},"PUBLIC")),ri(new jn("analytics-internal",i,"PRIVATE")),hn(cE,hE),hn(cE,hE,"esm2020");function i(e){try{const n=e.getProvider(Eh).getImmediate();return{logEvent:(s,o,u)=>p2(n,s,o,u)}}catch(n){throw Sn.create("interop-component-reg-failed",{reason:n})}}}g2();var fE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,j0;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,b){function I(){}I.prototype=b.prototype,N.F=b.prototype,N.prototype=new I,N.prototype.constructor=N,N.D=function(x,M,U){for(var D=Array(arguments.length-2),st=2;st<arguments.length;st++)D[st-2]=arguments[st];return b.prototype[M].apply(x,D)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,b,I){I||(I=0);const x=Array(16);if(typeof b=="string")for(var M=0;M<16;++M)x[M]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(M=0;M<16;++M)x[M]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=N.g[0],I=N.g[1],M=N.g[2];let U=N.g[3],D;D=b+(U^I&(M^U))+x[0]+3614090360&4294967295,b=I+(D<<7&4294967295|D>>>25),D=U+(M^b&(I^M))+x[1]+3905402710&4294967295,U=b+(D<<12&4294967295|D>>>20),D=M+(I^U&(b^I))+x[2]+606105819&4294967295,M=U+(D<<17&4294967295|D>>>15),D=I+(b^M&(U^b))+x[3]+3250441966&4294967295,I=M+(D<<22&4294967295|D>>>10),D=b+(U^I&(M^U))+x[4]+4118548399&4294967295,b=I+(D<<7&4294967295|D>>>25),D=U+(M^b&(I^M))+x[5]+1200080426&4294967295,U=b+(D<<12&4294967295|D>>>20),D=M+(I^U&(b^I))+x[6]+2821735955&4294967295,M=U+(D<<17&4294967295|D>>>15),D=I+(b^M&(U^b))+x[7]+4249261313&4294967295,I=M+(D<<22&4294967295|D>>>10),D=b+(U^I&(M^U))+x[8]+1770035416&4294967295,b=I+(D<<7&4294967295|D>>>25),D=U+(M^b&(I^M))+x[9]+2336552879&4294967295,U=b+(D<<12&4294967295|D>>>20),D=M+(I^U&(b^I))+x[10]+4294925233&4294967295,M=U+(D<<17&4294967295|D>>>15),D=I+(b^M&(U^b))+x[11]+2304563134&4294967295,I=M+(D<<22&4294967295|D>>>10),D=b+(U^I&(M^U))+x[12]+1804603682&4294967295,b=I+(D<<7&4294967295|D>>>25),D=U+(M^b&(I^M))+x[13]+4254626195&4294967295,U=b+(D<<12&4294967295|D>>>20),D=M+(I^U&(b^I))+x[14]+2792965006&4294967295,M=U+(D<<17&4294967295|D>>>15),D=I+(b^M&(U^b))+x[15]+1236535329&4294967295,I=M+(D<<22&4294967295|D>>>10),D=b+(M^U&(I^M))+x[1]+4129170786&4294967295,b=I+(D<<5&4294967295|D>>>27),D=U+(I^M&(b^I))+x[6]+3225465664&4294967295,U=b+(D<<9&4294967295|D>>>23),D=M+(b^I&(U^b))+x[11]+643717713&4294967295,M=U+(D<<14&4294967295|D>>>18),D=I+(U^b&(M^U))+x[0]+3921069994&4294967295,I=M+(D<<20&4294967295|D>>>12),D=b+(M^U&(I^M))+x[5]+3593408605&4294967295,b=I+(D<<5&4294967295|D>>>27),D=U+(I^M&(b^I))+x[10]+38016083&4294967295,U=b+(D<<9&4294967295|D>>>23),D=M+(b^I&(U^b))+x[15]+3634488961&4294967295,M=U+(D<<14&4294967295|D>>>18),D=I+(U^b&(M^U))+x[4]+3889429448&4294967295,I=M+(D<<20&4294967295|D>>>12),D=b+(M^U&(I^M))+x[9]+568446438&4294967295,b=I+(D<<5&4294967295|D>>>27),D=U+(I^M&(b^I))+x[14]+3275163606&4294967295,U=b+(D<<9&4294967295|D>>>23),D=M+(b^I&(U^b))+x[3]+4107603335&4294967295,M=U+(D<<14&4294967295|D>>>18),D=I+(U^b&(M^U))+x[8]+1163531501&4294967295,I=M+(D<<20&4294967295|D>>>12),D=b+(M^U&(I^M))+x[13]+2850285829&4294967295,b=I+(D<<5&4294967295|D>>>27),D=U+(I^M&(b^I))+x[2]+4243563512&4294967295,U=b+(D<<9&4294967295|D>>>23),D=M+(b^I&(U^b))+x[7]+1735328473&4294967295,M=U+(D<<14&4294967295|D>>>18),D=I+(U^b&(M^U))+x[12]+2368359562&4294967295,I=M+(D<<20&4294967295|D>>>12),D=b+(I^M^U)+x[5]+4294588738&4294967295,b=I+(D<<4&4294967295|D>>>28),D=U+(b^I^M)+x[8]+2272392833&4294967295,U=b+(D<<11&4294967295|D>>>21),D=M+(U^b^I)+x[11]+1839030562&4294967295,M=U+(D<<16&4294967295|D>>>16),D=I+(M^U^b)+x[14]+4259657740&4294967295,I=M+(D<<23&4294967295|D>>>9),D=b+(I^M^U)+x[1]+2763975236&4294967295,b=I+(D<<4&4294967295|D>>>28),D=U+(b^I^M)+x[4]+1272893353&4294967295,U=b+(D<<11&4294967295|D>>>21),D=M+(U^b^I)+x[7]+4139469664&4294967295,M=U+(D<<16&4294967295|D>>>16),D=I+(M^U^b)+x[10]+3200236656&4294967295,I=M+(D<<23&4294967295|D>>>9),D=b+(I^M^U)+x[13]+681279174&4294967295,b=I+(D<<4&4294967295|D>>>28),D=U+(b^I^M)+x[0]+3936430074&4294967295,U=b+(D<<11&4294967295|D>>>21),D=M+(U^b^I)+x[3]+3572445317&4294967295,M=U+(D<<16&4294967295|D>>>16),D=I+(M^U^b)+x[6]+76029189&4294967295,I=M+(D<<23&4294967295|D>>>9),D=b+(I^M^U)+x[9]+3654602809&4294967295,b=I+(D<<4&4294967295|D>>>28),D=U+(b^I^M)+x[12]+3873151461&4294967295,U=b+(D<<11&4294967295|D>>>21),D=M+(U^b^I)+x[15]+530742520&4294967295,M=U+(D<<16&4294967295|D>>>16),D=I+(M^U^b)+x[2]+3299628645&4294967295,I=M+(D<<23&4294967295|D>>>9),D=b+(M^(I|~U))+x[0]+4096336452&4294967295,b=I+(D<<6&4294967295|D>>>26),D=U+(I^(b|~M))+x[7]+1126891415&4294967295,U=b+(D<<10&4294967295|D>>>22),D=M+(b^(U|~I))+x[14]+2878612391&4294967295,M=U+(D<<15&4294967295|D>>>17),D=I+(U^(M|~b))+x[5]+4237533241&4294967295,I=M+(D<<21&4294967295|D>>>11),D=b+(M^(I|~U))+x[12]+1700485571&4294967295,b=I+(D<<6&4294967295|D>>>26),D=U+(I^(b|~M))+x[3]+2399980690&4294967295,U=b+(D<<10&4294967295|D>>>22),D=M+(b^(U|~I))+x[10]+4293915773&4294967295,M=U+(D<<15&4294967295|D>>>17),D=I+(U^(M|~b))+x[1]+2240044497&4294967295,I=M+(D<<21&4294967295|D>>>11),D=b+(M^(I|~U))+x[8]+1873313359&4294967295,b=I+(D<<6&4294967295|D>>>26),D=U+(I^(b|~M))+x[15]+4264355552&4294967295,U=b+(D<<10&4294967295|D>>>22),D=M+(b^(U|~I))+x[6]+2734768916&4294967295,M=U+(D<<15&4294967295|D>>>17),D=I+(U^(M|~b))+x[13]+1309151649&4294967295,I=M+(D<<21&4294967295|D>>>11),D=b+(M^(I|~U))+x[4]+4149444226&4294967295,b=I+(D<<6&4294967295|D>>>26),D=U+(I^(b|~M))+x[11]+3174756917&4294967295,U=b+(D<<10&4294967295|D>>>22),D=M+(b^(U|~I))+x[2]+718787259&4294967295,M=U+(D<<15&4294967295|D>>>17),D=I+(U^(M|~b))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(M+(D<<21&4294967295|D>>>11))&4294967295,N.g[2]=N.g[2]+M&4294967295,N.g[3]=N.g[3]+U&4294967295}s.prototype.v=function(N,b){b===void 0&&(b=N.length);const I=b-this.blockSize,x=this.C;let M=this.h,U=0;for(;U<b;){if(M==0)for(;U<=I;)o(this,N,U),U+=this.blockSize;if(typeof N=="string"){for(;U<b;)if(x[M++]=N.charCodeAt(U++),M==this.blockSize){o(this,x),M=0;break}}else for(;U<b;)if(x[M++]=N[U++],M==this.blockSize){o(this,x),M=0;break}}this.h=M,this.o+=b},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;b=this.o*8;for(var I=N.length-8;I<N.length;++I)N[I]=b&255,b/=256;for(this.v(N),N=Array(16),b=0,I=0;I<4;++I)for(let x=0;x<32;x+=8)N[b++]=this.g[I]>>>x&255;return N};function u(N,b){var I=m;return Object.prototype.hasOwnProperty.call(I,N)?I[N]:I[N]=b(N)}function f(N,b){this.h=b;const I=[];let x=!0;for(let M=N.length-1;M>=0;M--){const U=N[M]|0;x&&U==b||(I[M]=U,x=!1)}this.g=I}var m={};function p(N){return-128<=N&&N<128?u(N,function(b){return new f([b|0],b<0?-1:0)}):new f([N|0],N<0?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return A;if(N<0)return B(g(-N));const b=[];let I=1;for(let x=0;N>=I;x++)b[x]=N/I|0,I*=4294967296;return new f(b,0)}function E(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return B(E(N.substring(1),b));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=g(Math.pow(b,8));let x=A;for(let U=0;U<N.length;U+=8){var M=Math.min(8,N.length-U);const D=parseInt(N.substring(U,U+M),b);M<8?(M=g(Math.pow(b,M)),x=x.j(M).add(g(D))):(x=x.j(I),x=x.add(g(D)))}return x}var A=p(0),R=p(1),k=p(16777216);i=f.prototype,i.m=function(){if(J(this))return-B(this).m();let N=0,b=1;for(let I=0;I<this.g.length;I++){const x=this.i(I);N+=(x>=0?x:4294967296+x)*b,b*=4294967296}return N},i.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if($(this))return"0";if(J(this))return"-"+B(this).toString(N);const b=g(Math.pow(N,6));var I=this;let x="";for(;;){const M=fe(I,b).g;I=Q(I,M.j(b));let U=((I.g.length>0?I.g[0]:I.h)>>>0).toString(N);if(I=M,$(I))return U+x;for(;U.length<6;)U="0"+U;x=U+x}},i.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function $(N){if(N.h!=0)return!1;for(let b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function J(N){return N.h==-1}i.l=function(N){return N=Q(this,N),J(N)?-1:$(N)?0:1};function B(N){const b=N.g.length,I=[];for(let x=0;x<b;x++)I[x]=~N.g[x];return new f(I,~N.h).add(R)}i.abs=function(){return J(this)?B(this):this},i.add=function(N){const b=Math.max(this.g.length,N.g.length),I=[];let x=0;for(let M=0;M<=b;M++){let U=x+(this.i(M)&65535)+(N.i(M)&65535),D=(U>>>16)+(this.i(M)>>>16)+(N.i(M)>>>16);x=D>>>16,U&=65535,D&=65535,I[M]=D<<16|U}return new f(I,I[I.length-1]&-2147483648?-1:0)};function Q(N,b){return N.add(B(b))}i.j=function(N){if($(this)||$(N))return A;if(J(this))return J(N)?B(this).j(B(N)):B(B(this).j(N));if(J(N))return B(this.j(B(N)));if(this.l(k)<0&&N.l(k)<0)return g(this.m()*N.m());const b=this.g.length+N.g.length,I=[];for(var x=0;x<2*b;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(let M=0;M<N.g.length;M++){const U=this.i(x)>>>16,D=this.i(x)&65535,st=N.i(M)>>>16,qe=N.i(M)&65535;I[2*x+2*M]+=D*qe,Y(I,2*x+2*M),I[2*x+2*M+1]+=U*qe,Y(I,2*x+2*M+1),I[2*x+2*M+1]+=D*st,Y(I,2*x+2*M+1),I[2*x+2*M+2]+=U*st,Y(I,2*x+2*M+2)}for(N=0;N<b;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=b;N<2*b;N++)I[N]=0;return new f(I,0)};function Y(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function re(N,b){this.g=N,this.h=b}function fe(N,b){if($(b))throw Error("division by zero");if($(N))return new re(A,A);if(J(N))return b=fe(B(N),b),new re(B(b.g),B(b.h));if(J(b))return b=fe(N,B(b)),new re(B(b.g),b.h);if(N.g.length>30){if(J(N)||J(b))throw Error("slowDivide_ only works with positive integers.");for(var I=R,x=b;x.l(N)<=0;)I=ae(I),x=ae(x);var M=pe(I,1),U=pe(x,1);for(x=pe(x,2),I=pe(I,2);!$(x);){var D=U.add(x);D.l(N)<=0&&(M=M.add(I),U=D),x=pe(x,1),I=pe(I,1)}return b=Q(N,M.j(b)),new re(M,b)}for(M=A;N.l(b)>=0;){for(I=Math.max(1,Math.floor(N.m()/b.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),U=g(I),D=U.j(b);J(D)||D.l(N)>0;)I-=x,U=g(I),D=U.j(b);$(U)&&(U=R),M=M.add(U),N=Q(N,D)}return new re(M,N)}i.B=function(N){return fe(this,N).h},i.and=function(N){const b=Math.max(this.g.length,N.g.length),I=[];for(let x=0;x<b;x++)I[x]=this.i(x)&N.i(x);return new f(I,this.h&N.h)},i.or=function(N){const b=Math.max(this.g.length,N.g.length),I=[];for(let x=0;x<b;x++)I[x]=this.i(x)|N.i(x);return new f(I,this.h|N.h)},i.xor=function(N){const b=Math.max(this.g.length,N.g.length),I=[];for(let x=0;x<b;x++)I[x]=this.i(x)^N.i(x);return new f(I,this.h^N.h)};function ae(N){const b=N.g.length+1,I=[];for(let x=0;x<b;x++)I[x]=N.i(x)<<1|N.i(x-1)>>>31;return new f(I,N.h)}function pe(N,b){const I=b>>5;b%=32;const x=N.g.length-I,M=[];for(let U=0;U<x;U++)M[U]=b>0?N.i(U+I)>>>b|N.i(U+I+1)<<32-b:N.i(U+I);return new f(M,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,j0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=E,rs=f}).apply(typeof fE<"u"?fE:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z0,Yl,B0,sh,Ym,q0,H0,F0;(function(){var i,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var z=c[w];if(!(z in _))break e;_=_[z]}c=c[c.length-1],w=_[c],y=y(w),y!=w&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],w;for(w in y)Object.prototype.hasOwnProperty.call(y,w)&&_.push([w,y[w]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function p(c,y,_){return c.call.apply(c.bind,arguments)}function g(c,y,_){return g=p,g.apply(null,arguments)}function E(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function A(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(w,z,K){for(var ue=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)ue[Ie-2]=arguments[Ie];return y.prototype[z].apply(w,ue)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function k(c){const y=c.length;if(y>0){const _=Array(y);for(let w=0;w<y;w++)_[w]=c[w];return _}return[]}function $(c,y){for(let w=1;w<arguments.length;w++){const z=arguments[w];var _=typeof z;if(_=_!="object"?_:z?Array.isArray(z)?"array":_:"null",_=="array"||_=="object"&&typeof z.length=="number"){_=c.length||0;const K=z.length||0;c.length=_+K;for(let ue=0;ue<K;ue++)c[_+ue]=z[ue]}else c.push(z)}}class J{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function B(c){f.setTimeout(()=>{throw c},0)}function Q(){var c=N;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Y{constructor(){this.h=this.g=null}add(y,_){const w=re.get();w.set(y,_),this.h?this.h.next=w:this.g=w,this.h=w}}var re=new J(()=>new fe,c=>c.reset());class fe{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,pe=!1,N=new Y,b=()=>{const c=Promise.resolve(void 0);ae=()=>{c.then(I)}};function I(){for(var c;c=Q();){try{c.h.call(c.g)}catch(_){B(_)}var y=re;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}pe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};f.addEventListener("test",_,y),f.removeEventListener("test",_,y)}catch{}return c})();function D(c){return/^[\s\xa0]*$/.test(c)}function st(c,y){M.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}A(st,M),st.prototype.init=function(c,y){const _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var qe="closure_listenable_"+(Math.random()*1e6|0),X=0;function ce(c,y,_,w,z){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!w,this.ha=z,this.key=++X,this.da=this.fa=!1}function ye(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ue(c,y,_){for(const w in c)y.call(_,c[w],w,c)}function T(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function V(c){const y={};for(const _ in c)y[_]=c[_];return y}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Z(c,y){let _,w;for(let z=1;z<arguments.length;z++){w=arguments[z];for(_ in w)c[_]=w[_];for(let K=0;K<te.length;K++)_=te[K],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,y,_,w,z){const K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);const ue=le(c,y,w,z);return ue>-1?(y=c[ue],_||(y.fa=!1)):(y=new ce(y,this.src,K,!!w,z),y.fa=_,c.push(y)),y};function ge(c,y){const _=y.type;if(_ in c.g){var w=c.g[_],z=Array.prototype.indexOf.call(w,y,void 0),K;(K=z>=0)&&Array.prototype.splice.call(w,z,1),K&&(ye(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function le(c,y,_,w){for(let z=0;z<c.length;++z){const K=c[z];if(!K.da&&K.listener==y&&K.capture==!!_&&K.ha==w)return z}return-1}var Je="closure_lm_"+(Math.random()*1e6|0),we={};function dn(c,y,_,w,z){if(Array.isArray(y)){for(let K=0;K<y.length;K++)dn(c,y[K],_,w,z);return null}return _=Nu(_),c&&c[qe]?c.J(y,_,m(w)?!!w.capture:!1,z):Lo(c,y,_,!1,w,z)}function Lo(c,y,_,w,z,K){if(!y)throw Error("Invalid event type");const ue=m(z)?!!z.capture:!!z;let Ie=Uo(c);if(Ie||(c[Je]=Ie=new oe(c)),_=Ie.add(y,_,w,ue,K),_.proxy)return _;if(w=Ea(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)U||(z=ue),z===void 0&&(z=!1),c.addEventListener(y.toString(),w,z);else if(c.attachEvent)c.attachEvent(Sa(y.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ea(){function c(_){return y.call(c.src,c.listener,_)}const y=gf;return c}function Ta(c,y,_,w,z){if(Array.isArray(y))for(var K=0;K<y.length;K++)Ta(c,y[K],_,w,z);else w=m(w)?!!w.capture:!!w,_=Nu(_),c&&c[qe]?(c=c.i,K=String(y).toString(),K in c.g&&(y=c.g[K],_=le(y,_,w,z),_>-1&&(ye(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[K],c.h--)))):c&&(c=Uo(c))&&(y=c.g[y.toString()],c=-1,y&&(c=le(y,_,w,z)),(_=c>-1?y[c]:null)&&gs(_))}function gs(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[qe])ge(y.i,c);else{var _=c.type,w=c.proxy;y.removeEventListener?y.removeEventListener(_,w,c.capture):y.detachEvent?y.detachEvent(Sa(_),w):y.addListener&&y.removeListener&&y.removeListener(w),(_=Uo(y))?(ge(_,c),_.h==0&&(_.src=null,y[Je]=null)):ye(c)}}}function Sa(c){return c in we?we[c]:we[c]="on"+c}function gf(c,y){if(c.da)c=!0;else{y=new st(y,this);const _=c.listener,w=c.ha||c.src;c.fa&&gs(c),c=_.call(w,y)}return c}function Uo(c){return c=c[Je],c instanceof oe?c:null}var sn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Nu(c){return typeof c=="function"?c:(c[sn]||(c[sn]=function(y){return c.handleEvent(y)}),c[sn])}function bt(){x.call(this),this.i=new oe(this),this.M=this,this.G=null}A(bt,x),bt.prototype[qe]=!0,bt.prototype.removeEventListener=function(c,y,_,w){Ta(this,c,y,_,w)};function Mt(c,y){var _,w=c.G;if(w)for(_=[];w;w=w.G)_.push(w);if(c=c.M,w=y.type||y,typeof y=="string")y=new M(y,c);else if(y instanceof M)y.target=y.target||c;else{var z=y;y=new M(w,c),Z(y,z)}z=!0;let K,ue;if(_)for(ue=_.length-1;ue>=0;ue--)K=y.g=_[ue],z=Vi(K,w,!0,y)&&z;if(K=y.g=c,z=Vi(K,w,!0,y)&&z,z=Vi(K,w,!1,y)&&z,_)for(ue=0;ue<_.length;ue++)K=y.g=_[ue],z=Vi(K,w,!1,y)&&z}bt.prototype.N=function(){if(bt.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let w=0;w<_.length;w++)ye(_[w]);delete c.g[y],c.h--}}this.G=null},bt.prototype.J=function(c,y,_,w){return this.i.add(String(c),y,!1,_,w)},bt.prototype.K=function(c,y,_,w){return this.i.add(String(c),y,!0,_,w)};function Vi(c,y,_,w){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let z=!0;for(let K=0;K<y.length;++K){const ue=y[K];if(ue&&!ue.da&&ue.capture==_){const Ie=ue.listener,nt=ue.ha||ue.src;ue.fa&&ge(c.i,ue),z=Ie.call(nt,w)!==!1&&z}}return z&&!w.defaultPrevented}function yf(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:f.setTimeout(c,y||0)}function jo(c){c.g=yf(()=>{c.g=null,c.i&&(c.i=!1,jo(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class _f extends x{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(c){x.call(this),this.h=c,this.g={}}A(ys,x);var mr=[];function Gt(c){Ue(c.g,function(y,_){this.g.hasOwnProperty(_)&&gs(y)},c),c.g={}}ys.prototype.N=function(){ys.Z.N.call(this),Gt(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wn=f.JSON.stringify,Jt=f.JSON.parse,vf=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function Ou(){}function Mu(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function pr(){M.call(this,"d")}A(pr,M);function qn(){M.call(this,"c")}A(qn,M);var bn={},gr=null;function Aa(){return gr=gr||new bt}bn.Ia="serverreachability";function zo(c){M.call(this,bn.Ia,c)}A(zo,M);function yr(c){const y=Aa();Mt(y,new zo(y))}bn.STAT_EVENT="statevent";function wa(c,y){M.call(this,bn.STAT_EVENT,c),this.stat=y}A(wa,M);function mt(c){const y=Aa();Mt(y,new wa(y,c))}bn.Ja="timingevent";function Pu(c,y){M.call(this,bn.Ja,c),this.size=y}A(Pu,M);function _r(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},y)}function vr(){this.g=!0}vr.prototype.ua=function(){this.g=!1};function Bo(c,y,_,w,z,K){c.info(function(){if(c.g)if(K){var ue="",Ie=K.split("&");for(let Ge=0;Ge<Ie.length;Ge++){var nt=Ie[Ge].split("=");if(nt.length>1){const yt=nt[0];nt=nt[1];const mn=yt.split("_");ue=mn.length>=2&&mn[1]=="type"?ue+(yt+"="+nt+"&"):ue+(yt+"=redacted&")}}}else ue=null;else ue=K;return"XMLHTTP REQ ("+w+") [attempt "+z+"]: "+y+`
`+_+`
`+ue})}function qo(c,y,_,w,z,K,ue){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+z+"]: "+y+`
`+_+`
`+K+" "+ue})}function ki(c,y,_,w){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+li(c,_)+(w?" "+w:"")})}function Ef(c,y){c.info(function(){return"TIMEOUT: "+y})}vr.prototype.info=function(){};function li(c,y){if(!c.g)return y;if(!y)return null;try{const K=JSON.parse(y);if(K){for(c=0;c<K.length;c++)if(Array.isArray(K[c])){var _=K[c];if(!(_.length<2)){var w=_[1];if(Array.isArray(w)&&!(w.length<1)){var z=w[0];if(z!="noop"&&z!="stop"&&z!="close")for(let ue=1;ue<w.length;ue++)w[ue]=""}}}}return wn(K)}catch{return y}}var pt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ut={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Li;function _s(){}A(_s,Ou),_s.prototype.g=function(){return new XMLHttpRequest},Li=new _s;function vs(c){return encodeURIComponent(String(c))}function Tf(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Hn(c,y,_,w){this.j=c,this.i=y,this.l=_,this.S=w||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Er}function Er(){this.i=null,this.g="",this.h=!1}var ba={},ui={};function ci(c,y,_){c.M=1,c.A=ji(ut(y)),c.u=_,c.R=!0,Tr(c,null)}function Tr(c,y){c.F=Date.now(),Es(c),c.B=ut(c.A);var _=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),Lu(_.i,"t",w),c.C=0,_=c.j.L,c.h=new Er,c.g=Va(c.j,_?y:null,!c.u),c.P>0&&(c.O=new _f(g(c.Y,c,c.g),c.P)),y=c.V,_=c.g,w=c.ba;var z="readystatechange";Array.isArray(z)||(z&&(mr[0]=z.toString()),z=mr);for(let K=0;K<z.length;K++){const ue=dn(_,z[K],w||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=c.J?V(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),yr(),Bo(c.i,c.v,c.B,c.l,c.S,c.u)}Hn.prototype.ba=function(c){c=c.target;const y=this.O;y&&Kt(c)==3?y.j():this.Y(c)},Hn.prototype.Y=function(c){try{if(c==this.g)e:{const Ie=Kt(this.g),nt=this.g.ya(),Ge=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Os(this.g)))){this.K||Ie!=4||nt==7||(nt==8||Ge<=0?yr(3):yr(2)),fi(this);var y=this.g.ca();this.X=y;var _=Sr(this);if(this.o=y==200,qo(this.i,this.v,this.B,this.l,this.S,Ie,y),this.o){if(this.U&&!this.L){t:{if(this.g){var w,z=this.g;if((w=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(w)){var K=w;break t}}K=null}if(c=K)ki(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ra(this,c);else{this.o=!1,this.m=3,mt(12),di(this),Ts(this);break e}}if(this.R){c=!0;let yt;for(;!this.K&&this.C<_.length;)if(yt=xu(this,_),yt==ui){Ie==4&&(this.m=4,mt(14),c=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==ba){this.m=4,mt(15),ki(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else ki(this.i,this.l,yt,null),Ra(this,yt);if(gt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||_.length!=0||this.h.h||(this.m=1,mt(16),c=!1),this.o=this.o&&c,!c)ki(this.i,this.l,_,"[Invalid Chunked Response]"),di(this),Ts(this);else if(_.length>0&&!this.W){this.W=!0;var ue=this.j;ue.g==this&&ue.aa&&!ue.P&&(ue.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Zo(ue),ue.P=!0,mt(11))}}else ki(this.i,this.l,_,null),Ra(this,_);Ie==4&&di(this),this.o&&!this.K&&(Ie==4?Jo(this.j,this):(this.o=!1,Es(this)))}else Ms(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),di(this),Ts(this)}}}catch{}finally{}};function Sr(c){if(!gt(c))return c.g.la();const y=Os(c.g);if(y==="")return"";let _="";const w=y.length,z=Kt(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),Ts(c),"";c.h.i=new f.TextDecoder}for(let K=0;K<w;K++)c.h.h=!0,_+=c.h.i.decode(y[K],{stream:!(z&&K==w-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function gt(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function xu(c,y){var _=c.C,w=y.indexOf(`
`,_);return w==-1?ui:(_=Number(y.substring(_,w)),isNaN(_)?ba:(w+=1,w+_>y.length?ui:(y=y.slice(w,w+_),c.C=w+_,y)))}Hn.prototype.cancel=function(){this.K=!0,di(this)};function Es(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=_r(g(c.aa,c),y)}function fi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Hn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Ef(this.i,this.B),this.M!=2&&(yr(),mt(17)),di(this),this.m=2,Ts(this)):hi(this,this.T-c)};function Ts(c){c.j.I==0||c.K||Jo(c.j,c)}function di(c){fi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Gt(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function Ra(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ws(_.h,c))){if(!c.L&&ws(_.h,c)&&_.I==3){try{var w=_.Ba.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var z=w;if(z[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)xa(_),mi(_);else break e;Wo(_),mt(18)}}else _.xa=z[1],0<_.xa-_.K&&z[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=_r(g(_.Va,_),6e3));Rn(_.h)<=1&&_.ta&&(_.ta=void 0)}else qi(_,11)}else if((c.L||_.g==c)&&xa(_),!D(y))for(z=_.Ba.g.parse(y),y=0;y<z.length;y++){let Ge=z[y];const yt=Ge[0];if(!(yt<=_.K))if(_.K=yt,Ge=Ge[1],_.I==2)if(Ge[0]=="c"){_.M=Ge[1],_.ba=Ge[2];const mn=Ge[3];mn!=null&&(_.ka=mn,_.j.info("VER="+_.ka));const pi=Ge[4];pi!=null&&(_.za=pi,_.j.info("SVER="+_.za));const Kn=Ge[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(w=1.5*Kn,_.O=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const $n=c.g;if($n){const Yn=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var K=w.h;K.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Ia(K,K.h),K.h=null))}if(w.G){const tl=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(w.wa=tl,Ye(w.J,w.G,tl))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),w=_;var ue=c;if(w.na=Ku(w,w.L?w.ba:null,w.W),ue.L){Ui(w.h,ue);var Ie=ue,nt=w.O;nt&&(Ie.H=nt),Ie.D&&(fi(Ie),Es(Ie)),w.g=ue}else qu(w);_.i.length>0&&ks(_)}else Ge[0]!="stop"&&Ge[0]!="close"||qi(_,7);else _.I==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?qi(_,7):xs(_):Ge[0]!="noop"&&_.l&&_.l.qa(Ge),_.A=0)}}yr(4)}catch{}}var Sf=class{constructor(c,y){this.g=c,this.map=y}};function Ss(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function As(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Rn(c){return c.h?1:c.g?c.g.size:0}function ws(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ia(c,y){c.g?c.g.add(y):c.h=y}function Ui(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Ss.prototype.cancel=function(){if(this.i=Ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ca(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return k(c.i)}var Da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Af(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const w=c[_].indexOf("=");let z,K=null;w>=0?(z=c[_].substring(0,w),K=c[_].substring(w+1)):z=c[_],y(z,K?decodeURIComponent(K.replace(/\+/g," ")):"")}}}function Fn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Fn?(this.l=c.l,Ar(this,c.j),this.o=c.o,this.g=c.g,bs(this,c.u),this.h=c.h,wr(this,Uu(c.i)),this.m=c.m):c&&(y=String(c).match(Da))?(this.l=!1,Ar(this,y[1]||"",!0),this.o=Rs(y[2]||""),this.g=Rs(y[3]||"",!0),bs(this,y[4]),this.h=Rs(y[5]||"",!0),wr(this,y[6]||"",!0),this.m=Rs(y[7]||"")):(this.l=!1,this.i=new In(null,this.l))}Fn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Pt(y,Fo,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Pt(y,Fo,!0),"@"),c.push(vs(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Pt(_,_.charAt(0)=="/"?br:Go,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Pt(_,ku)),c.join("")},Fn.prototype.resolve=function(c){const y=ut(this);let _=!!c.j;_?Ar(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var w=c.h;if(_)bs(y,c.u);else if(_=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var z=y.h.lastIndexOf("/");z!=-1&&(w=y.h.slice(0,z+1)+w)}if(z=w,z==".."||z==".")w="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){w=z.lastIndexOf("/",0)==0,z=z.split("/");const K=[];for(let ue=0;ue<z.length;){const Ie=z[ue++];Ie=="."?w&&ue==z.length&&K.push(""):Ie==".."?((K.length>1||K.length==1&&K[0]!="")&&K.pop(),w&&ue==z.length&&K.push("")):(K.push(Ie),w=!0)}w=K.join("/")}else w=z}return _?y.h=w:_=c.i.toString()!=="",_?wr(y,Uu(c.i)):_=!!c.m,_&&(y.m=c.m),y};function ut(c){return new Fn(c)}function Ar(c,y,_){c.j=_?Rs(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function bs(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function wr(c,y,_){y instanceof In?(c.i=y,Yo(c.i,c.l)):(_||(y=Pt(y,Vu)),c.i=new In(y,c.l))}function Ye(c,y,_){c.i.set(y,_)}function ji(c){return Ye(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Rs(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Pt(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Ho),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ho(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Fo=/[#\/\?@]/g,Go=/[#\?:]/g,br=/[#\?]/g,Vu=/[#\?@]/g,ku=/#/g;function In(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function zi(c){c.g||(c.g=new Map,c.h=0,c.i&&Af(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=In.prototype,i.add=function(c,y){zi(this),this.i=null,c=Gn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Ko(c,y){zi(c),y=Gn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function $o(c,y){return zi(c),y=Gn(c,y),c.g.has(y)}i.forEach=function(c,y){zi(this),this.g.forEach(function(_,w){_.forEach(function(z){c.call(y,z,w,this)},this)},this)};function Na(c,y){zi(c);let _=[];if(typeof y=="string")$o(c,y)&&(_=_.concat(c.g.get(Gn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}i.set=function(c,y){return zi(this),this.i=null,c=Gn(this,c),$o(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=Na(this,c),c.length>0?String(c[0]):y):y};function Lu(c,y,_){Ko(c,y),_.length>0&&(c.i=null,c.g.set(Gn(c,y),k(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let w=0;w<y.length;w++){var _=y[w];const z=vs(_);_=Na(this,_);for(let K=0;K<_.length;K++){let ue=z;_[K]!==""&&(ue+="="+vs(_[K])),c.push(ue)}}return this.i=c.join("&")};function Uu(c){const y=new In;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Gn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Yo(c,y){y&&!c.j&&(zi(c),c.i=null,c.g.forEach(function(_,w){const z=w.toLowerCase();w!=z&&(Ko(this,w),Lu(this,z,_))},c)),c.j=y}function Qo(c,y){const _=new vr;if(f.Image){const w=new Image;w.onload=E(en,_,"TestLoadImage: loaded",!0,y,w),w.onerror=E(en,_,"TestLoadImage: error",!1,y,w),w.onabort=E(en,_,"TestLoadImage: abort",!1,y,w),w.ontimeout=E(en,_,"TestLoadImage: timeout",!1,y,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else y(!1)}function Rr(c,y){const _=new vr,w=new AbortController,z=setTimeout(()=>{w.abort(),en(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:w.signal}).then(K=>{clearTimeout(z),K.ok?en(_,"TestPingServer: ok",!0,y):en(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),en(_,"TestPingServer: error",!1,y)})}function en(c,y,_,w,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),w(_)}catch{}}function ju(){this.g=new vf}function Is(c){this.i=c.Sb||null,this.h=c.ab||!1}A(Is,Ou),Is.prototype.g=function(){return new Cs(this.i,this.h)};function Cs(c,y){bt.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Cs,bt),i=Cs.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Bi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||f).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ir(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ir(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?tn(this):Bi(this),this.readyState==3&&Ir(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,tn(this))},i.Na=function(c){this.g&&(this.response=c,tn(this))},i.ga=function(){this.g&&tn(this)};function tn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Bi(c)}i.setRequestHeader=function(c,y){this.A.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Bi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Cr(c){let y="";return Ue(c,function(_,w){y+=w,y+=":",y+=_,y+=`\r
`}),y}function Cn(c,y,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Cr(_),typeof c=="string"?_!=null&&vs(_):Ye(c,y,_))}function et(c){bt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(et,bt);var Oa=/^https?$/i,zu=["POST","PUT"];i=et.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,y,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Li.g(),this.g.onreadystatechange=R(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(K){Ds(this,K);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var z in w)_.set(z,w[z]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const K of w.keys())_.set(K,w.get(K));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),z=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(zu,y,void 0)>=0)||w||z||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ue]of _)this.g.setRequestHeader(K,ue);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(K){Ds(this,K)}};function Ds(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Ns(c),Rt(c)}function Ns(c){c.A||(c.A=!0,Mt(c,"complete"),Mt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Mt(this,"complete"),Mt(this,"abort"),Rt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rt(this,!0)),et.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Xo(this):this.Xa())},i.Xa=function(){Xo(this)};function Xo(c){if(c.h&&typeof u<"u"){if(c.v&&Kt(c)==4)setTimeout(c.Ca.bind(c),0);else if(Mt(c,"readystatechange"),Kt(c)==4){c.h=!1;try{const K=c.ca();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var w;if(w=K===0){let ue=String(c.D).match(Da)[1]||null;!ue&&f.self&&f.self.location&&(ue=f.self.location.protocol.slice(0,-1)),w=!Oa.test(ue?ue.toLowerCase():"")}_=w}if(_)Mt(c,"complete"),Mt(c,"success");else{c.o=6;try{var z=Kt(c)>2?c.g.statusText:""}catch{z=""}c.l=z+" ["+c.ca()+"]",Ns(c)}}finally{Rt(c)}}}}function Rt(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||Mt(c,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Kt(c){return c.g?c.g.readyState:0}i.ca=function(){try{return Kt(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Jt(y)}};function Os(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(c){const y={};c=(c.g&&Kt(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(D(c[w]))continue;var _=Tf(c[w]);const z=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=y[z]||[];y[z]=K,K.push(_)}T(y,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ma(c){this.za=0,this.i=[],this.j=new vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ps("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ps("baseRetryDelayMs",5e3,c),this.Za=Ps("retryDelaySeedMs",1e4,c),this.Ta=Ps("forwardChannelMaxRetries",2,c),this.va=Ps("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ss(c&&c.concurrentRequestLimit),this.Ba=new ju,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ma.prototype,i.ka=8,i.I=1,i.connect=function(c,y,_,w){mt(0),this.W=c,this.H=y||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.J=Ku(this,null,this.W),ks(this)};function xs(c){if(Vs(c),c.I==3){var y=c.V++,_=ut(c.J);if(Ye(_,"SID",c.M),Ye(_,"RID",y),Ye(_,"TYPE","terminate"),Ls(c,_),y=new Hn(c,c.j,y),y.M=2,y.A=ji(ut(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&f.Image&&(new Image().src=y.A,_=!0),_||(y.g=Va(y.j,null),y.g.ea(y.A)),y.F=Date.now(),Es(y)}Gu(c)}function mi(c){c.g&&(Zo(c),c.g.cancel(),c.g=null)}function Vs(c){mi(c),c.v&&(f.clearTimeout(c.v),c.v=null),xa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function ks(c){if(!As(c.h)&&!c.m){c.m=!0;var y=c.Ea;ae||b(),pe||(ae(),pe=!0),N.add(y,c),c.D=0}}function wf(c,y){return Rn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=_r(g(c.Ea,c,y),Fu(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const z=new Hn(this,this.j,c);let K=this.o;if(this.U&&(K?(K=V(K),Z(K,this.U)):K=this.U),this.u!==null||this.R||(z.J=K,K=null),this.S)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(y+=w,y>4096){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=Pa(this,z,y),_=ut(this.J),Ye(_,"RID",c),Ye(_,"CVER",22),this.G&&Ye(_,"X-HTTP-Session-Id",this.G),Ls(this,_),K&&(this.R?y="headers="+vs(Cr(K))+"&"+y:this.u&&Cn(_,this.u,K)),Ia(this.h,z),this.Ra&&Ye(_,"TYPE","init"),this.S?(Ye(_,"$req",y),Ye(_,"SID","null"),z.U=!0,ci(z,_,null)):ci(z,_,y),this.I=2}}else this.I==3&&(c?Bu(this,c):this.i.length==0||As(this.h)||Bu(this))};function Bu(c,y){var _;y?_=y.l:_=c.V++;const w=ut(c.J);Ye(w,"SID",c.M),Ye(w,"RID",_),Ye(w,"AID",c.K),Ls(c,w),c.u&&c.o&&Cn(w,c.u,c.o),_=new Hn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=Pa(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ia(c.h,_),ci(_,w,y)}function Ls(c,y){c.H&&Ue(c.H,function(_,w){Ye(y,w,_)}),c.l&&Ue({},function(_,w){Ye(y,w,_)})}function Pa(c,y,_){_=Math.min(c.i.length,_);const w=c.l?g(c.l.Ka,c.l,c):null;e:{var z=c.i;let Ie=-1;for(;;){const nt=["count="+_];Ie==-1?_>0?(Ie=z[0].g,nt.push("ofs="+Ie)):Ie=0:nt.push("ofs="+Ie);let Ge=!0;for(let yt=0;yt<_;yt++){var K=z[yt].g;const mn=z[yt].map;if(K-=Ie,K<0)Ie=Math.max(0,z[yt].g-100),Ge=!1;else try{K="req"+K+"_"||"";try{var ue=mn instanceof Map?mn:Object.entries(mn);for(const[pi,Kn]of ue){let $n=Kn;m(Kn)&&($n=wn(Kn)),nt.push(K+pi+"="+encodeURIComponent($n))}}catch(pi){throw nt.push(K+"type="+encodeURIComponent("_badmap")),pi}}catch{w&&w(mn)}}if(Ge){ue=nt.join("&");break e}}ue=void 0}return c=c.i.splice(0,_),y.G=c,ue}function qu(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;ae||b(),pe||(ae(),pe=!0),N.add(y,c),c.A=0}}function Wo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=_r(g(c.Da,c),Fu(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Hu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=_r(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),mi(this),Hu(this))};function Zo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Hu(c){c.g=new Hn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=ut(c.na);Ye(y,"RID","rpc"),Ye(y,"SID",c.M),Ye(y,"AID",c.K),Ye(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ye(y,"TO",c.ia),Ye(y,"TYPE","xmlhttp"),Ls(c,y),c.u&&c.o&&Cn(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=ji(ut(y)),_.u=null,_.R=!0,Tr(_,c)}i.Va=function(){this.C!=null&&(this.C=null,mi(this),Wo(this),mt(19))};function xa(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Jo(c,y){var _=null;if(c.g==y){xa(c),Zo(c),c.g=null;var w=2}else if(ws(c.h,y))_=y.G,Ui(c.h,y),w=1;else return;if(c.I!=0){if(y.o)if(w==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var z=c.D;w=Aa(),Mt(w,new Pu(w,_)),ks(c)}else qu(c);else if(z=y.m,z==3||z==0&&y.X>0||!(w==1&&wf(c,y)||w==2&&Wo(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),z){case 1:qi(c,5);break;case 4:qi(c,10);break;case 3:qi(c,6);break;default:qi(c,2)}}}function Fu(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function qi(c,y){if(c.j.info("Error code "+y),y==2){var _=g(c.bb,c),w=c.Ua;const z=!w;w=new Fn(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ar(w,"https"),ji(w),z?Qo(w.toString(),_):Rr(w.toString(),_)}else mt(2);c.I=0,c.l&&c.l.pa(y),Gu(c),Vs(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Gu(c){if(c.I=0,c.ja=[],c.l){const y=Ca(c.h);(y.length!=0||c.i.length!=0)&&($(c.ja,y),$(c.ja,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.oa()}}function Ku(c,y,_){var w=_ instanceof Fn?ut(_):new Fn(_);if(w.g!="")y&&(w.g=y+"."+w.g),bs(w,w.u);else{var z=f.location;w=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;const K=new Fn(null);w&&Ar(K,w),y&&(K.g=y),z&&bs(K,z),_&&(K.h=_),w=K}return _=c.G,y=c.wa,_&&y&&Ye(w,_,y),Ye(w,"VER",c.ka),Ls(c,w),w}function Va(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new et(new Is({ab:_})):new et(c.ma),y.Fa(c.L),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}i=$u.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ka(){}ka.prototype.g=function(c,y){return new nn(c,y)};function nn(c,y){bt.call(this),this.g=new Ma(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!D(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!D(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Dr(this)}A(nn,bt),nn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){xs(this.g)},nn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=wn(c),c=_);y.i.push(new Sf(y.Ya++,c)),y.I==3&&ks(y)},nn.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,nn.Z.N.call(this)};function el(c){pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}A(el,pr);function Yu(){qn.call(this),this.status=1}A(Yu,qn);function Dr(c){this.g=c}A(Dr,$u),Dr.prototype.ra=function(){Mt(this.g,"a")},Dr.prototype.qa=function(c){Mt(this.g,new el(c))},Dr.prototype.pa=function(c){Mt(this.g,new Yu)},Dr.prototype.oa=function(){Mt(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,F0=function(){return new ka},H0=function(){return Aa()},q0=bn,Ym={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pt.NO_ERROR=0,pt.TIMEOUT=8,pt.HTTP_ERROR=6,sh=pt,Ut.COMPLETE="complete",B0=Ut,Mu.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",bt.prototype.listen=bt.prototype.J,Yl=Mu,et.prototype.listenOnce=et.prototype.K,et.prototype.getLastError=et.prototype.Ha,et.prototype.getLastErrorCode=et.prototype.ya,et.prototype.getStatus=et.prototype.ca,et.prototype.getResponseJson=et.prototype.La,et.prototype.getResponseText=et.prototype.la,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Fa,z0=et}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const dE="@firebase/firestore",mE="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Yh("@firebase/firestore");function mo(){return la.logLevel}function he(i,...e){if(la.logLevel<=Ve.DEBUG){const n=e.map(Dp);la.debug(`Firestore (${Po}): ${i}`,...n)}}function cr(i,...e){if(la.logLevel<=Ve.ERROR){const n=e.map(Dp);la.error(`Firestore (${Po}): ${i}`,...n)}}function So(i,...e){if(la.logLevel<=Ve.WARN){const n=e.map(Dp);la.warn(`Firestore (${Po}): ${i}`,...n)}}function Dp(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,G0(i,s,n)}function G0(i,e,n){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw cr(s),new Error(s)}function Fe(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||G0(e,o,s)}function Ce(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class v2{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ss,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ss)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new K0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class E2{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class T2{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new E2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,he("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=A2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function Qm(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Om(o)===Om(u)?ke(o,u):Om(o)?1:-1}return ke(i.length,e.length)}const w2=55296,b2=57343;function Om(i){const e=i.charCodeAt(0);return e>=w2&&e<=b2}function Ao(i,e,n){return i.length===e.length&&i.every(((s,o)=>n(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="__name__";class Si{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ae(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ae(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Si.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return ke(e.length,n.length)}static compareSegments(e,n){const s=Si.isNumericId(e),o=Si.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Si.extractNumericId(e).compare(Si.extractNumericId(n)):Qm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rs.fromString(e.substring(4,e.length-2))}}class it extends Si{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(se.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new it(n)}static emptyPath(){return new it([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Si{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gE}static keyField(){return new Ht([gE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new me(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new me(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new me(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new me(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(it.fromString(e))}static fromName(e){return new Ee(it.fromString(e).popFirst(5))}static empty(){return new Ee(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(i,e,n){if(!n)throw new me(se.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function I2(i,e,n,s){if(e===!0&&s===!0)throw new me(se.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function yE(i){if(!Ee.isDocumentKey(i))throw new me(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function _E(i){if(Ee.isDocumentKey(i))throw new me(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Y0(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Op(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ae(12329,{type:typeof i})}function as(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new me(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Op(i);throw new me(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i,e){const n={typeString:i};return e&&(n.value=e),n}function Eu(i,e){if(!Y0(i))throw new me(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new me(se.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=-62135596800,EE=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*EE);return new rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<vE)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/EE}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Eu(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:wt("string",rt._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new rt(0,0))}static max(){return new Re(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-1;function C2(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new us(o,Ee.empty(),e)}function D2(i){return new us(i.readTime,i.key,ou)}class us{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new us(Re.min(),Ee.empty(),ou)}static max(){return new us(Re.max(),Ee.empty(),ou)}}function N2(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=Ee.comparator(i.documentKey,e.documentKey),n!==0?n:ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(i){if(i.code!==se.FAILED_PRECONDITION||i.message!==O2)throw i;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ie(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ie?n:ie.resolve(n)}catch(n){return ie.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ie.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ie.reject(n)}static resolve(e){return new ie(((n,s)=>{n(e)}))}static reject(e){return new ie(((n,s)=>{s(e)}))}static waitFor(e){return new ie(((n,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(p=>s(p)))})),f=!0,u===o&&n()}))}static or(e){let n=ie.resolve(!1);for(const s of e)n=n.next((o=>o?ie.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new ie(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;n(e[g]).next((E=>{f[g]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(e,n){return new ie(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function P2(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=-1;function Jh(i){return i==null}function Th(i){return i===0&&1/i==-1/0}function x2(i){return typeof i=="number"&&Number.isInteger(i)&&!Th(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="";function V2(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=TE(e)),e=k2(i.get(n),e);return TE(e)}function k2(i,e){let n=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case Q0:n+="";break;default:n+=u}}return n}function TE(i){return i+Q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function pa(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function X0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wc(this.root,e,this.comparator,!0)}}class Wc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??qt.RED,this.left=o??qt.EMPTY,this.right=u??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new qt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return qt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new AE(this.data.getIterator())}getIteratorFrom(e){return new AE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class AE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new Ot(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new W0("Invalid base64 string: "+u):u}})(e);return new Ft(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const L2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const n=L2.exec(i);if(Fe(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(i.seconds),nanos:Et(i.nanos)}}function Et(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function hs(i){return typeof i=="string"?Ft.fromBase64String(i):Ft.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="server_timestamp",J0="__type__",e1="__previous_value__",t1="__local_write_time__";function Pp(i){return(i?.mapValue?.fields||{})[J0]?.stringValue===Z0}function ef(i){const e=i.mapValue.fields[e1];return Pp(e)?ef(e):e}function lu(i){const e=cs(i.mapValue.fields[t1].timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,s,o,u,f,m,p,g,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const Sh="(default)";class uu{constructor(e,n){this.projectId=e,this.database=n||Sh}static empty(){return new uu("","")}get isDefaultDatabase(){return this.database===Sh}isEqual(e){return e instanceof uu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="__type__",j2="__max__",Zc={mapValue:{}},i1="__vector__",Ah="value";function fs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Pp(i)?4:B2(i)?9007199254740991:z2(i)?10:11:Ae(28295,{value:i})}function Di(i,e){if(i===e)return!0;const n=fs(i);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return lu(i).isEqual(lu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=cs(o.timestampValue),m=cs(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return hs(o.bytesValue).isEqual(hs(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Et(o.doubleValue),m=Et(u.doubleValue);return f===m?Th(f)===Th(m):isNaN(f)&&isNaN(m)}return!1})(i,e);case 9:return Ao(i.arrayValue.values||[],e.arrayValue.values||[],Di);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(SE(f)!==SE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Di(f[p],m[p])))return!1;return!0})(i,e);default:return Ae(52216,{left:i})}}function cu(i,e){return(i.values||[]).find((n=>Di(n,e)))!==void 0}function wo(i,e){if(i===e)return 0;const n=fs(i),s=fs(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=Et(u.integerValue||u.doubleValue),p=Et(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(i,e);case 3:return wE(i.timestampValue,e.timestampValue);case 4:return wE(lu(i),lu(e));case 5:return Qm(i.stringValue,e.stringValue);case 6:return(function(u,f){const m=hs(u),p=hs(f);return m.compareTo(p)})(i.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=ke(m[g],p[g]);if(E!==0)return E}return ke(m.length,p.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=ke(Et(u.latitude),Et(f.latitude));return m!==0?m:ke(Et(u.longitude),Et(f.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return bE(i.arrayValue,e.arrayValue);case 10:return(function(u,f){const m=u.fields||{},p=f.fields||{},g=m[Ah]?.arrayValue,E=p[Ah]?.arrayValue,A=ke(g?.values?.length||0,E?.values?.length||0);return A!==0?A:bE(g,E)})(i.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Zc.mapValue&&f===Zc.mapValue)return 0;if(u===Zc.mapValue)return 1;if(f===Zc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let A=0;A<p.length&&A<E.length;++A){const R=Qm(p[A],E[A]);if(R!==0)return R;const k=wo(m[p[A]],g[E[A]]);if(k!==0)return k}return ke(p.length,E.length)})(i.mapValue,e.mapValue);default:throw Ae(23264,{he:n})}}function wE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const n=cs(i),s=cs(e),o=ke(n.seconds,s.seconds);return o!==0?o:ke(n.nanos,s.nanos)}function bE(i,e){const n=i.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=wo(n[o],s[o]);if(u)return u}return ke(n.length,s.length)}function bo(i){return Xm(i)}function Xm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(n){const s=cs(n);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(n){return hs(n).toBase64()})(i.bytesValue):"referenceValue"in i?(function(n){return Ee.fromName(n).toString()})(i.referenceValue):"geoPointValue"in i?(function(n){return`geo(${n.latitude},${n.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Xm(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Xm(n.fields[f])}`;return o+"}"})(i.mapValue):Ae(61005,{value:i})}function ah(i){switch(fs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ef(i);return e?16+ah(e):16;case 5:return 2*i.stringValue.length;case 6:return hs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ah(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return pa(s.fields,((u,f)=>{o+=u.length+ah(f)})),o})(i.mapValue);default:throw Ae(13486,{value:i})}}function Wm(i){return!!i&&"integerValue"in i}function xp(i){return!!i&&"arrayValue"in i}function RE(i){return!!i&&"nullValue"in i}function IE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function oh(i){return!!i&&"mapValue"in i}function z2(i){return(i?.mapValue?.fields||{})[n1]?.stringValue===i1}function eu(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return pa(i.mapValue.fields,((n,s)=>e.mapValue.fields[n]=eu(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eu(i.arrayValue.values[n]);return e}return{...i}}function B2(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===j2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(n)}setAll(e){let n=Ht.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=eu(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());oh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Di(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];oh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){pa(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new kn(eu(this.value))}}function r1(i){const e=[];return pa(i.fields,((n,s)=>{const o=new Ht([n]);if(oh(s)){const u=r1(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Wt(e,0,Re.min(),Re.min(),Re.min(),kn.empty(),0)}static newFoundDocument(e,n,s,o){return new Wt(e,1,n,Re.min(),s,o,0)}static newNoDocument(e,n){return new Wt(e,2,n,Re.min(),Re.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,Re.min(),Re.min(),kn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.position=e,this.inclusive=n}}function CE(i,e,n){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(f.referenceValue),n.key):s=wo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function DE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Di(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n="asc"){this.field=e,this.dir=n}}function q2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{}class Dt extends s1{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new F2(e,n,s):n==="array-contains"?new $2(e,s):n==="in"?new Y2(e,s):n==="not-in"?new Q2(e,s):n==="array-contains-any"?new X2(e,s):new Dt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new G2(e,s):new K2(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(wo(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ni extends s1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ni(e,n)}matches(e){return a1(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function a1(i){return i.op==="and"}function o1(i){return H2(i)&&a1(i)}function H2(i){for(const e of i.filters)if(e instanceof Ni)return!1;return!0}function Zm(i){if(i instanceof Dt)return i.field.canonicalString()+i.op.toString()+bo(i.value);if(o1(i))return i.filters.map((e=>Zm(e))).join(",");{const e=i.filters.map((n=>Zm(n))).join(",");return`${i.op}(${e})`}}function l1(i,e){return i instanceof Dt?(function(s,o){return o instanceof Dt&&s.op===o.op&&s.field.isEqual(o.field)&&Di(s.value,o.value)})(i,e):i instanceof Ni?(function(s,o){return o instanceof Ni&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&l1(f,o.filters[m])),!0):!1})(i,e):void Ae(19439)}function u1(i){return i instanceof Dt?(function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`})(i):i instanceof Ni?(function(n){return n.op.toString()+" {"+n.getFilters().map(u1).join(" ,")+"}"})(i):"Filter"}class F2 extends Dt{constructor(e,n,s){super(e,n,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const n=Ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class G2 extends Dt{constructor(e,n){super(e,"in",n),this.keys=c1("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class K2 extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=c1("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function c1(i,e){return(e.arrayValue?.values||[]).map((n=>Ee.fromName(n.referenceValue)))}class $2 extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xp(n)&&cu(n.arrayValue,this.value)}}class Y2 extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cu(this.value.arrayValue,n)}}class Q2 extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(cu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!cu(this.value.arrayValue,n)}}class X2 extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>cu(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function NE(i,e=null,n=[],s=[],o=null,u=null,f=null){return new W2(i,e,n,s,o,u,f)}function Vp(i){const e=Ce(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Zm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Jh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>bo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>bo(s))).join(",")),e.Te=n}return e.Te}function kp(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!q2(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!l1(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!DE(i.startAt,e.startAt)&&DE(i.endAt,e.endAt)}function Jm(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Z2(i,e,n,s,o,u,f,m){return new tf(i,e,n,s,o,u,f,m)}function Lp(i){return new tf(i)}function OE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function J2(i){return i.collectionGroup!==null}function tu(i){const e=Ce(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ot(Ht.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new bh(u,s))})),n.has(Ht.keyField().canonicalString())||e.Ie.push(new bh(Ht.keyField(),s))}return e.Ie}function Ai(i){const e=Ce(i);return e.Ee||(e.Ee=eD(e,tu(i))),e.Ee}function eD(i,e){if(i.limitType==="F")return NE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new bh(o.field,u)}));const n=i.endAt?new wh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new wh(i.startAt.position,i.startAt.inclusive):null;return NE(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function ep(i,e,n){return new tf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function nf(i,e){return kp(Ai(i),Ai(e))&&i.limitType===e.limitType}function h1(i){return`${Vp(Ai(i))}|lt:${i.limitType}`}function po(i){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>u1(o))).join(", ")}]`),Jh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>bo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>bo(o))).join(",")),`Target(${s})`})(Ai(i))}; limitType=${i.limitType})`}function rf(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of tu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const g=CE(f,m,p);return f.inclusive?g<=0:g<0})(s.startAt,tu(s),o)||s.endAt&&!(function(f,m,p){const g=CE(f,m,p);return f.inclusive?g>=0:g>0})(s.endAt,tu(s),o))})(i,e)}function tD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function f1(i){return(e,n)=>{let s=!1;for(const o of tu(i)){const u=nD(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function nD(i,e,n){const s=i.field.isKeyField()?Ee.comparator(e.key,n.key):(function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?wo(p,g):Ae(42886)})(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){pa(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new ht(Ee.comparator);function hr(){return iD}const d1=new ht(Ee.comparator);function Ql(...i){let e=d1;for(const n of i)e=e.insert(n.key,n);return e}function m1(i){let e=d1;return i.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function ta(){return nu()}function p1(){return nu()}function nu(){return new ga((i=>i.toString()),((i,e)=>i.isEqual(e)))}const rD=new ht(Ee.comparator),sD=new Ot(Ee.comparator);function Le(...i){let e=sD;for(const n of i)e=e.add(n);return e}const aD=new Ot(ke);function oD(){return aD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Th(e)?"-0":e}}function g1(i){return{integerValue:""+i}}function lD(i,e){return x2(e)?g1(e):Up(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this._=void 0}}function uD(i,e,n){return i instanceof Rh?(function(o,u){const f={fields:{[J0]:{stringValue:Z0},[t1]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pp(u)&&(u=ef(u)),u&&(f.fields[e1]=u),{mapValue:f}})(n,e):i instanceof hu?_1(i,e):i instanceof fu?v1(i,e):(function(o,u){const f=y1(o,u),m=ME(f)+ME(o.Ae);return Wm(f)&&Wm(o.Ae)?g1(m):Up(o.serializer,m)})(i,e)}function cD(i,e,n){return i instanceof hu?_1(i,e):i instanceof fu?v1(i,e):n}function y1(i,e){return i instanceof Ih?(function(s){return Wm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Rh extends sf{}class hu extends sf{constructor(e){super(),this.elements=e}}function _1(i,e){const n=E1(e);for(const s of i.elements)n.some((o=>Di(o,s)))||n.push(s);return{arrayValue:{values:n}}}class fu extends sf{constructor(e){super(),this.elements=e}}function v1(i,e){let n=E1(e);for(const s of i.elements)n=n.filter((o=>!Di(o,s)));return{arrayValue:{values:n}}}class Ih extends sf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ME(i){return Et(i.integerValue||i.doubleValue)}function E1(i){return xp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function hD(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof hu&&o instanceof hu||s instanceof fu&&o instanceof fu?Ao(s.elements,o.elements,Di):s instanceof Ih&&o instanceof Ih?Di(s.Ae,o.Ae):s instanceof Rh&&o instanceof Rh})(i.transform,e.transform)}class fD{constructor(e,n){this.version=e,this.transformResults=n}}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class af{}function T1(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new A1(i.key,ar.none()):new Tu(i.key,i.data,ar.none());{const n=i.data,s=kn.empty();let o=new Ot(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ya(i.key,s,new Jn(o.toArray()),ar.none())}}function dD(i,e,n){i instanceof Tu?(function(o,u,f){const m=o.value.clone(),p=xE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,e,n):i instanceof ya?(function(o,u,f){if(!lh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=xE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(S1(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(i,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function iu(i,e,n,s){return i instanceof Tu?(function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=u.value.clone(),E=VE(u.fieldTransforms,p,f);return g.setAll(E),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(i,e,n,s):i instanceof ya?(function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=VE(u.fieldTransforms,p,f),E=f.data;return E.setAll(S1(u)),E.setAll(g),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,n,s):(function(u,f,m){return lh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(i,e,n)}function mD(i,e){let n=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=y1(s.transform,o||null);u!=null&&(n===null&&(n=kn.empty()),n.set(s.field,u))}return n||null}function PE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,((u,f)=>hD(u,f)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Tu extends af{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ya extends af{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function S1(i){const e=new Map;return i.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}})),e}function xE(i,e,n){const s=new Map;Fe(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,cD(f,m,n[o]))}return s}function VE(i,e,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,uD(u,f,e))}return s}class A1 extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pD extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&dD(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=iu(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=iu(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=p1();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=T1(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Re.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((n,s)=>PE(n,s)))&&Ao(this.baseMutations,e.baseMutations,((n,s)=>PE(n,s)))}}class jp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return rD})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new jp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,ze;function vD(i){switch(i){case se.OK:return Ae(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Ae(15467,{code:i})}}function w1(i){if(i===void 0)return cr("GRPC error has no .code"),se.UNKNOWN;switch(i){case At.OK:return se.OK;case At.CANCELLED:return se.CANCELLED;case At.UNKNOWN:return se.UNKNOWN;case At.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case At.INTERNAL:return se.INTERNAL;case At.UNAVAILABLE:return se.UNAVAILABLE;case At.UNAUTHENTICATED:return se.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case At.NOT_FOUND:return se.NOT_FOUND;case At.ALREADY_EXISTS:return se.ALREADY_EXISTS;case At.PERMISSION_DENIED:return se.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case At.ABORTED:return se.ABORTED;case At.OUT_OF_RANGE:return se.OUT_OF_RANGE;case At.UNIMPLEMENTED:return se.UNIMPLEMENTED;case At.DATA_LOSS:return se.DATA_LOSS;default:return Ae(39323,{code:i})}}(ze=At||(At={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=new rs([4294967295,4294967295],0);function kE(i){const e=ED().encode(i),n=new j0;return n.update(e),new Uint8Array(n.digest())}function LE(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new rs([n,s],0),new rs([o,u],0)]}class zp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Xl(`Invalid padding: ${n}`);if(s<0)throw new Xl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Xl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rs.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(rs.fromNumber(s)));return o.compare(TD)===1&&(o=new rs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=kE(e),[s,o]=LE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new zp(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=kE(e),[s,o]=LE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Xl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Su.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new of(Re.min(),o,new ht(ke),hr(),Le())}}class Su{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Su(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class b1{constructor(e,n){this.targetId=e,this.Ce=n}}class R1{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class UE{constructor(){this.ve=0,this.Fe=jE(),this.Me=Ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),s=Le();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ae(38017,{changeType:u})}})),new Su(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=jE()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class SD{constructor(e){this.Ge=e,this.ze=new Map,this.je=hr(),this.Je=Jc(),this.He=Jc(),this.Ye=new ht(ke)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Jm(u))if(s===0){const f=new Ee(u.path);this.et(n,f,Wt.newNoDocument(f,Re.min()))}else Fe(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=hs(s).toUint8Array()}catch(p){if(p instanceof W0)return So("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new zp(f,o,u)}catch(p){return So(p instanceof Xl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Jm(m.target)){const p=new Ee(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,Wt.newNoDocument(p,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Le();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new of(e,n,this.Ye,this.je,s);return this.je=hr(),this.Je=Jc(),this.He=Jc(),this.Ye=new ht(ke),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new UE,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ot(ke),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ot(ke),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new UE),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Jc(){return new ht(Ee.comparator)}function jE(){return new ht(Ee.comparator)}const AD={asc:"ASCENDING",desc:"DESCENDING"},wD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bD={and:"AND",or:"OR"};class RD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tp(i,e){return i.useProto3Json||Jh(e)?e:{value:e}}function Ch(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I1(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ID(i,e){return Ch(i,e.toTimestamp())}function wi(i){return Fe(!!i,49232),Re.fromTimestamp((function(n){const s=cs(n);return new rt(s.seconds,s.nanos)})(i))}function Bp(i,e){return np(i,e).canonicalString()}function np(i,e){const n=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?n:n.child(e)}function C1(i){const e=it.fromString(i);return Fe(P1(e),10190,{key:e.toString()}),e}function ip(i,e){return Bp(i.databaseId,e.path)}function Mm(i,e){const n=C1(e);if(n.get(1)!==i.databaseId.projectId)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new Ee(N1(n))}function D1(i,e){return Bp(i.databaseId,e)}function CD(i){const e=C1(i);return e.length===4?it.emptyPath():N1(e)}function rp(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function N1(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function zE(i,e,n){return{name:ip(i,e),fields:n.value.mapValue.fields}}function DD(i,e){let n;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(g,E){return g.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),Ft.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ft.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(g){const E=g.code===void 0?se.UNKNOWN:w1(g.code);return new me(E,g.message||"")})(f);n=new R1(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Mm(i,s.document.name),u=wi(s.document.updateTime),f=s.document.createTime?wi(s.document.createTime):Re.min(),m=new kn({mapValue:{fields:s.document.fields}}),p=Wt.newFoundDocument(o,u,f,m),g=s.targetIds||[],E=s.removedTargetIds||[];n=new uh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Mm(i,s.document),u=s.readTime?wi(s.readTime):Re.min(),f=Wt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new uh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Mm(i,s.document),u=s.removedTargetIds||[];n=new uh([],u,o,null)}else{if(!("filter"in e))return Ae(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new _D(o,u),m=s.targetId;n=new b1(m,f)}}return n}function ND(i,e){let n;if(e instanceof Tu)n={update:zE(i,e.key,e.value)};else if(e instanceof A1)n={delete:ip(i,e.key)};else if(e instanceof ya)n={update:zE(i,e.key,e.data),updateMask:jD(e.fieldMask)};else{if(!(e instanceof pD))return Ae(16599,{Vt:e.type});n={verify:ip(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Rh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof hu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof fu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ih)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Ae(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:ID(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae(27497)})(i,e.precondition)),n}function OD(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((n=>(function(o,u){let f=o.updateTime?wi(o.updateTime):wi(u);return f.isEqual(Re.min())&&(f=wi(u)),new fD(f,o.transformResults||[])})(n,e)))):[]}function MD(i,e){return{documents:[D1(i,e.path)]}}function PD(i,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=D1(i,o);const u=(function(g){if(g.length!==0)return M1(Ni.create(g,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((E=>(function(R){return{field:go(R.field),direction:kD(R.dir)}})(E)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=tp(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:n,parent:o}}function xD(i){let e=CD(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=(function(A){const R=O1(A);return R instanceof Ni&&o1(R)?R.getFilters():[R]})(n.where));let f=[];n.orderBy&&(f=(function(A){return A.map((R=>(function($){return new bh(yo($.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(R)))})(n.orderBy));let m=null;n.limit&&(m=(function(A){let R;return R=typeof A=="object"?A.value:A,Jh(R)?null:R})(n.limit));let p=null;n.startAt&&(p=(function(A){const R=!!A.before,k=A.values||[];return new wh(k,R)})(n.startAt));let g=null;return n.endAt&&(g=(function(A){const R=!A.before,k=A.values||[];return new wh(k,R)})(n.endAt)),Z2(e,o,f,u,m,"F",p,g)}function VD(i,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O1(i){return i.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=yo(n.unaryFilter.field);return Dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(n.unaryFilter.field);return Dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=yo(n.unaryFilter.field);return Dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=yo(n.unaryFilter.field);return Dt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(i):i.fieldFilter!==void 0?(function(n){return Dt.create(yo(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(n){return Ni.create(n.compositeFilter.filters.map((s=>O1(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(n.compositeFilter.op))})(i):Ae(30097,{filter:i})}function kD(i){return AD[i]}function LD(i){return wD[i]}function UD(i){return bD[i]}function go(i){return{fieldPath:i.canonicalString()}}function yo(i){return Ht.fromServerFormat(i.fieldPath)}function M1(i){return i instanceof Dt?(function(n){if(n.op==="=="){if(IE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NAN"}};if(RE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(IE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NAN"}};if(RE(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(n.field),op:LD(n.op),value:n.value}}})(i):i instanceof Ni?(function(n){const s=n.getFilters().map((o=>M1(o)));return s.length===1?s[0]:{compositeFilter:{op:UD(n.op),filters:s}}})(i):Ae(54877,{filter:i})}function jD(i){const e=[];return i.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function P1(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,s,o,u=Re.min(),f=Re.min(),m=Ft.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.yt=e}}function BD(i){const e=xD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ep(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.Cn=new HD}addToCollectionParentIndex(e,n){return this.Cn.add(n),ie.resolve()}getCollectionParents(e,n){return ie.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ie.resolve()}deleteFieldIndex(e,n){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,n){return ie.resolve()}getDocumentsMatchingTarget(e,n){return ie.resolve(null)}getIndexType(e,n){return ie.resolve(0)}getFieldIndexes(e,n){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,n){return ie.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return ie.resolve(us.min())}updateCollectionGroup(e,n,s){return ie.resolve()}updateIndexEntries(e,n){return ie.resolve()}}class HD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ot(it.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ot(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x1=41943040;class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(x1,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ro(0)}static cr(){return new Ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="LruGarbageCollector",FD=1048576;function HE([i,e],[n,s]){const o=ke(i,n);return o===0?ke(e,s):o}class GD{constructor(e){this.Ir=e,this.buffer=new Ot(HE),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();HE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KD{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(qE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vo(n)?he(qE,"Ignoring IndexedDB error during garbage collection: ",n):await xo(n)}await this.Vr(3e5)}))}}class $D{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ie.resolve(Zh.ce);const s=new GD(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(BE)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),BE):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,f=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,n)))).next((A=>(u=A,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(g=Date.now(),mo()<=Ve.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${A} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function YD(i,e){return new $D(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.changes=new ga((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ie.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&iu(s.mutation,o,Jn.empty(),rt.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Le()){const o=ta();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=Ql();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=ta();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Le())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let u=hr();const f=nu(),m=(function(){return nu()})();return n.forEach(((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof ya)?u=u.insert(g.key,g):E!==void 0?(f.set(g.key,E.mutation.getFieldMask()),iu(E.mutation,g,E.mutation.getFieldMask(),rt.now())):f.set(g.key,Jn.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((g,E)=>f.set(g,E))),n.forEach(((g,E)=>m.set(g,new XD(E,f.get(g)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=nu();let o=new ht(((f,m)=>f-m)),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const g=n.get(p);if(g===null)return;let E=s.get(p)||Jn.empty();E=m.applyToLocalView(g,E),s.set(p,E);const A=(o.get(m.batchId)||Le()).add(p);o=o.insert(m.batchId,A)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,A=p1();E.forEach((R=>{if(!u.has(R)){const k=T1(n.get(R),s.get(R));k!==null&&A.set(R,k),u=u.add(R)}})),f.push(this.documentOverlayCache.saveOverlays(e,g,A))}return ie.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return Ee.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):ie.resolve(ta());let m=ou,p=u;return f.next((g=>ie.forEach(g,((E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?ie.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{p=p.insert(E,R)}))))).next((()=>this.populateOverlays(e,g,u))).next((()=>this.computeViews(e,p,g,Le()))).next((E=>({batchId:m,changes:m1(E)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ee(n)).next((s=>{let o=Ql();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Ql();return this.indexManager.getCollectionParents(e,u).next((m=>ie.forEach(m,(p=>{const g=(function(A,R){return new tf(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next((E=>{E.forEach(((A,R)=>{f=f.insert(A,R)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((p,g)=>{const E=g.getKey();f.get(E)===null&&(f=f.insert(E,Wt.newInvalidDocument(E)))}));let m=Ql();return f.forEach(((p,g)=>{const E=u.get(p);E!==void 0&&iu(E.mutation,g,Jn.empty(),rt.now()),rf(n,g)&&(m=m.insert(p,g))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ie.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:wi(o.createTime)}})(n)),ie.resolve()}getNamedQuery(e,n){return ie.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:BD(o.bundledQuery),readTime:wi(o.readTime)}})(n)),ie.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.overlays=new ht(Ee.comparator),this.qr=new Map}getOverlay(e,n){return ie.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ta();return ie.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),ie.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),ie.resolve()}getOverlaysForCollection(e,n,s){const o=ta(),u=n.length+1,f=new Ee(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return ie.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ht(((g,E)=>g-E));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=ta(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=ta(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>m.set(g,E))),!(m.size()>=o)););return ie.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new yD(n,s));let u=this.qr.get(n);u===void 0&&(u=Le(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.Qr=new Ot(Lt.$r),this.Ur=new Ot(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Lt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new Ee(new it([])),s=new Lt(n,e),o=new Lt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Ee(new it([])),s=new Lt(n,e),o=new Lt(n,e+1);let u=Le();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Lt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Ee.comparator(e.key,n.key)||ke(e.Yr,n.Yr)}static Kr(e,n){return ke(e.Yr,n.Yr)||Ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ot(Lt.$r)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new gD(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Lt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ie.resolve(f)}lookupMutationBatch(e,n){return ie.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return ie.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?Mp:this.tr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),o=new Lt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),ie.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ot(ke);return n.forEach((o=>{const u=new Lt(o,0),f=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),ie.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const f=new Lt(new Ee(u),0);let m=new Ot(ke);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),f),ie.resolve(this.ti(m))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){Fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ie.forEach(n.mutations,(o=>{const u=new Lt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Lt(n,0),o=this.Zr.firstAfterOrEqual(s);return ie.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.ri=e,this.docs=(function(){return new ht(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ie.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(n))}getEntries(e,n){let s=hr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Wt.newInvalidDocument(o))})),ie.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=hr();const f=n.path,m=new Ee(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||N2(D2(E),s)<=0||(o.has(E.key)||rf(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ie.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ae(9500)}ii(e,n){return ie.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new iN(this)}getSize(e){return ie.resolve(this.size)}}class iN extends QD{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ie.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.persistence=e,this.si=new ga((n=>Vp(n)),kp),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new qp,this.targetCount=0,this.ai=Ro.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ie.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ro(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ie.resolve()}updateTargetData(e,n){return this.Pr(n),ie.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),ie.waitFor(u).next((()=>o))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ie.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ie.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),ie.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ie.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ie.resolve(s)}containsKey(e,n){return ie.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Zh(0),this.li=!1,this.li=!0,this.hi=new eN,this.referenceDelegate=e(this),this.Pi=new rN(this),this.indexManager=new qD,this.remoteDocumentCache=(function(o){return new nN(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new zD(n),this.Ii=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new tN(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const o=new sN(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,n){return ie.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class sN extends M2{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Ri=new qp,this.Vi=null}static mi(e){return new Hp(e)}get fi(){if(this.Vi)return this.Vi;throw Ae(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ie.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ie.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ie.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.fi,(s=>{const o=Ee.fromPath(s);return this.gi(e,o).next((u=>{u||n.removeEntry(o,Re.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ie.or([()=>ie.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Dh{constructor(e,n){this.persistence=e,this.pi=new ga((s=>V2(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=YD(this,n)}static mi(e,n){return new Dh(e,n)}Ei(){}di(e){return ie.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ie.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?ie.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((m=>{m||(s++,u.removeEntry(f,Re.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ie.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ie.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ie.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ah(e.data.value)),n}br(e,n,s){return ie.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ie.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Le(),o=Le();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Fp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return NR()?8:P2(Zt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new aN;return this.Ss(e,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)}))})).next((()=>u.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(mo()<=Ve.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",po(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ie.resolve()):(mo()<=Ve.DEBUG&&he("QueryEngine","Query:",po(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(mo()<=Ve.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",po(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ai(n))):ie.resolve())}ys(e,n){if(OE(n))return ie.resolve(null);let s=Ai(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=ep(n,null,"F"),s=Ai(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Le(...u);return this.ps.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(n,m);return this.Cs(n,g,f,p.readTime)?this.ys(e,ep(n,null,"F")):this.vs(e,g,n,p)}))))})))))}ws(e,n,s,o){return OE(n)||o.isEqual(Re.min())?ie.resolve(null):this.ps.getDocuments(e,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?ie.resolve(null):(mo()<=Ve.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),po(n)),this.vs(e,f,n,C2(o,ou)).next((m=>m)))}))}Ds(e,n){let s=new Ot(f1(e));return n.forEach(((o,u)=>{rf(e,u)&&(s=s.add(u))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return mo()<=Ve.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",po(n)),this.ps.getDocumentsMatchingQuery(e,n,us.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="LocalStore",lN=3e8;class uN{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ht(ke),this.xs=new ga((u=>Vp(u)),kp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function cN(i,e,n,s){return new uN(i,e,n,s)}async function k1(i,e){const n=Ce(i);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=Le();for(const g of o){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:f,addedBatchIds:m})))}))}))}function hN(i,e){const n=Ce(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,E){const A=g.batch,R=A.keys();let k=ie.resolve();return R.forEach(($=>{k=k.next((()=>E.getEntry(p,$))).next((J=>{const B=g.docVersions.get($);Fe(B!==null,48541),J.version.compareTo(B)<0&&(A.applyToRemoteDocument(J,g),J.isValidDocument()&&(J.setReadTime(g.commitVersion),E.addEntry(J)))}))})),k.next((()=>m.mutationQueue.removeMutationBatch(p,A)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Le();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function L1(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function fN(i,e){const n=Ce(i),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach(((E,A)=>{const R=o.get(A);if(!R)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,A).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,A))));let k=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?k=k.withResumeToken(Ft.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,s)),o=o.insert(A,k),(function(J,B,Q){return J.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=lN?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(R,k,E)&&m.push(n.Pi.updateTargetData(u,k))}));let p=hr(),g=Le();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(dN(u,f,e.documentUpdates).next((E=>{p=E.ks,g=E.qs}))),!s.isEqual(Re.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((A=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return ie.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,p,g))).next((()=>p))})).then((u=>(n.Ms=o,u)))}function dN(i,e,n){let s=Le(),o=Le();return n.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let f=hr();return n.forEach(((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):he(Gp,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function mN(i,e){const n=Ce(i);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Mp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function pN(i,e){const n=Ce(i);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((u=>u?(o=u,ie.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new ts(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function sp(i,e,n){const s=Ce(i),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Vo(f))throw f;he(Gp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function FE(i,e,n){const s=Ce(i);let o=Re.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,g,E){const A=Ce(p),R=A.xs.get(E);return R!==void 0?ie.resolve(A.Ms.get(R)):A.Pi.getTargetData(g,E)})(s,f,Ai(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Re.min(),n?u:Le()))).next((m=>(gN(s,tD(e),m),{documents:m,Qs:u})))))}function gN(i,e,n){let s=i.Os.get(e)||Re.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class GE{constructor(){this.activeTargetIds=oD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yN{constructor(){this.Mo=new GE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new GE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="ConnectivityMonitor";class $E{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(KE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(KE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh=null;function ap(){return eh===null?eh=(function(){return 268435456+Math.round(2147483648*Math.random())})():eh++,"0x"+eh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="RestConnection",vN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Sh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=ap(),m=this.zo(e,n.toUriEncodedString());he(Pm,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,u);const{host:g}=new URL(m),E=fa(g);return this.Jo(e,m,p,s,E).then((A=>(he(Pm,`Received RPC '${e}' ${f}: `,A),A)),(A=>{throw So(Pm,`RPC '${e}' ${f} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,n){const s=vN[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class SN extends EN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=ap();return new Promise(((m,p)=>{const g=new z0;g.setWithCredentials(!0),g.listenOnce(B0.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case sh.NO_ERROR:const A=g.getResponseJson();he(Qt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(A)),m(A);break;case sh.TIMEOUT:he(Qt,`RPC '${e}' ${f} timed out`),p(new me(se.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const R=g.getStatus();if(he(Qt,`RPC '${e}' ${f} failed with status:`,R,"response text:",g.getResponseText()),R>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const $=k?.error;if($&&$.status&&$.message){const J=(function(Q){const Y=Q.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(Y)>=0?Y:se.UNKNOWN})($.status);p(new me(J,$.message))}else p(new me(se.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new me(se.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(Qt,`RPC '${e}' ${f} completed.`)}}));const E=JSON.stringify(o);he(Qt,`RPC '${e}' ${f} sending request:`,o),g.send(n,"POST",E,s,15)}))}T_(e,n,s){const o=ap(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=F0(),m=H0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");he(Qt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const A=f.createWebChannel(E,p);this.I_(A);let R=!1,k=!1;const $=new TN({Yo:B=>{k?he(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(R||(he(Qt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),R=!0),he(Qt,`RPC '${e}' stream ${o} sending:`,B),A.send(B))},Zo:()=>A.close()}),J=(B,Q,Y)=>{B.listen(Q,(re=>{try{Y(re)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return J(A,Yl.EventType.OPEN,(()=>{k||(he(Qt,`RPC '${e}' stream ${o} transport opened.`),$.o_())})),J(A,Yl.EventType.CLOSE,(()=>{k||(k=!0,he(Qt,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(A))})),J(A,Yl.EventType.ERROR,(B=>{k||(k=!0,So(Qt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),$.a_(new me(se.UNAVAILABLE,"The operation could not be completed")))})),J(A,Yl.EventType.MESSAGE,(B=>{if(!k){const Q=B.data[0];Fe(!!Q,16349);const Y=Q,re=Y?.error||Y[0]?.error;if(re){he(Qt,`RPC '${e}' stream ${o} received error:`,re);const fe=re.status;let ae=(function(b){const I=At[b];if(I!==void 0)return w1(I)})(fe),pe=re.message;ae===void 0&&(ae=se.INTERNAL,pe="Unknown error status: "+fe+" with message "+re.message),k=!0,$.a_(new me(ae,pe)),A.close()}else he(Qt,`RPC '${e}' stream ${o} received:`,Q),$.u_(Q)}})),J(m,q0.STAT_EVENT,(B=>{B.stat===Ym.PROXY?he(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Ym.NOPROXY&&he(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function xm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(i){return new RD(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="PersistentStream";class j1{constructor(e,n,s,o,u,f,m,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new U1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new me(se.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(YE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(YE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AN extends j1{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=DD(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?wi(f.readTime):Re.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=rp(this.serializer),n.addTarget=(function(u,f){let m;const p=f.target;if(m=Jm(p)?{documents:MD(u,p)}:{query:PD(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=I1(u,f.resumeToken);const g=tp(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=Ch(u,f.snapshotVersion.toTimestamp());const g=tp(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,e);const s=VD(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=rp(this.serializer),n.removeTarget=e,this.q_(n)}}class wN extends j1{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=OD(e.writeResults,e.commitTime),s=wi(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=rp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>ND(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{}class RN extends bN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(e,np(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(se.UNKNOWN,u.toString())}))}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(e,np(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new me(se.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class IN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(cr(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="RemoteStore";class CN{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{_a(this)&&(he(ua,"Restarting streams for network reachability change."),await(async function(p){const g=Ce(p);g.Ea.add(4),await Au(g),g.Ra.set("Unknown"),g.Ea.delete(4),await uf(g)})(this))}))})),this.Ra=new IN(s,o)}}async function uf(i){if(_a(i))for(const e of i.da)await e(!0)}async function Au(i){for(const e of i.da)await e(!1)}function z1(i,e){const n=Ce(i);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qp(n)?Yp(n):ko(n).O_()&&$p(n,e))}function Kp(i,e){const n=Ce(i),s=ko(n);n.Ia.delete(e),s.O_()&&B1(n,e),n.Ia.size===0&&(s.O_()?s.L_():_a(n)&&n.Ra.set("Unknown"))}function $p(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(i).Y_(e)}function B1(i,e){i.Va.Ue(e),ko(i).Z_(e)}function Yp(i){i.Va=new SD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ko(i).start(),i.Ra.ua()}function Qp(i){return _a(i)&&!ko(i).x_()&&i.Ia.size>0}function _a(i){return Ce(i).Ea.size===0}function q1(i){i.Va=void 0}async function DN(i){i.Ra.set("Online")}async function NN(i){i.Ia.forEach(((e,n)=>{$p(i,e)}))}async function ON(i,e){q1(i),Qp(i)?(i.Ra.ha(e),Yp(i)):i.Ra.set("Unknown")}async function MN(i,e,n){if(i.Ra.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){he(ua,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Nh(i,s)}else if(e instanceof uh?i.Va.Ze(e):e instanceof b1?i.Va.st(e):i.Va.tt(e),!n.isEqual(Re.min()))try{const s=await L1(i.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ia.get(g);E&&u.Ia.set(g,E.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,g)=>{const E=u.Ia.get(p);if(!E)return;u.Ia.set(p,E.withResumeToken(Ft.EMPTY_BYTE_STRING,E.snapshotVersion)),B1(u,p);const A=new ts(E.target,p,g,E.sequenceNumber);$p(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,n)}catch(s){he(ua,"Failed to raise snapshot:",s),await Nh(i,s)}}async function Nh(i,e,n){if(!Vo(e))throw e;i.Ea.add(1),await Au(i),i.Ra.set("Offline"),n||(n=()=>L1(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{he(ua,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await uf(i)}))}function H1(i,e){return e().catch((n=>Nh(i,n,e)))}async function cf(i){const e=Ce(i),n=ds(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mp;for(;PN(e);)try{const o=await mN(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,xN(e,o)}catch(o){await Nh(e,o)}F1(e)&&G1(e)}function PN(i){return _a(i)&&i.Ta.length<10}function xN(i,e){i.Ta.push(e);const n=ds(i);n.O_()&&n.X_&&n.ea(e.mutations)}function F1(i){return _a(i)&&!ds(i).x_()&&i.Ta.length>0}function G1(i){ds(i).start()}async function VN(i){ds(i).ra()}async function kN(i){const e=ds(i);for(const n of i.Ta)e.ea(n.mutations)}async function LN(i,e,n){const s=i.Ta.shift(),o=jp.from(s,e,n);await H1(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await cf(i)}async function UN(i,e){e&&ds(i).X_&&await(async function(s,o){if((function(f){return vD(f)&&f!==se.ABORTED})(o.code)){const u=s.Ta.shift();ds(s).B_(),await H1(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await cf(s)}})(i,e),F1(i)&&G1(i)}async function QE(i,e){const n=Ce(i);n.asyncQueue.verifyOperationInProgress(),he(ua,"RemoteStore received new credentials");const s=_a(n);n.Ea.add(3),await Au(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await uf(n)}async function jN(i,e){const n=Ce(i);e?(n.Ea.delete(2),await uf(n)):e||(n.Ea.add(2),await Au(n),n.Ra.set("Unknown"))}function ko(i){return i.ma||(i.ma=(function(n,s,o){const u=Ce(n);return u.sa(),new AN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:DN.bind(null,i),t_:NN.bind(null,i),r_:ON.bind(null,i),H_:MN.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Qp(i)?Yp(i):i.Ra.set("Unknown")):(await i.ma.stop(),q1(i))}))),i.ma}function ds(i){return i.fa||(i.fa=(function(n,s,o){const u=Ce(n);return u.sa(),new wN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:VN.bind(null,i),r_:UN.bind(null,i),ta:kN.bind(null,i),na:LN.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await cf(i)):(await i.fa.stop(),i.Ta.length>0&&(he(ua,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Xp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wp(i,e){if(cr("AsyncQueue",`${e}: ${i}`),Vo(i))return new me(se.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||Ee.comparator(n.key,s.key):(n,s)=>Ee.comparator(n.key,s.key),this.keyedMap=Ql(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.ga=new ht(Ee.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ae(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Io{constructor(e,n,s,o,u,f,m,p,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new Io(e,n,_o.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class BN{constructor(){this.queries=WE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Ce(n),u=o.queries;o.queries=WE(),u.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new me(se.ABORTED,"Firestore shutting down"))}}function WE(){return new ga((i=>h1(i)),nf)}async function K1(i,e){const n=Ce(i);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new zN,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Wp(f,`Initialization of query '${po(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&Zp(n)}async function $1(i,e){const n=Ce(i),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function qN(i,e){const n=Ce(i);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Zp(n)}function HN(i,e,n){const s=Ce(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function Zp(i){i.Ca.forEach((e=>{e.next()}))}var op,ZE;(ZE=op||(op={})).Ma="default",ZE.Cache="cache";class Y1{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.key=e}}class X1{constructor(e){this.key=e}}class FN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=f1(e),this.tu=new _o(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new XE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const R=o.get(E),k=rf(this.query,A)?A:null,$=!!R&&this.mutatedKeys.has(R.key),J=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let B=!1;R&&k?R.data.isEqual(k.data)?$!==J&&(s.track({type:3,doc:k}),B=!0):this.su(R,k)||(s.track({type:2,doc:k}),B=!0,(p&&this.eu(k,p)>0||g&&this.eu(k,g)<0)&&(m=!0)):!R&&k?(s.track({type:0,doc:k}),B=!0):R&&!k&&(s.track({type:1,doc:R}),B=!0,(p||g)&&(m=!0)),B&&(k?(f=f.add(k),u=J?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((E,A)=>(function(k,$){const J=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Rt:B})}};return J(k)-J($)})(E.type,A.type)||this.eu(E.doc,A.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,f.length!==0||g?{snapshot:new Io(this.query,e.tu,u,f,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new XE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new X1(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new Q1(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Jp="SyncEngine";class GN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class KN{constructor(e){this.key=e,this.hu=!1}}class $N{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ga((m=>h1(m)),nf),this.Iu=new Map,this.Eu=new Set,this.du=new ht(Ee.comparator),this.Au=new Map,this.Ru=new qp,this.Vu={},this.mu=new Map,this.fu=Ro.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YN(i,e,n=!0){const s=nS(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await W1(s,e,n,!0),o}async function QN(i,e){const n=nS(i);await W1(n,e,!0,!1)}async function W1(i,e,n,s){const o=await pN(i.localStore,Ai(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await XN(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&z1(i.remoteStore,o),m}async function XN(i,e,n,s,o){i.pu=(A,R,k)=>(async function(J,B,Q,Y){let re=B.view.ru(Q);re.Cs&&(re=await FE(J.localStore,B.query,!1).then((({documents:N})=>B.view.ru(N,re))));const fe=Y&&Y.targetChanges.get(B.targetId),ae=Y&&Y.targetMismatches.get(B.targetId)!=null,pe=B.view.applyChanges(re,J.isPrimaryClient,fe,ae);return eT(J,B.targetId,pe.au),pe.snapshot})(i,A,R,k);const u=await FE(i.localStore,e,!0),f=new FN(e,u.Qs),m=f.ru(u.documents),p=Su.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),g=f.applyChanges(m,i.isPrimaryClient,p);eT(i,n,g.au);const E=new GN(e,n,f);return i.Tu.set(e,E),i.Iu.has(n)?i.Iu.get(n).push(e):i.Iu.set(n,[e]),g.snapshot}async function WN(i,e,n){const s=Ce(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!nf(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sp(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Kp(s.remoteStore,o.targetId),lp(s,o.targetId)})).catch(xo)):(lp(s,o.targetId),await sp(s.localStore,o.targetId,!0))}async function ZN(i,e){const n=Ce(i),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Kp(n.remoteStore,s.targetId))}async function JN(i,e,n){const s=aO(i);try{const o=await(function(f,m){const p=Ce(f),g=rt.now(),E=m.reduce(((k,$)=>k.add($.key)),Le());let A,R;return p.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let $=hr(),J=Le();return p.Ns.getEntries(k,E).next((B=>{$=B,$.forEach(((Q,Y)=>{Y.isValidDocument()||(J=J.add(Q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(k,$))).next((B=>{A=B;const Q=[];for(const Y of m){const re=mD(Y,A.get(Y.key).overlayedDocument);re!=null&&Q.push(new ya(Y.key,re,r1(re.value.mapValue),ar.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,Q,m)})).next((B=>{R=B;const Q=B.applyToLocalDocumentSet(A,J);return p.documentOverlayCache.saveOverlays(k,B.batchId,Q)}))})).then((()=>({batchId:R.batchId,changes:m1(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let g=f.Vu[f.currentUser.toKey()];g||(g=new ht(ke)),g=g.insert(m,p),f.Vu[f.currentUser.toKey()]=g})(s,o.batchId,n),await wu(s,o.changes),await cf(s.remoteStore)}catch(o){const u=Wp(o,"Failed to persist write");n.reject(u)}}async function Z1(i,e){const n=Ce(i);try{const s=await fN(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Fe(f.hu,14607):o.removedDocuments.size>0&&(Fe(f.hu,42227),f.hu=!1))})),await wu(n,s,e)}catch(s){await xo(s)}}function JE(i,e,n){const s=Ce(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Ce(f);p.onlineState=m;let g=!1;p.queries.forEach(((E,A)=>{for(const R of A.Sa)R.va(m)&&(g=!0)})),g&&Zp(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eO(i,e,n){const s=Ce(i);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new ht(Ee.comparator);f=f.insert(u,Wt.newNoDocument(u,Re.min()));const m=Le().add(u),p=new of(Re.min(),new Map,new ht(ke),f,m);await Z1(s,p),s.du=s.du.remove(u),s.Au.delete(e),eg(s)}else await sp(s.localStore,e,!1).then((()=>lp(s,e,n))).catch(xo)}async function tO(i,e){const n=Ce(i),s=e.batch.batchId;try{const o=await hN(n.localStore,e);eS(n,s,null),J1(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await wu(n,o)}catch(o){await xo(o)}}async function nO(i,e,n){const s=Ce(i);try{const o=await(function(f,m){const p=Ce(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next((A=>(Fe(A!==null,37113),E=A.keys(),p.mutationQueue.removeMutationBatch(g,A)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);eS(s,e,n),J1(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await wu(s,o)}catch(o){await xo(o)}}function J1(i,e){(i.mu.get(e)||[]).forEach((n=>{n.resolve()})),i.mu.delete(e)}function eS(i,e,n){const s=Ce(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function lp(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),n&&i.Pu.yu(s,n);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||tS(i,s)}))}function tS(i,e){i.Eu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(Kp(i.remoteStore,n),i.du=i.du.remove(e),i.Au.delete(n),eg(i))}function eT(i,e,n){for(const s of n)s instanceof Q1?(i.Ru.addReference(s.key,e),iO(i,s)):s instanceof X1?(he(Jp,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||tS(i,s.key)):Ae(19791,{wu:s})}function iO(i,e){const n=e.key,s=n.path.canonicalString();i.du.get(n)||i.Eu.has(s)||(he(Jp,"New document in limbo: "+n),i.Eu.add(s),eg(i))}function eg(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const n=new Ee(it.fromString(e)),s=i.fu.next();i.Au.set(s,new KN(n)),i.du=i.du.insert(n,s),z1(i.remoteStore,new ts(Ai(Lp(n.path)),s,"TargetPurposeLimboResolution",Zh.ce))}}async function wu(i,e,n){const s=Ce(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((g=>{if((g||n)&&s.isPrimaryClient){const E=g?!g.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){o.push(g);const E=Fp.As(p.targetId,g);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,g){const E=Ce(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>ie.forEach(g,(R=>ie.forEach(R.Es,(k=>E.persistence.referenceDelegate.addReference(A,R.targetId,k))).next((()=>ie.forEach(R.ds,(k=>E.persistence.referenceDelegate.removeReference(A,R.targetId,k)))))))))}catch(A){if(!Vo(A))throw A;he(Gp,"Failed to update sequence numbers: "+A)}for(const A of g){const R=A.targetId;if(!A.fromCache){const k=E.Ms.get(R),$=k.snapshotVersion,J=k.withLastLimboFreeSnapshotVersion($);E.Ms=E.Ms.insert(R,J)}}})(s.localStore,u))}async function rO(i,e){const n=Ce(i);if(!n.currentUser.isEqual(e)){he(Jp,"User change. New user:",e.toKey());const s=await k1(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new me(se.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wu(n,s.Ls)}}function sO(i,e){const n=Ce(i),s=n.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function nS(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eO.bind(null,e),e.Pu.H_=qN.bind(null,e.eventManager),e.Pu.yu=HN.bind(null,e.eventManager),e}function aO(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nO.bind(null,e),e}class Oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cN(this.persistence,new oN,e.initialUser,this.serializer)}Cu(e){return new V1(Hp.mi,this.serializer)}Du(e){return new yN}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oh.provider={build:()=>new Oh};class oO extends Oh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Fe(this.persistence.referenceDelegate instanceof Dh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new KD(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new V1((s=>Dh.mi(s,n)),this.serializer)}}class up{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>JE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rO.bind(null,this.syncEngine),await jN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new BN})()}createDatastore(e){const n=lf(e.databaseInfo.databaseId),s=(function(u){return new SN(u)})(e.databaseInfo);return(function(u,f,m,p){return new RN(u,f,m,p)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,m){return new CN(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>JE(this.syncEngine,n,0)),(function(){return $E.v()?new $E:new _N})())}createSyncEngine(e,n){return(function(o,u,f,m,p,g,E){const A=new $N(o,u,f,m,p,g);return E&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ce(n);he(ua,"RemoteStore shutting down."),s.Ea.add(5),await Au(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}up.provider={build:()=>new up};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirestoreClient";class lO{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=Np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{he(ms,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(he(ms,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Wp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Vm(i,e){i.asyncQueue.verifyOperationInProgress(),he(ms,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await k1(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function tT(i,e){i.asyncQueue.verifyOperationInProgress();const n=await uO(i);he(ms,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener((s=>QE(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>QE(e.remoteStore,o))),i._onlineComponents=e}async function uO(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){he(ms,"Using user provided OfflineComponentProvider");try{await Vm(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===se.FAILED_PRECONDITION||o.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;So("Error using user provided cache. Falling back to memory cache: "+n),await Vm(i,new Oh)}}else he(ms,"Using default OfflineComponentProvider"),await Vm(i,new oO(void 0));return i._offlineComponents}async function rS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(he(ms,"Using user provided OnlineComponentProvider"),await tT(i,i._uninitializedComponentsProvider._online)):(he(ms,"Using default OnlineComponentProvider"),await tT(i,new up))),i._onlineComponents}function cO(i){return rS(i).then((e=>e.syncEngine))}async function cp(i){const e=await rS(i),n=e.eventManager;return n.onListen=YN.bind(null,e.syncEngine),n.onUnlisten=WN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZN.bind(null,e.syncEngine),n}function hO(i,e,n={}){const s=new ss;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,g){const E=new iS({next:R=>{E.Nu(),f.enqueueAndForget((()=>$1(u,A))),R.fromCache&&p.source==="server"?g.reject(new me(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(R)},error:R=>g.reject(R)}),A=new Y1(m,E,{includeMetadataChanges:!0,qa:!0});return K1(u,A)})(await cp(i),i.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firestore.googleapis.com",iT=!0;class rT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aS,this.ssl=iT}else this.host=e.host,this.ssl=e.ssl??iT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=x1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FD)throw new me(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sS(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hf{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new y2;switch(s.type){case"firstParty":return new T2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=nT.get(n);s&&(he("ComponentProvider","Removing Datastore"),nT.delete(n),s.terminate())})(this),Promise.resolve()}}function fO(i,e,n,s={}){i=as(i,hf);const o=fa(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${n}`;o&&(Tp(`https://${m}`),Sp("Firestore",!0)),u.host!==aS&&u.host!==m&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!ls(p,f)&&(i._setSettings(p),s.mockUserToken)){let g,E;if(typeof s.mockUserToken=="string")g=s.mockUserToken,E=Xt.MOCK_USER;else{g=o0(s.mockUserToken,i._app?.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new me(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xt(A)}i._authCredentials=new _2(new K0(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new bu(this.firestore,e,this._query)}}class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Eu(n,Nt._jsonSchema))return new Nt(e,s||null,new Ee(it.fromString(n.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:wt("string",Nt._jsonSchemaVersion),referencePath:wt("string")};class os extends bu{constructor(e,n,s){super(e,n,Lp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Ee(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function dO(i,e,...n){if(i=lt(i),$0("collection","path",e),i instanceof hf){const s=it.fromString(e,...n);return _E(s),new os(i,null,s)}{if(!(i instanceof Nt||i instanceof os))throw new me(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...n));return _E(s),new os(i.firestore,null,s)}}function Mh(i,e,...n){if(i=lt(i),arguments.length===1&&(e=Np.newId()),$0("doc","path",e),i instanceof hf){const s=it.fromString(e,...n);return yE(s),new Nt(i,null,new Ee(s))}{if(!(i instanceof Nt||i instanceof os))throw new me(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...n));return yE(s),new Nt(i.firestore,i instanceof os?i.converter:null,new Ee(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="AsyncQueue";class aT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new U1(this,"async_queue_retry"),this._c=()=>{const s=xm();s&&he(sT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=xm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=xm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ss;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;he(sT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,cr("INTERNAL UNHANDLED ERROR: ",oT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Xp.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ae(47125,{Pc:oT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function oT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(i){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class du extends hf{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new aT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new aT(e),this._firestoreClient=void 0,await e}}}function mO(i,e){const n=typeof i=="object"?i:Qh(),s=typeof i=="string"?i:Sh,o=ps(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=r0("firestore");u&&fO(o,...u)}return o}function tg(i){if(i._terminated)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||pO(i),i._firestoreClient}function pO(i){const e=i._freezeSettings(),n=(function(o,u,f,m){return new U2(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,sS(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new lO(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Ft.fromBase64String(e))}catch(n){throw new me(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Eu(e,Ln._jsonSchema))return Ln.fromBase64String(e.bytes)}}Ln._jsonSchemaVersion="firestore/bytes/1.0",Ln._jsonSchema={type:wt("string",Ln._jsonSchemaVersion),bytes:wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bi._jsonSchemaVersion}}static fromJSON(e){if(Eu(e,bi._jsonSchema))return new bi(e.latitude,e.longitude)}}bi._jsonSchemaVersion="firestore/geoPoint/1.0",bi._jsonSchema={type:wt("string",bi._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Eu(e,Ri._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ri(e.vectorValues);throw new me(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ri._jsonSchemaVersion="firestore/vectorValue/1.0",Ri._jsonSchema={type:wt("string",Ri._jsonSchemaVersion),vectorValues:wt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=/^__.*__$/;class yO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ya(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tu(e,this.data,n,this.fieldTransforms)}}function lS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ac:i})}}class ig{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ig({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ph(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lS(this.Ac)&&gO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _O{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||lf(e)}Cc(e,n,s,o=!1){return new ig({Ac:e,methodName:n,Dc:s,path:Ht.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vO(i){const e=i._freezeSettings(),n=lf(i._databaseId);return new _O(i._databaseId,!!e.ignoreUndefinedProperties,n)}function EO(i,e,n,s,o,u={}){const f=i.Cc(u.merge||u.mergeFields?2:0,e,n,o);fS("Data must be an object, but it was:",f,s);const m=cS(s,f);let p,g;if(u.merge)p=new Jn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const R=TO(e,A,n);if(!f.contains(R))throw new me(se.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);AO(E,R)||E.push(R)}p=new Jn(E),g=f.fieldTransforms.filter((A=>p.covers(A.field)))}else p=null,g=f.fieldTransforms;return new yO(new kn(m),p,g)}function uS(i,e){if(hS(i=lt(i)))return fS("Unsupported field value:",e,i),cS(i,e);if(i instanceof oS)return(function(s,o){if(!lS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let p=uS(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lD(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=rt.fromDate(s);return{timestampValue:Ch(o.serializer,u)}}if(s instanceof rt){const u=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ch(o.serializer,u)}}if(s instanceof bi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ln)return{bytesValue:I1(o.serializer,s._byteString)};if(s instanceof Nt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Bp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ri)return(function(f,m){return{mapValue:{fields:{[n1]:{stringValue:i1},[Ah]:{arrayValue:{values:f.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return Up(m.serializer,g)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Op(s)}`)})(i,e)}function cS(i,e){const n={};return X0(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pa(i,((s,o)=>{const u=uS(o,e.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function hS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof rt||i instanceof bi||i instanceof Ln||i instanceof Nt||i instanceof oS||i instanceof Ri)}function fS(i,e,n){if(!hS(n)||!Y0(n)){const s=Op(n);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function TO(i,e,n){if((e=lt(e))instanceof ng)return e._internalPath;if(typeof e=="string")return dS(i,e);throw Ph("Field path arguments must be of type string or ",i,!1,void 0,n)}const SO=new RegExp("[~\\*/\\[\\]]");function dS(i,e,n){if(e.search(SO)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new ng(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Ph(i,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new me(se.INVALID_ARGUMENT,m+i+p)}function AO(i,e){return i.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wO extends mS{data(){return super.data()}}function pS(i,e){return typeof e=="string"?dS(i,e):e instanceof ng?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new me(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bO{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return pa(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){const n=e.fields?.[Ah].arrayValue?.values?.map((s=>Et(s.doubleValue)));return new Ri(n)}convertGeoPoint(e){return new bi(Et(e.latitude),Et(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ef(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(lu(e));default:return null}}convertTimestamp(e){const n=cs(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);Fe(P1(s),9688,{name:e});const o=new uu(s.get(1),s.get(3)),u=new Ee(s.popFirst(5));return o.isEqual(n)||cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(i,e,n){let s;return s=i?i.toFirestore(e):e,s}class Wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ia extends mS{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pS("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ia._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ia._jsonSchemaVersion="firestore/documentSnapshot/1.0",ia._jsonSchema={type:wt("string",ia._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class ch extends ia{data(e={}){return super.data(e)}}class ra{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Wl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ch(this._firestore,this._userDataWriter,s.key,s,new Wl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Wl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Wl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:IO(m.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ra._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IO(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:i})}}ra._jsonSchemaVersion="firestore/querySnapshot/1.0",ra._jsonSchema={type:wt("string",ra._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};class rg extends bO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function CO(i){i=as(i,bu);const e=as(i.firestore,du),n=tg(e),s=new rg(e);return gS(i._query),hO(n,i._query).then((o=>new ra(e,s,i,o)))}function uT(i,e,n){i=as(i,Nt);const s=as(i.firestore,du),o=RO(i.converter,e);return DO(s,[EO(vO(s),"setDoc",i._key,o,i.converter!==null,n).toMutation(i._key,ar.none())])}function cT(i,...e){i=lt(i);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||lT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(lT(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let u,f,m;if(i instanceof Nt)f=as(i.firestore,du),m=Lp(i._key.path),u={next:p=>{e[s]&&e[s](NO(f,i,p))},error:e[s+1],complete:e[s+2]};else{const p=as(i,bu);f=as(p.firestore,du),m=p._query;const g=new rg(f);u={next:E=>{e[s]&&e[s](new ra(f,g,p,E))},error:e[s+1],complete:e[s+2]},gS(i._query)}return(function(g,E,A,R){const k=new iS(R),$=new Y1(E,k,A);return g.asyncQueue.enqueueAndForget((async()=>K1(await cp(g),$))),()=>{k.Nu(),g.asyncQueue.enqueueAndForget((async()=>$1(await cp(g),$)))}})(tg(f),m,o,u)}function DO(i,e){return(function(s,o){const u=new ss;return s.asyncQueue.enqueueAndForget((async()=>JN(await cO(s),o,u))),u.promise})(tg(i),e)}function NO(i,e,n){const s=n.docs.get(e._key),o=new rg(i);return new ia(i,o,e._key,s,new Wl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){Po=o})(ma),ri(new jn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new du(new v2(s.getProvider("auth-internal")),new S2(f,s.getProvider("app-check-internal")),(function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new me(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uu(g.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),hn(dE,mE,e),hn(dE,mE,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="firebasestorage.googleapis.com",OO="storageBucket",MO=120*1e3,PO=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends zn{constructor(e,n,s=0){super(km(e),`Firebase Storage: ${n} (${km(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return km(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oi;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oi||(Oi={}));function km(i){return"storage/"+i}function xO(){const i="An unknown error occurred, please check the error payload for server response.";return new Pi(Oi.UNKNOWN,i)}function VO(){return new Pi(Oi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kO(){return new Pi(Oi.CANCELED,"User canceled the upload/download.")}function LO(i){return new Pi(Oi.INVALID_URL,"Invalid URL '"+i+"'.")}function UO(i){return new Pi(Oi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function hT(i){return new Pi(Oi.INVALID_ARGUMENT,i)}function _S(){return new Pi(Oi.APP_DELETED,"The Firebase app was deleted.")}function jO(i){return new Pi(Oi.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ei.makeFromUrl(e,n)}catch{return new ei(e,"")}if(s.path==="")return s;throw UO(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function g(fe){fe.path_=decodeURIComponent(fe.path)}const E="v[A-Za-z0-9_]+",A=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",k=new RegExp(`^https?://${A}/${E}/b/${o}/o${R}`,"i"),$={bucket:1,path:3},J=n===yS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,B="([^?#]*)",Q=new RegExp(`^https?://${J}/${o}/${B}`,"i"),re=[{regex:m,indices:p,postModify:u},{regex:k,indices:$,postModify:g},{regex:Q,indices:{bucket:1,path:2},postModify:g}];for(let fe=0;fe<re.length;fe++){const ae=re[fe],pe=ae.regex.exec(e);if(pe){const N=pe[ae.indices.bucket];let b=pe[ae.indices.path];b||(b=""),s=new ei(N,b),ae.postModify(s);break}}if(s==null)throw LO(e);return s}}class zO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(i,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let g=!1;function E(...B){g||(g=!0,e.apply(null,B))}function A(B){o=setTimeout(()=>{o=null,i(k,p())},B)}function R(){u&&clearTimeout(u)}function k(B,...Q){if(g){R();return}if(B){R(),E.call(null,B,...Q);return}if(p()||f){R(),E.call(null,B,...Q);return}s<64&&(s*=2);let re;m===1?(m=2,re=0):re=(s+Math.random())*1e3,A(re)}let $=!1;function J(B){$||($=!0,R(),!g&&(o!==null?(B||(m=2),clearTimeout(o),A(0)):B||(m=1)))}return A(0),u=setTimeout(()=>{f=!0,J(!0)},n),J}function qO(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(i){return i!==void 0}function fT(i,e,n,s){if(s<e)throw hT(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>n)throw hT(`Invalid value for '${i}'. Expected ${n} or less.`)}function FO(i){const e=encodeURIComponent;let n="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var xh;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(xh||(xh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(i,e){const n=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n,s,o,u,f,m,p,g,E,A,R=!0,k=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=A,this.retry=R,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,J)=>{this.resolve_=$,this.reject_=J,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new th(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===xh.NO_ERROR,p=u.getStatus();if(!m||GO(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===xh.ABORT;s(!1,new th(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new th(g,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());HO(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=xO();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?_S():kO();f(p)}else{const p=VO();f(p)}};this.canceled_?n(!1,new th(!1,null,!0)):this.backoffId_=BO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class th{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function $O(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function YO(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QO(i,e){e&&(i["X-Firebase-GMPID"]=e)}function XO(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function WO(i,e,n,s,o,u,f=!0,m=!1){const p=FO(i.urlParams),g=i.url+p,E=Object.assign({},i.headers);return QO(E,e),$O(E,n),YO(E,u),XO(E,s),new KO(g,i.method,E,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,f,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function JO(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this._service=e,n instanceof ei?this._location=n:this._location=ei.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vh(e,n)}get root(){const e=new ei(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JO(this._location.path)}get storage(){return this._service}get parent(){const e=ZO(this._location.path);if(e===null)return null;const n=new ei(this._location.bucket,e);return new Vh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jO(e)}}function dT(i,e){const n=e?.[OO];return n==null?null:ei.makeFromBucketSpec(n,i)}function e4(i,e,n,s={}){i.host=`${e}:${n}`;const o=fa(e);o&&(Tp(`https://${i.host}/b`),Sp("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(i._overrideAuthToken=typeof u=="string"?u:o0(u,i.app.options.projectId))}class t4{constructor(e,n,s,o,u,f=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=yS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MO,this._maxUploadRetryTime=PO,this._requests=new Set,o!=null?this._bucket=ei.makeFromBucketSpec(o,this._host):this._bucket=dT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ei.makeFromBucketSpec(this._url,e):this._bucket=dT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vh(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new zO(_S());{const f=WO(e,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const mT="@firebase/storage",pT="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="storage";function n4(i=Qh(),e){i=lt(i);const s=ps(i,vS).getImmediate({identifier:e}),o=r0("storage");return o&&i4(s,...o),s}function i4(i,e,n,s={}){e4(i,e,n,s)}function r4(i,{instanceIdentifier:e}){const n=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new t4(n,s,o,e,ma)}function s4(){ri(new jn(vS,r4,"PUBLIC").setMultipleInstances(!0)),hn(mT,pT,""),hn(mT,pT,"esm2020")}s4();function ES(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a4=ES,TS=new da("auth","Firebase",ES());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Yh("@firebase/auth");function o4(i,...e){kh.logLevel<=Ve.WARN&&kh.warn(`Auth (${ma}): ${i}`,...e)}function hh(i,...e){kh.logLevel<=Ve.ERROR&&kh.error(`Auth (${ma}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(i,...e){throw ag(i,...e)}function ni(i,...e){return ag(i,...e)}function sg(i,e,n){const s={...a4(),[e]:n};return new da("auth","Firebase",s).create(e,{appName:i.name})}function or(i){return sg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function l4(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&An(i,"argument-error"),sg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ag(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return TS.create(i,...e)}function ve(i,e,...n){if(!i)throw ag(e,...n)}function ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw hh(e),new Error(e)}function fr(i,e){i||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){return typeof self<"u"&&self.location?.href||""}function SS(){return gT()==="http:"||gT()==="https:"}function gT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||l0()||"connection"in navigator)?navigator.onLine:!0}function c4(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=bR()||CR()}get(){return u4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(i,e){fr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d4=new Ru(3e4,6e4);function ai(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Bn(i,e,n,s,o={}){return wS(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=vu({key:i.config.apiKey,...f}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:p,...u};return IR()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&fa(i.emulatorConfig.host)&&(g.credentials="include"),AS.fetch()(await bS(i,i.config.apiHost,n,m),g)})}async function wS(i,e,n){i._canInitEmulator=!1;const s={...h4,...e};try{const o=new p4(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw nh(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nh(i,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw nh(i,"email-already-in-use",f);if(p==="USER_DISABLED")throw nh(i,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw sg(i,E,g);An(i,E)}}catch(o){if(o instanceof zn)throw o;An(i,"network-request-failed",{message:String(o)})}}async function Iu(i,e,n,s,o={}){const u=await Bn(i,e,n,s,o);return"mfaPendingCredential"in u&&An(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function bS(i,e,n,s){const o=`${e}${n}?${s}`,u=i,f=u.config.emulator?og(i.config,o):`${i.config.apiScheme}://${o}`;return f4.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function m4(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class p4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ni(this.auth,"network-request-failed")),d4.get())})}}function nh(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=ni(i,e,s);return o.customData._tokenResponse=n,o}function yT(i){return i!==void 0&&i.enterprise!==void 0}class g4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return m4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function y4(i,e){return Bn(i,"GET","/v2/recaptchaConfig",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _4(i,e){return Bn(i,"POST","/v1/accounts:delete",e)}async function Uh(i,e){return Bn(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v4(i,e=!1){const n=lt(i),s=await n.getIdToken(e),o=lg(s);ve(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:ru(Lm(o.auth_time)),issuedAtTime:ru(Lm(o.iat)),expirationTime:ru(Lm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Lm(i){return Number(i)*1e3}function lg(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return hh("JWT malformed, contained fewer than 3 sections"),null;try{const o=n0(n);return o?JSON.parse(o):(hh("Failed to decode base64 JWT payload"),null)}catch(o){return hh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function _T(i){const e=lg(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof zn&&E4(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function E4({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ru(this.lastLoginAt),this.creationTime=ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(i){const e=i.auth,n=await i.getIdToken(),s=await Co(i,Uh(e,{idToken:n}));ve(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=o.providerUserInfo?.length?RS(o.providerUserInfo):[],f=A4(i.providerData,u),m=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!f?.length,g=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new hp(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(i,E)}async function S4(i){const e=lt(i);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A4(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function RS(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w4(i,e){const n=await wS(i,{},async()=>{const s=vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await bS(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return i.emulatorConfig&&fa(i.emulatorConfig.host)&&(p.credentials="include"),AS.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function b4(i,e){return Bn(i,"POST","/v2/accounts:revokeToken",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_T(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=_T(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await w4(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new vo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ti{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new T4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new hp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v4(this,e)}reload(){return S4(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await Co(this,_4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:A,emailVerified:R,isAnonymous:k,providerData:$,stsTokenManager:J}=n;ve(A&&J,e,"internal-error");const B=vo.fromJSON(this.name,J);ve(typeof A=="string",e,"internal-error"),Wr(s,e.name),Wr(o,e.name),ve(typeof R=="boolean",e,"internal-error"),ve(typeof k=="boolean",e,"internal-error"),Wr(u,e.name),Wr(f,e.name),Wr(m,e.name),Wr(p,e.name),Wr(g,e.name),Wr(E,e.name);const Q=new ti({uid:A,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:k,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:g,lastLoginAt:E});return $&&Array.isArray($)&&(Q.providerData=$.map(Y=>({...Y}))),p&&(Q._redirectEventId=p),Q}static async _fromIdTokenResponse(e,n,s=!1){const o=new vo;o.updateFromServerResponse(n);const u=new ti({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await mu(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?RS(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new vo;m.updateFromIdToken(s);const p=new ti({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new hp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Map;function rr(i){fr(i instanceof Function,"Expected a class definition");let e=vT.get(i);return e?(fr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,vT.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IS.type="NONE";const ET=IS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(i,e,n){return`firebase:${i}:${e}:${n}`}class Eo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=fh(this.userKey,o.apiKey,u),this.fullPersistenceKey=fh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uh(this.auth,{idToken:e}).catch(()=>{});return n?ti._fromGetAccountInfoResponse(this.auth,n,e):null}return ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Eo(rr(ET),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||rr(ET);const f=fh(s,e.config.apiKey,e.name);let m=null;for(const g of n)try{const E=await g._get(f);if(E){let A;if(typeof E=="string"){const R=await Uh(e,{idToken:E}).catch(()=>{});if(!R)break;A=await ti._fromGetAccountInfoResponse(e,R,E)}else A=ti._fromJSON(e,E);g!==u&&(m=A),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Eo(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new Eo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PS(e))return"Blackberry";if(xS(e))return"Webos";if(DS(e))return"Safari";if((e.includes("chrome/")||NS(e))&&!e.includes("edge/"))return"Chrome";if(MS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function CS(i=Zt()){return/firefox\//i.test(i)}function DS(i=Zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NS(i=Zt()){return/crios\//i.test(i)}function OS(i=Zt()){return/iemobile/i.test(i)}function MS(i=Zt()){return/android/i.test(i)}function PS(i=Zt()){return/blackberry/i.test(i)}function xS(i=Zt()){return/webos/i.test(i)}function ug(i=Zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function R4(i=Zt()){return ug(i)&&!!window.navigator?.standalone}function I4(){return DR()&&document.documentMode===10}function VS(i=Zt()){return ug(i)||MS(i)||xS(i)||PS(i)||/windows phone/i.test(i)||OS(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(i,e=[]){let n;switch(i){case"Browser":n=TT(Zt());break;case"Worker":n=`${TT(Zt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ma}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D4(i,e={}){return Bn(i,"GET","/v2/passwordPolicy",ai(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=6;class O4{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??N4,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ST(this),this.idTokenSubscription=new ST(this),this.beforeStateQueue=new C4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uh(this,{idToken:e}),s=await ti._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(or(this));const n=e?lt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D4(this),n=new O4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await b4(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&o4(`Error while retrieving App Check token: ${e.error}`),e?.token}}function xi(i){return lt(i)}class ST{constructor(e){this.auth=e,this.observer=null,this.addObserver=kR(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P4(i){ff=i}function LS(i){return ff.loadJS(i)}function x4(){return ff.recaptchaEnterpriseScript}function V4(){return ff.gapiScript}function k4(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class L4{constructor(){this.enterprise=new U4}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class U4{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const j4="recaptcha-enterprise",US="NO_RECAPTCHA";class z4{constructor(e){this.type=j4,this.auth=xi(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{y4(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new g4(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;yT(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(US)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new L4().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&yT(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=x4();p.length!==0&&(p+=m),LS(p).then(()=>{o(m,u,f)}).catch(g=>{f(g)})}}).catch(m=>{f(m)})})}}async function AT(i,e,n,s=!1,o=!1){const u=new z4(i);let f;if(o)f=US;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function jh(i,e,n,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await AT(i,e,n,n==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await AT(i,e,n,n==="getOobCode");return s(i,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(i,e){const n=ps(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ls(u,e??{}))return o;An(o,"already-initialized")}return n.initialize({options:e})}function q4(i,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(rr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function H4(i,e,n){const s=xi(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=jS(e),{host:f,port:m}=F4(e),p=m===null?"":`:${m}`,g={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ls(g,s.config.emulator)&&ls(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,fa(f)?(Tp(`${u}//${f}${p}`),Sp("Auth",!0)):G4()}function jS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function F4(i){const e=jS(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:wT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:wT(f)}}}function wT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function G4(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(i,e){return Bn(i,"POST","/v1/accounts:resetPassword",ai(i,e))}async function K4(i,e){return Bn(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $4(i,e){return Iu(i,"POST","/v1/accounts:signInWithPassword",ai(i,e))}async function Y4(i,e){return Bn(i,"POST","/v1/accounts:sendOobCode",ai(i,e))}async function Q4(i,e){return Y4(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(i,e){return Iu(i,"POST","/v1/accounts:signInWithEmailLink",ai(i,e))}async function W4(i,e){return Iu(i,"POST","/v1/accounts:signInWithEmailLink",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends cg{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new pu(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pu(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jh(e,n,"signInWithPassword",$4);case"emailLink":return X4(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jh(e,s,"signUpPassword",K4);case"emailLink":return W4(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(i,e){return Iu(i,"POST","/v1/accounts:signInWithIdp",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4="http://localhost";class ca extends cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ca(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new ca(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return To(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,To(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,To(e,n)}buildRequest(){const e={requestUri:Z4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eM(i){const e=Kl($l(i)).link,n=e?Kl($l(e)).deep_link_id:null,s=Kl($l(i)).deep_link_id;return(s?Kl($l(s)).link:null)||s||n||e||i}class hg{constructor(e){const n=Kl($l(e)),s=n.apiKey??null,o=n.oobCode??null,u=J4(n.mode??null);ve(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=eM(e);try{return new hg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return pu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hg.parseLink(n);return ve(s,"argument-error"),pu._fromEmailAndCode(e,s.code,s.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Cu{constructor(){super("facebook.com")}static credential(e){return ca._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ca._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Cu{constructor(){super("github.com")}static credential(e){return ca._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Cu{constructor(){super("twitter.com")}static credential(e,n){return ca._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return es.credential(n,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(i,e){return Iu(i,"POST","/v1/accounts:signUp",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ti._fromIdTokenResponse(e,s,o),f=bT(s);return new ha({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=bT(s);return new ha({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function bT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends zn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new zh(e,n,s,o)}}function BS(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zh._fromErrorAndOperation(i,u,e,s):u})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}async function qS(i,e,n=!1){const s=await Co(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return ha._forOperation(i,"link",s)}async function iM(i,e,n){await mu(e);const s=nM(e.providerData);ve(s.has(n)===i,e.auth,"provider-already-linked")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(i,e,n=!1){const{auth:s}=i;if(cn(s.app))return Promise.reject(or(s));const o="reauthenticate";try{const u=await Co(i,BS(s,o,e,i),n);ve(u.idToken,s,"internal-error");const f=lg(u.idToken);ve(f,s,"internal-error");const{sub:m}=f;return ve(i.uid===m,s,"user-mismatch"),ha._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&An(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(i,e,n=!1){if(cn(i.app))return Promise.reject(or(i));const s="signIn",o=await BS(i,s,e),u=await ha._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function sM(i,e){return HS(xi(i),e)}async function dh(i,e){const n=lt(i);return await iM(!1,n,e.providerId),qS(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?mg._fromServerResponse(e,n):"totpInfo"in n?pg._fromServerResponse(e,n):An(e,"internal-error")}}class mg extends dg{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new mg(n)}}class pg extends dg{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new pg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(i){const e=xi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aM(i,e,n){const s=xi(i);await jh(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Q4)}async function oM(i,e,n){await zS(lt(i),{oobCode:e,newPassword:n}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gg(i),s})}async function lM(i,e){const n=lt(i),s=await zS(n,{oobCode:e}),o=s.requestType;switch(ve(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ve(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ve(s.mfaInfo,n,"internal-error");default:ve(s.email,n,"internal-error")}let u=null;return s.mfaInfo&&(u=dg._fromServerResponse(xi(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function uM(i,e){const{data:n}=await lM(lt(i),e);return n.email}async function cM(i,e,n){if(cn(i.app))return Promise.reject(or(i));const s=xi(i),f=await jh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&gg(i),p}),m=await ha._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function hM(i,e,n){return cn(i.app)?Promise.reject(or(i)):sM(lt(i),Ii.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gg(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(i,e){return Bn(i,"POST","/v1/accounts:createAuthUri",ai(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(i,e){const n=SS()?Lh():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:o}=await fM(lt(i),s);return o||[]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(i,e){return Bn(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=lt(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await Co(s,dM(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function pM(i,e,n,s){return lt(i).onIdTokenChanged(e,n,s)}function gM(i,e,n){return lt(i).beforeAuthStateChanged(e,n)}function GS(i,e,n,s){return lt(i).onAuthStateChanged(e,n,s)}function yM(i){return lt(i).signOut()}const Bh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bh,"1"),this.storage.removeItem(Bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=1e3,vM=10;class $S extends KS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=VS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);I4()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,vM):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_M)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$S.type="LOCAL";const EM=$S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS extends KS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YS.type="SESSION";const QS=YS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new df(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async g=>g(n.origin,u)),p=await TM(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}df.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const g=yg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(A){const R=A;if(R.data.eventId===g)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return window}function AM(i){Ci().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){return typeof Ci().WorkerGlobalScope<"u"&&typeof Ci().importScripts=="function"}async function wM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bM(){return navigator?.serviceWorker?.controller||null}function RM(){return XS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="firebaseLocalStorageDb",IM=1,qh="firebaseLocalStorage",ZS="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mf(i,e){return i.transaction([qh],e?"readwrite":"readonly").objectStore(qh)}function CM(){const i=indexedDB.deleteDatabase(WS);return new Du(i).toPromise()}function fp(){const i=indexedDB.open(WS,IM);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qh,{keyPath:ZS})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qh)?e(s):(s.close(),await CM(),e(await fp()))})})}async function RT(i,e,n){const s=mf(i,!0).put({[ZS]:e,value:n});return new Du(s).toPromise()}async function DM(i,e){const n=mf(i,!1).get(e),s=await new Du(n).toPromise();return s===void 0?null:s.value}function IT(i,e){const n=mf(i,!0).delete(e);return new Du(n).toPromise()}const NM=800,OM=3;class JS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>OM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=df._getInstance(RM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await wM(),!this.activeServiceWorker)return;this.sender=new SM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fp();return await RT(e,Bh,"1"),await IT(e,Bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>RT(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>DM(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>IT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=mf(o,!1).getAll();return new Du(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JS.type="LOCAL";const MM=JS;new Ru(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(i,e){return e?rr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,n){return To(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PM(i){return HS(i.auth,new _g(i),i.bypassAuthState)}function xM(i){const{auth:e,user:n}=i;return ve(n,e,"internal-error"),rM(n,new _g(i),i.bypassAuthState)}async function VM(i){const{auth:e,user:n}=i;return ve(n,e,"internal-error"),qS(n,new _g(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PM;case"linkViaPopup":case"linkViaRedirect":return VM;case"reauthViaPopup":case"reauthViaRedirect":return xM;default:An(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=new Ru(2e3,1e4);async function nA(i,e,n){if(cn(i.app))return Promise.reject(ni(i,"operation-not-supported-in-this-environment"));const s=xi(i);l4(i,e,fg);const o=eA(s,n);return new na(s,"signInViaPopup",e,o).executeNotNull()}class na extends tA{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,na.currentPopupAction&&na.currentPopupAction.cancel(),na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,na.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kM.get())};e()}}na.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="pendingRedirect",mh=new Map;class UM extends tA{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mh.get(this.auth._key());if(!e){try{const s=await jM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mh.set(this.auth._key(),e)}return this.bypassAuthState||mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jM(i,e){const n=qM(e),s=BM(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function zM(i,e){mh.set(i._key(),e)}function BM(i){return rr(i._redirectPersistence)}function qM(i){return fh(LM,i.config.apiKey,i.name)}async function HM(i,e,n=!1){if(cn(i.app))return Promise.reject(or(i));const s=xi(i),o=eA(s,e),f=await new UM(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=600*1e3;class GM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!iA(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ni(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FM&&this.cachedEventUids.clear(),this.cachedEventUids.has(CT(e))}saveEventToCache(e){this.cachedEventUids.add(CT(e)),this.lastProcessedEventTime=Date.now()}}function CT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function iA({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function KM(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M(i,e={}){return Bn(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QM=/^https?/;async function XM(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $M(i);for(const n of e)try{if(WM(n))return}catch{}An(i,"unauthorized-domain")}function WM(i){const e=Lh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!QM.test(n))return!1;if(YM.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=new Ru(3e4,6e4);function DT(){const i=Ci().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function JM(i){return new Promise((e,n)=>{function s(){DT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{DT(),n(ni(i,"network-request-failed"))},timeout:ZM.get()})}if(Ci().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ci().gapi?.load)s();else{const o=k4("iframefcb");return Ci()[o]=()=>{gapi.load?s():n(ni(i,"network-request-failed"))},LS(`${V4()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw ph=null,e})}let ph=null;function eP(i){return ph=ph||JM(i),ph}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=new Ru(5e3,15e3),nP="__/auth/iframe",iP="emulator/auth/iframe",rP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aP(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?og(e,iP):`https://${i.config.authDomain}/${nP}`,s={apiKey:e.apiKey,appName:i.name,v:ma},o=sP.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${vu(s).slice(1)}`}async function oP(i){const e=await eP(i),n=Ci().gapi;return ve(n,i,"internal-error"),e.open({where:document.body,url:aP(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rP,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=ni(i,"network-request-failed"),m=Ci().setTimeout(()=>{u(f)},tP.get());function p(){Ci().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uP=500,cP=600,hP="_blank",fP="http://localhost";class NT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dP(i,e,n,s=uP,o=cP){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...lP,width:s.toString(),height:o.toString(),top:u,left:f},g=Zt().toLowerCase();n&&(m=NS(g)?hP:n),CS(g)&&(e=e||fP,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[k,$])=>`${R}${k}=${$},`,"");if(R4(g)&&m!=="_self")return mP(e||"",m),new NT(null);const A=window.open(e||"",m,E);ve(A,i,"popup-blocked");try{A.focus()}catch{}return new NT(A)}function mP(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="__/auth/handler",gP="emulator/auth/handler",yP=encodeURIComponent("fac");async function OT(i,e,n,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ma,eventId:o};if(e instanceof fg){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",VR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))f[E]=A}if(e instanceof Cu){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(f.scopes=E.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${yP}=${encodeURIComponent(p)}`:"";return`${_P(i)}?${vu(m).slice(1)}${g}`}function _P({config:i}){return i.emulator?og(i,gP):`https://${i.authDomain}/${pP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="webStorageSupport";class vP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QS,this._completeRedirectFn=HM,this._overrideRedirectResult=zM}async _openPopup(e,n,s,o){fr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await OT(e,n,s,Lh(),o);return dP(e,u,yg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await OT(e,n,s,Lh(),o);return AM(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(fr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oP(e),s=new GM(e);return n.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Um,{type:Um},o=>{const u=o?.[0]?.[Um];u!==void 0&&n(!!u),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VS()||DS()||ug()}}const EP=vP;var MT="@firebase/auth",PT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AP(i){ri(new jn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;ve(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(i)},g=new M4(s,o,u,p);return q4(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ri(new jn("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(s=>new TP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(MT,PT,SP(i)),hn(MT,PT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=300,bP=a0("authIdTokenMaxAge")||wP;let xT=null;const RP=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bP)return;const o=n?.token;xT!==o&&(xT=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function IP(i=Qh()){const e=ps(i,"auth");if(e.isInitialized())return e.getImmediate();const n=B4(i,{popupRedirectResolver:EP,persistence:[MM,EM,QS]}),s=a0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=RP(u.toString());gM(n,f,()=>f(n.currentUser)),pM(n,m=>f(m))}}const o=i0("auth");return o&&H4(n,`http://${o}`),n}function CP(){return document.getElementsByTagName("head")?.[0]??document}P4({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=ni("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",CP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AP("Browser");const DP={apiKey:"AIzaSyBpGzIuV2a0PcsVlPDfmHO9uZIwaAySJ3Y",authDomain:"k2022-7ce1e.firebaseapp.com",databaseURL:"https://k2022-7ce1e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"k2022-7ce1e",storageBucket:"k2022-7ce1e.firebasestorage.app",messagingSenderId:"246716820091",appId:"1:246716820091:web:bb32e98c5411dc637350de",measurementId:"G-FKHQH8K9B2"},pf=m0(DP);d2(pf);const gu=mO(pf),Un=IP(pf);n4(pf);new Zn;const ho=({element:i})=>{const[e,n]=G.useState(null),[s,o]=G.useState(!0);return G.useEffect(()=>{const u=GS(Un,f=>{n(f),o(!1)});return()=>u()},[]),s?O.jsx("p",{children:"Loading..."}):e?i:O.jsx(Pb,{to:"/login",replace:!0})},NP=()=>{const[i,e]=G.useState(""),[n,s]=G.useState(""),[o,u]=G.useState(!1),[f,m]=G.useState(""),[p,g]=G.useState(""),E=Mo(),A=/^(?:\+254|254|0)7\d{8}$/,R=new Zn,k=Q=>`${Q.startsWith("0")?`+254${Q.substring(1)}`:Q.startsWith("254")?`+${Q}`:Q}@myapp.com`,$=async()=>{if(m(""),g(""),!i){m("Please enter your phone or email first.");return}let Q=i;A.test(i)&&(Q=k(i));try{await aM(Un,Q),g("Password reset email sent! Please check your inbox.")}catch(Y){m(Y.message),console.error("Password reset error:",Y.message)}},J=async()=>{try{if(!i){m("Please enter phone or email before using Google login.");return}let Q=i;A.test(i)&&(Q=k(i));const re=(await nA(Un,R)).user;if((await FS(Un,Q)).length>0){const ae=Ii.credential(Q,n||"defaultPass123");try{await dh(re,ae),console.log("Linked Google with:",Q)}catch(pe){if(pe.code!=="auth/credential-already-in-use")throw pe}}console.log("Google login successful:",re),E("/")}catch(Q){m(Q.message),console.error("Google Sign In Error:",Q.message)}},B=async Q=>{Q.preventDefault(),m(""),g("");let Y=i;A.test(i)&&(Y=k(i));try{const re=await hM(Un,Y,n);console.log("Login successful:",re.user),E("/")}catch(re){m(re.message),console.error("Login error:",re.message)}};return O.jsx("div",{className:"myBody",children:O.jsx("div",{className:"myForm",children:O.jsxs("form",{onSubmit:B,children:[O.jsxs("div",{className:"welcome",children:[O.jsx("h1",{children:"Welcome Back"}),O.jsx("p",{children:"Log in to manage your saving group"})]}),O.jsxs("div",{className:"login-details",children:[O.jsx("input",{type:"text",placeholder:"Email or Phone - +254712345678",value:i,onChange:Q=>e(Q.target.value),required:!0,autoComplete:"username"}),O.jsxs("div",{style:{position:"relative"},children:[O.jsx("input",{type:o?"text":"password",placeholder:"Password",value:n,onChange:Q=>s(Q.target.value),required:!0,autoComplete:"current-password"}),O.jsx("span",{onClick:()=>u(!o),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",fontSize:"14px",color:"#555"},children:o?"🙈":"👁"})]})]}),f&&O.jsx("p",{style:{color:"red"},children:f}),p&&O.jsx("p",{style:{color:"green"},children:p}),O.jsx("div",{className:"forgot-password",children:O.jsx("button",{type:"button",onClick:$,style:{background:"none",border:"none",color:"blue",cursor:"pointer",padding:0},children:"Forgot password?"})}),O.jsx("button",{type:"submit",className:"login-btn",children:"Log In"}),O.jsxs("div",{className:"signup-link",children:[O.jsxs("button",{type:"button",className:"google-btn",onClick:J,children:[O.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",className:"google-icon"}),"Continue with Google"]}),O.jsxs("p",{children:["Don’t have an account? ",O.jsx(nr,{to:"/signup",children:"Sign up here"})]})]})]})})})},OP=()=>{const[i,e]=G.useState(""),[n,s]=G.useState(""),[o,u]=G.useState(""),[f,m]=G.useState(""),[p,g]=G.useState(!1),[E,A]=G.useState(""),R=Mo(),k=/^(?:\+254|254|0)7\d{8}$/,$=new Zn,J=Y=>k.test(Y)?`${Y.startsWith("0")?`+254${Y.substring(1)}`:Y.startsWith("254")?`+${Y}`:Y}@myapp.com`:null,B=async()=>{try{if(!n&&!o){A("Please enter phone or email before using Google signup.");return}if(!f){A("Password is required for signup.");return}const re=(await nA(Un,$)).user;if(o&&(await FS(Un,o)).length>0){const ae=Ii.credential(o,f);await dh(re,ae)}if(n){const fe=J(n);if(fe){const ae=Ii.credential(fe,f);try{await dh(re,ae)}catch(pe){if(pe.code!=="auth/credential-already-in-use")throw pe}}}await uT(Mh(gu,"users",re.uid),{username:re.displayName||i,phone:n||"",email:re.email||o}),R("/login")}catch(Y){A(Y.message),console.error("Google Sign In Error:",Y.message)}},Q=async Y=>{if(Y.preventDefault(),A(""),!k.test(n)){A("Please enter a valid Kenyan phone number");return}if(!f){A("Password is required.");return}const re=J(n);try{const ae=(await cM(Un,o,f)).user;await mM(ae,{displayName:i});const pe=Ii.credential(re,f);try{await dh(ae,pe)}catch(N){if(N.code!=="auth/credential-already-in-use")throw N}await uT(Mh(gu,"users",ae.uid),{username:i,phone:n,email:o}),R("/login")}catch(fe){A(fe.message),console.error("Signup error:",fe.message)}};return O.jsx("div",{className:"myBody",children:O.jsx("div",{className:"myForm",children:O.jsxs("form",{onSubmit:Q,autoComplete:"on",children:[O.jsxs("div",{className:"welcome",children:[O.jsx("h1",{children:"Create Account"}),O.jsx("p",{children:"Sign up to join your saving group"})]}),O.jsxs("div",{className:"login-details",children:[O.jsx("input",{type:"text",placeholder:"Username",value:i,onChange:Y=>e(Y.target.value),autoComplete:"username",required:!0}),O.jsx("input",{type:"text",placeholder:"Phone - +254712345678",value:n,onChange:Y=>s(Y.target.value),autoComplete:"tel",required:!0}),O.jsx("input",{type:"email",placeholder:"Email",value:o,onChange:Y=>u(Y.target.value),autoComplete:"email"}),O.jsxs("div",{style:{position:"relative"},children:[O.jsx("input",{type:p?"text":"password",placeholder:"Password",value:f,onChange:Y=>m(Y.target.value),autoComplete:"new-password",required:!0}),O.jsx("span",{onClick:()=>g(!p),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",fontSize:"14px",color:"#333",userSelect:"none"},children:p?"🙈":"👁"})]})]}),E&&O.jsx("p",{style:{color:"red"},children:E}),O.jsx("button",{type:"submit",className:"signup-btn",children:"Sign Up"}),O.jsx("div",{className:"social",children:O.jsxs("button",{type:"button",className:"google-btn",onClick:B,children:[O.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",className:"google-icon"}),"Continue with Google"]})}),O.jsx("div",{className:"signup-link",children:O.jsxs("p",{children:["Already have an account?"," ",O.jsx(nr,{to:"/login",children:"Login here"})]})})]})})})},MP=()=>{const[i,e]=G.useState(""),[n,s]=G.useState(""),[o,u]=G.useState(""),[f,m]=G.useState(""),[p,g]=G.useState(null),E=Mo(),A=dr();G.useEffect(()=>{const $=new URLSearchParams(A.search).get("oobCode");$?(g($),uM(Un,$).then(()=>{console.log("Reset code verified")}).catch(()=>{u("Invalid or expired reset link.")})):u("Invalid reset link.")},[A]);const R=async k=>{if(k.preventDefault(),u(""),m(""),!i||!n){u("Please enter and confirm your new password.");return}if(i!==n){u("Passwords do not match.");return}try{await oM(Un,p,i),m("Password reset successful! You can now log in."),setTimeout(()=>E("/login"),2500)}catch($){u($.message)}};return O.jsx("div",{className:"myBody",children:O.jsxs("div",{className:"myForm",children:[O.jsx("h1",{children:"Reset Password"}),O.jsx("p",{children:"Please enter your new password below."}),O.jsxs("form",{onSubmit:R,children:[O.jsx("input",{type:"password",placeholder:"New password",value:i,onChange:k=>e(k.target.value),required:!0}),O.jsx("input",{type:"password",placeholder:"Confirm new password",value:n,onChange:k=>s(k.target.value),required:!0}),o&&O.jsx("p",{style:{color:"red"},children:o}),f&&O.jsx("p",{style:{color:"green"},children:f}),O.jsx("button",{type:"submit",className:"login-btn",children:"Reset Password"})]})]})})};var jm={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT;function PP(){if(VT)return Ne;VT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function R(T){return T===null||typeof T!="object"?null:(T=A&&T[A]||T["@@iterator"],typeof T=="function"?T:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function B(T,V,te){this.props=T,this.context=V,this.refs=J,this.updater=te||k}B.prototype.isReactComponent={},B.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},B.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function Q(){}Q.prototype=B.prototype;function Y(T,V,te){this.props=T,this.context=V,this.refs=J,this.updater=te||k}var re=Y.prototype=new Q;re.constructor=Y,$(re,B.prototype),re.isPureReactComponent=!0;var fe=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},pe=Object.prototype.hasOwnProperty;function N(T,V,te,Z,oe,ge){return te=ge.ref,{$$typeof:i,type:T,key:V,ref:te!==void 0?te:null,props:ge}}function b(T,V){return N(T.type,V,void 0,void 0,void 0,T.props)}function I(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function x(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(te){return V[te]})}var M=/\/+/g;function U(T,V){return typeof T=="object"&&T!==null&&T.key!=null?x(""+T.key):V.toString(36)}function D(){}function st(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(D,D):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function qe(T,V,te,Z,oe){var ge=typeof T;(ge==="undefined"||ge==="boolean")&&(T=null);var le=!1;if(T===null)le=!0;else switch(ge){case"bigint":case"string":case"number":le=!0;break;case"object":switch(T.$$typeof){case i:case e:le=!0;break;case E:return le=T._init,qe(le(T._payload),V,te,Z,oe)}}if(le)return oe=oe(T),le=Z===""?"."+U(T,0):Z,fe(oe)?(te="",le!=null&&(te=le.replace(M,"$&/")+"/"),qe(oe,V,te,"",function(dn){return dn})):oe!=null&&(I(oe)&&(oe=b(oe,te+(oe.key==null||T&&T.key===oe.key?"":(""+oe.key).replace(M,"$&/")+"/")+le)),V.push(oe)),1;le=0;var Je=Z===""?".":Z+":";if(fe(T))for(var we=0;we<T.length;we++)Z=T[we],ge=Je+U(Z,we),le+=qe(Z,V,te,ge,oe);else if(we=R(T),typeof we=="function")for(T=we.call(T),we=0;!(Z=T.next()).done;)Z=Z.value,ge=Je+U(Z,we++),le+=qe(Z,V,te,ge,oe);else if(ge==="object"){if(typeof T.then=="function")return qe(st(T),V,te,Z,oe);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return le}function X(T,V,te){if(T==null)return T;var Z=[],oe=0;return qe(T,Z,"","",function(ge){return V.call(te,ge,oe++)}),Z}function ce(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(te){(T._status===0||T._status===-1)&&(T._status=1,T._result=te)},function(te){(T._status===0||T._status===-1)&&(T._status=2,T._result=te)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var ye=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function Ue(){}return Ne.Children={map:X,forEach:function(T,V,te){X(T,function(){V.apply(this,arguments)},te)},count:function(T){var V=0;return X(T,function(){V++}),V},toArray:function(T){return X(T,function(V){return V})||[]},only:function(T){if(!I(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ne.Component=B,Ne.Fragment=n,Ne.Profiler=o,Ne.PureComponent=Y,Ne.StrictMode=s,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(T){return ae.H.useMemoCache(T)}},Ne.cache=function(T){return function(){return T.apply(null,arguments)}},Ne.cloneElement=function(T,V,te){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=$({},T.props),oe=T.key,ge=void 0;if(V!=null)for(le in V.ref!==void 0&&(ge=void 0),V.key!==void 0&&(oe=""+V.key),V)!pe.call(V,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&V.ref===void 0||(Z[le]=V[le]);var le=arguments.length-2;if(le===1)Z.children=te;else if(1<le){for(var Je=Array(le),we=0;we<le;we++)Je[we]=arguments[we+2];Z.children=Je}return N(T.type,oe,void 0,void 0,ge,Z)},Ne.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},Ne.createElement=function(T,V,te){var Z,oe={},ge=null;if(V!=null)for(Z in V.key!==void 0&&(ge=""+V.key),V)pe.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(oe[Z]=V[Z]);var le=arguments.length-2;if(le===1)oe.children=te;else if(1<le){for(var Je=Array(le),we=0;we<le;we++)Je[we]=arguments[we+2];oe.children=Je}if(T&&T.defaultProps)for(Z in le=T.defaultProps,le)oe[Z]===void 0&&(oe[Z]=le[Z]);return N(T,ge,void 0,void 0,null,oe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(T){return{$$typeof:m,render:T}},Ne.isValidElement=I,Ne.lazy=function(T){return{$$typeof:E,_payload:{_status:-1,_result:T},_init:ce}},Ne.memo=function(T,V){return{$$typeof:g,type:T,compare:V===void 0?null:V}},Ne.startTransition=function(T){var V=ae.T,te={};ae.T=te;try{var Z=T(),oe=ae.S;oe!==null&&oe(te,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Ue,ye)}catch(ge){ye(ge)}finally{ae.T=V}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(T){return ae.H.use(T)},Ne.useActionState=function(T,V,te){return ae.H.useActionState(T,V,te)},Ne.useCallback=function(T,V){return ae.H.useCallback(T,V)},Ne.useContext=function(T){return ae.H.useContext(T)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(T,V){return ae.H.useDeferredValue(T,V)},Ne.useEffect=function(T,V,te){var Z=ae.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(T,V)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(T,V,te){return ae.H.useImperativeHandle(T,V,te)},Ne.useInsertionEffect=function(T,V){return ae.H.useInsertionEffect(T,V)},Ne.useLayoutEffect=function(T,V){return ae.H.useLayoutEffect(T,V)},Ne.useMemo=function(T,V){return ae.H.useMemo(T,V)},Ne.useOptimistic=function(T,V){return ae.H.useOptimistic(T,V)},Ne.useReducer=function(T,V,te){return ae.H.useReducer(T,V,te)},Ne.useRef=function(T){return ae.H.useRef(T)},Ne.useState=function(T){return ae.H.useState(T)},Ne.useSyncExternalStore=function(T,V,te){return ae.H.useSyncExternalStore(T,V,te)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.1.1",Ne}var kT;function xP(){return kT||(kT=1,jm.exports=PP()),jm.exports}var VP=xP();const sa=xw(VP);var rA={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},LT=sa.createContext&&sa.createContext(rA),kP=["attr","size","title"];function LP(i,e){if(i==null)return{};var n=UP(i,e),s,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(o=0;o<u.length;o++)s=u[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function UP(i,e){if(i==null)return{};var n={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;n[s]=i[s]}return n}function Hh(){return Hh=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},Hh.apply(this,arguments)}function UT(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,s)}return n}function Fh(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?UT(Object(n),!0).forEach(function(s){jP(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):UT(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function jP(i,e,n){return e=zP(e),e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function zP(i){var e=BP(i,"string");return typeof e=="symbol"?e:e+""}function BP(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function sA(i){return i&&i.map((e,n)=>sa.createElement(e.tag,Fh({key:n},e.attr),sA(e.child)))}function va(i){return e=>sa.createElement(qP,Hh({attr:Fh({},i.attr)},e),sA(i.child))}function qP(i){var e=n=>{var{attr:s,size:o,title:u}=i,f=LP(i,kP),m=o||n.size||"1em",p;return n.className&&(p=n.className),i.className&&(p=(p?p+" ":"")+i.className),sa.createElement("svg",Hh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:p,style:Fh(Fh({color:i.color||n.color},n.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&sa.createElement("title",null,u),i.children)};return LT!==void 0?sa.createElement(LT.Consumer,null,n=>e(n)):e(rA)}function HP(i){return va({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(i)}const aA=()=>O.jsxs("div",{className:"loader-container",children:[O.jsx("div",{className:"loader",children:O.jsx("svg",{viewBox:"0 0 80 80",children:O.jsx("circle",{r:"32",cy:"40",cx:"40"})})}),O.jsx("div",{className:"loader triangle",children:O.jsx("svg",{viewBox:"0 0 86 80",children:O.jsx("polygon",{points:"43 8 79 72 7 72"})})}),O.jsx("div",{className:"loader",children:O.jsx("svg",{viewBox:"0 0 80 80",children:O.jsx("rect",{height:"64",width:"64",y:"8",x:"8"})})})]}),jT=()=>{const[i,e]=G.useState(null),[n,s]=G.useState(""),[o,u]=G.useState(""),[f,m]=G.useState(0),[p,g]=G.useState(0),[E,A]=G.useState([]),[R,k]=G.useState(!1),$=Mo();G.useEffect(()=>{const B=GS(Un,Q=>{if(Q){e(Q);const Y=Mh(gu,"users",Q.uid),re=cT(Y,pe=>{if(pe.exists()){const N=pe.data();s(N.username||""),u(N.role||""),m(N.loan||0)}}),fe=Mh(gu,"group","general"),ae=cT(fe,pe=>{if(pe.exists()){const N=pe.data();g(N.savings||0),A(N.notifications||[])}});return setTimeout(()=>k(!0),300),()=>{re(),ae()}}else $("/login")});return()=>B()},[$]);const J=async()=>{await yM(Un),$("/login")};return i?O.jsxs("div",{className:`dashboard fade-in ${R?"show":""}`,children:[O.jsxs("div",{className:"card profile-card",children:[O.jsx("div",{className:"card-header",children:"Profile"}),O.jsxs("div",{className:"card-body",children:[O.jsx(HP,{size:60,color:"#555"}),O.jsxs("p",{children:[O.jsx("strong",{children:"Name:"})," ",n]}),O.jsxs("p",{children:[O.jsx("strong",{children:"Email:"})," ",i.email]}),O.jsxs("p",{children:[O.jsx("strong",{children:"Role:"})," ",o]}),O.jsxs("p",{children:[O.jsx("strong",{children:"Loan:"})," KES ",f]})]})]}),O.jsxs("div",{className:"card savings-card",children:[O.jsx("div",{className:"card-header",children:"Group Savings"}),O.jsx("div",{className:"card-body",children:O.jsxs("p",{children:["KES ",p]})})]}),O.jsxs("div",{className:"card notifications-card",children:[O.jsx("div",{className:"card-header",children:"Group Notifications"}),O.jsx("div",{className:"card-body",children:O.jsx("ul",{children:E.length>0?E.map((B,Q)=>O.jsx("li",{children:B},Q)):O.jsx("li",{children:"No notifications"})})})]}),O.jsx("button",{className:"logout-btn",onClick:J,children:"Logout"})]}):O.jsx(aA,{})};function FP(i){return va({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"},child:[]}]})(i)}function GP(i){return va({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"},child:[]}]})(i)}function KP(i){return va({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"},child:[]}]})(i)}function $P(i){return va({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"},child:[]}]})(i)}function YP(i){return va({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Bank"},child:[{tag:"path",attr:{d:"M19.505,17.943V10.362a1.491,1.491,0,0,0,1.39-1.12,1.468,1.468,0,0,0-.7-1.68l-7.45-4.3a1.521,1.521,0,0,0-1.49,0l-7.45,4.3a1.468,1.468,0,0,0-.7,1.68,1.487,1.487,0,0,0,1.45,1.12h.13v7.57h-.12a1.5,1.5,0,0,0,0,3h14.87a1.5,1.5,0,0,0,.07-2.989ZM4.555,9.362a.505.505,0,0,1-.25-.94l7.45-4.289a.474.474,0,0,1,.49,0L19.7,8.422a.5.5,0,0,1-.25.94Zm13.95,1v7.57H14.9v-7.57Zm-4.61,0v7.57h-3.61v-7.57Zm-4.61,0v7.57h-3.6v-7.57Zm10.15,9.57H4.565a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h14.87a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.435,19.932Z"},child:[]}]}]})(i)}function QP(i){return va({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Calendar_Date"},child:[{tag:"path",attr:{d:`M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
            c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
            c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
            c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
            c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
            h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z`},child:[]},{tag:"path",attr:{d:`M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
            c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
            c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z`},child:[]}]}]})(i)}const fo=()=>{const[i,e]=G.useState(!1);return O.jsxs("nav",{className:"navigation",children:[O.jsx("button",{className:"menu-btn",onClick:()=>e(!i),children:O.jsx(GP,{})}),O.jsxs("div",{className:`nav-content ${i?"show":"hide"}`,children:[O.jsxs(nr,{to:"/Dashboard",children:[O.jsx(FP,{})," Dashboard"]}),O.jsxs(nr,{to:"/contributions",children:[O.jsx($P,{})," Contributions"]}),O.jsxs(nr,{to:"/payout",children:[O.jsx(QP,{})," Payouts"]}),O.jsxs(nr,{to:"/loans",children:[O.jsx(YP,{})," Loans"]}),O.jsxs(nr,{to:"/settings",children:[O.jsx(KP,{})," Settings"]})]})]})},XP=()=>O.jsxs("div",{className:"container",children:[O.jsxs("div",{className:"payment-weekly",children:[O.jsx("h2",{children:"Pay Contribution"}),O.jsx("p",{children:"Your weekly contribution of KES 20 will be paid via M-PESA STK push."}),O.jsx("button",{className:"pay-btn",children:"Pay KES 20 Now"})]}),O.jsxs("div",{className:"payment",children:[O.jsx("h2",{children:"Pay Contribution"}),O.jsx("p",{children:"Your monthly contribution of KES 50 will be paid via M-PESA STK push."}),O.jsx("button",{className:"pay-btn",children:"Pay KES 50 Now"})]}),O.jsxs("div",{className:"history",children:[O.jsx("h3",{children:"Contribution History"}),O.jsxs("div",{className:"history-item",children:[O.jsx("span",{className:"amount",children:"KES 20"}),O.jsx("span",{className:"status",children:"Paid"}),O.jsx("span",{className:"date",children:"Sep 20, 2024"})]}),O.jsxs("div",{className:"history-item",children:[O.jsx("span",{className:"amount",children:"KES 50"}),O.jsx("span",{className:"status",children:"Paid"}),O.jsx("span",{className:"date",children:"Aug 20, 2024"})]}),O.jsxs("div",{className:"history-item",children:[O.jsx("span",{className:"amount",children:"KES 20"}),O.jsx("span",{className:"status",children:"Paid"}),O.jsx("span",{className:"date",children:"Jul 13, 2024"})]})]})]}),WP=()=>O.jsx("div",{className:"loans-page",children:O.jsxs("div",{className:"container",children:[O.jsx("div",{className:"title",children:O.jsx("h1",{children:"My Loans"})}),O.jsxs("div",{className:"card-container",children:[O.jsxs("div",{className:"loans-card",children:[O.jsxs("h3",{children:[O.jsx("span",{children:"Loans :"}),"Ksh 300"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Status :"})," Approved"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Repayment Date :"}),"12/03/2025"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Interest Rate :"}),"10%"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Total repayment :"})," ksh 350"]})]}),O.jsxs("div",{className:"repayment",children:[O.jsxs("h3",{children:[O.jsx("span",{children:"Amount Paid"})," Ksh 0"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Amount Remaining"})," Ksh 300"]}),O.jsxs("h3",{children:[O.jsx("span",{children:"Payment Due"})," 12/03/2025"]})]})]})]})}),ZP=(i,e)=>{const n=new Date(i);return n.setDate(n.getDate()+e),n},JP=i=>i.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),ex=(i,e)=>{const s=Math.floor((new Date-i)/(1e3*60*60*24));return s<0?0:Math.min(Math.floor(s/7),e-1)},tx=()=>{const[i,e]=G.useState([]),[n,s]=G.useState(!1),o=new Date("2025-09-27");if(G.useEffect(()=>{(async()=>{try{const E=(await CO(dO(gu,"users"))).docs.map((A,R)=>({id:A.id,...A.data(),amount:168,avatar:`https://i.pravatar.cc/150?img=${R+10}`}));e(E),setTimeout(()=>s(!0),300)}catch(g){console.error("Error fetching members:",g)}})()},[]),i.length===0)return O.jsx(aA,{});const u=i.map((p,g)=>{const E=ZP(o,g*7);return{...p,date:JP(E)}}),f=ex(o,i.length),m=[...u.slice(f),...u.slice(0,f)].map((p,g)=>({...p,active:g===0}));return O.jsxs("div",{className:`page fade-in ${n?"show":""}`,children:[O.jsx("h2",{className:"page-title",children:"Payout Schedule"}),O.jsx("p",{className:"subtitle",children:"Each weekend, one member receives their payout in order."}),O.jsx("div",{className:"schedule-list",children:m.map(p=>O.jsxs("div",{className:`schedule-item ${p.active?"active":""}`,children:[O.jsxs("div",{className:"avatar",children:[O.jsx("img",{src:p.avatar,alt:p.username}),p.active&&O.jsx("span",{className:"badge",children:"This Week"})]}),O.jsxs("div",{className:"member-info",children:[O.jsx("h4",{children:p.username}),O.jsx("p",{children:p.date})]}),O.jsxs("div",{className:"amount",children:[O.jsxs("strong",{children:["Ksh ",p.amount]}),O.jsx("p",{children:"Payout"})]})]},p.id))})]})},nx=()=>O.jsxs("div",{className:"page",children:[O.jsx("h1",{className:"page-title",children:"Settings"}),O.jsx("div",{className:"card",children:O.jsx("p",{children:"Manage your profile and application settings."})})]}),ix=()=>O.jsx(rR,{basename:"/K2022",children:O.jsx("div",{className:"container",children:O.jsxs(Vb,{children:[O.jsx(Ti,{path:"/login",element:O.jsx(NP,{})}),O.jsx(Ti,{path:"/signup",element:O.jsx(OP,{})}),O.jsx(Ti,{path:"/reset-password",element:O.jsx(MP,{})}),O.jsx(Ti,{path:"/",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(jT,{})]})})}),O.jsx(Ti,{path:"/dashboard",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(jT,{})]})})}),O.jsx(Ti,{path:"/contributions",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(XP,{})]})})}),O.jsx(Ti,{path:"/payout",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(tx,{})]})})}),O.jsx(Ti,{path:"/loans",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(WP,{})]})})}),O.jsx(Ti,{path:"/settings",element:O.jsx(ho,{element:O.jsxs(O.Fragment,{children:[O.jsx(fo,{}),O.jsx(nx,{})]})})})]})})});Fw.createRoot(document.getElementById("root")).render(O.jsx(G.StrictMode,{children:O.jsx(ix,{})}));
