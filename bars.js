import React from 'react';

function Bars(props) {
  const { data, xScale, yScale, height, selectedStation, onStationHover } = props;

  return (
    <g>
      {data.map((d, i) => (
        <rect
          key={i}
          x={xScale(d.station)} 
          y={yScale(d.tripdurationS)} 
          width={xScale.bandwidth()}
          height={height - yScale(d.tripdurationS)}
          fill={d.station === selectedStation ? 'red' : 'steelblue'}
          onMouseEnter={() => onStationHover(d.station)}
          onMouseOut={() => onStationHover(null)}
        />
      ))}
    </g>
  );
}

export default Bars;
