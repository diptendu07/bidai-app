import React from "react";

const ReferEarn = ({ userId }) => {
    const referralLink = `http://localhost:3000/signup?ref=${userId}`;

    return (
        <div>
            <h2>Refer & Earn</h2>
            <p>Share this link to earn points:</p>
            <input type="text" value={referralLink} readOnly />
            <button onClick={() => navigator.clipboard.writeText(referralLink)}>Copy</button>
        </div>
    );
};

export default ReferEarn;
