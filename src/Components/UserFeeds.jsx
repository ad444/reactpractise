import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import LeftSideBarLinkContainer from './LeftSideBarLinkContainer';
import RightSideBar from './RightSideBar';
import '../CSS/userfeeds.css';
import RSSContext from '../rssContext/RSSContext';
import UserFeedsCard from './UserFeedsCard';
const UserFeeds = () => {
    //calling context api here...
    let context = useContext(RSSContext);

    useEffect(()=>{
      if(context.title.length === 0){
          console.log(context.title)
          fetchRSSLinks();
      }
    })

    const fetchRSSLinks = async()=>{
        let token = localStorage.getItem('token');
        let title;
        let error=false;
         try{
            const response = await fetch('http://localhost:8080/api/rsslinks/fetchrsslink',{
                method:'GET',
                headers:{
                    'auth-token':token
                }
            })
  
            title = await response.json();
         }catch(err){
             error = true;
            console.log(err);
         }
        
        if(!error){
            context.updateUserFeeds(title.data); 
        }  
    }
    return (
        <div id="mainContainer">
            <div id="leftSideBar">
                <p id="yourFeedsSectionLink3"><Link to="/dashboard">Home Dashboard</Link></p>
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
                        {
                            context.title.map((elem, index)=>{
                                return < UserFeedsCard key={index} id={elem._id} title={elem.title} url={elem.rssurl}
                                 fetchRSSLinks= {fetchRSSLinks}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default UserFeeds
