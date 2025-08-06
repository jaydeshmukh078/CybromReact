import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update=()=>{
  const navigate =useNavigate();
const[mydata,setMydata] =useState([]);

const loadData=async()=>{
  let api ="http://localhost:3000/student";
  const Response= await axios.get(api);
  console.log(Response)
  setMydata(Response.data);
}

useEffect(()=>{
  loadData();
},[])

const deldata=async(id)=>{
    let api =`http://localhost:3000/student/${id}`
    const response=await axios.delete(api);
    console.log(response);
    alert("Deleted");
    loadData();
}

const myedit=(id)=>{
  navigate(`/Myedit/${id}`)
}

const ans =mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.rollno}</td>
      <td>{key.fees}</td>
      <td><button onClick={()=>{deldata(key.id)}}>Delete</button></td>
      <td><button onClick={()=>{myedit(key.id)}}>Edit</button></td>
    </tr>
    
    </>
  )
})
    return(
      <>
        <h1>welcome to Display page</h1>
        <table border="1" width={700}>
      <thead>
          <tr>
            <th>name</th>
            <th>city</th>
            <th>rollno</th>
            <th>fees</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
          
        </table>
        
        </>
    )
}
export default Update;