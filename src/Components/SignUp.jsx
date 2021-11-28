import React,{useState} from 'react'
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import logo from '../images/DF.png'
import '../CSS/signup.css';
const SignUp = () => {
    const history = useHistory();
    const [data, setdata] = useState({
        name:"",
        email:"",
        mobile_number:"",
        password:""
    })

    const signUpDetail = async(event) =>{
       event.preventDefault(); 
       let response, error = false;
      try{
        const result = await fetch('http://localhost:8080/api/signup',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        response = await result.text();
      }catch(e){
         error = true;
         console.log('there is an error',e);
      }
      if(!error){
        localStorage.setItem('token', response);
        history.push('/dashboard');
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
                        <form id="loginform" onSubmit={signUpDetail}>
                            <div className="form-group"><label htmlFor="name">Name :</label><input className="form-control userDetails" onChange={setData} value={data.name} id="name" type="text" name="name" placeholder="Enter your name" autocomplete="off" />
                                <div className="validationMessage" id="userNameValidationMessage">Enter valid name for ex: 'Xyz Abc'</div>
                            </div>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">Enter valid email for ex: 'abc@gmail.com'</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number1">Number</label>
                                <input type="number" onChange={setData} value={data.mobile_number} className="form-control" name="mobile_number" id="Number1" placeholder="Enter your Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password1">Password</label>
                                <input type="password" onChange={setData} value={data.password} className="form-control" name="password" id="Password1" placeholder="Password" />
                            </div><small className="form-text" id="emailHelp">We&apos;ll never share your email with anyone else.</small>
                            <button id="loginFormSubmitBtn" type="submit">Sign Up</button><span id="loginQuestion">Already a user?</span>
                        </form>
                        <form id="linkToLogIn"><Link to="/login" id="loginLink">Log In</Link></form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
