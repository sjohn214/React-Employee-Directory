import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export default function Searchbar(props) {
    const [searchValue, setSearch] = useState("");

   function HandleSearchValue (event) {
        setSearch(event.target.value)
    }

  
    return (
        <div className="maincontainer">
            <div className="card-header">
                <input className="searchbar"
                type="text"
                placeholder="Enter Employee Name"
                value={searchValue}
                onChange={HandleSearchValue}
                />
            <button onClick={() => props.handleSearch(searchValue)} className="searchBtn" disabled={searchValue === null}>Search</button>
            </div>
            
        </div>
    );
};


