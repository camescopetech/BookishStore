import React from "react";

class siteNavBar extends React.Component{
    render(){
        return  <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => this.changeMain(<Accueil />)}>Accueil</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => this.changeMain(<Category idCategory="0" />)}>Cat0</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => this.changeMain(<Category idCategory="1" />)}>Cat1</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => this.changeMain(<Category idCategory="2" />)}>Cat2</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => this.changeMain(<Contact />)}>Contact</a>
            </li>
        </ul>

    }
}

export default siteNavBar;