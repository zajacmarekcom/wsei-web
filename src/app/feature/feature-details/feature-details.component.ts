import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feature } from 'src/shared/models/feature';
import { Status } from 'src/shared/models/status';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.scss'],
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

  getTasks() {
    const featureId = this.route.snapshot.paramMap.get('id');
    if (featureId) {
      return this.taskService.getTasksForFeature(Number.parseInt(featureId));
    }
    return [];
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

  finishFeature() {
    this.featureService.finishFeature(this.id!);
    this._router.navigate(['app/features']);
  }

  deleteFeature() {
    this.featureService.deleteFeature(this.id!);
    this._router.navigate(['app/features']);
  }
}
