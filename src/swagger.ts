import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 5000;

// Swagger options
const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order Management API",
      version: "1.0.0",
    },
    basePath: "/api",
  },
  apis: ["/routes/*.ts"], // Specify the path to your annotated routes
};

// Initialize swagger-jsdoc
const specs = swaggerJSDoc(options);

// Serve the Swagger documentation at /api-docs route
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, async () => {
  console.info(`Listening on port ${port}`);
});
