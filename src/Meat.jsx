import React from "react";
import meat from './images/meat.png';


function Meat(props)
{
    let data={"count":props.mycount};
    const array=[];
 
        for(let i=0; i<data.count; i++)
        {
         array.push(<img class="space" src={meat} alt="Burger"></img>);
        }



    return(
        <>
        <div class="met">
       {
           array
       }

        </div>
        </>
    )
};
export default Meat;