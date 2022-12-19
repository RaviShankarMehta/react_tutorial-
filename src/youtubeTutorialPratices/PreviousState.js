import { useState } from "react"

function PreviousState(){
    const [count,setCount]= useState(0);
    function updateCount(){
        // setCount(count+1)
        // let randomNo = Math.random()*10
        
        let randomNo =Math.floor( Math.random()*10)
        setCount((previousValue)=>{
            console.log(previousValue)
            return randomNo
        })

    }
    return(
        <>
        <h1> {count}</h1>
        <button onClick={updateCount}>Click Here To update count</button>
        </>
    )
}
export default PreviousState