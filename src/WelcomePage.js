import React, { Component } from "react";
import WelcomeBanner from "./WelcomeBanner";
import UserDetails from "./UserDetails";
import { userDetails } from "./seedData";

class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      user: userDetails
    };
  }

  render() {
    return (
      <div>
        <WelcomeBanner name={this.state.user.username} />
        <UserDetails user={this.state.user} />
      </div>
    );
  }
}

export default WelcomePage;
