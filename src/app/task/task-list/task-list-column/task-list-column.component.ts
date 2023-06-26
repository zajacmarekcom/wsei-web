import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/shared/models/task';

@Component({
  selector: 'app-task-list-column',
  templateUrl: './task-list-column.component.html',
})
export class TaskListColumnComponent {
  @Input() data: Task[] = [];
  @Input() title: string = '';
  @Output() dropEvent: EventEmitter<CdkDragDrop<Task[]>> = new EventEmitter<
    CdkDragDrop<Task[]>
  >();

  drop(event: CdkDragDrop<Task[]>) {
    this.dropEvent.next(event);
  }
}
