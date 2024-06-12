// src/pages/CIDRNotesPage.js
import React from "react";
import CIDRImage from "../images/CIDRImage.jpg"; // Import the image
import "../App.css";

const CIDRNotesPage = () => {
    return (
        <div>
            <h2>CIDR Range Notes</h2>
            <div className="image-container">
                <img src={CIDRImage} alt="CIDR" className="cidr-image" />{" "}
                {/* Include the image */}
            </div>
            <p>
                CIDR (Classless Inter-Domain Routing) is a method for allocating
                IP addresses and routing Internet Protocol packets. It allows
                for more flexible allocation of IP addresses than the older
                system based on classes of addresses.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Flexible Address Allocation:</strong> CIDR allows
                    for the allocation of IP addresses in a flexible manner,
                    without being restricted to predefined address classes.
                </li>
                <li>
                    <strong>Efficient Routing:</strong> CIDR enables more
                    efficient routing of IP packets by allowing the aggregation
                    of multiple IP addresses into a single route advertisement.
                </li>
                <li>
                    <strong>Prefix Length Notation:</strong> CIDR notation
                    represents an IP address and its associated network prefix
                    length, allowing for concise and clear representation of
                    address ranges.
                </li>
                <li>
                    <strong>Subnetting:</strong> CIDR facilitates subnetting,
                    allowing network administrators to divide a single IP
                    address range into smaller, more manageable subnetworks.
                </li>
            </ul>
            <h3>Analogy: CIDR Range as Address Allocation Method</h3>
            <p>
                Think of CIDR range as a modern address allocation method for a
                city (network), where addresses are assigned based on the
                specific needs of each neighborhood (subnet). Unlike the older
                system based on fixed address classes, CIDR allows for more
                efficient and flexible allocation of addresses.
            </p>
            <h3>Example Use Case</h3>
            <p>
                A cloud service provider allocates CIDR ranges to its customers
                for setting up VPCs. Each customer receives a CIDR range based
                on their requirements, allowing them to efficiently manage and
                organize their network resources within the VPC.
            </p>
        </div>
    );
};

export default CIDRNotesPage;
