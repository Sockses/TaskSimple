import { Component, Input, OnInit } from "@angular/core";

import { Task } from "../models/task.model";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  toggleCompletion(taskId: number, completed: boolean) {
    this.taskService.updateTask(taskId, { completed: completed });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
