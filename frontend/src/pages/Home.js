import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Marketplace</h1>
            <Link to="/wallet">
                <button style={{ marginBottom: "10px" }}>Go to Wallet</button>
            </Link>
            <ProductList />
        </div>
    );
};

export default Home;
