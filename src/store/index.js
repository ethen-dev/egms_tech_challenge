import { configureStore } from '@reduxjs/toolkit';
import gamesStoreReducer from './modules/gamesStore';

export default configureStore({
    reducer: {
        gamesStore: gamesStoreReducer
    },
})