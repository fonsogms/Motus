import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = props => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      {props.user ? (
        <>
          <Link to='/' onClick={() => handleLogout(props)}>
            Logout
          </Link>{" "}
        </>
      ) : (
        <>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
