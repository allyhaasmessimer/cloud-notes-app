// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../App.css"; // Import the CSS file

const Home = () => {
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const loadRandomImages = async () => {
            const images = [];
            for (let i = 0; i < 9; i++) {
                // Increase to match the number of grid items
                const randomIndex = Math.floor(Math.random() * 11) + 1;
                const image = await import(`../images/img_${randomIndex}.jpg`);
                images.push(image.default);
            }
            setRandomImages(images);
        };

        loadRandomImages();
    }, []);

    return (
        <div className="wrapper">
            {randomImages.length > 0 && (
                <>
                    <Link to="/vpc-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[0]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">VPC Notes</div>
                        </div>
                    </Link>
                    <Link to="/subnet-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[1]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Subnet Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/availability-zone-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[2]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Availability Zone Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/cidr-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[3]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                CIDR Range Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/route-table-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[4]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Route Table Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/public-subnet-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[5]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Public Subnet Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/private-subnet-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[6]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Private Subnet Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/internet-gateway-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[7]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Internet Gateway Notes
                            </div>
                        </div>
                    </Link>
                    <Link to="/security-groups-notes" className="grid-item">
                        <div className="grid-item-content">
                            <img
                                src={randomImages[8]}
                                alt="Random"
                                className="grid-item-img"
                            />
                            <div className="grid-item-overlay">
                                Security Groups Notes
                            </div>
                        </div>
                    </Link>
                    {/* Add more links for other notes pages */}
                </>
            )}
        </div>
    );
};

export default Home;
