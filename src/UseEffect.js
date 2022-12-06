import React, { useEffect, useState } from "react";

function UseEffect (){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("UseEffect")
    })
    return(
        <div>
            <h1>UseEffect</h1>
            <h1>Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
export default UseEffect;