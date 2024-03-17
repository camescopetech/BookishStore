import React from 'react';

function DivUser({ user, changeMainToConnexion }) {
    console.log("reload " + user);
   if (!user) {
        return <p onClick={changeMainToConnexion} className='headerSiteName'>Connexion</p>
   } else {
        return  <p className='headerSiteName'>{user.user_name}</p>
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
        this.props.changeMainToConnexion("go");
    }

    changeSearch = (search) => {
        this.props.changeSearch(search);
    }

    handleFilterTextChange(e) {
        this.setState({ filterText: e.target.value });
        this.changeSearch(e.target.value)
    }

    render() {
        return (
            <div className="header">
                <img src="src/img/logo.jpeg" alt="logo" className="headerLogo" />
                <a href="#" className='headerSiteName' onClick={() => this.changeMain(<Accueil />)}><h1>BookishStore</h1></a>
                <input type="text" value={this.state.filterText} placeholder="Search" onChange={this.handleFilterTextChange}/>
                <DivUser user={this.props.user} changeMainToConnexion={this.changeMainToConnexion}/>
            </div>
        );
    }
}

export default Header;
