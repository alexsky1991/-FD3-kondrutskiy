import React from 'react';

export default class Main extends React.Component {

	constructor(props) {
	    super(props);

	    const text = `<div>${this.props.text}</div>`;
	    const doc = new DOMParser().parseFromString(text, "application/xml");

	    const nodes = doc.childNodes[0].childNodes;

	    this.result = Object.values(nodes).map((value, i) => {

	      if(value.localName == 'br')
	     	return <br key={i}/>
			
	      return value.data
	    });

	}


  render() {
    return <div className="br2jsx">{this.result}</div>
  }

}

