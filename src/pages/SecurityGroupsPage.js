// src/pages/SecurityGroupsNotesPage.js
import React from "react";

const SecurityGroupsNotesPage = () => {
    return (
        <div>
            <h2>Security Groups Notes</h2>
            <p>
                Security Groups are virtual firewalls for your instances to
                control inbound and outbound traffic.
            </p>
            <h3>Analogy: Security Groups as Security Guards</h3>
            <p>
                Think of Security Groups as security guards at the gates of each
                house, checking who is allowed in and out. They ensure that only
                authorized traffic can access your resources.
            </p>
            <h3>Purpose</h3>
            <ul>
                <li>
                    <strong>Access Control:</strong> Controls access to
                    resources, allowing or blocking traffic based on rules.
                </li>
                <li>
                    <strong>Security:</strong> Ensures the security of
                    individual components by enforcing inbound and outbound
                    rules.
                </li>
            </ul>
        </div>
    );
};

export default SecurityGroupsNotesPage;
