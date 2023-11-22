import { memo } from 'react'
import PropTypes from 'prop-types'
import SlicesItem from './SlicesItem'

const Slices = ({
    slices,
    axis,
    debug,
    height,
    tooltip,
    current,
    setCurrent,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onClick,
}) => {
    return slices.map(slice => (
        <SlicesItem
            key={slice.id}
            slice={slice}
            axis={axis}
            debug={debug}
            height={height}
            tooltip={tooltip}
            setCurrent={setCurrent}
            isCurrent={current !== null && current.id === slice.id}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        />
    ))
}

Slices.propTypes = {
    slices: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.instanceOf(Date),
            ]).isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
            points: PropTypes.arrayOf(PropTypes.object).isRequired,
        })
    ).isRequired,
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
    debug: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    tooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    current: PropTypes.object,
    setCurrent: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
}

export default memo(Slices)
