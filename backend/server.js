import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.route.js";
import couponRoutes from "./routes/coupon.route.js";
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";


import connectDb from "./lib/connectMongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// app.use(process.env);
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payment", paymentRoutes);


app.listen(PORT, (err) => {
  connectDb();
  if (err) {
    err;
  } else {
    console.log(`The app is running in port  ${PORT}`);
  }
});
// Vcml79d3GeHYBahz
