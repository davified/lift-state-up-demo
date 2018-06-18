import React, { Component } from "react";
import { userDetails } from "./seedData";

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      user: userDetails
    };
  }

  render() {
    return (
      <div>
        <h3>user details</h3>
        <p>id: {this.state.user.id}</p>
        <p>username: {this.state.user.username}</p>
        <p>email: {this.state.user.email}</p>
      </div>
    );
  }
}

export default UserDetails;
