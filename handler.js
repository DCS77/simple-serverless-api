const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json())

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Available endpoints: ['/cars']",
  });
});

app.get("/cars", (req, res, next) => {
  const {query} = req;

  if(!query.name) {
    return res.status(400).json({
      error: "'name' wasn't specified in query parameters. Ensure name is sent in query body.",
    });
  }

  return res.status(200).json({
    message: `Searching for ${query.name}`,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
