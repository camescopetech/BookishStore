import React from 'react';
import Accueil from './accueil';
import "../css/header.css";

function DivUser({ user, changeMainToConnexion, logoutUser }) {
    console.log("reload " + user);
    if (!user) {
        return <p onClick={changeMainToConnexion} className='headerSiteName'>Connexion</p>
    } else {
        return (
            <div>
                <p className='headerSiteName'>{user.user_name}</p>
                <p onClick={logoutUser} className='headerSiteName'>Déconnexion</p>
            </div>
        );
    }
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    changeMain = (balise) => {
        this.props.changeMain(balise);
    };

    changeMainToConnexion = () => {
        this.props.changeMainToConnexion("changeMainToConnexion");
    };

    changeMainToCart = () => {
        this.props.changeMainToCart("changeMainToCart");
    };

    changeSearch = (search) => {
        this.props.changeSearch(search);
    };

    logoutUser = () => {
        this.props.logoutUser("logoutUser");
    };

    handleFilterTextChange(e) {
        this.setState({ filterText: e.target.value });
        this.changeSearch(e.target.value);
    }

    render() {
        return (
            <div className="header">
                <div className="headerSite">
                    <img src="src/img/logo.jpeg" alt="logo" className="headerLogo" onClick={() => this.changeMain(<Accueil />)}/>
                    <a href="#" className='headerSiteName' onClick={() => this.changeMain(<Accueil />)}><h1>BookishStore</h1></a>
                </div>
                <div className="searchBox">
                    <input type="text" value={this.state.filterText} placeholder="Recherche" onChange={this.handleFilterTextChange} className="searchInput" />
                </div>
                <div className="basketUserContainer">
                    <div className="basket">
                        <img onClick={this.changeMainToCart} src="src/img/cart.png" alt="panier" className='basketImg'></img>
                    </div>
                    <div className="user">
                        <DivUser user={this.props.user} changeMainToConnexion={this.changeMainToConnexion} logoutUser={this.logoutUser} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
