import React from "react";
import{Link} from "react-router-dom"
import "./navbar.css"
function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/MyArmy">My Army</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;