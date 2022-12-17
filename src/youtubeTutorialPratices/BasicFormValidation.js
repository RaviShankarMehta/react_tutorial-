import React,{useState} from "react";

function LogIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailErr,setEmailErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    function userLogin(e){
        if(email.length<3||password.length<3){
            alert('please type correct email or password')
        }else{
            alert('user LoggedIn')
        }
        e.preventDefault()
    }
    function emailHandler(e){
        let item = e.target.value
        if(item.length<3){
            setEmailErr(true )
        }else{
            setEmailErr(false )
        }
        setEmail(item)
    }
    function passwordHandler(e){
        let item =e.target.value
        if(item.length<3){
            setPassErr(true)
        }else{
            setPassErr(false)
        }
        setPassword(item)
    }
    return(
        <div>
            <h1>LogIn Page</h1>
           <form onSubmit={userLogin}>
           <input type='text' placeholder="Please type your email Id" onChange={emailHandler}></input><br/><br/>{emailErr?<span>not a valid email</span>:""}<br/><br/>
            <input type='password' placeholder="Password" onChange={passwordHandler}/><br/><br/>{passErr?<span>password is not valid</span>:""}<br/><br/>
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default LogIn;