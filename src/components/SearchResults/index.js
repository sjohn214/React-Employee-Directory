import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const BASEURL = `https://randomuser.me/api/?results=50`;

export default function SearchResults(props) {
  const [employees, setEmployees] = useState([]);

  const getRandomUsers = async () => {
    const response = await axios.get(BASEURL);
    console.log("response", response);
    setEmployees(response.data);
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  useEffect(() => {}, [employees]);

  const renderHeader = () => {
    const headerElement = [
      "id",
      "picture",
      "name",
      "email",
      "location",
      "operation",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const RemoveEmployee = (id) => {
    axios.delete(`${BASEURL}/${id}`).then((res) => {
      const remove = props.results.filter((employee) => id !== employee.id);
      setEmployees(remove);
    });
  };
  const renderBody = () => {
    return (
      props.results.results &&
      props.results.results.map(({ id: {name, value}, picture: {thumbnail, large}, name: {title, first, last}, email, location: {city, state, country} }) => {
        return (
          <tr key={value}>
            <td>{`${name}, ${value}`}</td>
            <td className="img"
                alt="Employee Picture"
                src={`https://randomuser.me/api/portraits/thumb/women/70${props.results.results[0].picture.thumbnail}.jpg`}>
            </td>
            <td>{`${title} ${first} ${last}`}</td>
            <td>{email}</td>
            <td>{`${city}, ${state}, ${country}`}</td>
            <td className="operation">
              <button className="deleteBtn" onClick={() => RemoveEmployee(value)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <table id="employees">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          <tr>{renderBody()}</tr>
        </tbody>
      </table>
    </>
  );
}
