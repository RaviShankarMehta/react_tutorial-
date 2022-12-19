import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function UpdateMehtod() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [_id, setUserId] = useState(null);
  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    fetch("http://localhost:4000/api/v1/getAllUser").then((result) => {
      result.json().then((resp) => {
        // console.log(resp, "res");
        setData(resp);
        // setName(resp[0].name);
        // setEmail(resp[0].email);
        // setMobile(resp[0].mobile);
        // setUserId(resp[0]._id);
      });
    });
  }
  // console.log(data.getData)
  function deleteData(_id) {
    fetch(`http://localhost:4000/api/v1/deleteData?_id=${_id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        // console.log(resp)
        getUserData();
      });
    });
  }
  function selectUser(_id) {
    // console.log(data.getData[_id])

    // let item = data.getData[_id - 1];
    // setName(item.name);
    // setEmail(item.email);
    // setMobile(item.mobile);
    // setUserId(item._id);
  }
  function updateUser() {
    console.log(name, email, mobile);
  }
  return (
    <>
      <h1>Get User Data</h1>
      <Table striped hover variant="dark">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Opration</td>
            <td>updateData</td>
          </tr>
          {data.getData.map((item, i) => (
            <tr key={i}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => deleteData(item._id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </>
  );
}
export default UpdateMehtod;
