import React from "react";
import Category from "./category";

class LeftMenu extends React.Component{

    changeCategory = (category) => {
        this.props.changeCategory(category);
    }
    
    render(){
        return <div className="leftMenu">
           <strong>Genres</strong>
           <ul>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("fantastic")}>Fantastique</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("romance")}>Romance</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("adventure")}>Aventure</a></li>
             <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("historical")}>Historique</a></li>
           </ul>
        </div>
    }
}

export default LeftMenu;