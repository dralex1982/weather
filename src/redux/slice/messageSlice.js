import {createSlice} from "@reduxjs/toolkit";
import {getWeatherActions} from "../weatherActions";

const messageSlice = createSlice(
    {
        name: 'message',
        initialState: 'Enter city name',
        extraReducers: builder =>
            {
                builder
                    .addCase(getWeatherActions.fulfilled, state => '')
                    .addCase(getWeatherActions.rejected, state => 'Enter correct city name')
                    .addCase(getWeatherActions.pending, state => 'Loading')

            }
    }
);

export default messageSlice.reducer;