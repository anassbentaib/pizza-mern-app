import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./utils/database";
import authRoutes from "./routes/auth.route";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
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
  } catch (error) {
    console.log(error);
  }
};

startServer();
