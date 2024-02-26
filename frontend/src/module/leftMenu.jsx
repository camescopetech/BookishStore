import React, { useState, useEffect } from 'react';
import ElementFilterList from './elementFilterList';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAuthor: '',
            selectedCategory: ''
        };
    }

    changeAuthor = (selectedAuthor) => {
        this.setState({ selectedAuthor }); // Mettre à jour l'auteur sélectionné dans le state de LeftMenu
        this.props.changeAuthor(selectedAuthor);
    }

    changeCategory = (selectedCategory) => {
        this.setState({selectedCategory})
        this.props.changeCategory(selectedCategory);
    }
    
    /*
    changeCategory = (category) => {    
        this.props.changeCategory(category);
    }
    <strong>Genres</strong>
    <ul>
        <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("fantastic")}>Fantastique</a></li>
        <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("romance")}>Romance</a></li>
        <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("adventure")}>Aventure</a></li>
        <li><a href="#" className="leftMenuLink" onClick={() => this.changeCategory("historical")}>Historique</a></li>
    </ul>
    */
    render() {
        return (
            <div className="leftMenu">
                
                <ul>
                    <li><ElementFilterList onChange={this.changeAuthor} type="product_author" nameList="Auteur"/></li>
                    <li><ElementFilterList onChange={this.changeCategory} type="product_category" nameList="Genre"/></li>
                </ul>
                
            </div>
        );
    }
}

export default LeftMenu;
