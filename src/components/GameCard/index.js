import './GameCard.css';
import downloadImg from '../../assets/icon-download.png';
import appleLogo from '../../assets/icon-apple.png';
import androidLogo from '../../assets/icon-android.png';

export const GameCard = ({game}) => {
    const getPlatformImg = (platform) => (platform === 'ios' ? appleLogo : androidLogo);

    return (
        <div className="game-card">
            <img 
                className="game-card__image"
                src={`${process.env.PUBLIC_URL}/assets/icon-${game.img}.png`} 
                alt={game.name} 
            />
            <div className="game-card__body">
                <span className="game-card__body-title">
                    {game.name}
                </span>
                <span className="game-card__body-description">
                    {game.description}
                </span>
                <div className="game-card__body-footer">
                    <span className="game-card__body-category">
                        {game.tags.join(' ')}
                    </span>
                    {
                        game.platforms.map(platform => (
                            <img 
                                className={`game-card__platform-image ${platform}`}
                                key={platform}
                                src={getPlatformImg(platform)} 
                                alt={platform} 
                            />
                        ))
                    }
                </div>
            </div>
            <img 
                className="game-card__download-btn"
                src={downloadImg} 
                alt="downloadButton" 
            />
        </div>
    ) 
}