import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feature } from 'src/shared/models/feature';
import { Priority } from 'src/shared/models/priority';
import { Status } from 'src/shared/models/status';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';
import { getStatusText, getPriorityText } from 'src/shared/utils';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
})
export class FeatureDetailsComponent implements OnInit {
  id!: number | null;
  feature!: Feature | null;

  constructor(
    private taskService: TaskService,
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);

    if (this.id) {
      this.feature = this.featureService.getFeature(this.id) ?? null;
    }
  }

  getStatus(status: Status) {
    return getStatusText(status);
  }

  getPriority(priority: Priority) {
    return getPriorityText(priority);
  }

  getTasks() {
    const featureId = this.route.snapshot.paramMap.get('id');
    if (featureId) {
      return this.taskService.getTasksForFeature(Number.parseInt(featureId));
    }
    return [];
  }

  isInProgress() {
    return this.feature?.status === Status.Doing;
  }

  isFinished() {
    return this.feature?.status === Status.Done;
  }

  finishFeature() {
    this.featureService.finishFeature(this.id!);
    this._router.navigate(['app/features']);
  }

  deleteFeature() {
    this.featureService.deleteFeature(this.id!);
    this._router.navigate(['app/features']);
  }
}
