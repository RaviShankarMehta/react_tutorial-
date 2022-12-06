import React,{useState} from "react";

function CondidtionRendering(){
    const [loggedIn,setLoggedIn]=useState(2)
    return(
        <div>
            <h1>Condidtion Rendering</h1>
            {loggedIn===1?
            <h1>Welcome user1</h1>
            :loggedIn===2?
            <h1>Welcome user 2</h1>:
            <h1>Welcome user3</h1>}
        
        </div>
    )
}

export default CondidtionRendering