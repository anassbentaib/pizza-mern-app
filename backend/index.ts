import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./utils/database";
import authRoutes from './routes/auth.route'
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

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
