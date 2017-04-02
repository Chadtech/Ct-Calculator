import { Component } from "React";
import React from "React";


export default class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = determineContent(this.props);

    console.log("content is", content);

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

  return content
}