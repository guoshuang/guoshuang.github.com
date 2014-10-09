ace.define("ace/mode/golang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/golang_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./text").Mode,r=(e("../tokenizer").Tokenizer,e("./golang_highlight_rules").GolangHighlightRules),o=e("./matching_brace_outdent").MatchingBraceOutdent,a=(e("./behaviour/cstyle").CstyleBehaviour,e("./folding/cstyle").FoldMode),s=function(){this.HighlightRules=r,this.$outdent=new o,this.foldingRules=new a};n.inherits(s,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),o=r.tokens;if(r.state,o.length&&"comment"==o[o.length-1].type)return i;if("start"==e){var a=t.match(/^.*[\{\(\[]\s*$/);a&&(i+=n)}return i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}}.call(s.prototype),t.Mode=s}),ace.define("ace/mode/golang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./doc_comment_highlight_rules").DocCommentHighlightRules,r=e("./text_highlight_rules").TextHighlightRules,o=function(){var e="else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var",t="string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error",n="make|close|new|panic|recover",r="nil|true|false|iota",o=this.createKeywordMapper({keyword:e,"constant.language":r,"support.function":n,"support.type":t},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},i.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"[`](?:[^`]*)[`]"},{token:"string",merge:!0,regex:"[`](?:[^`]*)$",next:"bqstring"},{token:"constant.numeric",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"invalid",regex:"\\s+$"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],bqstring:[{token:"string",regex:"(?:[^`]*)`",next:"start"},{token:"string",regex:".+"}]},this.embedRules(i,"doc-",[i.getEndRule("start")])};n.inherits(o,r),t.GolangHighlightRules=o}),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};n.inherits(r,i),r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var n=e("../range").Range,i=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var i=e.getLine(t),r=i.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new n(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){var n=e("../../lib/oop"),i=e("../behaviour").Behaviour,r=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),a=["text","paren.rparen","punctuation.operator"],s=["text","paren.rparen","punctuation.operator","comment"],l=0,u=-1,c="",d=0,h=-1,g="",m="",p=function(){p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),i=new r(t,n.row,n.column);if(!this.$matchTokenType(i.getCurrentToken()||"text",a)){var o=new r(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",a))return!1}return i.stepForward(),i.getCurrentTokenRow()!==n.row||this.$matchTokenType(i.getCurrentToken()||"text",s)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isAutoInsertedClosing(i,r,c[0])||(l=0),u=i.row,c=n+r.substr(i.column),l++},p.recordMaybeInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isMaybeInsertedClosing(i,r)||(d=0),h=i.row,g=r.substr(0,i.column)+n,m=r.substr(i.column),d++},p.isAutoInsertedClosing=function(e,t,n){return l>0&&e.row===u&&n===c[0]&&t.substr(e.column)===c},p.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===h&&t.substr(e.column)===m&&t.substr(0,e.column)==g},p.popAutoInsertedClosing=function(){c=c.substr(1),l--},p.clearMaybeInsertedClosing=function(){d=0,h=-1},this.add("braces","insertion",function(e,t,n,i,r){var a=n.getCursorPosition(),s=i.doc.getLine(a.row);if("{"==r){var l=n.getSelectionRange(),u=i.doc.getTextRange(l);if(""!==u&&"{"!==u&&n.getWrapBehavioursEnabled())return{text:"{"+u+"}",selection:!1};if(p.isSaneInsertion(n,i))return/[\]\}\)]/.test(s[a.column])?(p.recordAutoInsert(n,i,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,i,"{"),{text:"{",selection:[1,1]})}else if("}"==r){var c=s.substring(a.column,a.column+1);if("}"==c){var h=i.$findOpeningBracket("}",{column:a.column+1,row:a.row});if(null!==h&&p.isAutoInsertedClosing(a,s,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if("\n"==r||"\r\n"==r){var g="";p.isMaybeInsertedClosing(a,s)&&(g=o.stringRepeat("}",d),p.clearMaybeInsertedClosing());var c=s.substring(a.column,a.column+1);if("}"==c||""!==g){var m=i.findMatchingBracket({row:a.row,column:a.column},"}");if(!m)return null;var f=this.getNextLineIndent(e,s.substring(0,a.column),i.getTabString()),C=this.$getIndent(s);return{text:"\n"+f+"\n"+C+g,selection:[1,f.length,1,f.length]}}}}),this.add("braces","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"{"==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.end.column,r.end.column+1);if("}"==s)return r.end.column++,r;d--}}),this.add("parens","insertion",function(e,t,n,i,r){if("("==r){var o=n.getSelectionRange(),a=i.doc.getTextRange(o);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"("+a+")",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,")"),{text:"()",selection:[1,1]}}else if(")"==r){var s=n.getCursorPosition(),l=i.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if(")"==u){var c=i.$findOpeningBracket(")",{column:s.column+1,row:s.row});if(null!==c&&p.isAutoInsertedClosing(s,l,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"("==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if(")"==s)return r.end.column++,r}}),this.add("brackets","insertion",function(e,t,n,i,r){if("["==r){var o=n.getSelectionRange(),a=i.doc.getTextRange(o);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"["+a+"]",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,"]"),{text:"[]",selection:[1,1]}}else if("]"==r){var s=n.getCursorPosition(),l=i.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if("]"==u){var c=i.$findOpeningBracket("]",{column:s.column+1,row:s.row});if(null!==c&&p.isAutoInsertedClosing(s,l,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"["==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if("]"==s)return r.end.column++,r}}),this.add("string_dquotes","insertion",function(e,t,n,i,r){if('"'==r||"'"==r){var o=r,a=n.getSelectionRange(),s=i.doc.getTextRange(a);if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:o+s+o,selection:!1};var l=n.getCursorPosition(),u=i.doc.getLine(l.row),c=u.substring(l.column-1,l.column);if("\\"==c)return null;for(var d,h=i.getTokens(a.start.row),g=0,m=-1,f=0;f<h.length&&(d=h[f],"string"==d.type?m=-1:0>m&&(m=d.value.indexOf(o)),!(d.value.length+g>a.start.column));f++)g+=h[f].value.length;if(!d||0>m&&"comment"!==d.type&&("string"!==d.type||a.start.column!==d.value.length+g-1&&d.value.lastIndexOf(o)===d.value.length-1)){if(!p.isSaneInsertion(n,i))return;return{text:o+o,selection:[1,1]}}if(d&&"string"===d.type){var C=u.substring(l.column,l.column+1);if(C==o)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==o||"'"==o)){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if(s==o)return r.end.column++,r}})};n.inherits(p,i),t.CstyleBehaviour=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){var n=e("../../lib/oop"),i=(e("../../range").Range,e("./fold_mode").FoldMode),r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(r,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var i=e.getLine(n),r=i.match(this.foldingStartMarker);if(r){var o=r.index;return r[1]?this.openingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o+r[0].length,1)}if("markbeginend"===t){var r=i.match(this.foldingStopMarker);if(r){var o=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o,-1)}}}}.call(r.prototype)});