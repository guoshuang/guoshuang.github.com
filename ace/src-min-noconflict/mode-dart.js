ace.define("ace/mode/dart",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/tokenizer","ace/mode/dart_highlight_rules","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./c_cpp").Mode,r=(e("../tokenizer").Tokenizer,e("./dart_highlight_rules").DartHighlightRules),o=e("./folding/cstyle").FoldMode,s=function(){i.call(this),this.HighlightRules=r,this.foldingRules=new o};n.inherits(s,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"}}.call(s.prototype),t.Mode=s}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./text").Mode,r=(e("../tokenizer").Tokenizer,e("./c_cpp_highlight_rules").c_cppHighlightRules),o=e("./matching_brace_outdent").MatchingBraceOutdent,s=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),a=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=r,this.$outdent=new o,this.$behaviour=new s,this.foldingRules=new a};n.inherits(u,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),o=r.tokens,s=r.state;if(o.length&&"comment"==o[o.length-1].type)return i;if("start"==e){var a=t.match(/^.*[\{\(\[]\s*$/);a&&(i+=n)}else if("doc-start"==e){if("start"==s)return"";var a=t.match(/^\s*(\/?)\*/);a&&(a[1]&&(i+=" "),i+="* ")}return i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}}.call(u.prototype),t.Mode=u}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./doc_comment_highlight_rules").DocCommentHighlightRules,r=e("./text_highlight_rules").TextHighlightRules,o=t.cFunctions="\\s*\\bhypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len)))\\b",s=function(){var e="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",t="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template",n="const|extern|register|restrict|static|volatile|inline|private:|protected:|public:|friend|explicit|virtual|export|mutable|typename",r="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eqconst_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",s="NULL|true|false|TRUE|FALSE",a=this.$keywords=this.createKeywordMapper({"keyword.control":e,"storage.type":t,"storage.modifier":n,"keyword.operator":r,"variable.language":"this","constant.language":s},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},i.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef|if|ifdef|else|elif|ifndef)\\b",next:"directive"},{token:"keyword",regex:"(?:#\\s*endif)\\b"},{token:"support.function.C99.c",regex:o},{token:a,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(i,"doc-",[i.getEndRule("start")])};n.inherits(s,r),t.c_cppHighlightRules=s}),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};n.inherits(r,i),r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var n=e("../range").Range,i=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var i=e.getLine(t),r=i.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,s=e.findMatchingBracket({row:t,column:o});if(!s||s.row==t)return 0;var a=this.$getIndent(e.getLine(s.row));e.replace(new n(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){var n=e("../../lib/oop"),i=e("../behaviour").Behaviour,r=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),s=["text","paren.rparen","punctuation.operator"],a=["text","paren.rparen","punctuation.operator","comment"],u=0,l=-1,c="",d=0,h=-1,g="",m="",p=function(){p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),i=new r(t,n.row,n.column);if(!this.$matchTokenType(i.getCurrentToken()||"text",s)){var o=new r(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",s))return!1}return i.stepForward(),i.getCurrentTokenRow()!==n.row||this.$matchTokenType(i.getCurrentToken()||"text",a)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isAutoInsertedClosing(i,r,c[0])||(u=0),l=i.row,c=n+r.substr(i.column),u++},p.recordMaybeInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isMaybeInsertedClosing(i,r)||(d=0),h=i.row,g=r.substr(0,i.column)+n,m=r.substr(i.column),d++},p.isAutoInsertedClosing=function(e,t,n){return u>0&&e.row===l&&n===c[0]&&t.substr(e.column)===c},p.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===h&&t.substr(e.column)===m&&t.substr(0,e.column)==g},p.popAutoInsertedClosing=function(){c=c.substr(1),u--},p.clearMaybeInsertedClosing=function(){d=0,h=-1},this.add("braces","insertion",function(e,t,n,i,r){var s=n.getCursorPosition(),a=i.doc.getLine(s.row);if("{"==r){var u=n.getSelectionRange(),l=i.doc.getTextRange(u);if(""!==l&&"{"!==l&&n.getWrapBehavioursEnabled())return{text:"{"+l+"}",selection:!1};if(p.isSaneInsertion(n,i))return/[\]\}\)]/.test(a[s.column])?(p.recordAutoInsert(n,i,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,i,"{"),{text:"{",selection:[1,1]})}else if("}"==r){var c=a.substring(s.column,s.column+1);if("}"==c){var h=i.$findOpeningBracket("}",{column:s.column+1,row:s.row});if(null!==h&&p.isAutoInsertedClosing(s,a,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if("\n"==r||"\r\n"==r){var g="";p.isMaybeInsertedClosing(s,a)&&(g=o.stringRepeat("}",d),p.clearMaybeInsertedClosing());var c=a.substring(s.column,s.column+1);if("}"==c||""!==g){var m=i.findMatchingBracket({row:s.row,column:s.column},"}");if(!m)return null;var f=this.getNextLineIndent(e,a.substring(0,s.column),i.getTabString()),C=this.$getIndent(a);return{text:"\n"+f+"\n"+C+g,selection:[1,f.length,1,f.length]}}}}),this.add("braces","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"{"==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.end.column,r.end.column+1);if("}"==a)return r.end.column++,r;d--}}),this.add("parens","insertion",function(e,t,n,i,r){if("("==r){var o=n.getSelectionRange(),s=i.doc.getTextRange(o);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"("+s+")",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,")"),{text:"()",selection:[1,1]}}else if(")"==r){var a=n.getCursorPosition(),u=i.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if(")"==l){var c=i.$findOpeningBracket(")",{column:a.column+1,row:a.row});if(null!==c&&p.isAutoInsertedClosing(a,u,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"("==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if(")"==a)return r.end.column++,r}}),this.add("brackets","insertion",function(e,t,n,i,r){if("["==r){var o=n.getSelectionRange(),s=i.doc.getTextRange(o);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"["+s+"]",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,"]"),{text:"[]",selection:[1,1]}}else if("]"==r){var a=n.getCursorPosition(),u=i.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if("]"==l){var c=i.$findOpeningBracket("]",{column:a.column+1,row:a.row});if(null!==c&&p.isAutoInsertedClosing(a,u,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"["==o){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if("]"==a)return r.end.column++,r}}),this.add("string_dquotes","insertion",function(e,t,n,i,r){if('"'==r||"'"==r){var o=r,s=n.getSelectionRange(),a=i.doc.getTextRange(s);if(""!==a&&"'"!==a&&'"'!=a&&n.getWrapBehavioursEnabled())return{text:o+a+o,selection:!1};var u=n.getCursorPosition(),l=i.doc.getLine(u.row),c=l.substring(u.column-1,u.column);if("\\"==c)return null;for(var d,h=i.getTokens(s.start.row),g=0,m=-1,f=0;f<h.length&&(d=h[f],"string"==d.type?m=-1:0>m&&(m=d.value.indexOf(o)),!(d.value.length+g>s.start.column));f++)g+=h[f].value.length;if(!d||0>m&&"comment"!==d.type&&("string"!==d.type||s.start.column!==d.value.length+g-1&&d.value.lastIndexOf(o)===d.value.length-1)){if(!p.isSaneInsertion(n,i))return;return{text:o+o,selection:[1,1]}}if(d&&"string"===d.type){var C=l.substring(u.column,u.column+1);if(C==o)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==o||"'"==o)){var s=i.doc.getLine(r.start.row),a=s.substring(r.start.column+1,r.start.column+2);if(a==o)return r.end.column++,r}})};n.inherits(p,i),t.CstyleBehaviour=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){var n=e("../../lib/oop"),i=(e("../../range").Range,e("./fold_mode").FoldMode),r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(r,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var i=e.getLine(n),r=i.match(this.foldingStartMarker);if(r){var o=r.index;return r[1]?this.openingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o+r[0].length,1)}if("markbeginend"===t){var r=i.match(this.foldingStopMarker);if(r){var o=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o,-1)}}}}.call(r.prototype)}),ace.define("ace/mode/dart_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){var e="true|false|null",t="this|super",n="try|catch|finally|throw|break|case|continue|default|do|else|for|if|in|return|switch|while|new",i="abstract|class|extends|external|factory|implements|get|native|operator|set|typedef",r="static|final|const",o="void|bool|num|int|double|dynamic|var|String",s=this.createKeywordMapper({"constant.language.dart":e,"variable.language.dart":t,"keyword.control.dart":n,"keyword.declaration.dart":i,"storage.modifier.dart":r,"storage.type.primitive.dart":o},"identifier"),a={token:"string",regex:".+"};this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:["meta.preprocessor.script.dart"],regex:"^(#!.*)$"},{token:"keyword.other.import.dart",regex:"(?:\\b)(?:library|import|part|of)(?:\\b)"},{token:["keyword.other.import.dart","text"],regex:"(?:\\b)(prefix)(\\s*:)"},{regex:"\\bas\\b",token:"keyword.cast.dart"},{regex:"\\?|:",token:"keyword.control.ternary.dart"},{regex:"(?:\\b)(is\\!?)(?:\\b)",token:["keyword.operator.dart"]},{regex:"(<<|>>>?|~|\\^|\\||&)",token:["keyword.operator.bitwise.dart"]},{regex:"((?:&|\\^|\\||<<|>>>?)=)",token:["keyword.operator.assignment.bitwise.dart"]},{regex:"(===?|!==?|<=?|>=?)",token:["keyword.operator.comparison.dart"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.dart"]},{regex:"=",token:"keyword.operator.assignment.dart"},{token:"string",regex:"'''",next:"qdoc"},{token:"string",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{regex:"(\\-\\-|\\+\\+)",token:["keyword.operator.increment-decrement.dart"]},{regex:"(\\-|\\+|\\*|\\/|\\~\\/|%)",token:["keyword.operator.arithmetic.dart"]},{regex:"(!|&&|\\|\\|)",token:["keyword.operator.logical.dart"]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:s,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"start"},a],qqdoc:[{token:"string",regex:'.*?"""',next:"start"},a],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"start"},a],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"start"},a]}};n.inherits(r,i),t.DartHighlightRules=r});