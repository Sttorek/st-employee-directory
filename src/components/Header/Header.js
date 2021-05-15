import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="p-3 mb-2 bg-dark text-white text-center">
        <div className="container-fluid">
          <h1>Employee Directory</h1>
          <h3>Search For an Employee Below!</h3>
        </div>
      </nav>
    </div>
  );
}

export default Header;
