import { createSlice } from "@reduxjs/toolkit";
import { SwiperData } from "../../../types";
import { getSwiperData } from "../reducer/swiperReducer";

interface SwiperState {
    data: SwiperData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: SwiperState = {
    data: [],
    status: 'idle',
    error: null
}

export const swiperSlice = createSlice({
    name: 'swiper',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSwiperData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSwiperData.fulfilled, (state, action) => {                
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getSwiperData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

export default swiperSlice.reducer;