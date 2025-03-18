import { createSlice } from "@reduxjs/toolkit";
import { SettingData } from "../../../types";
import { getSettingData } from "../reducer/settingReducer";

interface SettingState {
    data: SettingData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: SettingState = {
    data: [],
    status: 'idle',
    error: null
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSettingData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSettingData.fulfilled, (state, {payload}) => {                
                state.data = payload;
                state.status = 'succeeded';
            })
            .addCase(getSettingData.rejected, (state, {payload}) => {
                state.status = 'failed';
                state.error = payload as string;
            })
    },
})

export default settingSlice.reducer;