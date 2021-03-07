const express = require("express");
const router = express.Router();
const Task = require("../schema/task.schema");
const cors = require("cors");

router.use(cors());

/**
 * Get all tasks
 */

router.get("/", (req, res, next) => {
  Task.find({})
    .then((documents) => {
      // if (documents.length == 0) {
      //   throw new Error("No documents found");
      // }
      res.json(documents);
    })
    .catch((err) => {
      next(err);
    });
});

/**
 * Add new task
 */

router.post("/add", (req, res, next) => {
  const new_task = new Task(req.body.task);
  new_task
    .save()
    .then((document) => {
      res.json(document);
    })
    .catch((err) => {
      next(err);
    });
});

/**
 * Delete task
 */

router.delete("/:taskId/delete", (req, res, next) => {
  Task.findByIdAndDelete(req.params.taskId)
    .then((document) => {
      console.log(document);
      res.json(document);
    })
    .catch((err) => {
      next(err);
    });
});

/**
 * Update task
 */

router.patch("/:taskId/update", (req, res, next) => {
  Task.findByIdAndUpdate(
    req.params.taskId,
    { title: req.body.newTitle },
    { new: true }
  )
    .then((document) => {
      console.log(document);
      res.json(document);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
