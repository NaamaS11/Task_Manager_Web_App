const express = require("express");
var taskRouter = require("./Router/task");
var logRouter = require("./Router/logs");
const PORT = process.env.PORT||3000

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use("/tasks", taskRouter());
app.use("/logs", logRouter());
app.listen(PORT, function () {
  console.log('App listening on port http://localhost:${PORT} !');
});
