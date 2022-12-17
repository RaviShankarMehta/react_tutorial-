import { useRef } from "react"

function UncontrolledComp(){
    let inputRef = useRef(null)
    function submitForm(e){
        e.preventDefault()
        console.log(inputRef.current.value)
        let input = document.getElementById("input").value
        console.log(input)
    }
    return(
        <div>
            <h1>Uncuntrolled Componemt</h1>
          <form onSubmit={submitForm}>
          <input ref={inputRef} type={"text"}></input><br></br><br></br>
          <input id="input"  type={"text"}></input><br></br>
            <button>Submit</button>
          </form>
        </div>
    )
}
export default UncontrolledComp