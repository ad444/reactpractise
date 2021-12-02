import React, {useState} from 'react'
import {useHistory} from 'react-router';
import logo from '../images/DF.png'
import '../CSS/login.css';
import {Link} from 'react-router-dom';
import ErrorDisplayBox from './ErrorDisplayBox';
const LogIn = () => {

    const [data, setdata] = useState({
        email:"",
        password:""
    });

    const setData = (e)=>{
       setdata((prev)=>{
          return {
              ...prev,
              [e.target.name]:e.target.value
          }
       })
    }

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        emailMessage:'',
        passwordMessage:''
    })

    //state for errorDisplay box
    const [errorBoxDisplay, seterrorBoxDisplay] = useState(false);

    //function to close errorDisplay box
    const closeDisplayBox = ()=>{
        seterrorBoxDisplay(false);
    }

    const Validator = (email, password)=>{
        let emailerror, passworderror = false;

        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /^[A-z]{6}[0-9]{4}\W{2}$/;
        
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  emailMessage:'Please enter valid email'
               }
           })       
           emailerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   emailMessage:''
                }
            })
            emailerror = false;
        }
        
        if(!pattPassword.test(password || password==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  passwordMessage:'Please enter correct password'
               }
           })
           passworderror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   passwordMessage:''
                }
            })
            passworderror = false;
        }

        if(emailerror === false && passworderror === false){
            loginDetail();
        }
    }

    const loginDetail = async()=>{
        let response;
        let error = false;
        try{
          const result = await fetch('http://localhost:8080/api/auth/login',{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(data)
          })
          response = await result.json();
          console.log(response)
        }catch(e){
           error = true;
           console.log('there is an error',e);
        }
        if(!error){
          if(response.success === true){
              localStorage.setItem('token', response.authToken);
              window.location.href = 'http://localhost:3000/dashboard';
          }else{
              seterrorBoxDisplay(true);
          }
        }
    }

    const userloginDetail = (e)=>{
      e.preventDefault();
      Validator(data.email, data.password);
    }

    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row" id="headerContainer">
                    <div className="col-12"><Link to="/" id="applicationName"><img src={logo} alt="Daily_Feeds_Logo" width="64px" height="64px" /></Link></div>
                </div>
            </div>
            <div className="container-fluid" id="formContainer">
                <div className="row" id="loginFormFieldSet">
                    <div className="col-12 col-sm-10 col-md-6 mx-auto" id="loginFormFieldSetContainer">
                        <p id="loginFormHeader">Login</p>
                        <form id="loginform" onSubmit={userloginDetail}>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.emailMessage}</div>
                            </div>
                            <div className="form-group"><label htmlFor="password">Password :</label><input className="form-control userDetails" onChange={setData} value={data.password} id="password" type="password" name="password" aria-describedby="passwordHelp" placeholder="Enter password here" />
                                <div className="validationMessage" id="userPasswordValidationMessage">{errorMessage.passwordMessage}</div><small className="form-text" id="emailHelp">We&apos;ll never share your information with anyone else.</small>
                            </div>
                            <button id="loginFormSubmitBtn" type="submit">Log In</button>
                        </form>
                        {/* Error display box */}
                        {
                            errorBoxDisplay === true &&
                            <ErrorDisplayBox message={'Sorry! There is no user with these information.'} closeDisplayBox={closeDisplayBox} navigate={'signup'}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;
