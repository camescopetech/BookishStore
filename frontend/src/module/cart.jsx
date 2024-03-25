import React, { useState } from "react";

function RowProduct({ index, product, productId, addToCart, removeFromCart }) {
    const [nElement, setNElement] = useState(product.nElement);

    const addToCartFront = () => {
        setNElement(prevNElement => prevNElement + 1);
        addToCart(productId);
    };

    const removeFromCartFront = () => {
        if (nElement > 0) {
            setNElement(prevNElement => prevNElement - 1);
            removeFromCart(productId);
        }
    };

    return (
        <tr key={index}>
            <td>
                <div>
                    <img
                        src={product.info.product_img}
                        alt={product.info.product_name}
                        style={{ width: "100px", height: "100px" }}
                    />
                    <p>{product.info.product_name}</p>
                </div>
            </td>
            <td>
                <button onClick={removeFromCartFront}>-</button>
                <span>{nElement}</span>
                <button onClick={addToCartFront}>+</button>
            </td>
        </tr>
    );
}

class Cart extends React.Component {
    addToCart = (productId) => {
        if (this.props.cart[productId].nElement < this.props.cart[productId].info.product_stock) {
            this.props.cart[productId].nElement++;
            console.log(this.props.cart);
        }
    };

    removeFromCart = (productId) => {
        if (this.props.cart[productId].nElement > 0) {
            this.props.cart[productId].nElement--;
            console.log(this.props.cart);
        }
    };

    render() {
        return (
            <div>
                <h1>Contenu du panier</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.cart).map((productId, index) => (
                            <RowProduct
                                key={index}
                                index={index}
                                product={this.props.cart[productId]}
                                productId={productId}
                                addToCart={this.addToCart}
                                removeFromCart={this.removeFromCart}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;
