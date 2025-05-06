var express = require("express");
var router = express.Router();
function CheckingBeforeAddATask(req, res, next) {
  if(req.body==' '){
      res.render('callback', { callback: "The task title cannot be empty." });
  }
  else{
      next()
  }
 }
 function CheckIDBeforeDeleteOrComplete(req, res, next) {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID. It must be a number." });
  }
  else{
      next()
  }
 }
module.exports = function () {
  const taskController = require("../Controllers/taskController");
  router.get("/add", taskController.showTaskForm);
  router.post("/add",CheckingBeforeAddATask, taskController.createTaskc);
  router.get("", taskController.getAllTasks);
  router.delete("/:id",CheckIDBeforeDeleteOrComplete, taskController.deleteIDC);
  router.put("/:id/complete",CheckIDBeforeDeleteOrComplete, taskController.markAsCompleteC);

  return router;
};
