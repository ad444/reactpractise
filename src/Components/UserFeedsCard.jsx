import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom';
import RSSContext from '../rssContext/RSSContext';

const UserFeedsCard = (props) => {
    let history = useHistory();
    
    let context = useContext(RSSContext);

    const navigateToDisplay = (e)=>{
        history.push('/dashboard/yourfeeds/rss');
        localStorage.setItem('rssLink', props.url);
    }

    const deleteRSS = async(x)=>{
        let finalResponse;
        let error = false;

        const token = localStorage.getItem('token');

        try{
            const response = await fetch(`http://localhost:8080/api/rsslinks/deletersslink/${x}`, {
                method:'PUT',
                headers:{
                    'auth-token':token
                }
    
            });
    
        finalResponse = await response.text(); 
        }catch(err){
            error = true;
            console.log('there is an error :', err);
        }
        
        if(!error){
          window.location.href = 'http://localhost:3000/dashboard/yourfeeds/';
        }
    }

    return (
        <div id="card" className="col-10 col-md-5 mx-auto mt-3 mb-3" >
           <button className="deleteFeeds" type="button" onClick={()=>{
               deleteRSS(props.id)
           }}><i className="fas fa-trash"></i></button>
           <p id="feedTitle" onClick={navigateToDisplay}>{props.title}</p>
        </div>
    )
}

export default UserFeedsCard;
