import React from "react";
import "./style.css";
import Search from "../../pages/Search";

function SearchResults({ id, picture, name, email, location }) {
  return (
    <div className="container">
      <Search />
      <p>{id.name.value}</p>
      <img className="thumbnail"
          src={picture.thumbnail}
          alt="Employee"/>
      <p>{name.first.last}</p>
      <p>{email}</p>
      <p>{location.city.state.country}</p>
    </div>
  );
}

export default SearchResults;
