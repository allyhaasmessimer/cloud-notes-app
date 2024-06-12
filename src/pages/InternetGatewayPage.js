// src/pages/InternetGatewayNotesPage.js
import React from "react";

const InternetGatewayNotesPage = () => {
    return (
        <div>
            <h2>Internet Gateway Notes</h2>
            <p>
                An Internet Gateway is a gateway that allows internet traffic to
                flow to and from the VPC’s public subnets.
            </p>
            <h3>Analogy: Internet Gateway as a Main Gate</h3>
            <p>
                Think of an Internet Gateway as the main gate that connects the
                neighborhood (your VPC) to the rest of the city (the internet).
                It acts as a bridge for data to move in and out of the VPC.
            </p>
            <h3>Purpose</h3>
            <ul>
                <li>
                    <strong>Connectivity:</strong> Provides internet
                    connectivity to resources in public subnets.
                </li>
            </ul>
        </div>
    );
};

export default InternetGatewayNotesPage;
