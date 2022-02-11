import React from "react";
import { useState } from 'react';
import Taskbar from "./Taskbar";





function OrderDetails(props)
{
   
    
   
     return(
            <>
           <Taskbar/>
            <div class="section">
                <div class="my-container">
                  <div class="login3">
                   <div class="display">
    
    
                     <div class="ingre">
                        <h3>Ingredients:</h3>
                     </div>
                     <div class="ingre">
                          <h4>Bacon {props.bac}</h4>
                     </div>
                     <div class="ingre">
                          <h4>Cheese {props.che}</h4>
                     </div>
                     <div class="ingre">
                          <h4>Lettuce {props.let}</h4>
                     </div>
                     <div class="ingre">
                          <h4>Meat {props.met}</h4>
                     </div>
                   
                    </div>
    
                    <div class="display">
                        <div class="ingre">
                        <h3>Price</h3>
                        </div>
                        <div class="ingre">
                        <h3>{props.pri}$</h3>
                        </div>
                        
                    </div>
                
                  </div>
                  
                    
                     
                
                  
                </div>
    
            </div>
            </>
        )
   
    


       
};

export default OrderDetails;
