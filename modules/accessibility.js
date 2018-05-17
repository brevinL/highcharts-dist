/*
 Highcharts JS v6.1.0-modified (2018-05-17)
 Accessibility module

 (c) 2010-2017 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(q){"object"===typeof module&&module.exports?module.exports=q:q(Highcharts)})(function(q){(function(c){function q(c,f){var k=c.indexOf("#each("),h=c.indexOf("#plural("),g=c.indexOf("["),n=c.indexOf("]");if(-1<k){var g=c.slice(k).indexOf(")")+k,l=c.substring(0,k),h=c.substring(g+1),g=c.substring(k+6,g).split(","),k=Number(g[1]);c="";if(f=f[g[0]])for(k=isNaN(k)?f.length:k,k=0>k?f.length+k:Math.min(k,f.length),g=0;g<k;++g)c+=l+f[g]+h;return c.length?c:""}if(-1<h){l=c.slice(h).indexOf(")")+h;
c=c.substring(h+8,l).split(",");switch(Number(f[c[0]])){case 0:c=t(c[4],c[1]);break;case 1:c=t(c[2],c[1]);break;case 2:c=t(c[3],c[1]);break;default:c=c[1]}c?(f=c,f=f.trim&&f.trim()||f.replace(/^\s+|\s+$/g,"")):f="";return f}return-1<g?(h=c.substring(0,g),c=Number(c.substring(g+1,n)),f=f[h],!isNaN(c)&&f&&(0>c?(l=f[f.length+c],void 0===l&&(l=f[0])):(l=f[c],void 0===l&&(l=f[f.length-1]))),void 0!==l?l:""):"{"+c+"}"}var u=c.each,t=c.pick;c.i18nFormat=function(n,f,k){var h=function(d,c){d=d.slice(c||0);
var a=d.indexOf("{"),b=d.indexOf("}");if(-1<a&&b>a)return{statement:d.substring(a+1,b),begin:c+a+1,end:c+b}},g=[],p,l;l=0;do p=h(n,l),l=n.substring(l,p&&p.begin-1),l.length&&g.push({value:l,type:"constant"}),p&&g.push({value:p.statement,type:"statement"}),l=p&&p.end+1;while(p);u(g,function(d){"statement"===d.type&&(d.value=q(d.value,f))});return c.format(c.reduce(g,function(d,c){return d+c.value},""),f,k)};c.Chart.prototype.langFormat=function(n,f,k){n=n.split(".");for(var h=this.options.lang,g=0;g<
n.length;++g)h=h&&h[n[g]];return"string"===typeof h&&c.i18nFormat(h,f,k)};c.setOptions({lang:{accessibility:{screenReaderRegionLabel:"Chart screen reader information.",navigationHint:"Use regions/landmarks to skip ahead to chart {#plural(numSeries, and navigate between data series,)}",defaultChartTitle:"Chart",longDescriptionHeading:"Long description.",noDescription:"No description available.",structureHeading:"Structure.",viewAsDataTable:"View as data table.",chartHeading:"Chart graphic.",chartContainerLabel:"Interactive chart. {title}. Use up and down arrows to navigate with most screen readers.",
rangeSelectorMinInput:"Select start date.",rangeSelectorMaxInput:"Select end date.",tableSummary:"Table representation of chart.",mapZoomIn:"Zoom chart",mapZoomOut:"Zoom out chart",rangeSelectorButton:"Select range {buttonText}",legendItem:"Toggle visibility of series {itemName}",svgContainerTitle:"{chartTitle}",seriesTypeDescriptions:{boxplot:"Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
arearange:"Arearange charts are line charts displaying a range between a lower and higher value for each point.",areasplinerange:"These charts are line charts displaying a range between a lower and higher value for each point.",bubble:"Bubble charts are scatter charts where each data point also has a size value.",columnrange:"Columnrange charts are column charts displaying a range between a lower and higher value for each point.",errorbar:"Errorbar series are used to display the variability of the data.",
funnel:"Funnel charts are used to display reduction of data in stages.",pyramid:"Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",waterfall:"A waterfall chart is a column chart where each column contributes towards a total end value."},chartTypes:{emptyChart:"Empty chart",mapTypeDescription:"Map of {mapTitle} with {numSeries} data series.",unknownMap:"Map of unspecified region with {numSeries} data series.",combinationChart:"Combination chart with {numSeries} data series.",
defaultSingle:"Chart with {numPoints} data {#plural(numPoints, points, point)}.",defaultMultiple:"Chart with {numSeries} data series.",splineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",splineMultiple:"Line chart with {numSeries} lines.",lineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",lineMultiple:"Line chart with {numSeries} lines.",columnSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",columnMultiple:"Bar chart with {numSeries} data series.",
barSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",barMultiple:"Bar chart with {numSeries} data series.",pieSingle:"Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.",pieMultiple:"Pie chart with {numSeries} pies.",scatterSingle:"Scatter chart with {numPoints} {#plural(numPoints, points, point)}.",scatterMultiple:"Scatter chart with {numSeries} data series.",boxplotSingle:"Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotMultiple:"Boxplot with {numSeries} data series.",
bubbleSingle:"Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleMultiple:"Bubble chart with {numSeries} data series."},axis:{xAxisDescriptionSingular:"The chart has 1 X axis displaying {names[0]}.",xAxisDescriptionPlural:"The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}",yAxisDescriptionSingular:"The chart has 1 Y axis displaying {names[0]}.",yAxisDescriptionPlural:"The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}"},
exporting:{chartMenuLabel:"Chart export",menuButtonLabel:"View export menu",exportRegionLabel:"Chart export menu"},series:{summary:{default:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",defaultCombination:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",line:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",lineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
spline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",splineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",column:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",columnCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",bar:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
barCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",pie:"{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",pieCombination:"{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",scatter:"{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",scatterCombination:"{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
boxplot:"{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotCombination:"{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",bubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",map:"{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
mapCombination:"{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",mapline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",maplineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",mapbubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",mapbubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."},
description:"{description}",xAxisDescription:"X axis, {name}",yAxisDescription:"Y axis, {name}"}}}})})(q);(function(c){function q(d){return d.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;").replace(/"/g,"\x26quot;").replace(/'/g,"\x26#x27;").replace(/\//g,"\x26#x2F;")}function u(d){return"string"===typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d}function t(d){for(var c=d.childNodes.length;c--;)d.appendChild(d.childNodes[c])}var n=c.win.document,f=c.each,k=c.map,h=c.erase,g=c.addEvent,
p=c.merge,l={position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"};c.Series.prototype.commonKeys="name id category x value y".split(" ");c.Series.prototype.specialKeys="z open high q3 median q1 low close".split(" ");c.seriesTypes.pie&&(c.seriesTypes.pie.prototype.specialKeys=[]);c.setOptions({accessibility:{enabled:!0,pointDescriptionThreshold:!1,screenReaderSectionFormatter:function(d){var c=d.options,a=d.types||[],b={chart:d,numSeries:d.series&&d.series.length},
a=(1===a.length&&"pie"===a[0]||"map"===a[0])&&{}||d.getAxesDescription();return"\x3cdiv\x3e"+d.langFormat("accessibility.navigationHint",b)+"\x3c/div\x3e\x3ch3\x3e"+(c.title.text?q(c.title.text):d.langFormat("accessibility.defaultChartTitle",b))+(c.subtitle&&c.subtitle.text?". "+q(c.subtitle.text):"")+"\x3c/h3\x3e\x3ch4\x3e"+d.langFormat("accessibility.longDescriptionHeading",b)+"\x3c/h4\x3e\x3cdiv\x3e"+(c.chart.description||d.langFormat("accessibility.noDescription",b))+"\x3c/div\x3e\x3ch4\x3e"+
d.langFormat("accessibility.structureHeading",b)+"\x3c/h4\x3e\x3cdiv\x3e"+(c.chart.typeDescription||d.getTypeDescription())+"\x3c/div\x3e"+(a.xAxis?"\x3cdiv\x3e"+a.xAxis+"\x3c/div\x3e":"")+(a.yAxis?"\x3cdiv\x3e"+a.yAxis+"\x3c/div\x3e":"")}}});c.addEvent(c.Series,"afterRender",function(){this.chart.options.accessibility.enabled&&this.setA11yDescription()});c.Series.prototype.setA11yDescription=function(){var d=this.chart.options.accessibility,c=this.points&&this.points.length&&this.points[0].graphic&&
this.points[0].graphic.element,a=c&&c.parentNode||this.graph&&this.graph.element||this.group&&this.group.element;a&&(a.lastChild===c&&t(a),this.points&&(this.points.length<d.pointDescriptionThreshold||!1===d.pointDescriptionThreshold)&&f(this.points,function(b){b.graphic&&(b.graphic.element.setAttribute("role","img"),b.graphic.element.setAttribute("tabindex","-1"),b.graphic.element.setAttribute("aria-label",u(b.series.options.pointDescriptionFormatter&&b.series.options.pointDescriptionFormatter(b)||
d.pointDescriptionFormatter&&d.pointDescriptionFormatter(b)||b.buildPointInfoString())))}),1<this.chart.series.length||d.describeSingleSeries)&&(a.setAttribute("role",this.options.exposeElementToA11y?"img":"region"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-label",u(d.seriesDescriptionFormatter&&d.seriesDescriptionFormatter(this)||this.buildSeriesInfoString())))};c.Series.prototype.buildSeriesInfoString=function(){var d=this.chart,c=this.description||this.options.description,c=c&&d.langFormat("accessibility.series.description",
{description:c,series:this}),a=d.langFormat("accessibility.series.xAxisDescription",{name:this.xAxis&&this.xAxis.getDescription(),series:this}),b=d.langFormat("accessibility.series.yAxisDescription",{name:this.yAxis&&this.yAxis.getDescription(),series:this}),m={name:this.name||"",ix:this.index+1,numSeries:d.series.length,numPoints:this.points.length,series:this},r=1===d.types.length?"":"Combination";return(d.langFormat("accessibility.series.summary."+this.type+r,m)||d.langFormat("accessibility.series.summary.default"+
r,m))+(c?" "+c:"")+(1<d.yAxis.length&&this.yAxis?" "+b:"")+(1<d.xAxis.length&&this.xAxis?" "+a:"")};c.Point.prototype.buildPointInfoString=function(){var d=this,e=d.series,a=e.chart.options.accessibility,b="",m=e.xAxis&&e.xAxis.isDatetimeAxis,a=m&&e.chart.time.dateFormat(a.pointDateFormatter&&a.pointDateFormatter(d)||a.pointDateFormat||c.Tooltip.prototype.getXDateFormat.call({getDateFormat:c.Tooltip.prototype.getDateFormat,chart:e.chart},d,e.chart.options.tooltip,e.xAxis),d.x);c.find(e.specialKeys,
function(b){return void 0!==d[b]})?(m&&(b=a),f(e.commonKeys.concat(e.specialKeys),function(a){void 0===d[a]||m&&"x"===a||(b+=(b?". ":"")+a+", "+d[a])})):b=(this.name||a||this.category||this.id||"x, "+this.x)+", "+(void 0!==this.value?this.value:this.y);return this.index+1+". "+b+"."+(this.description?" "+this.description:"")};c.Axis.prototype.getDescription=function(){return this.userOptions&&this.userOptions.description||this.axisTitle&&this.axisTitle.textStr||this.options.id||this.categories&&"categories"||
this.isDatetimeAxis&&"Time"||"values"};g(c.Series,"afterInit",function(){var c=this.chart;c.options.accessibility.enabled&&(c.types=c.types||[],0>c.types.indexOf(this.type)&&c.types.push(this.type))});g(c.Series,"remove",function(){var c=this.chart,e=this,a=!1;f(c.series,function(b){b!==e&&0>c.types.indexOf(e.type)&&(a=!0)});a||h(c.types,e.type)});c.Chart.prototype.getTypeDescription=function(){var c=this.types&&this.types[0],e=this.series&&this.series[0]||{},a=e.mapTitle,b=this.langFormat("accessibility.seriesTypeDescriptions."+
c,{chart:this}),e={numSeries:this.series.length,numPoints:e.points&&e.points.length,chart:this,mapTitle:a},m=this.series&&1===this.series.length?"Single":"Multiple";if(c){if("map"===c)return a?this.langFormat("accessibility.chartTypes.mapTypeDescription",e):this.langFormat("accessibility.chartTypes.unknownMap",e);if(1<this.types.length)return this.langFormat("accessibility.chartTypes.combinationChart",e)}else return this.langFormat("accessibility.chartTypes.emptyChart",e);return(this.langFormat("accessibility.chartTypes."+
c+m,e)||this.langFormat("accessibility.chartTypes.default"+m,e))+(b?" "+b:"")};c.Chart.prototype.getAxesDescription=function(){var c=this.xAxis.length,e=this.yAxis.length,a={};c&&(a.xAxis=this.langFormat("accessibility.axis.xAxisDescription"+(1<c?"Plural":"Singular"),{chart:this,names:k(this.xAxis,function(b){return b.getDescription()}),numAxes:c}));e&&(a.yAxis=this.langFormat("accessibility.axis.yAxisDescription"+(1<e?"Plural":"Singular"),{chart:this,names:k(this.yAxis,function(b){return b.getDescription()}),
numAxes:e}));return a};c.Chart.prototype.addAccessibleContextMenuAttribs=function(){var c=this.exportDivElements;c&&(f(c,function(c){"DIV"!==c.tagName||c.children&&c.children.length||(c.setAttribute("role","menuitem"),c.setAttribute("tabindex",0),c.setAttribute("aria-label",c.textContent))}),c[0].parentNode.setAttribute("role","menu"),c[0].parentNode.setAttribute("aria-label",this.langFormat("accessibility.exporting.chartMenuLabel",{chart:this})))};c.Chart.prototype.addScreenReaderRegion=function(c,
e){var a=this,b=a.screenReaderRegion=n.createElement("div"),m=n.createElement("h4"),d=n.createElement("a"),f=n.createElement("h4");b.setAttribute("id",c);b.setAttribute("role","region");b.setAttribute("aria-label",a.langFormat("accessibility.screenReaderRegionLabel",{chart:this}));b.innerHTML=a.options.accessibility.screenReaderSectionFormatter(a);a.getCSV&&(d.innerHTML=a.langFormat("accessibility.viewAsDataTable",{chart:a}),d.href="#"+e,d.setAttribute("tabindex","-1"),d.onclick=a.options.accessibility.onTableAnchorClick||
function(){a.viewData();n.getElementById(e).focus()},m.appendChild(d),b.appendChild(m));f.innerHTML=a.langFormat("accessibility.chartHeading",{chart:a});a.renderTo.insertBefore(f,a.renderTo.firstChild);a.renderTo.insertBefore(b,a.renderTo.firstChild);p(!0,f.style,l);p(!0,b.style,l)};c.Chart.prototype.callbacks.push(function(d){var e=d.options;if(e.accessibility.enabled){var a,b=n.createElementNS("http://www.w3.org/2000/svg","g"),m=d.container.getElementsByTagName("desc")[0],r=d.container.getElementsByTagName("text"),
w="highcharts-title-"+d.index,v="highcharts-data-table-"+d.index,g="highcharts-information-region-"+d.index,e=e.title.text||d.langFormat("accessibility.defaultChartTitle",{chart:d}),h=u(d.langFormat("accessibility.svgContainerTitle",{chartTitle:e}));a="Interactive chart. "+e+". Use tab to nagviate among element set. Use left and right arrows to navigate within element set. ";d.container.setAttribute("aria-label",a);h.length&&(a=n.createElementNS("http://www.w3.org/2000/svg","title"),a.textContent=
h,a.id=w,m.parentNode.insertBefore(a,m),a.setAttribute("aria-hidden","true"),m.setAttribute("aria-hidden","true"));d.renderTo.setAttribute("role","region");d.renderTo.setAttribute("aria-label",d.langFormat("accessibility.chartContainerLabel",{title:u(e),chart:d}));if(d.exportSVGElements&&d.exportSVGElements[0]&&d.exportSVGElements[0].element){var k=d.exportSVGElements[0].element.onclick,m=d.exportSVGElements[0].element.parentNode;d.exportSVGElements[0].element.onclick=function(){k.apply(this,Array.prototype.slice.call(arguments));
d.addAccessibleContextMenuAttribs();d.highlightExportItem(0)};d.exportSVGElements[0].element.setAttribute("role","button");d.exportSVGElements[0].element.setAttribute("aria-label",d.langFormat("accessibility.exporting.menuButtonLabel",{chart:d}));b.appendChild(d.exportSVGElements[0].element);b.setAttribute("role","region");b.setAttribute("aria-label",d.langFormat("accessibility.exporting.exportRegionLabel",{chart:d}));m.appendChild(b)}d.rangeSelector&&f(["minInput","maxInput"],function(b,a){d.rangeSelector[b]&&
(d.rangeSelector[b].setAttribute("tabindex","-1"),d.rangeSelector[b].setAttribute("role","textbox"),d.rangeSelector[b].setAttribute("aria-label",d.langFormat("accessibility.rangeSelector"+(a?"MaxInput":"MinInput"),{chart:d})))});f(r,function(b){b.setAttribute("aria-hidden","true")});d.addScreenReaderRegion(g,v);c.wrap(d,"getTable",function(b){return b.apply(this,Array.prototype.slice.call(arguments,1)).replace("\x3ctable\x3e",'\x3ctable id\x3d"'+v+'" summary\x3d"'+d.langFormat("accessibility.tableSummary",
{chart:d})+'"\x3e')})}})})(q);(function(c){function q(a){return"string"===typeof a?a.replace(/<\/?[^>]+(>|$)/g,""):a}function u(a,b){this.chart=a;this.id=b.id;this.keyCodeMap=b.keyCodeMap;this.validate=b.validate;this.init=b.init;this.terminate=b.terminate}function t(a){var b;a&&a.onclick&&k.createEvent&&(b=k.createEvent("Events"),b.initEvent("click",!0,!1),a.onclick(b))}function n(a){var b=a.series.chart.options.accessibility;return a.isNull&&b.keyboardNavigation.skipNullPoints||a.series.options.skipKeyboardNavigation||
!a.series.visible||!1===a.visible||b.pointDescriptionThreshold&&b.pointDescriptionThreshold<=a.series.points.length}var f=c.win,k=f.document,h=c.each,g=c.addEvent,p=c.fireEvent,l=c.merge,d=c.pick,e;c.extend(c.SVGElement.prototype,{addFocusBorder:function(a,b){this.focusBorder&&this.removeFocusBorder();var c=this.getBBox();a=d(a,3);this.focusBorder=this.renderer.rect(c.x-a,c.y-a,c.width+2*a,c.height+2*a,b&&b.borderRadius).addClass("highcharts-focus-border").attr({stroke:b&&b.stroke,"stroke-width":b&&
b.strokeWidth}).attr({zIndex:99}).add(this.parentGroup)},removeFocusBorder:function(){this.focusBorder&&(this.focusBorder.destroy(),delete this.focusBorder)}});c.Series.prototype.keyboardMoveVertical=!0;h(["column","pie"],function(a){c.seriesTypes[a]&&(c.seriesTypes[a].prototype.keyboardMoveVertical=!1)});c.setOptions({accessibility:{keyboardNavigation:{enabled:!0,focusBorder:{enabled:!0,hideBrowserFocusOutline:!0,style:{color:"#335cad",lineWidth:2,borderRadius:3},margin:2},skipNullPoints:!0}}});
u.prototype={run:function(a){var b=this,c=a.which||a.keyCode,d=!1,f=!1;h(this.keyCodeMap,function(m){-1<m[0].indexOf(c)&&(d=!0,f=!1===m[1].call(b,c,a)?!1:!0)});d||9!==c||(f=this.move(a.shiftKey?-1:1));return f},move:function(a){var b=this.chart;this.terminate&&this.terminate(a);b.keyboardNavigationModuleIndex+=a;var c=b.keyboardNavigationModules[b.keyboardNavigationModuleIndex];b.focusElement&&b.focusElement.removeFocusBorder();if(c){if(c.validate&&!c.validate())return this.move(a);if(c.init)return c.init(a),
!0}b.keyboardNavigationModuleIndex=0;0<a?(this.chart.exiting=!0,this.chart.tabExitAnchor.focus()):this.chart.renderTo.focus();return!1}};c.Axis.prototype.panStep=function(a,b){var c=b||3;b=this.getExtremes();var d=(b.max-b.min)/c*a,c=b.max+d,d=b.min+d,f=c-d;0>a&&d<b.dataMin?(d=b.dataMin,c=d+f):0<a&&c>b.dataMax&&(c=b.dataMax,d=c-f);this.setExtremes(d,c)};c.Chart.prototype.setFocusToElement=function(a,b){var c=this.options.accessibility.keyboardNavigation.focusBorder;b=b||a;b.element&&b.element.focus&&
(b.element.focus(),c.hideBrowserFocusOutline&&b.css({outline:"none"}));c.enabled&&(this.focusElement&&this.focusElement.removeFocusBorder(),a.addFocusBorder(c.margin,{stroke:c.style.color,strokeWidth:c.style.lineWidth,borderRadius:c.style.borderRadius}),this.focusElement=a)};c.Point.prototype.highlight=function(){var a=this.series.chart;if(this.isNull)a.tooltip&&a.tooltip.hide(0);else this.onMouseOver();this.graphic&&a.setFocusToElement(this.graphic);a.highlightedPoint=this;return this};c.Chart.prototype.highlightAdjacentPoint=
function(a){var b=this.series,c=this.highlightedPoint,d=c&&c.index||0,f=c&&c.series.points,e=this.series&&this.series[this.series.length-1],e=e&&e.points&&e.points[e.points.length-1];if(!b[0]||!b[0].points)return!1;if(c){if(f[d]!==c)for(e=0;e<f.length;++e)if(f[e]===c){d=e;break}b=b[c.series.index+(a?1:-1)];d=f[d+(a?1:-1)]||b&&b.points[a?0:b.points.length-1];if(!d)return!1}else d=a?b[0].points[0]:e;return n(d)?(this.highlightedPoint=d,this.highlightAdjacentPoint(a)):d.highlight()};c.Series.prototype.highlightFirstValidPoint=
function(){var a=this.chart.highlightedPoint,b=(a&&a.series)===this?a.index:0;if(a=this.points){for(var c=b,d=a.length;c<d;++c)if(!n(a[c]))return a[c].highlight();for(;0<=b;--b)if(!n(a[b]))return a[b].highlight()}return!1};c.Chart.prototype.highlightAdjacentSeries=function(a){var b,c,d=this.highlightedPoint,f=(b=this.series&&this.series[this.series.length-1])&&b.points&&b.points[b.points.length-1];if(!this.highlightedPoint)return b=a?this.series&&this.series[0]:b,(c=a?b&&b.points&&b.points[0]:f)?
c.highlight():!1;b=this.series[d.series.index+(a?-1:1)];if(!b)return!1;var f=Infinity,e,g=b.points.length;if(void 0===d.plotX||void 0===d.plotY)c=void 0;else{for(;g--;)e=b.points[g],void 0!==e.plotX&&void 0!==e.plotY&&(e=(d.plotX-e.plotX)*(d.plotX-e.plotX)*4+(d.plotY-e.plotY)*(d.plotY-e.plotY)*1,e<f&&(f=e,c=g));c=void 0!==c&&b.points[c]}if(!c)return!1;if(!b.visible)return c.highlight(),a=this.highlightAdjacentSeries(a),a?a:(d.highlight(),!1);c.highlight();return c.series.highlightFirstValidPoint()};
c.Chart.prototype.highlightAdjacentPointVertical=function(a){var b=this.highlightedPoint,c=Infinity,d;if(void 0===b.plotX||void 0===b.plotY)return!1;h(this.series,function(m){h(m.points,function(e){if(void 0!==e.plotY&&void 0!==e.plotX&&e!==b){var f=e.plotY-b.plotY,r=Math.abs(e.plotX-b.plotX),r=Math.abs(f)*Math.abs(f)+r*r*4;m.yAxis.reversed&&(f*=-1);!(0>f&&a||0<f&&!a||5>r||n(e))&&r<c&&(c=r,d=e)}})});return d?d.highlight():!1};c.Chart.prototype.showExportMenu=function(){this.exportSVGElements&&this.exportSVGElements[0]&&
(this.exportSVGElements[0].element.onclick(),this.highlightExportItem(0))};c.Chart.prototype.hideExportMenu=function(){var a=this.exportDivElements;if(a){h(a,function(b){p(b,"mouseleave")});if(a[this.highlightedExportItem]&&a[this.highlightedExportItem].onmouseout)a[this.highlightedExportItem].onmouseout();this.highlightedExportItem=0;e&&this.renderTo.focus()}};c.Chart.prototype.highlightExportItem=function(a){var b=this.exportDivElements&&this.exportDivElements[a],c=this.exportDivElements&&this.exportDivElements[this.highlightedExportItem];
if(b&&"DIV"===b.tagName&&(!b.children||!b.children.length)){b.focus&&e&&b.focus();if(c&&c.onmouseout)c.onmouseout();if(b.onmouseover)b.onmouseover();this.highlightedExportItem=a;return!0}};c.Chart.prototype.highlightLastExportItem=function(){var a;if(this.exportDivElements)for(a=this.exportDivElements.length;a--&&!this.highlightExportItem(a););};c.Chart.prototype.highlightRangeSelectorButton=function(a){var b=this.rangeSelector.buttons;b[this.highlightedRangeSelectorItemIx]&&b[this.highlightedRangeSelectorItemIx].setState(this.oldRangeSelectorItemState||
0);this.highlightedRangeSelectorItemIx=a;return b[a]?(this.setFocusToElement(b[a].box,b[a]),this.oldRangeSelectorItemState=b[a].state,b[a].setState(2),!0):!1};c.Chart.prototype.highlightLegendItem=function(a){var b=this.legend.allItems,c=this.highlightedLegendItemIx;return b[a]?(b[c]&&p(b[c].legendGroup.element,"mouseout"),void 0!==b[a].pageIx&&b[a].pageIx+1!==this.legend.currentPage&&this.legend.scroll(1+b[a].pageIx-this.legend.currentPage),this.highlightedLegendItemIx=a,this.setFocusToElement(b[a].legendItem,
b[a].legendGroup),p(b[a].legendGroup.element,"mouseover"),!0):!1};c.Chart.prototype.addKeyboardNavigationModules=function(){function a(a,c,d){return new u(b,l({keyCodeMap:c},{id:a},d))}var b=this;b.keyboardNavigationModules=[a("entry",[]),a("points",[[[37,39],function(a){a=39===a;return b.highlightAdjacentPoint(a)?!0:this.init(a?1:-1)}],[[38,40],function(a){a=38!==a;var c=b.options.accessibility.keyboardNavigation;if(c.mode&&"serialize"===c.mode)return b.highlightAdjacentPoint(a)?!0:this.init(a?1:
-1);b[b.highlightedPoint&&b.highlightedPoint.series.keyboardMoveVertical?"highlightAdjacentPointVertical":"highlightAdjacentSeries"](a);return!0}],[[13,32],function(){b.highlightedPoint&&b.highlightedPoint.firePointEvent("click")}]],{init:function(a){var c=b.series.length,d=0<a?0:c;if(0<a)for(delete b.highlightedPoint;d<c;){if(a=b.series[d].highlightFirstValidPoint())return a;++d}else for(;d--;)if(b.highlightedPoint=b.series[d].points[b.series[d].points.length-1],a=b.series[d].highlightFirstValidPoint())return a},
terminate:function(){b.tooltip&&b.tooltip.hide(0);delete b.highlightedPoint}}),a("exporting",[[[37,38],function(){for(var a=b.highlightedExportItem||0,c=!0;a--;)if(b.highlightExportItem(a)){c=!1;break}if(c)return b.highlightLastExportItem(),!0}],[[39,40],function(){for(var a=!0,c=(b.highlightedExportItem||0)+1;c<b.exportDivElements.length;++c)if(b.highlightExportItem(c)){a=!1;break}if(a)return b.highlightExportItem(0),!0}],[[13,32],function(){t(b.exportDivElements[b.highlightedExportItem])}]],{validate:function(){return b.exportChart&&
!(b.options.exporting&&!1===b.options.exporting.enabled)},init:function(a){b.highlightedPoint=null;b.showExportMenu();0>a&&b.highlightLastExportItem()},terminate:function(){b.hideExportMenu()}}),a("mapZoom",[[[38,40,37,39],function(a){b[38===a||40===a?"yAxis":"xAxis"][0].panStep(39>a?-1:1)}],[[9],function(a,c){b.mapNavButtons[b.focusedMapNavButtonIx].setState(0);if(c.shiftKey&&!b.focusedMapNavButtonIx||!c.shiftKey&&b.focusedMapNavButtonIx)return b.mapZoom(),this.move(c.shiftKey?-1:1);b.focusedMapNavButtonIx+=
c.shiftKey?-1:1;a=b.mapNavButtons[b.focusedMapNavButtonIx];b.setFocusToElement(a.box,a);a.setState(2)}],[[13,32],function(){t(b.mapNavButtons[b.focusedMapNavButtonIx].element)}]],{validate:function(){return b.mapZoom&&b.mapNavButtons&&2===b.mapNavButtons.length},init:function(a){var c=b.mapNavButtons[0],d=b.mapNavButtons[1],c=0<a?c:d;h(b.mapNavButtons,function(a,c){a.element.setAttribute("tabindex",-1);a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.mapZoom"+
(c?"Out":"In"),{chart:b}))});b.setFocusToElement(c.box,c);c.setState(2);b.focusedMapNavButtonIx=0<a?0:1}}),a("rangeSelector",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;if(!b.highlightRangeSelectorButton(b.highlightedRangeSelectorItemIx+a))return this.move(a)}],[[13,32],function(){3!==b.oldRangeSelectorItemState&&t(b.rangeSelector.buttons[b.highlightedRangeSelectorItemIx].element)}]],{validate:function(){return b.rangeSelector&&b.rangeSelector.buttons&&b.rangeSelector.buttons.length},init:function(a){h(b.rangeSelector.buttons,
function(a){a.element.setAttribute("tabindex","-1");a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.rangeSelectorButton",{chart:b,buttonText:a.text&&a.text.textStr}))});b.highlightRangeSelectorButton(0<a?0:b.rangeSelector.buttons.length-1)}}),a("rangeSelectorInput",[[[9,38,40],function(a,c){a=9===a&&c.shiftKey||38===a?-1:1;c=b.highlightedInputRangeIx+=a;if(1<c||0>c)return this.move(a);b.rangeSelector[c?"maxInput":"minInput"].focus()}]],{validate:function(){return b.rangeSelector&&
b.rangeSelector.inputGroup&&"hidden"!==b.rangeSelector.inputGroup.element.getAttribute("visibility")&&!1!==b.options.rangeSelector.inputEnabled&&b.rangeSelector.minInput&&b.rangeSelector.maxInput},init:function(a){b.highlightedInputRangeIx=0<a?0:1;b.rangeSelector[b.highlightedInputRangeIx?"maxInput":"minInput"].focus()}}),a("legend",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;!b.highlightLegendItem(b.highlightedLegendItemIx+a)&&1<b.legend.allItems.length&&this.init(a)}],[[13,32],function(){t(b.legend.allItems[b.highlightedLegendItemIx].legendItem.element.parentNode)}]],
{validate:function(){return b.legend&&b.legend.allItems&&b.legend.display&&!(b.colorAxis&&b.colorAxis.length)&&!1!==(b.options.legend&&b.options.legend.keyboardNavigation&&b.options.legend.keyboardNavigation.enabled)},init:function(a){h(b.legend.allItems,function(a){a.legendGroup.element.setAttribute("tabindex","-1");a.legendGroup.element.setAttribute("role","button");a.legendGroup.element.setAttribute("aria-label",b.langFormat("accessibility.legendItem",{chart:b,itemName:q(a.name)}))});b.highlightLegendItem(0<
a?0:b.legend.allItems.length-1)}})]};c.Chart.prototype.addExitAnchor=function(){var a=this;a.tabExitAnchor=k.createElement("div");a.tabExitAnchor.setAttribute("tabindex","0");l(!0,a.tabExitAnchor.style,{position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"});a.renderTo.appendChild(a.tabExitAnchor);return g(a.tabExitAnchor,"focus",function(b){b=b||f.event;a.exiting?a.exiting=!1:(a.renderTo.focus(),b.preventDefault(),a.keyboardNavigationModuleIndex=a.keyboardNavigationModules.length-
1,b=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex],b.validate&&!b.validate()?b.move(-1):b.init(-1))})};c.Chart.prototype.resetKeyboardNavigation=function(){var a=this.keyboardNavigationModules&&this.keyboardNavigationModules[this.keyboardNavigationModuleIndex||0];a&&a.terminate&&a.terminate();this.focusElement&&this.focusElement.removeFocusBorder();this.keyboardNavigationModuleIndex=0;this.keyboardReset=!0};c.addEvent(c.Series,"destroy",function(){var a=this.chart;a.highlightedPoint&&
a.highlightedPoint.series===this&&(delete a.highlightedPoint,a.focusElement&&a.focusElement.removeFocusBorder())});c.Chart.prototype.callbacks.push(function(a){var b=a.options.accessibility;b.enabled&&b.keyboardNavigation.enabled&&(e=!!a.renderTo.getElementsByTagName("g")[0].focus,a.addKeyboardNavigationModules(),a.keyboardNavigationModuleIndex=0,a.container.hasAttribute&&!a.container.hasAttribute("tabIndex")&&a.container.setAttribute("tabindex","0"),a.tabExitAnchor||(a.unbindExitAnchorFocus=a.addExitAnchor()),
a.unbindKeydownHandler=g(a.renderTo,"keydown",function(b){b=b||f.event;var c=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex];a.keyboardReset=!1;c&&c.run(b)&&b.preventDefault()}),a.unbindBlurHandler=g(k,"mouseup",function(){a.keyboardReset||a.pointer&&a.pointer.chartPosition||a.resetKeyboardNavigation()}),g(a,"destroy",function(){a.resetKeyboardNavigation();a.unbindExitAnchorFocus&&a.tabExitAnchor&&a.unbindExitAnchorFocus();a.unbindKeydownHandler&&a.renderTo&&a.unbindKeydownHandler();
a.unbindBlurHandler&&a.unbindBlurHandler()}))})})(q)});
