const express = require("express");
const router = express.Router();

const Task = require("../schema/task.schema");

router.get("/", (req, res) => {
  Task.find({ title: /Dummy task/ }).then((documents) => {
    console.log(documents);
    res.append("Access-Control-Allow-Origin", "*");
    res.json(documents);
  });
});

module.exports = router;
