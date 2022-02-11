import React from "react";
import burger from './images/images.jpeg';
import { useNavigate } from 'react-router-dom';





function Taskbar()
{


    const navigate = useNavigate();
    const confirm = () => {
    navigate('/login');
    }
    


    return(
        <>
        <div class="section">
            <div class="my-container">
               <div class="task-bar">
                   
                   <img class="burger-style" src={burger} alt="Burger"></img>

                   <div class="burger-button">
                    <button class="button2"type="button">Burger Builder</button> 
                   </div>

                   <div class="login-button">
                    <button onClick={confirm}
                    class="button1"type="button">Login</button> 
                   </div>
                  
               </div>
            </div>

        </div>
        </>
    )
    
};

export default Taskbar;
