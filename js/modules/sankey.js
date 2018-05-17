/*
  Highcharts JS v6.1.0-modified (2018-05-16)
 Sankey diagram module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:m(Highcharts)})(function(m){(function(e){var m=e.defined,f=e.each,N=e.extend,O=e.seriesType,P=e.pick,n=e.Point;O("sankey","column",{colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){return""},inside:!0},nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1}},tooltip:{followPointer:!0,
headerFormat:'\x3cspan class\x3d"highcharts-header"\x3e{series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"{point.fromNode.name} \u2192 {point.toNode.name}: \x3cb\x3e{point.weight}\x3c/b\x3e\x3cbr/\x3e",nodeFormat:"{point.name}: \x3cb\x3e{point.sum}\x3c/b\x3e\x3cbr/\x3e"}},{isCartesian:!1,forceDL:!0,createNode:function(b){function a(a,b){return e.find(a,function(a){return a.id===b})}var c=a(this.nodes,b),d;c||(d=this.options.nodes&&a(this.options.nodes,b),c=(new n).init(this,N({className:"highcharts-node",
isNode:!0,id:b,y:1},d)),c.linksTo=[],c.linksFrom=[],c.formatPrefix="node",c.name=c.name||c.id,c.getSum=function(){var a=0,b=0;f(c.linksTo,function(b){a+=b.weight});f(c.linksFrom,function(a){b+=a.weight});return Math.max(a,b)},c.offset=function(a,b){for(var h=0,d=0;d<c[b].length;d++){if(c[b][d]===a)return h;h+=c[b][d].weight}},c.hasShape=function(){var a=0;f(c.linksTo,function(b){b.outgoing&&a++});return!c.linksTo.length||a!==c.linksTo.length},this.nodes.push(c));return c},createNodeColumn:function(){var b=
this.chart,a=[],c=this.options.nodePadding;a.sum=function(){var a=0;f(this,function(b){a+=b.getSum()});return a};a.offset=function(b,h){for(var d=0,e=0;e<a.length;e++){if(a[e]===b)return d+(b.options.offset||0);d+=a[e].getSum()*h+c}};a.top=function(d){for(var h=0,e=0;e<a.length;e++)0<e&&(h+=c),h+=a[e].getSum()*d;return(b.plotSizeY-h)/2};return a},createNodeColumns:function(){var b=[];f(this.nodes,function(a){var c=-1,d,h;if(!e.defined(a.options.column))if(0===a.linksTo.length)a.column=0;else{for(d=
0;d<a.linksTo.length;d++)h=a.linksTo[0],h.fromNode.column>c&&(c=h.fromNode.column);a.column=c+1}b[a.column]||(b[a.column]=this.createNodeColumn());b[a.column].push(a)},this);return b},generatePoints:function(){var b={};e.Series.prototype.generatePoints.call(this);this.nodes||(this.nodes=[]);this.colorCounter=0;f(this.nodes,function(a){a.linksFrom.length=0;a.linksTo.length=0});f(this.points,function(a){m(a.from)&&(b[a.from]||(b[a.from]=this.createNode(a.from)),b[a.from].linksFrom.push(a),a.fromNode=
b[a.from],a.colorIndex=P(a.options.colorIndex,b[a.from].colorIndex));m(a.to)&&(b[a.to]||(b[a.to]=this.createNode(a.to)),b[a.to].linksTo.push(a),a.toNode=b[a.to]);a.name=a.name||a.id},this)},translate:function(){this.processedXData||this.processData();this.generatePoints();this.nodeColumns=this.createNodeColumns();var b=this.chart,a=b.inverted,c=this.options,e=0,h=c.nodeWidth,m=this.nodeColumns,C=(b.plotSizeX-h)/(m.length-1),D=(a?-C:C)*c.curveFactor,p=Infinity;f(this.nodeColumns,function(a){p=Math.min(p,
(b.plotSizeY-(a.length-1)*c.nodePadding)/a.sum())});f(this.nodeColumns,function(c){f(c,function(d){var n=d.getSum(),v=n*p,G=c.top(p)+c.offset(d,p),q=a?b.plotSizeX-e:e;d.sum=n;d.shapeType="rect";d.shapeArgs=a?{x:q-h,y:b.plotSizeY-G-v,width:h,height:v}:{x:q,y:G,width:h,height:v};d.shapeArgs.display=d.hasShape()?"":"none";d.plotY=1;f(d.linksFrom,function(c){var g=c.weight*p,l=d.offset(c,"linksFrom")*p,l=G+l,k=c.toNode,f=m[k.column].top(p)+k.offset(c,"linksTo")*p+m[k.column].offset(k,p),r=h,k=k.column*
C,w=c.outgoing;a&&(l=b.plotSizeY-l,f=b.plotSizeY-f,k=b.plotSizeX-k,r=-r,g=-g);c.shapeType="path";if(k>e)c.shapeArgs={d:["M",q+r,l,"C",q+r+D,l,k-D,f,k,f,"L",k+(w?r:0),f+g/2,"L",k,f+g,"C",k-D,f+g,q+r+D,l+g,q+r,l+g,"z"]};else{var w=k-20-g,x=k-20,n=k,y=q+r,u=y+20,E=u+g,v=l,z=l+g,H=z+20,A=H+(b.plotHeight-l-g),t=A+20,F=t+g,I=f,B=I+g,J=B+20,K=t+.7*g,L=n-.7*g,M=y+.7*g;c.shapeArgs={d:["M",y,v,"C",M,v,E,z-.7*g,E,H,"L",E,A,"C",E,K,M,F,y,F,"L",n,F,"C",L,F,w,K,w,A,"L",w,J,"C",w,B-.7*g,L,I,n,I,"L",n,B,"C",x,B,
x,B,x,J,"L",x,A,"C",x,t,x,t,n,t,"L",y,t,"C",u,t,u,t,u,A,"L",u,H,"C",u,z,u,z,y,z,"z"]}}c.dlBox={x:q+(k-q+r)/2,y:l+(f-l)/2,height:g,width:0};c.y=c.plotY=1;c.color||(c.color=d.color)})});e+=C},this)},render:function(){var b=this.points;this.points=this.points.concat(this.nodes);e.seriesTypes.column.prototype.render.call(this);this.points=b},animate:e.Series.prototype.animate},{getClassName:function(){return"highcharts-link "+n.prototype.getClassName.call(this)},isValid:function(){return this.isNode||
"number"===typeof this.weight}})})(m)});
