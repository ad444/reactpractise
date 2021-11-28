import React from 'react'
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import '../CSS/rssdetails.css';
import '../CSS/userdashboard.css';
const RSSDetails = () => {
    return (
        <div id="mainContainer">
            <div id="leftSideBar">
                <p id="yourFeedsSectionLink"><Link to="/dashboard/yourfeeds">View your feeds</Link></p>
                <LeftSideBarLinkContainer />
            </div>
            <div id="centerContainer">
                <div class="container-fluid" id="centerContainerContent">
                    <div class="row" id="featuredSourcesHeader">
                        <div class="col-12 p-0">
                            <p id="featuredSources">RSS Information</p>
                        </div>
                    </div>
                    <div class="row" id="rssDetailsContainer">
                        <div class="col-12 p-0">
                            <p class="questions">What is RSS?</p>
                            <p class="answers">RSS formerly called RDF site summary or rich site summary is a format used to provide subscribers with new content from frequently updated websites.</p>
                        </div>
                        <div class="col-12 p-0">
                            <p class="questions">Which tools do I need to use RSS?</p>
                            <p class="answers">You need to use an RSS reader, also called a feed reader, is a browser add-on program designed to gather and display RSS feeds according to user-definable parameters.</p>
                        </div>
                        <div class="col-12 p-0">
                            <p class="questions">What are the benefits of using Daily Feeds?</p>
                            <p class="answers">At Daily Feeds, we bring you more closer to the content you are interested in a more easy way. Enjoy amazing reading experience with exciting features.</p>
                        </div>
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default RSSDetails;
