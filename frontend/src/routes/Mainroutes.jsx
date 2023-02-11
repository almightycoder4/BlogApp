import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Famous from "../pages/famous/Famous";
import Register from "../pages/Register/Register";
import UsersBlog from "../pages/UserPage/UsersBlog";
import Setting from "../pages/UserSetting/Setting";
import ReqAuth from "../components/reqAuth";
import Logout from "../pages/logout/Logout";

export default function Mainroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/famousblog" element={<Famous></Famous>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route
          path="/your-blog"
          element={
            <ReqAuth>
              <UsersBlog></UsersBlog>
            </ReqAuth>
          }
        ></Route>
        <Route path="/setting" element={<Setting></Setting>}></Route>
      </Routes>
    </div>
  );
}
