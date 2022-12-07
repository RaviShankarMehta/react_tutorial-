import { useState } from "react"

function HigherOrderFunction(){
    return(
        <div>
            <h1>HigherOrderFunction</h1>
            <HOCRed cmp={Counter}/>
            <HOCBlue cmp={Counter}/>
        </div>
    )
}
export default HigherOrderFunction

function HOCRed(props){
    return <h1 style={{backgroundColor:'red',width:100}}>Red<props.cmp/></h1>
}
function HOCBlue(props){
    return <h1 style={{backgroundColor:'blue',width:100}}>Blue<props.cmp/></h1>
}


function Counter(){
    let [count,setCount]=useState(0);
    return(
        <div>
            <h3>Counter</h3>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>UpdateCount</button>
        </div>
    )
}