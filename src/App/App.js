import './App.css';
import { Routes, Route } from "react-router-dom";
import { navigationItems } from './navigationData';
import { Header } from './Header';

function App() {
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
        </div>
    );
}

export default App;
