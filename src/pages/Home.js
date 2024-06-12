// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid-container">
            <Link to="/vpc-notes" className="grid-item">
                VPC Notes
            </Link>
            <Link to="/subnet-notes" className="grid-item">
                Subnet Notes
            </Link>
            <Link to="/availability-zone-notes" className="grid-item">
                Availability Zone Notes
            </Link>
            <Link to="/cidr-notes" className="grid-item">
                CIDR Range Notes
            </Link>
            <Link to="/route-table-notes" className="grid-item">
                Route Table Notes
            </Link>
            <Link to="/public-subnet-notes" className="grid-item">
                Public Subnet Notes
            </Link>
            <Link to="/private-subnet-notes" className="grid-item">
                Private Subnet Notes
            </Link>
            {/* Add more links for other notes pages */}
        </div>
    );
};

export default Home;
