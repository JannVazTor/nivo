"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[199],{"./stories/funnel/Funnel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CombiningWithOtherCharts:()=>CombiningWithOtherCharts,CustomTooltip:()=>CustomTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Funnel_stories});var react=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),nivo_core_es=__webpack_require__("../packages/core/dist/nivo-core.es.js"),src_area=__webpack_require__("../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/area.js"),basis=__webpack_require__("../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/basis.js"),linear=__webpack_require__("../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/curve/linear.js"),line=__webpack_require__("../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/line.js"),src_linear=__webpack_require__("../node_modules/.pnpm/d3-scale@3.3.0/node_modules/d3-scale/src/linear.js"),nivo_colors_es=__webpack_require__("../packages/colors/dist/nivo-colors.es.js"),nivo_annotations_es=__webpack_require__("../packages/annotations/dist/nivo-annotations.es.js"),nivo_tooltip_es=__webpack_require__("../packages/tooltip/dist/nivo-tooltip.es.js"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../node_modules/.pnpm/@react-spring+web@9.7.2_react-dom@18.2.0_react@18.2.0/node_modules/@react-spring/web/dist/esm/index.js");function B(){return B=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},B.apply(this,arguments)}var E={layers:["separators","parts","labels","annotations"],direction:"vertical",interpolation:"smooth",spacing:0,shapeBlending:.66,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:6,borderColor:{from:"color"},borderOpacity:.66,enableLabel:!0,labelColor:{theme:"background"},enableBeforeSeparators:!0,beforeSeparatorLength:0,beforeSeparatorOffset:0,enableAfterSeparators:!0,afterSeparatorLength:0,afterSeparatorOffset:0,annotations:[],isInteractive:!0,currentPartSizeExtension:0,role:"img",animate:nivo_core_es.FJ.defaultProps.animate,motionConfig:nivo_core_es.FJ.defaultProps.config},W=function(r){var e=r.part;return(0,jsx_runtime.jsx)(nivo_tooltip_es._5,{id:e.data.label,value:e.formattedValue,color:e.color,enableChip:!0})},z=function(r){var e=r.parts,o=r.setCurrentPartId,a=r.isInteractive,n=r.onMouseEnter,i=r.onMouseLeave,s=r.onMouseMove,p=r.onClick,l=r.showTooltipFromEvent,d=r.hideTooltip,u=r.tooltip,f=void 0===u?W:u;return a?e.map((function(r){return B({},r,{onMouseEnter:function(e){o(r.data.id),l((0,react.createElement)(f,{part:r}),e),void 0!==n&&n(r,e)},onMouseLeave:function(e){o(null),d(),void 0!==i&&i(r,e)},onMouseMove:function(e){l((0,react.createElement)(f,{part:r}),e),void 0!==s&&s(r,e)},onClick:void 0!==p?function(e){p(r,e)}:void 0})})):e},F=function(t){var o,a,s=t.data,p=t.width,l=t.height,d=t.direction,u=void 0===d?E.direction:d,f=t.interpolation,c=void 0===f?E.interpolation:f,h=t.spacing,v=void 0===h?E.spacing:h,y=t.shapeBlending,b=void 0===y?E.shapeBlending:y,g=t.valueFormat,S=t.colors,P=void 0===S?E.colors:S,O=t.fillOpacity,M=void 0===O?E.fillOpacity:O,L=t.borderWidth,I=void 0===L?E.borderWidth:L,w=t.borderColor,W=void 0===w?E.borderColor:w,F=t.borderOpacity,T=void 0===F?E.borderOpacity:F,j=t.labelColor,D=void 0===j?E.labelColor:j,V=t.enableBeforeSeparators,H=void 0===V?E.enableBeforeSeparators:V,q=t.beforeSeparatorLength,J=void 0===q?E.beforeSeparatorLength:q,K=t.beforeSeparatorOffset,N=void 0===K?E.beforeSeparatorOffset:K,Q=t.enableAfterSeparators,R=void 0===Q?E.enableAfterSeparators:Q,U=t.afterSeparatorLength,X=void 0===U?E.afterSeparatorLength:U,Y=t.afterSeparatorOffset,Z=void 0===Y?E.afterSeparatorOffset:Y,$=t.isInteractive,_=void 0===$?E.isInteractive:$,rr=t.currentPartSizeExtension,er=void 0===rr?E.currentPartSizeExtension:rr,tr=t.currentBorderWidth,or=t.onMouseEnter,ar=t.onMouseMove,nr=t.onMouseLeave,ir=t.onClick,sr=t.tooltip,pr=(0,nivo_core_es.Fg)(),lr=(0,nivo_colors_es.U)(P,"id"),dr=(0,nivo_colors_es.Bf)(W,pr),ur=(0,nivo_colors_es.Bf)(D,pr),fr=(0,nivo_core_es.O_)(g),cr=(0,react.useMemo)((function(){return function(r,e){var t=(0,src_area.Z)();return"vertical"===e?t.curve("smooth"===r?basis.ZP:linear.Z).x0((function(r){return r.x0})).x1((function(r){return r.x1})).y((function(r){return r.y})):t.curve("smooth"===r?basis.ZP:linear.Z).y0((function(r){return r.y0})).y1((function(r){return r.y1})).x((function(r){return r.x})),[t,(0,line.Z)().defined((function(r){return null!==r})).x((function(r){return r.x})).y((function(r){return r.y})).curve("smooth"===r?basis.ZP:linear.Z)]}(c,u)}),[c,u]),hr=cr[0],vr=cr[1],yr=H?J+N:0,br=R?X+Z:0;"vertical"===u?(o=p-yr-br,a=l):(o=p,a=l-yr-br);var xr=(0,react.useMemo)((function(){return function(r){var e,t,o=r.data,a=r.direction,n=r.width,i=r.height,s=r.spacing;"vertical"===a?(e=i,t=n):(e=n,t=i);var p=(e-s*(o.length-1))/o.length,l=function(r){return s*r+p*r};l.bandwidth=p;var d=o.map((function(r){return r.value}));return[l,(0,src_linear.Z)().domain([0,Math.max.apply(Math,d)]).range([0,t])]}({data:s,direction:u,width:o,height:a,spacing:v})}),[s,u,o,a,v]),mr=xr[0],gr=xr[1],Sr=(0,react.useState)(null),Pr=Sr[0],Cr=Sr[1],Or=(0,react.useMemo)((function(){var r=s.map((function(r,e){var t,n,i,s,p=r.id===Pr;"vertical"===u?(t=gr(r.value),n=mr.bandwidth,s=yr+.5*(o-t),i=mr(e)):(t=mr.bandwidth,n=gr(r.value),s=mr(e),i=yr+.5*(a-n));var l=s+t,d=s+.5*t,f=i+n,c=i+.5*n,h={data:r,width:t,height:n,color:lr(r),fillOpacity:M,borderWidth:p&&void 0!==tr?tr:I,borderOpacity:T,formattedValue:fr(r.value),isCurrent:p,x:d,x0:s,x1:l,y:c,y0:i,y1:f,borderColor:"",labelColor:"",points:[],areaPoints:[],borderPoints:[]};return h.borderColor=dr(h),h.labelColor=ur(h),h})),e=b/2;return r.forEach((function(t,o){var a=r[o+1];if("vertical"===u){t.points.push({x:t.x0,y:t.y0}),t.points.push({x:t.x1,y:t.y0}),a?(t.points.push({x:a.x1,y:t.y1}),t.points.push({x:a.x0,y:t.y1})):(t.points.push({x:t.points[1].x,y:t.y1}),t.points.push({x:t.points[0].x,y:t.y1})),t.isCurrent&&(t.points[0].x-=er,t.points[1].x+=er,t.points[2].x+=er,t.points[3].x-=er),t.areaPoints=[{x:0,x0:t.points[0].x,x1:t.points[1].x,y:t.y0,y0:0,y1:0}],t.areaPoints.push(B({},t.areaPoints[0],{y:t.y0+t.height*e}));var n={x:0,x0:t.points[3].x,x1:t.points[2].x,y:t.y1,y0:0,y1:0};t.areaPoints.push(B({},n,{y:t.y1-t.height*e})),t.areaPoints.push(n),[0,1,2,3].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x0,y:t.areaPoints[r].y})})),t.borderPoints.push(null),[3,2,1,0].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x1,y:t.areaPoints[r].y})}))}else{t.points.push({x:t.x0,y:t.y0}),a?(t.points.push({x:t.x1,y:a.y0}),t.points.push({x:t.x1,y:a.y1})):(t.points.push({x:t.x1,y:t.y0}),t.points.push({x:t.x1,y:t.y1})),t.points.push({x:t.x0,y:t.y1}),t.isCurrent&&(t.points[0].y-=er,t.points[1].y-=er,t.points[2].y+=er,t.points[3].y+=er),t.areaPoints=[{x:t.x0,x0:0,x1:0,y:0,y0:t.points[0].y,y1:t.points[3].y}],t.areaPoints.push(B({},t.areaPoints[0],{x:t.x0+t.width*e}));var i={x:t.x1,x0:0,x1:0,y:0,y0:t.points[1].y,y1:t.points[2].y};t.areaPoints.push(B({},i,{x:t.x1-t.width*e})),t.areaPoints.push(i),[0,1,2,3].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x,y:t.areaPoints[r].y0})})),t.borderPoints.push(null),[3,2,1,0].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x,y:t.areaPoints[r].y1})}))}})),r}),[s,u,gr,mr,o,a,yr,br,b,lr,fr,dr,ur,Pr]),Mr=(0,nivo_tooltip_es.lL)(),Lr=Mr.showTooltipFromEvent,Ir=Mr.hideTooltip,wr=(0,react.useMemo)((function(){return z({parts:Or,setCurrentPartId:Cr,isInteractive:_,onMouseEnter:or,onMouseLeave:nr,onMouseMove:ar,onClick:ir,showTooltipFromEvent:Lr,hideTooltip:Ir,tooltip:sr})}),[Or,Cr,_,or,nr,ar,ir,Lr,Ir,sr]),Br=(0,react.useMemo)((function(){return function(r){var e=r.parts,t=r.direction,o=r.width,a=r.height,n=r.spacing,i=r.enableBeforeSeparators,s=r.beforeSeparatorOffset,p=r.enableAfterSeparators,l=r.afterSeparatorOffset,d=[],u=[],f=e[e.length-1];if("vertical"===t){e.forEach((function(r){var e=r.y0-n/2;i&&d.push({partId:r.data.id,x0:0,x1:r.x0-s,y0:e,y1:e}),p&&u.push({partId:r.data.id,x0:r.x1+l,x1:o,y0:e,y1:e})}));var c=f.y1;i&&d.push(B({},d[d.length-1],{partId:"none",y0:c,y1:c})),p&&u.push(B({},u[u.length-1],{partId:"none",y0:c,y1:c}))}else if("horizontal"===t){e.forEach((function(r){var e=r.x0-n/2;d.push({partId:r.data.id,x0:e,x1:e,y0:0,y1:r.y0-s}),u.push({partId:r.data.id,x0:e,x1:e,y0:r.y1+l,y1:a})}));var h=f.x1;d.push(B({},d[d.length-1],{partId:"none",x0:h,x1:h})),u.push(B({},u[u.length-1],{partId:"none",x0:h,x1:h}))}return[d,u]}({parts:Or,direction:u,width:p,height:l,spacing:v,enableBeforeSeparators:H,beforeSeparatorOffset:N,enableAfterSeparators:R,afterSeparatorOffset:Z})}),[Or,u,p,l,v,H,N,R,Z]),Er=Br[0],Wr=Br[1],Gr=(0,react.useMemo)((function(){return{width:p,height:l,parts:wr,areaGenerator:hr,borderGenerator:vr,beforeSeparators:Er,afterSeparators:Wr,setCurrentPartId:Cr}}),[p,l,wr,hr,vr,Er,Wr,Cr]);return{parts:wr,areaGenerator:hr,borderGenerator:vr,beforeSeparators:Er,afterSeparators:Wr,setCurrentPartId:Cr,currentPartId:Pr,customLayerProps:Gr}},j=function(r){var e=r.part,t=r.areaGenerator,o=r.borderGenerator,a=(0,nivo_core_es.tf)(),n=a.animate,i=a.config,l=(0,nivo_core_es.NS)(t(e.areaPoints)),d=(0,nivo_core_es.NS)(o(e.borderPoints)),u=(0,esm.q_)({areaColor:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,config:i,immediate:!n});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[e.borderWidth>0&&(0,jsx_runtime.jsx)(esm.q.path,{d,stroke:u.borderColor,strokeWidth:u.borderWidth,strokeOpacity:e.borderOpacity,fill:"none"}),(0,jsx_runtime.jsx)(esm.q.path,{d:l,fill:u.areaColor,fillOpacity:e.fillOpacity,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onClick:e.onClick})]})},D=function(r){var e=r.parts,t=r.areaGenerator,o=r.borderGenerator;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:e.map((function(r){return(0,jsx_runtime.jsx)(j,{part:r,areaGenerator:t,borderGenerator:o},r.data.id)}))})},V=function(r){var e=r.part,t=(0,nivo_core_es.Fg)(),o=(0,nivo_core_es.tf)(),a=o.animate,i=o.config,p=(0,esm.q_)({transform:"translate("+e.x+", "+e.y+")",color:e.labelColor,config:i,immediate:!a});return(0,jsx_runtime.jsx)(esm.q.g,{transform:p.transform,children:(0,jsx_runtime.jsx)(esm.q.text,{textAnchor:"middle",dominantBaseline:"central",style:B({},t.labels.text,{fill:p.color,pointerEvents:"none"}),children:e.formattedValue})})},H=function(r){var e=r.parts;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:e.map((function(r){return(0,jsx_runtime.jsx)(V,{part:r},r.data.id)}))})},q=function(r){var e=r.separator,t=(0,nivo_core_es.Fg)(),o=(0,nivo_core_es.tf)(),a=o.animate,i=o.config,p=(0,esm.q_)({x1:e.x0,x2:e.x1,y1:e.y0,y2:e.y1,config:i,immediate:!a});return(0,jsx_runtime.jsx)(esm.q.line,B({x1:p.x1,x2:p.x2,y1:p.y1,y2:p.y2,fill:"none"},t.grid.line))},J=function(r){var e=r.beforeSeparators,t=r.afterSeparators;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[e.map((function(r){return(0,jsx_runtime.jsx)(q,{separator:r},r.partId)})),t.map((function(r){return(0,jsx_runtime.jsx)(q,{separator:r},r.partId)}))]})},K=function(r){var o=function(r,e){return(0,nivo_annotations_es.O2)({data:r,annotations:e,getPosition:function(r){return{x:r.x,y:r.y}},getDimensions:function(r){var e=r.width,t=r.height;return{size:Math.max(e,t),width:e,height:t}}})}(r.parts,r.annotations);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:o.map((function(r,e){return(0,jsx_runtime.jsx)(nivo_annotations_es.q6,B({},r),e)}))})},N=["isInteractive","animate","motionConfig","theme","renderWrapper"],Q=function(r){var e=r.data,a=r.width,n=r.height,i=r.margin,s=r.direction,p=void 0===s?E.direction:s,l=r.interpolation,f=void 0===l?E.interpolation:l,c=r.spacing,h=void 0===c?E.spacing:c,v=r.shapeBlending,y=void 0===v?E.shapeBlending:v,b=r.valueFormat,x=r.colors,m=void 0===x?E.colors:x,g=r.fillOpacity,S=void 0===g?E.fillOpacity:g,P=r.borderWidth,C=void 0===P?E.borderWidth:P,M=r.borderColor,L=void 0===M?E.borderColor:M,I=r.borderOpacity,w=void 0===I?E.borderOpacity:I,B=r.enableLabel,W=void 0===B?E.enableLabel:B,G=r.labelColor,k=void 0===G?E.labelColor:G,A=r.enableBeforeSeparators,z=void 0===A?E.enableBeforeSeparators:A,T=r.beforeSeparatorLength,j=void 0===T?E.beforeSeparatorLength:T,V=r.beforeSeparatorOffset,q=void 0===V?E.beforeSeparatorOffset:V,N=r.enableAfterSeparators,Q=void 0===N?E.enableAfterSeparators:N,R=r.afterSeparatorLength,U=void 0===R?E.afterSeparatorLength:R,X=r.afterSeparatorOffset,Y=void 0===X?E.afterSeparatorOffset:X,Z=r.layers,$=void 0===Z?E.layers:Z,_=r.annotations,rr=void 0===_?E.annotations:_,er=r.isInteractive,tr=void 0===er?E.isInteractive:er,or=r.currentPartSizeExtension,ar=void 0===or?E.currentPartSizeExtension:or,nr=r.currentBorderWidth,ir=r.onMouseEnter,sr=r.onMouseMove,pr=r.onMouseLeave,lr=r.onClick,dr=r.tooltip,ur=r.role,fr=void 0===ur?E.role:ur,cr=r.ariaLabel,hr=r.ariaLabelledBy,vr=r.ariaDescribedBy,yr=(0,nivo_core_es.Bs)(a,n,i),br=yr.margin,xr=yr.innerWidth,mr=yr.innerHeight,gr=yr.outerWidth,Sr=yr.outerHeight,Pr=F({data:e,width:xr,height:mr,direction:p,interpolation:f,spacing:h,shapeBlending:y,valueFormat:b,colors:m,fillOpacity:S,borderWidth:C,borderColor:L,borderOpacity:w,labelColor:k,enableBeforeSeparators:z,beforeSeparatorLength:j,beforeSeparatorOffset:q,enableAfterSeparators:Q,afterSeparatorLength:U,afterSeparatorOffset:Y,isInteractive:tr,currentPartSizeExtension:ar,currentBorderWidth:nr,onMouseEnter:ir,onMouseMove:sr,onMouseLeave:pr,onClick:lr,tooltip:dr}),Cr=Pr.areaGenerator,Or=Pr.borderGenerator,Mr=Pr.parts,Lr=Pr.beforeSeparators,Ir=Pr.afterSeparators,wr=Pr.customLayerProps,Br={separators:null,parts:null,annotations:null,labels:null};return $.includes("separators")&&(Br.separators=(0,jsx_runtime.jsx)(J,{beforeSeparators:Lr,afterSeparators:Ir},"separators")),$.includes("parts")&&(Br.parts=(0,jsx_runtime.jsx)(D,{parts:Mr,areaGenerator:Cr,borderGenerator:Or},"parts")),null!=$&&$.includes("annotations")&&(Br.annotations=(0,jsx_runtime.jsx)(K,{parts:Mr,annotations:rr},"annotations")),$.includes("labels")&&W&&(Br.labels=(0,jsx_runtime.jsx)(H,{parts:Mr},"labels")),(0,jsx_runtime.jsx)(nivo_core_es.tM,{width:gr,height:Sr,margin:br,role:fr,ariaLabel:cr,ariaLabelledBy:hr,ariaDescribedBy:vr,children:$.map((function(r,e){var a;return"function"==typeof r?(0,jsx_runtime.jsx)(react.Fragment,{children:(0,react.createElement)(r,wr)},e):null!=(a=null==Br?void 0:Br[r])?a:null}))})},R=function(r){var e=r.isInteractive,t=void 0===e?E.isInteractive:e,o=r.animate,a=void 0===o?E.animate:o,n=r.motionConfig,i=void 0===n?E.motionConfig:n,s=r.theme,p=r.renderWrapper,d=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,N);return(0,jsx_runtime.jsx)(nivo_core_es.W2,{animate:a,isInteractive:t,motionConfig:i,renderWrapper:p,theme:s,children:(0,jsx_runtime.jsx)(Q,B({isInteractive:t},d))})},U=function(r){return(0,jsx_runtime.jsx)(nivo_core_es.d,{children:function(e){var t=e.width,o=e.height;return(0,jsx_runtime.jsx)(R,B({width:t,height:o},r))}})},styled_components_browser_esm=__webpack_require__("../node_modules/.pnpm/styled-components@5.3.3_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),lodash=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"),src=__webpack_require__("../node_modules/.pnpm/d3-random@1.1.2/node_modules/d3-random/src/index.js"),nivo_waffle_es=__webpack_require__("../packages/waffle/dist/nivo-waffle.es.js"),nivo_bar_es=__webpack_require__("../packages/bar/dist/nivo-bar.es.js");const steps=["sent","viewed","clicked","add_to_card","purchased"],stepColors=["#1ca5b2","#5eb8cb","#8ec1d7","#79a3cd","#5981da"],ages=["18-","18-20","20-30","30-40","40-50","50-65","65-80","80+"],genderColors=["#5981da","#8ec1d7"],generateData=()=>{let lastValue=1e5;return steps.map((step=>{lastValue=Math.round(lastValue*(0,lodash.random)(.6,.95));const genderClusters=((total,numberOfClusters)=>{const randomNumbers=Array.from({length:numberOfClusters},Math.random),randomTotal=(0,lodash.sum)(randomNumbers),randomRatios=randomNumbers.map((n=>n/randomTotal));let remaining=total;return randomRatios.map(((ratio,index)=>{if(index===numberOfClusters-1)return remaining;const value=Math.round(ratio*total);return remaining-=value,value}))})(lastValue,2),ageClusters=((total,numberOfClusters,{mean=.5,deviation=.2,_samples=100}={})=>{const samples=Math.max(numberOfClusters,_samples),randNormal=(0,src.nG)(mean,deviation),step=1/numberOfClusters,steps=Array.from({length:numberOfClusters},((_,index)=>step*(index+1))),weights=Array.from({length:numberOfClusters}).fill(0);Array.from({length:samples}).forEach((()=>{const n=randNormal(),stepIndex=steps.indexOf(steps.filter((s=>n<=s))[0]);weights[stepIndex]++}));let remaining=total;return weights.map(((weight,index)=>{if(index===numberOfClusters-1)return remaining;const value=Math.round(total*weight/samples);return remaining-=value,value}))})(lastValue,ages.length,{mean:(0,lodash.random)(.2,.8)});return{id:`step_${step}`,value:lastValue,label:(0,lodash.startCase)(step),byGender:[{id:"male",value:genderClusters[0],label:"Male"},{id:"female",value:genderClusters[1],label:"Female"}],byAge:ageClusters.map(((value,index)=>({id:ages[index],value})))}}))},Container=styled_components_browser_esm.ZP.div`
    max-width: 900px;
    background-color: #222;
    padding: 24px 32px;
