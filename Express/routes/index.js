var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const url = 'mongodb+srv://aaron:BH0e14Mv3R35qErV7skBfCLI@tasksimple.tiglt.mongodb.net/task_simple?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error!'));
db.once('open', function() {
  console.log("Successfully connected!");
});

const Task = require('../task.schema.js'); //import Task model

const dummyTask = new Task(
  { title: 'Dummy task', completed: false },
);

dummyTask.save(function (err, dummyTask) {
  (err)=>console.error(err);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.findOne().then(
    documents => {
      console.log(documents);
      res.render('index', { title: documents.title, completed: documents.completed });
    }
  );
});

module.exports = router;
