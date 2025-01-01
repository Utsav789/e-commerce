import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDb from "./db/connectMongoDb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// app.use(process.env);
app.use(express.json());
// app.use(express.urlencoded());

app.use("/api/auth", authRoutes);

app.listen(PORT, (err) => {
  connectDb();
  if (err) {
    err;
  } else {
    console.log(`The app is running in port  ${PORT}`);
  }
});
// Vcml79d3GeHYBahz