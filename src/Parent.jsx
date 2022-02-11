import React from "react";
import { useState } from 'react';
import Burger from './Burger';
import Burgerbottom from './Burgerbottom';
import Lettuce from './Lettuce';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Meat from './Meat';
import Gradient from './Gradient';
import Taskbar from './Taskbar';
import No from './No';
import OrderDetails from './OrderDetails';

function Parent(props)
{

  const [lettucecount, setlettucecount] = useState(0);
  const [meatcount, setmeatcount] = useState(0);
  const [cheesecount, setcheesecount] = useState(0);
  const [baconcount, setbaconcount] = useState(0);
  const [noo,setNoo]=useState(1);
  const [price,setPrice]=useState(3);
  const setall=(setlet,setmeat,setbacon,setcheese,setno,setP)=>
   {
     setlettucecount(setlet);
     setmeatcount(setmeat);
     setcheesecount(setcheese);
     setbaconcount(setbacon);
     setPrice(setP);
     setNoo(setno);
   }
     props.myset(lettucecount,meatcount,cheesecount,baconcount,noo,price);
  
    return(
    
       
   <>
   <Taskbar/>
   <div class="scroll">
   <Burger/>
   <Lettuce mycount={lettucecount}/>
   <Meat mycount={meatcount}/>
   <Cheese mycount={cheesecount}/>
   <Bacon mycount={baconcount}/>
   <No mycount={noo}/>
   <Burgerbottom/>

   </div>
   
   <Gradient myset={setall}/>
   </>
      
    
    )
  
   
   
};
export  default Parent;