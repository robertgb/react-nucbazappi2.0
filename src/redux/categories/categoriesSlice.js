import { createSlice } from '@reduxjs/toolkit';
import { Categories } from '../../data/Categories';

const initialState = {
  categories: Categories,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: state => state,
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
