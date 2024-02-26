import React, {setState,useState,useEffect} from 'react';
import Accueil from "./accueil";
import "../css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

    }

    changeMain = (balise) => {
        this.props.changeMain(balise);
    };

    changeSearch = (search) => {
        this.props.changeSearch(search);
    }

    handleFilterTextChange(e){
        this.setState({ filterText: e.target.value });
        this.changeSearch(e.target.value)
    }

    render(){
        return  <div className="header">

            <img src="src/img/logo.jpeg" alt="logo" className="headerLogo" />
            <a href="#" className='headerSiteName' onClick={() => this.changeMain(<Accueil />)}><h1>BookishStore</h1></a>
            <input type="text" value={this.state.filterText} placeholder="Search" onChange={this.handleFilterTextChange}/>
        </div>
    }
    
}
  
export default Header;