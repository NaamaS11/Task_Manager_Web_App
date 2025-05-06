const logModel = require("../Models/logModel");

exports.showLogFile = (req, res) => {
  logModel.showLogFile((err, result, fields) => {
    if (err) {
      console.error(err);
      return;
    }
     const logs = result.toString().split('\n'); 
     
     if (req.query.format === 'json') {
       return res.json(logs); 
     }
     res.render('logs', { logs: logs }); 
  });
};
exports.deleteLogFile = (req, res) => {
  logModel.deleteLogFile((err, result, fields) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
    console.log(fields);
     res.redirect('/logs'); 
  });
};
