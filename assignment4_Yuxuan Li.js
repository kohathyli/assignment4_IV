import React, { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';
import Tooltip from './Tooltip';
const csvUrl = 'https://gist.githubusercontent.com/hogwild/3b9aa737bde61dcb4dfa60cde8046e04/raw/citibike2020.csv';

function ChartComponent() {
  const [data, setData] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [tooltipData, setTooltipData] = useState({ d: null, x: null, y: null });

  useEffect(() => {
    csv(csvUrl).then(data => {
      data.forEach(d => {
        d.tripduration = +d.tripduration;
      });
      setData(data);
    });
  }, []);

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  const innerHeightBar = height - margin.top - margin.bottom;

  // Define the xScaleBar
  const xScaleBar = scaleBand()
    .domain(data.map(d => d['station'])) 
    .range([0, width])
    .padding(0.1);

  // Define the yScaleBar
  const yScaleBar = scaleLinear()
    .domain([0, max(data, d => d.tripdurationS)]) 
    .range([innerHeightBar, 0]);

  const handleTooltip = (d, x, y) => {
    if (d) {
      setTooltipData({ d, x, y });
    } else {
      setTooltipData({ d: null, x: null, y: null });
    }
  };


  return (
    <div>
      <BarChart
        data={data}
        xScale={xScaleBar}
        yScale={yScaleBar}
        height={innerHeightBar}
        offsetX={margin.left}
        offsetY={margin.top}
        width={width}
        selectedStation={selectedStation}
        onStationHover={setSelectedStation}
        onTooltipShow={handleTooltip}
      />
      <ScatterPlot
        offsetX={margin.left}
        offsetY={margin.top}
        width={width}
        height={height}
        data={data}
        selectedStation={selectedStation}
        onStationHover={setSelectedStation}
        onTooltipShow={handleTooltip}
      />
      <Tooltip
        d={tooltipData.d}
        x={tooltipData.x}
        y={tooltipData.y}
      />
    </div>
  );
}


export default ChartComponent;
