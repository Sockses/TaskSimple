const express = require('express');
const router = express.Router();

const Task = require('../schema/task.schema.js'); //import Task model

var dummyTask = new Task({
  title: 'Dummy task',
  completed: false
});

dummyTask.save(function (err, dummyTask) {
  (err)=>console.error(err);
});

router.get('/', function(req, res) {
  Task.findOne().then(
    documents => {
      console.log(documents);
      res.render('index', {
        title: documents.title,
        completed: documents.completed
      });
    }
  );
});

module.exports = router;
