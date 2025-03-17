import { createSlice } from "@reduxjs/toolkit";
import { ourServiceData } from "../../../types";
import { getOurServiceData } from "../reducer/ourServiceReducer";

interface OurServiceState {
    data: ourServiceData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: OurServiceState = {
    data: [],
    status: 'idle',
    error: null
}

export const ourServiceSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getOurServiceData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOurServiceData.fulfilled, (state, action) => {                
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getOurServiceData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

export default ourServiceSlice.reducer;