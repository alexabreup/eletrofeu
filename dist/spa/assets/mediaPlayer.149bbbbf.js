import{c as oe,f,h as V,t as ce,H as qt,I as kt,r as L,J as Ct,K as ee,L as xt,g as K,M as Et,p as _t,N as Tt,O as Y,Q as Lt,P as De,S as Bt,T as Pt,U as Vt,V as $,n as Mt,W as Ot,X as ae,Y as be,Z as Fe,_ as ye,$ as Te,a0 as we,a as Me,a1 as He,e as T,a2 as At,o as Ge,d as te,l as N,a3 as It,k as $t,a4 as jt,q as Se,w as Dt,a5 as We,s as Oe,u as Ft,a6 as Ht,y as Wt,a7 as zt,a8 as se,a9 as et,aa as Rt,ab as Nt,ac as Xt,ad as Yt,ae as Qt}from"./index.80c50419.js";import{u as de,a as fe}from"./use-dark.eb2d3d21.js";var Lo=oe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>V("div",{class:o.value},ce(t.default))}}),Bo=oe({name:"QItem",props:{...de,...qt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=K(),n=fe(e,a),{hasLink:l,linkAttrs:i,linkClass:s,linkTag:v,navigateOnClick:c}=kt(),u=L(null),S=L(null),p=f(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=f(()=>e.disable!==!0&&p.value===!0),d=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=f(()=>{if(e.insetLevel===void 0)return null;const y=a.lang.rtl===!0?"Right":"Left";return{["padding"+y]:16+e.insetLevel*56+"px"}});function E(y){m.value===!0&&(S.value!==null&&y.qAvoidFocus!==!0&&(y.qKeyEvent!==!0&&document.activeElement===u.value?S.value.focus():document.activeElement===S.value&&u.value.focus()),c(y))}function k(y){if(m.value===!0&&Ct(y,[13,32])===!0){ee(y),y.qKeyEvent=!0;const D=new MouseEvent("click",y);D.qKeyEvent=!0,u.value.dispatchEvent(D)}o("keyup",y)}function b(){const y=xt(t.default,[]);return m.value===!0&&y.unshift(V("div",{class:"q-focus-helper",tabindex:-1,ref:S})),y}return()=>{const y={ref:u,class:d.value,style:q.value,role:"listitem",onClick:E,onKeyup:k};return m.value===!0?(y.tabindex=e.tabindex||"0",Object.assign(y,i.value)):p.value===!0&&(y["aria-disabled"]="true"),V(v.value,y,b())}}});function Kt(e,t){const o=L(null),a=f(()=>e.disable===!0?null:V("span",{ref:o,class:"no-outline",tabindex:-1}));function n(l){const i=t.value;(l==null?void 0:l.qAvoidFocus)!==!0&&((l==null?void 0:l.type.indexOf("key"))===0?document.activeElement!==i&&(i==null?void 0:i.contains(document.activeElement))===!0&&i.focus():o.value!==null&&(l===void 0||(i==null?void 0:i.contains(l.target))===!0)&&o.value.focus())}return{refocusTargetEl:a,refocusTarget:n}}const Ut={name:String};function Jt(e={}){return(t,o,a)=>{t[o](V("input",{class:"hidden"+(a||""),...e.value}))}}var Zt={xs:30,sm:35,md:40,lg:50,xl:60};const Gt={...de,...Tt,...Ut,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},eo=["update:modelValue"];function to(e,t){const{props:o,slots:a,emit:n,proxy:l}=K(),{$q:i}=l,s=fe(o,i),v=L(null),{refocusTargetEl:c,refocusTarget:u}=Kt(o,v),S=Et(o,Zt),p=f(()=>o.val!==void 0&&Array.isArray(o.modelValue)),m=f(()=>{const h=Y(o.val);return p.value===!0?o.modelValue.findIndex(_=>Y(_)===h):-1}),d=f(()=>p.value===!0?m.value!==-1:Y(o.modelValue)===Y(o.trueValue)),q=f(()=>p.value===!0?m.value===-1:Y(o.modelValue)===Y(o.falseValue)),E=f(()=>d.value===!1&&q.value===!1),k=f(()=>o.disable===!0?-1:o.tabindex||0),b=f(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(o.disable===!0?" disabled":"")+(s.value===!0?` q-${e}--dark`:"")+(o.dense===!0?` q-${e}--dense`:"")+(o.leftLabel===!0?" reverse":"")),y=f(()=>{const h=d.value===!0?"truthy":q.value===!0?"falsy":"indet",_=o.color!==void 0&&(o.keepColor===!0||(e==="toggle"?d.value===!0:q.value!==!0))?` text-${o.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${h}${_}`}),D=f(()=>{const h={type:"checkbox"};return o.name!==void 0&&Object.assign(h,{".checked":d.value,"^checked":d.value===!0?"checked":void 0,name:o.name,value:p.value===!0?o.val:o.trueValue}),h}),B=Jt(D),F=f(()=>{const h={tabindex:k.value,role:e==="toggle"?"switch":"checkbox","aria-label":o.label,"aria-checked":E.value===!0?"mixed":d.value===!0?"true":"false"};return o.disable===!0&&(h["aria-disabled"]="true"),h});function I(h){h!==void 0&&(ee(h),u(h)),o.disable!==!0&&n("update:modelValue",C(),h)}function C(){if(p.value===!0){if(d.value===!0){const h=o.modelValue.slice();return h.splice(m.value,1),h}return o.modelValue.concat([o.val])}if(d.value===!0){if(o.toggleOrder!=="ft"||o.toggleIndeterminate===!1)return o.falseValue}else if(q.value===!0){if(o.toggleOrder==="ft"||o.toggleIndeterminate===!1)return o.trueValue}else return o.toggleOrder!=="ft"?o.trueValue:o.falseValue;return o.indeterminateValue}function w(h){(h.keyCode===13||h.keyCode===32)&&ee(h)}function x(h){(h.keyCode===13||h.keyCode===32)&&I(h)}const M=t(d,E);return Object.assign(l,{toggle:I}),()=>{const h=M();o.disable!==!0&&B(h,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const _=[V("div",{class:y.value,style:S.value,"aria-hidden":"true"},h)];c.value!==null&&_.push(c.value);const H=o.label!==void 0?_t(a.default,[o.label]):ce(a.default);return H!==void 0&&_.push(V("div",{class:`q-${e}__label q-anchor--skip`},H)),V("div",{ref:v,class:b.value,...F.value,onClick:I,onKeydown:w,onKeyup:x},_)}}var Po=oe({name:"QToggle",props:{...Gt,icon:String,iconColor:String},emits:eo,setup(e){function t(o,a){const n=f(()=>(o.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),l=f(()=>o.value===!0?e.iconColor:null);return()=>[V("div",{class:"q-toggle__track"}),V("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[V(Lt,{name:n.value,color:l.value})]:void 0)]}return to("toggle",t)}});const oo=["ul","ol"];var Vo=oe({name:"QList",props:{...de,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=K(),a=fe(e,o.proxy.$q),n=f(()=>oo.includes(e.tag)?null:"list"),l=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>V(e.tag,{class:l.value,role:n.value},ce(t.default))}});const Mo=[Element,String],no=[null,document,document.body,document.scrollingElement,document.documentElement];function Oo(e,t){let o=Bt(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return no.includes(o)?window:o}function tt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ot(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function nt(e,t,o=0){const a=arguments[3]===void 0?performance.now():arguments[3],n=tt(e);if(o<=0){n!==t&&Le(e,t);return}requestAnimationFrame(l=>{const i=l-a,s=n+(t-n)/Math.max(i,o)*i;Le(e,s),s!==t&&nt(e,t,o-i,l)})}function lt(e,t,o=0){const a=arguments[3]===void 0?performance.now():arguments[3],n=ot(e);if(o<=0){n!==t&&Be(e,t);return}requestAnimationFrame(l=>{const i=l-a,s=n+(t-n)/Math.max(i,o)*i;Be(e,s),s!==t&&lt(e,t,o-i,l)})}function Le(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function Be(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function Ao(e,t,o){if(o){nt(e,t,o);return}Le(e,t)}function Io(e,t,o){if(o){lt(e,t,o);return}Be(e,t)}let re;function $o(){if(re!==void 0)return re;const e=document.createElement("p"),t=document.createElement("div");De(e,{width:"100%",height:"200px"}),De(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let a=e.offsetWidth;return o===a&&(a=t.clientWidth),t.remove(),re=o-a,re}function lo(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const Ae={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ao=Object.keys(Ae);Ae.all=!0;function ze(e){const t={};for(const o of ao)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?Ae:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const ro=["INPUT","TEXTAREA"];function Re(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&ro.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function io(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e,t,o){const a=Te(e);let n,l=a.left-t.event.x,i=a.top-t.event.y,s=Math.abs(l),v=Math.abs(i);const c=t.direction;c.horizontal===!0&&c.vertical!==!0?n=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?n=i<0?"up":"down":c.up===!0&&i<0?(n="up",s>v&&(c.left===!0&&l<0?n="left":c.right===!0&&l>0&&(n="right"))):c.down===!0&&i>0?(n="down",s>v&&(c.left===!0&&l<0?n="left":c.right===!0&&l>0&&(n="right"))):c.left===!0&&l<0?(n="left",s<v&&(c.up===!0&&i<0?n="up":c.down===!0&&i>0&&(n="down"))):c.right===!0&&l>0&&(n="right",s<v&&(c.up===!0&&i<0?n="up":c.down===!0&&i>0&&(n="down")));let u=!1;if(n===void 0&&o===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};n=t.event.lastDir,u=!0,n==="left"||n==="right"?(a.left-=l,s=0,l=0):(a.top-=i,v=0,i=0)}return{synthetic:u,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:a,direction:n,isFirst:t.event.isFirst,isFinal:o===!0,duration:Date.now()-t.event.time,distance:{x:s,y:v},offset:{x:l,y:i},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let uo=0;var ke=Vt({name:"touch-pan",beforeMount(e,{value:t,modifiers:o}){if(o.mouse!==!0&&$.has.touch!==!0)return;function a(l,i){o.mouse===!0&&i===!0?ee(l):(o.stop===!0&&ye(l),o.prevent===!0&&Fe(l))}const n={uid:"qvtp_"+uo++,handler:t,modifiers:o,direction:ze(o),noop:Mt,mouseStart(l){Re(l,n)&&Ot(l)&&(ae(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(l,!0))},touchStart(l){if(Re(l,n)){const i=l.target;ae(n,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),n.start(l)}},start(l,i){if($.is.firefox===!0&&be(e,!0),n.lastEvt=l,i===!0||o.stop===!0){if(n.direction.all!==!0&&(i!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Fe(c),l.cancelBubble===!0&&ye(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[n.uid]:l.qClonedBy.concat(n.uid)}),n.initialEvent={target:l.target,event:c}}ye(l)}const{left:s,top:v}=Te(l);n.event={x:s,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:v}},move(l){if(n.event===void 0)return;const i=Te(l),s=i.left-n.event.x,v=i.top-n.event.y;if(s===0&&v===0)return;n.lastEvt=l;const c=n.event.mouse===!0,u=()=>{a(l,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),io(),n.styleCleanup=d=>{if(n.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{q(),d()},50):q()}else d!==void 0&&d()}};if(n.event.detected===!0){n.event.isFirst!==!0&&a(l,n.event.mouse);const{payload:m,synthetic:d}=qe(l,n,!1);m!==void 0&&(n.handler(m)===!1?n.end(l):(n.styleCleanup===void 0&&n.event.isFirst===!0&&u(),n.event.lastX=m.position.left,n.event.lastY=m.position.top,n.event.lastDir=d===!0?void 0:m.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||c===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){u(),n.event.detected=!0,n.move(l);return}const S=Math.abs(s),p=Math.abs(v);S!==p&&(n.direction.horizontal===!0&&S>p||n.direction.vertical===!0&&S<p||n.direction.up===!0&&S<p&&v<0||n.direction.down===!0&&S<p&&v>0||n.direction.left===!0&&S>p&&s<0||n.direction.right===!0&&S>p&&s>0?(n.event.detected=!0,n.move(l)):n.end(l,!0))},end(l,i){var s;if(n.event!==void 0){if(we(n,"temp"),$.is.firefox===!0&&be(e,!1),i===!0)(s=n.styleCleanup)==null||s.call(n),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(qe(l===void 0?n.lastEvt:l,n).payload);const{payload:v}=qe(l===void 0?n.lastEvt:l,n,!0),c=()=>{n.handler(v)};n.styleCleanup!==void 0?n.styleCleanup(c):c()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ae(n,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}$.has.touch===!0&&ae(n,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchpan;o!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&o.end(),o.handler=t.value),o.direction=ze(t.modifiers))},beforeUnmount(e){var o;const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),we(t,"main"),we(t,"temp"),$.is.firefox===!0&&be(e,!1),(o=t.styleCleanup)==null||o.call(t),delete e.__qtouchpan)}});function ie(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function so(e,t,o){let a;function n(){a!==void 0&&(He.remove(a),a=void 0)}return Me(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){a={condition:()=>o.value===!0,handler:t},He.add(a)}}}const co={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},fo=["beforeShow","show","beforeHide","hide"];function vo({showing:e,canShow:t,hideOnRouteChange:o,handleShow:a,handleHide:n,processOnMount:l}){const i=K(),{props:s,emit:v,proxy:c}=i;let u;function S(b){e.value===!0?d(b):p(b)}function p(b){if(s.disable===!0||(b==null?void 0:b.qAnchorHandled)===!0||t!==void 0&&t(b)!==!0)return;const y=s["onUpdate:modelValue"]!==void 0;y===!0&&(v("update:modelValue",!0),u=b,te(()=>{u===b&&(u=void 0)})),(s.modelValue===null||y===!1)&&m(b)}function m(b){e.value!==!0&&(e.value=!0,v("beforeShow",b),a!==void 0?a(b):v("show",b))}function d(b){if(s.disable===!0)return;const y=s["onUpdate:modelValue"]!==void 0;y===!0&&(v("update:modelValue",!1),u=b,te(()=>{u===b&&(u=void 0)})),(s.modelValue===null||y===!1)&&q(b)}function q(b){e.value!==!1&&(e.value=!1,v("beforeHide",b),n!==void 0?n(b):v("hide",b))}function E(b){s.disable===!0&&b===!0?s["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):b===!0!==e.value&&(b===!0?m:q)(u)}T(()=>s.modelValue,E),o!==void 0&&At(i)===!0&&T(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&d()}),l===!0&&Ge(()=>{E(s.modelValue)});const k={show:p,hide:d,toggle:S};return Object.assign(c,k),k}let J=0,Ce,xe,Z,Ee=!1,Ne,Xe,Ye,X=null;function mo(e){ho(e)&&ee(e)}function ho(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=It(e),o=e.shiftKey&&!e.deltaX,a=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||a?e.deltaY:e.deltaX;for(let l=0;l<t.length;l++){const i=t[l];if(lo(i,a))return a?n<0&&i.scrollTop===0?!0:n>0&&i.scrollTop+i.clientHeight===i.scrollHeight:n<0&&i.scrollLeft===0?!0:n>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Qe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ue(e){Ee!==!0&&(Ee=!0,requestAnimationFrame(()=>{Ee=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:a}=document.scrollingElement;(Z===void 0||t!==window.innerHeight)&&(Z=o-t,document.scrollingElement.scrollTop=a),a>Z&&(document.scrollingElement.scrollTop-=Math.ceil((a-Z)/8))}))}function Ke(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:n}=window.getComputedStyle(t);Ce=ot(window),xe=tt(window),Ne=t.style.left,Xe=t.style.top,Ye=window.location.href,t.style.left=`-${Ce}px`,t.style.top=`-${xe}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ue,N.passiveCapture),window.visualViewport.addEventListener("scroll",ue,N.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Qe,N.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",mo,N.notPassive),e==="remove"&&($.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ue,N.passiveCapture),window.visualViewport.removeEventListener("scroll",ue,N.passiveCapture)):window.removeEventListener("scroll",Qe,N.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ne,t.style.top=Xe,window.location.href===Ye&&window.scrollTo(Ce,xe),Z=void 0)}function po(e){let t="add";if(e===!0){if(J++,X!==null){clearTimeout(X),X=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(t="remove",$.is.ios===!0&&$.is.nativeMobile===!0){X!==null&&clearTimeout(X),X=setTimeout(()=>{Ke(t),X=null},100);return}}Ke(t)}function go(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,po(t))}}}function bo(){let e=null;const t=K();function o(){e!==null&&(clearTimeout(e),e=null)}return $t(o),Me(o),{removeTimeout:o,registerTimeout(a,n){o(),jt(t)===!1&&(e=setTimeout(()=>{e=null,a()},n))}}}const Ue=150;var jo=oe({name:"QDrawer",inheritAttrs:!1,props:{...co,...de,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...fo,"onLayout","miniState"],setup(e,{slots:t,emit:o,attrs:a}){const n=K(),{proxy:{$q:l}}=n,i=fe(e,l),{preventBodyScroll:s}=go(),{registerTimeout:v,removeTimeout:c}=bo(),u=Oe(Ft,Se);if(u===Se)return console.error("QDrawer needs to be child of QLayout"),Se;let S,p=null,m;const d=L(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),q=f(()=>e.mini===!0&&d.value!==!0),E=f(()=>q.value===!0?e.miniWidth:e.width),k=L(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),b=f(()=>e.persistent!==!0&&(d.value===!0||ut.value===!0));function y(r,g){if(I(),r!==!1&&u.animate(),A(0),d.value===!0){const O=u.instances[j.value];(O==null?void 0:O.belowBreakpoint)===!0&&O.hide(!1),W(1),u.isContainer.value!==!0&&s(!0)}else W(0),r!==!1&&he(!1);v(()=>{r!==!1&&he(!0),g!==!0&&o("show",r)},Ue)}function D(r,g){C(),r!==!1&&u.animate(),W(0),A(M.value*E.value),pe(),g!==!0?v(()=>{o("hide",r)},Ue):c()}const{show:B,hide:F}=vo({showing:k,hideOnRouteChange:b,handleShow:y,handleHide:D}),{addToHistory:I,removeFromHistory:C}=so(k,F,b),w={belowBreakpoint:d,hide:F},x=f(()=>e.side==="right"),M=f(()=>(l.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),h=L(0),_=L(!1),H=L(!1),ne=L(E.value*M.value),j=f(()=>x.value===!0?"left":"right"),P=f(()=>k.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:E.value:0),ve=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(x.value?"R":"L")!==-1||l.platform.is.ios===!0&&u.isContainer.value===!0),U=f(()=>e.overlay===!1&&k.value===!0&&d.value===!1),ut=f(()=>e.overlay===!0&&k.value===!0&&d.value===!1),st=f(()=>"fullscreen q-drawer__backdrop"+(k.value===!1&&_.value===!1?" hidden":"")),ct=f(()=>({backgroundColor:`rgba(0,0,0,${h.value*.4})`})),$e=f(()=>x.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),dt=f(()=>x.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),ft=f(()=>{const r={};return u.header.space===!0&&$e.value===!1&&(ve.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&dt.value===!1&&(ve.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),vt=f(()=>{const r={width:`${E.value}px`,transform:`translateX(${ne.value}px)`};return d.value===!0?r:Object.assign(r,ft.value)}),mt=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ht=f(()=>`q-drawer q-drawer--${e.side}`+(H.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(_.value===!0?" no-transition":k.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(ve.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),pt=f(()=>{const r=l.lang.rtl===!0?e.side:j.value;return[[ke,wt,void 0,{[r]:!0,mouse:!0}]]}),gt=f(()=>{const r=l.lang.rtl===!0?j.value:e.side;return[[ke,je,void 0,{[r]:!0,mouse:!0}]]}),bt=f(()=>{const r=l.lang.rtl===!0?j.value:e.side;return[[ke,je,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){St(d,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}T(d,r=>{r===!0?(S=k.value,k.value===!0&&F(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(k.value===!0?(A(0),W(0),pe()):B(!1))}),T(()=>e.side,(r,g)=>{u.instances[g]===w&&(u.instances[g]=void 0,u[g].space=!1,u[g].offset=0),u.instances[r]=w,u[r].size=E.value,u[r].space=U.value,u[r].offset=P.value}),T(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),T(()=>e.behavior+e.breakpoint,me),T(u.isContainer,r=>{k.value===!0&&s(r!==!0),r===!0&&me()}),T(u.scrollbarWidth,()=>{A(k.value===!0?0:void 0)}),T(P,r=>{z("offset",r)}),T(U,r=>{o("onLayout",r),z("space",r)}),T(x,()=>{A()}),T(E,r=>{A(),ge(e.miniToOverlay,r)}),T(()=>e.miniToOverlay,r=>{ge(r,E.value)}),T(()=>l.lang.rtl,()=>{A()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(yt(),u.animate())}),T(q,r=>{o("miniState",r)});function A(r){r===void 0?te(()=>{r=k.value===!0?0:E.value,A(M.value*r)}):(u.isContainer.value===!0&&x.value===!0&&(d.value===!0||Math.abs(r)===E.value)&&(r+=M.value*u.scrollbarWidth.value),ne.value=r)}function W(r){h.value=r}function he(r){const g=r===!0?"remove":u.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function yt(){p!==null&&clearTimeout(p),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),H.value=!0,p=setTimeout(()=>{var r,g;p=null,H.value=!1,(g=(r=n==null?void 0:n.proxy)==null?void 0:r.$el)==null||g.classList.remove("q-drawer--mini-animate")},150)}function wt(r){if(k.value!==!1)return;const g=E.value,O=ie(r.distance.x,0,g);if(r.isFinal===!0){O>=Math.min(75,g)===!0?B():(u.animate(),W(0),A(M.value*g)),_.value=!1;return}A((l.lang.rtl===!0?x.value!==!0:x.value)?Math.max(g-O,0):Math.min(0,O-g)),W(ie(O/g,0,1)),r.isFirst===!0&&(_.value=!0)}function je(r){if(k.value!==!0)return;const g=E.value,O=r.direction===e.side,le=(l.lang.rtl===!0?O!==!0:O)?ie(r.distance.x,0,g):0;if(r.isFinal===!0){Math.abs(le)<Math.min(75,g)===!0?(u.animate(),W(1),A(0)):F(),_.value=!1;return}A(M.value*le),W(ie(1-le/g,0,1)),r.isFirst===!0&&(_.value=!0)}function pe(){s(!1),he(!0)}function z(r,g){u.update(e.side,r,g)}function St(r,g){r.value!==g&&(r.value=g)}function ge(r,g){z("size",r===!0?e.miniWidth:g)}return u.instances[e.side]=w,ge(e.miniToOverlay,E.value),z("space",U.value),z("offset",P.value),e.showIfAbove===!0&&e.modelValue!==!0&&k.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Ge(()=>{o("onLayout",U.value),o("miniState",q.value),S=e.showIfAbove===!0;const r=()=>{(k.value===!0?y:D)(!1,!0)};if(u.totalWidth.value!==0){te(r);return}m=T(u.totalWidth,()=>{m(),m=void 0,k.value===!1&&e.showIfAbove===!0&&d.value===!1?B(!1):r()})}),Me(()=>{m==null||m(),p!==null&&(clearTimeout(p),p=null),k.value===!0&&pe(),u.instances[e.side]===w&&(u.instances[e.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(V("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),r.push(We("div",{ref:"backdrop",class:st.value,style:ct.value,"aria-hidden":"true",onClick:F},void 0,"backdrop",e.noSwipeBackdrop!==!0&&k.value===!0,()=>bt.value)));const g=q.value===!0&&t.mini!==void 0,O=[V("div",{...a,key:""+g,class:[mt.value,a.class]},g===!0?t.mini():ce(t.default))];return e.elevated===!0&&k.value===!0&&O.push(V("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(We("aside",{ref:"content",class:ht.value,style:vt.value},O,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>gt.value)),V("div",{class:"q-drawer-container"},r)}}});function Do(){return Oe(Ht)}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let at;const Ie=e=>at=e,yo=Symbol();function Pe(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var G;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(G||(G={}));const rt=()=>{};function Je(e,t,o,a=rt){e.push(t);const n=()=>{const l=e.indexOf(t);l>-1&&(e.splice(l,1),a())};return!o&&Nt()&&Xt(n),n}function Q(e,...t){e.slice().forEach(o=>{o(...t)})}const wo=e=>e(),Ze=Symbol(),_e=Symbol();function Ve(e,t){e instanceof Map&&t instanceof Map?t.forEach((o,a)=>e.set(a,o)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const o in t){if(!t.hasOwnProperty(o))continue;const a=t[o],n=e[o];Pe(n)&&Pe(a)&&e.hasOwnProperty(o)&&!se(a)&&!et(a)?e[o]=Ve(n,a):e[o]=a}return e}const So=Symbol();function qo(e){return!Pe(e)||!e.hasOwnProperty(So)}const{assign:R}=Object;function ko(e){return!!(se(e)&&e.effect)}function Co(e,t,o,a){const{state:n,actions:l,getters:i}=t,s=o.state.value[e];let v;function c(){s||(o.state.value[e]=n?n():{});const u=Yt(o.state.value[e]);return R(u,l,Object.keys(i||{}).reduce((S,p)=>(S[p]=Qt(f(()=>{Ie(o);const m=o._s.get(e);return i[p].call(m,m)})),S),{}))}return v=it(e,c,t,o,a,!0),v}function it(e,t,o={},a,n,l){let i;const s=R({actions:{}},o),v={deep:!0};let c,u,S=[],p=[],m;const d=a.state.value[e];!l&&!d&&(a.state.value[e]={}),L({});let q;function E(C){let w;c=u=!1,typeof C=="function"?(C(a.state.value[e]),w={type:G.patchFunction,storeId:e,events:m}):(Ve(a.state.value[e],C),w={type:G.patchObject,payload:C,storeId:e,events:m});const x=q=Symbol();te().then(()=>{q===x&&(c=!0)}),u=!0,Q(S,w,a.state.value[e])}const k=l?function(){const{state:w}=o,x=w?w():{};this.$patch(M=>{R(M,x)})}:rt;function b(){i.stop(),S=[],p=[],a._s.delete(e)}const y=(C,w="")=>{if(Ze in C)return C[_e]=w,C;const x=function(){Ie(a);const M=Array.from(arguments),h=[],_=[];function H(P){h.push(P)}function ne(P){_.push(P)}Q(p,{args:M,name:x[_e],store:B,after:H,onError:ne});let j;try{j=C.apply(this&&this.$id===e?this:B,M)}catch(P){throw Q(_,P),P}return j instanceof Promise?j.then(P=>(Q(h,P),P)).catch(P=>(Q(_,P),Promise.reject(P))):(Q(h,j),j)};return x[Ze]=!0,x[_e]=w,x},D={_p:a,$id:e,$onAction:Je.bind(null,p),$patch:E,$reset:k,$subscribe(C,w={}){const x=Je(S,C,w.detached,()=>M()),M=i.run(()=>T(()=>a.state.value[e],h=>{(w.flush==="sync"?u:c)&&C({storeId:e,type:G.direct,events:m},h)},R({},v,w)));return x},$dispose:b},B=Wt(D);a._s.set(e,B);const I=(a._a&&a._a.runWithContext||wo)(()=>a._e.run(()=>(i=zt()).run(()=>t({action:y}))));for(const C in I){const w=I[C];if(se(w)&&!ko(w)||et(w))l||(d&&qo(w)&&(se(w)?w.value=d[C]:Ve(w,d[C])),a.state.value[e][C]=w);else if(typeof w=="function"){const x=y(w,C);I[C]=x,s.actions[C]=w}}return R(B,I),R(Y(B),I),Object.defineProperty(B,"$state",{get:()=>a.state.value[e],set:C=>{E(w=>{R(w,C)})}}),a._p.forEach(C=>{R(B,i.run(()=>C({store:B,app:a._a,pinia:a,options:s})))}),d&&l&&o.hydrate&&o.hydrate(B.$state,d),c=!0,u=!0,B}/*! #__NO_SIDE_EFFECTS__ */function xo(e,t,o){let a,n;const l=typeof t=="function";typeof e=="string"?(a=e,n=l?o:t):(n=e,a=e.id);function i(s,v){const c=Rt();return s=s||(c?Oe(yo,null):null),s&&Ie(s),s=at,s._s.has(a)||(l?it(a,t,n,s):Co(a,n,s)),s._s.get(a)}return i.$id=a,i}const Fo=xo("mediaPlayer",()=>{const e=L(0),t=L(!1),o=L(!1),a=L(!1),n=L(null),l=L([{label:"Big Buck Bunny",description:"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",thumbnail:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",duration:"9:56",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",type:"video/mp4"}]},{label:"Elephant Dream",description:"The first Blender Open Movie from 2006",poster:"https://download.blender.org/ED/cover.jpg",thumbnail:"https://download.blender.org/ED/cover.jpg",duration:"10:53",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",type:"video/mp4"}]},{label:"Sintel",description:"Third Open Movie by Blender Foundation",poster:"https://durian.blender.org/wp-content/uploads/2010/05/sintel-1024x436.jpg",thumbnail:"https://durian.blender.org/wp-content/uploads/2010/05/sintel-1024x436.jpg",duration:"14:48",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",type:"video/mp4"}]},{label:"Tears of Steel",description:"Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender.",poster:"https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",thumbnail:"https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",duration:"12:14",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",type:"video/mp4"}]}]),i=f(()=>l.value[e.value]);function s(q){n.value=q}function v(){n.value&&(n.value.play(),t.value=!0)}function c(){n.value&&(n.value.pause(),t.value=!1)}function u(){v()}function S(q){q>=0&&q<l.value.length&&(e.value=q,n.value&&(n.value.src({src:i.value.sources[0].src,type:i.value.sources[0].type}),n.value.poster(i.value.poster),n.value.load(),n.value.play(),t.value=!0))}function p(){o.value=!o.value,n.value&&n.value.muted(o.value)}function m(q){a.value=q,n.value&&n.value.loop(q)}function d(){a.value?v():e.value<l.value.length-1?S(e.value+1):S(0)}return{currentMediaIndex:e,isPlaying:t,isMuted:o,loopMode:a,playlist:l,currentMedia:i,setPlayer:s,playCurrentVideo:v,pauseVideo:c,playPlaylist:u,playVideoByIndex:S,toggleMute:p,setLoopMode:m,onMediaEnded:d}});export{Vo as Q,ke as T,tt as a,ot as b,ie as c,Ao as d,Io as e,$o as f,Oo as g,Do as h,Bo as i,Lo as j,Po as k,jo as l,Mo as s,Fo as u};
