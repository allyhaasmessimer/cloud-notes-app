// src/pages/PrivateSubnetNotesPage.js
import React from "react";
import PrivateSubnetImage from "../images/PrivateSubnetImage.jpg"; // Import the image
import "../App.css";

const PrivateSubnetNotesPage = () => {
    return (
        <div>
            <h2>Private Subnet Notes</h2>
            <div className="image-container">
                <img
                    src={PrivateSubnetImage}
                    alt="private subnet"
                    className="private-subnet-image"
                />{" "}
                {/* Include the image */}
            </div>
            <p>
                A Private Subnet is a subnet within a VPC (Virtual Private
                Cloud) that has a route table configured to not allow internet
                access.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>No Internet Access:</strong> Private Subnets are
                    configured with route tables that do not allow internet
                    access, ensuring that resources within the subnet are not
                    directly accessible from the internet.
                </li>
                <li>
                    <strong>Gated Communities:</strong> Private Subnets are like
                    gated communities or restricted areas within the
                    neighborhood (VPC), providing additional security by
                    limiting access to authorized users or resources.
                </li>
                <li>
                    <strong>Hosting Internal Resources:</strong> Private Subnets
                    host resources that should not be directly accessible from
                    the internet, such as databases, application servers, and
                    backend systems.
                </li>
            </ul>
            <h3>Analogy: Private Subnet as Gated Communities</h3>
            <p>
                Think of Private Subnets as gated communities within the
                neighborhood (VPC), where access is restricted to authorized
                individuals or resources. Resources within the Private Subnet
                are shielded from direct internet access, enhancing security and
                privacy.
            </p>
            <h3>Example Use Case</h3>
            <p>
                A company deploys its database servers in a Private Subnet to
                protect sensitive data from unauthorized access. By configuring
                the route table of the Private Subnet to route traffic
                internally or to specific resources, the company ensures that
                the database servers are isolated from the internet.
            </p>
        </div>
    );
};

export default PrivateSubnetNotesPage;
