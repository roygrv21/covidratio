_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),o=n("a3WO");var a=n("BsWD");function i(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("rePB"),s=n("q1tI"),u=n.n(s),p=n("0/uQ"),f=n("F/XL"),l=n("psW0"),d=n("VnD/"),b=n("67Y/"),O=n("9Z1F"),j=n("Qgas"),y=n("P3C+"),g=n("m6qE"),w=n("FgO3"),v=n("ddFw"),m=(n("H/sG"),u.a.createElement);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={languages:[],messages:{en:v}},E="LANGUAGES_ADD";function D(e,t){switch(t.type){case E:return P(P({},e),{},{messages:P(P({},e.messages),t.payload.messages),languages:t.payload.languages});default:throw new Error("Invalid Action")}}function $(e){return e.pipe(Object(l.a)((function(e){var t=i(e.reduce((function(e,t){if(e.add(t.toLowerCase()),t.includes("-")){var n=t.split("-"),o=Object(r.a)(n,1)[0];e.add(o.toLowerCase())}return e}),new Set));return Object(p.a)(t).pipe(Object(d.a)((function(e){return"en"!==e})),Object(l.a)((function(e){return Object(p.a)(n("T+V2")("./".concat(e,".json"))).pipe(Object(b.a)((function(t){var n=t.default;return Object(c.a)({},e,n)})),Object(O.a)((function(){return Object(f.a)(Object(c.a)({},e,{}))})))})),Object(j.a)((function(e,t){return P(P({},e),t)}),{}),Object(b.a)((function(e){return{type:E,payload:{messages:e,languages:t}}})))})))}t.default=function(e){var t=e.Component,n=e.pageProps,o=Object(s.useReducer)(D,_),a=o[0],i=o[1],c=Object(g.a)($,i);Object(s.useEffect)((function(){c.next(window.navigator.languages)}),[c]);var u=Object(r.a)(a.languages,1)[0];return m(y.IntlProvider,{locale:u||"",messages:a.messages},m(w.a.Provider,{value:[a,i]},m(t,n)))}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"H/sG":function(e,t,n){},"T+V2":function(e,t,n){var r={"./en.json":["ddFw"],"./qqq.json":["OW6Y",12]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id="T+V2",e.exports=o},ddFw:function(e){e.exports=JSON.parse('{"title":"COVID Ratio","result":"Approximately 1 in $1 people in $2 have COVID-19 as of $3","explanation":"Ratio is calculated by taking the total population of $1 ($2) and dividing it by the number of confirmed cases in $1 reported over the previous 14 days ($3). $4 has published a $5 explaining how to calculate the ratio yourself.","video":"video","source":"Data is provided by $1. The $2 is available for any use without permission under the terms of the $3.","source-code":"source code","license":"$1 license"}')}},[[0,0,1,2,3,4]]]);