(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,n){e.exports=n(106)()},106:function(e,t,n){"use strict";var r=n(107);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},107:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},108:function(e,t,n){(function(n){var r,o,a;"undefined"!=typeof window&&window,o=[],void 0===(a="function"==typeof(r=function(){var e=function(t,n){"use strict";var r=Object.create(e.prototype),o=0,a=0,i=0,c=0,l=[],s=!0,p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},u=null,m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();r.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(e){r.options[e]=n[e]}),t||(t=".rellax");var d="string"==typeof t?document.querySelectorAll(t):[t];if(d.length>0){if(r.elems=d,r.options.wrapper&&!r.options.wrapper.nodeType){var y=document.querySelector(r.options.wrapper);if(!y)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");r.options.wrapper=y}var b=function(){for(var e=0;e<l.length;e++)r.elems[e].style.cssText=l[e].style;l=[],a=window.innerHeight,c=window.innerWidth,h(),function(){for(var e=0;e<r.elems.length;e++){var t=g(r.elems[e]);l.push(t)}}(),v(),s&&(window.addEventListener("resize",b),s=!1,w())},g=function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),o=e.getAttribute("data-rellax-zindex")||0,i=e.getAttribute("data-rellax-min"),l=e.getAttribute("data-rellax-max"),s=r.options.wrapper?r.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(r.options.relativeToWrapper){var p=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;s=p-r.options.wrapper.offsetTop}var u=r.options.vertical&&(t||r.options.center)?s:0,m=r.options.horizontal&&(t||r.options.center)?r.options.wrapper?r.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,f=u+e.getBoundingClientRect().top,d=e.clientHeight||e.offsetHeight||e.scrollHeight,y=m+e.getBoundingClientRect().left,b=e.clientWidth||e.offsetWidth||e.scrollWidth,g=t||(u-f+a)/(d+a),h=t||(m-y+c)/(b+c);r.options.center&&(h=.5,g=.5);var w=n||r.options.speed,v=x(h,g,w),O=e.style.cssText,E="",k=/transform\s*:/i.exec(O);if(k){var j=k.index,_=O.slice(j),S=_.indexOf(";");E=S?" "+_.slice(11,S).replace(/\s/g,""):" "+_.slice(11).replace(/\s/g,"")}return{baseX:v.x,baseY:v.y,top:f,left:y,height:d,width:b,speed:w,style:O,transform:E,zindex:o,min:i,max:l}},h=function(){var e=o,t=i;if(o=r.options.wrapper?r.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,i=r.options.wrapper?r.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,r.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;o=n-r.options.wrapper.offsetTop}return!(e==o||!r.options.vertical)||!(t==i||!r.options.horizontal)},x=function(e,t,n){var o={},a=n*(100*(1-e)),i=n*(100*(1-t));return o.x=r.options.round?Math.round(a):Math.round(100*a)/100,o.y=r.options.round?Math.round(i):Math.round(100*i)/100,o},w=function(){h()&&!1===s&&v(),u=p(w)},v=function(){for(var e,t=0;t<r.elems.length;t++){var n=(o-l[t].top+a)/(l[t].height+a),s=(i-l[t].left+c)/(l[t].width+c),p=(e=x(s,n,l[t].speed)).y-l[t].baseY,u=e.x-l[t].baseX;null!==l[t].min&&(r.options.vertical&&!r.options.horizontal&&(p=p<=l[t].min?l[t].min:p),r.options.horizontal&&!r.options.vertical&&(u=u<=l[t].min?l[t].min:u)),null!==l[t].max&&(r.options.vertical&&!r.options.horizontal&&(p=p>=l[t].max?l[t].max:p),r.options.horizontal&&!r.options.vertical&&(u=u>=l[t].max?l[t].max:u));var m=l[t].zindex,d="translate3d("+(r.options.horizontal?u:"0")+"px,"+(r.options.vertical?p:"0")+"px,"+m+"px) "+l[t].transform;r.elems[t].style[f]=d}r.options.callback(e)};return r.destroy=function(){for(var e=0;e<r.elems.length;e++)r.elems[e].style.cssText=l[e].style;s||(window.removeEventListener("resize",b),s=!0),m(u),u=null},b(),r.refresh=b,r}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?r.apply(t,o):r)||(e.exports=a)}).call(this,n(45))},22:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(1);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.a=function(e){var t=e.uri,n=e.title,r=e.width,a=e.margin,p=e.mStyle,u=void 0===p?"":p,m=e.sStyle,f=void 0===m?"":m,d=s(e,["uri","title","width","margin","mStyle","sStyle"]);return i.a.createElement("a",l({href:t},d,{className:o.a.dynamic([["1136576986",[r||"100%",a?"margin: ".concat(a,";"):"",c.d.primaryColor,c.d.darkLight,u,f]]])+" "+(null!=d.className&&d.className||"")}),n,i.a.createElement(o.a,{styleId:"1136576986",css:["a.__jsx-style-dynamic-selector{width:".concat(r||"100%",";text-align:center;border-radius:28px;border:solid 1px #90cfbe;padding:17px 20px 15px;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-weight:600;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#90cfbe;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;").concat(a?"margin: ".concat(a,";"):"",";}"),"a.__jsx-style-dynamic-selector:hover{background-color:".concat(c.d.primaryColor,";color:").concat(c.d.darkLight,";}"),"@media only screen and (max-width:1024px){a.__jsx-style-dynamic-selector{".concat(u,";}}"),"@media only screen and (max-width:554px){a.__jsx-style-dynamic-selector{".concat(f,";}}")],dynamic:[r||"100%",a?"margin: ".concat(a,";"):"",c.d.primaryColor,c.d.darkLight,u,f]}))}},39:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(57),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){return o.a.createElement("div",null,e.children)},d=function(e){function t(){var e,n,r,o,a,l,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return r=this,n=!(o=(e=p(t)).call.apply(e,[this].concat(f)))||"object"!==c(o)&&"function"!=typeof o?m(r):o,a=m(m(n)),l="state",s={Comp:i.a},l in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){window.screen.width<768&&this.setState({Comp:f})}},{key:"render",value:function(){var e=this.state.Comp,t=this.props,n=t.children,r=l(t,["children"]);return o.a.createElement(e,r,n)}}])&&s(n.prototype,r),a&&s(n,a),t}();t.a=d},548:function(e,t,n){__NEXT_REGISTER_PAGE("/token",function(){return e.exports=n(563),{page:e.exports.default}})},563:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),a=n(0),i=n.n(a),c=n(23),l=n(40),s=n(2),p=n.n(s),u=n(11),m=n.n(u),f=n(6),d=n(5),y=n(7),b=n(8),g=n(9),h=n(1),x=n(4),w=Object(x.c)("token")(function(e){var t=e.t;return i.a.createElement(f.a,{bgColor:h.d.darkLight,color:h.d.primaryColor,padding:"80px 0 70px"},i.a.createElement(d.a,{direction:"row"},i.a.createElement(g.a,{flex:!0,style:"margin: 0 108px 0 0;",mStyle:"margin: 0 0 92px; align-items: center;"},i.a.createElement("img",{src:"/static/img-token-vision.svg",className:"jsx-3182040618"})),i.a.createElement(g.a,{flex:!0,style:"justify-content: center;"},i.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp"},i.a.createElement(y.a,{margin:"0 0 30px;",mStyle:"margin: 0 0 15px;"},t("token.title"))),i.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},i.a.createElement(b.a,{mStyle:"text-align: left;",sStyle:"text-algin: left;"},t("token.description"))))),i.a.createElement(p.a,{styleId:"3182040618",css:["img.jsx-3182040618{width:100%;max-width:446px;}","@media only screen and (max-width:1024px){}","@media only screen and (max-width:554px){}"]}))}),v=n(13),O=n(39),E=Object(x.c)("token")(function(e){var t=e.t;return i.a.createElement(f.a,{bgColor:h.d.dark,color:h.d.primaryColor,padding:"120px"},i.a.createElement(O.a,{percentage:.5,speed:-13},i.a.createElement(d.a,null,i.a.createElement(y.a,{center:!0,margin:"0 0 49px",mStyle:"margin: 0 0 60px;"},t("token.usecase")),i.a.createElement("img",{src:"/static/img-use-case.svg",className:"jsx-1058473613"}),i.a.createElement(v.a,{center:!0,margin:"0 0 30px;"},t("token.b2b")),i.a.createElement(b.a,{center:!0,margin:"0 0 30px;"},t("token.b2b.description")),i.a.createElement(v.a,{center:!0,margin:"0 0 30px;"},t("token.c2b2b")),i.a.createElement(b.a,{center:!0},t("token.c2b2b.description")))),i.a.createElement(p.a,{styleId:"1058473613",css:["img.jsx-1058473613{margin-bottom:65px;width:100%;}"]}))}),k=Object(x.c)("token")(function(e){var t=e.t;return i.a.createElement(f.a,{bgColor:h.d.darkLight,color:h.d.primaryColor,padding:"120px"},i.a.createElement(d.a,{direction:"row"},i.a.createElement(g.a,{flex:!0,style:"justify-content: center; align-items: center; display: none;",mStyle:"display: block; margin-bottom: 60px;"},i.a.createElement("img",{src:"/static/img-coins@2x.png",className:"jsx-3162327209"})),i.a.createElement(g.a,{style:"margin-right: 30px;",mStyle:"margin-right: 0; margin-bottom: 60px;"},i.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp"},i.a.createElement(y.a,{margin:"0 0 20px"},t("token.howwork"))),i.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},i.a.createElement(b.a,{margin:"0"},t("token.howwork.description")))),i.a.createElement(g.a,{flex:!0,style:"justify-content: center; align-items: center;",mStyle:"display: none;"},i.a.createElement("img",{src:"/static/img-coins@2x.png",className:"jsx-3162327209"}))),i.a.createElement(p.a,{styleId:"3162327209",css:["img.jsx-3162327209{width:100%;}"]}))}),j=n(22),_=Object(x.c)("token")(function(e){var t=e.t;return i.a.createElement(f.a,{bgColor:h.d.darkLight,color:h.d.primaryColor,padding:"120px"},i.a.createElement(d.a,{direction:"row"},i.a.createElement(g.a,{flex:!0,style:"margin-right: 30px;",mStyle:"margin-right: 0; margin-bottom: 60px; align-items: center;"},i.a.createElement("img",{src:"/static/img-community-bounty@2x.png",className:"jsx-1445847973"})),i.a.createElement(g.a,null,i.a.createElement(y.a,{margin:"0 0 60px"},t("token.getqqq")),i.a.createElement(v.a,{margin:"0 0 15px"},t("token.getqqq.exchanges")),i.a.createElement(b.a,{margin:"0 0 20px"},t("token.getqqq.exchanges.description")),i.a.createElement(j.a,{margin:"0 0 60px;",title:i.a.createElement("img",{style:{width:115,height:20},src:"/static/logo-bitforex@2x.png",className:"jsx-1445847973"}),uri:"https://www.bitforex.com/cn/trade/spotTrading?commodityCode=QQQ&currencyCode=USDT"}),i.a.createElement(v.a,{margin:"0 0 15px"},t("token.getqqq.community")),i.a.createElement(b.a,{margin:"0 0 60px"},t("token.getqqq.community.description")),i.a.createElement(j.a,{title:t("token.getqqq.community.link"),uri:"/community"}))),i.a.createElement(p.a,{styleId:"1445847973",css:["img.jsx-1445847973{max-width:541px;width:100%;margin-right:35px;}"]}))});function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,q(t).apply(this,arguments))}var n,r,a,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){return i.a.createElement(c.b,{title:"Poseidon Network | ".concat(this.props.t("token.html.title")),navColor:h.d.darkLight},i.a.createElement(w,null),i.a.createElement(E,null),i.a.createElement(k,null),i.a.createElement(_,null),i.a.createElement(l.a,null))}}],a=[{key:"getInitialProps",value:(s=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common","nav","footer","token"]});case 1:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=s.apply(e,t);function a(e){T(o,n,r,a,i,"next",e)}function i(e){T(o,n,r,a,i,"throw",e)}a(void 0)})},function(){return p.apply(this,arguments)})}],r&&P(n.prototype,r),a&&P(n,a),t}();t.default=Object(x.c)("token")(I)},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(105)),a=i(n(108));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,o,i;return n=t,(o=[{key:"componentDidMount",value:function(){if(this.el){var e=this.props,t=e.centered,n=e.horizontal,r=e.onMove,o=e.wrapper,i={};t&&(i.centered=!0),n&&(i.horizontal=!0),o&&(i.wrapper=o),"function"==typeof r&&(i.callback=r.bind(this)),this.rellax=new a.default(this.el,i)}}},{key:"componentWillUnmount",value:function(){this.rellax&&this.rellax.destroy()}},{key:"render",value:function(){var e=this,t=this.props,n=t.as,o=(t.centered,t.horizontal,t.onMove,t.percentage),a=t.speed,i=t.zIndex,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["as","centered","horizontal","onMove","percentage","speed","zIndex"]),s=n;return r.default.createElement(s,l({ref:function(t){e.el=t},"data-rellax-percentage":o,"data-rellax-speed":a,"data-rellax-zindex":i},c))}}])&&p(n.prototype,o),i&&p(n,i),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");s(e.prototype,t&&t.prototype),t&&s(e,t)}(t,e),t}(r.PureComponent);t.default=f,f.propTypes={as:o.default.string,centered:o.default.bool,horizontal:o.default.bool,onMove:o.default.func,percentage:o.default.number,speed:o.default.number,zIndex:o.default.number},f.defaultProps={as:"div"}}},[[548,1,0]]]);