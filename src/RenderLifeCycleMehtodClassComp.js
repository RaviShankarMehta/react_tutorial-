import React from "react";

class RenderLifeCycleMethodClassComp extends React.Component{
    constructor(){
        super()
        this.state={
            email:"ravi@gmail.com"
        }
    }
    render(){
        console.log('RenderMehtod',this.state.email)
        return(
            <div>
                <h1>RenderLifeCycleMethodClassComp</h1>
                {/* <h1>Hello  {this.props.name} </h1> */}
                <button onClick={()=>this.setState({email:"Munna@gmail.com"})}>Update Email</button>
            </div>
        )
    }
} 

export default RenderLifeCycleMethodClassComp