const taskModel = require("../Models/taskModel");
const myEmitter = require("../Services/logEvent");

exports.showTaskForm = (req, res) => {
  res.render("addTaskForm");
};
exports.createTaskc = (req, res) => {
  const { taskStatus, task_context } = req.body;
  taskModel.createTask(taskStatus, task_context, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating task");
    }
    myEmitter.emit("log", {
      typeEvent: "Added task",
      result: `{ id: ${result.insertId}, title: ${task_context}, status: 'Incomplete' }`,
    });
    res.redirect("/tasks");
  });
};
exports.getAllTasks = (req, res) => {
  taskModel.getAllTasks((err, tasks) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error retrieving tasks");
    }
    res.render("tasks", { tasks });
  });
};
exports.deleteIDC = (req, res) => {
  const { id } = req.params;
  taskModel.deleteID(id, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting task");
    }
    myEmitter.emit("log", {
      typeEvent: "Deleted task",
      result: `{ id: ${id}}`,
    });
    res.redirect("/tasks");
  });
};
exports.markAsCompleteC = (req, res) => {
  const { id } = req.params;
  console.log(id);
  taskModel.editId("complete", null, id, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error marking task as complete");
    }
    myEmitter.emit("log", {
      typeEvent: "Completed task",
      result: `{ id: ${id}, status: 'Complete' }`,
    });
    res.redirect("/tasks");
  });
};
