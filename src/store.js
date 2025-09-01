// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import offerReducer from '../src/feature/offer/offerSlice';

export const store = configureStore({
  reducer: {
    offer: offerReducer,
  },
});
