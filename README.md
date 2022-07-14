<!--
title: 'Simple Serverless API'
description: 'This simple REST API uses the traditional Serverless Framework, Node.js, Express and is deployable on AWS.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
-->

# Serverless Framework Node Express API on AWS

This simple REST API uses the traditional Serverless Framework, Node.js, Express and is deployable on AWS.

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

### Invocation

After successful deployment, you can call the created application by visiting:

```
https://xxxxxxx.execute-api.ap-southeast-2.amazonaws.com/cars
```

Which should result in the a list of all known cars.

Calling the `/cars?Name=<model name>` path will filter the list to a specific car model:

```bash
https://xxxxxxx.execute-api.us-east-1.amazonaws.com/cars?Name=ford ltd
```

Should result in the following response:

```bash
[
    {
        "Name": "ford ltd",
        "Miles_per_Gallon": 13,
        "Cylinders": 8,
        "Displacement": 351,
        "Horsepower": 158,
        "Weight_in_lbs": 4363,
        "Acceleration": 13,
        "Year": "1973-01-01",
        "Origin": "USA"
    }
]
```

You may filter by each of the query parameters listed below:

- Name
- Miles_perGallon
- Cylinders
- Displacement
- Horsepower
- Weight_in_lbs
- Acceleration
- Year
- Origin

### Local development

It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following commands:

```bash
npm install
serverless offline
```
