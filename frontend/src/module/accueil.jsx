import React from "react";
import "../css/accueil.css";

class Accueil extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products: ["src/img/book.jpg","src/img/book2.jpg","src/img/book3.jpg"],
            i: 0
        };
    }

    nextProduct = () => {
        this.setState((prevState) => ({
            i: (prevState.i + 1) % prevState.products.length,
        }));
    }

    prevProduct = () => {
        this.setState((prevState) => ({
            i: (prevState.i + this.state.products.length - 1) % prevState.products.length,
        }));
    }

    render(){
        return <div>
            <img src={this.state.products[(this.state.i + this.state.products.length - 1) % this.state.products.length]} className="imgSwap"/> 
            <img  className="arrow" onClick={this.prevProduct} src="src/img/fleche-gauche.png"></img>
            <img src={this.state.products[this.state.i]} alt={this.state.products[this.state.i]} className="imgAccueil"/>
            <img  className="arrow" onClick={this.nextProduct} src="src/img/fleche-droite.png"></img>
            <img src={this.state.products[(this.state.i + 1) % this.state.products.length]} className="imgSwap"/> 
        </div>
    }
}

export default Accueil;