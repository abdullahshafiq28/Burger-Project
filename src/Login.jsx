import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'




function Login()
{
 const [emailError, setEmailError] = useState('')
    const [userRegistration, setuserRegistration] = useState(
        {
            email:" ",
            password:" "

        }
       
    );
     
    const [record, setRecord]= useState([]);
    const HandleInput=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        var email = e.target.value
    
        if (validator.isEmail(email)) {
          
          setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        }
        setuserRegistration({...userRegistration, [name]:value})
       
    }
    const navigate = useNavigate();
    const confirm = () => {
        navigate('/confirmOrder');
    }
    

    const HandleSubmit=(e)=>
    {
        e.preventDefault();
          
      
        const newRecord={ ...userRegistration}
        
        setRecord([...record, newRecord]);
        
        confirm();  
    }
   

    const checkValidate=(e)=>
    {
        record.map( (temp)=>
        {
            { 
                if( temp.email==e.target.value )
                {
                    confirm();              
                }
            }
            
        })
                 
    }

    return(
        <>
        <div class="section">
            <div class="my-container">
              <div class="login">
              <div class="login-style">
                  <h1>Register</h1>
                  </div>

                  <div class="login-style">
                  <input  onChange={ HandleInput}  value={userRegistration.email}
                  class="email" type="email" id="email" name="email"   placeholder="Email-Addess"/>
                  <span style={{fontWeight: 'bold',color: 'red', }}>{emailError}</span>
                  </div>
                  <div class="login-style">
                  <input onChange={HandleInput} value={userRegistration.password}
                  class="email" type="password" id="password" name="password" placeholder="Password"/>
                  </div>
                  <div class="submit">
                        <button onClick={HandleSubmit}
                        class="but"type="submit">SUBMIT </button> 
                  </div>
                  <div class="signin">
                        <button onClick={checkValidate}
                        class="butt"type="submit">SIGNIN </button> 
                  </div>
            
              </div>
              
              
                
                 
            
              
            </div>

        </div>
        </>
    )
    
};

export default Login;
