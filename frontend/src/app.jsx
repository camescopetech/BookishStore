import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import Accueil from "./accueil";
import Header from "./header";
import Footer from "./footer";

function App() {

    const [mainContent, setMainContent] = useState(<Accueil />);

    const changeMainContent = (content) => {
        setMainContent(content);
    };

    return <div>
            <Header changeMain={changeMainContent}/>
            <div className="mainContent">
                {mainContent}
                
            </div>  
            <Footer/>

    </div>
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
