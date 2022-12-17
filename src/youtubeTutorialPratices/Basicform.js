import React,{useState} from "react";

function BasicForm(){
    const [name,setName]=useState("");
    const [interest,setInterest]=useState("");
    const[tmc,settmc]=useState(false)
    function getFormSubmit(e){
        console.log(name,interest,tmc)
        e.preventDefault()
    }
    return(
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={getFormSubmit}>
            <input type="text" placeholder="Please Enter the name" onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>select the options</option>
                <option>DC</option>
                <option>Marvel</option>
            </select><br></br><br></br>
             <input type="checkbox" onChange={(e)=>settmc(e.target.checked)}></input><span>Accept Term and Condidtion</span><br></br><br></br>
            <button type="submit" >Sumit</button>
            <button>Clear</button>  

            </form>
        </div>
    )
}

export default BasicForm