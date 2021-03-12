import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Wrapper>
      <h1>React-Employee-Directory</h1>
      <Route exact path="/search" component={Search} />
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
