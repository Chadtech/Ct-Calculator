import { Component } from "React";
import React from "React";


export default class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = determineContent(this.props);

    return( 
      <div className="screen">
        <p> { content } </p>
      </div>
    );
  }
}


function determineContent({content}) {
  if (content == "") {
    return "0.0";
  }

  return content.slice(0, 16);
}