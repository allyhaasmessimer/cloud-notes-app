// src/pages/AvailabilityZoneNotesPage.js
import React from "react";

const AvailabilityZoneNotesPage = () => {
    return (
        <div>
            <h2>Availability Zone Notes</h2>
            <p>
                Availability Zones (AZs) are distinct locations within a region,
                each comprising one or more data centers equipped with
                independent power, cooling, and networking infrastructure.
            </p>
            <h3>Features</h3>
            <ul>
                <li>
                    <strong>High Availability:</strong> AZs are designed to
                    provide fault tolerance and high availability for cloud
                    services by offering redundancy across multiple locations.
                </li>
                <li>
                    <strong>Isolation:</strong> Resources deployed in different
                    AZs are isolated from each other, reducing the risk of
                    simultaneous failures impacting all resources.
                </li>
                <li>
                    <strong>Low Latency:</strong> Deploying resources across
                    multiple AZs allows users to serve their customers with
                    low-latency access, improving performance and user
                    experience.
                </li>
                <li>
                    <strong>Disaster Recovery:</strong> AZs enable users to
                    implement disaster recovery strategies by replicating data
                    and services across geographically separated locations.
                </li>
            </ul>
            <h3>Analogy: Availability Zones as Distinct Locations</h3>
            <p>
                Think of Availability Zones as distinct neighborhoods within a
                city (cloud region), each equipped with its own infrastructure
                and facilities. While connected, each zone operates
                independently to ensure resilience and continuity of services.
            </p>
            <h3>Example Use Case</h3>
            <p>
                Consider a global e-commerce platform that needs to serve
                customers in different regions. By deploying their application
                across multiple Availability Zones within each region, they
                ensure high availability, disaster recovery, and low-latency
                access for their users.
            </p>
        </div>
    );
};

export default AvailabilityZoneNotesPage;
