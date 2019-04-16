import React, { Fragment } from 'react';

export default class Main extends React.Component {

	constructor(props) {
	    super(props);
		this.arr = this.props.text.split('<br/>');

		this.result = this.arr.map((el, i) => {
			if(i == this.arr.length - 1) 
				return el
			
	    	return <Fragment key={i}>{el}<br/></Fragment>
	    })
	}

  render = () => <div className="br2jsx">{this.result}</div>
 
}

