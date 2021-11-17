import './Games.css';
import { GameCard } from '../../components/GameCard'
import { useSelector } from 'react-redux';

export const Games = () => {
    const gameList = useSelector(state => state.gamesStore.gameList);

    return (
        <section className="games">
            <h1>Our Games</h1>

            <ul className="games__list">
                {
                    gameList.map(game => (
                        <li 
                            key={game.img}
                            className={`games__list-item ${game.name}`}
                        >
                            <GameCard game={game} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}