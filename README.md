# 🏏 Cricket Shop

**A full-stack MERN e-commerce application for cricket products**

Cricket Shop is a portfolio project built with React, Node.js, Express.js, and MongoDB. It includes separate customer and admin applications with authentication, product management, cart management, orders, image uploads, and payment integrations.

> **Project status:** Portfolio / learning project. Security-sensitive areas such as server-side order validation and payment verification can be further hardened before production use.

## 📌 Overview

The project is divided into three applications:

- **Customer Frontend** — React application for browsing products, managing the cart, and placing orders.
- **Admin Frontend** — React application for managing products and customer orders.
- **Backend API** — Node.js + Express.js REST API connected to MongoDB.

### High-Level Architecture

```text
Customer App (React) ──────┐
                           │
                           ▼
                      Express API
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           MongoDB      Cloudinary   Payments
           /Mongoose      Images     Stripe/Razorpay
              ▲
              │
Admin App ─────┘
   (React)
```

## ✨ Features

### 👤 Customer

- User registration and login
- JWT-based authentication
- Browse cricket products
- View product details
- Add products to cart
- Update cart quantities and sizes
- Place orders
- View user orders
- Payment workflow
- Toast notifications

### 🛠️ Admin

- Admin authentication
- Add products
- Upload multiple product images
- Remove products
- View products
- View customer orders
- Update order status

### 🛒 E-Commerce

- Product categories and subcategories
- Product sizes
- Bestseller products
- Shopping cart
- Order management
- Product image uploads
- Stripe integration
- Razorpay integration

## 🧰 Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, JavaScript, React Router, Axios, Tailwind CSS, React Toastify, Vite |
| Backend | Node.js, Express.js, REST API, JWT, bcryptjs, Multer, dotenv, CORS, Validator |
| Database | MongoDB, Mongoose |
| Services | Cloudinary, Stripe, Razorpay |
| Deployment | Vercel |

## 📁 Project Structure

```text
cricket_shop/
│
├── client/                 # Customer React application
│   └── src/
│       ├── Components/
│       ├── Context/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── admin/                  # Admin React application
│   └── src/
│       ├── Components/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/                 # Express backend
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

## 🔐 Authentication

Customer authentication uses **JWT** and **bcryptjs**.

### Authentication Flow

```text
Register / Login
       ↓
Validate credentials
       ↓
Hash / verify password
       ↓
Generate JWT
       ↓
Client sends token with protected requests
       ↓
Authentication middleware verifies token
       ↓
Protected controller executes
```

The backend contains separate middleware for customer authentication and admin authorization.

## 🔌 REST API

The backend is organized into four main route groups:

| Route | Purpose |
|---|---|
| `/api/user` | Registration, login, and authentication |
| `/api/product` | Product management and product retrieval |
| `/api/cart` | Authenticated cart operations |
| `/api/order` | Orders and payment workflows |

The server follows a route → middleware → controller → model structure.

## 🛍️ Product Management

Products are stored in MongoDB through Mongoose.

A product includes fields such as:

- Name
- Description
- Price
- Images
- Category
- Subcategory
- Sizes
- Bestseller status
- Date

The admin frontend sends product data and images to the backend. Images are processed through Multer and uploaded to Cloudinary.

## 🛒 Cart Management

Authenticated customers can:

1. Select a product.
2. Select a size where applicable.
3. Add the product to the cart.
4. Update quantities.
5. Continue to checkout.

Cart data is associated with the authenticated user and persisted through the backend.

## 📦 Order Management

### Customer

- Create an order
- Select a payment method
- View their orders
- Complete the payment workflow

### Admin

- View customer orders
- Update order status

Order records contain information such as the user, items, amount, address, payment method, payment status, order status, and date.

## 💳 Payment Integration

The project includes integrations with:

- **Stripe**
- **Razorpay**

These integrations demonstrate how third-party payment services can be connected to an Express-based e-commerce application.

### Security Improvements Identified

Payment and order processing are security-sensitive. The current implementation can be improved by:

- Recalculating order totals on the server from database prices.
- Avoiding trust in client-supplied prices and totals.
- Verifying payment results directly with the payment provider.
- Using provider webhooks where appropriate.
- Checking order ownership during payment verification.
- Preventing duplicate or replayed payment operations.

These are intentional improvement areas that can also be discussed during technical interviews.

## 🖼️ Image Uploads

Product images follow this flow:

```text
Admin Frontend
      ↓
