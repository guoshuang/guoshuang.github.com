!function(e){var t,n=e(document),r=function(){n.unbind("keydown.deckgoto"),n.bind("keydown.deckgoto",function(t){var n=e.deck("getOptions").keys.goto;(t.which===n||e.inArray(t.which,n)>-1)&&(t.preventDefault(),e.deck("toggleGoTo"))})},o=function(){var t=e.deck("getOptions"),n=e(t.selectors.gotoDatalist);e.each(e.deck("getSlides"),function(e,t){var r=t.attr("id");r&&n.append('<option value="'+r+'">')})},i=function(){var n=e.deck("getOptions"),r=e.map([n.classes.before,n.classes.previous,n.classes.current,n.classes.next,n.classes.after],function(e){return"."+e}).join(", ");t=0,e.each(e.deck("getSlides"),function(e,o){var i=o.parentsUntil(n.selectors.container,r);i.length?o.removeData("rootIndex"):n.countNested||(++t,o.data("rootIndex",t))})},a=function(){var n=e.deck("getOptions"),r=e(n.selectors.gotoForm);r.unbind("submit.deckgoto"),r.bind("submit.deckgoto",function(r){var o=e(n.selectors.gotoInput),i=o.val(),a=parseInt(i,10);if(!n.countNested){if(!isNaN(a)&&a>=t)return!1;e.each(e.deck("getSlides"),function(e,t){return t.data("rootIndex")===a?(a=e+1,!1):void 0})}e.deck("go",isNaN(a)?i:a-1),e.deck("hideGoTo"),o.val(""),r.preventDefault()})};e.extend(!0,e.deck.defaults,{classes:{"goto":"deck-goto"},selectors:{gotoDatalist:"#goto-datalist",gotoForm:".goto-form",gotoInput:"#goto-slide"},keys:{"goto":71},countNested:!0}),e.deck("extend","showGoTo",function(){var t=e.deck("getOptions");e.deck("getContainer").addClass(t.classes.goto),e(t.selectors.gotoForm).attr("aria-hidden",!1),e(t.selectors.gotoInput).focus()}),e.deck("extend","hideGoTo",function(){var t=e.deck("getOptions");e(t.selectors.gotoInput).blur(),e.deck("getContainer").removeClass(t.classes.goto),e(t.selectors.gotoForm).attr("aria-hidden",!0)}),e.deck("extend","toggleGoTo",function(){var t=e.deck("getOptions"),n=e.deck("getContainer").hasClass(t.classes.goto);e.deck(n?"hideGoTo":"showGoTo")}),n.bind("deck.init",function(){r(),o(),i(),a()})}(jQuery);