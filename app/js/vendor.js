function polyfill(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=f(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==t.body?(m.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function a(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function u(e){var t=d(e,"Y")&&a(e,"Y"),o=d(e,"X")&&a(e,"X");return t||o}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function v(t){var o,n,l,r,s=(i()-t.startTime)/468;r=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*r)),n=t.startX+(t.x-t.startX)*o,l=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(v.bind(e,t))}function m(o,n,r){var c,d,a,u,f=i();o===t.body?(c=e,d=e.scrollX||e.pageXOffset,a=e.scrollY||e.pageYOffset,u=l.scroll):(c=o,d=o.scrollLeft,a=o.scrollTop,u=s),v({scrollable:c,method:u,startTime:f,startX:d,startY:a,x:n,y:r})}}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,(function(){"use strict";function e(e){var t=!0,o=!1,n=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function c(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(i(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(o&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var o,n,s;i(e.target)&&(t||(n=(o=e.target).type,"INPUT"===(s=o.tagName)&&l[n]&&!o.readOnly||"TEXTAREA"===s&&!o.readOnly||o.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout((function(){o=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)})),"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();