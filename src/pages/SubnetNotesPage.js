// src/pages/SubnetNotesPage.js
import React from "react";

const SubnetNotesPage = () => {
    return (
        <div>
            <h2>Subnet Notes</h2>
            <p>
                A subnet is a segment within a VPC (Virtual Private Cloud) that
                is specific to an Availability Zone (AZ). It is used to
                segregate resources internally within the VPC.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>Segmentation:</strong> Subnets divide the VPC into
                    smaller segments, each associated with a specific AZ.
                </li>
                <li>
                    <strong>Isolation:</strong> Subnets isolate resources within
                    the VPC, providing logical separation and control over
                    network traffic.
                </li>
                <li>
                    <strong>Traffic Control:</strong> Subnets allow users to
                    control the flow of traffic within the VPC, directing
                    traffic between different subnets based on routing
                    configurations.
                </li>
            </ul>
            <h3>Analogy: Subnets as Streets or Blocks</h3>
            <p>
                Think of subnets as streets or blocks within the neighborhood
                (VPC). Each subnet represents a distinct area within the VPC,
                with its own characteristics and purpose.
            </p>
            <h3>Example Use Case</h3>
            <p>
                Imagine a company deploying a multi-tier application in the
                cloud. They create separate subnets for the frontend, backend,
                and database tiers, each located in different AZs for high
                availability and fault tolerance.
            </p>
        </div>
    );
};

export default SubnetNotesPage;
