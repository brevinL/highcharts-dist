/*
 Highcharts JS v6.1.0-modified (2018-05-16)

 3D features for Highcharts JS

 @license: www.highcharts.com/license
*/
(function(B){"object"===typeof module&&module.exports?module.exports=B:B(Highcharts)})(function(B){(function(b){var y=b.deg2rad,z=b.pick;b.perspective3D=function(b,v,n){v=0<n&&n<Number.POSITIVE_INFINITY?n/(b.z+v.z+n):1;return{x:b.x*v,y:b.y*v}};b.perspective=function(r,v,n){var x=v.options.chart.options3d,k=n?v.inverted:!1,w={x:v.plotWidth/2,y:v.plotHeight/2,z:x.depth/2,vd:z(x.depth,1)*z(x.viewDistance,0)},t=v.scale3d||1,m=y*x.beta*(k?-1:1),x=y*x.alpha*(k?-1:1),g=Math.cos(x),a=Math.cos(-m),f=Math.sin(x),
h=Math.sin(-m);n||(w.x+=v.plotLeft,w.y+=v.plotTop);return b.map(r,function(l){var m;m=(k?l.y:l.x)-w.x;var d=(k?l.x:l.y)-w.y;l=(l.z||0)-w.z;m={x:a*m-h*l,y:-f*h*m+g*d-a*f*l,z:g*h*m+f*d+g*a*l};d=b.perspective3D(m,w,w.vd);d.x=d.x*t+w.x;d.y=d.y*t+w.y;d.z=m.z*t+w.z;return{x:k?d.y:d.x,y:k?d.x:d.y,z:d.z}})};b.pointCameraDistance=function(b,v){var n=v.options.chart.options3d,x=v.plotWidth/2;v=v.plotHeight/2;n=z(n.depth,1)*z(n.viewDistance,0)+n.depth;return Math.sqrt(Math.pow(x-b.plotX,2)+Math.pow(v-b.plotY,
2)+Math.pow(n-b.plotZ,2))};b.shapeArea=function(b){var v=0,n,x;for(n=0;n<b.length;n++)x=(n+1)%b.length,v+=b[n].x*b[x].y-b[x].x*b[n].y;return v/2};b.shapeArea3d=function(r,v,n){return b.shapeArea(b.perspective(r,v,n))}})(B);(function(b){function y(a,d,c,C,b,f,h,m){var A=[],u=f-b;return f>b&&f-b>Math.PI/2+.0001?(A=A.concat(y(a,d,c,C,b,b+Math.PI/2,h,m)),A=A.concat(y(a,d,c,C,b+Math.PI/2,f,h,m))):f<b&&b-f>Math.PI/2+.0001?(A=A.concat(y(a,d,c,C,b,b-Math.PI/2,h,m)),A=A.concat(y(a,d,c,C,b-Math.PI/2,f,h,m))):
["C",a+c*Math.cos(b)-c*e*u*Math.sin(b)+h,d+C*Math.sin(b)+C*e*u*Math.cos(b)+m,a+c*Math.cos(f)+c*e*u*Math.sin(f)+h,d+C*Math.sin(f)-C*e*u*Math.cos(f)+m,a+c*Math.cos(f)+h,d+C*Math.sin(f)+m]}var z=Math.cos,r=Math.PI,v=Math.sin,n=b.animObject,x=b.charts,k=b.color,w=b.defined,t=b.deg2rad,m=b.each,g=b.extend,a=b.inArray,f=b.map,h=b.merge,l=b.perspective,q=b.pick,d=b.SVGElement,c=b.SVGRenderer,p=b.wrap,e=4*(Math.sqrt(2)-1)/3/(r/2);p(c.prototype,"init",function(a){a.apply(this,[].slice.call(arguments,1));m([{name:"darker",
slope:.6},{name:"brighter",slope:1.4}],function(a){this.definition({tagName:"filter",id:"highcharts-"+a.name,children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncR",type:"linear",slope:a.slope},{tagName:"feFuncG",type:"linear",slope:a.slope},{tagName:"feFuncB",type:"linear",slope:a.slope}]}]})},this)});c.prototype.toLinePath=function(a,d){var c=[];m(a,function(a){c.push("L",a.x,a.y)});a.length&&(c[0]="M",d&&c.push("Z"));return c};c.prototype.toLineSegments=function(a){var d=[],c=!0;
m(a,function(a){d.push(c?"M":"L",a.x,a.y);c=!c});return d};c.prototype.face3d=function(a){var d=this,c=this.createElement("path");c.vertexes=[];c.insidePlotArea=!1;c.enabled=!0;p(c,"attr",function(a,c){if("object"===typeof c&&(w(c.enabled)||w(c.vertexes)||w(c.insidePlotArea))){this.enabled=q(c.enabled,this.enabled);this.vertexes=q(c.vertexes,this.vertexes);this.insidePlotArea=q(c.insidePlotArea,this.insidePlotArea);delete c.enabled;delete c.vertexes;delete c.insidePlotArea;var A=l(this.vertexes,x[d.chartIndex],
this.insidePlotArea),C=d.toLinePath(A,!0),A=b.shapeArea(A),A=this.enabled&&0<A?"visible":"hidden";c.d=C;c.visibility=A}return a.apply(this,[].slice.call(arguments,1))});p(c,"animate",function(a,c){if("object"===typeof c&&(w(c.enabled)||w(c.vertexes)||w(c.insidePlotArea))){this.enabled=q(c.enabled,this.enabled);this.vertexes=q(c.vertexes,this.vertexes);this.insidePlotArea=q(c.insidePlotArea,this.insidePlotArea);delete c.enabled;delete c.vertexes;delete c.insidePlotArea;var A=l(this.vertexes,x[d.chartIndex],
this.insidePlotArea),C=d.toLinePath(A,!0),A=b.shapeArea(A),A=this.enabled&&0<A?"visible":"hidden";c.d=C;this.attr("visibility",A)}return a.apply(this,[].slice.call(arguments,1))});return c.attr(a)};c.prototype.polyhedron=function(a){var c=this,d=this.g(),b=d.destroy;d.faces=[];d.destroy=function(){for(var a=0;a<d.faces.length;a++)d.faces[a].destroy();return b.call(this)};p(d,"attr",function(a,b,C,A,f){if("object"===typeof b&&w(b.faces)){for(;d.faces.length>b.faces.length;)d.faces.pop().destroy();
for(;d.faces.length<b.faces.length;)d.faces.push(c.face3d().add(d));for(var e=0;e<b.faces.length;e++)d.faces[e].attr(b.faces[e],null,A,f);delete b.faces}return a.apply(this,[].slice.call(arguments,1))});p(d,"animate",function(a,b,C,A){if(b&&b.faces){for(;d.faces.length>b.faces.length;)d.faces.pop().destroy();for(;d.faces.length<b.faces.length;)d.faces.push(c.face3d().add(d));for(var f=0;f<b.faces.length;f++)d.faces[f].animate(b.faces[f],C,A);delete b.faces}return a.apply(this,[].slice.call(arguments,
1))});return d.attr(a)};c.prototype.cuboid=function(a){var c=this.g(),b=c.destroy;a=this.cuboidPath(a);c.front=this.path(a[0]).attr({"class":"highcharts-3d-front"}).add(c);c.top=this.path(a[1]).attr({"class":"highcharts-3d-top"}).add(c);c.side=this.path(a[2]).attr({"class":"highcharts-3d-side"}).add(c);c.fillSetter=function(a){this.front.attr({fill:a});this.top.attr({fill:k(a).brighten(.1).get()});this.side.attr({fill:k(a).brighten(-.1).get()});this.color=a;c.fill=a;return this};c.opacitySetter=function(a){this.front.attr({opacity:a});
this.top.attr({opacity:a});this.side.attr({opacity:a});return this};c.attr=function(a,c,b,f){if("string"===typeof a&&"undefined"!==typeof c){var A=a;a={};a[A]=c}if(a.shapeArgs||w(a.x))a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0]}),this.top.attr({d:a[1]}),this.side.attr({d:a[2]});else return d.prototype.attr.call(this,a,void 0,b,f);return this};c.animate=function(a,c,b){w(a.x)&&w(a.y)?(a=this.renderer.cuboidPath(a),this.front.animate({d:a[0]},c,b),this.top.animate({d:a[1]},c,
b),this.side.animate({d:a[2]},c,b),this.attr({zIndex:-a[3]})):a.opacity?(this.front.animate(a,c,b),this.top.animate(a,c,b),this.side.animate(a,c,b)):d.prototype.animate.call(this,a,c,b);return this};c.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return b.call(this)};c.attr({zIndex:-a[3]});return c};b.SVGRenderer.prototype.cuboidPath=function(a){function c(a){return k[a]}var d=a.x,e=a.y,h=a.z,m=a.height,u=a.width,g=a.depth,p=x[this.chartIndex],q,G,v=p.options.chart.options3d.alpha,
n=0,k=[{x:d,y:e,z:h},{x:d+u,y:e,z:h},{x:d+u,y:e+m,z:h},{x:d,y:e+m,z:h},{x:d,y:e+m,z:h+g},{x:d+u,y:e+m,z:h+g},{x:d+u,y:e,z:h+g},{x:d,y:e,z:h+g}],k=l(k,p,a.insidePlotArea);G=function(a,d){var e=[[],-1];a=f(a,c);d=f(d,c);0>b.shapeArea(a)?e=[a,0]:0>b.shapeArea(d)&&(e=[d,1]);return e};q=G([3,2,1,0],[7,6,5,4]);a=q[0];u=q[1];q=G([1,6,7,0],[4,5,2,3]);m=q[0];g=q[1];q=G([1,2,5,6],[0,7,4,3]);G=q[0];q=q[1];1===q?n+=1E4*(1E3-d):q||(n+=1E4*d);n+=10*(!g||0<=v&&180>=v||360>v&&357.5<v?p.plotHeight-e:10+e);1===u?n+=
100*h:u||(n+=100*(1E3-h));n=-Math.round(n);return[this.toLinePath(a,!0),this.toLinePath(m,!0),this.toLinePath(G,!0),n]};b.SVGRenderer.prototype.arc3d=function(c){function b(c){var d=!1,b={};c=h(c);for(var e in c)-1!==a(e,l)&&(b[e]=c[e],delete c[e],d=!0);return d?b:!1}var e=this.g(),f=e.renderer,l="x y r innerR start end".split(" ");c=h(c);c.alpha*=t;c.beta*=t;e.top=f.path();e.side1=f.path();e.side2=f.path();e.inn=f.path();e.out=f.path();e.onAdd=function(){var a=e.parentGroup,c=e.attr("class");e.top.add(e);
m(["out","inn","side1","side2"],function(d){e[d].attr({"class":c+" highcharts-3d-side"}).add(a)})};m(["addClass","removeClass"],function(a){e[a]=function(){var c=arguments;m(["top","out","inn","side1","side2"],function(d){e[d][a].apply(e[d],c)})}});e.setPaths=function(a){var c=e.renderer.arc3dPath(a),d=100*c.zTop;e.attribs=a;e.top.attr({d:c.top,zIndex:c.zTop});e.inn.attr({d:c.inn,zIndex:c.zInn});e.out.attr({d:c.out,zIndex:c.zOut});e.side1.attr({d:c.side1,zIndex:c.zSide1});e.side2.attr({d:c.side2,
zIndex:c.zSide2});e.zIndex=d;e.attr({zIndex:d});a.center&&(e.top.setRadialReference(a.center),delete a.center)};e.setPaths(c);e.fillSetter=function(a){var c=k(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:c});this.side2.attr({fill:c});this.inn.attr({fill:c});this.out.attr({fill:c});this.top.attr({fill:a});return this};m(["opacity","translateX","translateY","visibility"],function(a){e[a+"Setter"]=function(a,c){e[c]=a;m(["out","inn","side1","side2","top"],function(d){e[d].attr(c,a)})}});
p(e,"attr",function(a,c){var d;"object"===typeof c&&(d=b(c))&&(g(e.attribs,d),e.setPaths(e.attribs));return a.apply(this,[].slice.call(arguments,1))});p(e,"animate",function(a,c,d,f){var m,l=this.attribs,g;delete c.center;delete c.z;delete c.depth;delete c.alpha;delete c.beta;g=n(q(d,this.renderer.globalAnimation));g.duration&&(m=b(c),c.dummy=e.dummy++,m&&(g.step=function(a,c){function d(a){return l[a]+(q(m[a],l[a])-l[a])*c.pos}"dummy"===c.prop&&c.elem.setPaths(h(l,{x:d("x"),y:d("y"),r:d("r"),innerR:d("innerR"),
start:d("start"),end:d("end")}))}),d=g);return a.call(this,c,d,f)});e.dummy=0;e.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();d.prototype.destroy.call(this)};e.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};e.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();this.side2.show()};return e};c.prototype.arc3dPath=function(a){function c(a){a%=2*Math.PI;
a>Math.PI&&(a=2*Math.PI-a);return a}var d=a.x,e=a.y,b=a.start,f=a.end-.00001,h=a.r,m=a.innerR,l=a.depth,g=a.alpha,p=a.beta,q=Math.cos(b),u=Math.sin(b);a=Math.cos(f);var n=Math.sin(f),k=h*Math.cos(p),h=h*Math.cos(g),x=m*Math.cos(p),w=m*Math.cos(g),m=l*Math.sin(p),t=l*Math.sin(g),l=["M",d+k*q,e+h*u],l=l.concat(y(d,e,k,h,b,f,0,0)),l=l.concat(["L",d+x*a,e+w*n]),l=l.concat(y(d,e,x,w,f,b,0,0)),l=l.concat(["Z"]),B=0<p?Math.PI/2:0,p=0<g?0:Math.PI/2,B=b>-B?b:f>-B?-B:b,D=f<r-p?f:b<r-p?r-p:f,F=2*r-p,g=["M",
d+k*z(B),e+h*v(B)],g=g.concat(y(d,e,k,h,B,D,0,0));f>F&&b<F?(g=g.concat(["L",d+k*z(D)+m,e+h*v(D)+t]),g=g.concat(y(d,e,k,h,D,F,m,t)),g=g.concat(["L",d+k*z(F),e+h*v(F)]),g=g.concat(y(d,e,k,h,F,f,0,0)),g=g.concat(["L",d+k*z(f)+m,e+h*v(f)+t]),g=g.concat(y(d,e,k,h,f,F,m,t)),g=g.concat(["L",d+k*z(F),e+h*v(F)]),g=g.concat(y(d,e,k,h,F,D,0,0))):f>r-p&&b<r-p&&(g=g.concat(["L",d+k*Math.cos(D)+m,e+h*Math.sin(D)+t]),g=g.concat(y(d,e,k,h,D,f,m,t)),g=g.concat(["L",d+k*Math.cos(f),e+h*Math.sin(f)]),g=g.concat(y(d,
e,k,h,f,D,0,0)));g=g.concat(["L",d+k*Math.cos(D)+m,e+h*Math.sin(D)+t]);g=g.concat(y(d,e,k,h,D,B,m,t));g=g.concat(["Z"]);p=["M",d+x*q,e+w*u];p=p.concat(y(d,e,x,w,b,f,0,0));p=p.concat(["L",d+x*Math.cos(f)+m,e+w*Math.sin(f)+t]);p=p.concat(y(d,e,x,w,f,b,m,t));p=p.concat(["Z"]);q=["M",d+k*q,e+h*u,"L",d+k*q+m,e+h*u+t,"L",d+x*q+m,e+w*u+t,"L",d+x*q,e+w*u,"Z"];d=["M",d+k*a,e+h*n,"L",d+k*a+m,e+h*n+t,"L",d+x*a+m,e+w*n+t,"L",d+x*a,e+w*n,"Z"];n=Math.atan2(t,-m);e=Math.abs(f+n);a=Math.abs(b+n);b=Math.abs((b+f)/
2+n);e=c(e);a=c(a);b=c(b);b*=1E5;f=1E5*a;e*=1E5;return{top:l,zTop:1E5*Math.PI+1,out:g,zOut:Math.max(b,f,e),inn:p,zInn:Math.max(b,f,e),side1:q,zSide1:.99*e,side2:d,zSide2:.99*f}}})(B);(function(b){function y(b,g){var a=b.plotLeft,f=b.plotWidth+a,h=b.plotTop,m=b.plotHeight+h,q=a+b.plotWidth/2,d=h+b.plotHeight/2,c=Number.MAX_VALUE,p=-Number.MAX_VALUE,e=Number.MAX_VALUE,u=-Number.MAX_VALUE,E,k=1;E=[{x:a,y:h,z:0},{x:a,y:h,z:g}];v([0,1],function(a){E.push({x:f,y:E[a].y,z:E[a].z})});v([0,1,2,3],function(a){E.push({x:E[a].x,
y:m,z:E[a].z})});E=x(E,b,!1);v(E,function(a){c=Math.min(c,a.x);p=Math.max(p,a.x);e=Math.min(e,a.y);u=Math.max(u,a.y)});a>c&&(k=Math.min(k,1-Math.abs((a+q)/(c+q))%1));f<p&&(k=Math.min(k,(f-q)/(p-q)));h>e&&(k=0>e?Math.min(k,(h+d)/(-e+h+d)):Math.min(k,1-(h+d)/(e+d)%1));m<u&&(k=Math.min(k,Math.abs((m-d)/(u-d))));return k}var z=b.addEvent,r=b.Chart,v=b.each,n=b.merge,x=b.perspective,k=b.pick,w=b.wrap;r.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};
r.prototype.propsRequireDirtyBox.push("chart.options3d");r.prototype.propsRequireUpdateSeries.push("chart.options3d");z(r,"afterInit",function(){var b=this.options;this.is3d()&&v(b.series,function(g){"scatter"===(g.type||b.chart.type||b.chart.defaultSeriesType)&&(g.type="scatter3d")})});b.wrap(b.Chart.prototype,"isInsidePlot",function(b){return this.is3d()||b.apply(this,[].slice.call(arguments,1))});var t=b.getOptions();n(!0,t,{chart:{options3d:{enabled:!1,alpha:0,beta:0,depth:100,fitToPlot:!0,viewDistance:25,
axisLabelPosition:"default",frame:{visible:"default",size:1,bottom:{},top:{},left:{},right:{},back:{},front:{}}}}});z(r,"afterGetContainer",function(){this.renderer.definition({tagName:"style",textContent:".highcharts-3d-top{filter: url(#highcharts-brighter)}\n.highcharts-3d-side{filter: url(#highcharts-darker)}\n"})});w(r.prototype,"setClassName",function(b){b.apply(this,[].slice.call(arguments,1));this.is3d()&&(this.container.className+=" highcharts-3d-chart")});z(b.Chart,"afterSetChartSize",function(){var b=
this.options.chart.options3d;if(this.is3d()){var g=this.inverted,a=this.clipBox,f=this.margin;a[g?"y":"x"]=-(f[3]||0);a[g?"x":"y"]=-(f[0]||0);a[g?"height":"width"]=this.chartWidth+(f[3]||0)+(f[1]||0);a[g?"width":"height"]=this.chartHeight+(f[0]||0)+(f[2]||0);this.scale3d=1;!0===b.fitToPlot&&(this.scale3d=y(this,b.depth));this.frame3d=this.get3dFrame()}});z(r,"beforeRedraw",function(){this.is3d()&&(this.isDirtyBox=!0)});z(r,"beforeRender",function(){this.is3d()&&(this.frame3d=this.get3dFrame())});
w(r.prototype,"renderSeries",function(b){var g=this.series.length;if(this.is3d())for(;g--;)b=this.series[g],b.translate(),b.render();else b.call(this)});z(r,"afterDrawChartBox",function(){if(this.is3d()){var m=this.renderer,g=this.options.chart.options3d,a=this.get3dFrame(),f=this.plotLeft,h=this.plotLeft+this.plotWidth,l=this.plotTop,q=this.plotTop+this.plotHeight,g=g.depth,d=f-(a.left.visible?a.left.size:0),c=h+(a.right.visible?a.right.size:0),p=l-(a.top.visible?a.top.size:0),e=q+(a.bottom.visible?
a.bottom.size:0),u=0-(a.front.visible?a.front.size:0),k=g+(a.back.visible?a.back.size:0),n=this.hasRendered?"animate":"attr";this.frame3d=a;this.frameShapes||(this.frameShapes={bottom:m.polyhedron().add(),top:m.polyhedron().add(),left:m.polyhedron().add(),right:m.polyhedron().add(),back:m.polyhedron().add(),front:m.polyhedron().add()});this.frameShapes.bottom[n]({"class":"highcharts-3d-frame highcharts-3d-frame-bottom",zIndex:a.bottom.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.bottom.color).brighten(.1).get(),
vertexes:[{x:d,y:e,z:u},{x:c,y:e,z:u},{x:c,y:e,z:k},{x:d,y:e,z:k}],enabled:a.bottom.visible},{fill:b.color(a.bottom.color).brighten(.1).get(),vertexes:[{x:f,y:q,z:g},{x:h,y:q,z:g},{x:h,y:q,z:0},{x:f,y:q,z:0}],enabled:a.bottom.visible},{fill:b.color(a.bottom.color).brighten(-.1).get(),vertexes:[{x:d,y:e,z:u},{x:d,y:e,z:k},{x:f,y:q,z:g},{x:f,y:q,z:0}],enabled:a.bottom.visible&&!a.left.visible},{fill:b.color(a.bottom.color).brighten(-.1).get(),vertexes:[{x:c,y:e,z:k},{x:c,y:e,z:u},{x:h,y:q,z:0},{x:h,
y:q,z:g}],enabled:a.bottom.visible&&!a.right.visible},{fill:b.color(a.bottom.color).get(),vertexes:[{x:c,y:e,z:u},{x:d,y:e,z:u},{x:f,y:q,z:0},{x:h,y:q,z:0}],enabled:a.bottom.visible&&!a.front.visible},{fill:b.color(a.bottom.color).get(),vertexes:[{x:d,y:e,z:k},{x:c,y:e,z:k},{x:h,y:q,z:g},{x:f,y:q,z:g}],enabled:a.bottom.visible&&!a.back.visible}]});this.frameShapes.top[n]({"class":"highcharts-3d-frame highcharts-3d-frame-top",zIndex:a.top.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.top.color).brighten(.1).get(),
vertexes:[{x:d,y:p,z:k},{x:c,y:p,z:k},{x:c,y:p,z:u},{x:d,y:p,z:u}],enabled:a.top.visible},{fill:b.color(a.top.color).brighten(.1).get(),vertexes:[{x:f,y:l,z:0},{x:h,y:l,z:0},{x:h,y:l,z:g},{x:f,y:l,z:g}],enabled:a.top.visible},{fill:b.color(a.top.color).brighten(-.1).get(),vertexes:[{x:d,y:p,z:k},{x:d,y:p,z:u},{x:f,y:l,z:0},{x:f,y:l,z:g}],enabled:a.top.visible&&!a.left.visible},{fill:b.color(a.top.color).brighten(-.1).get(),vertexes:[{x:c,y:p,z:u},{x:c,y:p,z:k},{x:h,y:l,z:g},{x:h,y:l,z:0}],enabled:a.top.visible&&
!a.right.visible},{fill:b.color(a.top.color).get(),vertexes:[{x:d,y:p,z:u},{x:c,y:p,z:u},{x:h,y:l,z:0},{x:f,y:l,z:0}],enabled:a.top.visible&&!a.front.visible},{fill:b.color(a.top.color).get(),vertexes:[{x:c,y:p,z:k},{x:d,y:p,z:k},{x:f,y:l,z:g},{x:h,y:l,z:g}],enabled:a.top.visible&&!a.back.visible}]});this.frameShapes.left[n]({"class":"highcharts-3d-frame highcharts-3d-frame-left",zIndex:a.left.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.left.color).brighten(.1).get(),vertexes:[{x:d,y:e,z:u},{x:f,
y:q,z:0},{x:f,y:q,z:g},{x:d,y:e,z:k}],enabled:a.left.visible&&!a.bottom.visible},{fill:b.color(a.left.color).brighten(.1).get(),vertexes:[{x:d,y:p,z:k},{x:f,y:l,z:g},{x:f,y:l,z:0},{x:d,y:p,z:u}],enabled:a.left.visible&&!a.top.visible},{fill:b.color(a.left.color).brighten(-.1).get(),vertexes:[{x:d,y:e,z:k},{x:d,y:p,z:k},{x:d,y:p,z:u},{x:d,y:e,z:u}],enabled:a.left.visible},{fill:b.color(a.left.color).brighten(-.1).get(),vertexes:[{x:f,y:l,z:g},{x:f,y:q,z:g},{x:f,y:q,z:0},{x:f,y:l,z:0}],enabled:a.left.visible},
{fill:b.color(a.left.color).get(),vertexes:[{x:d,y:e,z:u},{x:d,y:p,z:u},{x:f,y:l,z:0},{x:f,y:q,z:0}],enabled:a.left.visible&&!a.front.visible},{fill:b.color(a.left.color).get(),vertexes:[{x:d,y:p,z:k},{x:d,y:e,z:k},{x:f,y:q,z:g},{x:f,y:l,z:g}],enabled:a.left.visible&&!a.back.visible}]});this.frameShapes.right[n]({"class":"highcharts-3d-frame highcharts-3d-frame-right",zIndex:a.right.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.right.color).brighten(.1).get(),vertexes:[{x:c,y:e,z:k},{x:h,y:q,z:g},{x:h,
y:q,z:0},{x:c,y:e,z:u}],enabled:a.right.visible&&!a.bottom.visible},{fill:b.color(a.right.color).brighten(.1).get(),vertexes:[{x:c,y:p,z:u},{x:h,y:l,z:0},{x:h,y:l,z:g},{x:c,y:p,z:k}],enabled:a.right.visible&&!a.top.visible},{fill:b.color(a.right.color).brighten(-.1).get(),vertexes:[{x:h,y:l,z:0},{x:h,y:q,z:0},{x:h,y:q,z:g},{x:h,y:l,z:g}],enabled:a.right.visible},{fill:b.color(a.right.color).brighten(-.1).get(),vertexes:[{x:c,y:e,z:u},{x:c,y:p,z:u},{x:c,y:p,z:k},{x:c,y:e,z:k}],enabled:a.right.visible},
{fill:b.color(a.right.color).get(),vertexes:[{x:c,y:p,z:u},{x:c,y:e,z:u},{x:h,y:q,z:0},{x:h,y:l,z:0}],enabled:a.right.visible&&!a.front.visible},{fill:b.color(a.right.color).get(),vertexes:[{x:c,y:e,z:k},{x:c,y:p,z:k},{x:h,y:l,z:g},{x:h,y:q,z:g}],enabled:a.right.visible&&!a.back.visible}]});this.frameShapes.back[n]({"class":"highcharts-3d-frame highcharts-3d-frame-back",zIndex:a.back.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.back.color).brighten(.1).get(),vertexes:[{x:c,y:e,z:k},{x:d,y:e,z:k},{x:f,
y:q,z:g},{x:h,y:q,z:g}],enabled:a.back.visible&&!a.bottom.visible},{fill:b.color(a.back.color).brighten(.1).get(),vertexes:[{x:d,y:p,z:k},{x:c,y:p,z:k},{x:h,y:l,z:g},{x:f,y:l,z:g}],enabled:a.back.visible&&!a.top.visible},{fill:b.color(a.back.color).brighten(-.1).get(),vertexes:[{x:d,y:e,z:k},{x:d,y:p,z:k},{x:f,y:l,z:g},{x:f,y:q,z:g}],enabled:a.back.visible&&!a.left.visible},{fill:b.color(a.back.color).brighten(-.1).get(),vertexes:[{x:c,y:p,z:k},{x:c,y:e,z:k},{x:h,y:q,z:g},{x:h,y:l,z:g}],enabled:a.back.visible&&
!a.right.visible},{fill:b.color(a.back.color).get(),vertexes:[{x:f,y:l,z:g},{x:h,y:l,z:g},{x:h,y:q,z:g},{x:f,y:q,z:g}],enabled:a.back.visible},{fill:b.color(a.back.color).get(),vertexes:[{x:d,y:e,z:k},{x:c,y:e,z:k},{x:c,y:p,z:k},{x:d,y:p,z:k}],enabled:a.back.visible}]});this.frameShapes.front[n]({"class":"highcharts-3d-frame highcharts-3d-frame-front",zIndex:a.front.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.front.color).brighten(.1).get(),vertexes:[{x:d,y:e,z:u},{x:c,y:e,z:u},{x:h,y:q,z:0},{x:f,
y:q,z:0}],enabled:a.front.visible&&!a.bottom.visible},{fill:b.color(a.front.color).brighten(.1).get(),vertexes:[{x:c,y:p,z:u},{x:d,y:p,z:u},{x:f,y:l,z:0},{x:h,y:l,z:0}],enabled:a.front.visible&&!a.top.visible},{fill:b.color(a.front.color).brighten(-.1).get(),vertexes:[{x:d,y:p,z:u},{x:d,y:e,z:u},{x:f,y:q,z:0},{x:f,y:l,z:0}],enabled:a.front.visible&&!a.left.visible},{fill:b.color(a.front.color).brighten(-.1).get(),vertexes:[{x:c,y:e,z:u},{x:c,y:p,z:u},{x:h,y:l,z:0},{x:h,y:q,z:0}],enabled:a.front.visible&&
!a.right.visible},{fill:b.color(a.front.color).get(),vertexes:[{x:h,y:l,z:0},{x:f,y:l,z:0},{x:f,y:q,z:0},{x:h,y:q,z:0}],enabled:a.front.visible},{fill:b.color(a.front.color).get(),vertexes:[{x:c,y:e,z:u},{x:d,y:e,z:u},{x:d,y:p,z:u},{x:c,y:p,z:u}],enabled:a.front.visible}]})}});r.prototype.retrieveStacks=function(b){var g=this.series,a={},f,h=1;v(this.series,function(m){f=k(m.options.stack,b?0:g.length-1-m.index);a[f]?a[f].series.push(m):(a[f]={series:[m],position:h},h++)});a.totalStacks=h+1;return a};
r.prototype.get3dFrame=function(){var m=this,g=m.options.chart.options3d,a=g.frame,f=m.plotLeft,h=m.plotLeft+m.plotWidth,l=m.plotTop,q=m.plotTop+m.plotHeight,d=g.depth,c=function(a){a=b.shapeArea3d(a,m);return.5<a?1:-.5>a?-1:0},p=c([{x:f,y:q,z:d},{x:h,y:q,z:d},{x:h,y:q,z:0},{x:f,y:q,z:0}]),e=c([{x:f,y:l,z:0},{x:h,y:l,z:0},{x:h,y:l,z:d},{x:f,y:l,z:d}]),u=c([{x:f,y:l,z:0},{x:f,y:l,z:d},{x:f,y:q,z:d},{x:f,y:q,z:0}]),n=c([{x:h,y:l,z:d},{x:h,y:l,z:0},{x:h,y:q,z:0},{x:h,y:q,z:d}]),w=c([{x:f,y:q,z:0},{x:h,
y:q,z:0},{x:h,y:l,z:0},{x:f,y:l,z:0}]),c=c([{x:f,y:l,z:d},{x:h,y:l,z:d},{x:h,y:q,z:d},{x:f,y:q,z:d}]),t=!1,r=!1,y=!1,z=!1;v([].concat(m.xAxis,m.yAxis,m.zAxis),function(a){a&&(a.horiz?a.opposite?r=!0:t=!0:a.opposite?z=!0:y=!0)});var B=function(a,c,d){for(var b=["size","color","visible"],e={},f=0;f<b.length;f++)for(var h=b[f],g=0;g<a.length;g++)if("object"===typeof a[g]){var m=a[g][h];if(void 0!==m&&null!==m){e[h]=m;break}}a=d;!0===e.visible||!1===e.visible?a=e.visible:"auto"===e.visible&&(a=0<c);return{size:k(e.size,
1),color:k(e.color,"none"),frontFacing:0<c,visible:a}},a={bottom:B([a.bottom,a.top,a],p,t),top:B([a.top,a.bottom,a],e,r),left:B([a.left,a.right,a.side,a],u,y),right:B([a.right,a.left,a.side,a],n,z),back:B([a.back,a.front,a],c,!0),front:B([a.front,a.back,a],w,!1)};"auto"===g.axisLabelPosition?(n=function(a,c){return a.visible!==c.visible||a.visible&&c.visible&&a.frontFacing!==c.frontFacing},g=[],n(a.left,a.front)&&g.push({y:(l+q)/2,x:f,z:0,xDir:{x:1,y:0,z:0}}),n(a.left,a.back)&&g.push({y:(l+q)/2,x:f,
z:d,xDir:{x:0,y:0,z:-1}}),n(a.right,a.front)&&g.push({y:(l+q)/2,x:h,z:0,xDir:{x:0,y:0,z:1}}),n(a.right,a.back)&&g.push({y:(l+q)/2,x:h,z:d,xDir:{x:-1,y:0,z:0}}),p=[],n(a.bottom,a.front)&&p.push({x:(f+h)/2,y:q,z:0,xDir:{x:1,y:0,z:0}}),n(a.bottom,a.back)&&p.push({x:(f+h)/2,y:q,z:d,xDir:{x:-1,y:0,z:0}}),e=[],n(a.top,a.front)&&e.push({x:(f+h)/2,y:l,z:0,xDir:{x:1,y:0,z:0}}),n(a.top,a.back)&&e.push({x:(f+h)/2,y:l,z:d,xDir:{x:-1,y:0,z:0}}),u=[],n(a.bottom,a.left)&&u.push({z:(0+d)/2,y:q,x:f,xDir:{x:0,y:0,
z:-1}}),n(a.bottom,a.right)&&u.push({z:(0+d)/2,y:q,x:h,xDir:{x:0,y:0,z:1}}),q=[],n(a.top,a.left)&&q.push({z:(0+d)/2,y:l,x:f,xDir:{x:0,y:0,z:-1}}),n(a.top,a.right)&&q.push({z:(0+d)/2,y:l,x:h,xDir:{x:0,y:0,z:1}}),f=function(a,c,d){if(0===a.length)return null;if(1===a.length)return a[0];for(var b=0,e=x(a,m,!1),f=1;f<e.length;f++)d*e[f][c]>d*e[b][c]?b=f:d*e[f][c]===d*e[b][c]&&e[f].z<e[b].z&&(b=f);return a[b]},a.axes={y:{left:f(g,"x",-1),right:f(g,"x",1)},x:{top:f(e,"y",-1),bottom:f(p,"y",1)},z:{top:f(q,
"y",-1),bottom:f(u,"y",1)}}):a.axes={y:{left:{x:f,z:0,xDir:{x:1,y:0,z:0}},right:{x:h,z:0,xDir:{x:0,y:0,z:1}}},x:{top:{y:l,z:0,xDir:{x:1,y:0,z:0}},bottom:{y:q,z:0,xDir:{x:1,y:0,z:0}}},z:{top:{x:y?h:f,y:l,xDir:y?{x:0,y:0,z:1}:{x:0,y:0,z:-1}},bottom:{x:y?h:f,y:q,xDir:y?{x:0,y:0,z:1}:{x:0,y:0,z:-1}}}};return a};b.Fx.prototype.matrixSetter=function(){var m;if(1>this.pos&&(b.isArray(this.start)||b.isArray(this.end))){var g=this.start||[1,0,0,1,0,0],a=this.end||[1,0,0,1,0,0];m=[];for(var f=0;6>f;f++)m.push(this.pos*
a[f]+(1-this.pos)*g[f])}else m=this.end;this.elem.attr(this.prop,m,null,!0)}})(B);(function(b){function y(d,c,b){if(!d.chart.is3d()||"colorAxis"===d.coll)return c;var e=d.chart,h=x*e.options.chart.options3d.alpha,g=x*e.options.chart.options3d.beta,k=a(b&&d.options.title.position3d,d.options.labels.position3d);b=a(b&&d.options.title.skew3d,d.options.labels.skew3d);var p=e.frame3d,l=e.plotLeft,q=e.plotWidth+l,n=e.plotTop,v=e.plotHeight+n,e=!1,t=0,w=0,r={x:0,y:1,z:0};c=d.swapZ({x:c.x,y:c.y,z:0});if(d.isZAxis)if(d.opposite){if(null===
p.axes.z.top)return{};w=c.y-n;c.x=p.axes.z.top.x;c.y=p.axes.z.top.y;l=p.axes.z.top.xDir;e=!p.top.frontFacing}else{if(null===p.axes.z.bottom)return{};w=c.y-v;c.x=p.axes.z.bottom.x;c.y=p.axes.z.bottom.y;l=p.axes.z.bottom.xDir;e=!p.bottom.frontFacing}else if(d.horiz)if(d.opposite){if(null===p.axes.x.top)return{};w=c.y-n;c.y=p.axes.x.top.y;c.z=p.axes.x.top.z;l=p.axes.x.top.xDir;e=!p.top.frontFacing}else{if(null===p.axes.x.bottom)return{};w=c.y-v;c.y=p.axes.x.bottom.y;c.z=p.axes.x.bottom.z;l=p.axes.x.bottom.xDir;
e=!p.bottom.frontFacing}else if(d.opposite){if(null===p.axes.y.right)return{};t=c.x-q;c.x=p.axes.y.right.x;c.z=p.axes.y.right.z;l=p.axes.y.right.xDir;l={x:l.z,y:l.y,z:-l.x}}else{if(null===p.axes.y.left)return{};t=c.x-l;c.x=p.axes.y.left.x;c.z=p.axes.y.left.z;l=p.axes.y.left.xDir}"chart"!==k&&("flap"===k?d.horiz?(g=Math.sin(h),h=Math.cos(h),d.opposite&&(g=-g),e&&(g=-g),r={x:l.z*g,y:h,z:-l.x*g}):l={x:Math.cos(g),y:0,z:Math.sin(g)}:"ortho"===k?d.horiz?(r=Math.cos(h),k=Math.sin(g)*r,h=-Math.sin(h),g=
-r*Math.cos(g),r={x:l.y*g-l.z*h,y:l.z*k-l.x*g,z:l.x*h-l.y*k},h=1/Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z),e&&(h=-h),r={x:h*r.x,y:h*r.y,z:h*r.z}):l={x:Math.cos(g),y:0,z:Math.sin(g)}:d.horiz?r={x:Math.sin(g)*Math.sin(h),y:Math.cos(h),z:-Math.cos(g)*Math.sin(h)}:l={x:Math.cos(g),y:0,z:Math.sin(g)});c.x+=t*l.x+w*r.x;c.y+=t*l.y+w*r.y;c.z+=t*l.z+w*r.z;e=m([c],d.chart)[0];b?(0>f(m([c,{x:c.x+l.x,y:c.y+l.y,z:c.z+l.z},{x:c.x+r.x,y:c.y+r.y,z:c.z+r.z}],d.chart))&&(l={x:-l.x,y:-l.y,z:-l.z}),d=m([{x:c.x,y:c.y,z:c.z},
{x:c.x+l.x,y:c.y+l.y,z:c.z+l.z},{x:c.x+r.x,y:c.y+r.y,z:c.z+r.z}],d.chart),e.matrix=[d[1].x-d[0].x,d[1].y-d[0].y,d[2].x-d[0].x,d[2].y-d[0].y,e.x,e.y],e.matrix[4]-=e.x*e.matrix[0]+e.y*e.matrix[2],e.matrix[5]-=e.x*e.matrix[1]+e.y*e.matrix[3]):e.matrix=null;return e}var z,r=b.addEvent,v=b.Axis,n=b.Chart,x=b.deg2rad,k=b.each,w=b.extend,t=b.merge,m=b.perspective,g=b.perspective3D,a=b.pick,f=b.shapeArea,h=b.splat,l=b.Tick,q=b.wrap;t(!0,v.prototype.defaultOptions,{labels:{position3d:"offset",skew3d:!1},title:{position3d:null,
skew3d:null}});r(v,"afterSetOptions",function(){var d;this.chart.is3d&&this.chart.is3d()&&"colorAxis"!==this.coll&&(d=this.options,d.tickWidth=a(d.tickWidth,0),d.gridLineWidth=a(d.gridLineWidth,1))});q(v.prototype,"getPlotLinePath",function(a){var c=a.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d()||"colorAxis"===this.coll||null===c)return c;var d=this.chart,b=d.options.chart.options3d,b=this.isZAxis?d.plotWidth:b.depth,d=d.frame3d,c=[this.swapZ({x:c[1],y:c[2],z:0}),this.swapZ({x:c[1],
y:c[2],z:b}),this.swapZ({x:c[4],y:c[5],z:0}),this.swapZ({x:c[4],y:c[5],z:b})],b=[];this.horiz?(this.isZAxis?(d.left.visible&&b.push(c[0],c[2]),d.right.visible&&b.push(c[1],c[3])):(d.front.visible&&b.push(c[0],c[2]),d.back.visible&&b.push(c[1],c[3])),d.top.visible&&b.push(c[0],c[1]),d.bottom.visible&&b.push(c[2],c[3])):(d.front.visible&&b.push(c[0],c[2]),d.back.visible&&b.push(c[1],c[3]),d.left.visible&&b.push(c[0],c[1]),d.right.visible&&b.push(c[2],c[3]));b=m(b,this.chart,!1);return this.chart.renderer.toLineSegments(b)});
q(v.prototype,"getLinePath",function(a){return this.chart.is3d()&&"colorAxis"!==this.coll?[]:a.apply(this,[].slice.call(arguments,1))});q(v.prototype,"getPlotBandPath",function(a){if(!this.chart.is3d()||"colorAxis"===this.coll)return a.apply(this,[].slice.call(arguments,1));var c=arguments,d=c[2],b=[],c=this.getPlotLinePath(c[1]),d=this.getPlotLinePath(d);if(c&&d)for(var f=0;f<c.length;f+=6)b.push("M",c[f+1],c[f+2],"L",c[f+4],c[f+5],"L",d[f+4],d[f+5],"L",d[f+1],d[f+2],"Z");return b});q(l.prototype,
"getMarkPath",function(a){var c=a.apply(this,[].slice.call(arguments,1)),c=[y(this.axis,{x:c[1],y:c[2],z:0}),y(this.axis,{x:c[4],y:c[5],z:0})];return this.axis.chart.renderer.toLineSegments(c)});r(l,"afterGetLabelPosition",function(a){w(a.pos,y(this.axis,a.pos))});q(v.prototype,"getTitlePosition",function(a){var c=a.apply(this,[].slice.call(arguments,1));return y(this,c,!0)});r(v,"drawCrosshair",function(a){this.chart.is3d()&&"colorAxis"!==this.coll&&a.point&&(a.point.crosshairPos=this.isXAxis?a.point.axisXpos:
this.len-a.point.axisYpos)});r(v,"destroy",function(){k(["backFrame","bottomFrame","sideFrame"],function(a){this[a]&&(this[a]=this[a].destroy())},this)});v.prototype.swapZ=function(a,c){return this.isZAxis?(c=c?0:this.chart.plotLeft,{x:c+a.z,y:a.y,z:a.x-c}):a};z=b.ZAxis=function(){this.init.apply(this,arguments)};w(z.prototype,v.prototype);w(z.prototype,{isZAxis:!0,setOptions:function(a){a=t({offset:0,lineWidth:0},a);v.prototype.setOptions.call(this,a);this.coll="zAxis"},setAxisSize:function(){v.prototype.setAxisSize.call(this);
this.width=this.len=this.chart.options.chart.options3d.depth;this.right=this.chart.chartWidth-this.width-this.left},getSeriesExtremes:function(){var d=this,c=d.chart;d.hasVisibleSeries=!1;d.dataMin=d.dataMax=d.ignoreMinPadding=d.ignoreMaxPadding=null;d.buildStacks&&d.buildStacks();k(d.series,function(b){if(b.visible||!c.options.chart.ignoreHiddenSeries)d.hasVisibleSeries=!0,b=b.zData,b.length&&(d.dataMin=Math.min(a(d.dataMin,b[0]),Math.min.apply(null,b)),d.dataMax=Math.max(a(d.dataMax,b[0]),Math.max.apply(null,
b)))})}});r(n,"afterGetAxes",function(){var a=this,c=this.options,c=c.zAxis=h(c.zAxis||{});a.is3d()&&(this.zAxis=[],k(c,function(c,d){c.index=d;c.isX=!0;(new z(a,c)).setScale()}))});q(v.prototype,"getSlotWidth",function(d,c){if(this.chart.is3d()&&c&&c.label&&this.categories){var b=this.chart,e=this.ticks,f=this.gridGroup.element.getBBox(),h=b.options.chart.options3d,b={x:b.plotWidth/2,y:b.plotHeight/2,z:h.depth/2,vd:a(h.depth,1)*a(h.viewDistance,0)},l,h=c.pos,e=e[h-1];0!==h&&e&&(l=g({x:e.label.xy.x,
y:e.label.xy.y,z:null},b,b.vd));e={x:c.label.xy.x,y:c.label.xy.y,z:null};e=g(e,b,b.vd);return l?e.x-l.x:f.x-e.x}return d.apply(this,[].slice.call(arguments,1))})})(B);(function(b){var y=b.addEvent,z=b.perspective,r=b.pick;y(b.Series,"afterTranslate",function(){this.chart.is3d()&&this.translate3dPoints()});b.Series.prototype.translate3dPoints=function(){var b=this.chart,n=r(this.zAxis,b.options.zAxis[0]),x=[],k,w,t;for(t=0;t<this.data.length;t++)k=this.data[t],n&&n.translate?(w=n.isLog&&n.val2lin?
n.val2lin(k.z):k.z,k.plotZ=n.translate(w),k.isInside=k.isInside?w>=n.min&&w<=n.max:!1):k.plotZ=0,k.axisXpos=k.plotX,k.axisYpos=k.plotY,k.axisZpos=k.plotZ,x.push({x:k.plotX,y:k.plotY,z:k.plotZ});b=z(x,b,!0);for(t=0;t<this.data.length;t++)k=this.data[t],n=b[t],k.plotX=n.x,k.plotY=n.y,k.plotZ=n.z}})(B);(function(b){var y=b.addEvent,z=b.each,r=b.perspective,v=b.pick,n=b.Series,x=b.seriesTypes,k=b.inArray,w=b.svg,t=b.wrap;t(x.column.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,
1));this.chart.is3d()&&this.translate3dShapes()});t(b.Series.prototype,"alignDataLabel",function(b){arguments[3].outside3dPlot=arguments[1].outside3dPlot;b.apply(this,[].slice.call(arguments,1))});t(b.Series.prototype,"justifyDataLabel",function(b){return arguments[2].outside3dPlot?!1:b.apply(this,[].slice.call(arguments,1))});x.column.prototype.translate3dPoints=function(){};x.column.prototype.translate3dShapes=function(){var b=this,g=b.chart,a=b.options,f=a.depth||25,h=(a.stacking?a.stack||0:b.index)*
(f+(a.groupZPadding||1)),l=b.borderWidth%2?.5:0;g.inverted&&!b.yAxis.reversed&&(l*=-1);!1!==a.grouping&&(h=0);h+=a.groupZPadding||1;z(b.data,function(a){a.outside3dPlot=null;if(null!==a.y){var d=a.shapeArgs,c=a.tooltipPos,k;z([["x","width"],["y","height"]],function(c){k=d[c[0]]-l;0>k&&(d[c[1]]+=d[c[0]]+l,d[c[0]]=-l,k=0);k+d[c[1]]>b[c[0]+"Axis"].len&&0!==d[c[1]]&&(d[c[1]]=b[c[0]+"Axis"].len-d[c[0]]);if(0!==d[c[1]]&&(d[c[0]]>=b[c[0]+"Axis"].len||d[c[0]]+d[c[1]]<=l)){for(var e in d)d[e]=0;a.outside3dPlot=
!0}});a.shapeType="cuboid";d.z=h;d.depth=f;d.insidePlotArea=!0;c=r([{x:c[0],y:c[1],z:h}],g,!0)[0];a.tooltipPos=[c.x,c.y]}});b.z=h};t(x.column.prototype,"animate",function(b){if(this.chart.is3d()){var g=arguments[1],a=this.yAxis,f=this,h=this.yAxis.reversed;w&&(g?z(f.data,function(b){null!==b.y&&(b.height=b.shapeArgs.height,b.shapey=b.shapeArgs.y,b.shapeArgs.height=1,h||(b.shapeArgs.y=b.stackY?b.plotY+a.translate(b.stackY):b.plotY+(b.negative?-b.height:b.height)))}):(z(f.data,function(a){null!==a.y&&
(a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,f.options.animation))}),this.drawDataLabels(),f.animate=null))}else b.apply(this,[].slice.call(arguments,1))});t(x.column.prototype,"plotGroup",function(b,g,a,f,h,l){this.chart.is3d()&&l&&!this[g]&&(this.chart.columnGroup||(this.chart.columnGroup=this.chart.renderer.g("columnGroup").add(l)),this[g]=this.chart.columnGroup,this.chart.columnGroup.attr(this.getPlotBox()),this[g].survive=!0);return b.apply(this,
Array.prototype.slice.call(arguments,1))});t(x.column.prototype,"setVisible",function(b,g){var a=this,f;a.chart.is3d()&&z(a.data,function(b){f=(b.visible=b.options.visible=g=void 0===g?!b.visible:g)?"visible":"hidden";a.options.data[k(b,a.data)]=b.options;b.graphic&&b.graphic.attr({visibility:f})});b.apply(this,Array.prototype.slice.call(arguments,1))});x.column.prototype.handle3dGrouping=!0;y(n,"afterInit",function(){if(this.chart.is3d()&&this.handle3dGrouping){var b=this.options,g=b.grouping,a=
b.stacking,f=v(this.yAxis.options.reversedStacks,!0),h=0;if(void 0===g||g){g=this.chart.retrieveStacks(a);h=b.stack||0;for(a=0;a<g[h].series.length&&g[h].series[a]!==this;a++);h=10*(g.totalStacks-g[h].position)+(f?a:-a);this.xAxis.reversed||(h=10*g.totalStacks-h)}b.zIndex=h}});t(n.prototype,"alignDataLabel",function(b){if(this.chart.is3d()&&("column"===this.type||"columnrange"===this.type)){var g=arguments,a=g[4],g=g[1],f={x:a.x,y:a.y,z:this.z},f=r([f],this.chart,!0)[0];a.x=f.x;a.y=g.outside3dPlot?
-9E9:f.y}b.apply(this,[].slice.call(arguments,1))});t(b.StackItem.prototype,"getStackBox",function(k,g){var a=k.apply(this,[].slice.call(arguments,1));if(g.is3d()){var f={x:a.x,y:a.y,z:0},f=b.perspective([f],g,!0)[0];a.x=f.x;a.y=f.y}return a})})(B);(function(b){var y=b.deg2rad,z=b.each,r=b.seriesTypes,v=b.svg;b=b.wrap;b(r.pie.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var n=this,k=n.options,r=k.depth||0,t=n.chart.options.chart.options3d,m=t.alpha,
g=t.beta,a=k.stacking?(k.stack||0)*r:n._i*r,a=a+r/2;!1!==k.grouping&&(a=0);z(n.data,function(b){var f=b.shapeArgs;b.shapeType="arc3d";f.z=a;f.depth=.75*r;f.alpha=m;f.beta=g;f.center=n.center;f=(f.end+f.start)/2;b.slicedTranslation={translateX:Math.round(Math.cos(f)*k.slicedOffset*Math.cos(m*y)),translateY:Math.round(Math.sin(f)*k.slicedOffset*Math.cos(m*y))}})}});b(r.pie.prototype.pointClass.prototype,"haloPath",function(b){var n=arguments;return this.series.chart.is3d()?[]:b.call(this,n[1])});b(r.pie.prototype,
"drawPoints",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&z(this.points,function(b){var k=b.graphic;if(k)k[b.y&&b.visible?"show":"hide"]()})});b(r.pie.prototype,"drawDataLabels",function(b){if(this.chart.is3d()){var n=this.chart.options.chart.options3d;z(this.data,function(b){var k=b.shapeArgs,r=k.r,m=(k.start+k.end)/2,g=b.labelPos,a=-r*(1-Math.cos((k.alpha||n.alpha)*y))*Math.sin(m),f=r*(Math.cos((k.beta||n.beta)*y)-1)*Math.cos(m);z([0,2,4],function(b){g[b]+=f;g[b+1]+=a})})}b.apply(this,
[].slice.call(arguments,1))});b(r.pie.prototype,"addPoint",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update(this.userOptions,!0)});b(r.pie.prototype,"animate",function(b){if(this.chart.is3d()){var n=arguments[1],k=this.options.animation,r=this.center,t=this.group,m=this.markerGroup;v&&(!0===k&&(k={}),n?(t.oldtranslateX=t.translateX,t.oldtranslateY=t.translateY,n={translateX:r[0],translateY:r[1],scaleX:.001,scaleY:.001},t.attr(n),m&&(m.attrSetters=t.attrSetters,m.attr(n))):
(n={translateX:t.oldtranslateX,translateY:t.oldtranslateY,scaleX:1,scaleY:1},t.animate(n,k),m&&m.animate(n,k),this.animate=null))}else b.apply(this,[].slice.call(arguments,1))})})(B);(function(b){var y=b.Point,z=b.seriesType,r=b.seriesTypes;z("scatter3d","scatter",{tooltip:{pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e"}},{pointAttribs:function(v){var n=r.scatter.prototype.pointAttribs.apply(this,arguments);
this.chart.is3d()&&v&&(n.zIndex=b.pointCameraDistance(v,this.chart));return n},axisTypes:["xAxis","yAxis","zAxis"],pointArrayMap:["x","y","z"],parallelArrays:["x","y","z"],directTouch:!0},{applyOptions:function(){y.prototype.applyOptions.apply(this,arguments);void 0===this.z&&(this.z=0);return this}})})(B)});
