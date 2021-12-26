// @ts-ignore
import { AreaBumpDefaultProps as defaults } from '@nivo/bump'
import {
    themeProperty,
    defsProperties,
    groupProperties,
    motionProperties,
} from '../../../lib/componentProperties'
import {
    chartDimensions,
    ordinalColors,
    blendMode,
    chartGrid,
    axes,
    isInteractive,
} from '../../../lib/chart-properties'
import { ChartProperty, Flavor } from '../../../types'

const allFlavors: Flavor[] = ['svg']

const props: ChartProperty[] = [
    {
        key: 'data',
        group: 'Base',
        help: 'Chart data.',
        description: `
            Chart data, which must conform to this structure:
            \`\`\`
            Array<{
                id:   string
                data: Array<{
                    x: number | string
                    y: number
                }>
            }>
            \`\`\`
            This component assumes that every serie contains all
            x values sorted the same way they should appear on the chart.
        `,
        required: true,
        type: 'object[]',
        flavors: ['svg'],
    },
    ...chartDimensions(allFlavors),
    {
        key: 'align',
        group: 'Base',
        help: `Chart alignment.`,
        type: 'string',
        required: false,
        defaultValue: defaults.align,
        flavors: ['svg'],
        control: {
            type: 'choices',
            choices: [
                { label: 'start', value: 'start' },
                { label: 'middle', value: 'middle' },
                { label: 'end', value: 'end' },
            ],
        },
    },
    {
        key: 'interpolation',
        group: 'Base',
        type: 'string',
        help: `Area interpolation.`,
        required: false,
        defaultValue: defaults.interpolation,
        flavors: ['svg'],
        control: {
            type: 'radio',
            choices: [
                { label: 'smooth', value: 'smooth' },
                { label: 'linear', value: 'linear' },
            ],
        },
    },
    {
        key: 'spacing',
        group: 'Base',
        type: 'number',
        help: 'Spacing.',
        required: false,
        flavors: ['svg'],
        defaultValue: defaults.spacing,
        control: {
            type: 'range',
            min: 0,
            max: 32,
        },
    },
    {
        key: 'xPadding',
        help: 'X padding.',
        group: 'Base',
        type: 'number',
        required: false,
        defaultValue: defaults.xPadding,
        flavors: ['svg'],
        control: {
            type: 'range',
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    themeProperty(['svg']),
    ordinalColors({ flavors: allFlavors, defaultValue: defaults.colors }),
    blendMode({
        target: 'areas',
        flavors: ['svg'],
        defaultValue: defaults.blendMode,
    }),
    {
        key: 'fillOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area fill opacity.',
        defaultValue: defaults.fillOpacity,
        flavors: ['svg'],
        control: { type: 'opacity' },
    },
    {
        key: 'activeFillOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area fill opacity for active series.',
        defaultValue: defaults.activeFillOpacity,
        flavors: ['svg'],
        control: { type: 'opacity' },
    },
    {
        key: 'inactiveFillOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area fill opacity for inactive series.',
        defaultValue: defaults.inactiveFillOpacity,
        flavors: ['svg'],
        control: { type: 'opacity' },
    },
    {
        key: 'borderWidth',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border width.',
        defaultValue: defaults.borderWidth,
        flavors: ['svg'],
        control: { type: 'lineWidth' },
    },
    {
        key: 'activeBorderWidth',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border width for active series.',
        defaultValue: defaults.activeBorderWidth,
        flavors: ['svg'],
        control: { type: 'lineWidth' },
    },
    {
        key: 'inactiveBorderWidth',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border width for inactive series.',
        defaultValue: defaults.inactiveBorderWidth,
        flavors: ['svg'],
        control: { type: 'lineWidth' },
    },
    {
        key: 'borderColor',
        group: 'Style',
        type: 'string | object | Function',
        required: false,
        help: 'Method to compute area border color.',
        defaultValue: defaults.borderColor,
        flavors: ['svg'],
        control: { type: 'inheritedColor' },
    },
    {
        key: 'borderOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border opacity.',
        flavors: ['svg'],
        defaultValue: defaults.borderOpacity,
        control: { type: 'opacity' },
    },
    {
        key: 'activeBorderOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border opacity for active series.',
        defaultValue: defaults.activeBorderOpacity,
        flavors: ['svg'],
        control: { type: 'opacity' },
    },
    {
        key: 'inactiveBorderOpacity',
        group: 'Style',
        type: 'number | (serie: Serie) => number',
        required: false,
        help: 'Area border opacity for inactive series.',
        defaultValue: defaults.inactiveBorderOpacity,
        flavors: ['svg'],
        control: { type: 'opacity' },
    },
    ...defsProperties('Style', ['svg']),
    {
        key: 'startLabel',
        group: 'Labels',
        type: 'false | string | (serie: Serie) => string',
        required: false,
        help: 'Define area start label',
        defaultValue: defaults.startLabel,
        flavors: ['svg'],
    },
    {
        key: 'startLabelPadding',
        group: 'Labels',
        type: 'number',
        required: false,
        help: 'Define area start label padding',
        defaultValue: defaults.startLabelPadding,
        flavors: ['svg'],
        control: {
            type: 'range',
            min: 0,
            max: 30,
        },
    },
    {
        key: 'startLabelTextColor',
        group: 'Labels',
        type: 'string | object | Function',
        required: false,
        help: 'Method to compute start label text color.',
        flavors: ['svg'],
        defaultValue: defaults.startLabelTextColor,
        control: { type: 'inheritedColor' },
    },
    {
        key: 'endLabel',
        group: 'Labels',
        type: 'false | string | (serie: Serie) => string',
        required: false,
        help: 'Define area end label',
        defaultValue: defaults.endLabel,
        flavors: ['svg'],
    },
    {
        key: 'endLabelPadding',
        group: 'Labels',
        type: 'number',
        required: false,
        help: 'Define area end label padding',
        defaultValue: defaults.endLabelPadding,
        flavors: ['svg'],
        control: {
            type: 'range',
            min: 0,
            max: 30,
        },
    },
    {
        key: 'endLabelTextColor',
        help: 'Method to compute end label text color.',
        type: 'string | object | Function',
        required: false,
        defaultValue: defaults.endLabelTextColor,
        group: 'Labels',
        flavors: ['svg'],
        control: { type: 'inheritedColor' },
    },
    ...chartGrid({
        flavors: allFlavors,
        xDefault: defaults.enableGridX,
        y: false,
    }),
    ...axes({ flavors: allFlavors, exclude: ['right', 'left'] }),
    isInteractive({
        flavors: ['svg'],
        defaultValue: defaults.isInteractive,
    }),
    {
        key: 'onMouseEnter',
        group: 'Interactivity',
        type: '(serie, event) => void',
        help: 'onMouseEnter handler.',
        required: false,
        flavors: ['svg'],
    },
    {
        key: 'onMouseMove',
        group: 'Interactivity',
        type: '(serie, event) => void',
        help: 'onMouseMove handler.',
        required: false,
        flavors: ['svg'],
    },
    {
        key: 'onMouseLeave',
        group: 'Interactivity',
        type: '(serie, event) => void',
        help: 'onMouseLeave handler.',
        required: false,
        flavors: ['svg'],
    },
    {
        key: 'onClick',
        group: 'Interactivity',
        type: '(serie, event) => void',
        help: 'onClick handler.',
        required: false,
        flavors: ['svg'],
    },
    {
        key: 'tooltip',
        group: 'Interactivity',
        type: 'Function',
        required: false,
        help: 'Custom tooltip component.',
        flavors: ['svg'],
        description: `
            A function allowing complete tooltip customisation,
            it must return a valid HTML
            element and will receive the series's data.
        `,
    },
    ...motionProperties(['svg'], defaults, 'react-spring'),
]

export const groups = groupProperties(props)