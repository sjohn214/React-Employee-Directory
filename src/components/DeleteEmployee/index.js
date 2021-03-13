import React, { useState , useEffect} from "react";
import axios from "axios";
import Table from "../../components/Table"

// Delete employee

const RemoveEmployee = (id) => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        RemoveEmployee()
    }, [])

    axios.delete(`${Table}/${id}`).then(res => {
      const remove = employees.filter(employee => id !== employee.id)
      setEmployees(remove);
    });



const renderHeader = () => {
    const headerElement = ["id", "name", "email", "location", "picture"]

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}


const renderBody = () => {
    return employees && employees.map(({ id, name, email, location, picture }) => {
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{location}</td>
                <td>{picture}</td>
                    <button className="deleteBtn" onClick={() => RemoveEmployee(id)}>Delete</button>
            </tr>
        )
    });
    
}

return (
    <div>
    <h1 id="name">Employee Directory</h1>
    <table id= "employees">
        <thead>
            <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
            <tr>{renderBody}</tr>
        </tbody>
    </table>
    </div>
)
}   

export default RemoveEmployee;


