import React from "react";
import MainContainer from "./components/MainContainer";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Landing from "./components/Landing";
import { useState } from "react";
import PopupContainer from "./components/PopupContainer";
import Popup from "./components/Popup";

function App() {
  return (
    <div className='font-[lato] select-none'>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/home' element={<MainContainer />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
