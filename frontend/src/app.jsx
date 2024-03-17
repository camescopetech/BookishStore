import React, { useState } from "react";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accueil from "./module/accueil";
import Header from "./module/header";
import Footer from "./module/footer";
import LeftMenu from "./module/leftMenu";
import Category from "./module/catalog";
import Connexion from "./module/connexion";

function App() {
    const [mainContent, setMainContent] = useState(<Accueil />);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    const [vTrie, setVTrie] = useState('');
    const [user, setUser] = useState('');

    const changeMainContent = (content) => {
        setMainContent(content);
    };

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
        changeMainContent(<Category category={newCategory} search={search} author={author} changeMain={changeMainContent}/>)
    };

    const changeSearch = (newSearch) => {
        setSearch(newSearch);
        changeMainContent(<Category category={category} search={newSearch} author={author} changeMain={changeMainContent}/>)
    };

    const changeAuthor = (newAuthor) => {
        setAuthor(newAuthor);
        changeMainContent(<Category category={category} search={search} author={newAuthor} changeMain={changeMainContent}/>)
    };

    const changeMainToConnexion = (newUser) => {
        changeMainContent(<Connexion changeUser={changeUser}/>);
    };

    const changeUser = (newUser) => {
        changeMainContent(<Accueil/>)
        setUser(newUser);
    };

    /*<div>
        <p>title = {title}, author={author}, category = {category}, search = {search}, vTrie = {vTrie}</p>
    </div>*/
    return (
        <div>
       
            <Header changeMain={changeMainContent} changeSearch={changeSearch} changeMainToConnexion={changeMainToConnexion} user={user}/>
            <LeftMenu changeCategory={changeCategory} changeAuthor={changeAuthor}/>
            <div className="mainContent">
                {mainContent}
            </div>
            <Footer changeMain={changeMainContent}/>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Créer la racine une seule fois
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);