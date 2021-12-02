import React from 'react'
import '../CSS/homedashboard.css';
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import newsCards from '../json/newsSectionContainer';
import educationCards from '../json/educationSectionContainer';
import websiteCards from '../json/websiteContainer';
import HomedashboardNewsCard from './HomeDashboardNewsCard';
import HomedashboardCard from './HomedashboardCard';

const Homedashboard = () => {
    return (
        <>
            <div id="mainContainer">
                <div id="leftSideBar">
                    <p id="yourFeedsSectionLinkHomeDashboard"><Link to='/dashboard/yourfeeds'>View your feeds</Link></p>
                    <LeftSideBarLinkContainer />
                </div>
                <div id="centerContainer">
                    <div className="container-fluid" id="centerContainerContent">
                        <div className="row" id="featuredSourcesHeader">
                            <div className="col-12 p-0">
                                <p id="featuredSources">Featured Sources</p>
                            </div>
                        </div>
                        <div className="row" id="featuredSourcesContainer">
                            <div className="col-12">
                                <p className="sectionHeading mt-5">News</p>
                            </div>
                            <div className="col-12" id="newsSection">
                                <div className="row" id="newsSectionContainer">
                                    {
                                        newsCards.map((elem, index)=>{
                                             return <HomedashboardNewsCard key={index} url={elem.url} header={elem.header} cardImage={elem.cardImage} string={elem.string}/>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="sectionHeading">Websites</p>
                            </div>
                            <div className="col-12" id="websiteSection">
                                <div className="row" id="websiteSectionContainer">
                                    {
                                        websiteCards.map((elem, index)=>{
                                             return <HomedashboardCard key={index} url={elem.url} header={elem.header} cardImage={elem.cardImage}  string={elem.string}/>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="sectionHeading">Education</p>
                            </div>
                            <div className="col-12" id="educationSection">
                                <div className="row" id="educationSectionContainer">
                                    {
                                        educationCards.map((elem, index)=>{
                                             return <HomedashboardCard key={index} url={elem.url} header={elem.header} cardImage={elem.cardImage}  string={elem.string}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSideBar />
            </div>
                {/* for mobile */}
                {/* <p className="navigationLinks"> <a href="/dashboard/yourfeeds">View your feeds</a></p>
                <p id="rssdetailsLink"> <a href="/dashboard/rssdetails">What is RSS?</a></p>
                <p id="contentHeading">Featured Sources</p>
                <div className="row" id="mobileFeaturedSourcesContainer">
                    <div className="col-12">
                        <p className="mobileSectionHeading">News</p>
                    </div>
                    <div className="col-12" id="mobileNewsSection">
                        <div className="row" id="mobileNewsSectionContainer"></div>
                    </div>
                    <div className="col-12">
                        <p className="mobileSectionHeading">Websites</p>
                    </div>
                    <div className="col-12" id="mobileWebsiteSection">
                        <div className="row" id="mobileWebsiteSectionContainer"></div>
                    </div>
                    <div className="col-12">
                        <p className="mobileSectionHeading">Education</p>
                    </div>
                    <div className="col-12" id="mobileEducationSection">
                        <div className="row" id="mobileEducationSectionContainer"></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Homedashboard;
