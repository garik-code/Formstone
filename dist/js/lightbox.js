/*! Formstone v0.0.1 [lightbox.js] 2015-01-06 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){P=b.$body}function e(){Q&&j()}function f(a){this.on(L.click,a,i)}function g(){k(),this.off(L.namespace)}function h(b,c){b instanceof a&&i.apply(N,[{data:a.extend({},{$object:b},I,c||{})}])}function i(c){if(!Q){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],l=e?e.data(H+"-type"):"",m="image"===l||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),o=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,p="url"===l||!m&&!o&&"http"===g.substr(0,4)&&!h,r="element"===l||!m&&!o&&!p&&"#"===h.substr(0,1),s="undefined"!=typeof f;if(r&&(g=h),!(m||o||p||r||s))return;if(M.killEvent(c),Q=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),Q.margin*=2,Q.type=m?"image":o?"video":"element",m||o){var u=e.data(H+"-gallery");u&&(Q.gallery.active=!0,Q.gallery.id=u,Q.gallery.$items=a("a[data-lightbox-gallery= "+Q.gallery.id+"], a[rel= "+Q.gallery.id+"]"),Q.gallery.index=Q.gallery.$items.index(Q.$el),Q.gallery.total=Q.gallery.$items.length-1)}var v="";Q.isMobile||(v+='<div class="'+[J.raw.overlay,Q.customClass].join(" ")+'"></div>');var C=[J.raw.base,J.raw.loading,J.raw.animating,Q.customClass];Q.fixed&&C.push(J.raw.fixed),Q.isMobile&&C.push(J.raw.mobile),p&&C.push(J.raw.iframed),(r||s)&&C.push(J.raw.inline),v+='<div class="'+C.join(" ")+'">',v+='<span class="'+J.raw.close+'">'+Q.labels.close+"</span>",v+='<span class="'+J.raw.loading_icon+'"></span>',v+='<div class="'+J.raw.container+'">',v+='<div class="'+J.raw.content+'">',(m||o)&&(v+='<div class="'+J.raw.meta+'">',Q.gallery.active&&(v+='<div class="'+[J.raw.control,J.raw.control_previous].join(" ")+'">'+Q.labels.previous+"</div>",v+='<div class="'+[J.raw.control,J.raw.control_next].join(" ")+'">'+Q.labels.next+"</div>",v+='<p class="'+J.raw.position+'"',Q.gallery.total<1&&(v+=' style="display: none;"'),v+=">",v+='<span class="'+J.raw.position_current+'">'+(Q.gallery.index+1)+"</span> ",v+=Q.labels.count,v+=' <span class="'+J.raw.position_total+'">'+(Q.gallery.total+1)+"</span>",v+="</p>"),v+='<div class="'+J.raw.caption+'">',v+=Q.formatter.call(e,d),v+="</div></div>"),v+="</div></div></div>",P.append(v),Q.$overlay=a(J.overlay),Q.$lightbox=a(J.base),Q.$close=a(J.close),Q.$container=a(J.container),Q.$content=a(J.content),Q.$meta=a(J.meta),Q.$position=a(J.position),Q.$caption=a(J.caption),Q.$controls=a(J.control),Q.paddingVertical=Q.isMobile?Q.$close.outerHeight()/2:parseInt(Q.$lightbox.css("paddingTop"),10)+parseInt(Q.$lightbox.css("paddingBottom"),10),Q.paddingHorizontal=Q.isMobile?0:parseInt(Q.$lightbox.css("paddingLeft"),10)+parseInt(Q.$lightbox.css("paddingRight"),10),Q.contentHeight=Q.$lightbox.outerHeight()-Q.paddingVertical,Q.contentWidth=Q.$lightbox.outerWidth()-Q.paddingHorizontal,Q.controlHeight=Q.$controls.outerHeight(),n(),Q.gallery.active&&x(),O.on(L.keyDown,y),P.on(L.clickTouchStart,[J.overlay,J.close].join(", "),k),Q.gallery.active&&Q.$lightbox.on(L.clickTouchStart,J.control,w),Q.$lightbox.transition({property:"opacity"},function(){m?q(g):o?t(g):p?A(g):r?z(g):s&&B(Q.$object)}).addClass(J.raw.open),Q.$overlay.addClass(J.raw.open)}}function j(a){"object"!=typeof a&&(Q.targetHeight=arguments[0],Q.targetWidth=arguments[1]),"element"===Q.type?C(Q.$content.find("> :first-child")):"image"===Q.type?r():"video"===Q.type&&u(),m()}function k(a){M.killEvent(a),Q&&(Q.$lightbox.transition("destroy"),Q.$container.transition("destroy"),Q.$lightbox.addClass(J.raw.animating).transition({property:"opacity"},function(){Q.$lightbox.off(L.namespace),Q.$container.off(L.namespace),O.off(L.namespace),P.off(L.namespace),Q.$overlay.remove(),Q.$lightbox.remove(),Q=null,O.trigger(L.close)}),Q.$lightbox.removeClass(J.raw.open),Q.$overlay.removeClass(J.raw.open))}function l(){{var a=o();Q.isMobile?0:Q.duration}Q.isMobile||Q.$controls.css({marginTop:(Q.contentHeight-Q.controlHeight-Q.metaHeight)/2}),!Q.visible&&Q.isMobile&&Q.gallery.active&&Q.$content.touch({axis:"x",swipe:!0}).on(L.swipe,E),Q.$lightbox.transition({property:Q.contentHeight!==Q.oldContentHeight?"height":"width"},function(){Q.$container.transition({property:"opacity"},function(){Q.$lightbox.removeClass(J.raw.animating),Q.isAnimating=!1}),Q.$lightbox.removeClass(J.raw.loading),Q.visible=!0,O.trigger(L.open),Q.gallery.active&&v()}),Q.isMobile||Q.$lightbox.css({height:Q.contentHeight+Q.paddingVertical,width:Q.contentWidth+Q.paddingHorizontal,top:Q.fixed?0:a.top});var b=Q.oldContentHeight!==Q.contentHeight||Q.oldContentWidth!==Q.contentWidth;(Q.isMobile||!b)&&Q.$lightbox.transition("resolve"),Q.oldContentHeight=Q.contentHeight,Q.oldContentWidth=Q.contentWidth}function m(){if(Q.visible&&!Q.isMobile){var a=o();Q.$controls.css({marginTop:(Q.contentHeight-Q.controlHeight-Q.metaHeight)/2}),Q.$lightbox.css({height:Q.contentHeight+Q.paddingVertical,width:Q.contentWidth+Q.paddingHorizontal,top:Q.fixed?0:a.top})}}function n(){var a=o();Q.$lightbox.css({top:Q.fixed?0:a.top})}function o(){if(Q.isMobile)return{left:0,top:0};var a={left:(O.width()-Q.contentWidth-Q.paddingHorizontal)/2,top:Q.top<=0?(O.height()-Q.contentHeight-Q.paddingVertical)/2:Q.top};return Q.fixed!==!0&&(a.top+=O.scrollTop()),a}function p(){var a=this.attr("title");return a!==c&&""!==a.trim()?'<p class="caption">'+a.trim()+"</p>":""}function q(b){Q.$image=a("<img>"),Q.$image.one(L.load,function(){var a=F(Q.$image);Q.naturalHeight=a.naturalHeight,Q.naturalWidth=a.naturalWidth,Q.retina&&(Q.naturalHeight/=2,Q.naturalWidth/=2),Q.$content.prepend(Q.$image),""===Q.$caption.html()?Q.$caption.hide():Q.$caption.show(),r(),l()}).error(D).attr("src",b).addClass(J.raw.image),(Q.$image[0].complete||4===Q.$image[0].readyState)&&Q.$image.trigger(L.load)}function r(){var a=0;for(Q.windowHeight=Q.viewportHeight=O.height()-Q.paddingVertical,Q.windowWidth=Q.viewportWidth=O.width()-Q.paddingHorizontal,Q.contentHeight=1/0,Q.contentWidth=1/0,Q.imageMarginTop=0,Q.imageMarginLeft=0;Q.contentHeight>Q.viewportHeight&&2>a;)Q.imageHeight=0===a?Q.naturalHeight:Q.$image.outerHeight(),Q.imageWidth=0===a?Q.naturalWidth:Q.$image.outerWidth(),Q.metaHeight=0===a?0:Q.metaHeight,0===a&&(Q.ratioHorizontal=Q.imageHeight/Q.imageWidth,Q.ratioVertical=Q.imageWidth/Q.imageHeight,Q.isWide=Q.imageWidth>Q.imageHeight),Q.imageHeight<Q.minHeight&&(Q.minHeight=Q.imageHeight),Q.imageWidth<Q.minWidth&&(Q.minWidth=Q.imageWidth),Q.isMobile?(Q.$meta.css({width:Q.windowWidth}),Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight=Q.viewportHeight-Q.paddingVertical,Q.contentWidth=Q.viewportWidth-Q.paddingHorizontal,s(),Q.imageMarginTop=(Q.contentHeight-Q.targetImageHeight-Q.metaHeight)/2,Q.imageMarginLeft=(Q.contentWidth-Q.targetImageWidth)/2):(0===a&&(Q.viewportHeight-=Q.margin+Q.paddingVertical,Q.viewportWidth-=Q.margin+Q.paddingHorizontal),Q.viewportHeight-=Q.metaHeight,s(),Q.contentHeight=Q.targetImageHeight,Q.contentWidth=Q.targetImageWidth),Q.$meta.css({width:Q.contentWidth}),Q.$image.css({height:Q.targetImageHeight,width:Q.targetImageWidth,marginTop:Q.imageMarginTop,marginLeft:Q.imageMarginLeft}),Q.isMobile||(Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight+=Q.metaHeight),a++}function s(){var a=Q.isMobile?Q.contentHeight-Q.metaHeight:Q.viewportHeight,b=Q.isMobile?Q.contentWidth:Q.viewportWidth;Q.isWide?(Q.targetImageWidth=b,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal,Q.targetImageHeight>a&&(Q.targetImageHeight=a,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical)):(Q.targetImageHeight=a,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical,Q.targetImageWidth>b&&(Q.targetImageWidth=b,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal)),(Q.targetImageWidth>Q.imageWidth||Q.targetImageHeight>Q.imageHeight)&&(Q.targetImageHeight=Q.imageHeight,Q.targetImageWidth=Q.imageWidth),(Q.targetImageWidth<Q.minWidth||Q.targetImageHeight<Q.minHeight)&&(Q.targetImageWidth<Q.minWidth?(Q.targetImageWidth=Q.minWidth,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal):(Q.targetImageHeight=Q.minHeight,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical))}function t(b){Q.$videoWrapper=a('<div class="'+J.raw.videoWrapper+'"></div>'),Q.$video=a('<iframe class="'+J.raw.video+'" seamless="seamless"></iframe>'),Q.$video.attr("src",b).addClass(J.raw.video).prependTo(Q.$videoWrapper),Q.$content.prepend(Q.$videoWrapper),u(),l()}function u(){Q.windowHeight=Q.viewportHeight=Q.contentHeight=O.height()-Q.paddingVertical,Q.windowWidth=Q.viewportWidth=Q.contentWidth=O.width()-Q.paddingHorizontal,Q.videoMarginTop=0,Q.videoMarginLeft=0,Q.isMobile?(Q.$meta.css({width:Q.windowWidth}),Q.metaHeight=Q.$meta.outerHeight(!0),Q.viewportHeight-=Q.metaHeight,Q.targetVideoWidth=Q.viewportWidth,Q.targetVideoHeight=Q.targetVideoWidth*Q.videoRatio,Q.targetVideoHeight>Q.viewportHeight&&(Q.targetVideoHeight=Q.viewportHeight,Q.targetVideoWidth=Q.targetVideoHeight/Q.videoRatio),Q.videoMarginTop=(Q.viewportHeight-Q.targetVideoHeight)/2,Q.videoMarginLeft=(Q.viewportWidth-Q.targetVideoWidth)/2):(Q.viewportHeight=Q.windowHeight-Q.margin,Q.viewportWidth=Q.windowWidth-Q.margin,Q.targetVideoWidth=Q.videoWidth>Q.viewportWidth?Q.viewportWidth:Q.videoWidth,Q.targetVideoWidth<Q.minWidth&&(Q.targetVideoWidth=Q.minWidth),Q.targetVideoHeight=Q.targetVideoWidth*Q.videoRatio,Q.contentHeight=Q.targetVideoHeight,Q.contentWidth=Q.targetVideoWidth),Q.$meta.css({width:Q.contentWidth}),Q.$videoWrapper.css({height:Q.targetVideoHeight,width:Q.targetVideoWidth,marginTop:Q.videoMarginTop,marginLeft:Q.videoMarginLeft}),Q.isMobile||(Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight=Q.targetVideoHeight+Q.metaHeight)}function v(){var b="";Q.gallery.index>0&&(b=Q.gallery.$items.eq(Q.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),Q.gallery.index<Q.gallery.total&&(b=Q.gallery.$items.eq(Q.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function w(b){M.killEvent(b);var c=a(b.currentTarget);Q.isAnimating||c.hasClass(J.raw.control_disabled)||(Q.isAnimating=!0,Q.gallery.index+=c.hasClass(J.raw.control_next)?1:-1,Q.gallery.index>Q.gallery.total&&(Q.gallery.index=Q.gallery.total),Q.gallery.index<0&&(Q.gallery.index=0),Q.$lightbox.addClass([J.raw.loading,J.raw.animating].join(" ")),Q.$container.transition({property:"opacity"},function(){"undefined"!=typeof Q.$image&&Q.$image.remove(),"undefined"!=typeof Q.$videoWrapper&&Q.$videoWrapper.remove(),Q.$el=Q.gallery.$items.eq(Q.gallery.index),Q.$caption.html(Q.formatter.call(Q.$el,Q)),Q.$position.find(J.position_current).html(Q.gallery.index+1);var a=Q.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?t(a):q(a),x()}))}function x(){Q.$controls.removeClass(J.raw.control_disabled),0===Q.gallery.index&&Q.$controls.filter(J.control_previous).addClass(K.control_disabled),Q.gallery.index===Q.gallery.total&&Q.$controls.filter(J.control_next).addClass(K.control_disabled)}function y(a){!Q.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&Q.$close.trigger(L.click):(M.killEvent(a),Q.$controls.filter(37===a.keyCode?J.control_previous:J.control_next).trigger(L.click))}function z(b){var c=a(b).find("> :first-child").clone();B(c)}function A(b){b+=b.indexOf("?")>-1?"&"+Q.requestKey+"=true":"?"+Q.requestKey+"=true";var c=a('<iframe class="'+J.raw.iframe+'" src="'+b+'"></iframe>');B(c)}function B(a){Q.$content.append(a),C(a),l()}function C(a){Q.windowHeight=O.height()-Q.paddingVertical,Q.windowWidth=O.width()-Q.paddingHorizontal,Q.objectHeight=a.outerHeight(!0),Q.objectWidth=a.outerWidth(!0),Q.targetHeight=Q.targetHeight||(Q.$el?Q.$el.data(H+"-height"):null),Q.targetWidth=Q.targetWidth||(Q.$el?Q.$el.data(H+"-width"):null),Q.maxHeight=Q.windowHeight<0?Q.minHeight:Q.windowHeight,Q.isIframe=a.is("iframe"),Q.objectMarginTop=0,Q.objectMarginLeft=0,Q.isMobile||(Q.windowHeight-=Q.margin,Q.windowWidth-=Q.margin),Q.contentHeight=Q.targetHeight?Q.targetHeight:Q.isIframe||Q.isMobile?Q.windowHeight:Q.objectHeight,Q.contentWidth=Q.targetWidth?Q.targetWidth:Q.isIframe||Q.isMobile?Q.windowWidth:Q.objectWidth,(Q.isIframe||Q.isObject)&&Q.isMobile?(Q.contentHeight=Q.windowHeight,Q.contentWidth=Q.windowWidth):Q.isObject&&(Q.contentHeight=Q.contentHeight>Q.windowHeight?Q.windowHeight:Q.contentHeight,Q.contentWidth=Q.contentWidth>Q.windowWidth?Q.windowWidth:Q.contentWidth)}function D(){var b=a('<div class="'+J.raw.error+'"><p>Error Loading Resource</p></div>');Q.type="element",Q.$meta.remove(),Q.$image.off(L.namespace),B(b)}function E(a){Q.$controls.filter("left"===a.directionX?J.control_next:J.control_previous).trigger(L.click)}function F(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var G=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:p,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},classes:["loading","animating","fixed","mobile","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","meta","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption","iframe","error"],events:{open:"open",close:"close",swipe:"swipe"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),H=G.namespace,I=G.defaults,J=G.classes,K=J.raw,L=G.events,M=G.functions,N=b.window,O=b.$window,P=null,Q=null}(jQuery,Formstone);