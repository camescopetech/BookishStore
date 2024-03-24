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
import SignUpForm from "./module/signUpForm";
import Product from "./module/product";
import Cart from "./module/cart";

function App() {
    const [mainContent, setMainContent] = useState(<Accueil />);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [user, setUser] = useState('');
    const [cart, setCart] = useState({});

    const changeMainContent = (content) => {
        setMainContent(content);
    };

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
        changeMainContent(<Category category={newCategory} search={search} author={author} sort={sort} changeMain={changeMainToProduct}/>)
    };

    const changeSearch = (newSearch) => {
        setSearch(newSearch);
        changeMainContent(<Category category={category} search={newSearch} author={author} sort={sort} changeMain={changeMainToProduct}/>)
    };

    const changeAuthor = (newAuthor) => {
        setAuthor(newAuthor);
        changeMainContent(<Category category={category} search={search} author={newAuthor} sort={sort} changeMain={changeMainToProduct}/>)
    };

    const changeSort = (newSort) => {
        setSort(newSort);
        changeMainContent(<Category category={category} search={search} author={author} sort={newSort} changeMain={changeMainToProduct}/>)
    };

    //USER
    const changeMainToConnexion = () => {
        changeMainContent(<Connexion changeUser={changeUser} changeMainToSignUp={changeMainToSignUp}/>);
    };
   
    const  changeMainToSignUp = () => {
        changeMainContent(<SignUpForm changeMainToConnexion={changeMainToConnexion}/>);
    };
    const changeUser = (newUser) => {
        changeMainContent(<Accueil/>);
        setUser(newUser);
    };
    const logoutUser = () => {
        setUser('');
    };
    //CHANGEMAIN
    const changeMainToProduct = (product) => {
        changeMainContent(<Product product={product} cart={cart}/>);
    }
    const changeMainToCart = () => {
        changeMainContent(<Cart cart={cart}/>)
    }

    return (
        <div>
       
            <Header changeMain={changeMainContent} changeSearch={changeSearch} changeMainToConnexion={changeMainToConnexion} user={user} logoutUser={logoutUser} changeMainToCart={changeMainToCart}/>
            <LeftMenu changeCategory={changeCategory} changeAuthor={changeAuthor} changeSort={changeSort}/>
            <div className="mainContent">
                {mainContent}
            </div>
            <Footer changeMain={changeMainContent}/>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);