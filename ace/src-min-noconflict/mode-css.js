ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./text").Mode,r=(e("../tokenizer").Tokenizer,e("./css_highlight_rules").CssHighlightRules),o=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("../worker/worker_client").WorkerClient,a=e("./behaviour/css").CssBehaviour,u=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=r,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new u};n.inherits(l,i),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e).tokens;if(r.length&&"comment"==r[r.length-1].type)return i;var o=t.match(/^.*\{\s*$/);return o&&(i+=n),i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new s(["ace"],"ace/mode/css_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("csslint",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t}}.call(l.prototype),t.Mode=l}),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=(e("../lib/lang"),e("./text_highlight_rules").TextHighlightRules),r=t.supportType="animation-fill-mode|alignment-adjust|alignment-baseline|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|azimuth|backface-visibility|background-attachment|background-break|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|border|bottom|box-align|box-decoration-break|box-direction|box-flex-group|box-flex|box-lines|box-ordinal-group|box-orient|box-pack|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color-profile|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|crop|cue-after|cue-before|cue|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|float-offset|float|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|font|grid-columns|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|inline-box-align|left|letter-spacing|line-height|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|line-stacking|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|mark-after|mark-before|mark|marks|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-style|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page-policy|page|pause-after|pause-before|pause|perspective-origin|perspective|phonemes|pitch-range|pitch|play-during|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|rest-after|rest-before|rest|richness|right|rotation-point|rotation|ruby-align|ruby-overhang|ruby-position|ruby-span|size|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|string-set|table-layout|target-name|target-new|target-position|target|text-align-last|text-align|text-decoration|text-emphasis|text-height|text-indent|text-justify|text-outline|text-shadow|text-transform|text-wrap|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch-range|voice-pitch|voice-rate|voice-stress|voice-volume|volume|white-space-collapse|white-space|widows|width|word-break|word-spacing|word-wrap|z-index",o=t.supportFunction="rgb|rgba|url|attr|counter|counters",s=t.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero",a=t.supportConstantColor="aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow",u=t.supportConstantFonts="arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",l=t.numRe="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))",c=t.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",d=t.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",h=function(){var e=this.createKeywordMapper({"support.function":o,"support.constant":s,"support.type":r,"support.constant.color":a,"support.constant.fonts":u},"text",!0);this.$rules={start:[{token:"comment",regex:"\\/\\*",push:"comment"},{token:"paren.lparen",regex:"\\{",push:"ruleset"},{token:"string",regex:"@.*?{",push:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{token:"comment",regex:"\\/\\*",push:"comment"},{token:"paren.lparen",regex:"\\{",push:"ruleset"},{token:"string",regex:"\\}",next:"pop"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],comment:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}],ruleset:[{token:"paren.rparen",regex:"\\}",next:"pop"},{token:"comment",regex:"\\/\\*",push:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:["constant.numeric","keyword"],regex:"("+l+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"},{token:"constant.numeric",regex:l},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:c},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:d},{token:["support.function","string","support.function"],regex:"(url\\()(.*)(\\))"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}]},this.normalizeRules()};n.inherits(h,i),t.CssHighlightRules=h}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var n=e("../range").Range,i=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var i=e.getLine(t),r=i.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,s=e.findMatchingBracket({row:t,column:o});if(!s||s.row==t)return 0;var a=this.$getIndent(e.getLine(s.row));e.replace(new n(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(e,t){var n=e("../../lib/oop"),i=(e("../behaviour").Behaviour,e("./cstyle").CstyleBehaviour),r=e("../../token_iterator").TokenIterator,o=function(){this.inherit(i),this.add("colon","insertion",function(e,t,n,i,o){if(":"===o){var s=n.getCursorPosition(),a=new r(i,s.row,s.column),u=a.getCurrentToken();if(u&&u.value.match(/\s+/)&&(u=a.stepBackward()),u&&"support.type"===u.type){var l=i.doc.getLine(s.row),c=l.substring(s.column,s.column+1);if(":"===c)return{text:"",selection:[1,1]};if(!l.substring(s.column).match(/^\s*;/))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(e,t,n,i,o){var s=i.doc.getTextRange(o);if(!o.isMultiLine()&&":"===s){var a=n.getCursorPosition(),u=new r(i,a.row,a.column),l=u.getCurrentToken();if(l&&l.value.match(/\s+/)&&(l=u.stepBackward()),l&&"support.type"===l.type){var c=i.doc.getLine(o.start.row),d=c.substring(o.end.column,o.end.column+1);if(";"===d)return o.end.column++,o}}}),this.add("semicolon","insertion",function(e,t,n,i,r){if(";"===r){var o=n.getCursorPosition(),s=i.doc.getLine(o.row),a=s.substring(o.column,o.column+1);if(";"===a)return{text:"",selection:[1,1]}}})};n.inherits(o,i),t.CssBehaviour=o}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){var n=e("../../lib/oop"),i=e("../behaviour").Behaviour,r=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),s=["text","paren.rparen","punctuation.operator"],a=["text","paren.rparen","punctuation.operator","comment"],u=0,l=-1,c="",d=0,h=-1,g="",m="",p=function(){p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),i=new r(t,n.row,n.column);if(!this.$matchTokenType(i.getCurrentToken()||"text",s)){var o=new r(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",s))return!1}return i.stepForward(),i.getCurrentTokenRow()!==n.row||this.$matchTokenType(i.getCurrentToken()||"text",a)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isAutoInsertedClosing(i,r,c[0])||(u=0),l=i.row,c=n+r.substr(i.column),u++},p.recordMaybeInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isMaybeInsertedClosing(i,r)||(d=0),h=i.row,g=r.substr(0,i.column)+n,m=r.substr(i.column),d++},p.isAutoInsertedClosing=function(e,t,n){return u>0&&e.row===l&&n===c[0]&&t.substr(e.column)===c},p.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===h&&t.substr(e.column)===m&&t.substr(0,e.column)==g},p.popAutoInsertedClosing=function(){c=c.substr(1),u--},p.clearMaybeInsertedClosing=function(){d=0,h=-1},this.add("braces","insertion",function(e,t,n,i,r){var s=n.getCursorPosition(),a=i.doc.getLine(s.row);if("{"==r){var u=n.getSelectionRange(),l=i.doc.getTextRange(u);if(""!==l&&"{"!==l&&n.getWrapBehavioursEnabled())return{text:"{"+l+"}",selection:!1};if(p.isSaneInsertion(n,i))return/[\]\}\)]/.test(a[s.column])?(p.recordAutoInsert(n,i,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,i,"{"),{text:"{",selection:[1,1]})}else if("}"==r){var c=a.substring(s.column,s.column+1);if("}"==c){var h=i.$findOpeningBracket("}",{column:s.column+1,row:s.row});if(null!==h&&p.isAutoInsertedClosing(s,a,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if("\n"==r||"\r\n"==r){var g="";p.isMaybeInsertedClosing(s,a)&&(g=o.stringRepeat("}",d),p.clearMaybeInsertedClosing());var c=a.substring(s.column,s.column+1);if("}"==c||""!==g){var m=i.findMatchingBracket({row:s.row,column:s.column},"}");if(!m)return null;var f=this.getNextLineIndent(e,a.substring(0,s.column),i.getTabString()),C=this.$getIndent(a);return{text:"\n"+f+"\n"+C+g,selection:[1,f.length,1,f.length]}}}}),this.add("braces","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"{"==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.end.column,r.end.column+1);if("}"==a)return r.end.column++,r;d--}}),this.add("parens","insertion",function(e,t,n,i,r){if("("==r){var o=n.getSelectionRange(),s=i.doc.getTextRange(o);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"("+s+")",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,")"),{text:"()",selection:[1,1]}}else if(")"==r){var a=n.getCursorPosition(),u=i.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if(")"==l){var c=i.$findOpeningBracket(")",{column:a.column+1,row:a.row});if(null!==c&&p.isAutoInsertedClosing(a,u,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"("==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if(")"==a)return r.end.column++,r}}),this.add("brackets","insertion",function(e,t,n,i,r){if("["==r){var o=n.getSelectionRange(),s=i.doc.getTextRange(o);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"["+s+"]",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,"]"),{text:"[]",selection:[1,1]}}else if("]"==r){var a=n.getCursorPosition(),u=i.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if("]"==l){var c=i.$findOpeningBracket("]",{column:a.column+1,row:a.row});if(null!==c&&p.isAutoInsertedClosing(a,u,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"["==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if("]"==a)return r.end.column++,r}}),this.add("string_dquotes","insertion",function(e,t,n,i,r){if('"'==r||"'"==r){var o=r,s=n.getSelectionRange(),a=i.doc.getTextRange(s);if(""!==a&&"'"!==a&&'"'!=a&&n.getWrapBehavioursEnabled())return{text:o+a+o,selection:!1};var u=n.getCursorPosition(),l=i.doc.getLine(u.row),c=l.substring(u.column-1,u.column);if("\\"==c)return null;for(var d,h=i.getTokens(s.start.row),g=0,m=-1,f=0;f<h.length&&(d=h[f],"string"==d.type?m=-1:0>m&&(m=d.value.indexOf(o)),!(d.value.length+g>s.start.column));f++)g+=h[f].value.length;if(!d||0>m&&"comment"!==d.type&&("string"!==d.type||s.start.column!==d.value.length+g-1&&d.value.lastIndexOf(o)===d.value.length-1)){if(!p.isSaneInsertion(n,i))return;return{text:o+o,selection:[1,1]}}if(d&&"string"===d.type){var C=l.substring(u.column,u.column+1);if(C==o)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==o||"'"==o)){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if(a==o)return r.end.column++,r}})};n.inherits(p,i),t.CstyleBehaviour=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){var n=e("../../lib/oop"),i=(e("../../range").Range,e("./fold_mode").FoldMode),r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(r,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var i=e.getLine(n),r=i.match(this.foldingStartMarker);if(r){var o=r.index;return r[1]?this.openingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o+r[0].length,1)}if("markbeginend"===t){var r=i.match(this.foldingStopMarker);if(r){var o=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o,-1)}}}}.call(r.prototype)});