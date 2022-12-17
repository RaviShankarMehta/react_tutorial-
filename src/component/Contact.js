import { Link, Outlet, useNavigate } from "react-router-dom"

function Contact(){
    const navigate = useNavigate()
    return(
        <>
        <h1>Contact us</h1>
        <h2>This is my phone no:- 8051719168</h2>
        <Link to={'/Channel'}>Channel</Link><br></br><br></br>
        <Link to={'/other'}>Ohter</Link><br></br><br></br>
        <button onClick={()=>navigate('/')}>go to Home Page</button>
        <Outlet></Outlet>
        </>
    )
}
export default Contact