import React from "react";
import { useSearchParams ,useNavigate } from "react-router-dom";
 function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate()
  console.log(searchParam.get("age"));
  console.log(searchParam.get("city"));
  const age = searchParam.get('age')
  const city = searchParam.get('city')
  const text = searchParam.get('text')
  return (
    <div>
      <h1>Filter</h1>
      {/* <h1>Age is :- {age}</h1>
      <h1>City is :- {city}</h1> */}
      <h1>{text}</h1>
      <input type='text' onChange={(e)=>setSearchParam({text:e.target.value})} placeholder="Type here to get searchparam value"/><br></br><br></br>
      <button onClick={()=>setSearchParam({age:50,city:"patna"})}>Click to get searchParam value</button><br></br><br></br>
      <button onClick={()=>{navigate('/')}}>Go to Home page</button>

    </div>
  );
}

export default Filter