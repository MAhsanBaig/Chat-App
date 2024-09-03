import React from "react";
import "./App.css";
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import{Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx";

const App = () => {
  const {authUser}=useAuthContext()
  return (
    <><div className="p-4 h-screen justify-center items-center  ">
      <Routes>
        <Route path="/" element={ authUser ? <Home/> : <Navigate to={"/login"} />}/>
        <Route path="/login" element={ authUser ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to={"/login"} /> : <Signup/>}/>
      </Routes>
      <Toaster/>
    </div></>
  );
};
export default App;

