//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate

import React from 'react';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;
    const ref = React.useRef();

    React.useEffect(() => {
        if (xScale) {
            const xAxis = axisBottom(xScale);
            const xAxistGroup = select(ref.current);
            xAxistGroup.call(xAxis);
        }
    }, [xScale, width]); 

    if (xScale) {
        return (
            <g
                ref={ref}
                transform={`translate(0, ${height})`} 
            >
                {typeof xScale.domain()[0] === 'string' &&
                    select(ref.current).selectAll('.tick text')
                        .attr('transform', 'rotate(-45)')
                        .style('text-anchor', 'end')
                }
                <text
                    fill="#000"
                    x={width / 2}
                    y={35} 
                    dy="0.71em"
                    textAnchor="middle"
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g />;
    }
}

export default XAxis;