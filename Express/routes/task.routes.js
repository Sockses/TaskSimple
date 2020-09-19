const express = require('express');
const router = express.Router();

const Task = require('../schema/task.schema.js'); //import Task model

Task.deleteMany({ title: /Dummy task/ }, (err) => {
  console.error(err);
});

var dummyTasks = [
  {
    title: 'Dummy task',
    completed: false
  },
  {
    title: 'Dummy task 2',
    completed: true,
    completed_at: Date.now()
  }
];

for (let task = 0; task < dummyTasks.length; task++) {
  let new_task = new Task ({
    title: dummyTasks[task].title,
    completed: dummyTasks[task].completed
  });

  if (dummyTasks[task].completed_at) {
    new_task.completed_at = dummyTasks[task].completed_at;
  }

  new_task.save((err) => {
    console.error(err);
  });
}

router.get('/', function(req, res) {
  Task.find({ title: /Dummy task/ }).then(
    (documents) => {
      console.log(documents);
      res.render('index', {
        document1 : {
          title: documents[0].title,
          completed: documents[0].completed,
          created_at: documents[0].created_at,
          updated_at: documents[0].updated_at,
          completed_at: documents[0].completed_at
        },
        document2 : {
          title: documents[1].title,
          completed: documents[1].completed,
          created_at: documents[1].created_at,
          updated_at: documents[1].updated_at,
          completed_at: documents[1].completed_at
        }
      });
    }
  );
});

module.exports = router;
