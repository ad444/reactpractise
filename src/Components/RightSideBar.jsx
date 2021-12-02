import React from 'react'
import {Link, useHistory} from 'react-router-dom';
const RightSideBar = () => {
    let history = useHistory();
    
    const logOut = ()=>{
       localStorage.setItem('token', '');
       history.push('/');
    }
     
    return (
        <>
            <div id="rightSideBar">
                <div id="rightSideBarContainer">
                    <div id="moon">
                        <div id="upper" ></div>
                        <div id="lower" ></div>
                    </div>
                    <p className="rightSideBarLink" onClick={logOut}><b>Log Out</b></p>
                    <p className="rightSideBarLink"><Link to="/contact"><b>Contact</b></Link></p>
                </div>
            </div>
        </>
    )
}

export default RightSideBar;
