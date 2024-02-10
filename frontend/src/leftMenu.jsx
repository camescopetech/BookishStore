import React from "react";
import Category from "./category";

class LeftMenu extends React.Component{

    changeMain = (balise) => {
        this.props.changeMain(balise);
    };
    
    render(){
        return <div className="leftMenu">
           <strong>Genres</strong>
           <ul>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeMain(<Category idCategory="fantastic" />)}>Fantastique</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeMain(<Category idCategory="romance" />)}>Romance</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeMain(<Category idCategory="adventure" />)}>Aventure</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeMain(<Category idCategory="historical" />)}>Historique</a></li>
           </ul>
        </div>
    }
}

export default LeftMenu;