import { useState } from 'react';
import RSSContext from './RSSContext';
import Call from '../json/newsChannelsContentFeeds';


const RSSState = (props)=>{
    
    const [actualrssData, setactualrssData] = useState([]);

    //rsslink variable
    let rsslink, navigateurl;

    //function to get rss link
    const getRSSLink = (feed)=>{
        navigateurl = feed;
        rsslink = {
            url:Call(feed)
        }
       getRSSData(rsslink);
    }

    //global variable for storing rss link related data
    let rssData;
    const getRSSData = async(x)=>{
        let error = false;
        try{
           let response = await fetch('http://localhost:8080/api/rssdata',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(x)
            });

           rssData = await response.json();
        }catch(err){
          error = true;
          console.log(err);
        }

        if(!error){
            setactualrssData(rssData);
            window.location.href=navigateurl;
        }
    }
    
    const storeRSSData = (x)=>{
        setactualrssData(x);
    }
    return (
      <RSSContext.Provider value={{getRSSLink, actualrssData, storeRSSData}}>
          {props.children}
      </RSSContext.Provider>
    )
}

export default RSSState;