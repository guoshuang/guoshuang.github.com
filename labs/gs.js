var gsGradient={burn:[[246,233,24],[203,19,32]],grayPower:[[229,229,299],[26,26,26]],greenPower:[[245,248,221],[198,224,142],[64,175,94],[9,74,36]],heatmap:[[143,217,16],[246,233,24],[203,19,32]],thermometer:[[23,54,125],[121,190,213],[214,228,231],[242,146,133],[203,19,32]]},gs={getColor:function(u,E){var F=gsGradient[u][E];return"rgb("+F[0]+","+F[1]+","+F[2]+")"}},gsColors=["#3083c8","#a5c838","#c4473a","#34586b","#006600","#338888","#318cbe","#623800","#a5c838","#ff3333","#800080","#2b4e82"],gWordsArr=["不自见，故明；不自是，故彰；不自伐，故有功；不自矜；故长；夫唯不争，故天下莫能与之争","社会就是书，事实就是教材 - 卢梭","宝剑锋从磨砺出,梅花香自苦寒来 - 朱熹","不成熟的男人愿意为某件事情英勇死去，成熟的男人愿意为这样的事情卑贱地活着 - 麦田的守望者"];jQuery(function(u){u("pre").addClass("prettyprint"),prettyPrint(),u(gWords).text(gWordsArr[Math.floor(Math.random()*gWordsArr.length)]),moment.lang("zh-cn"),u(".pubTime").each(function(){var E=moment(u(this).text()).fromNow();u(this).text(E)}),u("article").on("mouseenter",function(){u(this).find(".date-wrapper").addClass("date-green")}).on("mouseleave",function(){u(this).find(".date-wrapper").removeClass("date-green")})});