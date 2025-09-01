import { createSlice } from "@reduxjs/toolkit";
import data from '../../Data/LowPrice.json'

const initialState = {
    offerCategory: data.offerCategory || [],
};


const offerSlice = createSlice({
    name : 'offer',
    initialState,
    reducers:{}
});

export default offerSlice.reducer;
