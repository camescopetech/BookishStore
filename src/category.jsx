import React from "react";

const PRODUCTS = [
    {idCategory: "0", category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {idCategory: "0", category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {idCategory: "0", category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {idCategory: "1", category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {idCategory: "1", category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {idCategory: "1", category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductRow({product}){

    return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}

function ProductTable({idCategory}){

    const rows = []

    PRODUCTS.forEach(product =>{
        if (product.idCategory == idCategory) {
            rows.push(<ProductRow key={product.name} product={product} />);
        }
    })

    
    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

class Category extends React.Component{

    render(){
        return <div className="productTable">
            <ProductTable idCategory={this.props.idCategory}/>
        </div>
    }
}

export default Category;