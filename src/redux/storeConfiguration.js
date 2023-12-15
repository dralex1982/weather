import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from './slice/weatherSlice'
import message from './slice/messageSlice'

export const store = configureStore(
    {
        reducer: {weatherInfo, message}
    });
