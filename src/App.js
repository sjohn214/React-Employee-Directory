import React, { useState, useEffect } from "react";
// import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreEmployees from "./components/ExploreEmployees";
import Searchbar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";
import Card from "./components/Card"
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";


function App() {
  const [employees, setEmployees] = useState([]);
  const [sort, setSort] = useState(false);
  
  const getRandomUsers = (query) => {
    API.getRandomUsers().then(res => {
      console.log(res);
      setEmployees(res.data.results);
    })
  }
  useEffect(() => {
    getRandomUsers()
  }, []);

    

    function handleSortEmployeeByState() {
      if (!sort) {
        setEmployees(employees.sort((a,b) => (a.state > b.state) ? 1 : -1));
        setSort(true);
      } else {
        setEmployees(employees.sort((a,b) => (a.state > b.state) ? -1 : 1));
        setSort(false);
      }
    }

    function handleSortEmployeeByGender() {
      if (!sort) {
        setEmployees(employees.sort((a,b) => (a.gender > b.gender) ? 1 : -1));
        setSort(true);
      } else {
        setEmployees(employees.sort((a,b) => (a.gender > b.gender) ? -1 : 1));
        setSort(false);
      }
    }
    function handleSearch(searchValue) {
      const filter = employees.filter(employees => employees.name.first.toLowerCase().startsWith(searchValue.toLocaleLowerCase()));
      setEmployees(filter);
    }

    
console.log(employees);

  return (
    // <Router>
    <div className="App">
      <Navbar/>
      <Wrapper>
      <br />
      <br />
      <br />
      <h1>React-Employee-Directory</h1>
      <br />
      <br />
      <p className="searchEmployees">Search Employees, sort by State or Gender</p>
      <Searchbar handleSearch={handleSearch}/>
      <ExploreEmployees
        handleSortEmployeeByState={handleSortEmployeeByState}
        handleSortEmployeeByGender={handleSortEmployeeByGender}/>
      <Row />
      <SearchResults employees={employees}/>
      <Card/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </Wrapper>
      <Footer/>
    </div>
    // </Router>
  );
};

export default App;
