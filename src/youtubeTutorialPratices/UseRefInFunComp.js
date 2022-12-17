import { useRef } from "react"

function UseRefInFunComp(){
    let inputRef=useRef(null)
    function handalRrf(){
        console.log(inputRef.current.value)
        inputRef.current.style.color="red"
        // inputRef.current.focus()
        // inputRef.current.style.display="none"
    }
    return(
        <div>
            <h1> Use ref in FunctionalComponent</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={handalRrf}>Click</button>
        </div>
    )
}

export default UseRefInFunComp