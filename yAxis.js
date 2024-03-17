
import React from 'react';

function YAxis({ yScale, height, axisLabel }) {
  if (!yScale) {
    return <g />;
  }

  
  return (
    <g className="axis axis--y">
      {/* Render the ticks */}
      {yScale.ticks().map(tick => {
        return (
          <g className="tick" key={tick} transform={`translate(0,${yScale(tick)})`}>
            <line x2="-6" stroke="#000" />
            <text dy=".32em" x="-9" style={{ textAnchor: 'end' }}>{tick}</text>
          </g>
        );
      })}
      {/* Render the axis label */}
      <text
        transform={`translate(${-40},${height / 2}) rotate(-90)`}
        style={{ textAnchor: 'middle' }}
      >
        {axisLabel}
      </text>
    </g>
  );


export default YAxis;