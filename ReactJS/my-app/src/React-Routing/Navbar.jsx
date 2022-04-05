import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/Home" className="navbar-brand">React Routing</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/Home" className="nav-link">Home</Link></li>
                        <li className="nav-item">< Link to="/About" className="nav-link">About Us</Link></li>
                        <li className="nav-item"><Link to="/Contact" className="nav-link">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;