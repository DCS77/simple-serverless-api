const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cars = require("./data/cars.json");

app.use(express.json())

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Available endpoints: ['/cars']",
  });
});

function findQueryMatch({query, data}) {
  // Search for all data items with fields matching query
  return data.filter((item) =>
    Object.keys(query).every((field) =>
      query[field] === String(item[field])));
}

app.get("/cars", (req, res, next) => {
  const {query} = req;

  // Return all if no parameters entered
  if(!Object.keys(query)) {
    return res.status(200).json(cars);
  }

  const searchResult = findQueryMatch({query, data: cars});

  return res.status(200).json(searchResult);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
