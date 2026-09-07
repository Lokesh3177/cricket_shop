🏏 **Cricket Shop**

A full-stack e-commerce web application for browsing cricket products, managing products through an admin interface, handling user accounts, shopping carts, orders, and payment workflows.

The application is organized into three main parts:

Customer frontend

Admin frontend

Node.js / Express backend

**Overview**

Cricket Shop is a MERN-based e-commerce application built to demonstrate practical full-stack development using React.js, Node.js, Express.js, and MongoDB.

The project includes user authentication, product management, shopping cart functionality, order management, image uploads, cloud storage, and payment integrations.

**Features**

**Customer Features**

User registration and login

Browse cricket products

View product details

Add products to cart

Update cart quantities

Remove products from cart

Place orders

View order information

Payment workflow

Admin Features

Admin authentication

Add products

Remove products

Manage product information

Manage orders

Backend Features

REST API development

User authentication

JWT-based authentication

Password hashing using bcrypt

Product management

Cart management

Order management

Image upload handling

Cloudinary integration

Stripe integration

Razorpay integration

MongoDB database integration

**Tech Stack**

Frontend

React.js

JavaScript

Vite

React Router

Axios

Tailwind CSS

Backend

Node.js

Express.js

REST APIs

JWT

bcrypt

Multer

Database

MongoDB

Mongoose

Services

Cloudinary

Stripe

Razorpay

Vercel

Development Tools

Git

GitHub

Postman

VS Code

**Project Structure**

cricket_shop/
│
├── client/                  # Customer-facing React application
├── admin/                   # Admin React application
├── server/                  # Node.js / Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── .gitignore

**Architecture**

Customer Frontend (React.js)
           │
           │ REST API
           ▼
Express Backend (Node.js)
     │        │        │
     ▼        ▼        ▼
 MongoDB  Cloudinary  Payments
 Mongoose   Images   Stripe/Razorpay

Admin Frontend (React.js)
           │
           │ REST API
           ▼
Express Backend

**Backend Architecture**

The backend is organized into separate modules:

config/ - configuration

controllers/ - application logic

middleware/ - authentication and request processing

models/ - MongoDB/Mongoose models

routes/ - API routes

server.js - Express server setup

Authentication

**The application uses:**

JWT for authentication

bcrypt for password hashing

Authentication middleware for protected routes

Separate admin authentication and authorization logic

Passwords are hashed before being stored in the database.

Product Management

Products are stored in MongoDB and managed through backend APIs.

Product information includes:

Product name

Description

Price

Category

Sub-category

Images

Sizes

Bestseller status

Product images are uploaded through the backend and stored using Cloudinary.

Shopping Cart

Users can manage their shopping cart through the application.

Cart functionality includes:

Adding products

Updating product quantities

Removing products

Retrieving cart information

Order Management

The application supports order creation and order management.

Order information includes:

User

Products

Amount

Address

Payment method

Payment status

Order status

Order date

Payment Integration

The project includes integrations with:

Stripe

Razorpay

The payment workflow is connected with the order management system.

Payment integration is implemented as part of this portfolio project. Additional server-side verification, webhook handling, and security hardening would be appropriate before using the system in a production environment.

Image Upload

Product images are handled using:

Multer

Cloudinary

The backend processes uploaded images and uses Cloudinary for cloud-based image storage.

**Environment Variables**

Sensitive credentials should be stored in environment variables.

Example:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Never commit real credentials, API keys, or secrets to GitHub.

**Installation**

1. Clone the repository

git clone https://github.com/Lokesh3177/cricket_shop.git
cd cricket_shop

2. Install client dependencies

cd client
npm install

3. Install admin dependencies

Open another terminal:

cd admin
npm install

4. Install server dependencies

Open another terminal:

cd server
npm install

Running the Project

Start the Backend

From the server directory:

npm run server

Use the development command configured in package.json if different.

Start the Customer Frontend

From the client directory:

npm run dev

Start the Admin Frontend

From the admin directory:

npm run dev

API Areas

Area

Purpose

Users

Registration, login, and user-related operations

Products

Product creation, listing, and removal

Cart

Shopping cart management

Orders

Order creation and management

Deployment

The project includes deployment configuration and a deployed backend.

Backend:

https://cricket-shop-server-self.vercel.app

Frontend and admin applications are structured separately and can be deployed independently.

Screenshots

Screenshots can be added here to demonstrate the main application interfaces.

Customer Application

Add screenshot here

Product Page

Add screenshot here

Shopping Cart

Add screenshot here

Admin Dashboard

Add screenshot here

What I Learned

Through this project, I strengthened my understanding of:

MERN stack development

React.js application development

Node.js and Express.js

REST API development

MongoDB and Mongoose

JWT authentication

Password hashing

Middleware

CRUD operations

Image upload workflows

Cloudinary integration

Payment API integration

Frontend and backend communication

Application deployment

Known Limitations

This project is primarily a portfolio and learning project rather than a production e-commerce platform.

Areas that can be improved include:

Stronger server-side input validation

More robust payment verification

Payment webhook handling

More granular role-based authorization

Improved file-upload validation

Comprehensive automated testing

Centralized error handling

Stronger database schema validation

Additional security hardening

Future Improvements

Potential improvements include:

Add automated frontend and backend tests

Improve role-based authorization

Calculate order totals on the server

Implement payment webhooks

Add stronger file validation

Add pagination

Improve API validation

Add centralized error handling

Add CI/CD workflows

Improve application logging and monitoring

Project Status

Active Portfolio Project

The project demonstrates full-stack e-commerce development using the MERN stack and supporting third-party services.

Author

Lokesh M

MERN Stack Developer

GitHub: https://github.com/Lokesh3177

LinkedIn: https://www.linkedin.com/in/lokeshm31
