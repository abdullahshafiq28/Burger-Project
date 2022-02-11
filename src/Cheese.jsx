import React from "react";
import cheese from './images/cheese.png';


function Cheese(props)
{
    let data={"count":props.mycount};
    const array=[];
 
        for(let i=0; i<data.count; i++)
        {
         array.push(<img class="space" src={cheese} alt="Burger"></img>);
        }


    return(
        <>
        <div class="ches">
     {
         array
     }

        </div>
        </>
    )
};
export default Cheese;