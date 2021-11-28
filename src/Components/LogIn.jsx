import React, {useState} from 'react'
import {useHistory} from 'react-router';
import logo from '../images/DF.png'
import '../CSS/login.css';
import {Link} from 'react-router-dom';
const LogIn = () => {

    //useHistory hook available in react-router
    let history = useHistory();

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

    const loginDetail = async(e)=>{
        e.preventDefault();
        let response, error = false;
        try{
          const result = await fetch('http://localhost:8080/api/auth/login',{
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
                        <form id="loginform" onSubmit={loginDetail}>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">Enter valid email for ex: 'abc@gmail.com'</div>
                            </div>
                            <div className="form-group"><label htmlFor="password">Password :</label><input className="form-control userDetails" onChange={setData} value={data.password} id="password" type="password" name="password" aria-describedby="passwordHelp" placeholder="Enter password here" />
                                <div className="validationMessage" id="userEmailValidationMessage">Enter valid email for ex: 'abc@gmail.com'</div><small className="form-text" id="emailHelp">We&apos;ll never share your email with anyone else.</small>
                            </div>
                            <button id="loginFormSubmitBtn" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;
