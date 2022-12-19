import { useState } from "react"

function StateWithObject(){
    const [data,setData]=useState({name:"Ravi",age:26})
    return (
        <>
        <h1>State with Object</h1>
        <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}></input>
        <input type="text" value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}></input>

        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        </>
    )
}
export default StateWithObject