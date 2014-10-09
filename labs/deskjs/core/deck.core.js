!function(e,t){var n,r,o,i,a={beforeChange:"deck.beforeChange",change:"deck.change",beforeInitialize:"deck.beforeInit",initialize:"deck.init"},s={},c=e(document),l=e(window),u=function(e){e.stopPropagation()},d=function(){var e=o.data("onSlide");o.removeClass(s.classes.onPrefix+e),o.addClass(s.classes.onPrefix+r),o.data("onSlide",r)},g=function(){var t=e("."+s.classes.current),o=t.parentsUntil(s.selectors.container),i=n[r],a=i.parentsUntil(s.selectors.container);o.removeClass(s.classes.childCurrent),a.addClass(s.classes.childCurrent)},h=function(){var t=e();e.each(n,function(e,n){t=t.add(n)}),t.removeClass([s.classes.before,s.classes.previous,s.classes.current,s.classes.next,s.classes.after].join(" "))},p=function(){n[r].addClass(s.classes.current),r>0&&n[r-1].addClass(s.classes.previous),r+1<n.length&&n[r+1].addClass(s.classes.next),r>1&&e.each(n.slice(0,r-1),function(e,t){t.addClass(s.classes.before)}),r+2<n.length&&e.each(n.slice(r+2),function(e,t){t.addClass(s.classes.after)})},m=function(){e(s.selectors.slides).each(function(){var t=e(this),n=t.closest("."+s.classes.childCurrent).length,r=t.hasClass(s.classes.before)&&!n,o=t.hasClass(s.classes.previous)&&!n,i=t.hasClass(s.classes.next),a=t.hasClass(s.classes.after),c=r||o||i||a;t.attr("aria-hidden",c)})},f=function(){d(),g(),h(),p(),s.setAriaHiddens&&m()},_=function(t){e.isArray(t)?e.each(t,function(t,r){n.push(e(r))}):e(t).each(function(t,r){n.push(e(r))})},b=function(){var t=["input","textarea","select","button","meter","progress","[contentEditable]"].join(", ");c.unbind("keydown.deck").bind("keydown.deck",function(t){var n=t.which===s.keys.next,r=t.which===s.keys.previous;n=n||e.inArray(t.which,s.keys.next)>-1,r=r||e.inArray(t.which,s.keys.previous)>-1,n?(S.next(),t.preventDefault()):r&&(S.prev(),t.preventDefault())}),c.undelegate(t,"keydown.deck",u),c.delegate(t,"keydown.deck",u)},x=function(){var n,r=s.touch.swipeDirection,i=s.touch.swipeTolerance,a={both:!0,horizontal:!0}[r],c={both:!0,vertical:!0}[r];o.unbind("touchstart.deck"),o.bind("touchstart.deck",function(t){n||(n=e.extend({},t.originalEvent.targetTouches[0]))}),o.unbind("touchmove.deck"),o.bind("touchmove.deck",function(r){e.each(r.originalEvent.changedTouches,function(r,o){if(!n||o.identifier!==n.identifier)return!0;var s=o.screenX-n.screenX,l=o.screenY-n.screenY,u=s>i&&a,d=-i>s&&a,g=l>i&&c,h=-i>l&&c;return u||g?(e.deck("prev"),n=t):(d||h)&&(e.deck("next"),n=t),!1}),c&&r.preventDefault()}),o.unbind("touchend.deck"),o.bind("touchend.deck",function(r){e.each(r.originalEvent.changedTouches,function(e,r){n&&r.identifier===n.identifier&&(n=t)})})},k=function(e){return"number"==typeof e&&e>=0&&e<n.length},y=function(){var t=e.Event(a.beforeInitialize);return t.locks=0,t.done=e.noop,t.lockInit=function(){++t.locks},t.releaseInit=function(){--t.locks,t.locks||t.done()},t},v=function(t){var r=t.substr(t.indexOf("#")+1);e.each(n,function(t,n){return n.attr("id")===r?(e.deck("go",t),!1):void 0}),s.preventFragmentScroll&&e.deck("getContainer").scrollLeft(0).scrollTop(0)},w=function(e,t){var n=t.attr("id"),r=t.data("deckAssignedId")===n;(!n||r)&&(t.attr("id",s.hashPrefix+e),t.data("deckAssignedId",s.hashPrefix+e))},C=function(e){o.removeClass(s.classes.onPrefix+e)},E=function(e){o.addClass(s.classes.onPrefix+e)},A=function(){i=e(),e.each(n,function(t,n){var r;w(t,n),r="#"+n.attr("id"),r===window.location.hash&&setTimeout(function(){e.deck("go",t)},1),i=i.add('a[href="'+r+'"]')}),n.length&&E(e.deck("getSlide").attr("id"))},T=function(t,n){var r="#"+e.deck("getSlide",n).attr("id"),o=window.location.href.replace(/#.*/,"")+r;C(e.deck("getSlide",t).attr("id")),E(e.deck("getSlide",n).attr("id")),Modernizr.history&&window.history.replaceState({},"",o)},S={init:function(t){var i=y(),l=t;e.isPlainObject(t)||(l=arguments[1]||{},e.extend(!0,l,{selectors:{slides:arguments[0]}})),s=e.extend(!0,{},e.deck.defaults,l),n=[],r=0,o=e(s.selectors.container),o.addClass(s.classes.loading),_(s.selectors.slides),i.done=function(){n=[],_(s.selectors.slides),A(),b(),x(),o.scrollLeft(0).scrollTop(0),n.length&&f(),o.removeClass(s.classes.loading),c.trigger(a.initialize)},c.trigger(i),i.locks||i.done(),window.setTimeout(function(){i.locks&&(window.console&&window.console.warn("Something locked deck initialization              without releasing it before the timeout. Proceeding with              initialization anyway."),i.done())},s.initLockTimeout)},go:function(t){var o,i=e.Event(a.beforeChange);k(t)?o=t:"string"==typeof t&&e.each(n,function(e,n){return n.attr("id")===t?(o=e,!1):void 0}),"undefined"!=typeof o&&(c.trigger(i,[r,o]),i.isDefaultPrevented()||(c.trigger(a.change,[r,o]),T(r,o),r=o,f()))},next:function(){S.go(r+1)},prev:function(){S.go(r-1)},getSlide:function(e){return e="undefined"!=typeof e?e:r,k(e)?n[e]:null},getSlides:function(){return n},getTopLevelSlides:function(){var t=[],r=s.selectors.slides,o=[r,r].join(" ");return e.each(n,function(e,n){n.is(o)||t.push(n)}),t},getNestedSlides:function(t){var n=null==t?r:t,o=e.deck("getSlide",n),i=o.find(s.selectors.slides),a=i.get();return e.map(a,function(t){return e(t)})},getContainer:function(){return o},getOptions:function(){return s},extend:function(e,t){S[e]=t}};e.deck=function(e,t){var n=Array.prototype.slice.call(arguments,1);return S[e]?S[e].apply(this,n):S.init(e,t)},e.deck.defaults={classes:{after:"deck-after",before:"deck-before",childCurrent:"deck-child-current",current:"deck-current",loading:"deck-loading",next:"deck-next",onPrefix:"on-slide-",previous:"deck-previous"},selectors:{container:".deck-container",slides:".slide"},keys:{next:[13,32,34,39,40],previous:[8,33,37,38]},touch:{swipeDirection:"horizontal",swipeTolerance:60},initLockTimeout:1e4,hashPrefix:"slide-",preventFragmentScroll:!0,setAriaHiddens:!0},c.ready(function(){e("html").addClass("ready")}),l.bind("hashchange.deck",function(e){e.originalEvent&&e.originalEvent.newURL?v(e.originalEvent.newURL):v(window.location.hash)}),l.bind("load.deck",function(){s.preventFragmentScroll&&o.scrollLeft(0).scrollTop(0)})}(jQuery);