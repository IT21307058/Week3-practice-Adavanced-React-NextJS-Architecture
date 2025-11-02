import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import { dummyDataApi } from './services/dummyData';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dummyDataApi.reducerPath]: dummyDataApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyDataApi.middleware),
})