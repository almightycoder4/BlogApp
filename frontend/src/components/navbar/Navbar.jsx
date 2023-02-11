import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import logo from "../Images/logo-color.png";
import { useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import ProfileBar from "../profilebar/ProfileBar";
export default function Navbar() {
  let token = useSelector((state) => state.authReducer.token);
  const { decodedToken } = useJwt(token);
  let name;
  if (decodedToken) {
    name = decodedToken.name.split(" ").pop();
    console.log(name);
  }
  return (
    <div id="mainnav">
      <div id="banner">
        <div id="logo">
          <img src={logo} alt="webimage" />
        </div>
        <div id="navbar">
          <div id="pages">
            <Link to={"/"}>
              <button id="navbtn">HOME</button>
            </Link>
            <Link to={"/famousblog"}>
              <button id="navbtn">RATED BLOGS</button>
            </Link>
            {token ? (
              <Link to={"/your-blog"}>
                <button id="navbtn">YOUR BLOGS</button>
              </Link>
            ) : (
              ""
            )}

            <Link to={"/about"}>
              <button id="navbtn">ABOUT US</button>
            </Link>
          </div>
          <div id="searchblog">
            <h4>Search:</h4>
            <input
              type="text"
              placeholder="Search Blogs...."
              name="search"
              id="searchbox"
            />
          </div>
          <div id="logindiv">
            {decodedToken ? (
              <div id="userbox">
                <img src={decodedToken.userimg} alt="userimage" />
                {<ProfileBar name={name} />}
              </div>
            ) : (
              <Link to={"/login"}>
                <button id="login">
                  <p>Login</p>
                </button>
              </Link>
            )}
            {!token ? (
              <Link to={"/register"}>
                <button id="register">
                  <p>Register</p>
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
