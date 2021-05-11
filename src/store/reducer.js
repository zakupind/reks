import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './slices/product.js'

export const rootReducer = combineReducers({
  products: productsReducer,
})