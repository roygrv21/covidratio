_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"5hti":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("P3C+"),i=n("FgO3"),u=o.a.createElement;t.a=function(e){var t=e.id,n=e.placeholders,o=Object(r.useContext)(i.a)[0];return Object(r.useMemo)((function(){return 0===o.languages.length?null:u(a.Message,{id:t,placeholders:n})}),[o.languages,t,n])}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=n("P3C+"),c=n("FgO3");var s=function(){var e=Object(r.useContext)(c.a)[0],t=Object(r.useContext)(u.BananaContext);return Object(r.useCallback)((function(n){if(0===e.languages.length)return"";for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return t.i18n.apply(t,[n].concat(o))}),[e.languages,t])},l=o.a.createElement;t.a=function(e){var t=e.children,n=s();return l(o.a.Fragment,null,l(i.a,null,l("title",null,n("title")),l("meta",{charSet:"utf-8"}),l("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})),l("div",{className:"container min-vh-100"},t))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){u(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,p&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lkTz:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return A}));var r=n("ODXe"),o=n("rePB"),a=n("q1tI"),i=n.n(a),u=n("ExVU"),c=n("G5J1"),s=n("mrSG"),l=n("67Y/"),f=n("0/uQ"),p=n("z4bA");var d=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t.subscribe(new h(e,this.project))},e}(),h=function(e){function t(t,n){var r=e.call(this,t)||this;return r.project=n,r.index=0,r}return s.b(t,e),t.prototype._next=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t)},t.prototype._innerSub=function(e){var t=this.innerSubscription;t&&t.unsubscribe();var n=new p.a(this),r=this.destination;r.add(n),this.innerSubscription=Object(p.c)(e,n),this.innerSubscription!==n&&r.add(this.innerSubscription)},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||e.prototype._complete.call(this),this.unsubscribe()},t.prototype._unsubscribe=function(){this.innerSubscription=void 0},t.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&e.prototype._complete.call(this)},t.prototype.notifyNext=function(e){this.destination.next(e)},t}(p.b),m=n("psW0"),v=n("6blF"),b=n("pugT");function y(e,t){void 0===t&&(t={});var n=t.selector,r=s.c(t,["selector"]);return new v.a((function(t){var o,a=new AbortController,i=a.signal,u=!0,c=!1,l=new b.a;if(l.add((function(){c=!0,u&&a.abort()})),r){if(r.signal)if(r.signal.aborted)a.abort();else{var p=r.signal,d=function(){i.aborted||a.abort()};p.addEventListener("abort",d),l.add((function(){return p.removeEventListener("abort",d)}))}o=s.a({},r,{signal:i})}else o={signal:i};return fetch(e,o).then((function(e){n?l.add(Object(f.a)(n(e)).subscribe((function(e){return t.next(e)}),(function(e){u=!1,c||t.error(e)}),(function(){u=!1,t.complete()}))):(u=!1,t.next(e),t.complete())})).catch((function(e){u=!1,c||t.error(e)})),l}))}var g=n("m6qE"),O=n("wah9"),w=n.n(O),_=n("CafY"),x=n("5hti"),j=i.a.createElement;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M="CASE_COUNT",P={caseCount:null,datetime:null};function E(e,t){switch(t.type){case M:return C(C({},e),{},{caseCount:t.payload.count,datetime:t.payload.datetime});default:throw new Error("Invalid Action")}}var A=!0;t.default=function(e){var t=e.label,n=e.name,o=e.pop,i=e.adminSlug,s=Object(a.useReducer)(E,P),p=s[0],h=s[1],v=Object(a.useMemo)((function(){return w.a.find((function(e){return e.slug===i}))||{}}),[i]).name;Object(g.a)((function(e){return e.pipe(function e(t,n){return"function"===typeof n?function(r){return r.pipe(e((function(e,r){return Object(f.a)(t(e,r)).pipe(Object(l.a)((function(t,o){return n(e,t,r,o)})))})))}:function(e){return e.lift(new d(t))}}((function(e){var t=Object(r.a)(e,1)[0],n=new URL("https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Case_Line_Data_NEW/FeatureServer/0/query");return n.searchParams.append("where","1=1"),n.searchParams.append("outFields","EventDate"),n.searchParams.append("f","json"),n.searchParams.append("orderByFields","EventDate DESC"),y(n).pipe(Object(m.a)((function(e){return e.json()})),Object(m.a)((function(e){var n,r=e.features,o=null===r||void 0===r?void 0:null===(n=r[0])||void 0===n?void 0:n.attributes.EventDate;if(!o)return c.a;var a=u.DateTime.fromMillis(o).endOf("day"),i=a.minus({days:14}).startOf("day"),s="yyyy-MM-dd HH:mm:ss",f="County = '".concat(t,"' AND EventDate >= TIMESTAMP '").concat(i.toFormat(s),"' AND EventDate <= TIMESTAMP '").concat(a.toFormat(s),"'"),p=new URL("https://services1.arcgis.com/CY1LXxl9zlJeBuRZ/arcgis/rest/services/Florida_COVID19_Case_Line_Data_NEW/FeatureServer/0/query");return p.searchParams.append("where",f),p.searchParams.append("returnCountOnly","true"),p.searchParams.append("f","json"),y(p).pipe(Object(m.a)((function(e){return e.json()})),Object(l.a)((function(e){var t=e.count;return{type:M,payload:{datetime:u.DateTime.fromMillis(o).toISO(),count:parseInt(t,10)}}})))})))})))}),h,[n]);var b=null;p.caseCount&&(b=Math.round(o/p.caseCount).toLocaleString());var O=null;return p.datetime&&(O=u.DateTime.fromISO(p.datetime).toLocaleString(u.DateTime.DATETIME_SHORT)),j(_.a,null,j("div",{className:"row min-vh-100"},j("div",{className:"col d-flex flex-column"},j("h1",{className:"mt-2"},t,j("span",null," "),j("small",null,v)),j("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},j("p",{className:"result text-center"},j(x.a,{id:"result",placeholders:[j("div",null,j("strong",{className:"ratio"},b)),j("em",null,t),j("strong",null,O)]}))))))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},wah9:function(e,t){e.exports=[{name:"Florida",slug:"florida",id:812,fips:12}]},xVBV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[admin]/[slug]",function(){return n("lkTz")}])}},[["xVBV",0,1,5,3,4]]]);