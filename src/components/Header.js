// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Ally's Cloud Computing Notebook</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
