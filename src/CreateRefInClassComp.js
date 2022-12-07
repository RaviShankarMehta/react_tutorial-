import React, { createRef } from "react";

class CreateRefInClassComp extends React.Component{
    constructor(){
        super();
        this.inputref=createRef()
    }
    componentDidMount(){
        // console.log(this.inputref.current.value="100")
    }
    getVal(){
        console.log(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <h1> Create ref in Class comp</h1>
                <input type={"text"} ref={this.inputref}></input>
                <button onClick={()=>this.getVal()}>Check ref</button>
            </div>
        )
    }
}
export default CreateRefInClassComp