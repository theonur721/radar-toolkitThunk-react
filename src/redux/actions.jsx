import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constants";
import axios from "axios";

// ! createAsyncThunk...
// * hem asenkron işlemler yapabilen(api istekleri)
// * hem bunların sonucunu store'a aktarabilen
// * asenkron aksiyon oluşturmamızı sağlayan methoddur

export const getFlights = createAsyncThunk("flights/getFlights", async ()=> {
    // apiye istek atma
    const res = await axios.request(options);
    const newData = res.data.aircraft.map((flight)=>({
        id: flight[0],
        code: flight[1],
        lat: flight[2],
        lan: flight[3],
    }));
    // verileri storea aktarma yolu return
    return newData;
});