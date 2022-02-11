import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'





function PlaceOrder()
{
    const [emailError, setEmailError] = useState('')
    const [userRegistration, setuserRegistration] = useState(
        {
            email:" ",
            password:" "

        }
       
    );

    const navigate = useNavigate();
    const confirm = () => {
    navigate('/orderdetails');
    }
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

    return(
        <>
        <div class="section">
            <div class="my-container">
              <div class="login2">
                  <div>
                      <h1>Enter Your Contact Data</h1>
                  </div>
                  <div class="login-style">
                  <input class="email" type="name" id="name" name="name" placeholder="Your Name"/>
                  </div>
                  <div class="login-style">
                  <input class="email" type="address" id="street" name="street" placeholder="Street"/>
                  </div>
                  <div class="login-style">
                  <input class="email" type="zipcode" id="zip" name="zip" placeholder="Zip Code"/>
                  </div>
                  <div class="login-style">
                  <input class="email" type="country" id="country" name="country" placeholder="Country"/>
                  </div>
                  <div class="login-style">
                  <input onChange={ HandleInput}  value={userRegistration.email} class="email" type="email" id="email" name="email" placeholder="Email-Addess"/>
                  <span style={{fontWeight: 'bold',color: 'red', }}>{emailError}</span>
                 
                  </div>
                  <div class="login-style">
                    <select class="email" name="delivey" id="delivery-type">
                       <option value="fast">Fastest</option>
                       <option value="cheap">Cheapest</option>
                     </select>
                  </div>



     


                  <div class="submit">
                        <button onClick={confirm}
                        class="but"type="submit">Order </button> 
                  </div>
                 
            
              </div>
              
                
                 
            
              
            </div>

        </div>
        </>
    )
    
};

export default PlaceOrder;
