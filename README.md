# Amazon Clone

A full-stack e-commerce application replicating core Amazon functionality — product browsing, cart management, user authentication, and Stripe-powered checkout.

## Project Structure

```
amazon-clone/
  client/    React frontend (Create React App)
  server/    Express backend with Stripe integration
```

## Features

- Product browsing with category filtering
- Shopping cart with quantity management
- User authentication via Firebase Auth
- Stripe payment processing
- Responsive layout matching Amazon's UI
- Order history tracking via Firestore

## Tech Stack

**Frontend**
- React (Create React App)
- React Router
- Firebase (Auth + Firestore)
- Axios
- Material-UI
- Stripe.js

**Backend**
- Node.js
- Express
- Stripe API
- dotenv / CORS

## Getting Started

### Prerequisites
- Node.js v16+
- Firebase project
- Stripe account

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Add your Stripe secret key to .env
npm start
```

### Frontend Setup
```bash
cd client
npm install
cp .env.example .env
# Add your Firebase config values to .env
npm start
```

## Deployment

- Frontend → Netlify (set env vars in Netlify dashboard)
- Backend → Render (set STRIPE_KEY in environment)

Build command: `npm run build`  
Publish directory: `build`
