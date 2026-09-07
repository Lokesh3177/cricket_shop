🏏 Cricket Shop

A full-stack MERN e-commerce application for browsing cricket products,
managing products through an admin interface, handling user accounts,
shopping carts, orders, image uploads, and payment workflows.

Portfolio note: This project is presented as a learning and
portfolio project. Payment, authorization, validation, and other
security-sensitive areas can be further hardened before production
use.

📌 Overview

Cricket Shop is organized into three main applications:

Customer Frontend --- React application for customers

Admin Frontend --- React application for product and order
administration

Backend API --- Node.js + Express.js REST API connected to
MongoDB

The project demonstrates practical full-stack development with
authentication, CRUD operations, database persistence, file/image
uploads, cart management, order management, and payment-provider
integrations.

✨ Features

👤 Customer Features

User registration and login

JWT-based authentication

Browse cricket products

View product details

Add products to cart

Update cart quantities and sizes

Place orders

View user orders

Online payment workflow

Toast notifications and frontend feedback

🛠️ Admin Features

Admin login

Add products

Upload multiple product images

Remove products

View products

View customer orders

Update order status

🛒 E-Commerce Features

Product catalog

Product categories and subcategories

Product sizes

Bestseller products

Shopping cart

Order creation and tracking

Payment integration

Product image storage

🧰 Tech Stack

Frontend

React

JavaScript

React Router

Axios

Tailwind CSS

React Toastify

Vite

Backend

Node.js

Express.js

REST API

JWT

bcryptjs

Multer

dotenv

CORS

Validator

Database

MongoDB

Mongoose

Cloud & Integrations

Cloudinary --- product image storage

Stripe --- payment integration

Razorpay --- payment integration

Vercel --- backend deployment

🏗️ Project Architecture

Cricket Shop
│
├── client/                  # Customer-facing React application
│   └── src/
│       ├── Components/
│       ├── Context/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── admin/                   # Admin React application
│   └── src/
│       ├── Components/
│       ├── Pages/
│       ├── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/                  # Node.js / Express backend
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

🔄 Application Flow

                         ┌─────────────────────┐
                         │   Customer Browser  │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  React Client App   │
                         │      /client        │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                    ┌──────────────────────────────┐
                    │      Express.js API          │
                    │          /server              │
                    └──────────────┬───────────────┘
                                   │
             ┌─────────────────────┼─────────────────────┐
             │                     │                     │
             ▼                     ▼                     ▼
      ┌─────────────┐      ┌──────────────┐     ┌──────────────┐
      │   MongoDB   │      │  Cloudinary  │     │   Payments   │
      │  / Mongoose │      │    Images    │     │ Stripe/Razorpay│
      └─────────────┘      └──────────────┘     └──────────────┘


                         ┌─────────────────────┐
                         │    Admin Browser    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ React Admin App     │
                         │      /admin         │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express.js API    │
                         └─────────────────────┘

🔐 Authentication

The backend implements authentication using:

JWT for token-based authentication

bcryptjs for password hashing

Authentication middleware for protected routes

Separate admin authentication middleware

Customer Authentication Flow

Register / Login
      ↓
Validate credentials
      ↓
Password verification / hashing
      ↓
JWT generated
      ↓
Client stores token
      ↓
Protected requests include token
      ↓
Authentication middleware verifies token

📦 Backend Structure

The Express backend is separated into common application layers.

Routes

/api/user
/api/product
/api/cart
/api/order

Controllers

userController.js
productController.js
cartController.js
orderController.js

Controllers contain the main application/business operations for users,
products, carts, and orders.

Middleware

auth.js
adminAuth.js
multer.js

Middleware is used for authentication, admin authorization, and file
uploads.

Models

ProductModel.js
userModel.js
orderModel.js

Mongoose models define the application's MongoDB data structures.

🛍️ Product Management

The admin application communicates with the backend to manage products.

A product contains information such as:

Name

Description

Price

Images

Category

Subcategory

Sizes

Bestseller status

Creation date

Product images are uploaded through the backend and stored using
Cloudinary.

🛒 Cart Management

Authenticated users can manage their shopping cart.

The cart workflow includes:

User authentication

Product selection

Product/size added to cart

Cart quantity updated

Cart persisted for the authenticated user

Cart used during order creation

📦 Order Management

The application supports order workflows for both customers and
administrators.

Customer

Place an order

View their orders

Complete a payment workflow

Admin

View customer orders

Update order status

Order data includes information such as:

User

Ordered items

Amount

Delivery address

Payment method

Payment status

Order status

Order date

💳 Payment Integration

The backend contains integrations for:

Stripe

Razorpay

The project demonstrates the integration of external payment providers
into an Express-based e-commerce backend.

Important Security Note

Payment processing is security-sensitive. A production implementation
should additionally ensure that:

Order totals are recalculated and validated on the server

Product prices are obtained from the database rather than trusted
from the client

