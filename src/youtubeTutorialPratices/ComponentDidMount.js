import React from "react";

class ComponentDidMount extends React.Component{
   constructor(){
    super()
    this.state={
        name:"Ravi"
    }
    console.log("constructor")
   }
   componentDidMount(){
    console.log("componentDidMount")
   }
    render(){
        console.log("render")
        return(
            <div>
                <h1>Component DiD Mount </h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Munna"})}>UpdateName</button>
            </div>
        )
    }
}

export default ComponentDidMount