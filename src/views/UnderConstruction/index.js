import { useNavigate } from 'react-router-dom';

export const UnderConstruction = () => {
    const navigate = useNavigate();

    return (
        <div className="under-construction">
            <h1>Page Under Construction</h1>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}