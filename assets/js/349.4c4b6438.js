(self.webpackChunkpistache_io=self.webpackChunkpistache_io||[]).push([[349],{8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return r.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,a.Z)(e,o);return l.createElement("svg",(0,r.Z)({className:s,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},u),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},9349:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ie}});var r=n(7294),a=n(6010),l=n(4973),o=n(9732),c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null);return(0,o.ru)((function(){e.current&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:(0,a.Z)(c,"shadow--md"),onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(944),m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,u.Z)(),n=t.isAnnouncementBarClosed,c=t.closeAnnouncementBar,i=(0,o.LU)().announcementBar;if(!i)return null;var s=i.content,h=i.backgroundColor,g=i.textColor,b=i.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:h,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:c,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(2122),b=function(){return null},E=n(2263),p={toggle:"toggle_71bT"},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(p.toggle,p.dark),style:n},t)},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(p.toggle,p.light),style:n},t)},_=(0,r.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,r.useState)(l),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function y(e){var t=(0,o.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,l=t.lightIcon,c=t.lightIconStyle,i=(0,E.Z)().isClient;return r.createElement(_,(0,g.Z)({disabled:!i,icons:{checked:r.createElement(Z,{icon:n,style:a}),unchecked:r.createElement(k,{icon:l,style:c})}},e))}var N=n(5350),w=n(5977),C=n(7898),I=function(e){var t=(0,w.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)l(!0);else{if(c.current)return c.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?l(!1):r+i<o&&l(!0)}}),[s,c]),(0,o.ru)((function(){e&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},L=n(1839),A=n(3783),B=n(9756),T=n(5525),D=["width","height"],S=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,l=void 0===a?20:a,o=(0,B.Z)(e,D);return r.createElement("svg",(0,g.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},o),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},x=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function U(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,l=(0,B.Z)(e,x),c=(0,E.Z)().i18n,i=c.currentLocale,s=c.locales,u=c.localeConfigs,m=(0,o.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(i);return r.createElement(T.Z,(0,g.Z)({},l,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(S,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}function M(e){return e.mobile?null:r.createElement(b,null)}var H=["type"],P={default:function(){return T.Z},localeDropdown:function(){return U},search:function(){return M},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function R(e){var t=e.type,n=(0,B.Z)(e,H),a=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return r.createElement(a,n)}var W=n(5537),V=n(4478),z="displayOnlyInLargeViewport_GrZ2",O="navbarHideable_2qcr",j="navbarHidden_3yey",G="right";var q=function(){var e,t=(0,o.LU)(),n=t.navbar,l=n.items,c=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,N.Z)(),v=f.isDarkTheme,h=f.setLightTheme,E=f.setDarkTheme,p=I(c),Z=p.navbarRef,k=p.isNavbarVisible;(0,L.Z)(m);var _=(0,r.useCallback)((function(){d(!0)}),[d]),w=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?E():h()}),[h,E]),B=(0,A.Z)();(0,r.useEffect)((function(){B===A.D.desktop&&d(!1)}),[B]);var T=l.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:G)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:G)}))}}(l),S=D.leftItems,x=D.rightItems;return r.createElement("nav",{ref:Z,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[O]=c,e[j]=c&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:_,onKeyDown:_},r.createElement(V.Z,null)),r.createElement(W.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),S.map((function(e,t){return r.createElement(R,(0,g.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.createElement(R,(0,g.Z)({},e,{key:t}))})),!s&&r.createElement(y,{className:z,checked:v,onChange:C}),!T&&r.createElement(b,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(W.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:w}),!s&&m&&r.createElement(y,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement(R,(0,g.Z)({mobile:!0},e,{onClick:w,key:t}))})))))))},F=n(6742),J=n(4996),K="footerLogoLink_MyFc",Q=n(8465),Y=["to","href","label","prependBaseUrlToHref"];function X(e){var t=e.to,n=e.href,a=e.label,l=e.prependBaseUrlToHref,o=(0,B.Z)(e,Y),c=(0,J.Z)(t),i=(0,J.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(F.Z,(0,g.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),a)}var $=function(e){var t=e.sources,n=e.alt;return r.createElement(Q.Z,{className:"footer__logo",alt:n,sources:t})};var ee=function(){var e=(0,o.LU)().footer,t=e||{},n=t.copyright,l=t.links,c=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,J.Z)(s.src),dark:(0,J.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},c&&c.length>0&&r.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(X,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(F.Z,{href:s.href,className:K},r.createElement($,{alt:s.alt,sources:u})):r.createElement($,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},te=n(412),ne=(0,o.WA)("theme"),re="light",ae="dark",le=function(e){return e===ae?ae:re},oe=function(e){(0,o.WA)("theme").set(le(e))},ce=function(){var e=(0,o.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return te.Z.canUseDOM?le(document.documentElement.getAttribute("data-theme")):le(e)}(t)),c=l[0],i=l[1],s=(0,r.useCallback)((function(){i(re),oe(re)}),[]),u=(0,r.useCallback)((function(){i(ae),oe(ae)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",le(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=ne.get();null!==e&&i(le(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?ae:re)}))}),[]),{isDarkTheme:c===ae,setLightTheme:s,setDarkTheme:u}},ie=n(2924);var se=function(e){var t=ce(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(ie.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)};function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var de="docusaurus.tab.",fe=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,o.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=me((0,o._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(de))t[a.substring(de.length)]=(0,o.WA)(a).get()}n(t)}catch(l){console.error(l)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},ve=(0,o.WA)("docusaurus.announcement.dismiss"),he=(0,o.WA)("docusaurus.announcement.id"),ge=function(){var e=(0,o.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],l=(0,r.useCallback)((function(){ve.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=he.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;he.set(t),r&&ve.set("false"),(r||"false"===ve.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:l}},be=n(9443);var Ee=function(e){var t=fe(),n=t.tabGroupChoices,a=t.setTabGroupChoices,l=ge(),o=l.isAnnouncementBarClosed,c=l.closeAnnouncementBar;return r.createElement(be.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:c}},e.children)};function pe(e){var t=e.children;return r.createElement(se,null,r.createElement(Ee,null,r.createElement(o.L5,null,t)))}var Ze=n(9105);function ke(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(Ze.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var _e=n(1217);function ye(){var e=(0,E.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,o.l5)();return r.createElement(Ze.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ne(e){var t=e.permalink,n=(0,E.Z)().siteConfig.url,a=function(){var e=(0,E.Z)().siteConfig.url,t=(0,w.TH)().pathname;return e+(0,J.Z)(t)}(),l=t?""+n+t:a;return r.createElement(Ze.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function we(e){var t=(0,E.Z)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig,c=l.metadatas,i=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,p=(0,J.Z)(a),Z=(0,o.pe)(d),k=u,_=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(Ze.Z,null,r.createElement("html",{lang:k,dir:_}),a&&r.createElement("link",{rel:"shortcut icon",href:p}),r.createElement("title",null,Z),r.createElement("meta",{property:"og:title",content:Z}),v||i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(_e.Z,{description:f,keywords:h,image:v}),r.createElement(Ne,null),r.createElement(ye,null),r.createElement(ke,(0,g.Z)({tag:o.HX,locale:u},b)),r.createElement(Ze.Z,null,c.map((function(e,t){return r.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var Ce=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ie=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,c=e.pageClassName;return Ce(),r.createElement(pe,null,r.createElement(we,e),r.createElement(s,null),r.createElement(h,null),r.createElement(q,null),r.createElement("div",{className:(0,a.Z)(o.kM.wrapper.main,l,c)},t),!n&&r.createElement(ee,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,b=e.imageClassName,E=e.titleClassName,p=(0,a.Z)(e,u),Z=(0,i.Z)(h.href||"/"),k={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)};return l.createElement(o.Z,(0,r.Z)({to:Z},p,h.target&&{target:h.target}),h.src&&l.createElement(c.Z,{key:g,className:b,sources:k,alt:h.alt||f||m}),null!=f&&l.createElement("b",{className:E},f))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(9732),m=n(8617),d=n(3919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],b=["className"],E=["mobile"],p="dropdown__link--active";function Z(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,f),E=(0,i.Z)(o),Z=(0,i.Z)(t),k=(0,i.Z)(s,{forcePrependBaseUrl:!0}),_=u&&s&&!(0,d.Z)(s),y=h===p;return l.createElement(c.Z,(0,r.Z)({},s?{href:g?k:s}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(Z)}}:null),b),_?l.createElement("span",null,u,l.createElement(m.Z,y&&{width:12,height:12})):u)}function k(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,v),u=(0,l.useRef)(null),m=(0,l.useRef)(null),d=(0,l.useState)(!1),f=d[0],g=d[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":f})},l.createElement(Z,(0,r.Z)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,a.Z)(e,h);return l.createElement("li",{key:t},l.createElement(Z,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:p,className:b(o,!0)},c)))})))):l.createElement(Z,(0,r.Z)({className:b(i)},s))}function _(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,g)),f=(0,l.useRef)(null),v=(0,s.TH)().pathname,h=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,v)}))))||e})),E=h[0],p=h[1],k=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(Z,(0,r.Z)({className:k(m)},d)));var _=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":E})},l.createElement(Z,(0,r.Z)({role:"button",className:k(m,!0)},d,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:_}},i.map((function(e,t){var n=e.className,o=(0,a.Z)(e,b);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(Z,(0,r.Z)({activeClassName:"menu__link--active",className:k(n)},o,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,E),o=n?_:k;return l.createElement(o,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(9732),u=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),g=(0,c.Iw)(v),b=g.activeVersion,E=g.activeDoc,p=(0,s.J)(v).preferredVersion,Z=(0,c.yW)(v),k=function(e,t){var n,r=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),a=r.find((function(e){return e.id===t}));if(!a){var l=r.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+l)}return a}((0,u.uniq)([b,p,Z].filter(Boolean)),n);return l.createElement(o.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[d]=E&&E.sidebar===k.sidebar,t)),label:null!=f?f:k.id,to:k.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(9732),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,s),b=(0,c.Iw)(d),E=(0,c.gB)(d),p=(0,c.yW)(d),Z=(0,i.J)(d),k=Z.preferredVersion,_=Z.savePreferredVersionName;var y=function(){var e=E.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){_(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),N=null!=(t=null!=(n=b.activeVersion)?n:k)?t:p,w=m&&y?"Versions":N.label,C=m&&y?void 0:u(N).path;return l.createElement(o.Z,(0,r.Z)({},g,{mobile:m,label:w,to:C,items:y,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(9732),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,r.Z)({},d,{label:b,to:E}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(2263),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(7294),a=n(412),l={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,r.useState)(t),o=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}}}]);