import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import counterReducer from './slices/counterSlice';
import bannerReducer from './slices/bannerSlice';
import transferReducer from './slices/transferSlice';
import ourServiceReducer from './slices/ourServiceSlice';
import tariffsReducer from './slices/tariffsSlice';
import swiperReducer from './slices/swiperSlice';
import settingReducer from './slices/settingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    banner: bannerReducer,
    service: transferReducer,
    ourService: ourServiceReducer,
    tariffs: tariffsReducer,
    swiper: swiperReducer,
    setting: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();