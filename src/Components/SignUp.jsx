import React,{useState} from 'react'
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import logo from '../images/DF.png'
import '../CSS/signup.css';
import ErrorDisplayBox from './ErrorDisplayBox';
const SignUp = () => {
    //calling history api here..
    const history = useHistory();

    //setting user sign up data
    const [data, setdata] = useState({
        name:"",
        email:"",
        mobile_number:"",
        password:""
    })

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        nameMessage:'',
        emailMessage:'',
        mobile_numberMessage:'',
        passwordMessage:''
    })

    //state for errorDisplay box
    const [errorBoxDisplay, seterrorBoxDisplay] = useState(false);

    //function to close errorDisplay box
    const closeDisplayBox = ()=>{
        seterrorBoxDisplay(false);
    }

    const signUpDetail = async() =>{
       let response, error = false;
      try{
        const result = await fetch('http://localhost:8080/api/signup',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        response = await result.json();
      }catch(e){
         error = true;
         console.log('there is an error',e);
      }
      if(!error){
          if(response.success === true){
              localStorage.setItem('token', response.authToken);
              history.push('/dashboard');
          }else{
            seterrorBoxDisplay(true);
          }
      }
    } 

    const setData = (e)=>{
        setdata((prev)=>{
           return {
               ...prev,
               [e.target.name]:e.target.value
           }
        })
    }

    const Validator = (name, email, mobile_number, password)=>{
        let nameerror, emailerror, mobile_numbererror, passworderror = false;

        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattNumber = /^\d{10}$/;
        let pattPassword = /[A-z]{6}[0-9]{4}\W{2}/;
        
        if(!pattName.test(name) || name===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  nameMessage:'Enter valid name'
               }
           })
           nameerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   nameMessage:''
                }
            })
            nameerror = false;
        }
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  emailMessage:'Enter valid email for ex:abc@gmail.com'
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
        if(!pattNumber.test(mobile_number || mobile_number==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  mobile_numberMessage:'Enter valid number'
               }
           })        
           mobile_numbererror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   mobile_numberMessage:''
                }
            })
            mobile_numbererror = false;
        }
        if(!pattPassword.test(password || password==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  passwordMessage:'Password must contain 6 characters, 4 digits & 2 special characters'
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

        if(nameerror === false && emailerror === false && mobile_numbererror === false && passworderror === false){
            signUpDetail();
        }
    }

    const submitData = (e)=>{
        e.preventDefault();
        Validator(data.name, data.email, data.mobile_number, data.password);
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
                        <p id="loginFormHeader">Sign Up</p>
                        <form id="loginform" onSubmit={submitData}>
                            <div className="form-group"><label htmlFor="name">Name :</label><input className="form-control userDetails" onChange={setData} value={data.name} id="name" type="text" name="name" placeholder="Enter your name" autocomplete="off" />
                                <div className="validationMessage" id="userNameValidationMessage">{errorMessage.nameMessage}</div>
                            </div>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.emailMessage}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number1">Number</label>
                                <input type="number" onChange={setData} value={data.mobile_number} className="form-control" name="mobile_number" id="Number1" placeholder="Enter your Number" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.mobile_numberMessage}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password1">Password</label>
                                <input type="password" onChange={setData} value={data.password} className="form-control" name="password" id="Password1" placeholder="Password" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.passwordMessage}</div>
                            </div><small className="form-text" id="emailHelp">We&apos;ll never share your email with anyone else.</small>
                            <button id="loginFormSubmitBtn" type="submit">Sign Up</button><span id="loginQuestion">Already a user?</span>
                        </form>
                        <form id="linkToLogIn"><Link to="/login" id="loginLink">Log In</Link></form>
                        {
                            errorBoxDisplay === true &&
                            <ErrorDisplayBox message={'User with these information already exists. Please login!'} closeDisplayBox={closeDisplayBox} navigate={'/login'}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
