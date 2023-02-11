import React from "react";
import { useNavigate } from "react-router-dom";
import "../profilebar/profilebar.css";
export default function ProfileBar({ name }) {
  const navigate = useNavigate();
  function change() {
    let selected = document.querySelector("#profilebar").value;
    if (selected === "profile") {
      console.log("true");
      navigate("/setting");
    } else if (selected === "logout") {
      navigate("/logout");
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      <select name="profilebar" id="profilebar" onChange={change}>
        <option value="name">Hello,{name}</option>
        <option value="profile">My Profile</option>
        <option value="setting">My Settings</option>
        <option value="logout">Logout</option>
      </select>
    </div>
  );
}
