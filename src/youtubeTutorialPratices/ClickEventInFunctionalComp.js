// Click event in Functionnal Componant

function FunctionalComponent() {
    let data = "Ravi Shankar"
    function ClickEvent (){
      return(
        data = "munna",
        alert(data)
      )
    }
    return (
      <div className="App">
        <h1>{data}</h1>
        <h1>Functional Component</h1>
        <button onClick={()=>{ClickEvent()}}>Click Me</button>
      </div>
    );
  }
  
  export default FunctionalComponent;
  