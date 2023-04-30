"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5220],{"./stories/calendar/Calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomColors:()=>CustomColors,CustomLegendFormatter:()=>CustomLegendFormatter,CustomTooltip:()=>CustomTooltip,MonthSpacing:()=>MonthSpacing,TranslatingMonths:()=>TranslatingMonths,VerticalCalendar:()=>VerticalCalendar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _nivo_generators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../packages/generators/dist/nivo-generators.es.js"),_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/calendar/dist/nivo-calendar.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Calendar",component:_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,tags:["autodocs"]},from=new Date(2019,0,1),to=new Date(2019,11,31),data=(0,_nivo_generators__WEBPACK_IMPORTED_MODULE_0__.x$)(from,to),commonProps={width:900,height:260,margin:{top:50,right:10,bottom:10,left:50},from:from.toISOString(),to:to.toISOString(),data},Basic={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{...commonProps})},japaneseMonths=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],TranslatingMonths={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{monthLegend:(_year,month)=>japaneseMonths[month],...commonProps})},CustomColors={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{colors:["#a1cfff","#468df3","#a053f0","#9629f0","#8428d8"],...commonProps})},VerticalCalendar={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{direction:"vertical",...commonProps,height:600})},CustomTooltipComponent=data=>void 0===data.value?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{style:{color:data.color,backgroundColor:"black",padding:"10px"},children:[data.day," : ",data.value]});CustomTooltipComponent.displayName="CustomTooltipComponent";const CustomTooltip={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{tooltip:CustomTooltipComponent,...commonProps})},MonthSpacing={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{...commonProps,monthSpacing:25})},CustomLegendFormatter={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_nivo_calendar__WEBPACK_IMPORTED_MODULE_1__.f,{...commonProps,margin:{top:40,right:40,bottom:40,left:40},valueFormat:".2f",legendFormat:value=>value/10+"M",height:460,legends:[{anchor:"top",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar {...commonProps} />\n}",...Basic.parameters?.docs?.source}}},TranslatingMonths.parameters={...TranslatingMonths.parameters,docs:{...TranslatingMonths.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar monthLegend={(_year, month) => japaneseMonths[month]} {...commonProps} />\n}",...TranslatingMonths.parameters?.docs?.source}}},CustomColors.parameters={...CustomColors.parameters,docs:{...CustomColors.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar colors={['#a1cfff', '#468df3', '#a053f0', '#9629f0', '#8428d8']} {...commonProps} />\n}",...CustomColors.parameters?.docs?.source}}},VerticalCalendar.parameters={...VerticalCalendar.parameters,docs:{...VerticalCalendar.parameters?.docs,source:{originalSource:'{\n  render: () => <Calendar direction="vertical" {...commonProps} height={600} />\n}',...VerticalCalendar.parameters?.docs?.source}}},CustomTooltip.parameters={...CustomTooltip.parameters,docs:{...CustomTooltip.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar tooltip={CustomTooltipComponent} {...commonProps} />\n}",...CustomTooltip.parameters?.docs?.source}}},MonthSpacing.parameters={...MonthSpacing.parameters,docs:{...MonthSpacing.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar {...commonProps} monthSpacing={25} />\n}",...MonthSpacing.parameters?.docs?.source}}},CustomLegendFormatter.parameters={...CustomLegendFormatter.parameters,docs:{...CustomLegendFormatter.parameters?.docs,source:{originalSource:"{\n  render: () => <Calendar {...commonProps} margin={{\n    top: 40,\n    right: 40,\n    bottom: 40,\n    left: 40\n  }} valueFormat=\".2f\" legendFormat={value => value / 10 + 'M'} height={460} legends={[{\n    anchor: 'top',\n    direction: 'row',\n    translateY: 36,\n    itemCount: 4,\n    itemWidth: 42,\n    itemHeight: 36,\n    itemsSpacing: 14,\n    itemDirection: 'right-to-left'\n  }]} />\n}",...CustomLegendFormatter.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","TranslatingMonths","CustomColors","VerticalCalendar","CustomTooltip","MonthSpacing","CustomLegendFormatter"]}}]);