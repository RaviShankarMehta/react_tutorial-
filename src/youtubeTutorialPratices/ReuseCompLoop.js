import ReusedComp from "./ReusedComp"

function ReuseCompLoop(){
    const StudentTable =[
        {
            name: "Ravi",
            email: "ravi@gmail.com",
            phone: 123,
        },
        {
            name: "Sumit",
            email: "Sumit@gmail.com",
            phone: 123,
        },
        {
            name: "Rahul",
            email: "rahul@gmail.com",
            phone: 123,
        }, {
            name: "Anurag",
            email: "anurag@gmail.com",
            phone: 123,
        }
    ]
    return(
        <div>
            <h1>Reuse Component Loop</h1>
            {
                StudentTable.map((item,i)=>
                   <ReusedComp data={item}/>
                )
            }
        </div>
    )
}
export default ReuseCompLoop