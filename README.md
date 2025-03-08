# Full Stack Developer Assignment 🚀

## 📖 Project Overview
This project is a **full-stack web application** built as part of a technical assignment for a Full Stack Developer role.  
It includes:
- A **Node.js + Express + MongoDB** backend to handle product listings, user wallets, and a refer & earn system.
- A **React.js frontend** for an interactive user experience.

The system enables users to:
✅ View products and track views  
✅ Upgrade product views using **wallet points**  
✅ Earn rewards via **Refer & Earn system**  

---

## 🎯 Features
### 🔹 **Backend (Node.js + Express + MongoDB)**
- **Product Management** → View products, track views, upgrade views.
- **Wallet System** → Users have points, redeemable for extra views.
- **Refer & Earn** → Users earn points by referring others.
- **MongoDB Database** → Efficient data storage with Mongoose.

### 🔹 **Frontend (React.js)**
- **Product Listings & Details**
- **Wallet & Point Redemption**
- **Refer & Earn Section**
- **Styled UI with Bootstrap & CSS**

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Axios, Bootstrap
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Database:** MongoDB (Atlas)
- **Deployment:** Render (Backend), Vercel (Frontend)

---

## 🔧 Installation & Setup
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/fullstack-assignment.git
cd fullstack-assignment
```

### 2️⃣ **Backend Setup**
```sh
cd backend
npm install
```
#### **Configure Environment Variables**
Create a `.env` file inside **backend/** and add:
```
MONGO_URI=mongodb+srv://yourUser:yourPassword@your-cluster.mongodb.net/yourdbname?retryWrites=true&w=majority
PORT=5000
```
#### **Run Backend**
```sh
npm start
```
Your server will be running at **http://localhost:5000** 🚀

---

### 3️⃣ **Frontend Setup**
```sh
cd frontend
npm install
npm start
```
Your app will be running at **http://localhost:3000** 🚀

---

## 🔗 API Endpoints
### 🔹 **Product API**
| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/products`         | Get all products        |
| GET    | `/api/products/:id`     | Get product & increase views |
| POST   | `/api/products`         | Create a product        |
| POST   | `/api/products/:id/upgrade` | Upgrade a product |

### 🔹 **Wallet API**
| Method | Endpoint                | Description             |
|--------|-------------------------|-------------------------|
| GET    | `/api/wallet/:userId`   | Get wallet balance      |
| POST   | `/api/wallet/redeem`    | Redeem points for views |

---

## 🚀 Live Demo
🔗 **Backend (Render)** → [https://bidai-backend.onrender.com/api/products](https://bidai-backend.onrender.com/api/products)  
🔗 **Frontend (Render)** → [https://bidai-frontend.onrender.com/](https://bidai-frontend.onrender.com/)  

---

## 🤝 Contact  
For any queries, feel free to reach out:  
📧 **Your Email**: [diptendulodh@gmail.com](mailto:diptendulodh@gmail.com)  
💼 **LinkedIn**: [www.linkedin.com/in/diptendu-lodh-70bab9295](www.linkedin.com/in/diptendu-lodh-70bab9295)

---
  
### 🎉 **Thank you for reviewing my assignment!**  
Hope to discuss this project with you soon. 🚀


frontend github: https://github.com/diptendu07/bidai-frontend
backend github: https://github.com/diptendu07/bidai-backend
