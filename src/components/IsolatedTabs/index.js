import './IsolatedTabs.css';

export const IsolatedTabs = ({ tabs, onTabClick }) => (
    <ul className="isolated-tabs">
        {
            tabs.map((tab) => (
                <li 
                    key={tab}
                    className="isolated-tabs__tab"
                    onClick={() => onTabClick(tab.toLowerCase())}
                >
                    {tab}
                </li>
            ))
        }
    </ul>
)