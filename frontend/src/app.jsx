import React, {useEffect, useState} from "react";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accueil from "./accueil";
import Header from "./header";
import Footer from "./footer";
import LeftMenu from "./leftMenu";

function App() {

    const [mainContent, setMainContent] = useState(<Accueil />);

    const changeMainContent = (content) => {
        console.log(content);
        setMainContent(content);
    };

    return <div>
            <Header changeMain={changeMainContent}/>
            <LeftMenu changeMain={changeMainContent}/>
            <div className="mainContent">
                {mainContent}  
            </div>  
            <Footer changeMain={changeMainContent}/>
    </div>
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
