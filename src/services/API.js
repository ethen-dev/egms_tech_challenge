import gamesData from '../assets/data/gamesData';

const getGamesData = () => {
    return new Promise(res => {
        res(gamesData);
    })
}

export const APIService = {
    getGamesData
}