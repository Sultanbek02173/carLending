import { createSlice } from "@reduxjs/toolkit";
import { TransferData } from "../../../types";
import { getTransferData } from "../reducer/transferReducer";

interface TransferState {
    data: TransferData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TransferState = {
    data: [],
    status: 'idle',
    error: null
}

export const transferSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTransferData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTransferData.fulfilled, (state, action) => {                
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getTransferData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

export default transferSlice.reducer;