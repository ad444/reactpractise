import {useState} from 'react';
import '../CSS/contact.css';
import logo from '../images/DF.png';
import {Link, useHistory} from 'react-router-dom';

const Contact = () => {

    //calling useHistory hook here
    let history = useHistory();

    //state to manage form data
    const [data, setcontactData] = useState({
        name:'',
        email:'',
        mobile_number:''
    })

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        nameMessage:'',
        emailMessage:'',
        mobile_numberMessage:''
    })

    const updateContactData = (e)=>{
        setcontactData((prev)=>{
         return {
             ...prev,
             [e.target.name]:e.target.value
         }
        })
    }

    const getData = async()=>{
        let error = false;
        let finalResponse;
        try{
            const response  =  await fetch('http://localhost:8080/api/contact',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(data)
              })
      
            finalResponse = await response.json();
              
        }catch(err){
            error = true;
            console.log('there is an error :', err);
        }
        
        if(!error && finalResponse.success === true){
            if(localStorage.getItem('token') !== ''){
                history.goBack();
            }else{
                history.push('/');
            }
        }
    }

    const Validator = (name, email, mobile_number)=>{
        let nameerror, emailerror, mobile_numbererror;

        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattNumber = /^\d{10}$/;
        
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

        if(nameerror === false && emailerror === false && mobile_numbererror === false){
            getData();
        }
    }

    const contactDataFunc = (e)=>{
        e.preventDefault();
        Validator(data.name, data.email, data.mobile_number);
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
                    <div className="col-12 col-sm-8 col-md-6 mx-auto" id="loginFormFieldSetContainer">
                        <p id="loginFormHeader">Contact Us</p>
                        <form id="loginform" onSubmit={contactDataFunc}>
                            <div className="form-group"><label htmlFor="name">Name :</label><input onChange={updateContactData} className="form-control" id="name" type="text" name="name" placeholder="Enter your name" autocomplete="off" />
                                <div className="validationMessage" id="userNameValidationMessage">{errorMessage.nameMessage}</div>
                            </div>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input onChange={updateContactData} className="form-control" id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.emailMessage}</div>
                            </div>
                            <div className="form-group"><label htmlFor="number">Number :</label><input onChange={updateContactData} className="form-control" id="email" type="text" name="mobile_number" aria-describedby="numberHelp" placeholder="Enter your number" autocomplete="off" />
                                <div className="validationMessage" id="userNumberValidationMessage">{errorMessage.mobile_numberMessage}</div><small className="form-text" id="emailHelp">We&apos;ll never share your information with anyone else.</small>
                            </div>
                            <button id="loginFormSubmitBtn" type="submit">Contact Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;