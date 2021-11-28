import '../CSS/contact.css';

const Contact = () => {
    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row" id="headerContainer">
                    <div className="col-12"><a href="/" id="applicationName"><img src="/static/images/D F.png" alt="Daily_Feeds_Logo" width="64px" height="64px" /></a></div>
                </div>
            </div>
            <div className="container-fluid" id="formContainer">
                <div className="row" id="loginFormFieldSet">
                    <div className="col-12 col-sm-8 col-md-6 mx-auto" id="loginFormFieldSetContainer">
                        <p id="loginFormHeader">Contact Us</p>
                        <form action="/login" method="POST" id="loginform">
                            <div className="form-group"><label for="name">Name :</label><input className="form-control" id="name" type="text" name="name" placeholder="Enter your name" required="true" autocomplete="off" />
                                <div className="validationMessage" id="userNameValidationMessage">Enter valid name for ex: 'Xyz Abc'</div>
                            </div>
                            <div className="form-group"><label for="email">Email address :</label><input className="form-control" id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">Enter valid email for ex: 'abc@gmail.com'</div><small className="form-text" id="emailHelp">We&apos;ll never share your email with anyone else.</small>
                            </div><button id="loginFormSubmitBtn" type="button">Contact Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;