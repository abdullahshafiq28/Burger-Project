import React from "react";
import image2 from './images/bottom-burger1.png'




function  No(props)
{

    const myfun=()=>
    {
        if(props.mycount==1)
        {
            return(
                <div class="burger-gradients">
                <h1> No Ingredients Added</h1>
                </div>
            )
        }
    }
   



    return(
        <>
        <div class="section">
            <div class="my-container">

              <div class="burger25">
               {myfun()}

              </div>

              
            </div>

        </div>
        </>
    )
    
};

export default No;
