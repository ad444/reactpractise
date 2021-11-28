import React from 'react'
import {Link} from 'react-router-dom';
const RightSideBar = () => {
    const applicationTheme = ()=>{

    }
    return (
        <>
            <div id="rightSideBar">
                <div id="rightSideBarContainer">
                    <div id="moon">
                        <div id="upper" onClick={applicationTheme}></div>
                        <div id="lower" onClick={applicationTheme}></div>
                    </div>
                    <p className="rightSideBarLink"><Link to="/"><b>Log Out</b></Link></p>
                    <p className="rightSideBarLink"><Link to="/contact"><b>Contact</b></Link></p>
                </div>
            </div>
        </>
    )
}

export default RightSideBar;
