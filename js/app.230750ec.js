(function(t){function e(e){for(var a,c,o=e[0],n=e[1],i=e[2],v=0,p=[];v<o.length;v++)c=o[v],s[c]&&p.push(s[c][0]),s[c]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);f&&f(e);while(p.length)p.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],a=!0,o=1;o<r.length;o++){var n=r[o];0!==s[n]&&(a=!1)}a&&(l.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},s={app:0},l=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Portfolio-Vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var f=n;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"014b":function(t,e,r){"use strict";var a=r("e738"),s=r.n(a);s.a},"034f":function(t,e,r){"use strict";var a=r("64a9"),s=r.n(a);s.a},"0376":function(t,e,r){},"051a":function(t,e,r){"use strict";var a=r("d80a"),s=r.n(a);s.a},2208:function(t,e,r){},"28fc":function(t,e,r){},"361e":function(t,e,r){},4750:function(t,e,r){"use strict";var a=r("0376"),s=r.n(a);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Main",{attrs:{mainHeader:"Welcome"}})],1)},l=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),t._m(1),r("h3",[t._v("Installed CLI Plugins")]),t._m(2),r("h3",[t._v("Essential Links")]),t._m(3),r("h3",[t._v("Ecosystem")]),t._m(4)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n    With Bootstrap!\n    "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],n={name:"HelloWorld",props:{msg:String}},i=n,f=(r("dd91"),r("2877")),v=Object(f["a"])(i,c,o,!1,null,"4cbd81c4",null),p=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view"},[r("div",{staticClass:"container-fluid"},[r("Welcome",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}]})],1),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"space-container"},[r("SpaceSVG",{attrs:{id:"space-svg"}})],1)]),r("div",{staticClass:"container-fluid container-phone"},[r("div",{staticClass:"row row-center"},[r("div",{staticClass:"col-md-3"}),r("div",{staticClass:"col-md-4 col-article"},[r("h2",{staticClass:"small-header"},[t._v("Commitment to every project")]),r("h1",{staticClass:"large-header"},[t._v("From coffee table to launch")]),t._m(0),t._m(1),r("p",{staticClass:"paragraph-text"},[t._v("I'm up for the challenge.")]),r("div",{staticClass:"contact-button",on:{click:t.scrollTo}},[r("p",{staticClass:"button-text"},[t._v("Hire me")])])]),r("div",{staticClass:"col-md-4"},[r("LaunchSVG",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:500},expression:"{ delay: 500 }",modifiers:{reset:!0}}],staticClass:"launch-svg"})],1)])]),r("div",{attrs:{id:"contact"}}),r("div",{staticStyle:{padding:"40px"}}),r("div",{staticClass:"container"},[r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"row row-center"},[r("Browser")],1)]),r("div",{staticClass:"container tech-container"},[r("div",{staticClass:"row row-center"},[r("div",{staticClass:"col-lg-6 tech-col"},[r("h1",{staticClass:"tech-header"},[t._v("- Frameworks -")]),r("TechPill",{attrs:{color:"green",technology:"Vue.JS"}}),r("TechPill",{attrs:{color:"red",technology:"Angular"}}),r("TechPill",{attrs:{color:"blue",technology:"React"}}),r("TechPill",{attrs:{color:"blue",technology:"Nativescript"}}),r("TechPill",{attrs:{color:"blue",technology:"Laravel"}})],1),r("div",{staticClass:"col-lg-6 tech-col"},[r("h1",{staticClass:"tech-header"},[t._v("- Languages -")]),r("TechPill",{attrs:{color:"blue",technology:"Typescript"}}),r("TechPill",{attrs:{color:"blue",technology:"PHP"}}),r("TechPill",{attrs:{color:"yellow",technology:"Javascript"}}),r("TechPill",{attrs:{color:"yellow",technology:"C#"}}),r("TechPill",{attrs:{color:"red",technology:"HTML"}}),r("TechPill",{attrs:{color:"pink",technology:"SASS"}})],1)])]),t._m(2)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"paragraph-text"},[t._v("Every project is an opportunity to learn - And every project is a dream to be fulfilled."),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"paragraph-text"},[t._v("In the rapidly evolving world, even the tiniest innovation can spring a revolutionary product. \n        But this requires commitment from each team member who's involved with it."),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row row-center"},[r("div",{staticClass:"col-md-12"},[r("p",{staticClass:"copyright"},[r("i",[r("span",{staticClass:"color-pink"},[t._v('" ')]),t._v("There lies a possibility in every contact."),r("span",{staticClass:"color-pink"},[t._v(' "')])])]),r("p",{staticClass:"copyright"},[t._v(" © "),r("span",{staticClass:"color-pink"},[t._v("2019")]),t._v(" Leevi Kopakkala | Handcrafted with "),r("span",{staticClass:"green-vue"},[t._v("Vue JS")])])])])])}],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"browser-device"}},[t._m(0),r("div",{attrs:{id:"browser-content"}},[r("pre",{staticClass:"prettyprint"},[r("code",{staticClass:"language-js"},[r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:400},expression:"{delay:400}",modifiers:{reset:!0}}]},[t._v('/* Caught your attention? Feel free to contact */\n    \n// General\n[\n    {\n        "_name": "Leevi Kopakkala",\n        "title": "Software Developer", // Passionate learner, designer and dreamer.\n        "birthday": "03.10.1997"\n    }\n]\n')]),t._v("\n"),r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:600},expression:"{delay:600}",modifiers:{reset:!0}}]},[t._v("// Contact information\nfunction contact(){\n    let github = "),r("a",{attrs:{rel:"noopener",target:"_blank",href:"https://github.com/LeeviKopakkala"}},[t._v('"https://github.com/LeeviKopakkala"')]),t._v("; \n    let linkedin = "),r("a",{attrs:{rel:"noopener",target:"_blank",href:"https://linkedin.com/in/leevi-kopakkala"}},[t._v('"https://linkedin.com/in/leevi-kopakkala"')]),t._v("; // Psst, you can click these links\n}")]),t._v("\n")])])])])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"browser-nav"}},[r("div",{staticClass:"browser-button el-red"}),r("div",{staticClass:"browser-button"}),r("div",{staticClass:"browser-button el-dark"})])}],m={name:"Browser"},g=m,k=(r("e255"),Object(f["a"])(g,u,_,!1,null,"317e567a",null)),b=k.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"welcome-container"},[r("div",{staticClass:"row h-100 row-welcome"},[r("div",{staticClass:"col-sm-5 auto-center"},[r("h3",{attrs:{id:"header-small"}},[t._v("Redefining the software industry")]),r("h1",{attrs:{id:"header-welcome"}},[t._v("{ Welcome }")]),t._m(0),r("SocialIcon")],1),r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:500},expression:"{ delay: 500 }",modifiers:{reset:!0}}],staticClass:"col-sm-4 auto-center"},[r("WelcomeSVG",{attrs:{id:"welcome-svg"}})],1)]),t._m(1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:1e3},expression:"{ delay: 1000 }",modifiers:{reset:!0}}],staticClass:"scroll-down scroll-work"},[r("font-awesome-icon",{attrs:{icon:["fas","fingerprint"]}})],1)]),r("div",{staticClass:"col-sm-12"},[r("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:2500},expression:"{ delay: 2500 }",modifiers:{reset:!0}}],staticClass:"scroll-down scroll-text"},[t._v("  Scroll down to see my work ")])])])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{attrs:{id:"header-paragraph"}},[t._v("Hi, I'm Leevi Kopakkala. Software Developer from "),r("span",{staticClass:"color-pink"},[t._v("Jyväskylä")]),t._v(", Finland...")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("p",{attrs:{id:"coordinates"}},[t._v("62.2426° N, 25.7473° E")])])])}],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1824 1568",width:"1824",height:"1568"}},t.$listeners),[r("defs",[r("clipPath",{attrs:{id:"space_svg__a"}},[r("path",{attrs:{d:"M0 0h1824v1568H0z"}})])]),r("g",{attrs:{"clip-path":"url(#space_svg__a)"}},[r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"914.411",cy:"784",r:"308.246",fill:"#EBEBEB"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"914.411",cy:"784",r:"308.246",fill:"#FF006F"}}),r("linearGradient",{attrs:{id:"space_svg__b",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"translate(606.165 475.754) scale(616.492)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff006f"}}),r("stop",{attrs:{offset:"97.826%","stop-color":"#8b87c1"}})],1),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"914.411",cy:"784",r:"308.246",fill:"url(#space_svg__b)"}}),r("g",{attrs:{opacity:".76"}},[r("linearGradient",{attrs:{id:"space_svg__c",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"rotate(-128.896 788.877 279.484) scale(616.492)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff006f"}}),r("stop",{attrs:{offset:"97.826%","stop-color":"#8b87c1"}})],1),r("path",{attrs:{d:"M1306.6 875.4c-132.407 106.823-326.631 86.051-433.453-46.356-106.823-132.407-86.051-326.631 46.356-433.454 132.407-106.822 326.631-86.051 433.454 46.357 106.822 132.407 86.051 326.631-46.357 433.453z",fill:"url(#space_svg__c)"}})],1),r("ellipse",{attrs:{"vector-effect":"non-scaling-stroke",cx:"996.25",cy:"703.921",rx:"600.771",ry:"599.692",fill:"none","stroke-width":".2",stroke:"#000","stroke-miterlimit":"3"}}),r("ellipse",{attrs:{"vector-effect":"non-scaling-stroke",cx:"914.411",cy:"784",rx:"785.411",ry:"784",fill:"none","stroke-width":".5",stroke:"#FF326C","stroke-miterlimit":"3"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"302.75",cy:"1277.729",r:"11.5",fill:"#120A26"}}),r("ellipse",{attrs:{"vector-effect":"non-scaling-stroke",cx:"651.25",cy:"1195.729",rx:"7",ry:"7.5",fill:"#120A26"}}),r("text",{attrs:{transform:"translate(194.25 1284.125)","font-family":"Numans","font-weight":"400","font-size":"14",fill:"#666"}},[t._v("Major Tom")]),r("path",{attrs:{"vector-effect":"non-scaling-stroke",stroke:"#B0B0B0","stroke-linecap":"square","stroke-miterlimit":"3",d:"M276 1280.343h10"}}),r("g",{attrs:{"font-family":"Numans","font-weight":"400","font-size":"12",fill:"#666"}},[r("text",{attrs:{transform:"translate(515 1181.7)"}},[t._v("Restaurant at")]),r("text",{attrs:{transform:"translate(515 1195.798)"}},[t._v("the End of the")]),r("text",{attrs:{transform:"translate(515 1209.896)"}},[t._v("Universe")])]),r("path",{attrs:{"vector-effect":"non-scaling-stroke",stroke:"#261742","stroke-linecap":"square","stroke-miterlimit":"3",d:"M616 1197.114h10"}})],1)])},C=[],M={},S=Object(f["a"])(M,w,C,!1,null,null,null),z=S.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["tech-pill",t.color]},[r("p",[t._v(t._s(t.technology))])])},T=[],E={name:"TechPill",props:{technology:String,color:String}},H=E,V=(r("4750"),Object(f["a"])(H,j,T,!1,null,"48d46a71",null)),F=V.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://linkedin.com/in/leevi-kopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1),r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://github.com/LeeviKopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://instagram.com/leevikopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),r("br"),r("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:200},expression:"{ delay: 200 }",modifiers:{reset:!0}}],staticClass:"button-group"},[r("div",{staticClass:"contact-button",on:{click:t.scrollTo}},[r("span",{staticClass:"button-text"},[t._v("Contact")])]),t._v("with my experience\r\n    ")])])},P=[],$={name:"SocialIcon",methods:{scrollTo:function(t){location.href="#contact"}}},B=$,U=(r("94cf"),Object(f["a"])(B,O,P,!1,null,"ec6971ea",null)),G=U.exports,q={name:"Welcome",props:{mainText:String},components:{Browser:b,WelcomeSVG:z,SocialIcon:G,TechPill:F}},N=q,L=(r("f158"),Object(f["a"])(N,y,x,!1,null,"9f57d480",null)),W=L.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1225 2636",width:"1225",height:"2636"}},t.$listeners),[r("defs",[r("clipPath",{attrs:{id:"phone_svg__a"}},[r("path",{attrs:{d:"M0 0h1225v2636H0z"}})])]),r("g",{attrs:{"clip-path":"url(#phone_svg__a)"}},[r("path",{attrs:{d:"M158.36 39h917.28C1147.036 39 1205 96.964 1205 168.36v2295.28c0 71.396-57.964 129.36-129.36 129.36H158.36C86.964 2593 29 2535.036 29 2463.64V168.36C29 96.964 86.964 39 158.36 39z",fill:"#eae9e9"}}),r("path",{attrs:{d:"M158.36 39h917.28C1147.036 39 1205 96.964 1205 168.36v2295.28c0 71.396-57.964 129.36-129.36 129.36H158.36C86.964 2593 29 2535.036 29 2463.64V168.36C29 96.964 86.964 39 158.36 39z",fill:"none",stroke:"#000","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M206.764 95h820.472c66.471 0 120.437 53.966 120.437 120.438v2212.124c0 66.472-53.966 120.438-120.437 120.438H206.764c-66.471 0-120.437-53.966-120.437-120.438V215.438C86.327 148.966 140.293 95 206.764 95z",fill:"#fff"}}),r("path",{attrs:{d:"M206.764 95h820.472c66.471 0 120.437 53.966 120.437 120.438v2212.124c0 66.472-53.966 120.438-120.437 120.438H206.764c-66.471 0-120.437-53.966-120.437-120.438V215.438C86.327 148.966 140.293 95 206.764 95z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("clipPath",{attrs:{id:"phone_svg__b"}},[r("path",{attrs:{d:"M206.764 95h820.472c66.471 0 120.437 53.966 120.437 120.438v2212.124c0 66.472-53.966 120.438-120.437 120.438H206.764c-66.471 0-120.437-53.966-120.437-120.438V215.438C86.327 148.966 140.293 95 206.764 95z",fill:"#fff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M206.764 95h820.472c66.471 0 120.437 53.966 120.437 120.438v2212.124c0 66.472-53.966 120.438-120.437 120.438H206.764c-66.471 0-120.437-53.966-120.437-120.438V215.438C86.327 148.966 140.293 95 206.764 95z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}})]),r("g",{attrs:{"clip-path":"url(#phone_svg__b)"}},[r("circle",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{"vector-effect":"non-scaling-stroke",cx:"1205",cy:"2664",r:"755",fill:"#2396C8"}})]),r("path",{attrs:{d:"M435 1404h364c37.53 0 68 30.47 68 68s-30.47 68-68 68H435c-37.53 0-68-30.47-68-68s30.47-68 68-68z",fill:"#9bcdd7"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"1014",cy:"226",r:"58",fill:"#EBEBEB"}}),r("path",{attrs:{d:"M340.8 872h552.4c13.136 0 23.8 10.664 23.8 23.8v92.4c0 13.136-10.664 23.8-23.8 23.8H340.8c-13.136 0-23.8-10.664-23.8-23.8v-92.4c0-13.136 10.664-23.8 23.8-23.8zM340.8 1113.5h552.4c13.136 0 23.8 10.664 23.8 23.8v92.4c0 13.136-10.664 23.8-23.8 23.8H340.8c-13.136 0-23.8-10.664-23.8-23.8v-92.4c0-13.136 10.664-23.8 23.8-23.8z",fill:"#ebebeb"}})])])},J=[],K={},A=Object(f["a"])(K,I,J,!1,null,null,null),D=A.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2000 3500",width:"2000",height:"3500"}},t.$listeners),[r("defs",[r("clipPath",{attrs:{id:"launch_svg__a"}},[r("path",{attrs:{d:"M0 0h2000v3500H0z"}})])]),r("g",{attrs:{"clip-path":"url(#launch_svg__a)"}},[r("linearGradient",{attrs:{id:"launch_svg__b",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(203.208 0 0 212.962 939.483 2737.706)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M1142.691 2950.668c-112.153 0-203.208-91.054-203.208-203.208 0-3.271.078-6.523.241-9.754h202.967v212.962z",fill:"url(#launch_svg__b)"}}),r("linearGradient",{attrs:{id:"launch_svg__c",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(196.565 0 0 206 305.118 2898.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M501.683 3104.187c-108.487 0-196.565-88.078-196.565-196.565 0-3.164.075-6.31.233-9.435h196.332v206z",fill:"url(#launch_svg__c)"}}),r("linearGradient",{attrs:{id:"launch_svg__d",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(354.962 0 0 372 501.683 2732.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M501.683 3104.187c195.909 0 354.962-159.053 354.962-354.962 0-5.713-.135-11.395-.42-17.038H501.683v372z",fill:"url(#launch_svg__d)"}}),r("linearGradient",{attrs:{id:"launch_svg__e",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(107.198 0 0 112.344 885.884 3198.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M885.884 3310.531c59.164 0 107.198-48.034 107.198-107.198 0-1.726-.04-3.442-.126-5.146H885.884v112.344z",fill:"url(#launch_svg__e)"}}),r("linearGradient",{attrs:{id:"launch_svg__f",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(51.527 0 0 54 1643.355 2844.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M1643.355 2898.187c28.438 0 51.527-23.088 51.527-51.527 0-.829-.02-1.654-.061-2.473h-51.466v54z",fill:"url(#launch_svg__f)"}}),r("linearGradient",{attrs:{id:"launch_svg__g",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(249.409 0 0 237.718 501.683 2494.469)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M751.092 2732.187H501.683c6.253-132.26 115.613-237.718 249.409-237.718v237.718z",fill:"url(#launch_svg__g)"}}),r("linearGradient",{attrs:{id:"launch_svg__h",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(117.508 0 0 112 1315.683 2732.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M1433.191 2844.187h-117.508c2.946-62.314 54.471-112 117.508-112v112z",fill:"url(#launch_svg__h)"}}),r("linearGradient",{attrs:{id:"launch_svg__i",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(198.295 0 0 189 305.118 2709.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M305.118 2898.187h198.295c-4.971-105.155-91.919-189-198.295-189v189z",fill:"url(#launch_svg__i)"}}),r("linearGradient",{attrs:{id:"launch_svg__j",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(268.59 0 0 256 1280.683 2942.187)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff454b"}}),r("stop",{attrs:{offset:"98.696%","stop-color":"#d745ff"}})],1),r("path",{attrs:{d:"M1280.683 3198.187h268.59c-6.734-142.432-124.504-256-268.59-256v256z",fill:"url(#launch_svg__j)"}}),r("path",{attrs:{d:"M598.238 189.469h715.795c55.713 0 100.945 45.232 100.945 100.945v1791.109c0 55.714-45.232 100.946-100.945 100.946H598.238c-55.713 0-100.945-45.232-100.945-100.946V290.414c0-55.713 45.232-100.945 100.945-100.945z",fill:"#eae9e9"}}),r("path",{attrs:{d:"M598.238 189.469h715.795c55.713 0 100.945 45.232 100.945 100.945v1791.109c0 55.714-45.232 100.946-100.945 100.946H598.238c-55.713 0-100.945-45.232-100.945-100.946V290.414c0-55.713 45.232-100.945 100.945-100.945z",fill:"none",stroke:"#000","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M598.238 189.469h715.795c55.713 0 100.945 45.232 100.945 100.945v1791.109c0 55.714-45.232 100.946-100.945 100.946H598.238c-55.713 0-100.945-45.232-100.945-100.946V290.414c0-55.713 45.232-100.945 100.945-100.945z",fill:"#eae9e9"}}),r("path",{attrs:{d:"M598.238 189.469h715.795c55.713 0 100.945 45.232 100.945 100.945v1791.109c0 55.714-45.232 100.946-100.945 100.946H598.238c-55.713 0-100.945-45.232-100.945-100.946V290.414c0-55.713 45.232-100.945 100.945-100.945z",fill:"none",stroke:"#000","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M636.01 233.168h640.25c51.871 0 93.984 42.113 93.984 93.983V2053.37c0 51.871-42.113 93.983-93.984 93.983H636.01c-51.87 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.113-93.983 93.983-93.983z",fill:"#fff"}}),r("path",{attrs:{d:"M636.01 233.168h640.25c51.871 0 93.984 42.113 93.984 93.983V2053.37c0 51.871-42.113 93.983-93.984 93.983H636.01c-51.87 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.113-93.983 93.983-93.983z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("clipPath",{attrs:{id:"launch_svg__k"}},[r("path",{attrs:{d:"M636.01 233.168h640.25c51.871 0 93.984 42.113 93.984 93.983V2053.37c0 51.871-42.113 93.983-93.984 93.983H636.01c-51.87 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.113-93.983 93.983-93.983z",fill:"#fff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M636.01 233.168h640.25c51.871 0 93.984 42.113 93.984 93.983V2053.37c0 51.871-42.113 93.983-93.984 93.983H636.01c-51.87 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.113-93.983 93.983-93.983z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}})]),r("g",{attrs:{"clip-path":"url(#launch_svg__k)"}},[r("circle",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{"vector-effect":"non-scaling-stroke",cx:"1414.978",cy:"2237.873",r:"589.16",fill:"#2396C8"}})]),r("path",{attrs:{d:"M632.499 233.168h640.25c51.871 0 93.983 42.113 93.983 93.983V2053.37c0 51.871-42.112 93.983-93.983 93.983h-640.25c-51.871 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.112-93.983 93.983-93.983z",fill:"#fff"}}),r("path",{attrs:{d:"M632.499 233.168h640.25c51.871 0 93.983 42.113 93.983 93.983V2053.37c0 51.871-42.112 93.983-93.983 93.983h-640.25c-51.871 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.112-93.983 93.983-93.983z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("clipPath",{attrs:{id:"launch_svg__l"}},[r("path",{attrs:{d:"M632.499 233.168h640.25c51.871 0 93.983 42.113 93.983 93.983V2053.37c0 51.871-42.112 93.983-93.983 93.983h-640.25c-51.871 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.112-93.983 93.983-93.983z",fill:"#fff","stroke-linecap":"square","stroke-miterlimit":"2"}}),r("path",{attrs:{d:"M632.499 233.168h640.25c51.871 0 93.983 42.113 93.983 93.983V2053.37c0 51.871-42.112 93.983-93.983 93.983h-640.25c-51.871 0-93.983-42.112-93.983-93.983V327.151c0-51.87 42.112-93.983 93.983-93.983z",fill:"none",stroke:"#0073ff","stroke-linecap":"square","stroke-miterlimit":"2"}})]),r("g",{attrs:{"clip-path":"url(#launch_svg__l)"}},[r("linearGradient",{attrs:{id:"launch_svg__m",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"translate(822.306 1648.713) scale(1178.32)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#ff2675"}}),r("stop",{attrs:{offset:"100%","stop-color":"#d745ff"}})],1),r("circle",{staticStyle:{"mix-blend-mode":"multiply"},attrs:{"vector-effect":"non-scaling-stroke",cx:"1411.466",cy:"2237.873",r:"589.16",fill:"url(#launch_svg__m)"}})],1),r("path",{attrs:{d:"M814.113 1254.639h284.045c29.287 0 53.064 23.777 53.064 53.064 0 29.286-23.777 53.063-53.064 53.063H814.113c-29.287 0-53.064-23.777-53.064-53.063 0-29.287 23.777-53.064 53.064-53.064z",fill:"#9bcdd7"}}),r("path",{attrs:{d:"M814.113 1254.639h284.045c29.287 0 53.064 23.777 53.064 53.064 0 29.286-23.777 53.063-53.064 53.063H814.113c-29.287 0-53.064-23.777-53.064-53.063 0-29.287 23.777-53.064 53.064-53.064z",fill:"#7faff7"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"1265.932",cy:"335.393",r:"45.26",fill:"#EBEBEB"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"1265.932",cy:"335.393",r:"45.26",fill:"#EBEBEB"}}),r("path",{attrs:{d:"M740.604 839.496h431.063c10.25 0 18.572 8.322 18.572 18.572v72.104c0 10.25-8.322 18.572-18.572 18.572H740.604c-10.25 0-18.572-8.322-18.572-18.572v-72.104c0-10.25 8.322-18.572 18.572-18.572z",fill:"#ebebeb"}}),r("path",{attrs:{d:"M740.604 839.496h431.063c10.25 0 18.572 8.322 18.572 18.572v72.104c0 10.25-8.322 18.572-18.572 18.572H740.604c-10.25 0-18.572-8.322-18.572-18.572v-72.104c0-10.25 8.322-18.572 18.572-18.572zM740.604 1027.949h431.063c10.25 0 18.572 8.322 18.572 18.572v72.104c0 10.25-8.322 18.572-18.572 18.572H740.604c-10.25 0-18.572-8.322-18.572-18.572v-72.104c0-10.25 8.322-18.572 18.572-18.572z",fill:"#ebebeb"}}),r("path",{attrs:{d:"M740.604 1027.949h431.063c10.25 0 18.572 8.322 18.572 18.572v72.104c0 10.25-8.322 18.572-18.572 18.572H740.604c-10.25 0-18.572-8.322-18.572-18.572v-72.104c0-10.25 8.322-18.572 18.572-18.572z",fill:"#ebebeb"}})],1)])},Q=[],X={},Y=Object(f["a"])(X,R,Q,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000",width:"1000",height:"1000"}},t.$listeners),[r("defs",[r("clipPath",{attrs:{id:"blueprint_svg__a"}},[r("path",{attrs:{d:"M0 0h1000v1000H0z"}})])]),r("g",{attrs:{"clip-path":"url(#blueprint_svg__a)",stroke:"#FFF","stroke-linecap":"square","stroke-miterlimit":"3"}},[r("path",{attrs:{"vector-effect":"non-scaling-stroke","stroke-width":"4",d:"M0 192h1000M818 10v1000M0 560h1000M450 10v1000M0 192h1000M818 10v1000M0 560h1000M450 10v1000M0 372h1000M638 10v1000M0 740h1000M270 10v1000M0 292h1000M718 10v1000M0 660h1000M350 10v1000M0 472h1000M538 10v1000M0 840h1000M170 10v1000M0 928h1000M82 10v1000M0 92h1000M918 10v1000"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"123",cy:"192",r:"73",fill:"none","stroke-width":"3"}})])])},et=[],rt={},at=Object(f["a"])(rt,tt,et,!1,null,null,null),st=at.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row row-center"},[r("div",{staticClass:"col-md-4"},[r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://linkedin.com/in/leevi-kopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)]),r("div",{staticClass:"col-md-4"},[r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://linkedin.com/in/leevi-kopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)]),r("div",{staticClass:"col-md-4"},[r("a",{staticClass:"social-icon",attrs:{rel:"noopener",href:"https://linkedin.com/in/leevi-kopakkala",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])},ct=[],ot={name:"Topics"},nt=ot,it=(r("014b"),Object(f["a"])(nt,lt,ct,!1,null,"56366b06",null)),ft=it.exports,vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1824 1568",width:"1824",height:"1568"}},t.$listeners),[r("defs",[r("clipPath",{attrs:{id:"purespace_svg__a"}},[r("path",{attrs:{d:"M0 0h1824v1568H0z"}})])]),r("g",{attrs:{"clip-path":"url(#purespace_svg__a)"}},[r("linearGradient",{attrs:{id:"purespace_svg__b",x1:"0",y1:".5",x2:"1",y2:".5",gradientTransform:"matrix(1540.021 0 0 1522.564 57 45.503)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0%","stop-color":"#0e0033"}}),r("stop",{attrs:{offset:"98.261%","stop-color":"#3b0013"}})],1),r("path",{attrs:{d:"M468.324 349.784C228.327 438.232 57 669.077 57 939.621c0 346.849 281.597 628.447 628.446 628.447 257.523 0 479.075-155.231 576.122-377.14 198.76-98.989 335.453-304.266 335.453-541.217 0-333.471-270.736-604.208-604.207-604.208-224.342 0-420.291 122.533-524.49 304.281z","fill-rule":"evenodd",fill:"url(#purespace_svg__b)"}}),r("g",{staticStyle:{isolation:"isolate"}},[r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"1201",cy:"1002",r:"1",fill:"#07040F"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"324",cy:"1002",r:"1",fill:"#FFF"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"701",cy:"1101",r:"1",fill:"#FFF"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"401",cy:"1002",r:"1",fill:"#FFF"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"324",cy:"1201",r:"1",fill:"#FFF"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"287",cy:"975.416",r:"1",fill:"#FFF"}})]),r("g",{staticStyle:{isolation:"isolate"},attrs:{fill:"#FFF"}},[r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"1493",cy:"371.584",r:"1"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"616",cy:"371.584",r:"1"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"993",cy:"470.584",r:"1"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"693",cy:"371.584",r:"1"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"616",cy:"570.584",r:"1"}}),r("circle",{attrs:{"vector-effect":"non-scaling-stroke",cx:"579",cy:"345",r:"1"}})]),r("g",{staticStyle:{isolation:"isolate"},attrs:{fill:"#FFF"}},[r("path",{attrs:{d:"M154.156 1198.078a1 1 0 1 1-1.99-.214 1 1 0 0 1 1.99.214zM1026.195 1291.226a1 1 0 1 1 0 0zM661.843 1152.744a1 1 0 1 1-1.99-.214 1 1 0 0 1 1.99.214zM949.631 1283.048a1 1 0 1 1-1.99-.214 1 1 0 0 1 1.99.214zM1047.332 1093.352a1 1 0 1 1-1.99-.214 1 1 0 0 1 1.99.214zM1060.162 1321.59a.999.999 0 1 1-1.987-.21.999.999 0 0 1 1.987.21z"}})])],1)])},pt=[],ht={},dt=Object(f["a"])(ht,vt,pt,!1,null,null,null),ut=dt.exports,_t={name:"Main",props:{mainHeader:String},components:{Browser:b,Welcome:W,PhoneSVG:D,Topics:ft,LaunchSVG:Z,TechPill:F,BlueprintSVG:st,SpaceSVG:ut},methods:{scrollTo:function(t){location.href="#contact"}}},mt=_t,gt=(r("051a"),Object(f["a"])(mt,h,d,!1,null,"85b5230a",null)),kt=gt.exports,bt={name:"app",components:{HelloWorld:p,Main:kt}},yt=bt,xt=(r("034f"),Object(f["a"])(yt,s,l,!1,null,null,null)),wt=xt.exports,Ct=r("8c4f"),Mt=r("4c95"),St=r.n(Mt),zt=r("ecee"),jt=r("f2d1"),Tt=r("c074"),Et=r("ad3d");r("4989"),r("ab8b");a["a"].use(Ct["a"]),a["a"].use(St.a,{class:"v-scroll-reveal",duration:1200,scale:1,distance:"10px",mobile:!1}),zt["c"].add(Tt["b"],jt["c"],jt["a"],jt["b"],jt["d"],Tt["a"]),a["a"].component("font-awesome-icon",Et["a"]),a["a"].config.productionTip=!1;var Ht=[{path:"/",component:p},{path:"/test",component:p}],Vt=new Ct["a"]({routes:Ht});new a["a"]({router:Vt,render:function(t){return t(wt)}}).$mount("#app")},5963:function(t,e,r){},"64a9":function(t,e,r){},"94cf":function(t,e,r){"use strict";var a=r("361e"),s=r.n(a);s.a},d80a:function(t,e,r){},dd91:function(t,e,r){"use strict";var a=r("2208"),s=r.n(a);s.a},e255:function(t,e,r){"use strict";var a=r("28fc"),s=r.n(a);s.a},e738:function(t,e,r){},f158:function(t,e,r){"use strict";var a=r("5963"),s=r.n(a);s.a}});
//# sourceMappingURL=app.230750ec.js.map