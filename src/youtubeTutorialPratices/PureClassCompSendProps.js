function PureClassCompSendProps(props){
    console.log("rerendring child comp")
    return(
        <div>
            <h1>Pure Class Comp Recived props </h1>
            <h1>{props.count}</h1>
        </div>
    )
}

export default PureClassCompSendProps