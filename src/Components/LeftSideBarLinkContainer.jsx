import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import RSSContext from '../rssContext/RSSContext';

const LeftSideBarLinkContainer = () => {
    //calling context api here...
    let context = useContext(RSSContext);

    //using useHistory hook kere
    // let history = useHistory();

    //state for getting rsslink
    const[rssLink, setrssLink] = useState({
        url:''
    });

    const getRSSLink = (e)=>{
        setrssLink((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const addRSS = async(e)=>{
        e.preventDefault();
        //rssJSON variable
        let rssJSON;
        let error = false;

        try{
            let token = localStorage.getItem('token');
            let response = await fetch('http://localhost:8080/api/rsslinks/addrsslink',{
               method:"POST",
               headers:{
                  'content-type':'application/json',
                  'auth-token':token
               },
               body:JSON.stringify(rssLink)
            })
    
            rssJSON = await response.json();
        }catch(err){
            error = true;
           console.log("There is an error :", err);
        }

        if(!error){
            setrssLink({
                url:''
            })
            window.location.href= 'http://localhost:3000/dashboard/yourfeeds/';
        }
        
    }
    return (
        <>
            <div id="leftSideBarContainer">
                <form id="feedForm" onSubmit={addRSS}>
                    <input id="feedEnterBar" type="text" name="url" onChange={getRSSLink} value={rssLink.url} placeholder="Enter your RSS feed" autoComplete='off'/>
                    <button type="submit" id="feedCreateBtn">Create a Feed</button>
                </form>
                <p id="rssdetailsLink"><Link to="/dashboard/rssdetails">What is RSS?</Link></p>
            </div>
        </>
    )
}

export default LeftSideBarLinkContainer
