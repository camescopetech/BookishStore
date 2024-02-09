import React, {useEffect, useState} from "react";

function ProductForm({product,index}){

    return <tr key={index}>
        <td>{product.product_name}</td>
        <td>{product.product_price}</td>
        <td>{product.product_desc}</td>
        <td><img src={product.product_img} alt="photo produit" className="imgProduct"/></td>
    </tr>
}
/* {data.map((product, index) => (
                <ProductForm product={product} key={index}/>
            ))}*/

function DisplayProduct({ products }) {
    return (
        <div className="row">
            {products.map((product, index) => (
                <div key={index} className="col-md-4 py-3 py-md-0">
                    <div className="card mb-4" style={{ width: '18rem' }}>
                        <a href="" >
                            <img className="card-img-top" src={product.product_img} alt={product.product_name} />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <p className="card-text">{product.product_desc}</p>
                            <p className="card-text">{product.product_price} €</p>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="" className="btn btn-dark">Voir plus</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
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
        <tbody>
           <DisplayProduct products={data}/>
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