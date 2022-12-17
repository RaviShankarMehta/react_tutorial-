import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>Hi Good Morning Ravi Shankar Mehta</p>
            <p>Welcome to About Page</p>
            <Link to='/'>Click hare to go Home Paga</Link><br></br>
            <Link to='/user/anil'>Anil Page</Link><br></br>
            <Link to='/user/ravi'>Ravi Page</Link>
        </div>
    )
}
export default About