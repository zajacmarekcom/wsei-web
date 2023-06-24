import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/shared/models/status';
import { Task } from 'src/shared/models/task';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
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

  getStatus(status: Status | undefined) {
    if (status == undefined) {
      return '';
    }
    switch (status) {
      case Status.ToDo:
        return 'To do';
      case Status.Doing:
        return 'Doing';
      case Status.Done:
        return 'Done';
    }
  }

  finishTask() {
    this.taskService.finishTask(this.task!);
    this._router.navigate(['app/tasks']);
  }
}
