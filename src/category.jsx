import React from "react";

const PRODUCTS = [
    {idCategory: "0", price: "$49.99", stock: "10", name: "Football", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "0", price: "$9.99", stock: "10", name: "Baseball", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "0", price: "$29.99", stock: "10", name: "Basketball", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "1", price: "$99.99", stock: "10", name: "iPod Touch", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "1", price: "$399.99", stock: "10", name: "iPhone 5", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "1", price: "$199.99", stock: "10", name: "Nexus 7", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "2", price: "$99.99", stock: "10", name: "Wanka", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "2", price: "$399.99", stock: "10", name: "Lindt", desc:"desc",  img: "src/img/cat.jpeg"},
    {idCategory: "2", price: "$199.99", stock: "10", name: "Milka", desc:"desc",  img: "src/img/cat.jpeg"},
];

function ProductRow({product}){

    return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.desc}</td>
        <td><img src={product.img} alt="photo produit" className="imgProduct"/></td>
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
                <th>Description</th>
                <th>Image</th>
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