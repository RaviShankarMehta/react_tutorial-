import React from "react";
import ComponentWillUnmountChild from './ComponentWillUnmountChild'
class ComponentWillUnmountParent extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div>
                <h1>Parent Component Will Unmount </h1>
                {
                    this.state.show?<ComponentWillUnmountChild/>:null

                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
            </div>
        )
    }
}
export default ComponentWillUnmountParent;