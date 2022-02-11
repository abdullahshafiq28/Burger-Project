import React from "react";
import bacon from './images/bacon.png';


function Bacon(props)
{

    let data={"count":props.mycount};
    const array=[];
 
        for(let i=0; i<data.count; i++)
        {
         array.push(<img class="space"src={bacon} alt="Burger"></img>);
        }

    return(
        <>
        <div class="bac">
       {
           array
       }

        </div>
        </>
    )
};
export default Bacon;