import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/models/task.model";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.scss"],
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.taskSelected.subscribe((task: Task) => {
      this.task = task;
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.task = null;
  }
}
