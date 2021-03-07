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
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskUpdated = new EventEmitter<Task>();

  getTasks() {
    return this.http.get<Task[]>(taskEndpoint);
  }

  addTask(taskTitle: string): Observable<Task> {
    const newTask = new Task(1, taskTitle, "", "", false);
    return this.http.post<Task>(
      `${taskEndpoint}/add`,
      { task: newTask },
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
    );
  }

  deleteTask(taskId: number) {
    this.http
      .delete<Task>(`${taskEndpoint}/${taskId}/delete`)
      .subscribe((task) => {
        this.taskDeleted.emit(task._id);
      });
  }

  updateTask(taskId: number, update: object) {
    this.http
      .patch<Task>(`${taskEndpoint}/${taskId}/update`, update)
      .subscribe((task) => {
        this.taskUpdated.emit(task);
      });
  }
}
