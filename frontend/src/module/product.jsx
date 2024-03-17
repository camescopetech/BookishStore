import React from "react";

class Product extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <div className="product">
                <div>
                    <img src={product.product_img} alt={product.product_name} />
                </div>
                <div>
                    <h2>{product.product_name}</h2>
                    <p><strong>Auteur:</strong> {product.product_author}</p>
                    <p><strong>Prix:</strong> {product.product_price} €</p>
                    <p><strong>Catégorie:</strong> {product.product_category}</p>
                    <p><strong>Stock:</strong> {product.product_stock}</p>
                    <p><strong>Description:</strong> {product.product_desc}</p>
                </div>
            </div>
        );
    }
}

export default Product;
