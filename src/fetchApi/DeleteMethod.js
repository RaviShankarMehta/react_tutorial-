import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"


function DeleteMehtod(){
    const [data,setData] = useState("")
    useEffect(()=>{
        getUserData()

    },[])

    function getUserData(){
        fetch("http://localhost:4000/api/v1/getAllUser").then((result)=>{
            result.json().then((resp)=>{
                console.log(resp,"res")
                setData(resp)
            })
        })
    }
    // console.log(data.getData)
    function deleteData(_id){
        fetch(`http://localhost:4000/api/v1/deleteData?_id=${_id}`,{
            method:"DELETE"
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp)
                getUserData()
            })
        })
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
            </tr>
            {
                data.getData.map((item,i)=>
               
                <tr key={i}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td><button onClick={()=>deleteData(item._id)}>Delete</button></td>
                </tr>
                )
            }
            </tbody>
        </Table>
        </>
    )
}
export default DeleteMehtod