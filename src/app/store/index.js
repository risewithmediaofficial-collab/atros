import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@/app/store/slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
