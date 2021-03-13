import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import axios from "axios";



function App() {
  const [employees, setEmployees] = useState([]);

  
  useEffect(() => {
    
    const getRandomUsers = async () => {
      const BASEURL = `https://randomuser.me/api/?gender=female`
      const response = await axios.get(BASEURL);
      console.log("response", response)
      setEmployees(response.data)
    };
    getRandomUsers();
  }, []);



  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Wrapper>
      <h1>React-Employee-Directory</h1>
      <Route exact path="/Search" render={()=> <Search employees={employees}/>}/>
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
    </Router>
  );
}

export default App;
