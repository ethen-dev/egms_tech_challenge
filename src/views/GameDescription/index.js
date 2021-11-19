import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const GameDescription = () => {
    const navigate = useNavigate();
    const games = useSelector(state => state.gamesStore.gameList);
    const { name } = useParams();
    
    const byGameName = (game) => game.name === name;
    
    const gameData = games.find(byGameName) || {};

    return (
        <div className="game-description">
            <h1>{gameData.name}</h1>
            <p>{gameData.description}</p>

            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}