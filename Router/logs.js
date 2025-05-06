var express = require("express");
var router = express.Router();

module.exports = function () {
  const logController = require("../Controllers/logController");
  router.get("", logController.showLogFile);
  router.delete("", logController.deleteLogFile);
  return router;
};
