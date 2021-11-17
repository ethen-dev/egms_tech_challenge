import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGameList } from '../store/modules/gamesStore';
import { navigationItems } from './navigationData';
import { APIService } from '../services/API';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        APIService.getGamesData().then(gamesData => {
            dispatch(setGameList(gamesData));
        });
    }, [dispatch])

    return (
        <div className="App">
            <Header />
            <Routes>
                {
                    navigationItems.map((item, i) => (
                        <Route 
                            key={i}
                            path={`/${item.path}`} 
                            element={item.element} 
                        />
                    ))
                }
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
