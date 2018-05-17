/*
 Highcharts JS v6.1.0-modified (2018-05-17)
 Drag-panes module

 (c) 2010-2017 Highsoft AS
 Author: Kacper Madej

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(b){var k=b.hasTouch,w=b.merge,t=b.wrap,m=b.each,x=b.isNumber,f=b.addEvent,u=b.relativeLength,y=b.objectEach,n=b.Axis,v=b.Pointer;w(!0,n.prototype.defaultYAxisOptions,{minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,x:0,y:0}});b.AxisResizer=function(a){this.init(a)};b.AxisResizer.prototype={init:function(a,c){this.axis=a;this.options=a.options.resize;this.render();
c||this.addMouseEvents()},render:function(){var a=this.axis,c=a.chart,d=this.options,b=d.x,e=d.y,d=Math.min(Math.max(a.top+a.height+e,c.plotTop),c.plotTop+c.plotHeight),l={};this.lastPos=d-e;this.controlLine||(this.controlLine=c.renderer.path().addClass("highcharts-axis-resizer"));this.controlLine.add(a.axisGroup);e=this.controlLine.strokeWidth();l.d=c.renderer.crispLine(["M",a.left+b,d,"L",a.left+a.width+b,d],e);this.controlLine.attr(l)},addMouseEvents:function(){var a=this,c=a.controlLine.element,
d=a.axis.chart.container,b=[],e,l,p;a.mouseMoveHandler=e=function(c){a.onMouseMove(c)};a.mouseUpHandler=l=function(c){a.onMouseUp(c)};a.mouseDownHandler=p=function(c){a.onMouseDown(c)};b.push(f(d,"mousemove",e),f(d.ownerDocument,"mouseup",l),f(c,"mousedown",p));k&&b.push(f(d,"touchmove",e),f(d.ownerDocument,"touchend",l),f(c,"touchstart",p));a.eventsToUnbind=b},onMouseMove:function(a){a.touches&&0===a.touches[0].pageX||!this.grabbed||(this.hasDragged=!0,this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-
this.options.y))},onMouseUp:function(a){this.hasDragged&&this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y);this.grabbed=this.hasDragged=this.axis.chart.activeResizer=null},onMouseDown:function(){this.axis.chart.pointer.reset(!1,0);this.grabbed=this.axis.chart.activeResizer=!0},updateAxes:function(a){var c=this,d=c.axis.chart,f=c.options.controlledAxis,e=0===f.next.length?[b.inArray(c.axis,d.yAxis)+1]:f.next,f=[c.axis].concat(f.prev),l=[],p=!1,k=d.plotTop,n=d.plotHeight,r=
k+n,q;a=Math.max(Math.min(a,r),k);q=a-c.lastPos;1>q*q||(m([f,e],function(b,f){m(b,function(b,h){var g=(b=x(b)?d.yAxis[b]:f||h?d.get(b):b)&&b.options,e,m;g&&"navigator-y-axis"!==g.id&&(h=b.top,m=Math.round(u(g.minLength,n)),e=Math.round(u(g.maxLength,n)),f?(q=a-c.lastPos,g=Math.round(Math.min(Math.max(b.len-q,m),e)),h=b.top+q,h+g>r&&(e=r-g-h,a+=e,h+=e),h<k&&(h=k,h+g>r&&(g=n)),g===m&&(p=!0),l.push({axis:b,options:{top:Math.round(h),height:g}})):(g=Math.round(Math.min(Math.max(a-h,m),e)),g===e&&(p=!0),
a=h+g,l.push({axis:b,options:{height:g}})))})}),p||(m(l,function(a){a.axis.update(a.options,!1)}),d.redraw(!1)))},destroy:function(){var a=this;delete a.axis.resizer;this.eventsToUnbind&&m(this.eventsToUnbind,function(a){a()});a.controlLine.destroy();y(a,function(b,d){a[d]=null})}};n.prototype.keepProps.push("resizer");f(n,"afterRender",function(){var a=this.resizer,c=this.options.resize;c&&(c=!1!==c.enabled,a?c?a.init(this,!0):a.destroy():c&&(this.resizer=new b.AxisResizer(this)))});f(n,"destroy",
function(a){!a.keepEvents&&this.resizer&&this.resizer.destroy()});t(v.prototype,"runPointActions",function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))});t(v.prototype,"drag",function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))})})(k)});
