import logo from './logo.svg';
import React from 'react';
import Login from './Login';
import ConfirmOrder from './ConfirmOrder';
import Completeorder from './Completeorder';
import OrderDetails from './OrderDetails';
import Burger from './Burger';
import Burgerbottom from './Burgerbottom';
import Lettuce from './Lettuce';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Meat from './Meat';
import Gradient from './Gradient';
import Taskbar from './Taskbar';
import No from './No';
import Parent from './Parent';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() 
{

  const [lettucecount, setlettucecount] = useState(0);
  const [meatcount, setmeatcount] = useState(0);
  const [cheesecount, setcheesecount] = useState(0);
  const [baconcount, setbaconcount] = useState(0);
  const [price,setPrice]=useState(3);
  const [noo,setNoo]=useState(1);
  const setall=(setlet,setmeat,setbacon,setcheese,setno,setP)=>
   {
     setlettucecount(setlet);
     setmeatcount(setmeat);
     setcheesecount(setcheese);
     setbaconcount(setbacon);
     setNoo(setno);
     setPrice(setP);
    
   }
 
  
  return (
   <>
   

  <Router>
        <Routes>
        <Route exact path='/' element={<Parent myflag={true} myflag1={false} myset={setall}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/confirmOrder' element={<ConfirmOrder let={lettucecount} met={meatcount} che={cheesecount} bac={baconcount}/>} />
        <Route path='/completeorder' element={<Completeorder let={lettucecount} met={meatcount} che={cheesecount} bac={baconcount}/>} />
        <Route path='/orderdetails' element={<OrderDetails let={lettucecount} met={meatcount} che={cheesecount} bac={baconcount} pri={price}/>} />
       
        </Routes>
  </Router>
  
   
   
   
   </>
  );
}

export default App;
