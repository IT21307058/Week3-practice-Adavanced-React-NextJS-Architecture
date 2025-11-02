import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import { dummyDataApi } from './services/dummyData';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        //         In my Redux store, I want two pieces of state:
        // one for my counter, and one for my API data
        counter: counterReducer,
        [dummyDataApi.reducerPath]: dummyDataApi.reducer,
    },

    //Middleware = special helpers that sit between your actions and reducers.
    //Now, that API needs something to:

// Actually send the network request (fetch)

// Store and cache the response

// Handle background refetches

// Manage loading / error states

// Keep data fresh when you focus the tab again
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyDataApi.middleware),
})

//Enables auto-refetching features
setupListeners(store.dispatch);