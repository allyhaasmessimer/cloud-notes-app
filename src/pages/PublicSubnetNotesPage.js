// src/pages/PublicSubnetNotesPage.js
import React from "react";

const PublicSubnetNotesPage = () => {
    return (
        <div>
            <h2>Public Subnet Notes</h2>
            <p>
                A Public Subnet is a subnet within a VPC (Virtual Private Cloud)
                that has a route table entry pointing to an Internet Gateway,
                enabling internet access for resources within the subnet.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Internet Access:</strong> Public Subnets provide
                    internet access to resources within the VPC by routing
                    traffic through an Internet Gateway.
                </li>
                <li>
                    <strong>Open Gates:</strong> Public Subnets are like streets
                    with open gates leading to and from the neighborhood (VPC),
                    allowing communication with the internet and other resources
                    outside the VPC.
                </li>
                <li>
                    <strong>Hosting Public-Facing Resources:</strong> Public
                    Subnets host resources that need to be accessible from the
                    internet, such as web servers, load balancers, and bastion
                    hosts.
                </li>
            </ul>
            <h3>Analogy: Public Subnet as Streets with Open Gates</h3>
            <p>
                Think of Public Subnets as streets with open gates leading to
                and from the neighborhood (VPC). Resources within the Public
                Subnet can freely communicate with the internet and other
                external networks, facilitating access to public-facing
                services.
            </p>
            <h3>Example Use Case</h3>
            <p>
                A company deploys its web servers in a Public Subnet to make
                them accessible from the internet. By associating the Public
                Subnet with a Route Table containing an entry pointing to an
                Internet Gateway, the company enables internet access for its
                web servers, allowing users to access the website.
            </p>
        </div>
    );
};

export default PublicSubnetNotesPage;
