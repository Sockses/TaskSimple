import { Injectable } from "@angular/core";

import { SessionTask } from "../models/SessionTask.model";

@Injectable({ providedIn: "root" })
export class SessionTaskService {
  tasks: SessionTask[] = [];
  exampleAdded = false;

  constructor() {}

  getTasks() {
    let tasksJson = window.sessionStorage.getItem("TaskSimpleTasks");

    // add an example - just the once - if no session tasks found
    if (tasksJson == null && !this.exampleAdded) {
      this.addTask("An example task!");
      this.exampleAdded = true;
      return this.tasks;
    }

    this.tasks = this.parseTasks(tasksJson);
    return this.tasks;
  }

  addTask(taskTitle: string) {
    this.tasks.push(new SessionTask(taskTitle, Date(), Date(), false));
    window.sessionStorage.setItem(
      "TaskSimpleTasks",
      JSON.stringify(this.tasks)
    );
  }

  deleteTask() {
    // TODO: Determine unique key (or add one) for update/delete actions
  }

  updateTask() {
    // TODO: Determine unique key (or add one) for update/delete actions
  }

  sessionStorageAccess() {
    return window.sessionStorage ? true : false;
  }

  // TODO: Should this handle an empty `tasksJson` value?
  parseTasks(tasksJson: string): SessionTask[] {
    return JSON.parse(tasksJson);
  }
}
