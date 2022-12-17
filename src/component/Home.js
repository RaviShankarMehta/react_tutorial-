import { Link ,useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Home Page</h1>
            <p>Hi Good Morning Ravi Shankar Mehta</p>
            <p>Welcome to Home Page</p>
            <Link to='/about'>Click hare to go about Paga</Link><br></br>
            <button onClick={()=>{navigate('/about')}}>Go to About page</button><br></br><br></br>
            <button onClick={()=>{navigate('/filter')}}>Go to Filter page</button><br></br><br></br>
            <button onClick={()=>{navigate('/contact')}}>Go to Contact page</button>
            
        </div>
    )
}
export default Home