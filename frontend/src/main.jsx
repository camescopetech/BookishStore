import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from "./contact";
import Accueil from "./accueil";
import Category from "./category";
import Footer from './footer';
import LeftMenu from './leftMenu';
import siteNavBar from './siteNavBar';
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/*
class ContentLink extends React.Component{

    render(){
        return  <li>
            <a href="#" onClick={() => this.changeMain(this.props.content)}>{this.props.name}</a>
        </li>
   
    }
}*/

class Header extends React.Component{

    
    constructor(props) {
        super(props);
        this.state = {
          mainContent: <Accueil/>,
        };
    }
    
    changeMain(balise) {
    this.setState({ mainContent: balise });
    }
    
    render(){
        return <div>
            <div className="header">
                <div className="headerDiv">
                    <h1>BookishStore</h1>
                </div>
                <div className="headerDiv">
                    <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
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
                    </div>
                    </nav>
                </div>
            </div>
            <div className='mainContent'>
                {this.state.mainContent}

            </div>
            <div className="footer">
                <Footer/>
            </div> 
        </div>
    }
    
}
  
export default Header;
/*ReactDOM.render(
<Header/>, 
document.querySelector('#app')
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>
)