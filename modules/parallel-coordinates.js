/*
  Highcharts JS v6.1.0-modified (2018-05-16)

 Support for parallel coordinates in Highcharts

 (c) 2010-2017 Pawel Fus

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?module.exports=e:e(Highcharts)})(function(e){(function(b){function e(a){var c=this.series&&this.series.chart,g=a.apply(this,Array.prototype.slice.call(arguments,1)),f,e,d;c&&c.hasParallelCoordinates&&!n(g.formattedValue)&&(d=c.yAxis[this.x],f=d.options,c=(e=r(f.tooltipValueFormat,f.labels.format))?b.format(e,p(this,{value:this.y}),c.time):d.isDatetimeAxis?c.time.dateFormat(f.dateTimeLabelFormats[d.tickPositions.info.unitName],this.y):f.categories?
f.categories[this.y]:this.y,g.formattedValue=g.point.formattedValue=c);return g}var t=b.Axis,q=b.Chart,y=b.Series.prototype,z=q.prototype,u=b.Axis.prototype,l=b.addEvent,r=b.pick,k=b.each,v=b.wrap,m=b.merge,A=b.erase,w=b.splat,p=b.extend,n=b.defined,B=b.arrayMin,C=b.arrayMax,x={lineWidth:0,tickLength:0,opposite:!0,type:"category"};b.setOptions({chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}}});l(q,"init",
function(a){a=a.args[0];var c=w(a.yAxis||{}),g=c.length,b=[];if(this.hasParallelCoordinates=a.chart&&a.chart.parallelCoordinates){for(this.setParallelInfo(a);g<=this.parallelInfo.counter;g++)b.push({});a.legend||(a.legend={});a.legend.enabled=!1;m(!0,a,{boost:{seriesThreshold:Number.MAX_SAFE_INTEGER},plotOptions:{series:{boostThreshold:Number.MAX_SAFE_INTEGER}}});a.yAxis=c.concat(b);a.xAxis=m(x,w(a.xAxis||{})[0])}});l(q,"update",function(a){a=a.options;a.chart&&(n(a.chart.parallelCoordinates)&&(this.hasParallelCoordinates=
a.chart.parallelCoordinates),this.hasParallelCoordinates&&a.chart.parallelAxes&&(this.options.chart.parallelAxes=m(this.options.chart.parallelAxes,a.chart.parallelAxes),k(this.yAxis,function(a){a.update({},!1)})))});p(z,{setParallelInfo:function(a){var c=this;a=a.series;c.parallelInfo={counter:0};k(a,function(a){a.data&&(c.parallelInfo.counter=Math.max(c.parallelInfo.counter,a.data.length-1))})}});u.keepProps.push("parallelPosition");l(t,"afterSetOptions",function(a){var c=this.chart,b=["left","width",
"height","top"];c.hasParallelCoordinates&&(c.inverted&&(b=b.reverse()),this.isXAxis?this.options=m(this.options,x,a.userOptions):(this.options=m(this.options,this.chart.options.chart.parallelAxes,a.userOptions),this.parallelPosition=r(this.parallelPosition,c.yAxis.length),this.setParallelPosition(b,this.options)))});l(t,"getSeriesExtremes",function(a){if(this.chart&&this.chart.hasParallelCoordinates&&!this.isXAxis){var c=this.parallelPosition,b=[];k(this.series,function(a){n(a.yData[c])&&b.push(a.yData[c])});
this.dataMin=B(b);this.dataMax=C(b);a.preventDefault()}});p(u,{setParallelPosition:function(a,c){c[a[0]]=100*(this.parallelPosition+.5)/(this.chart.parallelInfo.counter+1)+"%";this[a[1]]=c[a[1]]=0;this[a[2]]=c[a[2]]=null;this[a[3]]=c[a[3]]=null}});v(y,"bindAxes",function(a){if(this.chart.hasParallelCoordinates){var c=this;k(this.chart.axes,function(a){c.insert(a.series);a.isDirty=!0});c.xAxis=this.chart.xAxis[0];c.yAxis=this.chart.yAxis[0]}else a.apply(this,Array.prototype.slice.call(arguments,1))});
l(b.Series,"afterTranslate",function(){var a=this.chart,c=this.points,b=c&&c.length,f=Number.MAX_VALUE,e,d,h;if(this.chart.hasParallelCoordinates){for(h=0;h<b;h++)d=c[h],n(d.y)?(d.plotX=d.clientX=a.inverted?a.plotHeight-a.yAxis[h].top+a.plotTop:a.yAxis[h].left-a.plotLeft,d.plotY=a.yAxis[h].translate(d.y,!1,!0,null,!0),void 0!==e&&(f=Math.min(f,Math.abs(d.plotX-e))),e=d.plotX,d.isInside=a.isInsidePlot(d.plotX,d.plotY,a.inverted)):d.isNull=!0;this.closestPointRangePx=f}});b.addEvent(b.Series,"destroy",
function(){this.chart.hasParallelCoordinates&&k(this.chart.axes||[],function(a){a&&a.series&&(A(a.series,this),a.isDirty=a.forceRedraw=!0)},this)});k(["line","spline"],function(a){v(b.seriesTypes[a].prototype.pointClass.prototype,"getLabelConfig",e)})})(e)});
