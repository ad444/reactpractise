import React from 'react'
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import '../CSS/userfeeds.css';
import '../CSS/userdashboard.css';

const UserFeeds = () => {
    return (
        <div id="mainContainer">
            <div id="leftSideBar">
                <p id="yourFeedsSectionLink"><Link to="/dashboard">Home Dashboard</Link></p>
                <LeftSideBarLinkContainer />
            </div>
            <div id="centerContainer">
                <div className="container-fluid" id="centerContainerContent">
                    <div className="row" id="featuredSourcesHeader">
                        <div className="col-12 p-0">
                            <p id="featuredSources">Your Feeds</p>
                        </div>
                    </div>
                    <div className="row" id="ifeaturedSourcesContainer">
                        
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default UserFeeds
