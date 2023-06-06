import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Status } from '../models/status';
import { FeatureService } from './feature.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [];

  constructor(private featureService: FeatureService) {}

  addTask(newTask: Task) {
    const ids = this._tasks.map((x) => x.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    newTask.id = newId;
    newTask.status = Status.ToDo;
    newTask.createDate = new Date();
    this._tasks.push(newTask);
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
    const taskIndex = this._tasks.findIndex((x) => x.id === task.id);
    let taskToReset = this._tasks[taskIndex];
    if (taskToReset.status == Status.ToDo) {
      return;
    }

    taskToReset.status = Status.ToDo;
    taskToReset.startDate = null;
    this._tasks[taskIndex] = taskToReset;

    return;
  }

  startTask(task: Task) {
    const taskIndex = this._tasks.findIndex((x) => x.id === task.id);
    let taskToStart = this._tasks[taskIndex];
    if (taskToStart.status != Status.ToDo) {
      return false;
    }

    taskToStart.status = Status.Doing;
    taskToStart.startDate = new Date();
    this._tasks[taskIndex] = taskToStart;
    this.featureService.startFeature(taskToStart.featureId);

    return true;
  }

  finishTask(task: Task) {
    const taskIndex = this._tasks.findIndex((x) => x.id === task.id);
    let taskToFinish = this._tasks[taskIndex];
    if (taskToFinish.status != Status.Doing) {
      return false;
    }

    taskToFinish.status = Status.Done;
    taskToFinish.finishDate = new Date();
    this._tasks[taskIndex] = taskToFinish;

    return true;
  }
}
