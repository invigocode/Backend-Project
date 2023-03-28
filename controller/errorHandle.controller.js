exports.invalidRequest = (request, response, next) => {
  response.status(404).send({ msg: "Invalid request" });
};
