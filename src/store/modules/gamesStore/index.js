import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => ({
    gameList: []
})

export const gamesStoreSlice = createSlice({
    name: 'gamesStore',
    initialState: getInitialState(),
    reducers: {
        setGameList: (state, action) => {
            state.gameList = action.payload;
        }
    }
})

export const { setGameList } = gamesStoreSlice.actions;

export default gamesStoreSlice.reducer;