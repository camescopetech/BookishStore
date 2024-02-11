import React, {setState} from 'react';
import Contact from "./contact";
import Accueil from "./accueil";
import Category from "./category";
import "./css/index.css";
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

    handleFilterTextChange(e){
        this.setState({ filterText: e.target.value });
        this.changeMain(<Category search={e.target.value}/>)
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