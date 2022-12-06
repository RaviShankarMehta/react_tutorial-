// Pops with functional component

function PropsWithFunComp (Props){
    console.log(Props)
    return(
        <div style={{backgroundColor:"skyblue",margin:"10px"}}>
            <h1>Name : {Props.name}</h1>
            {/* <h2>Age : {Props.age}</h2>
            <h3>Address : {Props.other.address}</h3>
            <h4>MobileNo : {Props.other.MobileNo}</h4> */}
        </div>
    )
    
}

export default PropsWithFunComp