const serverless = require("serverless-http");
const express = require("express");
const cars = require("./data/cars.json");
const utils = require("./src/utils");

const app = express();

app.use(express.json())

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Available endpoints: ['/cars']",
  });
});

app.get("/cars", (req, res, next) => {
  const {query} = req;

  // Return all if no parameters entered
  if(!Object.keys(query)) {
    return res.status(200).json(cars);
  }

  const searchResult = utils.findQueryMatches({query, data: cars});

  return res.status(200).json(searchResult);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
