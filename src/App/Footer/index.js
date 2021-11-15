import './Footer.css';
import { Link } from "react-router-dom";
import { footerData } from './footerData';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__social-section">
            {
                footerData.map((imgLink) => (
                    <a 
                        key={imgLink.link}
                        href={imgLink.link} 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img 
                            className="footer__social-logo"
                            src={imgLink.image} 
                            alt={imgLink.alt}
                        />
                    </a>
                ))
            }
        </div>
        <div className="footer__legal-section">
            <span>
                2020 &copy; egoGames | <Link to="/legal"> Legal </Link>
            </span>
        </div>
    </footer>
)