import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./utils/database";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import productRoutes from "./routes/product.route";
import customersRoutes from "./routes/customer.route";
import cookieParser from "cookie-parser";
import geographyRoutes from "./routes/geography.route";
import overallStatRoutes from "./routes/overallStat.route"; 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
import { dataUser } from "./utils/data";
import User from "./model/auth.model";

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/geography", geographyRoutes);
app.use("/api/overview", overallStatRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 300;
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`server running on port : http://localhost:${PORT}`)
    );
    // User.insertMany(dataUser)
  } catch (error) {
    console.log(error);
  }
};

startServer();
