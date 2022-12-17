import React from "react";
import { Table } from "react-bootstrap";

function NestedArraylistUsingMapFun() {
  const StudentTable = [
    {
      name: "Ravi",
      email: "ravi@gmail.com",
      phone: 123,
      address: [
        { houseNO: 10, city: "Katihar", country: "India" },
        { houseNO: 12, city: "Patna", country: "India" },
        { houseNO: 15, city: "Pune", country: "India" },
        { houseNO: 16, city: "Purnia", country: "India" },
      ],
    },
    {
        name: "Vishal",
        email: "vishal@gmail.com",
        phone: 123,
        address: [
          { houseNO: 10, city: "Katihar", country: "India" },
          { houseNO: 12, city: "Patna", country: "India" },
          { houseNO: 15, city: "Pune", country: "India" },
          { houseNO: 16, city: "Purnia", country: "India" },
        ],
      },
      {
        name: "Sumit",
        email: "sumit@gmail.com",
        phone: 123,
        address: [
          { houseNO: 10, city: "Ara", country: "India" },
          { houseNO: 12, city: "Patna", country: "India" },
          { houseNO: 15, city: "Pune", country: "India" },
          { houseNO: 16, city: "Banglore", country: "India" },
        ],
      },
      {
        name: "Anurag",
        email: "anurag@gmail.com",
        phone: 123,
        address: [
          { houseNO: 10, city: "Pune", country: "India" },
          { houseNO: 12, city: "Patna", country: "India" },
          { houseNO: 15, city: "Baka", country: "India" },
          { houseNO: 16, city: "Purnia", country: "India" },
        ],
      },
   
  ];
  return (
    <div>
      <h1>Nested Array list Using Map Fun</h1>
      <Table striped variant="dark" hover>
        <tbody>
            <tr>
                <td>S No.</td>
                <td>Name</td>
                <td>Email</td>
                <td>PhoneNo</td>
                <td>Address</td>
            </tr>
            {
                StudentTable.map((item,i)=>(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Table striped variant="dark" hover>
                                <tbody>
                                {
                                item.address.map((item,i)=>(
                                    <tr key={i}>
                                        <td>{item.houseNO}</td>
                                        <td>{item.city}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))
                            }
                                </tbody>
                            </Table>
                           
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    </div>
  );
}

export default NestedArraylistUsingMapFun;
