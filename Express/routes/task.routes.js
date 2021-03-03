const express = require("express");
const router = express.Router();

const Task = require("../schema/task.schema.js");

Task.deleteMany({ title: /Dummy task/ }, (err) => {
  console.error(err);
});

var dummyTasks = [
  {
    uid: 1,
    task_id: 1,
    title: "Dummy task",
    completed: false,
  },
  {
    uid: 2,
    task_id: 2,
    title: "Dummy task 2",
    completed: true,
    completed_at: Date.now(),
  },
];

for (let task = 0; task < dummyTasks.length; task++) {
  let new_task = new Task({
    uid: dummyTasks[task].uid,
    task_id: dummyTasks[task].task_id,
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

router.get("/", (req, res) => {
  Task.find({ title: /Dummy task/ }).then((documents) => {
    console.log(documents);
    res.append("Access-Control-Allow-Origin", "*");
    res.json(documents);
  });
});

module.exports = router;
