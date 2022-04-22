import React from 'react'
import Product from './props/Product'
//import Message from "./Hooks/Message"
//import Counter from './Hooks/Counter'
//import Product from './Hooks/product'
//import Login from "./Form-handling/Login"
//import SMS from "./Form-handling/SMS"
//import Login from './useState-Hook/Login'
//import User from './Axios/User'
//import ContactApp from './Contact/ContactApp'
import ParentComp from './props/ParentComp'
import Salary from './Event-binding/salary'

function App() {
  return (
    <div>
        <Product/>
        <hr/>
        <ParentComp/>
        <hr/>
        <Salary/>
    </div>
  )
}

export default App