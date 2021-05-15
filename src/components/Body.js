import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table/Table";

export default class Body extends Component {
  // I am now considering the Body to be the parent component of my children later on.
  state = {
    users: [],
    filteredUsers: [],
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      const holdData = res.data.results.map((user) => {
        return user;
      });
      this.setState({
        users: holdData,
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
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
          <Table users={this.state.users} />
        </div>
      </div>
    );
  }
}
