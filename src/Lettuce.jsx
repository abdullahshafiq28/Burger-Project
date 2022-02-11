import React from "react";
import lettuce from './images/lettuce.png';


function Lettuce(props)
{
    let data={"count":props.mycount};
    const array=[];
 
        for(let i=0; i<data.count; i++)
        {
         array.push(<img class="space" src={lettuce} alt="Burger"></img>);
        }
 

    return(
        <>

         <div class="lett">
          {array}
         </div>
       
        
        </>
    )
};
export default Lettuce;