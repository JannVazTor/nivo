"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[3108],{15050:function(e,t,o){o.d(t,{Ym:function(){return n},yB:function(){return r},Y2:function(){return a},UD:function(){return l},iM:function(){return i}});var n=1e3,r=6e4,a=36e5,l=864e5,i=6048e5},61904:function(e,t,o){o.d(t,{Z:function(){return a}});var n=new Date,r=new Date;function a(e,t,o,l){function i(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return i.floor=function(t){return e(t=new Date(+t)),t},i.ceil=function(o){return e(o=new Date(o-1)),t(o,1),e(o),o},i.round=function(e){var t=i(e),o=i.ceil(e);return e-t<o-e?t:o},i.offset=function(e,o){return t(e=new Date(+e),null==o?1:Math.floor(o)),e},i.range=function(o,n,r){var a,l=[];if(o=i.ceil(o),r=null==r?1:Math.floor(r),!(o<n&&r>0))return l;do{l.push(a=new Date(+o)),t(o,r),e(o)}while(a<o&&o<n);return l},i.filter=function(o){return a((function(t){if(t>=t)for(;e(t),!o(t);)t.setTime(t-1)}),(function(e,n){if(e>=e)if(n<0)for(;++n<=0;)for(;t(e,-1),!o(e););else for(;--n>=0;)for(;t(e,1),!o(e););}))},o&&(i.count=function(t,a){return n.setTime(+t),r.setTime(+a),e(n),e(r),Math.floor(o(n,r))},i.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?i.filter(l?function(t){return l(t)%e==0}:function(t){return i.count(0,t)%e==0}):i:null}),i}},91991:function(e,t,o){o.d(t,{X:function(){return i}});var n=o(53486),r=o(80169),a=n.Ko,l=[{key:"data",group:"Base",help:"The hierarchical data object.",type:"object",required:!0},{key:"identity",group:"Base",help:"The key or function to use to retrieve nodes identity.",type:"string | Function",required:!1,defaultValue:a.identity},{key:"value",group:"Base",help:"The key or function to use to retrieve nodes value.",type:"string | Function",required:!1,defaultValue:"value"},{key:"valueFormat",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",type:"string | Function",required:!1,controlType:"valueFormat",group:"Base"},{key:"tile",group:"Base",help:"Strategy used to compute nodes.",description:"\n            Strategy used to compute nodes, see\n            [official d3 documentation](https://github.com/mbostock/d3/wiki/Treemap-Layout#mode).\n        ",type:"string",required:!1,defaultValue:"squarify",controlType:"choices",controlOptions:{choices:[{label:"binary",value:"binary"},{label:"squarify",value:"squarify"},{label:"slice",value:"slice"},{label:"dice",value:"dice"},{label:"sliceDice",value:"sliceDice"},{label:"resquarify",value:"resquarify"}]}},{key:"leavesOnly",help:"Only render leaf nodes (no parent).",type:"boolean",required:!1,defaultValue:a.leavesOnly,controlType:"switch",group:"Base"},{key:"innerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:a.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"outerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:a.outerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"width",group:"Base",flavors:["svg","canvas","html","api"],enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"height",group:"Base",flavors:["svg","canvas","html","api"],enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"colors",help:"Defines how to compute node color.",type:"string | Function | string[]",required:!1,defaultValue:a.colors,controlType:"ordinalColors",group:"Style"},{key:"nodeOpacity",help:"Node opacity (0~1).",required:!1,defaultValue:a.nodeOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Control node border width.",type:"number",required:!1,defaultValue:a.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:a.borderColor,controlType:"inheritedColor",group:"Style"}].concat((0,r.uE)("Style",["svg"]),[{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:a.enableLabel,controlType:"switch",group:"Labels"},{key:"label",help:"Label accessor.",description:"Defines how to get label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["formattedValue","id","node => `${node.id} (${node.formattedValue})`"].map((function(e){return{label:e,value:e}}))}},{key:"labelSkipSize",help:"Skip label rendering if node minimal side length is lower than given value, 0 to disable.",type:"number",required:!1,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:100}},{key:"orientLabel",help:"Orient labels according to max node width/height.",type:"boolean",required:!1,defaultValue:a.orientLabel,controlType:"switch",group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"enableParentLabel",flavors:["svg","html","api"],help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:a.enableParentLabel,controlType:"switch",group:"Labels"},{key:"parentLabel",flavors:["svg","html","api"],help:"Parent label accessor.",description:"Defines how to get parent label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["id","formattedValue","node => node.pathComponents.join(' / ')"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelSize",flavors:["svg","html","api"],help:"Parent label size.",required:!1,defaultValue:a.parentLabelSize,type:"number",controlType:"range",group:"Labels",controlOptions:{min:10,max:40}},{key:"parentLabelPosition",flavors:["svg","html","api"],help:"Parent label position.",type:"'top' | 'right' | 'bottom' | 'left'",required:!1,controlType:"choices",group:"Labels",defaultValue:a.parentLabelPosition,controlOptions:{choices:["top","right","bottom","left"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelPadding",flavors:["svg","html","api"],help:"Parent label padding.",required:!1,defaultValue:a.parentLabelPadding,type:"number",controlType:"range",group:"Labels",controlOptions:{min:0,max:20}},{key:"parentLabelTextColor",flavors:["svg","html","api"],help:"Method to compute parent label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"isInteractive",flavors:["svg","html","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:a.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseEnter handler.",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onMouseMove handler.",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseLeave handler.",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onClick handler.",required:!1}],(0,r.$j)(["svg","html","canvas"],a,"react-spring")),i=(0,r.R2)(l)},9953:function(e,t,o){o.d(t,{i:function(){return u},g:function(){return p}});var n=o(38681),r=o(4215),a=o.n(r),l=o(91311),i=o.n(l),u=function(){return{root:(0,n.UE)()}},p=function(){return{root:{id:"root",children:a()(600).map((function(e){return{id:"node."+e,value:i()(10,1e5)}}))},nodeCount:600}}},53944:function(e,t,o){var n=o(62370);t.Z=(0,n.h8)({label:function(e){return"node => `${node.id} (${node.formattedValue})`"===e?function(e){return e.id+" ("+e.formattedValue+")"}:e},parentLabel:function(e){return"node => node.pathComponents.join(' / ')"===e?function(e){return e.pathComponents.join(" / ")}:e},valueFormat:n.Ld})},17641:function(e,t,o){o.r(t);o(27378);var n=o(53486),r=o(95546),a=o(73447),l=o(91991),i=o(53944),u=o(9953),p=o(5692),d=o(24246),s=(0,u.i)().root;t.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{title:"TreeMap HTTP API",keywords:[].concat(p.SY.tags,["HTTP API"])}),(0,d.jsx)(a.Z,{componentName:"TreeMap",chartClass:"treemap",apiPath:"/charts/treemap",flavors:p.Kk,dataProperty:"data",controlGroups:l.X,propsMapper:i.Z,defaultProps:{data:JSON.stringify(s,null,"  "),identity:"name",value:"loc",valueFormat:{format:".02s",enabled:!0},tile:n.Ko.tile,leavesOnly:n.Ko.leavesOnly,innerPadding:n.Ko.innerPadding,outerPadding:n.Ko.outerPadding,width:800,height:560,margin:{top:10,right:10,bottom:10,left:10},enableLabel:n.Ko.enableLabel,label:n.Ko.label,labelSkipSize:12,labelTextColor:{from:"color",modifiers:[["darker",1.2]]},orientLabel:n.Ko.orientLabel,enableParentLabel:n.Ko.enableParentLabel,parentLabel:n.Ko.parentLabel,parentLabelSize:n.Ko.parentLabelSize,parentLabelPosition:n.Ko.parentLabelPosition,parentLabelPadding:n.Ko.parentLabelPadding,parentLabelTextColor:{from:"color",modifiers:[["darker",2]]},colors:n.Ko.colors,colorBy:n.Ko.colorBy,nodeOpacity:n.Ko.nodeOpacity,borderWidth:n.Ko.borderWidth,borderColor:{from:"color",modifiers:[["darker",.1]]}}})]})}}}]);
//# sourceMappingURL=component---src-pages-treemap-api-js-f2e05e8b044f0cf93822.js.map