import React, { useRef } from "react"
import ForwardRefChildFunComp from './ForwardRefChlidFunComp'
function ForwardRefParentFunComp (){
    let inputRef = useRef(null);
    function updateInput(){
        inputRef.current.value="1000"
    }
    return(
        <div>
            <h1>ForwardRef Parent Functional Component</h1>
            <ForwardRefChildFunComp ref={inputRef}/>

            <button onClick={updateInput}>Click</button>
        </div>
    )
}
export default ForwardRefParentFunComp