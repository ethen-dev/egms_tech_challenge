import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './views/Home';
import { Games } from './views/Games';
import { Developers } from './views/Developers';
import { Streaming } from './views/Streaming';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="games">Games</Link>
            <Link to="developes">Developers</Link>
            <Link to="streaming">Streaming</Link>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/developes" element={<Developers />} />
            <Route path="/streaming" element={<Streaming />} />
        </Routes>
    </div>
  );
}

export default App;
