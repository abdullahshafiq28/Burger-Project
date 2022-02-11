import React from 'react';
import Burger from './Burger';
import Burgerbottom from './Burgerbottom';
import Lettuce from './Lettuce';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Meat from './Meat';

import Taskbar from './Taskbar';
import Taste from './Taste';
import Confirm from'./Confirm';


function ConfirmOrder(props) {




  return (
   <>
   <Taskbar/>
   <Taste/>
   <Burger/>
   <Lettuce mycount={props.let}/>
   <Meat mycount={props.met}/>
   <Cheese mycount={props.che}/>
   <Bacon mycount={props.bac} />
   <Burgerbottom/>
   <Confirm/>
   
   
   
   </>
  );
}

export default ConfirmOrder;
