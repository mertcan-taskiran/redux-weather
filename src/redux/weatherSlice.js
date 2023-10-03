import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

let apiKey="your_api_key";

export const fetchWeather=createAsyncThunk("weather", async(city)=>{
  const res= await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const res2= await  axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`)
       return res2.data
    })

export const weatherSlice=createSlice({
    name:"weather",
    initialState:{
        items:"",
        status:"idle",
        error:"",
    },
    reducers:{},
    extraReducers:{   
            [fetchWeather.pending]: (state) => {
              state.status = 'loading';
            },
            [fetchWeather.fulfilled]: (state, action) => {
                state.items=action.payload;
                state.status = "successed";
                state.error="";
            },
            [fetchWeather.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            },
        }
})

export default weatherSlice.reducer