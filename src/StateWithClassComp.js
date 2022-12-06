// State With Class comp
import React, { Component } from "react";

class StatewithClassComp extends React.Component {
  constructor(){
    super()
    this.state={
        data:1
    }
  }
  updateData(){
    {
        this.setState({data:this.state.data+1})
    }
    console.log(this.setState)
  }
    render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.updateData()}>Click Me</button>
      </div>
    );
  }
}

export default StatewithClassComp;
