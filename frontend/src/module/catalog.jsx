import React, { useEffect, useState } from "react";
import { URL_API } from '../constantes';
import Product from "./product";

function ProductCard({ product, onViewMore }) {
    const handleViewMore = () => {
        onViewMore(product);
    };

    return (
        <div className="card h-100 d-flex flex-row align-items-center justify-content-center text-center">
            <a href="">
                <img className="imgProduct" src={"/src/img/book.jpg"} alt={product.product_img} />
            </a>
            <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.product_author}</p>
                <p className="card-text">{product.product_desc}</p>
                <p className="card-text">{product.product_price} €</p>
                <div>
                    <button onClick={handleViewMore} className="btn btn-dark">Voir plus</button>
                </div>
            </div>
        </div>
    );
}

function DisplayProduct({ products, onViewMore }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {products.map((product, index) => (
                <div key={index} className="col mb-4">
                    <ProductCard product={product} onViewMore={onViewMore} />
                </div>
            ))}
        </div>
    );
}

function ProductTable({ category, search, author, sort, onViewMore }) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        let url = URL_API + 'getProductsList?category=' + category + '&search=' + search + '&author=' + author + '&sort=' + sort;
        console.log(url);
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
        }
    }, [category, search]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            {data.length === 0 || data.error ? (
                <div>Pas de résultat</div>
            ) : (
                <div>
                    <DisplayProduct
                        products={data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
                        onViewMore={onViewMore}
                    />
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
    );
}

class Category extends React.Component {
    changeMain = (product) => {
        this.props.changeMain(<Product product={product}/>);
    };

    render() {
        return (
            <div>
                <ProductTable
                    key={this.props.category + this.props.search + this.props.author + this.props.sort}
                    category={this.props.category}
                    search={this.props.search}
                    author={this.props.author}
                    sort={this.props.sort}
                    onViewMore={this.changeMain}
                />
            </div>
        );
    }
}

export default Category;
