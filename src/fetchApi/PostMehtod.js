import { useState } from "react"

function PostMethod(){
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [mobile,setMobile]= useState('')
    function addUser(){
        // console.log({name,email,mobile})
        let data = {name,email,mobile}
        fetch("http://localhost:4000/api/v1/addUser",{
            method:"POST",
            headers:{
                "Accpet":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result)
        })
    }
    return(
        <>
        <h1>Post User Data</h1>
        <input text="text" value={name} onChange={((e)=>setName(e.target.value))} /><br/><br/>
        <input text="text" value={email} onChange={((e)=>setEmail(e.target.value))} /><br/><br/>
        <input text="text" value={mobile} onChange={((e)=>setMobile(e.target.value))} /><br/><br/>
        <button onClick={addUser}>Add User</button>
        </>
    )
}

export default PostMethod