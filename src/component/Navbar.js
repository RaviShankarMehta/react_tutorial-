import { Link } from "react-router-dom"

function NavBar (){
    return(
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            
            {/* we should not use anchor tag because while using anchor tag the page get refress 
            but while using Link the page won't refress */}
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li> */}
            
            
        </ul>
    )
}
export default NavBar