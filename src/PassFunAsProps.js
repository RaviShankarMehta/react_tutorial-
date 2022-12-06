function PassFunAsProps(props){
    return(
        <div> 
        <h1>Pass Funnction As Props</h1>
        <button onClick={props.data}>Call Funnction From Parent Components</button>
        </div>
    )
}
export default PassFunAsProps