import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Burgerbottom from './Burgerbottom';
import Lettuce from './Lettuce';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Meat from './Meat';
import No from './No';


function Gradient(props)
{

    const [count, setLettuce] = useState(0);
    const [che_count, setCheese] = useState(0);
    const [meat_count, setMeat] = useState(0);
    const [bacon_count, setBacon] = useState(0);
    const [price,setPrice]= useState(3);
    const [no,setNo]=useState(1);
    
    props.myset(count,che_count,meat_count,bacon_count,no,price);


    const navigate = useNavigate();
    const confirm = () => {
        navigate('/login');
    }
    
 
    

    const increment_lettuce=()=> {
    setNo(0);
    setLettuce(count+1);
    setPrice(price+0.5);
    }

    const increment_cheese=()=> {
        setNo(0);
        setCheese(che_count+1);
        setPrice(price+0.5);
    }

    const increment_bacon=()=> {
        setNo(0);
        setBacon(bacon_count+1);
        setPrice(price+1);
    }

    const increment_meat=()=> {
        setNo(0);
        setMeat(meat_count+1);
        setPrice(price+1.5);
    }

    const decrement_lettuce=()=> {
    if(count!=0)
    {
        setLettuce(count-1);
        setPrice(price-0.5);
    }
        
    }

    const decrement_cheese=()=> {
        if(che_count!=0)
        {
         setCheese(che_count-1);
         setPrice(price-0.5);
        }
    }

    const decrement_bacon=()=> {
     if(bacon_count!=0)
     {
        setBacon(bacon_count-1);
        setPrice(price-1);
     }
       
    }

    const decrement_meat=()=> {
     if(meat_count!=0)
     {

        setMeat(meat_count-1);
        setPrice(price-1.5);
     }
    }
  

    return(
        <>
       
        <div class="my-container">
               <div class="gradients">

                   <div class="row  price1">
                       <h3>Current Price: {price}$</h3>
                   </div>

                   <div class="row  lettuce">
                     <div class="margin">
                         <h3>Lettuce</h3>
                     </div>

                     <div class="button-style">
                     <button onClick={decrement_lettuce}
                     class="button3"type="button">Less</button> 
                     </div>

                     <div class="button-style">
                     <button onClick={increment_lettuce}
                     class="button3"type="button">More</button> 
                     </div>
                  
                   </div>
                   <div class="row  bacon">

                   <div class="margin1">
                         <h3>Bacon</h3>
                    </div>

                     <div class="button-style">
                     <button onClick={decrement_bacon}
                     class="button3"type="button">Less</button> 
                     </div>

                     <div class="button-style">
                     <button onClick={increment_bacon}
                     class="button3"type="button">More</button> 
                     </div>
                   </div>

                   <div class="row  cheese">
                   <div class="margin">
                         <h3>Cheese</h3>
                   </div>

                   <div class="button-style">
                     <button onClick={decrement_cheese}
                     class="button3"type="button">Less</button> 
                     </div>

                     <div class="button-style">
                     <button onClick={increment_cheese}
                     class="button3"type="button">More</button> 
                     </div>
                   </div>
                   <div class="row  meat">

                   <div class="margin2">
                         <h3>Meat</h3>
                    </div>

                    <div class="button-style">
                     <button onClick={decrement_meat}
                     class="button3"type="button">Less</button> 
                     </div>

                     <div class="button-style">
                     <button onClick={increment_meat}
                     class="button3"type="button">More</button> 
                     </div>

                   </div>
                       
                    

                       <div class="sign-up-button">
                        <button onClick={confirm}
                        id="signup" class="button4" type="button" value="Submit">SIGN UP TO ORDER </button> 
                       </div>


                       
                   
                  
               </div>
            </div>
            
        </>
    )
};
export  default Gradient;
