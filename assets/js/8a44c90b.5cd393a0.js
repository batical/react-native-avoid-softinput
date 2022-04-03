"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"set-hide-animation-delay",title:"setHideAnimationDelay",sidebar_label:"setHideAnimationDelay"},u=void 0,d={unversionedId:"api/module/set-hide-animation-delay",id:"api/module/set-hide-animation-delay",title:"setHideAnimationDelay",description:"Use setHideAnimationDelay method, to customize delay of hide offset animation with delay value in ms.",source:"@site/docs/api/module/SET_HIDE_ANIMATION_DELAY.mdx",sourceDirName:"api/module",slug:"/api/module/set-hide-animation-delay",permalink:"/react-native-avoid-softinput/docs/api/module/set-hide-animation-delay",editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/api/module/SET_HIDE_ANIMATION_DELAY.mdx",tags:[],version:"current",frontMatter:{id:"set-hide-animation-delay",title:"setHideAnimationDelay",sidebar_label:"setHideAnimationDelay"},sidebar:"docsSidebar",previous:{title:"setEasing",permalink:"/react-native-avoid-softinput/docs/api/module/set-easing"},next:{title:"setHideAnimationDuration",permalink:"/react-native-avoid-softinput/docs/api/module/set-hide-animation-duration"}},p={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"setHideAnimationDelay")," method, to customize delay of hide offset animation with delay value in ms."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no (defaults to 0 on Android and 300 on iOS)"),(0,i.kt)("td",{parentName:"tr",align:null},"hide offset animation delay")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { AvoidSoftInput } from "react-native-avoid-softinput";\n\nAvoidSoftInput.setHideAnimationDelay(100);\n')))}m.isMDXComponent=!0}}]);