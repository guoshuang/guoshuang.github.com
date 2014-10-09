ace.define("ace/mode/logiql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/logiql_highlight_rules","ace/mode/folding/coffee","ace/token_iterator","ace/range","ace/mode/behaviour/cstyle","ace/mode/matching_brace_outdent"],function(e,t){var n=e("../lib/oop"),r=e("./text").Mode,o=(e("../tokenizer").Tokenizer,e("./logiql_highlight_rules").LogiQLHighlightRules),i=e("./folding/coffee").FoldMode,a=e("../token_iterator").TokenIterator,s=e("../range").Range,l=e("./behaviour/cstyle").CstyleBehaviour,u=e("./matching_brace_outdent").MatchingBraceOutdent,c=function(){this.HighlightRules=o,this.foldingRules=new i,this.$outdent=new u,this.$behaviour=new l};n.inherits(c,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),i=o.tokens,a=o.state;return/comment|string/.test(a)?r:i.length&&"comment.single"==i[i.length-1].type?r:(t.match(),/(-->|<--|<-|->|{)\s*$/.test(t)&&(r+=n),r)},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)?!0:"\n"!==n&&"\r\n"!==n?!1:/^\s+/.test(t)?!0:!1},this.autoOutdent=function(e,t,n){if(!this.$outdent.autoOutdent(t,n)){var r=t.getLine(n),o=r.match(/^\s+/),i=r.lastIndexOf(".")+1;if(!o||!n||!i)return 0;var a=(t.getLine(n+1),this.getMatching(t,{row:n,column:i}));if(!a||a.start.row==n)return 0;i=o[0].length;var l=this.$getIndent(t.getLine(a.start.row));t.replace(new s(n+1,0,n+1,i),l)}},this.getMatching=function(e,t,n){void 0==t&&(t=e.selection.lead),"object"==typeof t&&(n=t.column,t=t.row);var r,o=e.getTokenAt(t,n),i="keyword.start",l="keyword.end";if(o){if(o.type==i){var u=new a(e,t,n);u.step=u.stepForward}else{if(o.type!=l)return;var u=new a(e,t,n);u.step=u.stepBackward}for(;(r=u.step())&&r.type!=i&&r.type!=l;);if(r&&r.type!=o.type){var c=u.getCurrentTokenColumn(),t=u.getCurrentTokenRow();return new s(t,c,t,c+r.value.length)}}}}.call(c.prototype),t.Mode=c}),ace.define("ace/mode/logiql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.block",regex:"/\\*",push:[{token:"comment.block",regex:"\\*/",next:"pop"},{defaultToken:"comment.block"}]},{token:"comment.single",regex:"//.*"},{token:"constant.numeric",regex:"\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?[fd]?"},{token:"string",regex:'"',push:[{token:"string",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"constant.language",regex:"\\b(true|false)\\b"},{token:"entity.name.type.logicblox",regex:"`[a-zA-Z_:]+(\\d|\\a)*\\b"},{token:"keyword.start",regex:"->",comment:"Constraint"},{token:"keyword.start",regex:"-->",comment:"Level 1 Constraint"},{token:"keyword.start",regex:"<-",comment:"Rule"},{token:"keyword.start",regex:"<--",comment:"Level 1 Rule"},{token:"keyword.end",regex:"\\.",comment:"Terminator"},{token:"keyword.other",regex:"!",comment:"Negation"},{token:"keyword.other",regex:",",comment:"Conjunction"},{token:"keyword.other",regex:";",comment:"Disjunction"},{token:"keyword.operator",regex:"<=|>=|!=|<|>",comment:"Equality"},{token:"keyword.other",regex:"@",comment:"Equality"},{token:"keyword.operator",regex:"\\+|-|\\*|/",comment:"Arithmetic operations"},{token:"keyword",regex:"::",comment:"Colon colon"},{token:"support.function",regex:"\\b(agg\\s*<<)",push:[{include:"$self"},{token:"support.function",regex:">>",next:"pop"}]},{token:"storage.modifier",regex:"\\b(lang:[\\w:]*)"},{token:["storage.type","text"],regex:"(export|sealed|clauses|block|alias)(\\s*\\()(?=`)"},{token:"entity.name",regex:"[a-zA-Z_][a-zA-Z_0-9:]*(@prev|@init|@final)?(?=(\\(|\\[))"},{token:"variable.parameter",regex:"([a-zA-Z][a-zA-Z_0-9]*|_)\\s*(?=(,|\\.|<-|->|\\)|\\]|=))"}]},this.normalizeRules()};n.inherits(o,r),t.LogiQLHighlightRules=o}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t){var n=e("../../lib/oop"),r=e("./fold_mode").FoldMode,o=e("../../range").Range,i=t.FoldMode=function(){};n.inherits(i,r),function(){this.getFoldWidgetRange=function(e,t,n){var r=this.indentationBlock(e,n);if(r)return r;var i=/\S/,a=e.getLine(n),s=a.search(i);if(-1!=s&&"#"==a[s]){for(var l=a.length,u=e.getLength(),c=n,d=n;++n<u;){a=e.getLine(n);var g=a.search(i);if(-1!=g){if("#"!=a[g])break;d=n}}if(d>c){var h=e.getLine(d).length;return new o(c,l,d,h)}}},this.getFoldWidget=function(e,t,n){var r=e.getLine(n),o=r.search(/\S/),i=e.getLine(n+1),a=e.getLine(n-1),s=a.search(/\S/),l=i.search(/\S/);if(-1==o)return e.foldWidgets[n-1]=-1!=s&&l>s?"start":"","";if(-1==s){if(o==l&&"#"==r[o]&&"#"==i[o])return e.foldWidgets[n-1]="",e.foldWidgets[n+1]="","start"}else if(s==o&&"#"==r[o]&&"#"==a[o]&&-1==e.getLine(n-2).search(/\S/))return e.foldWidgets[n-1]="start",e.foldWidgets[n+1]="","";return e.foldWidgets[n-1]=-1!=s&&o>s?"start":"",l>o?"start":""}}.call(i.prototype)}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){var n=e("../../lib/oop"),r=e("../behaviour").Behaviour,o=e("../../token_iterator").TokenIterator,i=e("../../lib/lang"),a=["text","paren.rparen","punctuation.operator"],s=["text","paren.rparen","punctuation.operator","comment"],l=0,u=-1,c="",d=0,g=-1,h="",p="",m=function(){m.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new o(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",a)){var i=new o(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",a))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",s)},m.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},m.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),o=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,o,c[0])||(l=0),u=r.row,c=n+o.substr(r.column),l++},m.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),o=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,o)||(d=0),g=r.row,h=o.substr(0,r.column)+n,p=o.substr(r.column),d++},m.isAutoInsertedClosing=function(e,t,n){return l>0&&e.row===u&&n===c[0]&&t.substr(e.column)===c},m.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===g&&t.substr(e.column)===p&&t.substr(0,e.column)==h},m.popAutoInsertedClosing=function(){c=c.substr(1),l--},m.clearMaybeInsertedClosing=function(){d=0,g=-1},this.add("braces","insertion",function(e,t,n,r,o){var a=n.getCursorPosition(),s=r.doc.getLine(a.row);if("{"==o){var l=n.getSelectionRange(),u=r.doc.getTextRange(l);if(""!==u&&"{"!==u&&n.getWrapBehavioursEnabled())return{text:"{"+u+"}",selection:!1};if(m.isSaneInsertion(n,r))return/[\]\}\)]/.test(s[a.column])?(m.recordAutoInsert(n,r,"}"),{text:"{}",selection:[1,1]}):(m.recordMaybeInsert(n,r,"{"),{text:"{",selection:[1,1]})}else if("}"==o){var c=s.substring(a.column,a.column+1);if("}"==c){var g=r.$findOpeningBracket("}",{column:a.column+1,row:a.row});if(null!==g&&m.isAutoInsertedClosing(a,s,o))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if("\n"==o||"\r\n"==o){var h="";m.isMaybeInsertedClosing(a,s)&&(h=i.stringRepeat("}",d),m.clearMaybeInsertedClosing());var c=s.substring(a.column,a.column+1);if("}"==c||""!==h){var p=r.findMatchingBracket({row:a.row,column:a.column},"}");if(!p)return null;var f=this.getNextLineIndent(e,s.substring(0,a.column),r.getTabString()),x=this.$getIndent(s);return{text:"\n"+f+"\n"+x+h,selection:[1,f.length,1,f.length]}}}}),this.add("braces","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"{"==i){var a=r.doc.getLine(o.start.row),s=a.substring(o.end.column,o.end.column+1);if("}"==s)return o.end.column++,o;d--}}),this.add("parens","insertion",function(e,t,n,r,o){if("("==o){var i=n.getSelectionRange(),a=r.doc.getTextRange(i);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"("+a+")",selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){var s=n.getCursorPosition(),l=r.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if(")"==u){var c=r.$findOpeningBracket(")",{column:s.column+1,row:s.row});if(null!==c&&m.isAutoInsertedClosing(s,l,o))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==i){var a=r.doc.getLine(o.start.row),s=a.substring(o.start.column+1,o.start.column+2);if(")"==s)return o.end.column++,o}}),this.add("brackets","insertion",function(e,t,n,r,o){if("["==o){var i=n.getSelectionRange(),a=r.doc.getTextRange(i);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"["+a+"]",selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){var s=n.getCursorPosition(),l=r.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if("]"==u){var c=r.$findOpeningBracket("]",{column:s.column+1,row:s.row});if(null!==c&&m.isAutoInsertedClosing(s,l,o))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==i){var a=r.doc.getLine(o.start.row),s=a.substring(o.start.column+1,o.start.column+2);if("]"==s)return o.end.column++,o}}),this.add("string_dquotes","insertion",function(e,t,n,r,o){if('"'==o||"'"==o){var i=o,a=n.getSelectionRange(),s=r.doc.getTextRange(a);if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:i+s+i,selection:!1};var l=n.getCursorPosition(),u=r.doc.getLine(l.row),c=u.substring(l.column-1,l.column);if("\\"==c)return null;for(var d,g=r.getTokens(a.start.row),h=0,p=-1,f=0;f<g.length&&(d=g[f],"string"==d.type?p=-1:0>p&&(p=d.value.indexOf(i)),!(d.value.length+h>a.start.column));f++)h+=g[f].value.length;if(!d||0>p&&"comment"!==d.type&&("string"!==d.type||a.start.column!==d.value.length+h-1&&d.value.lastIndexOf(i)===d.value.length-1)){if(!m.isSaneInsertion(n,r))return;return{text:i+i,selection:[1,1]}}if(d&&"string"===d.type){var x=u.substring(l.column,l.column+1);if(x==i)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==i||"'"==i)){var a=r.doc.getLine(o.start.row),s=a.substring(o.start.column+1,o.start.column+2);if(s==i)return o.end.column++,o}})};n.inherits(m,r),t.CstyleBehaviour=m}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var n=e("../range").Range,r=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var r=e.getLine(t),o=r.match(/^(\s*\})/);if(!o)return 0;var i=o[1].length,a=e.findMatchingBracket({row:t,column:i});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new n(t,0,t,i-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(r.prototype),t.MatchingBraceOutdent=r});