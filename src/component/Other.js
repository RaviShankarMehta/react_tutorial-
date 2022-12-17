import { useNavigate } from "react-router-dom"

function Other(){
    const navigate = useNavigate()
    return(
        <>
        <h1>Other page</h1>
        <h2>Thank you</h2><br></br><br></br>
        <button onClick={()=>{navigate('/contact')}}>go to contact page</button>
        </>
    )
}
export default Other