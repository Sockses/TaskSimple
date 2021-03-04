const express = require("express");
const expect = require("chai").expect;
const request = require("supertest");

function createApp() {
  const app = express();
  const router = express.Router();

  const dummy_tasks = [
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

  router.route("/tasks").get((req, res) => {
    return res.json(dummy_tasks);
  });

  app.use(router);
  return app;
}

describe("Task", function () {
  let app;

  before((done) => {
    app = createApp();
    app.listen((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  describe("Task Properties", function () {
    it("should return a title", function (done) {
      request(app)
        .get("/tasks")
        .expect(200, (err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body[0].title).to.equal("Dummy task");
          done();
        });
    });
  });
});
