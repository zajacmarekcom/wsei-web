import { Component, Input } from '@angular/core';
import { Task } from 'src/shared/models/task';

@Component({
  selector: 'app-task-list-column',
  templateUrl: './task-list-column.component.html',
  styleUrls: ['./task-list-column.component.scss'],
})
export class TaskListColumnComponent {
  @Input() data: Task[] = [];
  @Input() dropEvent: ($event: any) => void = () => {};
  @Input() title: string = '';
}
