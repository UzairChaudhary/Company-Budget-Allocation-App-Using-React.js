import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'style={{backgroundColor:'#33FF49', color:'white',width:250}}> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white', width:100, border: 'none ', borderStyle:'solid'}}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;