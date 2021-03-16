import React from "react";

function Card({ data }) {
  return data.map((employees) => (
    <Card
      key={employees.id}
      picture={employees.thumbnail}
      name={(employees.title, employees.first, employees.last)}
      email={employees.email}
      location={(employees.city, employees.state, employees.country)}
    />
  ));
}
export default Card;
