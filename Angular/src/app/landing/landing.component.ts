import { Component, OnInit } from "@angular/core";
import { SessionTask } from "../models/SessionTask.model";
import { SessionStorageTasksService } from "../services/sessionStorageTasks.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  sessionStorageAccess = false;

  constructor(private sessionStorageTaskService: SessionStorageTasksService) {
    this.sessionStorageAccess =
      this.sessionStorageTaskService.checkSessionStorageAccess();
  }

  tasks: SessionTask[];

  ngOnInit(): void {
    this.loadSessionStorageTasks();
  }

  loadSessionStorageTasks() {
    this.tasks = this.sessionStorageTaskService.getTasks();
  }
}
