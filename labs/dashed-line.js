var CP=window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype;CP&&CP.lineTo&&(CP.dashedLine=function(u,E,F,C,D){D||(D=[10,5]),0==s&&(s=.001);var B=D.length;this.moveTo(u,E);for(var A=F-u,t=C-E,e=t/A,i=Math.sqrt(A*A+t*t),n=0,l=!0;i>=.1;){var s=D[n++%B];s>i&&(s=i);var o=Math.sqrt(s*s/(1+e*e));0>A&&(o=-o),u+=o,E+=e*o,this[l?"lineTo":"moveTo"](u,E),i-=s,l=!l}});