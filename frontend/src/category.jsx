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

function ProductTable({search,idCategory}){

    const[data,setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    useEffect(() => {

        let url;
        if (search) {
            url = `http://localhost:8081/productSearch/${search}`;
        } else if (idCategory) {
            url = `http://localhost:8081/product/${idCategory}`;
        }

        if(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>  setData(data))
            .catch(err => console.log(err));
        }
    },[search,idCategory])

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return <div>
        {data.length === 0 || data.error ? (
            <div>Pas de resultat</div>         
        ) : (
            
            <div>
                <DisplayProduct products={data.slice(currentPage*itemsPerPage,(currentPage + 1)*itemsPerPage)}/>
                <div className="arrow">
                        {currentPage > 0 && (
                            <button onClick={handlePrevPage} className="arrowButton">&lt;</button>
                        )}
                        <span>{currentPage + 1} / {totalPages}</span>
                        {currentPage < totalPages - 1 && (
                            <button onClick={handleNextPage} className="arrowButton">&gt;</button>
                        )}
                </div>
            </div> 
        )}     
    </div> 

}

class Category extends React.Component{

    render(){
        return <div>
            <ProductTable key={this.props.idCategory + this.props.search} idCategory={this.props.idCategory} search={this.props.search}/>
        </div>
    }
}

export default Category;