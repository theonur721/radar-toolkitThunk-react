import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
    flights: [],
    isLoading: true,
    isError: false,
};

const flightSlice = createSlice({
    name: "flightSlice",
    initialState,
    extraReducers: (builder)=> {
        builder
        // cevap beklerken
        .addCase(getFlights.pending, (state)=>{
            state.isLoading = true;
        })
        // cevap olumlu
        .addCase(getFlights.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.flights = action.payload;
        } )
        // cevap olumsuz
        .addCase(getFlights.rejected, (state)=>{
            state.isLoading = false;
            state.isError = "Uçuş verileri alınırken bir hata oluştu";
        });
    },
});



export default flightSlice.reducer;