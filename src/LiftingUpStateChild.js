function LiftingUpStateChild(props){
    let name="Munna"
    return(
        <div>
            <h1>Lifting Up State Child </h1>
            <h1>{props.data}</h1>
            <button onClick={()=>props.alert(name)}>Click me</button>
        </div>
    )
}
export default LiftingUpStateChild