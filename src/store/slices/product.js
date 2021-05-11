import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
  searchValue: '',
  statusSearch: 'Введите запрос',
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    setStatusSearch(state, { payload }) {
      state.statusSearch = payload;
    }
  }
})

export const {
  setSearchValue,
  setStatusSearch,
} = products.actions;

export const productsReducer = products.reducer;