import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './products/products-reducer';
import categoriesReducer from './categories/categories-reducer';
import recommendedReducer from './recommended/recommended-reducer';
import cartReducer from './cart/cart-reducer';

//La whitelist define la parte del estado que queremos persistir

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
