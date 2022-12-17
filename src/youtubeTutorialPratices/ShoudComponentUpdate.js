import React from "react";

class ShouldComponentUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
        console.log("construntor")
    }
    shouldComponentUpdate(){
        if(this.state.count>5 && this.state.count<10){
            console.log("shouldCompUpdate",this.state.count)
            return true
        }
    }
    render(){
        return(
            <div>
                <h1>ShouldComponentUpdate </h1>
                <h1>count {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
            </div>
        )
    }
}
export default ShouldComponentUpdate;