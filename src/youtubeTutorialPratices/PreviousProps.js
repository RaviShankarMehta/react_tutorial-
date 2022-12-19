import { useState } from "react"
import PreviousPropsUser from "./PreviousPropsUser"

function PreviousProps(){
    const [count,setCount]=useState(0)
    
    return(
        <>
       <PreviousPropsUser count={count}/>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        </>
    )
}
export default PreviousProps