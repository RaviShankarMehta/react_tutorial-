import { useNavigate } from "react-router-dom"

function Channel(){
    const navigate = useNavigate()
    return(
        <>
        <h1>This is my youtube Channel</h1>
        <h2>Please subscribe</h2>
        <button onClick={()=>{navigate('/contact')}}>Go to contact Page</button>
        </>
    )
}
export default Channel