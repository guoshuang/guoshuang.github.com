ace.define("ace/mode/coffee",["require","exports","module","ace/tokenizer","ace/mode/coffee_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/coffee","ace/range","ace/mode/text","ace/worker/worker_client","ace/lib/oop"],function(e,t){function i(){this.HighlightRules=n,this.$outdent=new r,this.foldingRules=new o}var n=(e("../tokenizer").Tokenizer,e("./coffee_highlight_rules").CoffeeHighlightRules),r=e("./matching_brace_outdent").MatchingBraceOutdent,o=e("./folding/coffee").FoldMode,s=e("../range").Range,a=e("./text").Mode,u=e("../worker/worker_client").WorkerClient,l=e("../lib/oop");l.inherits(i,a),function(){var e=/(?:[({[=:]|[-=]>|\b(?:else|switch|try|catch(?:\s*[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$/,t=/^(\s*)#/,i=/^\s*###(?!#)/,n=/^\s*/;this.getNextLineIndent=function(t,i,n){var r=this.$getIndent(i),o=this.getTokenizer().getLineTokens(i,t).tokens;return(!o.length||"comment"!==o[o.length-1].type)&&"start"===t&&e.test(i)&&(r+=n),r},this.toggleCommentLines=function(e,r,o,a){console.log("toggle");for(var u=new s(0,0,0,0),l=o;a>=l;++l){var c=r.getLine(l);i.test(c)||(c=t.test(c)?c.replace(t,"$1"):c.replace(n,"$&#"),u.end.row=u.start.row=l,u.end.column=c.length+1,r.replace(u,c))}},this.checkOutdent=function(e,t,i){return this.$outdent.checkOutdent(t,i)},this.autoOutdent=function(e,t,i){this.$outdent.autoOutdent(t,i)},this.createWorker=function(e){var t=new u(["ace"],"ace/mode/coffee_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("error",function(t){e.setAnnotations([t.data])}),t.on("ok",function(){e.clearAnnotations()}),t}}.call(i.prototype),t.Mode=i}),ace.define("ace/mode/coffee_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){function i(){var e="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",t="this|throw|then|try|typeof|super|switch|return|break|by|continue|catch|class|in|instanceof|is|isnt|if|else|extends|for|forown|finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|or|on|unless|until|and|yes",i="true|false|null|undefined|NaN|Infinity",n="case|const|default|function|var|void|with|enum|export|implements|interface|let|package|private|protected|public|static|yield|__hasProp|slice|bind|indexOf",r="Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|String|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray",o="Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|encodeURIComponent|decodeURI|decodeURIComponent|String|",s="window|arguments|prototype|document",a=this.createKeywordMapper({keyword:t,"constant.language":i,"invalid.illegal":n,"language.support.class":r,"language.support.function":o,"variable.language":s},"identifier"),u={token:["paren.lparen","variable.parameter","paren.rparen","text","storage.type"],regex:/(?:(\()((?:"[^")]*?"|'[^')]*?'|\/[^\/)]*?\/|[^()\"'\/])*?)(\))(\s*))?([\-=]>)/.source},l=/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)/;this.$rules={start:[{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"},{stateName:"qdoc",token:"string",regex:"'''",next:[{token:"string",regex:"'''",next:"start"},{token:"constant.language.escape",regex:l},{defaultToken:"string"}]},{stateName:"qqdoc",token:"string",regex:'"""',next:[{token:"string",regex:'"""',next:"start"},{token:"paren.string",regex:"#{",push:"start"},{token:"constant.language.escape",regex:l},{defaultToken:"string"}]},{stateName:"qstring",token:"string",regex:"'",next:[{token:"string",regex:"'",next:"start"},{token:"constant.language.escape",regex:l},{defaultToken:"string"}]},{stateName:"qqstring",token:"string.start",regex:'"',next:[{token:"string.end",regex:'"',next:"start"},{token:"paren.string",regex:"#{",push:"start"},{token:"constant.language.escape",regex:l},{defaultToken:"string"}]},{stateName:"js",token:"string",regex:"`",next:[{token:"string",regex:"`",next:"start"},{token:"constant.language.escape",regex:l},{defaultToken:"string"}]},{regex:"[{}]",onMatch:function(e,t,i){return this.next="","{"==e&&i.length?(i.unshift("start",t),"paren"):"}"==e&&i.length&&(i.shift(),this.next=i.shift(),-1!=this.next.indexOf("string"))?"paren.string":"paren"}},{token:"string.regex",regex:"///",next:"heregex"},{token:"string.regex",regex:/(?:\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)(?:[imgy]{0,4})(?!\w)/},{token:"comment",regex:"###(?!#)",next:"comment"},{token:"comment",regex:"#.*"},{token:["punctuation.operator","text","identifier"],regex:"(\\.)(\\s*)("+n+")"},{token:"punctuation.operator",regex:"\\."},{token:["keyword","text","language.support.class","text","keyword","text","language.support.class"],regex:"(class)(\\s+)("+e+")(?:(\\s+)(extends)(\\s+)("+e+"))?"},{token:["entity.name.function","text","keyword.operator","text"].concat(u.token),regex:"("+e+")(\\s*)([=:])(\\s*)"+u.regex},u,{token:"variable",regex:"@(?:"+e+")?"},{token:a,regex:e},{token:"punctuation.operator",regex:"\\,|\\."},{token:"storage.type",regex:"[\\-=]>"},{token:"keyword.operator",regex:"(?:[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])"},{token:"paren.lparen",regex:"[({[]"},{token:"paren.rparen",regex:"[\\]})]"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?///[imgy]{0,4}",next:"start"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],comment:[{token:"comment",regex:"###",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()}var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules;n.inherits(i,r),t.CoffeeHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){var i=e("../range").Range,n=function(){};!function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),r=n.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,s=e.findMatchingBracket({row:t,column:o});if(!s||s.row==t)return 0;var a=this.$getIndent(e.getLine(s.row));e.replace(new i(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(n.prototype),t.MatchingBraceOutdent=n}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t){var i=e("../../lib/oop"),n=e("./fold_mode").FoldMode,r=e("../../range").Range,o=t.FoldMode=function(){};i.inherits(o,n),function(){this.getFoldWidgetRange=function(e,t,i){var n=this.indentationBlock(e,i);if(n)return n;var o=/\S/,s=e.getLine(i),a=s.search(o);if(-1!=a&&"#"==s[a]){for(var u=s.length,l=e.getLength(),c=i,d=i;++i<l;){s=e.getLine(i);var h=s.search(o);if(-1!=h){if("#"!=s[h])break;d=i}}if(d>c){var g=e.getLine(d).length;return new r(c,u,d,g)}}},this.getFoldWidget=function(e,t,i){var n=e.getLine(i),r=n.search(/\S/),o=e.getLine(i+1),s=e.getLine(i-1),a=s.search(/\S/),u=o.search(/\S/);if(-1==r)return e.foldWidgets[i-1]=-1!=a&&u>a?"start":"","";if(-1==a){if(r==u&&"#"==n[r]&&"#"==o[r])return e.foldWidgets[i-1]="",e.foldWidgets[i+1]="","start"}else if(a==r&&"#"==n[r]&&"#"==s[r]&&-1==e.getLine(i-2).search(/\S/))return e.foldWidgets[i-1]="start",e.foldWidgets[i+1]="","";return e.foldWidgets[i-1]=-1!=a&&r>a?"start":"",u>r?"start":""}}.call(o.prototype)});