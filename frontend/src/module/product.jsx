import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    addToCart() {
       this.props.cart[this.props.product.id_product].nElement++;
        console.log(this.props.cart);
        
    }

    removeFromCart() {
        // Implémentez la logique de suppression du panier ici en utilisant this.props.removeFromCart
        // Par exemple :
        // this.props.removeFromCart(this.props.product);
    }

    render() {
        const product = this.props.product;

        console.log(this.props.cart);
        return (
            <div className="product">
                <div>
                    <img src={"/src/img/" + product.product_img} alt={product.product_name} />
                </div>
                <div>
                    <h2>{product.product_name}</h2>
                    <p><strong>Auteur:</strong> {product.product_author}</p>
                    <p><strong>Prix:</strong> {product.product_price} €</p>
                    <p><strong>Catégorie:</strong> {product.product_category}</p>
                    <p><strong>Stock:</strong> {product.product_stock}</p>
                    <p><strong>Description:</strong> {product.product_desc}</p>
                    
                    <button onClick={this.removeFromCart}>-</button>
                    <span>{ this.props.cart[product.id_product] ?  this.props.cart[product.id_product].nElement : 0}</span>
                    <button onClick={this.addToCart}>+</button>
                </div>
            </div>
        );
    }
}

export default Product;
