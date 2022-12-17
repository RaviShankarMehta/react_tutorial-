import React, { useEffect } from "react";

function UseEffectProps(props){
    useEffect(()=>{
        console.log("UseEffect")
    })
    return(
        <div>
            <h1>UseEffect Props</h1>
            <h1>Data: {props.data}</h1>
            <h1>Count: {props.count}</h1>
        </div>
    )
}
export default UseEffectProps;