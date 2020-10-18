const express = require('express');
const router = express.Router();

const Task = require('../schema/task.schema.js');

Task.deleteMany({ title: /Dummy task/ }, (err) => {
  console.error(err);
});

var dummyTasks = [
  {
    uid: 1,
    title: 'Dummy task',
    completed: false,
  },
  {
    uid: 2,
    title: 'Dummy task 2',
    completed: true,
    completed_at: Date.now(),
  },
];

for (let task = 0; task < dummyTasks.length; task++) {
  let new_task = new Task({
    _id: dummyTasks[task]._id,
    uid: dummyTasks[task].uid,
    title: dummyTasks[task].title,
    completed: dummyTasks[task].completed,
  });

  if (dummyTasks[task].completed_at) {
    new_task.completed_at = dummyTasks[task].completed_at;
  }

  new_task.save((err) => {
    console.error(err);
  });
}

router.get('/', (req, res) => {
  Task.find({ title: /Dummy task/ }).then((documents) => {
    console.log(documents);
    res.append('Access-Control-Allow-Origin', '*');
    res.json(documents);
  });
});

module.exports = router;
