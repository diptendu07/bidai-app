import React, { useState, useEffect } from "react";
import { getProducts } from "../api";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2>Product Listings</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.views} views
                        <a href={`/product/${product._id}`}>View</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
