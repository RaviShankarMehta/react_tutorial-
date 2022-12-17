import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate =useNavigate()
    const login =()=>{
        localStorage.setItem('login',false)
        navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/')
        }
    })
    return(
        <>
        <h1>Login Page</h1>
        <input text='text'></input><br></br><br></br>
        <input text='text'></input><br></br><br></br>
        <button onClick={login}>Login</button>
        </>
    )
}
export default Login