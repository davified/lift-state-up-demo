import React, { Component } from "react";
import WelcomeBanner from "./WelcomeBanner";
import UserDetails from "./UserDetails";

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <WelcomeBanner />
        <UserDetails />
      </div>
    );
  }
}

export default WelcomePage;
