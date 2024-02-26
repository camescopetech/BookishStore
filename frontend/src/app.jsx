import React, { useState } from "react";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accueil from "./module/accueil";
import Header from "./module/header";
import Footer from "./module/footer";
import LeftMenu from "./module/leftMenu";
import Category from "./module/category";

function App() {
    const [mainContent, setMainContent] = useState(<Accueil />);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    const [vTrie, setVTrie] = useState('');

    const changeMainContent = (content) => {
        console.log(content);
        setMainContent(content);
    };

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
        changeMainContent(<Category category={newCategory} search={search} author={author}/>)
    };

    const changeSearch = (newSearch) => {
        setSearch(newSearch);
        changeMainContent(<Category category={category} search={newSearch} author={author}/>)
    };

    const changeAuthor = (newAuthor) => {
        setAuthor(newAuthor);
        changeMainContent(<Category category={category} search={search} author={newAuthor}/>)
    };


    /*<div>
        <p>title = {title}, author={author}, category = {category}, search = {search}, vTrie = {vTrie}</p>
    </div>*/
    return (
        <div>
            <Header changeMain={changeMainContent} changeSearch={changeSearch}/>
            <LeftMenu changeCategory={changeCategory} changeAuthor={changeAuthor}/>
            <div className="mainContent">
                {mainContent}
            </div>
            <Footer changeMain={changeMainContent}/>

        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
