/*
 Highcharts JS v6.1.0-modified (2018-05-17)
 Module for adding patterns and images as point fills.

 (c) 2010-2018 Highsoft AS
 Author: Torstein Hnsi, ystein Moseng

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:g(Highcharts)})(function(g){(function(e){function g(b,a){b=JSON.stringify(b);var d=b.length||0,c=0,e=0;if(a){a=Math.max(Math.floor(d/500),1);for(var f=0;f<d;f+=a)c+=b.charCodeAt(f);c&=c}for(;e<d;++e)a=b.charCodeAt(e),c=(c<<5)-c+a,c&=c;return c.toString(16).replace("-","1")}var m=e.wrap,k=e.each,n=e.merge;e.Point.prototype.calculatePatternDimensions=function(b){if(!b.width||!b.height){var a=this.graphic&&(this.graphic.getBBox&&
this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},d=this.shapeArgs;d&&(a.width=d.width||a.width,a.height=d.height||a.height,a.x=d.x||a.x,a.y=d.y||a.y);if(b.image){if(!a.width||!a.height){b._width="defer";b._height="defer";return}b.aspectRatio&&(a.aspectRatio=a.width/a.height,b.aspectRatio>a.aspectRatio?a.aspectWidth=a.height*b.aspectRatio:a.aspectHeight=a.width/b.aspectRatio);b._width=b.width||Math.ceil(a.aspectWidth||a.width);b._height=b.height||Math.ceil(a.aspectHeight||
a.height)}b.width||(b._x=b.x||0,b._x+=a.x-Math.round(a.aspectWidth?Math.abs(a.aspectWidth-a.width)/2:0));b.height||(b._y=b.y||0,b._y+=a.y-Math.round(a.aspectHeight?Math.abs(a.aspectHeight-a.height)/2:0))}};e.SVGRenderer.prototype.addPattern=function(b,a){var d,c=e.pick(a,!0),h=b.width||b._width||32,f=b.height||b._height||32,g=b.color||"#343434",l=b.id,m=this,n=function(a){m.rect(0,0,h,f).attr({fill:a}).add(d)};l||(this.idCounter=this.idCounter||0,l="highcharts-pattern-"+this.idCounter,++this.idCounter);
this.defIds=this.defIds||[];if(!(-1<e.inArray(l,this.defIds)))return this.defIds.push(l),d=this.createElement("pattern").attr({id:l,patternUnits:"userSpaceOnUse",width:h,height:f,x:b._x||b.x||0,y:b._y||b.y||0}).add(this.defs),d.id=l,b.path?(a=b.path,a.fill&&n(a.fill),this.createElement("path").attr({d:a.d||a,stroke:a.stroke||g,"stroke-width":a.strokeWidth||2}).add(d),d.color=g):b.image&&(c?this.image(b.image,0,0,h,f,function(){this.animate({opacity:1},c);e.removeEvent(this.element,"load")}).attr({opacity:0}).add(d):
this.image(b.image,0,0,h,f).add(d)),void 0!==b.opacity&&k(d.element.childNodes,function(a){a.setAttribute("opacity",b.opacity)}),this.patternElements=this.patternElements||{},this.patternElements[l]=d};m(e.Series.prototype,"getColor",function(b){var a=this.options.color;a&&a.pattern&&!a.pattern.color?(delete this.options.color,b.apply(this,Array.prototype.slice.call(arguments,1)),a.pattern.color=this.color,this.color=this.options.color=a):b.apply(this,Array.prototype.slice.call(arguments,1))});m(e.Series.prototype,
"render",function(b){var a=this.chart.isResizing;(this.isDirtyData||a||!this.chart.hasRendered)&&k(this.points||[],function(b){var c=b.options&&b.options.color;c&&c.pattern&&(!a||b.shapeArgs&&b.shapeArgs.width&&b.shapeArgs.height?b.calculatePatternDimensions(c.pattern):(c.pattern._width="defer",c.pattern._height="defer"))});return b.apply(this,Array.prototype.slice.call(arguments,1))});m(e.Point.prototype,"applyOptions",function(b){var a=b.apply(this,Array.prototype.slice.call(arguments,1)),d=a.options.color;
d&&d.pattern&&("string"===typeof d.pattern.path&&(d.pattern.path={d:d.pattern.path}),a.color=a.options.color=n(a.series.options.color,d));return a});e.addEvent(e.SVGRenderer,"complexColor",function(b){var a=b.args[0],d=b.args[1];b=b.args[2];var c=a.pattern,h="#343434",f;if(!c)return!0;if(c.image||"string"===typeof c.path||c.path&&c.path.d){f=(f=b.parentNode&&b.parentNode.getAttribute("class"))&&-1<f.indexOf("highcharts-legend");"defer"!==c._width&&"defer"!==c._height||e.Point.prototype.calculatePatternDimensions.call({graphic:{element:b}},
c);if(f||!c.id)c=n({},c),c.id="highcharts-pattern-"+g(c)+g(c,!0);this.addPattern(c,!this.forExport&&e.animObject(e.pick(c.animation,this.globalAnimation,{duration:100})));h="url("+this.url+"#"+c.id+")"}else h=c.color||h;b.setAttribute(d,h);a.toString=function(){return h};return!1});e.addEvent(e.Chart,"endResize",function(){e.grep(this.renderer.defIds||[],function(b){return b&&b.indexOf&&0===b.indexOf("highcharts-pattern-")}).length&&(k(this.series,function(b){k(b.points,function(a){(a=a.options&&
a.options.color)&&a.pattern&&(a.pattern._width="defer",a.pattern._height="defer")})}),this.redraw(!1))});e.addEvent(e.Chart,"redraw",function(){var b=[],a=this.renderer,d=e.grep(a.defIds||[],function(a){return a.indexOf&&0===a.indexOf("highcharts-pattern-")});d.length&&(k(this.renderTo.querySelectorAll('[color^\x3d"url(#"], [fill^\x3d"url(#"], [stroke^\x3d"url(#"]'),function(a){(a=a.getAttribute("fill")||a.getAttribute("color")||a.getAttribute("stroke"))&&b.push(a.substring(a.indexOf("url(#")+5).replace(")",
""))}),k(d,function(c){-1===e.inArray(c,b)&&(e.erase(a.defIds,c),a.patternElements[c]&&(a.patternElements[c].destroy(),delete a.patternElements[c]))}))});e.Chart.prototype.callbacks.push(function(b){var a=e.getOptions().colors;k("M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11;M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9;M 3 0 L 3 10 M 8 0 L 8 10;M 0 3 L 10 3 M 0 8 L 10 8;M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7;M 3 3 L 8 3 L 8 8 L 3 8 Z;M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0;M 10 3 L 5 3 L 5 0 M 5 10 L 5 7 L 0 7;M 2 5 L 5 2 L 8 5 L 5 8 Z;M 0 0 L 5 10 L 10 0".split(";"),
function(d,c){b.renderer.addPattern({id:"highcharts-default-pattern-"+c,path:d,color:a[c],width:10,height:10})})})})(g)});
