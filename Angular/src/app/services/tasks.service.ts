import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "./../../environments/environment";
import { Task } from "../models/task.model";
import { Observable } from "rxjs";

const taskEndpoint = `${environment.taskServer}/tasks`;

@Injectable({ providedIn: "root" })
export class TasksService {
  constructor(private http: HttpClient) {}
  @Output() taskSelected = new EventEmitter<Task>();

  getTasks() {
    return this.http.get(taskEndpoint);
  }

  addTask(taskTitle: string): Observable<any> {
    const newTask = new Task(1, taskTitle, "", "", false);
    return this.http.post<any>(
      `${taskEndpoint}/add`,
      { task: newTask },
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
    );
  }
}
