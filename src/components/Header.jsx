import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" className='site-logo'>Tripper</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Camper Van's</Link>
                <Link to="/host">Host</Link>
            </nav>
        </header>
    )
};

export default Header;