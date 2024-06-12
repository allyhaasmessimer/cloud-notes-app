// src/pages/VPCNotesPage.js
import React from "react";

const VPCNotesPage = () => {
    return (
        <div>
            <h2>VPC (Virtual Private Cloud) Notes</h2>
            <p>
                A VPC is a customizable virtual network within a public cloud,
                such as AWS (Amazon Web Services), that provides users with
                complete control over their virtual private networking
                environment.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Control Over Networking Environment:</strong> Users
                    can select their IP address range, create subnets, configure
                    route tables, and manage network gateways.
                </li>
                <li>
                    <strong>Isolation:</strong> VPCs offer isolation for
                    resources, allowing users to separate different environments
                    and applications securely.
                </li>
                <li>
                    <strong>Security:</strong> Users can implement firewalls,
                    security groups, and other security measures to control
                    access and secure their VPC resources.
                </li>
                <li>
                    <strong>Scalability:</strong> VPCs in cloud environments
                    like AWS can scale dynamically to accommodate changing
                    traffic demands and resource requirements.
                </li>
                <li>
                    <strong>High Availability:</strong> VPCs are designed for
                    high availability, with built-in redundancy and failover
                    mechanisms.
                </li>
            </ul>
            <h3>Analogy: VPC as a Private Neighborhood</h3>
            <p>
                Think of a VPC as a private neighborhood within a large city
                (the cloud). In this neighborhood, users have control over
                everything inside it, including building houses (servers),
                laying out streets (subnets and routing), setting up gates and
                security checks (firewalls and security groups), and controlling
                who can enter and leave (internet gateways and VPN).
            </p>
            <h3>Example Use Case</h3>
            <p>
                Imagine a company needing to host its web app. The company
                chooses AWS for scalability and reliability. They create a VPC
                to isolate environments, control traffic, secure access, ensure
                high availability, and scale dynamically to handle spikes in
                traffic effectively.
            </p>
        </div>
    );
};

export default VPCNotesPage;
