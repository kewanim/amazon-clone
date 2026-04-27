# Amazon Clone

A full-stack e-commerce application replicating core Amazon functionality — product browsing, cart management, Firebase authentication, and Stripe-powered checkout.

**Live Demo:** [amazon-clone-kewani.netlify.app](https://amazon-clone-kewani.netlify.app) &nbsp;·&nbsp; **API:** [amazon-clone-o0vy.onrender.com](https://amazon-clone-o0vy.onrender.com)

---

## Features

- **Product browsing** — real product data from the Fake Store API with category filtering
- **Shopping cart** — add, remove, and adjust quantities with persistent state
- **User authentication** — sign up and log in via Firebase Auth
- **Stripe checkout** — real payment intent creation via the Express backend
- **Order history** — completed orders saved to Firestore per user
- **Responsive layout** — closely mirrors Amazon's UI across screen sizes

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Router, Axios, Stripe.js |
| Backend | Node.js, Express.js, Stripe API |
| Auth & Database | Firebase Auth, Firestore |
| Product Data | Fake Store API |
| Frontend Hosting | Netlify |
| Backend Hosting | Render |

## Project Structure

```
amazon-clone/
├── client/               # React frontend (Create React App)
│   └── src/
│       ├── Api/          # Axios instance + API endpoints
│       ├── components/   # Header, Product, CartItem, etc.
│       ├── pages/        # Home, Cart, Payment, Orders
│       └── context/      # Global state (cart, user)
└── server/               # Express backend
    ├── index.js          # Stripe payment intent endpoint
    └── .env.example      # Required environment variables
```

## Getting Started

**Prerequisites:** Node.js 18+, Stripe account, Firebase project

```bash
# Clone the repo
git clone https://github.com/kewanim/amazon-clone.git
cd amazon-clone

# Start the backend
cd server
npm install
cp .env.example .env   # Add your Stripe secret key
npm start

# Start the frontend (new terminal)
cd ../client
npm install
npm start
```

## Environment Variables

**Server** (`.env`):
```
STRIPE_KEY=sk_test_...
PORT=6000
```

**Client** — Firebase config values are hardcoded in `src/firebase.js` (for test projects only; use env vars in production).

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check |
| POST | `/payment/create?total=N` | Create Stripe payment intent |

## Deployment

- **Frontend** auto-deploys to Netlify on every push to `main`
- **Backend** auto-deploys to Render on every push to `main`

---

Built by [Kewani Mulugeta](https://kewaniportfolio.netlify.app)
