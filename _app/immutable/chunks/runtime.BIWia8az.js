var In=Array.isArray,xn=Array.from,Dn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,On=Object.prototype,Cn=Array.prototype,$t=Object.getPrototypeOf;function Nn(t){return typeof t=="function"}const bn=()=>{};function qn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const A=2,ht=4,L=8,et=16,y=32,Z=64,I=128,U=256,p=512,k=1024,Y=2048,N=4096,j=8192,Zt=16384,dt=32768,Pn=65536,zt=1<<18,Et=1<<19,ft=Symbol("$state"),Fn=Symbol("legacy props"),Mn=Symbol("");function yt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function Yn(t){throw new Error("props_invalid_value")}function jn(){throw new Error("state_descriptors_fixed")}function Hn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}let z=!1;function Bn(){z=!0}function st(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Un(t){return en(st(t))}function Vn(t,n=!1){var e;const r=st(t);return n||(r.equals=wt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function en(t){return o!==null&&o.f&A&&(E===null?wn([t]):E.push(t)),t}function sn(t,n){return o!==null&&ut()&&o.f&(A|et)&&(E===null||!E.includes(t))&&rn(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=jt(),Tt(t,k),ut()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(w(u,k),X(u)):g===null?Tn([t]):g.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(w(l,n),i&(p|I)&&(i&A?Tt(l,Y):X(l)))}}const Gn=1,Kn=2,$n=16,Zn=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,ln="[",un="[!",on="]",At={},nr=Symbol(),rr="http://www.w3.org/2000/svg";function mt(t){console.warn("hydration_mismatch")}let R=!1;function er(t){R=t}let d;function P(t){if(t===null)throw mt(),At;return d=t}function sr(){return P(x(d))}function ar(t){if(R){if(x(d)!==null)throw mt(),At;d=t}}function lr(t=1){if(R){for(var n=t,r=d;n--;)r=x(r);d=r}}function ur(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===ln||r===un)&&(t+=1)}var e=x(n);n.remove(),n=e}}var _t,gt,kt;function or(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;gt=it(n,"firstChild").get,kt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return gt.call(t)}function x(t){return kt.call(t)}function ir(t,n){if(!R)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),P(e),e}return P(r),r}function fr(t,n){if(!R){var r=Q(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function _r(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=x(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=J();return e==null||e.before(a),P(a),a}return P(e),e}function cr(t){t.textContent=""}function fn(t){var n=A|k;u===null?n|=I:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&A){var e=o;(e.children??(e.children=[])).push(r)}return r}function vr(t){const n=fn(t);return n.equals=wt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&A?at(e):q(e)}}}function Rt(t){var n,r=u;$(t.parent);try{St(t),n=Ht(t)}finally{$(r)}return n}function It(t){var n=Rt(t),r=(D||t.f&I)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=jt())}function at(t){St(t),M(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){u===null&&o===null&&Qt(),o!==null&&o.f&I&&Jt(),lt&&Xt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ct(!0),W(l),l.f|=Zt}catch(c){throw q(l),c}finally{ct(i)}}else n!==null&&X(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&_n(l,a),o!==null&&o.f&A)){var m=o;(m.children??(m.children=[])).push(l)}return l}function pr(t){const n=b(L,null,!1);return w(n,p),n.teardown=t,n}function hr(t){xt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Dt(t);return e}}function dr(t){return xt(),cn(t)}function Er(t){const n=b(Z,t,!0);return()=>{q(n)}}function Dt(t){return b(ht,t,!1)}function cn(t){return b(L,t,!0)}function yr(t){return vn(t)}function vn(t,n=0){return b(L|et|n,t,!0)}function wr(t,n=!0){return b(L|y,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Nt(t,n&&!r),Ct(t),M(t,0),w(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tr(t,n){var r=[];qt(t,r,!0),hn(r,()=>{q(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&y)!==0;qt(e,n,a?r:!1),e=s}}}function Ar(t){Pt(t,!0)}function Pt(t,n){if(t.f&N){H(t)&&W(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Ft(){V=!1;const t=tt.slice();tt=[],pt(t)}function Mt(){G=!1;const t=nt.slice();nt=[],pt(t)}function mr(t){V||(V=!0,queueMicrotask(Ft)),tt.push(t)}function gr(t){G||(G=!0,dn(Mt)),nt.push(t)}function En(){V&&Ft(),G&&Mt()}const Lt=0,yn=1;let B=Lt,F=!1,O=!1,lt=!1;function ct(t){O=t}function vt(t){lt=t}let S=[],C=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let E=null;function wn(t){E=t}let _=null,h=0,g=null;function Tn(t){g=t}let Yt=0,D=!1,f=null;function jt(){return++Yt}function ut(){return!z||f!==null&&f.l===null}function H(t){var l,i;var n=t.f;if(n&k)return!0;if(n&Y){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(H(a)&&It(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function An(t,n,r){throw t}function Ht(t){var ot;var n=_,r=h,e=g,s=o,a=D,l=E,i=f,T=t.f;_=null,h=0,g=null,o=T&(y|Z)?null:t,D=!O&&(T&I)!==0,E=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return m}finally{_=n,h=r,g=e,o=s,D=a,E=l,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&A&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(I|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&et?pn(t):Nt(t),Ct(t),Ot(t);var e=Ht(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){An(s)}finally{u=r}}}function Bt(){C>1e3&&(C=0,tn()),C++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Vt(s,a),gn(a)}}finally{O=r}}}function gn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function kn(){if(F=!1,C>1001)return;const t=S;S=[],Ut(t),F||(C=0)}function X(t){B===Lt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&p))return;n.f^=p}}S.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&L){a?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Vt(i,n)}function Gt(t){var n=B,r=S;try{Bt();const s=[];B=yn,S=s,F=!1,Ut(r);var e=t==null?void 0:t();return En(),(S.length>0||s.length>0)&&Gt(),C=0,e}finally{B=n,S=r}}async function kr(){await Promise.resolve(),Gt()}function Sn(t){var i;var n=t.f,r=(n&A)!==0;if(r&&n&j){var e=Rt(t);return at(t),e}if(o!==null){E!==null&&E.includes(t)&&nn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&y)&&g.includes(t)&&(w(u,k),X(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,H(a)&&It(a)),t.v}function Sr(t){const n=o;try{return o=null,t()}finally{o=n}}const Rn=~(k|Y|p);function w(t,n){t.f=t.f&Rn|n}function Rr(t,n=1){var r=+Sn(t);return sn(t,r+n),r}function Ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function xr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Dt(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return t||{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Z as $,u as A,Hn as B,$t as C,In as D,vn as E,Ar as F,wr as G,Tr as H,dt as I,un as J,ur as K,P as L,er as M,d as N,Dt as O,cn as P,mr as Q,Yn as R,ft as S,Pn as T,nr as U,Wn as V,wt as W,Rr as X,Nn as Y,Fn as Z,y as _,sr as a,$ as a0,Zn as a1,z as a2,zn as a3,Xn as a4,vr as a5,Jn as a6,Vn as a7,Q as a8,J as a9,$n as aA,rr as aB,gr as aC,Mn as aD,Kt as aE,lr as aF,Wt as aG,Qn as aa,tr as ab,K as ac,o as ad,Dn as ae,or as af,ln as ag,x as ah,At as ai,on as aj,mt as ak,Ln as al,cr as am,xn as an,Er as ao,bn as ap,Gt as aq,kr as ar,Un as as,N as at,an as au,qt as av,hn as aw,q as ax,Kn as ay,Gn as az,hr as b,f as c,Sr as d,pt as e,Dr as f,Sn as g,R as h,fn as i,Bn as j,fr as k,xr as l,ir as m,ar as n,pr as o,Ir as p,it as q,qn as r,_r as s,yr as t,dr as u,On as v,Cn as w,st as x,jn as y,sn as z};
