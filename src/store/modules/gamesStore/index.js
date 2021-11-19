import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => ({
    gameList: [],
    activeCategory: 'all',
    currentSearchText: ''
})

export const gamesStoreSlice = createSlice({
    name: 'gamesStore',
    initialState: getInitialState(),
    reducers: {
        setGameList: (state, { payload }) => {
            state.gameList = Array.from(payload);            
        },

        setActiveCategory: (state, { payload }) => {
            state.activeCategory = payload;
        },

        setCurrentSearchText: (state, { payload }) => {
            state.currentSearchText = payload;
        },
    }
})

export const { setGameList, setActiveCategory, setCurrentSearchText } = gamesStoreSlice.actions;

export default gamesStoreSlice.reducer;