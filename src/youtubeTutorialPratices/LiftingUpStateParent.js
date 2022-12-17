import LiftingUpStateChild from "./LiftingUpStateChild"

function LiftingUpStateParent(){
    let name ="Ravi"
    function ParentAlert(name){
        alert(name)
    }
    return(
        <div>
            <h1>Lifting Up State Parent</h1>
        
            <LiftingUpStateChild alert={ParentAlert} data={name}/>
        </div>
    )
}
export default LiftingUpStateParent