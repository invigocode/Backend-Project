const express = require("express");
const { getTopics } = require("./controller/topics.controller");
const { invalidRequest } = require("./controller/errorHandle.controller");

const app = express();

app.get("/api", (request, response, next) => {
  response.status(200).send({ msg: "server is up and running" }).catch(next);
});

app.get("/api/topics", getTopics);

app.use(invalidRequest);

module.exports = app;