`,Years=styled_components_browser_esm.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 12px;
`,YearButton=styled_components_browser_esm.ZP.div`
    cursor: pointer;
    background-color: ${({isCurrent})=>isCurrent?"#1ca5b2":"#000000"};
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    border-radius: 18px;
    font-weight: 600;
    color: ${({isCurrent})=>isCurrent?"white":"#555555"};

    &:hover {
        box-shadow: 0 0 0 2px #1ca5b2 inset;
        color: ${({isCurrent})=>isCurrent?"white":"#1ca5b2"};
    }
`,Header=styled_components_browser_esm.ZP.h2`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: #999999;
`,Grid=styled_components_browser_esm.ZP.div`
    display: grid;
    grid-template-columns: 80px auto 100px 200px;
    grid-template-rows: 32px 40px 80px 80px 80px 80px 80px 40px;
    grid-column-gap: 12px;
    grid-row-gap: 1px;
    grid-template-areas:
        '0       1      gender  age'
        '0       funnel 2       age0'
        'bullet0 funnel gender0 age0'
        'bullet1 funnel gender1 age1'
        'bullet2 funnel gender2 age2'
        'bullet3 funnel gender3 age3'
        'bullet4 funnel gender4 age4'
        '3       funnel 4       age4';
`,BulletWrapper=styled_components_browser_esm.ZP.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Bullet=styled_components_browser_esm.ZP.div`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    box-shadow: 0 0 0 5px black;
`,funnelTheme={labels:{text:{fontSize:15,fontFamily:"'Consolas', monospace"}},grid:{line:{stroke:"#444444"}}},barTheme={axis:{ticks:{line:{stroke:"#444444"},text:{fill:"#999999"}}},grid:{line:{stroke:"#444444"}}},dataByYear=Array.from({length:6}).map(((_,index)=>({year:2010+index,data:generateData()}))),FunnelWithClustering=()=>{const[yearIndex,setYearIndex]=(0,react.useState)(0),currentYear=dataByYear[yearIndex];return(0,react.useEffect)((()=>{const timer=setTimeout((()=>{setYearIndex(yearIndex<dataByYear.length-1?yearIndex+1:0)}),2e3);return()=>clearTimeout(timer)}),[yearIndex,setYearIndex]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{style:{margin:"0 0 16px 24px",fontWeight:400,color:"#555",lineHeight:"18px"},children:["By combining a funnel chart with other chart types as small multiples, you can show arbitrary clustering across each step.",(0,jsx_runtime.jsx)("br",{}),"Here we're using the ",(0,jsx_runtime.jsx)("code",{children:"Waffle"})," component from the"," ",(0,jsx_runtime.jsx)("code",{children:"@nivo/waffle"})," package to show clustering by gender, and the"," ",(0,jsx_runtime.jsx)("code",{children:"Bar"})," component from ",(0,jsx_runtime.jsx)("code",{children:"@nivo/bar"})," to show the repartition by age.",(0,jsx_runtime.jsx)("br",{}),"In order to align the charts with the funnel, we're using a CSS grid."]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Years,{children:dataByYear.map(((year,index)=>(0,jsx_runtime.jsx)(YearButton,{isCurrent:index===yearIndex,onClick:()=>{setYearIndex(index)},children:year.year},year.year)))}),(0,jsx_runtime.jsxs)(Grid,{children:[(0,jsx_runtime.jsx)(Header,{style:{gridArea:"gender"},children:"gender"}),(0,jsx_runtime.jsx)(Header,{style:{gridArea:"age"},children:"age"}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"funnel"},children:(0,jsx_runtime.jsx)(U,{margin:{top:40,bottom:40,left:20},data:currentYear.data,spacing:1,enableBeforeSeparators:!1,beforeSeparatorOffset:20,afterSeparatorOffset:20,afterSeparatorLength:120,theme:funnelTheme,colors:stepColors,borderWidth:20,valueFormat:">-.4s",labelColor:"#000000",motionConfig:"wobbly"})}),currentYear.data.map(((datum,index)=>{const isFirst=0===index,isLast=index===currentYear.data.length-1;let barAxisTop=null;isFirst&&(barAxisTop={tickSize:10,tickPadding:12,tickRotation:-90});let barAxisBottom=null;return isLast&&(barAxisBottom={tickSize:0,tickPadding:12,tickRotation:-90}),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(BulletWrapper,{style:{gridArea:`bullet${index}`},children:(0,jsx_runtime.jsx)(Bullet,{style:{backgroundColor:stepColors[index]},children:index+1})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:`gender${index}`},children:(0,jsx_runtime.jsx)(nivo_waffle_es.qx,{margin:{top:10,right:20,bottom:10,left:20},data:datum.byGender,colors:genderColors,total:datum.value,columns:5,rows:5,isInteractive:!1,motionStiffness:110,motionDamping:8})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:`age${index}`},children:(0,jsx_runtime.jsx)(nivo_bar_es.jM,{margin:{top:isFirst?50:10,bottom:isLast?40:0},data:datum.byAge,theme:barTheme,colors:[stepColors[index]],enableGridY:!1,enableGridX:!0,enableLabel:!1,padding:.3,axisTop:barAxisTop,axisBottom:barAxisBottom,axisLeft:null,isInteractive:!1,motionConfig:"wobbly"})})]},datum.id)}))]})]})]})},Funnel_stories={title:"Funnel",component:R,tags:["autodocs"]},commonProps={data:[{id:"step_sent",value:85523,label:"Sent"},{id:"step_viewed",value:74844,label:"Viewed"},{id:"step_clicked",value:62617,label:"Clicked"},{id:"step_add_to_card",value:50425,label:"Add To Card"},{id:"step_purchased",value:31139,label:"Purchased"}],margin:{top:20,right:20,bottom:20,left:20},borderWidth:20,motionConfig:"wobbly"},CustomTooltip={render:()=>(0,jsx_runtime.jsx)(R,{...commonProps,width:900,height:300,direction:"horizontal",tooltip:({part})=>(0,jsx_runtime.jsxs)("div",{style:{padding:12,color:"#fff",background:"#222222"},children:[(0,jsx_runtime.jsx)("span",{children:"Look, I'm custom :)"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("strong",{children:[part.data.id,": ",part.formattedValue]})]})})},CombiningWithOtherCharts={render:()=>(0,jsx_runtime.jsx)(FunnelWithClustering,{})};CustomTooltip.parameters={...CustomTooltip.parameters,docs:{...CustomTooltip.parameters?.docs,source:{originalSource:"{\n  render: () => <Funnel {...commonProps} width={900} height={300} direction={'horizontal'} tooltip={({\n    part\n  }) => <div style={{\n    padding: 12,\n    color: '#fff',\n    background: '#222222'\n  }}>\n                    <span>Look, I'm custom :)</span>\n                    <br />\n                    <strong>\n                        {part.data.id}: {part.formattedValue}\n                    </strong>\n                </div>} />\n}",...CustomTooltip.parameters?.docs?.source}}},CombiningWithOtherCharts.parameters={...CombiningWithOtherCharts.parameters,docs:{...CombiningWithOtherCharts.parameters?.docs,source:{originalSource:"{\n  render: () => <FunnelWithClustering />\n}",...CombiningWithOtherCharts.parameters?.docs?.source}}};const __namedExportsOrder=["CustomTooltip","CombiningWithOtherCharts"]}}]);
//# sourceMappingURL=funnel-Funnel-stories.2a94fcc0.iframe.bundle.js.map