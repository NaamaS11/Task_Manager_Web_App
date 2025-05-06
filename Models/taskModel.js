const db = require("../db/config");

exports.createTask = (taskStatus, task_context, callback) => {
  const query = `INSERT INTO TASKS (taskStatus, task_context) VALUES (?, ?)`;
  db.query(query, [taskStatus, task_context], callback);
};
exports.getAllTasks = (callback) => {
  const query = "SELECT * FROM TASKS";
  db.query(query, callback);
};
exports.deleteID = (id, callback) => {
  const query = "DELETE FROM TASKS WHERE ID = ?; ";
  db.query(query, [id], callback);
};
exports.editId = (taskStatus, task_context, id, callback) => {
  const query = task_context
    ? "UPDATE TASKS SET taskStatus = ?, task_context = ? WHERE ID = ?"
    : "UPDATE TASKS SET taskStatus = ? WHERE ID = ?";
  const params = task_context
    ? [taskStatus, task_context, id]
    : [taskStatus, id];
  db.query(query, params, callback);
};
