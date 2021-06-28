import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Task } from "../models/task.model";
import { TasksService } from "../services/tasks.service";

import { TaskComponent } from "./task.component";

fdescribe("TaskComponent", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let taskServiceMock = jasmine.createSpyObj("TaskService", ["updateTask", "deleteTask"]);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TaskComponent],
        providers: [{ provide: TasksService, useValue: taskServiceMock }],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = new Task(1, "Test task", Date.toString(), Date.toString(), false, "", 1);
    fixture.detectChanges();
  });

  it("should allow the user to toggle task completion", () => {
    component.toggleCompletion(component.task._id, true);
    expect(taskServiceMock.updateTask).toHaveBeenCalledWith(component.task._id, { completed: true });
  });

  it("should allow the user to delete the task", () => {
    component.deleteTask(component.task._id);
    expect(taskServiceMock.deleteTask).toHaveBeenCalledWith(component.task._id);
  });
});
