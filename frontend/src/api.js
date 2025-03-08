import axios from "axios";

const API_URL = "https://bidai-backend.onrender.com/api";

export const getProducts = async () => {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
};

export const getProductById = async (id) => {
    const res = await axios.get(`${API_URL}/products/${id}`);
    return res.data;
};

export const getUserWallet = async (userId) => {
    const res = await axios.get(`${API_URL}/wallet/${userId}`);
    return res.data;
};

export const redeemPoints = async (userId, productId, points) => {
    const res = await axios.post(`${API_URL}/wallet/redeem`, { userId, productId, points });
    return res.data;
};
