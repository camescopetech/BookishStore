import React from 'react';
import Contact from "./contact";
import Accueil from "./accueil";
import Category from "./category";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{

    changeMain = (balise) => {
        this.props.changeMain(balise);
    };
    
    render(){
        return  <div className="header">

            <img src="src/img/logo.jpeg" alt="logo" className="headerLogo" />
            <a href="#" className='headerSiteName' onClick={() => this.changeMain(<Accueil />)}><h1>BookishStore</h1></a>
  
        </div>
    }
    
}
  
export default Header;