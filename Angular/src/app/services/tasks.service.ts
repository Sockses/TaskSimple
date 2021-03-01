import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "./../../environments/environment";
import { Task } from "../models/task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
  constructor(private http: HttpClient) {}
  @Output() taskSelected = new EventEmitter<Task>();

  getTasks() {
    return this.http.get(`${environment.taskServer}/tasks`);
  }
}
