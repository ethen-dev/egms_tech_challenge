import logo from '../../assets/logo.png';
import { navigationItems } from '../navigationData';
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const getActiveClass = (path, routePath) => {
        return (path === routePath.pathname) ? 
        'App-header__menu-element--active' : 
        '';
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
                    navigationItems.map((item, i) => (
                        <li
                            key={i}
                            className={`App-header__menu-element ${getActiveClass(item.path, location)}`}
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

