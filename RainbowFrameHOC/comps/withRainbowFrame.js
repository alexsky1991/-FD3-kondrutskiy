import React from 'react';

let withRainbowFrame = colors => Component => {
	
	colors.forEach(el => {
		Component = <div style={{border: '3px solid ' + el}}>{Component}</div>
	})

	return Component
}

export default withRainbowFrame;