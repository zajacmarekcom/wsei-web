import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority } from 'src/shared/models/priority';
import { Status } from 'src/shared/models/status';
import { Task } from 'src/shared/models/task';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';
import { getStatusText, getPriorityText } from 'src/shared/utils';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
})
export class TaskDetailsComponent {
  id!: number | null;
  task!: Task | null;

  constructor(
    private taskService: TaskService,
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);

    if (this.id) {
      this.task = this.taskService.getTask(this.id) ?? null;
    }
  }

  getFeatureTitle() {
    const feature = this.featureService.getFeature(this.task?.featureId!);
    return feature?.title;
  }

  getStatus(status: Status) {
    return getStatusText(status);
  }

  getPriority(priority: Priority) {
    return getPriorityText(priority);
  }

  isInProgress() {
    return this.task?.status === Status.Doing;
  }

  isFinished() {
    return this.task?.status === Status.Done;
  }

  finishTask() {
    this.taskService.finishTask(this.task!);
    this._router.navigate(['app/tasks']);
  }

  deleteTask() {
    this.taskService.deleteTask(this.id!);
    this._router.navigate(['app/tasks']);
  }
}
