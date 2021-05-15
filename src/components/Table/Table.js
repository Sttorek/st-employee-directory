import React from "react";
import "./Table.css";

function Table(props) {
  console.log(props);

  const userData = props.users.map((user) => {
    return (
      <div className="rows">
        <div>{user.picture.thumbnail}</div>
        <div>
          {user.name.first} {user.name.last}
        </div>
        <div>{user.phone}</div>
        <div>{user.email}</div>
        <div>{user.dob.date}</div>
      </div>
    );
  });
  console.log("This is the userData after returning as a div", userData);
  return (
    <div className="container">
      <div className="titleContainer">
        <h6>Picture</h6>
        <h6>Name</h6>
        <h6>Phone</h6>
        <h6>Email</h6>
        <h6>DOB</h6>
      </div>
      {userData}
    </div>
  );
}

export default Table;
