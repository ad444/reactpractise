import React from 'react'
import {Link} from 'react-router-dom';
import '../CSS/index.css';
import logo from '../images/DF.png'
import book from '../images/book.png';
import professional from '../images/professional.png';
const Index = () => {
    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row" id="headerContainer">
                    <div className="col-6 col-xs-6 col-sm-5"><a href="/" id="applicationName"><img src={logo} alt="Daily_Feeds_Logo" width="64px" height="64px" /></a></div>
                    <div className="col-6 col-xs-6 col-sm-7">
                        <Link to='/login'><button type="button" id="loginBtn" onclick="call()">Login</button></Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="firstImpression">
                <div className="row" id="section">
                    <div className="col-12 col-sm-10 mx-auto">
                        <div id="sectionContent">
                            <p id="sectionContentFirstText">Find all the latest news, articles, blogs and more all at one place</p>
                            <p id="sectionContentSecondText"><em>&quot;Add personalized content from your trusted resources&quot;</em></p>
                            <Link to='/signup'><button type="submit" id="getStartedBtn">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="secondSection">
                <div className="row homepageSecondSection">
                    <div className="col-2 d-none d-sm-block"></div>
                    <div className="col-6 col-sm-4"><img className="homepageImages left" src={book} alt="openbookImage" /></div>
                    <div className="col-6 col-sm-4">
                        <p className="homepageImageContent">Read personalized content from your trusted resources</p>
                    </div>
                    <div className="col-2 d-none d-sm-block"></div>
                </div>
                <div className="row homepageSecondSection">
                    <div className="col-2 d-none d-sm-block"></div>
                    <div className="col-6 col-sm-4">
                        <p className="homepageImageContent">Get the latest updates, featured news and more according to your professional interest.</p>
                    </div>
                    <div className="col-6 col-sm-4"><img className="homepageImages right" src={professional} alt="professionalImage" /></div>
                    <div className="col-2 d-none d-sm-block"></div>
                </div>
                <div className="row" id="footer">
                    <div className="col-12" id="footerContent">
                        <div className="row mb-2">
                            <div className="col-6">
                                <Link to='/signup'><button type="submit" id="getStartedLinkFooter">Get Started</button></Link>
                            </div>
                            <div className="col-6">
                                <p id="leftFooterLink"><a href="/contact" alt="loading error">Contact Us</a></p>
                            </div>
                        </div>
                        <div className="row" id="copyrightBar">
                            <div className="col-12 text-center">
                                <p id="copyrightText">All the &copy; copyrights are reserved for this website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
