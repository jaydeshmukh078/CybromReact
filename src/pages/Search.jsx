import axios from "axios";
import { useState } from "react";

const Search = () => {

    const [rno, setRno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSearch = async () => {
        let api = `http://localhost:3000/student?rollno=${rno}`;
        const response = await axios(api)
        setMydata(response.data);
    }

        const ans = mydata.map((key) => {
            return (
                <>
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.city}</td>
                        <td>{key.rollno}</td>
                        <td>{key.fees}</td>
                    </tr>

                </>
            )
        })

        return (
            <>
                <h1>Search Student</h1>
                <input type="number" value={rno} onChange={(e) => {setRno(e.target.value)}} />
                <button onClick={handleSearch}>Search</button>
                <table border="1" width={700}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>city</th>
                            <th>rollno</th>
                            <th>fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>

                </table>



            </>
        )
    }

    export default Search;