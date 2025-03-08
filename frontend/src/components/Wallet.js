import React, { useState, useEffect } from "react";
import { getUserWallet, redeemPoints } from "../api";

const Wallet = ({ userId }) => {
    const [walletBalance, setWalletBalance] = useState(0);
    const [productId, setProductId] = useState("");
    const [points, setPoints] = useState(10);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getUserWallet(userId).then(data => setWalletBalance(data.walletBalance));
    }, [userId]);

    const handleRedeem = async () => {
        const response = await redeemPoints(userId, productId, points);
        setMessage(response.message);
        setWalletBalance(response.walletBalance);
    };

    return (
        <div>
            <h2>Wallet</h2>
            <p>Balance: {walletBalance} points</p>
            
            <input 
                type="text" 
                placeholder="Enter Product ID" 
                value={productId} 
                onChange={(e) => setProductId(e.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Points to Redeem" 
                value={points} 
                onChange={(e) => setPoints(parseInt(e.target.value) || 0)} 
            />

            <button onClick={handleRedeem}>Redeem Points</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Wallet;
