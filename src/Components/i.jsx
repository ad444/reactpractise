import React from 'react'
import '../CSS/i.css';
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import cardDetails from '../json/ihomedashboard';
import ICard from './ICard';
import ViewYourFeed from './ViewYourFeed';
const I = (props) => {
    return (
        <>
            <div id="mainContainer">
                <div id="leftSideBar">
                    <ViewYourFeed />
                    <p id="yourFeedsSectionLink"><Link to="/dashboard">Home Dashboard</Link></p>
                    <LeftSideBarLinkContainer />
                </div>
                <div id="centerContainer">
                    <div className="container-fluid" id="centerContainerContent">
                        <div className="row" id="featuredSourcesHeader">
                            <div className="col-12 p-0">
                                <p id="featuredSources">{props.header}</p>
                                <p id="featuredSourcesURL">{props.url}</p>
                            </div>
                        </div>
                        <div className="row" id="ifeaturedSourcesContainer">
                             {
                                 cardDetails.map((elem, index)=>{
                                    return <ICard key={index} url={`${props.url}/${elem.cardURL}`} cardContent={elem.cardContent}/>
                                 })
                             }
                        </div>
                    </div>
                </div>
                <RightSideBar />
            </div>
            {/* for mobile */}
            {/* <p classNameName="navigationLinks"> <a href="/dashboard/yourfeeds">View your feeds</a></p>
                <p id="rssdetailsLink"> <a href="/dashboard/rssdetails">What is RSS?</a></p>
                <p id="contentHeading">Featured Sources</p>
                <div classNameName="row" id="mobileFeaturedSourcesContainer">
                    <div classNameName="col-12">
                        <p classNameName="mobileSectionHeading">News</p>
                    </div>
                    <div classNameName="col-12" id="mobileNewsSection">
                        <div classNameName="row" id="mobileNewsSectionContainer"></div>
                    </div>
                    <div classNameName="col-12">
                        <p classNameName="mobileSectionHeading">Websites</p>
                    </div>
                    <div classNameName="col-12" id="mobileWebsiteSection">
                        <div classNameName="row" id="mobileWebsiteSectionContainer"></div>
                    </div>
                    <div classNameName="col-12">
                        <p classNameName="mobileSectionHeading">Education</p>
                    </div>
                    <div classNameName="col-12" id="mobileEducationSection">
                        <div classNameName="row" id="mobileEducationSectionContainer"></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default I;
