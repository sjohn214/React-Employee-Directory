import React from "react";


export default function ExploreEmployees(props) {
    return (
        <div>
            <button onClick={() => props.handleSortEmployeeByState()} className="searchBtn">Search By State</button>
            <button onClick={() => props.handleSortEmployeeByGender()} className="searchBtn">Search By Gender</button>
            
        </div>
    )
}
