// src/pages/RouteTableNotesPage.js
import React from "react";

const RouteTableNotesPage = () => {
    return (
        <div>
            <h2>Route Table Notes</h2>
            <p>
                A Route Table is a set of rules, called routes, that determine
                where network traffic is directed within the VPC (Virtual
                Private Cloud).
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Network Traffic Management:</strong> Route Tables
                    manage network traffic within the VPC, ensuring that data is
                    properly routed between subnets and to external networks.
                </li>
                <li>
                    <strong>Dynamic Routing:</strong> Route Tables support
                    dynamic routing protocols, allowing for automatic updates to
                    routes based on changes in network topology or
                    configurations.
                </li>
                <li>
                    <strong>Internet Gateway Association:</strong> Route Tables
                    can be associated with an Internet Gateway to enable
                    communication between instances in the VPC and the internet.
                </li>
                <li>
                    <strong>Custom Routing:</strong> Users can define custom
                    routes in Route Tables to direct traffic to specific
                    destinations, such as VPN connections or peered VPCs.
                </li>
            </ul>
            <h3>Analogy: Route Table as Road Maps or GPS System</h3>
            <p>
                Think of Route Tables as road maps or a GPS system guiding how
                traffic flows within the neighborhood (VPC). Each route in the
                Route Table represents a path for network traffic, ensuring
                efficient and reliable communication between resources.
            </p>
            <h3>Example Use Case</h3>
            <p>
                A company sets up Route Tables in their VPC to route traffic
                between different subnets based on their requirements. For
                example, they may configure separate Route Tables for
                public-facing and private subnets, directing internet-bound
                traffic to a NAT Gateway or an Internet Gateway.
            </p>
        </div>
    );
};

export default RouteTableNotesPage;
