!function(){var u,E,F;u=$("#circle_3d_thick"),E=$("#circle_3d_thick_slider"),E.slider({orientation:"vertical",value:-1*(75/.9-100),slide:function(E,F){return u.css({transform:"rotateX("+.9*(100-F.value)+"deg)"})}}),u.append('<div class="shadow"></div>'),u.css({transform:"rotateX(75deg)"}),F=$('<div class="stuff" style="position:absolute;font-size:30px;">老郭</div>'),u.append(F),F.css({"transform-origin":"50% 50%",transform:"rotateX(-90deg)  translateX(45px) translateY(-35px) translateZ(35px)","z-index":10,left:"0",top:"0"})}.call(this);