import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedData: {},
  selectedClass:false,
  selectedProperty:false,
  selectedIndividual:false,
  isDetailPage:false,
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    selectedData: (state, { payload }) => {
      state.selectedData = payload;
    },
    selectedClass: (state) => {
      state.selectedClass = !state.selectedClass;
    },
    selectedProperty: (state) => {
      state.selectedProperty = !state.selectedProperty;
    },
    selectedIndividual: (state) => {
      state.selectedIndividual = !state.selectedIndividual;
    },
    isDetailPage: (state, { payload }) => {
      state.isDetailPage = payload
    },
  },
});

export const {
  selectedData,
  selectedClass,
  selectedProperty,
  selectedIndividual,
  isDetailPage,
} = dataSlice.actions;

export default dataSlice.reducer;
