const fs = require("fs");
const path = require("node:path");

const logFile = path.join("", "logs.txt");
exports.showLogFile = (callback) => {
  if (!fs.existsSync(logFile)) return "log file does not exist";
  fs.readFile(logFile, callback);
};
exports.deleteLogFile = (callback) => {
  if (!fs.existsSync(logFile)) return "log file does not exist";
  fs.writeFile(logFile, "", callback);
};
