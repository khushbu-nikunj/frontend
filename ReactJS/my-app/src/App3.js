import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactApp from './ContactApp/ContactApp'
import Navbar from './Navbar'
export class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/ContactApp" element={<ContactApp/>} />
                    </Routes>
                </Router>
            </>)
    }
}

export default App