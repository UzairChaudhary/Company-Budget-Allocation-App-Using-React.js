import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [cost, setCost] = useState(0);
    const { budget,currency,expenses,dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
}

    const submitEvent = () => {

            
        if(budget < totalExpenses && cost !=='') {
            alert("The amount cannot be lower than amount spent so far "+currency+totalExpenses);
            setBudget(totalExpenses)
            return;
        }
        else if (cost>20000){
            alert("Limit is 20000")
            setBudget(20000)
            return;
        }
        else {
            setBudget(cost)
        }
    }

    return (
        <div className='alert alert-secondary' onClick={submitEvent}>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        
                        value={budget}
                        
                        style={{width:200}}
                        step={10}
                        max={20000}
                        pattern='[0-9]'
                        onChange={(event) =>{ 
                            setCost(event.target.value)
                            
                         }}
                        >
                        </input></span>
        </div>
    );
};
export default Budget;
