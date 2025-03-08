import React from "react";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <ProductDetail productId={id} />
        </div>
    );
};

export default ProductPage;
