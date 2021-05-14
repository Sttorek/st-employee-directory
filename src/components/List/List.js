import React from "react";
import "./List.css";

function List() {
  return (
    <div>
      <ul className="keys">
        <li>Image</li>
        <li>Name</li>
        <li>Phone</li>
        <li>Email</li>
        <li>DOB</li>
      </ul>
      <ul className="results">
        <li>blah</li>
        <li>Joe</li>
        <li>Shmo</li>
        <li>706-358-8647</li>
        <li>02-03-1989</li>
      </ul>
    </div>
  );
}

export default List;
