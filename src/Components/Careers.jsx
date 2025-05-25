import React from 'react';
import { HiMenu } from "react-icons/hi";
import { FaCaretDown, FaSearch, FaMapMarkerAlt ,FaFacebook,FaInstagram,FaLinkedinIn,FaTwitter } from 'react-icons/fa';
import pics from "./Assets/amazon1.PNG";
import picture from "./Assets/Check4.PNG";
import "./StylingCareers.css";

const Careers = () => {
    return (
        <div className="careers-container">

            <div className="careers-header">
                <div className="header-left">
                    <HiMenu className="menu-icon"/>
                    <img src={pics} alt="Amazon Logo" className="amazon-logo"/>
                </div>
                <h3 className="my-career">
                    My Careers <FaCaretDown/>
                </h3>
            </div>

            <div className="careers-search">
                <div className="find-one">
                    <h3 className="find">Find Jobs</h3>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search For Jobs By Title Or Keyword" className="search-input"/>


                    <div className="location-container">
                        <FaMapMarkerAlt className="location-icon"/>
                        <input type="text" placeholder="Location" className="location-input"/>
                    </div>

                    <button className="search-btn"><FaSearch/></button>
                </div>
            </div>


            <div className="careers-promo">
                <img src={picture} alt="Smiling woman" className="promo-image"/>
                <div className="promo-text">
                    <h3>Let’s Connect The World <span className="highlight">Together</span></h3>
                    <p><span className="highlight">Join our team in Business Operations</span></p>
                    <div className="button-container">
                        <button className="learn-more">Learn More</button>
                    </div>
                </div>
            </div>

            <nav className="views">
                <div className="view-div">
                    <div className="view-div-content">
                        <h3>Opportunities For Students </h3>
                        <p>Learn About, Search For ,And Apply To<br/></p>
                        <p>Internships And Full Time Opportunities For <br/></p>
                        <p>Students</p>
                        <button className="check"> View Open Jobs</button>
                    </div>

                    <div className="view-div-content">
                        <h3>WareHouse And Hourly Jobs </h3>
                        <p>Search Open And Learn About Jobs<br/></p>
                        <p>Opportunities At KingsStore And <br/></p>
                        <p>Stores</p>
                        <button className="check"> View Open Jobs</button>
                    </div>

                    <div className="view-div-content">
                        <h3>Software Development </h3>
                        <p>Explore more Jobs Opportunities and whats its like <br/></p>
                        <p>To Be A Software Engineer At <br/></p>
                        <p>KingsStore</p>
                        <button className="check"> View Open Jobs</button>
                    </div>

                </div>
            </nav>

            <section className="explore-opportunities">
                <h2 className="section-title">Explore Opportunities</h2>

                <div className="cards-container">
                    <div className="card">
                        <img className="card-image"
                             src="https://static.amazon.jobs/global_images/36/images/Teams_3_copy.jpg?1540850190/"
                             alt="Meeting of a team"/>
                        <h3>Teams</h3>
                        <p>Get to know KingsStore teams, from KingsStore Web Services to subsidiaries.</p>
                        <a href="https://seeAllTeams.com">See all teams</a>
                    </div>

                    <div className="card">
                        <img className="card-image"
                             src="https://static.amazon.jobs/global_images/34/images/job-categories-900x600.jpg?1647704396"
                             alt="Enjoying of a team"/>
                        <h3>Job Categories</h3>
                        <p>Want to be part of KingsStore? Find the right job for you.</p>
                        <a href="https://seeAllJobsCategories.com">See all job categories</a>
                    </div>

                    <div className="card">
                        <img className="card-image"
                             src="https://static.amazon.jobs/global_images/32/images/Location_copy.jpg?1540849565"
                             alt="Collaborating of a team"/>
                        <h3>Locations</h3>
                        <p>View KingsStore's office locations across the globe.</p>
                        <a href="https://seeAllLocations.com">See all locations</a>
                    </div>
                </div>
            </section>

           <div className="next-section">
               <div className="next">
                   <h3>Come Build the future with us</h3>
                   <p>Our Mission Is To Be The Most Customer - centric company this what unities<br/></p>
                   <p>KinsStore across teams and geographical As We Are All Striving To Delight Our<br/></p>
                   <p>Customer And Makes Their Lives Easier, One Innovative Products,Services And Idea At A<br/></p>
                   <p>Time</p>
                   <button className="check-btn"> Learn About Working With KingsStore</button>

               </div>
           </div>

            <nav className="Social-Media">
                <h2 className="text-one" style={{color:"yellow"}}>Join Us On</h2>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="icon twitter"/>
                </a>
                <a href="https://linkedIn.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="icon Linkedin"/>
                </a>

            </nav>

            <footer className="foot">
                <div className="headings">
                    <h3>Find Careers</h3>
                    <ul>
                        <li>Job Categories</li>
                        <li>Teams</li>
                        <li>Locations</li>
                        <li>Us And Eu Military Recruiting</li>
                        <li>Warehouse And Hourly Jobs</li>
                    </ul>

                </div>

                <div className="headings">
                    <h3>Working At KingsStore</h3>
                    <ul>
                        <li>Culture</li>
                        <li>Benefits</li>
                        <li>KingsStore NewsLetter</li>
                        <li>Diversity At KingsStore</li>
                        <li>Our Leadership Principles</li>
                    </ul>

                </div>


                <div className="headings">
                    <h3>Helps</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Interview Tips</li>
                        <li>Review Application Status</li>
                        <li>DisAbility Accommodations</li>
                        <li>Eu BackGround Checks</li>
                    </ul>

                </div>
                <div className="language-button">
                    <button>
                        🌐 English ▼
                    </button>
                </div>


            </footer>


        </div>
    );
};

export default Careers;
