import React from 'react';
import { useNavigate } from 'react-router-dom';


function Confirm() {

    const navigate = useNavigate();
    const confirm = () => {
    navigate('/completeorder');
    }
  return (
   <>
    <div class="section">
            <div class="my-container">

              <div class="confirm">
                <div class="right">
                   <button onClick={confirm}
                   class="but"type="submit">Confirm </button> 
                 </div>
                 <div class="">
                    <button class="butt"type="submit">Cancel </button> 
                 </div>
                 
              </div>

              
            </div>

        </div>
   
   
   
   </>
  );
}

export default Confirm;
