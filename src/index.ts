import express, { Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { requestLogger } from "./utils";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = process.env.PORT ?? 5000;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(requestLogger);

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order Management API",
      version: "1.0.0",
      description: "API documentation for Order Management project",
    },
  },
  apis: ["./src/routes/*.ts"], // Path to the route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve swagger.json
app.get("/swagger.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ success: true, message: "API homepage" });
});

app.use((req: Request, res: Response) => {
  res.status(404).send({ success: false, message: "Invalid Route" });
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
