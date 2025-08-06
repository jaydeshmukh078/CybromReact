import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Myedit = () => {
    const { id } = useParams();
    const [mydata, setMydata] = useState({});

    const loadData = async () => {
        let api = `http://localhost:3000/student/${id}`;
        const Response = await axios.get(api);
        setMydata(Response.data);
    }

    useEffect(() => {
        loadData();
    }, [])


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setMydata(values => ({ ...values, [name]: value }))

    }

    const handleSubmit = async () => {
        let api = `http://localhost:3000/student/${id}`
        const response = await axios.put(api, mydata);
        alert("data Updated!!!!")
    }
    return (
        <>
            <h1>Edit Records : {id}</h1>

            Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput} />
            <br />
            <br />
            Edit City : <input type="text" name="city" value={mydata.city} onChange={handleInput} />
            <br />
            <br />
            Edit Rollno. : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
            <br />
            <br />
            Edit Fees : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>

        </>
    )
}
export default Myedit;