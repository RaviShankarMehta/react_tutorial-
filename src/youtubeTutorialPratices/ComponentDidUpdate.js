import React from "react";

class ComponentDidUpdate extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         name:"Ravi"
    //     }
    //     console.log("constructor")
    //    }
    //    componentDidUpdate(){
    //     console.log("componentDidMount")
    //    }

    constructor(){
        super()
        this.state={
            count:0
        }
        // console.log("constructor")
       }
       componentDidUpdate(preProps,preState,snapsort){

        console.log("componentDidMount",preState)
        // console.log("componentDidMount",snapsort)
        // if(preState.count===this.state.count){
        //     alert("data are same")
        // }
        // this.setState({count:this.state.count+1})
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
       }
    render(){
        console.log("render")
        return(
            <div>
                <h1>componentDidUpdate</h1>
                {/* <h1>{this.state.name}</h1> */}
                {/* <button onClick={()=>this.setState({name:"Munna"})}>UpdateName</button> */}
                <h1>{this.state.count}</h1>
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>UpdateName</button> */}
                <button onClick={()=>this.setState({count:1})}>UpdateName</button>
            </div>
        )
    }
}

export default ComponentDidUpdate;