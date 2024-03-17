import React from 'react';
import { createScales } from './assignment4_student';
import Bars from './Bars';
import YAxis from './YAxis';
import XAxis from './XAxis';

function BarChart(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, onStationHover } = props;

    const { xScaleBar, yScaleBar } = createScales(data, width, height);

    //task1: transform the <g> with the offsets so that the barchart can show properly 
    const transform = `translate(${offsetX}, ${offsetY})`;

    //task2: import the components needed and uncomment the components in the return 
    return (
    <g transform={`translate(${offsetX}, ${offsetY})`}>
      <Bars
        data={data}
        xScale={xScale}
        yScale={yScale}
        height={height}
        selectedStation={selectedStation}
        onStationHover={onStationHover}
        YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"} 
        XAxis xScale={xScale} height={height} width={width} 
        </g>
    );
}

export default BarChart;
