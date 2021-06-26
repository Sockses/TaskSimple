import { Component, OnInit } from "@angular/core";
import { SessionTask } from "../models/SessionTask.model";
import { SessionTaskService } from "../services/sessionTask.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  sessionStorageAccess = false;

  constructor(private sessionTaskService: SessionTaskService) {
    this.sessionStorageAccess = this.sessionTaskService.sessionStorageAccess();
  }

  tasks: SessionTask[];

  ngOnInit(): void {
    this.loadSessionStorageTasks();
  }

  loadSessionStorageTasks() {
    this.tasks = this.sessionTaskService.getTasks();
  }
}
