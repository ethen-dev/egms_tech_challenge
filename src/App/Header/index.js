import './Header.css';
import logo from '../../assets/logo.png';
import { navigationItems } from '../navigationData';
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const menuItems = navigationItems.filter(item => item.onMenu);
    const getActiveClass = (path, routePath) => {
        return (path === routePath.pathname) ? 
        'App-header__menu-element App-header__menu-element--active' : 
        'App-header__menu-element';
    }

    return (
        <header className="App-header">
            <img 
                className="App-header__logo"
                src={logo} 
                alt="egms_logo" 
            />
            <ul className="App-header__menu">
                {
                    menuItems.map((item, i) => (
                        <li
                            key={i}
                            className={getActiveClass(item.path, location)}
                        >
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}