Express API
      ↓
Multer
      ↓
Cloudinary
      ↓
Image URL stored with product
```

Multiple product images can be uploaded when creating a product.

## 🌐 Deployment

The backend is deployed on Vercel:

**Backend:** https://cricket-shop-server-self.vercel.app

> Deployment availability may change over time.

## ⚙️ Environment Variables

The application requires environment variables for database, authentication, cloud storage, payment, and admin configuration.

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

**Never commit real credentials, API keys, database URLs, or secrets to GitHub.**

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Lokesh3177/cricket_shop.git
cd cricket_shop
```

### 2. Start the backend

```bash
cd server
npm install
npm run server
```

### 3. Start the customer frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

### 4. Start the admin frontend

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

Make sure the required environment variables are configured before starting the applications.

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

## 🧠 Engineering Concepts Demonstrated

This project demonstrates practical experience with:

- MERN stack application structure
- React component-based development
- REST API development
- Express middleware
- MongoDB and Mongoose
- JWT authentication
- Password hashing with bcrypt
- Protected routes
- Customer/admin separation
- CRUD operations
- Cart and order workflows
- File uploads
- Cloudinary integration
- Payment-provider integration
- Deployment

## ⚠️ Current Technical Improvement Areas

The project is intentionally documented honestly as a portfolio/learning implementation.

### Security

- Restrict CORS to trusted frontend origins.
- Add JWT expiration and stronger token handling.
- Improve admin authorization with explicit roles/claims.
- Add file type and file-size validation.
- Avoid trusting client-provided order totals.
- Strengthen payment verification.

### Backend

- Add centralized error handling.
- Use consistent HTTP status codes.
- Improve request validation.
- Strengthen MongoDB schemas.
- Add pagination and filtering for product listings.

### Testing & DevOps

- Add unit and integration tests.
- Add API test coverage.
- Add GitHub Actions CI checks.
- Improve production logging and monitoring.

## 🔮 Future Improvements

- Server-side order price calculation
- Secure payment verification and webhooks
- Role-based authorization
- Stronger validation and error handling
- Product pagination and filtering
- Inventory and stock management
- Automated testing
- CI/CD pipeline
- Better logging and monitoring

## 🎯 Interview Preparation

This project provides useful discussion points for a MERN/full-stack interview:

- Why did you choose the MERN stack?
- How is the application divided into client, admin, and server?
- How does JWT authentication work?
- How are protected routes implemented?
- How does admin authorization work?
- How is cart data stored?
- How are MongoDB models designed?
- How does Multer + Cloudinary image upload work?
- How does the order workflow work?
- How were Stripe and Razorpay integrated?
- Why should order totals be calculated on the server?
- How would you secure payment verification?
- How would you prevent users from accessing another user's order?
- How would you improve CORS?
- How would you add automated testing?
- How would you implement pagination and inventory management?

## 📚 Key Learning Outcomes

Through this project, I gained practical experience in:

1. Building a multi-part MERN application.
2. Connecting React applications to REST APIs.
3. Designing MongoDB models with Mongoose.
4. Implementing authentication and protected routes.
5. Managing cart and order workflows.
6. Integrating cloud storage and payment services.
7. Separating customer and administrative functionality.
8. Deploying a backend application.
9. Identifying security and business-logic improvements.

## 👨‍💻 Author

**Lokesh M**

MERN Stack Developer

- GitHub: https://github.com/Lokesh3177
- LinkedIn: https://www.linkedin.com/in/lokeshm31

---

⭐ **Portfolio Project — built to demonstrate practical full-stack MERN development.**
