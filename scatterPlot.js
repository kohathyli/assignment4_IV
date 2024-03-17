import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Points from './Points'; 
import YAxis from './YAxis'; 
import XAxis from './XAxis';

function ScatterPlot({ offsetX, offsetY, data, height, width, selectedStation, onStationHover, onTooltipShow }) {

  return (
    <g transform={`translate(${offsetX},${offsetY})`}>
      <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
      <selectedStation={selectedStation}>
      <onStationHover={onStationHover}>
      <onTooltipShow={onTooltipShow}>
      <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
      <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
    </g>
  );
}

export default ScatterPlot;