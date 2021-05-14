import React from "react";
import "./Search.css";

function Search() {
  return (
    <div class="navbar navbar-light bg-light random">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default Search;
