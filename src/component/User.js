import { useParams } from "react-router-dom"

function User(){
   let params= useParams();
   const {name} = params
    return(
        <div>
            <h1>Hi Good Morning {name}</h1>
            <h1>Welcome to your Page</h1>
        </div>
    )
}
export default User