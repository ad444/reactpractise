import React from 'react'
import {Link} from 'react-router-dom';
const LeftSideBarLinkContainer = () => {
    return (
        <>
            <div id="leftSideBarContainer">
                <form id="feedForm"><input id="feedEnterBar" type="text" name="feed" placeholder="Enter your RSS feed" /><button type="submit" id="feedCreateBtn">Create a Feed</button></form>
                <p id="rssdetailsLink"><Link to="/dashboard/rssdetails">What is RSS?</Link></p>
            </div>
        </>
    )
}

export default LeftSideBarLinkContainer
