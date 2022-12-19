import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"


function GetMethod(){
    const [data,setData] = useState("")
    useEffect(()=>{
        fetch("http://localhost:4000/api/v1/getAllUser").then((result)=>{
            result.json().then((resp)=>{
                console.log(resp,"res")
                setData(resp)
            })
        })

    },[])
    // console.log(data.getData)
    return (
        <>
        <h1>Get User Data</h1>
        <Table border={1}>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mbile</td>
            </tr>
            {
                data.getData.map((item)=>
               
                <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                </tr>
                )
            }
        </Table>
        </>
    )
}
export default GetMethod