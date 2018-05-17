/*
 Highcharts JS v6.1.0-modified (2018-05-16)
 Gantt series

 (c) 2016 Lars A. V. Cabrera

 --- WORK IN PROGRESS ---

 License: www.highcharts.com/license
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:m(Highcharts)})(function(m){(function(e){var m=e.each,u=e.isObject,r=e.pick,l=e.wrap,n=e.Axis,t=e.Chart,p=e.Tick;n.prototype.isOuterAxis=function(){var b=this,d=-1,c=!0;m(this.chart.axes,function(f,h){f.side===b.side&&(f===b?d=h:0<=d&&h>d&&(c=!1))});return c};p.prototype.getLabelWidth=function(){return this.label.getBBox().width};n.prototype.getMaxLabelLength=function(b){var d=this.tickPositions,c=this.ticks,f=0;if(!this.maxLabelLength||
b)m(d,function(b){(b=c[b])&&b.labelLength>f&&(f=b.labelLength)}),this.maxLabelLength=f;return this.maxLabelLength};n.prototype.addTitle=function(){var b=this.chart.renderer,d=this.axisParent,c=this.horiz,f=this.opposite,h=this.options,a=h.title,g;this.showAxis=g=this.hasData()||r(h.showEmpty,!0);h.title="";this.axisTitle||((h=a.textAlign)||(h=(c?{low:"left",middle:"center",high:"right"}:{low:f?"right":"left",middle:"center",high:f?"left":"right"})[a.align]),this.axisTitle=b.text(a.text,0,0,a.useHTML).attr({zIndex:7,
rotation:a.rotation||0,align:h}).addClass("highcharts-axis-title").add(d),this.axisTitle.isNew=!0);this.axisTitle[g?"show":"hide"](!0)};e.dateFormats={W:function(b){b=new this.Date(b);var d=0===this.get("Day",b)?7:this.get("Day",b),c=b.getTime(),f=new Date(this.get("FullYear",b),0,1,-6);this.set("Date",b,this.get("Date",b)+4-d);return 1+Math.floor(Math.floor((c-f)/864E5)/7)},E:function(b){return this.dateFormat("%a",b,!0).charAt(0)}};l(p.prototype,"addLabel",function(b){var d=this.axis,c=void 0!==
d.options.categories,f=d.tickPositions,f=this.pos!==f[f.length-1];(!d.options.grid||c||f)&&b.apply(this)});l(p.prototype,"getLabelPosition",function(b,d,c,f){var h=b.apply(this,Array.prototype.slice.call(arguments,1)),a=this.axis,g=a.options,k=g.tickInterval||1,q,e;g.grid&&(q=g.labels.style.fontSize,e=a.chart.renderer.fontMetrics(q,f),q=e.b,e=e.h,a.horiz&&void 0===g.categories?(g=a.axisGroup.getBBox().height,k=this.pos+k/2,h.x=a.translate(k)+a.left,k=g/2+e/2-Math.abs(e-q),h.y=0===a.side?c-k:c+k):
(void 0===g.categories&&(k=this.pos+k/2,h.y=a.translate(k)+a.top+q/2),k=this.getLabelWidth()/2-a.maxLabelLength/2,h.x=3===a.side?h.x+k:h.x-k));return h});l(n.prototype,"tickSize",function(b){var d=b.apply(this,Array.prototype.slice.call(arguments,1)),c;this.options.grid&&!this.horiz&&(c=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelLength||(this.maxLabelLength=this.getMaxLabelLength()),c=this.maxLabelLength+c,d[0]=c);return d});l(n.prototype,"getOffset",function(b){var d=this.chart.axisOffset,
c=this.side,f,h,a=this.options,g=a.title,k=g&&g.text&&!1!==g.enabled;this.options.grid&&u(this.options.title)?(h=this.tickSize("tick")[0],d[c]&&h&&(f=d[c]+h),k&&this.addTitle(),b.apply(this,Array.prototype.slice.call(arguments,1)),d[c]=r(f,d[c]),a.title=g):b.apply(this,Array.prototype.slice.call(arguments,1))});l(n.prototype,"renderUnsquish",function(b){this.options.grid&&(this.labelRotation=0,this.options.labels.rotation=0);b.apply(this)});l(n.prototype,"setOptions",function(b,d){d.grid&&this.horiz&&
(d.startOnTick=!0,d.minPadding=0,d.endOnTick=!0);b.apply(this,Array.prototype.slice.call(arguments,1))});l(n.prototype,"render",function(b){var d=this.options,c,f,h,a,g,k,q=this.chart.renderer;if(d.grid){if(c=2*Math.abs(this.defaultLeftAxisOptions.labels.x),c=this.maxLabelLength+c,f=d.lineWidth,this.rightWall&&this.rightWall.destroy(),b.apply(this),b=this.axisGroup.getBBox(),this.horiz&&(this.rightWall=q.path(["M",b.x+this.width+1,b.y,"L",b.x+this.width+1,b.y+b.height]).attr({stroke:d.tickColor||
"#ccd6eb","stroke-width":d.tickWidth||1,zIndex:7,class:"grid-wall"}).add(this.axisGroup)),this.isOuterAxis()&&this.axisLine&&(this.horiz&&(c=b.height-1),f)){b=this.getLinePath(f);g=b.indexOf("M")+1;k=b.indexOf("L")+1;h=b.indexOf("M")+2;a=b.indexOf("L")+2;if(0===this.side||3===this.side)c=-c;this.horiz?(b[h]+=c,b[a]+=c):(b[g]+=c,b[k]+=c);this.axisLineExtra?this.axisLineExtra.animate({d:b}):this.axisLineExtra=q.path(b).attr({stroke:d.lineColor,"stroke-width":f,zIndex:7}).add(this.axisGroup);this.axisLine[this.showAxis?
"show":"hide"](!0)}}else b.apply(this)});l(t.prototype,"render",function(b){var d=25/11,c,f;m(this.axes,function(b){var a=b.options;a.grid&&(f=a.labels.style.fontSize,c=b.chart.renderer.fontMetrics(f),"datetime"===a.type&&(a.units=[["millisecond",[1]],["second",[1]],["minute",[1]],["hour",[1]],["day",[1]],["week",[1]],["month",[1]],["year",null]]),b.horiz?a.tickLength=a.cellHeight||c.h*d:(a.tickWidth=1,a.lineWidth||(a.lineWidth=1)))});b.apply(this)})})(m);(function(e){var m=e.addEvent,u=e.defined,
r=e.seriesTypes.column,l=e.each,n=e.isNumber,t=e.isObject,p=e.merge,b=e.pick,d=e.seriesType,c=e.Axis,f=e.Point,h=e.Series;d("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;t(a)&&(a=a.amount);u(a)||(a=0);return 100*a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},
borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:e.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,getColumnMetrics:function(){function a(){l(k.series,function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,k=this.chart;a();b=r.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,k,c){b=h.prototype.cropData.call(this,this.x2Data,b,k,c);b.xData=a.slice(b.start,b.end);return b},translatePoint:function(a){var g=
this.xAxis,k=this.columnMetrics,c=this.options.minPointLength||0,d=a.plotX,f=b(a.x2,a.x+(a.len||0)),e=g.translate(f,0,0,0,1),f=e-d,h=this.chart.inverted,l=b(this.options.borderWidth,1)%2/2;c&&(c-=f,0>c&&(c=0),d-=c/2,e+=c/2);d=Math.max(d,-10);e=Math.min(Math.max(e,-10),g.len+10);a.shapeArgs={x:Math.floor(Math.min(d,e))+l,y:Math.floor(a.plotY+k.offset)+l,width:Math.round(Math.abs(e-d)),height:Math.round(k.width),r:this.options.borderRadius};c=a.shapeArgs.x;e=c+a.shapeArgs.width;0>c||e>g.len?(c=Math.min(g.len,
Math.max(0,c)),e=Math.max(0,Math.min(e,g.len)),g=e-c,a.dlBox=p(a.shapeArgs,{x:c,width:e-c,centerX:g?g/2:null})):a.dlBox=null;a.tooltipPos[0]+=h?0:f/2;a.tooltipPos[1]-=h?f/2:k.width/2;if(g=a.partialFill)t(g)&&(g=g.amount),n(g)||(g=0),k=a.shapeArgs,a.partShapeArgs={x:k.x,y:k.y,width:k.width,height:k.height,r:this.options.borderRadius},a.clipRectArgs={x:k.x,y:k.y,width:Math.max(Math.round(f*g+(a.plotX-d)),0),height:k.height}},translate:function(){r.prototype.translate.apply(this,arguments);l(this.points,
function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var c=this.chart.renderer,d=a.graphic,g=a.shapeType,e=a.shapeArgs,f=a.partShapeArgs,h=a.clipRectArgs;if(a.isNull)d&&(a.graphic=d.destroy());else{if(d)a.graphicOriginal[b](p(e));else a.graphic=d=c.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=c[g](e).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(d);f&&(a.graphicOverlay?(a.graphicOverlay[b](p(f)),a.clipRect.animate(p(h))):
(a.clipRect=c.clipRect(h.x,h.y,h.width,h.height),a.graphicOverlay=c[g](f).addClass("highcharts-partfill-overlay").add(d).clip(a.clipRect)))}},drawPoints:function(){var a=this,b=a.getAnimationVerb();l(a.points,function(c){a.drawPoint(c,b)})},getAnimationVerb:function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"}},{init:function(){f.prototype.init.apply(this,arguments);var a=this.series.chart.options.chart.colorCount;this.y||(this.y=0);this.colorIndex=b(this.options.colorIndex,
this.y%a);return this},setState:function(){f.prototype.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())},getLabelConfig:function(){var a=f.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});m(c,"afterGetSeriesExtremes",function(){var a=this.series,c,d;this.isXAxis&&(c=b(this.dataMax,
-Number.MAX_VALUE),l(a,function(a){a.x2Data&&l(a.x2Data,function(a){a>c&&(c=a,d=!0)})}),d&&(this.dataMax=c))})})(m)});
