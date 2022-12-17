import React,{useState} from "react";

function Toggle(){
    const [state,setState]=useState(false)
    return(
        <div style={{textAlign:"center",background:"violet" , margin:50}} >
            {state?<h1>Toggle</h1>:null}
            <button onClick={()=>setState(!state)} >Toggle</button>
        </div>
    )

}

export default Toggle