import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());

app.get("/", (req, res) => res.send("success"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
