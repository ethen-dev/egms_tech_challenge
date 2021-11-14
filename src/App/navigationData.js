import { Home } from '../views/Home';
import { Games } from '../views/Games';
import { Developers } from '../views/Developers';
import { Streaming } from '../views/Streaming';

export const navigationItems = [
    {
        path: '/',
        name: 'Home',
        element: <Home />
    },
    
    {
        path: '/games',
        name: 'Games',
        element: <Games />
    },
    
    {
        path: '/developers',
        name: 'Developers',
        element: <Developers />
    },
    
    {
        path: '/streaming',
        name: 'Streaming',
        element: <Streaming />
    }
]