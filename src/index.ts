import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "API homepage" });
});

app.use((req, res) => {
  res.status(404).send({ success: false, message: "Invalid Route" });
});

app.listen(process.env.PORT ?? 5000, async () => {
  console.info(`Listening on port ${process.env.PORT ?? 5000}`);
});
