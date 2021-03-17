import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import "./style.css";

export default function SearchResults(props) {
 
  const renderHeader = () => {
    const headerElement = [
      "id",
      "picture",
      "name",
      "gender",
      "email",
      "location"
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  // const RemoveEmployee = (id) => {
  //   axios.delete(`${BASEURL}/${id}`).then((res) => {
  //     const remove = props.results.filter((employee) => id !== employee.id);
  //     setEmployees(remove);
  //   });
  // };
  const renderBody = () => {
    return (
      props.employees &&
      props.employees.map(({ id: {name, value}, picture: {large}, name: {title, first, last}, gender, email, location: {city, state, country} }) => {
        return (
          <div className="searchData">
            <table className="searchTable">
          <tr key={value}>
            <td>{`${name}, ${value}`}</td>
            <td>
              <img src={large} alt="Profile" />
            </td>
            <td>{`${title}. ${first} ${last}`}</td>
           <td>{gender}</td>
            <td>{email}</td>
            <td>{`${city}, ${state}, ${country}`}</td>
            {/* <td className="operation">
              <button className="deleteBtn" onClick={() => RemoveEmployee(value)}>
                Delete
              </button> */}
            {/* </td> */}
          </tr>
          </table>
          </div>
        );
      })
    );
  };

  return (
    <ReactBootStrap.Table id="employees">
   <thead>
          <tr nameClass="category">{renderHeader()}</tr>
        </thead>
        <tbody>
          <tr>{renderBody()}</tr>
        </tbody>
  </ReactBootStrap.Table>
  );
}
