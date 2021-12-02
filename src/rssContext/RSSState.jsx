import { useState } from 'react';
import RSSContext from './RSSContext';
import Call from '../json/newsChannelsContentFeeds';


const RSSState = (props)=>{
    
    //default rss links *NewsChannelsContent*
    const [actualrssData, setactualrssData] = useState([]);

    //user rss links *UserFeedDisplay*
    const [userrssData, setuserrssData] = useState({
        header:'',
        rssData:[]
    });

    //userfeeds section array state *UserFeeds*
    const [title, setTitle] = useState([]);

    //userfeeddisplay rss link
    const [link, setLink] = useState('');

    //userfeeddisplay content array
    const [feeddisplayData, setfeeddisplayData] = useState({
        title:'',
        items:[]
    });

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
    
    //NewsChannelsContent
    const storeRSSData = (x)=>{
        setactualrssData(x);
    }

    //function to update user rss link data *UserFeedDisplay*
    const updateLatestRSSData = (data)=>{
        setuserrssData({
            header:data.title,
            rssData:data.items
        });
    }

    //function to update userfeeds *UserFeeds*
    const updateUserFeeds = (rssData)=>{
        setTitle(rssData);
    }

    //function to update userfeeddisplay array
    const updatefeeddisplayArray = (data)=>{
        setfeeddisplayData({
            title:data.title,
            items:data.items
        })
    }

    //function to get userfeeddisplay rss link
    const getuserfeeddisplayrsslink = (link)=>{
       setLink(link);
    }

    return (
      <RSSContext.Provider value={{getRSSLink, actualrssData, userrssData, title, link, feeddisplayData, storeRSSData, updateLatestRSSData, updateUserFeeds, getuserfeeddisplayrsslink, updatefeeddisplayArray}}>
          {props.children}
      </RSSContext.Provider>
    )
}

export default RSSState;