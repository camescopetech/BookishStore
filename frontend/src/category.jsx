import React, {useEffect, useState} from "react";

function ProductCard({ product }) {
    return (
        <div className="card h-100 d-flex flex-row align-items-center justify-content-center text-center" >
            <a href="">
                <img className="imgProduct" src={product.product_img} alt={product.product_name} />
            </a>
            <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.product_desc}</p>
                <p className="card-text">{product.product_price} €</p>
                <div>
                    <a href="" className="btn btn-dark">Voir plus</a>
                </div>
            </div>
        </div>
    );
}

function DisplayProduct({ products }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {products.map((product, index) => (
                <div key={index} className="col mb-4">
                    <ProductCard product={product} />
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
    },[idCategory])

    return <div>
           <DisplayProduct products={data}/>
        </div> 

}

class Category extends React.Component{

    render(){
        return <div>
            <ProductTable idCategory={this.props.idCategory}/>
        </div>
    }
}

export default Category;