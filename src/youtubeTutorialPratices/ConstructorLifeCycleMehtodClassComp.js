import React from "react";

class ConstructorLifeCycleMehtodClassComp extends React.Component{
    constructor(){
        super()
        this.state={
            data:"Ravi"
        }
        console.log("Constructor")
    }
    render(){
        console.log("render")

        return(
            
            <div>
                <h1>LifeCycleMehtodClassComp</h1>
                <h1>Hello {this.state.data}</h1>
            </div>
        )
    }
}

export default ConstructorLifeCycleMehtodClassComp