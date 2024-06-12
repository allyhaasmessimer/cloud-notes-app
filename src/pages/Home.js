// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import vpcImage from "../images/VPCImage.jpg";
import AvailabilityZoneImage from "../images/AvailabilityZoneImage.jpg";
import CIDRImage from "../images/CIDRImage.jpg";
import RouteTableImage from "../images/RouteTable.jpg";
import PublicSubnetImage from "../images/PublicSubnetImage.jpg";
import PrivateSubnetImage from "../images/PrivateSubnetImage.jpg";

const Home = () => {
    return (
        <div className="wrapper">
            <Link to="/vpc-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>VPC Notes</span>
                    <img
                        src={vpcImage}
                        alt="VPC"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            <Link to="/subnet-notes" className="grid-item">
                Subnet Notes
            </Link>
            <Link to="/availability-zone-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>Availability Zone Notes</span>
                    <img
                        src={AvailabilityZoneImage}
                        alt="AZ"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            <Link to="/cidr-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>CIDR Range Notes</span>
                    <img
                        src={CIDRImage}
                        alt="cidr"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            <Link to="/route-table-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>Route Table Notes</span>
                    <img
                        src={RouteTableImage}
                        alt="route table"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            <Link to="/public-subnet-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>Public Subnet Notes</span>
                    <img
                        src={PublicSubnetImage}
                        alt="public subnet image"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            <Link to="/private-subnet-notes" className="grid-item">
                <div className="grid-item-content">
                    <span>Private Subnet Notes</span>
                    <img
                        src={PrivateSubnetImage}
                        alt="private subnet"
                        className="grid-item-img"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </Link>
            {/* Add more links for other notes pages */}
        </div>
    );
};

export default Home;
