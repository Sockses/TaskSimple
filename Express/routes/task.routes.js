const express = require("express");
const router = express.Router();
const Task = require("../schema/task.schema");

/**
 * Get all tasks
 */

router.get("/", (req, res, next) => {
  Task.find({})
    .then((documents) => {
      if (documents.length == 0) {
        throw new Error("No documents found");
      }
      res.append("Access-Control-Allow-Origin", "*");
      res.json(documents);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
