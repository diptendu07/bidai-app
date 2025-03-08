import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import WalletPage from "./pages/WalletPage";

function App() {
    return (
        <Router>
            <div>
                <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                    <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                    <Link to="/wallet">Wallet</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/wallet" element={<WalletPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
