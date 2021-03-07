import { HttpErrorResponse } from "@angular/common/http";
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
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.tasksService.taskDeleted.subscribe((taskId) => {
      this.tasks = this.tasks.filter((task) => task._id != taskId);
    });

    this.tasksService.taskUpdated.subscribe((newTask) => {
      let index = this.tasks.findIndex((task) => {
        return task._id == newTask._id;
      });
      this.tasks[index] = newTask;
    });
  }

  addTask(newTaskTitle: HTMLInputElement) {
    this.tasksService.addTask(newTaskTitle.value).subscribe(
      (res) => {
        this.tasks.push(res);
        newTaskTitle.value = null;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
