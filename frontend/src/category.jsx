import React, {useEffect, useState} from "react";

function ProductForm({product,index}){

    return <tr key={index}>
        <td>{product.product_name}</td>
        <td>{product.product_price}</td>
        <td>{product.product_desc}</td>
        <td><img src={product.product_img} alt="photo produit" className="imgProduct"/></td>
    </tr>
}

function ProductTable({idCategory}){

    const[data,setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/product/' + idCategory)
        .then(res => res.json())
        .then(data =>  setData(data))
        .catch(err => console.log(err));
    },[])

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
            {data.map((product, index) => (
                <ProductForm product={product} key={index}/>
            ))}
        </tbody>
    </table>
}

class Category extends React.Component{

    render(){
        return <div className="productTable">
            <ProductTable idCategory="fantastic"/>
        </div>
    }
}

export default Category;