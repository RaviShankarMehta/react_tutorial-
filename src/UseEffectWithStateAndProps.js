import React, { useEffect, useState } from "react";
import UseEffectProps from "./UseEffectProps";
function UseEffectWithStateAndProps(){
    const [data,setData]=useState(0);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("UseEffect")
    },[data])
    useEffect(()=>{
        alert("UseEffect Count"+count)
    },[count])
    return(
        <div>
            <h1>UseEffect With State And Props</h1>
            {/* <UseEffectProps/> */}
           <UseEffectProps count={count} data={data}/>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count </button>
        </div>
    )
}
export default UseEffectWithStateAndProps;