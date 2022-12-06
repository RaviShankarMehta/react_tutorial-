import React from "react";

function ArrayListUsingMapFun() {
  // const Student = ["Ravi","Nikhil","Yogesh","Rahul"]

  const StudentTable = [
    { name: "Ravi", email: "ravi@gmail.com", mobile: 123 },
    { name: "Nikhil", email: "Nikhil@gmail.com", mobile: 123 },
    { name: "Yogesh", email: "Yogesh@gmail.com", mobile: 123 },
    { name: "Rahul", email: "Rahul@gmail.com", mobile: 123 },
  ];
  // Student.map((item)=>{
  //     console.log(item)
  // })
  // for(var i=0;i<Student.length;i++){
  //     console.log(Student[i])
  // }
  return (
    <div>
      <h1>Array list Using Map Function</h1>
      {/* {
             Student.map((item)=>
            <h1>My Name is {item}</h1>
            )
        } */}

      {/* for(var i=0;i<Student.length;i++)
             {   
             <h1>{Student[i]}</h1>
             } */}
      <table
        style={{ alignItems: "center", alignContent: "center", color: "red" }}
        border={10}
      >
        <tbody>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>mobile</td>
          </tr>

          {StudentTable.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArrayListUsingMapFun;
