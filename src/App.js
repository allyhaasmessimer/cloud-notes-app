// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import VPCNotesPage from "./pages/VPCNotesPage";
import SubnetNotesPage from "./pages/SubnetNotesPage";
import AvailabilityZoneNotesPage from "./pages/AvailabilityZoneNotesPage";
import CIDRNotesPage from "./pages/CIDRNotesPage";
import RouteTableNotesPage from "./pages/RouteTableNotesPage";
import PublicSubnetNotesPage from "./pages/PublicSubnetNotesPage";
import PrivateSubnetNotesPage from "./pages/PrivateSubnetNotesPage";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="bar"></div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/vpc-notes" element={<VPCNotesPage />} />
                    <Route path="/subnet-notes" element={<SubnetNotesPage />} />
                    <Route
                        path="/availability-zone-notes"
                        element={<AvailabilityZoneNotesPage />}
                    />
                    <Route path="/cidr-notes" element={<CIDRNotesPage />} />
                    <Route
                        path="/route-table-notes"
                        element={<RouteTableNotesPage />}
                    />
                    <Route
                        path="/public-subnet-notes"
                        element={<PublicSubnetNotesPage />}
                    />
                    <Route
                        path="/private-subnet-notes"
                        element={<PrivateSubnetNotesPage />}
                    />

                    {/* Add routes for other pages */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
