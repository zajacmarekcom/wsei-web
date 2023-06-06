import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  feature!: Feature | null;

  constructor(
    private taskService: TaskService,
    private featureService: FeatureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const featureId = this.route.snapshot.paramMap.get('id');

    if (featureId) {
      this.feature =
        this.featureService.getFeature(Number.parseInt(featureId)) ?? null;
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
}
