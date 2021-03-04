const expect = require("chai").expect;
const Task = require("../schema/task.schema");

describe("Task", function () {
  describe("Task Properties", function () {
    it("should be invalid if UID is missing", function (done) {
      new_task = new Task();
      new_task.validate((err) => {
        expect(err.errors.uid).to.exist;
        done();
      });
    });

    it("should be invalid if task ID is missing", function (done) {
      new_task = new Task();
      new_task.validate((err) => {
        expect(err.errors.task_id).to.exist;
        done();
      });
    });

    it("should be invalid if title is missing", function (done) {
      new_task = new Task();
      new_task.validate((err) => {
        expect(err.errors.title).to.exist;
        done();
      });
    });

    it("should be invalid if UID is not a number or cannot be cast to a number", function (done) {
      new_task = new Task({ uid: "NaN" });
      new_task.validate((err) => {
        expect(err.errors.uid).to.exist;
        done();
      });
    });

    it("should be invalid if task ID is not a number or cannot be cast to a number", function (done) {
      new_task = new Task({ task_id: "NaN" });
      new_task.validate((err) => {
        expect(err.errors.task_id).to.exist;
        done();
      });
    });

    it("should be invalid if title is not a string or cannot cast to a string", function (done) {
      new_task = new Task({ title: { test: "test" } });
      new_task.validate((err) => {
        expect(err.errors.title).to.exist;
        done();
      });
    });

    it("should be invalid if completed is not a boolean or cannot be cast as a boolean", function (done) {
      new_task = new Task({ completed: "Very false" });
      new_task.validate((err) => {
        expect(err.errors.completed).to.exist;
        done();
      });
    });

    it("should have a default completed value of false", function (done) {
      new_task = new Task({
        uid: 1,
        task_id: 1,
        title: "Test",
      });

      new_task.validate((err) => {
        if (err) {
          return done(err);
        }
        expect(new_task.completed).to.equal(false);
        done();
      });
    });

    /**
     * TODO: Add some kind of validation to check uniqueness
     * See https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator
     */

    // it("should have a unique task ID", function (done) {});
  });
});
