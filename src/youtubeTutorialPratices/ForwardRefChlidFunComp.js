import React,{ forwardRef } from "react"

function ForwardRefChlidFunComp(props,ref){
    return (
        <div>
            <h1>ForwardRefChildFunComp</h1>
            <input type={"text"} ref={ref}></input>
        </div>
    )
}
export default forwardRef(ForwardRefChlidFunComp);