var gsGradient={burn:[[246,233,24],[203,19,32]],grayPower:[[229,229,299],[26,26,26]],greenPower:[[245,248,221],[198,224,142],[64,175,94],[9,74,36]],heatmap:[[143,217,16],[246,233,24],[203,19,32]],thermometer:[[23,54,125],[121,190,213],[214,228,231],[242,146,133],[203,19,32]]},gsColors=["#3083c8","#a5c838","#c4473a","#34586b","#006600","#338888","#318cbe","#623800","#a5c838","#ff3333","#800080","#2b4e82"];jQuery(function(u){var E="",F=100;u.each(gsGradient,function(C,t){E+="<h3>"+C+"</h3>",E+='<ul class="'+C+'">';var D=t.length;for(u.each(t,function(u,F){E+='<li style="background:rgb('+F[0]+","+F[1]+","+F[2]+");width:"+100*(1/D)+'%">&nbsp;</li>'}),E+="</ul>",E+="<p>"+C+' - color + opacity</p><table width="100%">',a=0;4>a;a++){for(E+="<tr>",b=0;6>b;b++){var e=Math.floor(Math.random()*F),B=Math.floor(e*D/F),i="rgba("+t[B][0]+","+t[B][1]+","+t[B][2]+","+Math.random()+")";E+='<td style="background:'+i+';text-align:center;">'+e+"</td>"}E+="</tr>"}E+="</table>"}),E+="<h3>gsColors</h3><ul>",u.each(gsColors,function(u,F){E+='<li style="background:'+F+';padding:10px;color:rgba(255,255,255,.5)">'+F+"</li>"}),E+="</ul>",u("#gsGradient-demo").append(E)});