import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../../shared/api/axiosApi';
import { AxiosError } from 'axios';


export const getSettingData = createAsyncThunk('setting/getSettingData', 
    async(_, { rejectWithValue }) => {
        try {
            const response = await axiosApi.get('/api/v1/base/settings/');
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.response?.data || 'error')
        }
    }
)

