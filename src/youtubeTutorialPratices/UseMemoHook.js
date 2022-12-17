import { useMemo, useState } from "react"

function UseMemoHook(){
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(0);
    console.log("count",count)
    console.log("item",item)
    // function multicount(){
    //     console.log("multicount")
    //     return count*3
    // }
    const multicount = useMemo(function multicount(){
        console.log("multicount")
        return count*3
    },[count])
    return(
        <div>
            <h1> useMemo Hook In React </h1>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            {/* <h2>{multicount()}</h2> */}
            <h2>{multicount}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item+1)}>Update item</button>
        </div>
    )
}
export default UseMemoHook