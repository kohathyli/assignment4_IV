import React from 'react';

function Points(props) {
  const { data, xScale, yScale, selectedStation, onStationHover, setTooltip } = props;

  const handleMouseEnter = (event, d) => {
    onStationHover(d.station); 
    setTooltip({
      x: event.pageX,
      y: event.pageY,
      isVisible: true,
      content: `${d.station}: Start from ${d.tripdurationS}`
    });
  };

  const handleMouseOut = () => {
    onStationHover(null);
    setTooltip({ ...tooltip, isVisible: false });
  };

  return (
    <g>
          {data.map((d, i) => (
          <circle
          key={i}
          cx={xScale(d.tripdurationS)} 
          cy={yScale(d.tripdurationE)} 
          r={d.station === selectedStation ? 10 : 5}
          fill={d.station === selectedStation ? 'red' : 'steelblue'}
          onMouseEnter={event => onTooltipShow(d, event.clientX, event.clientY)}
          onMouseOut={() => onTooltipShow(null, null, null)}
        />
      ))}
    </g>
  );
}

export default Points;