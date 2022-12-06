import React from "react";

class ComponentWillUnmountChild extends React.Component{
    componentWillUnmount(){
        alert("component will unmount")
    }
    render(){
        return(
            <div>
                <h1>Child Component Will Unmount</h1>
            </div>
        )
    }
}
export default ComponentWillUnmountChild;