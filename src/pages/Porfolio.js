import React, { Component } from "react";

import Card from "../components/Card";


class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

 

  render() {
    return (
      <div>
        <h1 className="text-center">Portfolio</h1>
        <h3 className="text-center">
          Examples of work
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          
        </h1>
       
      </div>
    );
  }
}

export default Discover;
