// State with functional Componant
import React,{useState} from "react"
// import {useState} from React
function StateWithFunctinalComp (){
    const [data,setData]=useState("Munna")
    function updateData(){
        return(
          setData("Ravi"),
        //   alert(data),
          console.log('1')
          )
    }
    console.log('2')
    return(
        <div >
            <h1>{data}</h1>
            <button onClick={updateData}>Click Me</button>
        </div>
    )
}

export default StateWithFunctinalComp