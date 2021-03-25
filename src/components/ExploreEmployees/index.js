import React from "react";


export default function ExploreEmployees(props) {
    return (
        <div>
            <button onClick={() => props.handleSortEmployeeByState()} className="searchBtn">Sort By State</button>
            <button onClick={() => props.handleSortEmployeeByGender()} className="searchBtn">Sort By Gender</button>
            
        </div>
    )
}
