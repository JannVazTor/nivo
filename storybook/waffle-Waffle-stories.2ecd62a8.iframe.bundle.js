(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6364],{"./stories/waffle/Waffle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Colors:()=>Colors,CustomCell:()=>CustomCell,CustomTooltip:()=>CustomTooltip,FillDirection:()=>FillDirection,LegendToggle:()=>LegendToggle,Patterns:()=>Patterns,UsingDataColor:()=>UsingDataColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_nivo_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/core/dist/nivo-core.es.js"),_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../packages/waffle/dist/nivo-waffle.es.js"),_CustomTooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/waffle/CustomTooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Waffle",component:_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,tags:["autodocs"]},commonProps={width:900,height:500,total:200,data:[{id:"men",label:"men",value:64,color:"#468df3"},{id:"women",label:"women",value:72,color:"#a053f0"}],rows:24,columns:18},Basic={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps})},Colors={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,colors:{scheme:"category10"}})},UsingDataColor={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,colors:{datum:"color"}})},Patterns={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,defs:[(0,_nivo_core__WEBPACK_IMPORTED_MODULE_1__.Qr)("dots",{background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0}),(0,_nivo_core__WEBPACK_IMPORTED_MODULE_1__.l0)("lines",{background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10})],fill:[{match:{id:"men"},id:"dots"},{match:{id:"women"},id:"lines"}]})},FillDirection={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,width:900,height:400,fillDirection:"left",rows:18,columns:24})},CustomCellComponent=({position,size,x,y,color,fill,opacity,borderWidth,borderColor,data,onHover,onLeave,onClick})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle",{r:size/2,cx:x+size/2,cy:y+size/2,fill:fill||color,strokeWidth:borderWidth,stroke:borderColor,opacity,onMouseEnter:onHover,onMouseMove:onHover,onMouseLeave:onLeave,onClick:event=>{onClick({position,color,x,y,data},event)}});CustomCellComponent.displayName="CustomCellComponent";const CustomCell={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,cellComponent:CustomCellComponent})},CustomTooltip={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,theme:{tooltip:{container:{background:"#333"}}},tooltip:_CustomTooltip__WEBPACK_IMPORTED_MODULE_3__.W})};class WaffleLegendToggle extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={hiddenIds:[]};toggle=d=>{const{hiddenIds}=this.state;this.state.hiddenIds.includes(d.id)?this.setState({hiddenIds:hiddenIds.filter((id=>id!==d.id))}):this.setState({hiddenIds:[...hiddenIds,d.id]})};render(){const{hiddenIds}=this.state;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_nivo_waffle__WEBPACK_IMPORTED_MODULE_2__.XF,{...commonProps,hiddenIds,margin:{top:40},legends:[{anchor:"top",direction:"row",translateY:-40,itemsSpacing:10,itemWidth:100,itemHeight:20,symbolSize:20,itemTextColor:"#555",onClick:this.toggle,effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#eee"}}]}]})}}WaffleLegendToggle.displayName="WaffleLegendToggle";const LegendToggle={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(WaffleLegendToggle,{})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} />\n}",...Basic.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} colors={{\n    scheme: 'category10'\n  }} />\n}",...Colors.parameters?.docs?.source}}},UsingDataColor.parameters={...UsingDataColor.parameters,docs:{...UsingDataColor.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} colors={{\n    datum: 'color'\n  }} />\n}",...UsingDataColor.parameters?.docs?.source}}},Patterns.parameters={...Patterns.parameters,docs:{...Patterns.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} defs={[patternDotsDef('dots', {\n    background: 'inherit',\n    color: 'rgba(255, 255, 255, 0.3)',\n    size: 4,\n    padding: 1,\n    stagger: true\n  }), patternLinesDef('lines', {\n    background: 'inherit',\n    color: 'rgba(255, 255, 255, 0.3)',\n    rotation: -45,\n    lineWidth: 6,\n    spacing: 10\n  })]} fill={[{\n    match: {\n      id: 'men'\n    },\n    id: 'dots'\n  }, {\n    match: {\n      id: 'women'\n    },\n    id: 'lines'\n  }]} />\n}",...Patterns.parameters?.docs?.source}}},FillDirection.parameters={...FillDirection.parameters,docs:{...FillDirection.parameters?.docs,source:{originalSource:'{\n  render: () => <Waffle {...commonProps} width={900} height={400} fillDirection="left" rows={18} columns={24} />\n}',...FillDirection.parameters?.docs?.source}}},CustomCell.parameters={...CustomCell.parameters,docs:{...CustomCell.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} cellComponent={CustomCellComponent} />\n}",...CustomCell.parameters?.docs?.source}}},CustomTooltip.parameters={...CustomTooltip.parameters,docs:{...CustomTooltip.parameters?.docs,source:{originalSource:"{\n  render: () => <Waffle {...commonProps} theme={{\n    tooltip: {\n      container: {\n        background: '#333'\n      }\n    }\n  }} tooltip={CustomTooltipComponent} />\n}",...CustomTooltip.parameters?.docs?.source}}},LegendToggle.parameters={...LegendToggle.parameters,docs:{...LegendToggle.parameters?.docs,source:{originalSource:"{\n  render: () => <WaffleLegendToggle />\n}",...LegendToggle.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Colors","UsingDataColor","Patterns","FillDirection","CustomCell","CustomTooltip","LegendToggle"]},"./stories/waffle/CustomTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>CustomTooltip});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const CustomTooltip=node=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{color:node.color,display:"grid",gridTemplateColumns:"1fr 1fr",gridColumnGap:"12px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"id"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.id}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.position}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"groupIndex"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.groupIndex}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"row"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.row}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"column"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.column}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{fontWeight:600},children:"color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:node.color})]});CustomTooltip.displayName="CustomTooltip";try{CustomTooltip.displayName="CustomTooltip",CustomTooltip.__docgenInfo={description:"",displayName:"CustomTooltip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/waffle/CustomTooltip.tsx#CustomTooltip"]={docgenInfo:CustomTooltip.__docgenInfo,name:"CustomTooltip",path:"stories/waffle/CustomTooltip.tsx#CustomTooltip"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js":module=>{module.exports=function noop(){}}}]);