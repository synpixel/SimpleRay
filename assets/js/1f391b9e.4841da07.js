(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1811:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ce});var r=n(7294),o=n(6010),a=n(1944),l=n(5281),c=n(5221),s=n(3905),i=n(7462),u=n(5742);var m=n(2389),d=n(2949),p=n(6668);function f(){const{prism:e}=(0,p.L)(),{colorMode:t}=(0,d.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var g=n(7594),h=n.n(g);const y=/title=(?<quote>["'])(?<title>.*?)\1/,v=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){const n=e.map((e=>{const{start:n,end:r}=b[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&v.test(a)){const e=a.match(v).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=o[0].className,r=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=p+",":u[t]?s[u[t]].start=p:m[t]&&(s[m[t]].range+=s[m[t]].start+"-"+(p-1)+","),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{null!=d[e]||(d[e]=[]),d[e].push(t)}))})),{lineClassNames:d,code:n}}const N="codeBlockContainer_Ckt0";function L(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(f());return r.createElement(t,(0,i.Z)({},n,{style:a,className:(0,o.Z)(n.className,N,l.k.common.codeBlock)}))}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){let{children:t,className:n}=e;return r.createElement(L,{as:"pre",tabIndex:0,className:(0,o.Z)(C.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:C.codeBlockLines},t))}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(7410).Z,theme:B};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var _=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=j({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=j({},n,{backgroundColor:null}),o};function H(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const P=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),O(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),O(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=j({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?j({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),O(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),O(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=j({},H(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?j({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),O(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],s=[c];l>-1;){for(;(a=r[l]++)<o[l];){var i=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],i=m):(u=Z(u,m.type),m.alias&&(u=Z(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(_),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)T(c),s.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return T(c),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),A="codeLine_lJS_",I="codeLineNumber_Tfdd",D="codeLineContent_feaV";function M(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=l({line:t,className:(0,o.Z)(n,a&&A)}),u=t.map(((e,t)=>r.createElement("span",(0,i.Z)({key:t},c({token:e,key:t})))));return r.createElement("span",s,a?r.createElement(r.Fragment,null,r.createElement("span",{className:I}),r.createElement("span",{className:D},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var R=n(5999);const z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[a,l]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":a?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,z.copyButton,a&&z.copyButtonCopied),onClick:s},r.createElement("span",{className:z.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:z.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:z.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const W="wordWrapButtonIcon_Bwma",q="wordWrapButtonEnabled_EoeP";function F(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,a&&q),"aria-label":l,title:l},r.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function G(e){var t;let{children:n,className:a="",metastring:l,title:c,showLineNumbers:s,language:u}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,p.L)(),g=null!=(t=null!=u?u:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(a))?t:m,h=f(),v=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(y))?void 0:n.groups.title)?t:""}(l)||c,{lineClassNames:k,code:N}=E(n,{metastring:l,language:g,magicComments:d}),x=null!=s?s:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(l);return r.createElement(L,{as:"div",className:(0,o.Z)(a,g&&!a.includes("language-"+g)&&"language-"+g)},b&&r.createElement("div",{className:C.codeBlockTitle},b),r.createElement("div",{className:C.codeBlockContent},r.createElement(P,(0,i.Z)({},w,{theme:h,code:N,language:null!=g?g:"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return r.createElement("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,o.Z)(t,C.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,o.Z)(C.codeBlockLines,x&&C.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(M,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:k[t],showLineNumbers:x})))))})),r.createElement("div",{className:C.buttonGroup},(v.isEnabled||v.isCodeScrollable)&&r.createElement(F,{className:C.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),r.createElement(V,{className:C.codeButton,code:N}))))}function $(e){let{children:t,...n}=e;const o=(0,m.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?G:x;return r.createElement(l,(0,i.Z)({key:String(o)},n),a)}var U=n(9960);var Y=n(6043);const J="details_lb9f",K="isBrowser_bmU9",X="collapsibleContent_i85q";function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function ee(e,t){return!!e&&(e===t||ee(e.parentElement,t))}function te(e){let{summary:t,children:n,...a}=e;const l=(0,m.Z)(),c=(0,r.useRef)(null),{collapsed:s,setCollapsed:u}=(0,Y.u)({initialState:!a.open}),[d,p]=(0,r.useState)(a.open);return r.createElement("details",(0,i.Z)({},a,{ref:c,open:d,"data-collapsed":s,className:(0,o.Z)(J,l&&K,a.className),onMouseDown:e=>{Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Q(t)&&ee(t,c.current)&&(e.preventDefault(),s?(u(!1),p(!0)):u(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(Y.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)}},r.createElement("div",{className:X},n)))}const ne="details_b_Ee";function re(e){let{...t}=e;return r.createElement(te,(0,i.Z)({},t,{className:(0,o.Z)("alert alert--info",ne,t.className)}))}const oe="anchorWithStickyNavbar_LWe7",ae="anchorWithHideOnScrollNavbar_WYt5";function le(e){let{as:t,id:n,...a}=e;const{navbar:{hideOnScroll:l}}=(0,p.L)();return"h1"!==t&&n?r.createElement(t,(0,i.Z)({},a,{className:(0,o.Z)("anchor",l?ae:oe),id:n}),a.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,R.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,i.Z)({},a,{id:void 0}))}function ce(e){return r.createElement(le,e)}const se="containsTaskList_mC6p";const ie="img_ev3q";const ue={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(u.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)))?r.createElement("code",e):r.createElement($,e)},a:function(e){return r.createElement(U.Z,e)},pre:function(e){var t;return r.createElement($,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(re,(0,i.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,i.Z)({},e,{className:(t=e.className,(0,o.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&se))}));var t},img:function(e){return r.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(t=e.className,(0,o.Z)(t,ie))}));var t},h1:e=>r.createElement(ce,(0,i.Z)({as:"h1"},e)),h2:e=>r.createElement(ce,(0,i.Z)({as:"h2"},e)),h3:e=>r.createElement(ce,(0,i.Z)({as:"h3"},e)),h4:e=>r.createElement(ce,(0,i.Z)({as:"h4"},e)),h5:e=>r.createElement(ce,(0,i.Z)({as:"h5"},e)),h6:e=>r.createElement(ce,(0,i.Z)({as:"h6"},e))};function me(e){let{children:t}=e;return r.createElement(s.Zo,{components:ue},t)}function de(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function pe(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=pe({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function fe(e){const t=e.getBoundingClientRect();return t.top===t.bottom?fe(e.parentNode):t}function ge(e,t){var n;let{anchorTopOffset:r}=t;const o=e.find((e=>fe(e).top>=r));if(o){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(fe(o))?o:null!=(a=e[e.indexOf(o)-1])?a:null}return null!=(n=e[e.length-1])?n:null}function he(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,p.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function ye(e){const t=(0,r.useRef)(void 0),n=he();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),s=ge(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function ve(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(ve,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const be=r.memo(ve);function ke(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:c,...s}=e;const u=(0,p.L)(),m=null!=l?l:u.tableOfContents.minHeadingLevel,d=null!=c?c:u.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>pe({toc:de(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return ye((0,r.useMemo)((()=>{if(o&&a)return{linkClassName:o,linkActiveClassName:a,minHeadingLevel:m,maxHeadingLevel:d}}),[o,a,m,d])),r.createElement(be,(0,i.Z)({toc:f,className:n,linkClassName:o},s))}const Ee="tableOfContents_bqdL";function Ne(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,o.Z)(Ee,"thin-scrollbar",t)},r.createElement(ke,(0,i.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}const Le="mdxPageWrapper_j9I6";function Ce(e){const{content:t}=e,{metadata:{title:n,description:s,frontMatter:i}}=t,{wrapperClassName:u,hide_table_of_contents:m}=i;return r.createElement(a.FG,{className:(0,o.Z)(null!=u?u:l.k.wrapper.mdxPages,l.k.page.mdxPage)},r.createElement(a.d,{title:n,description:s}),r.createElement(c.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,o.Z)("row",Le)},r.createElement("div",{className:(0,o.Z)("col",!m&&"col--8")},r.createElement(me,null,r.createElement(t,null))),!m&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(Ne,{toc:t.toc,minHeadingLevel:i.toc_min_heading_level,maxHeadingLevel:i.toc_max_heading_level}))))))}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);