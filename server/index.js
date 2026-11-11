const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running." });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
      });
      res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      console.error("Stripe error:", err.message);
      res.status(500).json({ message: "Could not create payment." });
    }
  } else {
    res.status(403).json({ message: "Total must be greater than 0." });
  }
});

// Start the server only when run directly (Vercel imports the app instead)
if (require.main === module) {
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
