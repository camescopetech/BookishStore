import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './header.jsx'
import Footer from "./footer.jsx";

function App() {
    
    const [mainContent, setMainContent] = useState(null);

    const changeMainContent = (content) => {
        setMainContent(content);
    };

    return (
        <div>
            <Header changeMain/>
            <div className='mainContent'>
                    {this.state.mainContent}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>   
);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
