import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../../shared/api/axiosApi';
import { AxiosError } from 'axios';


export const getSwiperData = createAsyncThunk('swiper/getSwiperData', 
    async(_, { rejectWithValue }) => {
        try {
            const response = await axiosApi.get('/api/v1/base/end/');            
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.response?.data || 'error')
        }
    }
)