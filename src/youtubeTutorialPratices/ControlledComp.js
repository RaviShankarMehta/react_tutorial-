import { useState } from "react"

function ControlledComp(){
    let [val,setVal]=useState("")
    return(
        <div>
            <h1>Controlled Componemt</h1>
            <h1>{val}</h1>
            <input type={"text"} value={val} onChange={(e)=>setVal(e.target.value)}></input>
        </div>
    )
}
export default ControlledComp