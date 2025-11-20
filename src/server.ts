import "reflect-metadata";
import express from "express";
import eventsRouter from "./routes/events.routes";
import { AppDataSource } from "./config/data-source";
import cors from "cors";


const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());
app.use("/events", eventsRouter);

app.get("/", (req, res) => {
  res.send("Everything is ok");
});

const PORT = 3000;

AppDataSource.initialize().then(() => {
  console.log("DB connected");

  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("Error connecting to DB:", err);
})
