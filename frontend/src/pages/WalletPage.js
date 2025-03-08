import React, { useState, useEffect } from "react";
import Wallet from "../components/Wallet";
import ReferEarn from "../components/ReferEarn";

const WalletPage = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        
        if (!storedUserId) {
            console.error("User ID not found in localStorage.");
        }
    
        setUserId(storedUserId);
    }, []);
    

    return (
        <div>
            <h1>My Wallet</h1>
            {userId ? (
                <>
                    <Wallet userId={userId} />
                    <ReferEarn userId={userId} />
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default WalletPage;
