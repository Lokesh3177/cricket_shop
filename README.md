# 🏏 Cricket Shop

A full-stack **MERN e-commerce application** for browsing cricket products, managing products through an admin panel, handling user accounts, shopping carts, orders, image uploads, and online payment workflows.

---

## 📌 Overview

Cricket Shop is structured as three connected applications:

- **Customer Frontend** — React application for customers
- **Admin Frontend** — React application for product and order management
- **Backend API** — Node.js + Express.js REST API with MongoDB

The project demonstrates practical full-stack development using React, Node.js, Express.js, MongoDB, authentication, REST APIs, cloud image storage, and payment integrations.

---

## ✨ Features

### 👤 Customer Features

- User registration and login
- JWT-based authentication
- Browse cricket products
- View product details
- Select product sizes
- Add products to cart
- Update cart quantities
- Place orders
- View user orders
- Payment workflow
- Toast notifications

### 🛠️ Admin Features

- Admin login
- Add new products
- Upload multiple product images
- View product list
- Remove products
- View customer orders
- Update order status

### 🛒 E-Commerce Features

- Product categories
- Product subcategories
- Product sizes
- Bestseller products
- Shopping cart management
- Order management
- Product image uploads
- Stripe payment integration
- Razorpay payment integration

---

## 🧰 Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React, JavaScript, React Router, Axios, Tailwind CSS, React Toastify, Vite |
| Backend | Node.js, Express.js, REST API, JWT, bcryptjs, Multer, dotenv, CORS, Validator |
| Database | MongoDB, Mongoose |
| Cloud Storage | Cloudinary |
| Payments | Stripe, Razorpay |
| Deployment | Vercel |

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │    Customer App      │
                    │       React          │
                    │      /client         │
                    └──────────┬───────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │       /server        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌──────────────┐
       │  MongoDB   │   │ Cloudinary │   │   Payments   │
       │ /Mongoose  │   │   Images   │   │Stripe/Razorpay│
       └────────────┘   └────────────┘   └──────────────┘
                               ▲
                               │ HTTP / REST API
                    ┌──────────┴───────────┐
                    │      Admin App       │
                    │        React         │
                    │       /admin         │
                    └──────────────────────┘
```

---

## 📁 Project Structure

```text
cricket_shop/
│
├── client/                         # Customer frontend
│   └── src/
│       ├── Components/
│       ├── Context/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── admin/                          # Admin frontend
│   └── src/
│       ├── Components/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/                         # Backend API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔐 Authentication

The application uses **JWT** for token-based authentication and **bcryptjs** for password hashing.

### Authentication Flow

```text
User Registration / Login
          ↓
Credential Validation
          ↓
Password Hashing / Verification
          ↓
JWT Token Generation
          ↓
Authenticated Request
          ↓
Authentication Middleware
          ↓
Protected Controller
```

The backend contains separate middleware for authenticated users and admin-protected operations.

---

## 🔌 REST API

The backend is organized into four primary route groups:

| Route | Purpose |
| --- | --- |
| `/api/user` | User registration, login, and authentication |
| `/api/product` | Product creation, removal, listing, and retrieval |
| `/api/cart` | Authenticated cart operations |
| `/api/order` | Order creation, payment workflows, user orders, and admin order management |

The backend follows a **routes → middleware → controllers → models** structure.

---

## 🛍️ Product Management

Administrators can manage cricket products through the admin application.

Product information includes:

- Product name
- Description
- Price
- Images
- Category
- Subcategory
- Sizes
- Bestseller status
- Date

Product data is stored in MongoDB using Mongoose.

---

## 🛒 Cart Management

Authenticated users can manage their shopping cart.

### Cart Flow

```text
Select Product
      ↓
Select Size
      ↓
Add to Cart
      ↓
Update Quantity
      ↓
Review Cart
      ↓
Continue to Order
```

Cart data is associated with the authenticated user and persisted through the backend.

---

## 📦 Order Management

### Customer

Customers can:

- Place orders
- Select a payment method
- View their orders
- Complete the payment workflow

### Admin

Administrators can:

- View customer orders
- Update order status

Order records contain information such as:

- User
- Ordered items
- Amount
- Delivery address
- Payment method
- Payment status
- Order status
- Date

---

## 💳 Payment Integration

The backend integrates two payment providers:

- **Stripe**
- **Razorpay**

The payment integration demonstrates how external payment services can be connected to an Express-based e-commerce application.

---

## 🖼️ Image Upload

Product images are handled through **Multer** and stored using **Cloudinary**.

### Upload Flow

```text
Admin Frontend
      ↓
Express API
      ↓
Multer
      ↓
Cloudinary
      ↓
Image URL
      ↓
MongoDB Product Record
```

Multiple product images can be uploaded when creating a product.

---

## 🌐 Deployment

The backend is deployed on Vercel.

**Backend:**  
https://cricket-shop-server-self.vercel.app

> The deployment URL represents the backend deployment configured for this repository.

---

## ⚙️ Environment Variables

The application uses environment variables for sensitive configuration such as:

- MongoDB connection
- JWT secret
- Cloudinary credentials
- Stripe credentials
- Razorpay credentials
- Admin configuration

Example structure:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```


---

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Lokesh3177/cricket_shop.git
cd cricket_shop
```

### 2. Install and start the backend

```bash
cd server
npm install
npm run server
```

### 3. Install and start the customer frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

### 4. Install and start the admin frontend

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

Make sure the required environment variables are configured before starting the applications.

---

## 🧪 Available Scripts

### Client

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Admin

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Server

```bash
npm start
npm run server
```

---

## 💡 Key Engineering Areas

This project demonstrates practical experience with:

- MERN stack application development
- React component-based development
- REST API development with Express.js
- MongoDB database integration with Mongoose
- JWT authentication
- Password hashing with bcryptjs
- Protected backend routes
- Customer and admin application separation
- CRUD operations
- Shopping cart workflows
- Order workflows
- File uploads
- Cloudinary integration
- Stripe integration
- Razorpay integration
- Backend deployment

---

## 👨‍💻 Author

**Lokesh M**

MERN Stack Developer

- GitHub: https://github.com/Lokesh3177
- LinkedIn: https://www.linkedin.com/in/lokeshm31

---

⭐ **Portfolio Project — Full-stack MERN e-commerce application**
