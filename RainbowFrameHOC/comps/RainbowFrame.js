import React from 'react';

import './RainbowFrame.css';

import withRainbowFrame from './withRainbowFrame'

export default class RainbowFrame extends React.Component{

	render() {
		let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

		let Fragment = 'Hello';

		return withRainbowFrame(colors)(Fragment);
	}
}






