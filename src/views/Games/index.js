import './Games.css';
import { GameCard } from '../../components/GameCard';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, setCurrentSearchText } from '../../store/modules/gamesStore';
import { IsolatedTabs } from '../../components/IsolatedTabs';

const tabs = ['All', 'Cards', 'Board', 'Sport'];

export const Games = () => {
    const dispatch = useDispatch();

    const gameList = useSelector(state => state.gamesStore.gameList);
    const activeCategory = useSelector(state => state.gamesStore.activeCategory);
    const currentSearchText = useSelector(state => state.gamesStore.currentSearchText);

    const byCategory = (game) => game.tags.includes(activeCategory) || activeCategory === 'all';
    const bySearchText = (game) => game.name.includes(currentSearchText);

    const onTabClick = (name) => dispatch(setActiveCategory(name));
    const onInputChange = ({ target }) => dispatch(setCurrentSearchText(target.value));

    const getFilteredGameList = gameList.filter(byCategory).filter(bySearchText);

    return (
        <section className="games">
            <h1>Our Games</h1>

            <input 
                type="search" 
                placeholder="Search a game"
                className="games__search"
                onChange={onInputChange}
            />

            <IsolatedTabs 
                tabs={tabs} 
                onTabClick={onTabClick}
            />

            <ul className="games__list">
                {
                    getFilteredGameList.map(game => (
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