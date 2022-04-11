import React from "react";

//import Msg from "./message/msg";
//import Navbar from "./Navbar/navbar";
//import Mobile from "./mobile"
//import CompA from "./props/compA";
//import Product from "./State/product";
//import Salary from "./Event-binding/salary"
//import  Airtel  from "./Event-Handling/Airtel"
import Navbar from "./React-Routing/Navbar";
import Home from "./React-Routing/home";
import About from "./React-Routing/about";
import Contact from "./React-Routing/contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App (){
    return ( <div>
        <Router>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </Router>
    </div>)
}
export default App