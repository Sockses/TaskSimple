import { Component, OnInit } from "@angular/core";
import { Task } from "../models/task.model";

import { TasksService } from "./../services/tasks.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
