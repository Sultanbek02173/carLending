import { createSlice } from "@reduxjs/toolkit";
import { TariffsData } from "../../../types";
import { getTariffsData } from "../reducer/tariffsReducer";

interface TariffsState {
    data: TariffsData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TariffsState = {
    data: [],
    status: 'idle',
    error: null
}

export const tariffsSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTariffsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTariffsData.fulfilled, (state, action) => {                
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getTariffsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

export default tariffsSlice.reducer;