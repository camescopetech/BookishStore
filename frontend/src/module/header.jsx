import React from 'react';
import Accueil from './accueil';
import Cart from './cart';

function DivUser({ user, changeMainToConnexion, logoutUser }) {
    console.log("reload " + user);
   if (!user) {
        return <button onClick={changeMainToConnexion} className='headerSiteName'>Connexion</button>
   } else {
        return  <div>
            <p className='headerSiteName'>{user.user_name}</p>
            <button onClick={logoutUser} className='headerSiteName'>Deconnexion</button>
        </div>
   }
}

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    changeMain = (balise) => {
        this.props.changeMain(balise);
    };

    changeMainToConnexion = () => {
        this.props.changeMainToConnexion("changeMainToConnexion");
    }
    
    changeMainToCart = () => {
        this.props.changeMainToCart("changeMainToCart");
    }

    changeSearch = (search) => {
        this.props.changeSearch(search);
    }

    logoutUser = () => {
        this.props.logoutUser("logoutUser");
    }

    handleFilterTextChange(e) {
        this.setState({ filterText: e.target.value });
        this.changeSearch(e.target.value)
    }

    render() {
        return (
            <div className="header">
                <div className="headerSite">
                    <img src="src/img/logo.jpeg" alt="logo" className="headerLogo" />
                    <a href="#" className='headerSiteName' onClick={() => this.changeMain(<Accueil />)}><h1>BookishStore</h1></a>
                </div>
                <input type="text" value={this.state.filterText} placeholder="Search" onChange={this.handleFilterTextChange}/>
                <p onClick={this.changeMainToCart}>panier</p>
                <DivUser className="headerUser" user={this.props.user} changeMainToConnexion={this.changeMainToConnexion} logoutUser={this.logoutUser}/>
            </div>
        );
    }
}

export default Header;
