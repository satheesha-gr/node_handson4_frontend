import React from "react";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;