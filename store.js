import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice';
import restaurantReducer from './features/restaurantSlice';


export const store = configureStore({
    reducer: {
        // basket: basketSlice,
        basket: basketReducer,
        restaurant: restaurantReducer,
    },
})
