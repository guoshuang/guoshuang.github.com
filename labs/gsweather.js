var geoAPI="http://api.wunderground.com/api/9798383f44b1bc14/geolookup/q/autoip.json",html="",ajax_result1,ajax_result2;$.ajax({url:geoAPI,dataType:"jsonp",cache:!0,success:function(u){ajax_result1=u;var E=u.location;html+="<p>地点："+E.country_name+" "+E.city+' <a href="'+E.wuiurl+'">详细信息</a></p>',html+="<p>经度："+E.lon+" 维度："+E.lat+"</p>";var F="http://api.wunderground.com/api/9798383f44b1bc14/forecast/lang:CN/q/"+E.country_name+"/"+E.city+".json";$.ajax({url:F,dataType:"jsonp",cache:!0,success:function(u){ajax_result2=u;var E=u.forecast.txt_forecast.forecastday;html+="<ul>",$.each(E,function(u,E){html+='<li><div class="i"><img src="'+E.icon_url+'"></div><div class="t">'+E.title+'</div><div class="w">'+E.fcttext_metric.replace("C.","&#8451;")+"</div></li>"}),html+="</ul>",$("#gsWeather").html(html),$("#gs-weather-info").after('<p>第一次：</p><div class="code">'+JSON.stringify(ajax_result1,null,2)+'</div><p>第二次：</p><div class="code">'+JSON.stringify(ajax_result2,null,2)+"</div>")}})}});