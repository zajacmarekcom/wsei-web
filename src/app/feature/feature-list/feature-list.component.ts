import { Component } from '@angular/core';
import { Feature } from 'src/shared/models/feature';
import { Priority } from 'src/shared/models/priority';
import { Status } from 'src/shared/models/status';
import { FeatureService } from 'src/shared/services/feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent {
  readonly columnsDef = ['title', 'status', 'priority', 'created', 'actions'];

  constructor(public featureService: FeatureService) {}

  getStatus(feature: Feature) {
    switch (feature.status) {
      case Status.ToDo:
        return 'To do';
      case Status.Doing:
        return 'Doing';
      case Status.Done:
        return 'Done';
    }
  }

  getPriority(feature: Feature) {
    switch (feature.priority) {
      case Priority.Low:
        return 'Low';
      case Priority.Medium:
        return 'Medium';
      case Priority.High:
        return 'High';
    }
  }
}
