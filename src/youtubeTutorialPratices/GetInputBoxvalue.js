import React, { useState } from "react";
function GetInputBoxValue() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    // console.log(val.target.value)
    setData(val.target.value)
    setPrint(false);
  }
  return (
    <div>
      <h1>Get Input Box Value</h1>
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getData}></input>
      <button onClick={() => setPrint(true)}>Click Me</button>
    </div>
  );
}

export default GetInputBoxValue;
