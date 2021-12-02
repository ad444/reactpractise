import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import '../CSS/userfeeddisplay.css';
import RSSContext from '../rssContext/RSSContext';
import UserFeedDisplayCard from './UserFeedDisplayCard';
import ViewYourFeed from './ViewYourFeed';

const UserFeedDisplay = () => {
    //calling context api here...
    let context = useContext(RSSContext);

    useEffect(() => {
        console.log(context.feeddisplayData);
        if (context.feeddisplayData.items.length === 0) {
            fetchRSSJSONData();
        }
        // fetchRSSJSONData();
    })

    const fetchRSSJSONData = async () => {
        let json;
        let error = false;
        try {
            const response = await fetch('http://localhost:8080/api/rssdata/', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    url:localStorage.getItem('rssLink')
                })
            })

            json = await response.json();
        } catch (err) {
            error = true;
            console.log(err);
        }

        if (!error) {
            context.updatefeeddisplayArray(json);
        }
    }
    return (
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
                            <p id="featuredSources">{context.feeddisplayData.title}</p>
                        </div>
                    </div>
                    <div className="row" id="ifeaturedSourcesContainer">
                      
                        {
                            context.feeddisplayData.items.map((elem, index)=>{
                                return <UserFeedDisplayCard key={index} title={elem.title} link={elem.link}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default UserFeedDisplay;
