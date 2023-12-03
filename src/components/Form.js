import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateInput} from "../redux/actions";
import {getWeatherAction} from "../redux/asyncActions";

const Form = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.inputValue);

    const handleChangeInput = e => {
        const newValue = e.target.value;
        dispatch(updateInput(newValue));
    }

    return (
        <div>
            <input type={'text'} name={'city'} placeholder={'Enter city'}
                   onChange={handleChangeInput} value={inputValue}/>
            <button onClick={()=> {
                dispatch(getWeatherAction(inputValue))
            }}>Get weather</button>
        </div>
    );
};

export default Form;