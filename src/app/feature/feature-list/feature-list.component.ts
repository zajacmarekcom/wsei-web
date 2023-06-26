import { Component } from '@angular/core';
import { Feature } from 'src/shared/models/feature';
import { Priority } from 'src/shared/models/priority';
import { Status } from 'src/shared/models/status';
import { FeatureService } from 'src/shared/services/feature.service';
import { getStatusText, getPriorityText } from 'src/shared/utils';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent {
  readonly columnsDef = ['title', 'status', 'priority', 'created', 'actions'];

  constructor(public featureService: FeatureService) {}

  getStatus(status: Status) {
    return getStatusText(status);
  }

  getPriority(priority: Priority) {
    return getPriorityText(priority);
  }
}
