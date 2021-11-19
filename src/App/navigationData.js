import { Home } from '../views/Home';
import { Games } from '../views/Games';
import { Developers } from '../views/Developers';
import { Streaming } from '../views/Streaming';
import { GameDescription } from '../views/GameDescription';

export const navigationItems = [
    {
        path: '/',
        name: 'Home',
        element: <Home />,
        onMenu: true
    },
    
    {
        path: '/games',
        name: 'Games',
        element: <Games />,
        onMenu: true
    },
    
    {
        path: '/developers',
        name: 'Developers',
        element: <Developers />,
        onMenu: true
    },
    
    {
        path: '/streaming',
        name: 'Streaming',
        element: <Streaming />,
        onMenu: true
    },

    {
        path: '/game/:name',
        name: 'Game View',
        element: <GameDescription />,
        onMenu: false
    },
]