import React, { Fragment } from 'react';

export default class Main extends React.Component {

	constructor({text}) {
	    super();
		let arr = text.split('<br/>');

		this.result = arr.map((el, i) => {
			if(i == arr.length - 1) 
				return el
			
	    	return <Fragment key={i}>{el}<br/></Fragment>
	    })
	}

  render = () => <div className="br2jsx">{this.result}</div>
 
}

