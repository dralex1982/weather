import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeatherActions} from "../redux/weatherActions";

const FormControl = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
       dispatch(getWeatherActions(city));
       setCity('')
    }

    return (
        <div>
            <input type={'text'} placeholder={'Enter city'}
                   onChange={e=> setCity(e.target.value)} value={city}/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    );
};

export default FormControl;