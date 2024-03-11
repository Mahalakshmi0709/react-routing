import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./pages/index";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Adminhome from "./pages/adminhome";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/" element={<Adminhome />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
