import { createSlice } from "@reduxjs/toolkit";
import { BannerData } from "../../../types";
import { getBannerData } from "../reducer/homeReducer";

interface BannerState {
    data: BannerData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BannerState = {
    data: [],
    status: 'idle',
    error: null
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBannerData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBannerData.fulfilled, (state, {payload}) => {                
                state.data = payload;
                state.status = 'succeeded';
            })
            .addCase(getBannerData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

export default bannerSlice.reducer;