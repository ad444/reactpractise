import React, { useEffect, useContext } from 'react'
import '../CSS/newschannelscontent.css';
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import NewsChannelsContentCard from './NewsChannelsContentCard';
import Call from '../json/newsChannelsContentFeeds';
import RSSContext
 from '../rssContext/RSSContext';
 import ViewYourFeed from './ViewYourFeed';
const NewsChannelsContent = (props) => {
    let context = useContext(RSSContext);

    useEffect(() => {
        console.log(context.actualrssData.length);
        if(context.actualrssData.length === 0){ 
            getRSSLink(window.location.href);
        }
        // eslint-disable-next-line
    },[])


    //rsslink variable
    let rsslink;

    //function to get rss link
    const getRSSLink = (feed) => {
        let temp = feed;
        console.log(temp); 
        rsslink = {
            url: Call(feed)
        }
        getRSSData(rsslink);
    }

    //global variable for storing rss link related data
    let rssData;
    const getRSSData = async (x) => {
        let error = false;
        try {
            let response = await fetch('http://localhost:8080/api/rssdata', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(x)
            });

            rssData = await response.json();
            console.log(rssData);
        } catch (err) {
            error = true;
            console.log(err);
        }

        if (!error) {
            context.storeRSSData(rssData.items);
            // setactualrssData(rssData);
            // console.log(actualrssData);
        }
    }
    // getRSSLink(window.location.href);
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
                                <p id="featuredSources">{props.channelName} - {props.pageHeader}</p>
                                <p id="featuredSourcesURL">{props.url}</p>
                            </div>
                        </div>
                        <div className="row" id="ifeaturedSourcesContainer">
                            {
                                 context.actualrssData.map((elem, index)=>{
                                    return <NewsChannelsContentCard key={index} title={elem.title} link={elem.link} />
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

export default NewsChannelsContent;
