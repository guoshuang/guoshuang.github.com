ace.define("ace/mode/glsl",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/tokenizer","ace/mode/glsl_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./c_cpp").Mode,r=(e("../tokenizer").Tokenizer,e("./glsl_highlight_rules").glslHighlightRules),o=e("./matching_brace_outdent").MatchingBraceOutdent,a=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),s=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=r,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new s};n.inherits(l,i),t.Mode=l}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t){var n=e("../lib/oop"),i=e("./text").Mode,r=(e("../tokenizer").Tokenizer,e("./c_cpp_highlight_rules").c_cppHighlightRules),o=e("./matching_brace_outdent").MatchingBraceOutdent,a=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),s=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=r,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new s};n.inherits(l,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),o=r.tokens,a=r.state;if(o.length&&"comment"==o[o.length-1].type)return i;if("start"==e){var s=t.match(/^.*[\{\(\[]\s*$/);s&&(i+=n)}else if("doc-start"==e){if("start"==a)return"";var s=t.match(/^\s*(\/?)\*/);s&&(s[1]&&(i+=" "),i+="* ")}return i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}}.call(l.prototype),t.Mode=l}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./doc_comment_highlight_rules").DocCommentHighlightRules,r=e("./text_highlight_rules").TextHighlightRules,o=t.cFunctions="\\s*\\bhypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len)))\\b",a=function(){var e="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",t="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template",n="const|extern|register|restrict|static|volatile|inline|private:|protected:|public:|friend|explicit|virtual|export|mutable|typename",r="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eqconst_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",a="NULL|true|false|TRUE|FALSE",s=this.$keywords=this.createKeywordMapper({"keyword.control":e,"storage.type":t,"storage.modifier":n,"keyword.operator":r,"variable.language":"this","constant.language":a},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},i.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef|if|ifdef|else|elif|ifndef)\\b",next:"directive"},{token:"keyword",regex:"(?:#\\s*endif)\\b"},{token:"support.function.C99.c",regex:o},{token:s,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(i,"doc-",[i.getEndRule("start")])};n.inherits(a,r),t.c_cppHighlightRules=a}),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};n.inherits(r,i),r.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},r.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var n=e("../range").Range,i=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var i=e.getLine(t),r=i.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new n(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){var n=e("../../lib/oop"),i=e("../behaviour").Behaviour,r=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),a=["text","paren.rparen","punctuation.operator"],s=["text","paren.rparen","punctuation.operator","comment"],l=0,u=-1,c="",d=0,h=-1,g="",m="",p=function(){p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),i=new r(t,n.row,n.column);if(!this.$matchTokenType(i.getCurrentToken()||"text",a)){var o=new r(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",a))return!1}return i.stepForward(),i.getCurrentTokenRow()!==n.row||this.$matchTokenType(i.getCurrentToken()||"text",s)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isAutoInsertedClosing(i,r,c[0])||(l=0),u=i.row,c=n+r.substr(i.column),l++},p.recordMaybeInsert=function(e,t,n){var i=e.getCursorPosition(),r=t.doc.getLine(i.row);this.isMaybeInsertedClosing(i,r)||(d=0),h=i.row,g=r.substr(0,i.column)+n,m=r.substr(i.column),d++},p.isAutoInsertedClosing=function(e,t,n){return l>0&&e.row===u&&n===c[0]&&t.substr(e.column)===c},p.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===h&&t.substr(e.column)===m&&t.substr(0,e.column)==g},p.popAutoInsertedClosing=function(){c=c.substr(1),l--},p.clearMaybeInsertedClosing=function(){d=0,h=-1},this.add("braces","insertion",function(e,t,n,i,r){var a=n.getCursorPosition(),s=i.doc.getLine(a.row);if("{"==r){var l=n.getSelectionRange(),u=i.doc.getTextRange(l);if(""!==u&&"{"!==u&&n.getWrapBehavioursEnabled())return{text:"{"+u+"}",selection:!1};if(p.isSaneInsertion(n,i))return/[\]\}\)]/.test(s[a.column])?(p.recordAutoInsert(n,i,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(n,i,"{"),{text:"{",selection:[1,1]})}else if("}"==r){var c=s.substring(a.column,a.column+1);if("}"==c){var h=i.$findOpeningBracket("}",{column:a.column+1,row:a.row});if(null!==h&&p.isAutoInsertedClosing(a,s,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if("\n"==r||"\r\n"==r){var g="";p.isMaybeInsertedClosing(a,s)&&(g=o.stringRepeat("}",d),p.clearMaybeInsertedClosing());var c=s.substring(a.column,a.column+1);if("}"==c||""!==g){var m=i.findMatchingBracket({row:a.row,column:a.column},"}");if(!m)return null;var f=this.getNextLineIndent(e,s.substring(0,a.column),i.getTabString()),C=this.$getIndent(s);return{text:"\n"+f+"\n"+C+g,selection:[1,f.length,1,f.length]}}}}),this.add("braces","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"{"==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.end.column,r.end.column+1);if("}"==s)return r.end.column++,r;d--}}),this.add("parens","insertion",function(e,t,n,i,r){if("("==r){var o=n.getSelectionRange(),a=i.doc.getTextRange(o);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"("+a+")",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,")"),{text:"()",selection:[1,1]}}else if(")"==r){var s=n.getCursorPosition(),l=i.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if(")"==u){var c=i.$findOpeningBracket(")",{column:s.column+1,row:s.row});if(null!==c&&p.isAutoInsertedClosing(s,l,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"("==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if(")"==s)return r.end.column++,r}}),this.add("brackets","insertion",function(e,t,n,i,r){if("["==r){var o=n.getSelectionRange(),a=i.doc.getTextRange(o);if(""!==a&&n.getWrapBehavioursEnabled())return{text:"["+a+"]",selection:!1};if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,"]"),{text:"[]",selection:[1,1]}}else if("]"==r){var s=n.getCursorPosition(),l=i.doc.getLine(s.row),u=l.substring(s.column,s.column+1);if("]"==u){var c=i.$findOpeningBracket("]",{column:s.column+1,row:s.row});if(null!==c&&p.isAutoInsertedClosing(s,l,r))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&"["==o){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if("]"==s)return r.end.column++,r}}),this.add("string_dquotes","insertion",function(e,t,n,i,r){if('"'==r||"'"==r){var o=r,a=n.getSelectionRange(),s=i.doc.getTextRange(a);if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:o+s+o,selection:!1};var l=n.getCursorPosition(),u=i.doc.getLine(l.row),c=u.substring(l.column-1,l.column);if("\\"==c)return null;for(var d,h=i.getTokens(a.start.row),g=0,m=-1,f=0;f<h.length&&(d=h[f],"string"==d.type?m=-1:0>m&&(m=d.value.indexOf(o)),!(d.value.length+g>a.start.column));f++)g+=h[f].value.length;if(!d||0>m&&"comment"!==d.type&&("string"!==d.type||a.start.column!==d.value.length+g-1&&d.value.lastIndexOf(o)===d.value.length-1)){if(!p.isSaneInsertion(n,i))return;return{text:o+o,selection:[1,1]}}if(d&&"string"===d.type){var C=u.substring(l.column,l.column+1);if(C==o)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,i,r){var o=i.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==o||"'"==o)){var a=i.doc.getLine(r.start.row),s=a.substring(r.start.column+1,r.start.column+2);if(s==o)return r.end.column++,r}})};n.inherits(p,i),t.CstyleBehaviour=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){var n=e("../../lib/oop"),i=(e("../../range").Range,e("./fold_mode").FoldMode),r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(r,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var i=e.getLine(n),r=i.match(this.foldingStartMarker);if(r){var o=r.index;return r[1]?this.openingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o+r[0].length,1)}if("markbeginend"===t){var r=i.match(this.foldingStopMarker);if(r){var o=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,o):e.getCommentFoldRange(n,o,-1)}}}}.call(r.prototype)}),ace.define("ace/mode/glsl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/c_cpp_highlight_rules"],function(e,t){var n=e("../lib/oop"),i=e("./c_cpp_highlight_rules").c_cppHighlightRules,r=function(){var e="attribute|const|uniform|varying|break|continue|do|for|while|if|else|in|out|inout|float|int|void|bool|true|false|lowp|mediump|highp|precision|invariant|discard|return|mat2|mat3|mat4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler2D|samplerCube|struct",t="radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|dFdx|dFdy|fwidth|texture2D|texture2DProj|texture2DLod|texture2DProjLod|textureCube|textureCubeLod|gl_MaxVertexAttribs|gl_MaxVertexUniformVectors|gl_MaxVaryingVectors|gl_MaxVertexTextureImageUnits|gl_MaxCombinedTextureImageUnits|gl_MaxTextureImageUnits|gl_MaxFragmentUniformVectors|gl_MaxDrawBuffers|gl_DepthRangeParameters|gl_DepthRange|gl_Position|gl_PointSize|gl_FragCoord|gl_FrontFacing|gl_PointCoord|gl_FragColor|gl_FragData",n=this.createKeywordMapper({"variable.language":"this",keyword:e,"constant.language":t},"identifier");this.$rules=(new i).$rules,this.$rules.start.forEach(function(e){"function"==typeof e.token&&(e.token=n)})};n.inherits(r,i),t.glslHighlightRules=r});