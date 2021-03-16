import React, { useState , useEffect } from 'react';
// import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import SearchResults from "./components/SearchResults";
import Card from "./components/Card"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import API from "./utils/API";


function App() {
  const [employees, setEmployees] = useState([]);

  
  useEffect(() => {
    API.getRandomUsers();
      axios.get(API).then((res)=> {
      console.log(res)
      setEmployees(res);
    });
  }, [employees]);
    
 

  return (
    // <Router>
    <div className="App">
      <Navbar/>
      <Wrapper>
      <h1>React-Employee-Directory</h1>
      {/* <Route exact path="/Search" render={()=> <Search employees={employees}/>}/> */}
      <Search/>
      <SearchResults/>
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
}

export default App;
