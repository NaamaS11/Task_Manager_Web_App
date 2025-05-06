const { format } = require("date-fns");
const fs = require("fs");
const path = require("node:path");

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
module.exports = myEmitter.on("log", ({ typeEvent, result }) =>
  logEvents(typeEvent, result)
);

const logEvents = async (typeEvent, result) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
  const details = `${dateTime} \t-\t ${typeEvent}:\t ${result}\n`;
  const logFile = path.join("", "logs.txt");
  if (!fs.existsSync(logFile)) {
    fs.writeFile(logFile, details, (err) => {
      if (err) throw err;
      console.log("The file was created!");
    });
  } else
    fs.appendFile(logFile, details, (err) => {
      if (err) throw err;
      console.log("The details was append!");
    });
};
