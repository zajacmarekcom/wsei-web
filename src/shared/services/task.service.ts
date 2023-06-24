import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Status } from '../models/status';
import { FeatureService } from './feature.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';

  private _tasks: Task[] = [];

  constructor(private featureService: FeatureService) {
    const json = localStorage.getItem(this.storageKey);

    if (json) {
      this._tasks = JSON.parse(json);
    }
  }

  private storeTasks() {
    const json = JSON.stringify(this._tasks);
    localStorage.setItem(this.storageKey, json);
  }

  addTask(newTask: Task) {
    const ids = this._tasks.map((x) => x.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    newTask.id = newId;
    newTask.status = Status.ToDo;
    newTask.createDate = new Date();
    this._tasks.push(newTask);
    this.storeTasks();
  }

  updateTask(task: Task) {
    this._tasks = this._tasks.map((t: Task) => {
      if (t.id === task.id) {
        t.title = task.title;
        t.priority = task.priority;
        t.estimatedTime = task.estimatedTime;
        t.description = task.description;
      }
      return t;
    });
    this.storeTasks();
  }

  getTasks() {
    return this._tasks;
  }

  getTasksForFeature(featureId: number) {
    const tasks = this._tasks.filter((x) => x.featureId === featureId);

    return tasks;
  }

  getTask(id: number) {
    const task = this._tasks.find((x) => x.id === id);

    return task;
  }

  resetTask(task: Task) {
    this._tasks = this._tasks.map((t: Task) => {
      if (t.id === task.id && t.status != Status.ToDo) {
        t.status = Status.ToDo;
        t.startDate = null;
      }
      return t;
    });
    this.storeTasks();
  }

  startTask(task: Task) {
    this._tasks = this._tasks.map((t: Task) => {
      if (t.id === task.id && t.status === Status.ToDo) {
        t.status = Status.Doing;
        t.startDate = new Date();
      }
      return t;
    });
    this.featureService.startFeature(task.featureId);
    this.storeTasks();
  }

  finishTask(task: Task) {
    this._tasks = this._tasks.map((t: Task) => {
      if (t.id === task.id && t.status === Status.Doing) {
        t.status = Status.Doing;
        t.finishDate = new Date();
      }
      return t;
    });
    this.storeTasks();
  }
}
