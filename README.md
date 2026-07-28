# OrderIt – Food Delivery Platform

A full-stack food ordering platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse restaurants, view menus, manage a cart, and checkout via Stripe. Includes AI-powered dish descriptions and restaurant review analysis using Groq (LLaMA 3.1).

---

## Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express 4.18
- **Database:** MongoDB + Mongoose 7.2
- **Authentication:** JWT + bcryptjs
- **Payments:** Stripe 12.14
- **File Upload:** Cloudinary + multer-storage-cloudinary
- **Email:** Nodemailer + Mailtrap (dev)
- **AI:** Groq API (LLaMA 3.1 8B) via Axios
- **Templating:** Pug (email templates)

### Frontend
- **Framework:** React 18 + Vite 8
- **Routing:** React Router DOM 7
- **State:** Redux Toolkit 2 + React Redux 9
- **HTTP Client:** Axios
- **UI:** React Bootstrap, FontAwesome, react-toastify
- **Payments:** Stripe.js

---

## Project Structure

```
FoodProject/
├── backend/
│   ├── config/          # Database, Cloudinary, env config
│   ├── controllers/     # Route handlers (auth, restaurant, menu, order, payment, cart, coupon, AI)
│   ├── middlewares/      # Error handling, auth protection, role authorization
│   ├── models/          # Mongoose schemas (User, Restaurant, FoodItem, Menu, Order, Cart, Coupon)
│   ├── routes/          # Express route definitions
│   ├── services/        # AI service integrations (Groq)
│   ├── utils/           # API features, email, JWT token, error handler, seeder
│   ├── view/            # Pug email templates
│   ├── app.js           # Express app setup
│   └── server.js        # Entry point
├── frontend/
│   ├── public/          # Static assets (images, favicon)
│   ├── src/
│   │   ├── assets/      # App assets (hero, logos)
│   │   ├── components/  # React components (layout, pages, cart, order, user)
│   │   ├── redux/       # Redux store, slices, and async actions
│   │   └── utils/       # Axios API client
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── .gitignore
```

---

## Features

- **User Authentication** – Signup, login, JWT cookies, password reset via email, profile update with avatar
- **Role-Based Access** – Admin, restaurant-owner, and user roles with protected routes
- **Restaurant Browsing** – Search by keyword, filter by pure-veg, sort by ratings or reviews
- **Menu & Food Items** – Categorized menus per restaurant, admin CRUD for menus/items
- **Cart System** – Single-restaurant cart, quantity management, persistent per user
- **Stripe Checkout** – Full payment flow with shipping address and delivery charges (₹55)
- **Order Management** – Automatic order creation post-payment, stock deduction, order history
- **Coupon System** – Percentage discounts with min amount / max discount caps
- **AI Dish Descriptions** – Generate descriptions, tags, allergens, serving size via Groq API
- **AI Review Analysis** – Sentiment analysis, summary bullets, and top mentions for restaurant reviews

---

## API Overview

All endpoints are prefixed with `/api/v1`.

| Resource | Endpoints |
|---|---|
| **Auth** | `POST /users/signup`, `POST /users/login`, `GET /users/me`, `PUT /users/me/update`, `PUT /users/password/update`, `POST /users/forgetPassword`, `PATCH /users/resetPassword/:token`, `GET /users/logout` |
| **Restaurants** | `GET /eats/stores`, `POST /eats/stores`, `GET /eats/stores/:storeId`, `DELETE /eats/stores/:storeId` |
| **Food Items** | `GET /eats/items/:storeId`, `POST /eats/item`, `GET /eats/item/:foodId`, `PATCH /eats/item/:foodId`, `DELETE /eats/item/:foodId` |
| **Menus** | `GET /eats/stores/:storeId/menus`, `POST /eats/stores/:storeId/menus`, `PATCH /eats/stores/:storeId/menus/:menuId/addItem`, `DELETE /eats/stores/:storeId/menus/:menuId` |
| **Cart** | `GET /eats/cart/get-cart`, `POST /eats/cart/add-to-cart`, `POST /eats/cart/update-cart-item`, `DELETE /eats/cart/delete-cart-item` |
| **Orders** | `POST /eats/orders/new`, `GET /eats/orders/:id`, `GET /eats/orders/me/myOrders` |
| **Payment** | `POST /payment/process`, `GET /stripeapi` |
| **Coupons** | `POST /coupon`, `GET /coupon`, `PATCH /coupon/:couponId`, `DELETE /coupon/:couponId`, `POST /coupon/validate` |
| **AI** | `POST /ai/generate-food-ai`, `POST /ai/generate-food-ai/:foodId`, `PUT /ai/admin/restaurants/:id/analyze`, `PUT /ai/stores/:id/review` |

---

## Environment Variables

### Backend (`backend/config/config.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 4000) |
| `NODE_ENV` | `DEVELOPMENT` or `PRODUCTION` |
| `DB_LOCAL_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |
| `JWT_EXPIRE` | Token expiry duration (e.g. `90d`) |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `EMAIL_HOST` | SMTP host (Mailtrap in dev) |
| `EMAIL_PORT` | SMTP port |
| `EMAIL_USERNAME` | SMTP username |
| `EMAIL_PASSWORD` | SMTP password |
| `EMAIL_FROM` | Sender email address |
| `FRONTEND_URL` | Frontend URL for CORS and Stripe redirects |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_API_KEY` | Stripe publishable key |
| `GROQ_API_KEY` | Groq API key for AI features |

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL (default: `http://localhost:4000`) |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account (or local MongoDB)
- Stripe account
- Cloudinary account
- Groq API key (for AI features)
- Mailtrap account (for email in development)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd FoodProject

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Configuration

```bash
# Backend: copy and fill in your credentials
cp backend/config/.env.example backend/config/config.env

# Frontend: copy and adjust if needed
cp frontend/.env.example frontend/.env
```

### Run Development

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Commit History

```
chore: add gitignore and env example files
chore: initialize backend with package.json
feat: add database and cloudinary configuration
feat: add Mongoose models
feat: add error handling middleware and utility modules
feat: add controllers
feat: add AI services and controller
feat: add API routes
feat: add Express app configuration
feat: add server entry point
chore: initialize frontend with Vite, ESLint, and React
feat: add Redux store, slices, and actions
feat: add layout, Home, Restaurant, Menu, and FoodItem components
feat: add user authentication, cart, and order components
feat: add styles, assets, and entry point
docs: add frontend README
```

---

## License

ISC
