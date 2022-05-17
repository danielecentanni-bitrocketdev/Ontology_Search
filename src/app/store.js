import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../feature/ontologyDataSlice';

export const store = configureStore({
  reducer: {
    ontologyData: dataReducer,
  },
});
