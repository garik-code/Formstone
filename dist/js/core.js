/*! formstone v1.4.11 [core.js] 2019-02-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";function t(e,t,n,s){var i,r={raw:{}};s=s||{};for(i in s)s.hasOwnProperty(i)&&("classes"===e?(r.raw[s[i]]=t+"-"+s[i],r[s[i]]="."+t+"-"+s[i]):(r.raw[i]=s[i],r[i]=s[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(r.raw[i]=n[i].replace(/{ns}/g,t),r[i]=n[i].replace(/{ns}/g,"."+t)):(r.raw[i]=n[i].replace(/.{ns}/g,""),r[i]=n[i].replace(/{ns}/g,t)));return r}function n(){p.windowWidth=p.$window.width(),p.windowHeight=p.$window.height(),g=f.startTimer(g,y,s)}function s(){for(var e in p.ResizeHandlers)p.ResizeHandlers.hasOwnProperty(e)&&p.ResizeHandlers[e].callback.call(window,p.windowWidth,p.windowHeight)}function i(){if(p.support.raf){p.window.requestAnimationFrame(i);for(var e in p.RAFHandlers)p.RAFHandlers.hasOwnProperty(e)&&p.RAFHandlers[e].callback.call(window)}}function r(e,t){return parseInt(e.priority)-parseInt(t.priority)}var o,a,c,l="undefined"!=typeof window?window:this,u=l.document,d=function(){this.Version="@version",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=l,this.$window=e(l),this.document=u,this.$document=e(u),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},f={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(t){v[t]=!0,e.isEmptyObject(v)||b||(o.length?o.attr("content",c):o=e("head").append('<meta name="viewport" content="'+c+'">'),p.$body.on(m.gestureChange,f.killGesture).on(m.gestureStart,f.killGesture).on(m.gestureEnd,f.killGesture),b=!0)},unlockViewport:function(t){"undefined"!==e.type(v[t])&&delete v[t],e.isEmptyObject(v)&&b&&(o.length&&(a?o.attr("content",a):o.remove()),p.$body.off(m.gestureChange).off(m.gestureStart).off(m.gestureEnd),b=!1)},startTimer:function(e,t,n,s){return f.clearTimer(e),s?setInterval(n,t):setTimeout(n,t)},clearTimer:function(e,t){e&&(t?clearInterval(e):clearTimeout(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=p.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),s=0;s<n.length;s++){var i=n[s].split("=");t[i[0]]=i[1]}return t}},p=new d,h=e.Deferred(),w={base:"{ns}",element:"{ns}-element"},m={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},g=null,y=20,v=[],b=!1;return d.prototype.NoConflict=function(){p.DontConflict=!0;for(var t in p.Plugins)p.Plugins.hasOwnProperty(t)&&(e[t]=p.Conflicts[t],e.fn[t]=p.Conflicts.fn[t])},d.prototype.Ready=function(e){"complete"===p.document.readyState||"loading"!==p.document.readyState&&!p.document.documentElement.doScroll?e():p.document.addEventListener("DOMContentLoaded",e)},d.prototype.Plugin=function(n,s){return p.Plugins[n]=function(n,s){function i(t){var i,r,a,l="object"===e.type(t),u=Array.prototype.slice.call(arguments,l?1:0),d=this,f=e();for(t=e.extend(!0,{},s.defaults||{},l?t:{}),r=0,a=d.length;r<a;r++)if(i=d.eq(r),!o(i)){s.guid++;var p="__"+s.guid,h=s.classes.raw.base+p,w=i.data(n+"-options"),m=e.extend(!0,{$el:i,guid:p,numGuid:s.guid,rawGuid:h,dotGuid:"."+h},t,"object"===e.type(w)?w:{});i.addClass(s.classes.raw.element).data(c,m),s.methods._construct.apply(i,[m].concat(u)),f=f.add(i)}for(r=0,a=f.length;r<a;r++)i=f.eq(r),s.methods._postConstruct.apply(i,[o(i)]);return d}function o(e){return e.data(c)}var a="fs-"+n,c="fs"+n.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()});return s.initialized=!1,s.priority=s.priority||10,s.classes=t("classes",a,w,s.classes),s.events=t("events",n,m,s.events),s.functions=e.extend({getData:o,iterate:function(t){for(var n=this,s=Array.prototype.slice.call(arguments,1),i=0,r=n.length;i<r;i++){var a=n.eq(i),c=o(a)||{};"undefined"!==e.type(c.$el)&&t.apply(a,[c].concat(s))}return n}},f,s.functions),s.methods=e.extend(!0,{_construct:e.noop,_postConstruct:e.noop,_destruct:e.noop,_resize:!1,destroy:function(e){s.functions.iterate.apply(this,[s.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(s.classes.raw.element).removeData(c)}},s.methods),s.utilities=e.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(t){s.defaults=e.extend(!0,s.defaults,t||{})}},s.utilities),s.widget&&(p.Conflicts.fn[n]=e.fn[n],e.fn[c]=function(t){if(this instanceof e){var n=s.methods[t];if("object"===e.type(t)||!t)return i.apply(this,arguments);if(n&&0!==t.indexOf("_")){var r=[n].concat(Array.prototype.slice.call(arguments,1));return s.functions.iterate.apply(this,r)}return this}},p.DontConflict||(e.fn[n]=e.fn[c])),p.Conflicts[n]=e[n],e[c]=s.utilities._delegate||function(t){var n=s.utilities[t]||s.utilities._initialize||!1;if(n){var i=Array.prototype.slice.call(arguments,"object"===e.type(t)?0:1);return n.apply(window,i)}},p.DontConflict||(e[n]=e[c]),s.namespace=n,s.namespaceClean=c,s.guid=0,s.methods._resize&&(p.ResizeHandlers.push({namespace:n,priority:s.priority,callback:s.methods._resize}),p.ResizeHandlers.sort(r)),s.methods._raf&&(p.RAFHandlers.push({namespace:n,priority:s.priority,callback:s.methods._raf}),p.RAFHandlers.sort(r)),s}(n,s),p.Plugins[n]},p.$window.on("resize.fs",n),n(),i(),p.Ready(function(){p.$body=e("body"),e("html").addClass(p.support.touch?"touchevents":"no-touchevents"),o=e('meta[name="viewport"]'),a=!!o.length&&o.attr("content"),c="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",h.resolve()}),m.clickTouchStart=m.click+" "+m.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],s={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",r="",o="",a=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in a.style){i=t[e],p.support.transition=!0;break}m.transitionEnd=i+".{ns}";for(e in n)if(n.hasOwnProperty(e)&&n[e]in a.style){r=n[e];break}p.transition=r;for(e in s)if(s.hasOwnProperty(e)&&s[e]in a.style){p.support.transform=!0,o=s[e];break}p.transform=o}(),window.Formstone=p,p});