import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "@database/connect";
import { seedDatabase } from "@database/seed";
import ticketRoutes from "@routes/ticketRoutes";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

connectDB().then(() => {
  if (process.env.NODE_ENV === "development") {
    seedDatabase();
  }
});

app.use("/api/tickets", ticketRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
