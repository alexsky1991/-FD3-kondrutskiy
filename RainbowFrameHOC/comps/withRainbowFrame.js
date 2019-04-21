import React from 'react';

let withRainbowFrame = (colors) => (Fragment) => {
	let div = Fragment;
	
	colors.map(el => {
		div = <div style={{border: '3px solid ' + el}}>{div}</div>
	})

	return div
}

export default withRainbowFrame;