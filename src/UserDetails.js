import React from "react";

const UserDetails = props => (
  <div>
    <h3>user details</h3>
    <p>id: {props.user.id}</p>
    <p>username: {props.user.username}</p>
    <p>email: {props.user.email}</p>
  </div>
);

export default UserDetails;
