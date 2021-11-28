import '../CSS/error.css';

const Error = () => {
    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row" id="headerContainer">
                    <div className="col-12"><a href="/" id="applicationName"><img id="applicationLogo" src="/static/images/D F.png" alt="Daily_Feeds_Logo" width="64px" height="64px" /></a></div>
                </div>
            </div>
            <div className="container-fluid" id="errorContainer">
                <div className="row" id="errorContent">
                    <div className="col-12">
                        <p id="sorryMessage"> <span id="sorryMessageFirstLetter">Sorry! </span>This page doesn't exist</p>
                        <p id="goBackLink"><a href="#" onclick="goBack()">Go Back</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Error;