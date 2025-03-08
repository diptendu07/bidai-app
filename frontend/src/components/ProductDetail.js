import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, redeemPoints } from "../api";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Fetch user ID dynamically (example: from local storage)
        const storedUserId = localStorage.getItem("userId");
        setUserId(storedUserId);

        getProductById(id).then(data => {
            setProduct(data);
            if (data.views >= 100 && !data.upgraded) {
                setMessage("Upgrade required to continue receiving views.");
            }
        });
    }, [id]);

    const handleUpgrade = () => {
        if (!userId) {
            setMessage("User not logged in. Please log in to redeem points.");
            return;
        }
        redeemPoints(userId, id, 10).then(response => {
            setMessage(response.message);
        });
    };

    return product ? (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Views: {product.views}</p>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <button onClick={handleUpgrade}>Redeem Points for Views</button>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default ProductDetail;