Payment status is verified directly with the payment provider

Webhooks are used where appropriate

Users can only verify or access their own orders

Payment requests cannot be replayed or manipulated

These are identified improvement areas for the current portfolio
implementation.

🖼️ Image Uploads

Product images are handled using:

Multer → Express Backend → Cloudinary

The admin can upload multiple product images when adding a product.

Cloudinary provides cloud-based storage for the uploaded product images.

🌐 Deployment

The backend is deployed on Vercel:

Backend

https://cricket-shop-server-self.vercel.app

The repository also contains deployment history for the project.

Deployment availability can change over time. The URL above represents
the deployment configured for this repository.

⚙️ Environment Variables

The application requires environment variables for sensitive
configuration such as:

MongoDB connection

JWT secret

Cloudinary credentials

Stripe credentials

Razorpay credentials

Admin credentials

Example

Create environment files locally and provide the values required by the
corresponding configuration files.

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Never commit real credentials, API keys, database URLs, or secrets
to GitHub.

🚀 Local Setup

1. Clone the repository

git clone https://github.com/Lokesh3177/cricket_shop.git
cd cricket_shop

2. Install backend dependencies

cd server
npm install

3. Configure backend environment variables

Create the required environment file and add your local credentials.

4. Start the backend

npm run server

The backend uses the Express server defined in server.js.

5. Install customer frontend dependencies

Open another terminal:

cd client
npm install
npm run dev

6. Install admin frontend dependencies

Open another terminal:

cd admin
npm install
npm run dev

🧪 Available Scripts

Client

npm run dev
npm run build
npm run lint
npm run preview

Admin

npm run dev
npm run build
npm run lint
npm run preview

Server

npm start
npm run server

🔌 API Areas

The backend is organized around four primary API areas:

API Area                            Purpose

/api/user                         Registration, login, and user
authentication

/api/product                      Product creation, removal, listing,
and retrieval

/api/cart                         Authenticated cart operations

🧠 What This Project Demonstrates

This project demonstrates practical experience with:

Building a MERN stack application

Structuring a full-stack project

Creating REST APIs with Express

Connecting Node.js to MongoDB with Mongoose

Implementing authentication with JWT

Hashing passwords with bcrypt

Creating protected routes

Separating customer and admin interfaces

Implementing CRUD operations

Managing shopping-cart state

Creating order workflows

Integrating third-party services

Uploading and storing images

Working with payment providers

Deploying a backend application

⚠️ Current Limitations & Improvement Areas

The project is functional as a portfolio implementation, but several
areas can be strengthened before production use.

Security

Restrict CORS to trusted frontend origins

Add JWT expiration and stronger token handling

Improve admin authorization using explicit roles/claims

Add stricter file type and file-size validation

Avoid trusting client-provided order totals

Strengthen payment verification and use provider webhooks where
appropriate

Backend Quality

Add centralized error handling

Use consistent HTTP status codes

Improve request validation

Strengthen MongoDB schema definitions

Add pagination and filtering for product listings

Testing & DevOps

Add unit and integration tests

Add API testing coverage

Add CI checks with GitHub Actions

Add stronger production logging and monitoring

🔮 Future Improvements

Planned technical improvements include:

Server-side price calculation

Secure payment verification/webhooks

Role-based authorization

Better validation and error handling

Product pagination and filtering

Inventory/stock management

Automated testing

CI/CD pipeline

Improved observability and logging

📚 Key Learning Outcomes

Through this project, I gained practical experience in:

Designing a multi-part MERN application

Connecting React applications to REST APIs

Designing MongoDB models with Mongoose

Implementing authentication and protected routes

Managing user carts and order workflows

Integrating external cloud and payment services

Separating customer and administrative functionality

Deploying a backend application

Identifying security and business-logic improvements in a real
application

🎯 Interview Talking Points

This project can be discussed around the following engineering topics:

Why React, Node.js, Express, and MongoDB?

How does JWT authentication work in the application?

How are protected routes implemented?

How is admin authorization different from user authentication?

How does the cart data flow from React to the backend?

How are products stored in MongoDB?

How does image upload work with Multer and Cloudinary?

How does the order workflow work?

How were Stripe and Razorpay integrated?

Why should order totals be calculated on the server?

How would you secure payment verification?

How would you prevent users from accessing another user's order?

How would you improve CORS security?

How would you add automated testing?

How would you scale product listing with pagination and filtering?

👨‍💻 Author

Lokesh M

MERN Stack Developer

GitHub:
https://github.com/Lokesh3177

LinkedIn:
https://www.linkedin.com/in/lokeshm31

📄 Project Status

Status: Portfolio / Learning Project

The application demonstrates a complete full-stack e-commerce workflow
while leaving clear opportunities for further security, testing,
validation, and production hardening.

⭐ If you find the project useful or interesting, feel free to explore
the code and implementation.
