import React, { useState } from "react";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accueil from "./accueil";
import Header from "./header";
import Footer from "./footer";
import LeftMenu from "./leftMenu";
import Category from "./category";

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
        changeMainContent(<Category category={newCategory} search={search}/>)
    };

    const changeSearch = (newSearch) => {
        setSearch(newSearch);
        changeMainContent(<Category category={category} search={newSearch}/>)
    };

    /*<div>
        <p>title = {title}, author={author}, category = {category}, search = {search}, vTrie = {vTrie}</p>
    </div>*/
    return (
        <div>
            <div>
                <p>title = {title}, author={author}, category = {category}, search = {search}, vTrie = {vTrie}</p>
            </div>
            <Header changeMain={changeMainContent} changeSearch={changeSearch}/>
            <LeftMenu changeCategory={changeCategory} />
            <div className="mainContent">
                {mainContent}
            </div>
            <Footer/>

        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
