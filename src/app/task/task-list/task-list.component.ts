import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/shared/models/status';
import { Task } from 'src/shared/models/task';
import { TaskService } from 'src/shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  toDo: Task[] = [];
  doing: Task[] = [];
  done: Task[] = [];

  ngOnInit() {
    let tasks = this.taskService.getTasks();

    this.toDo = tasks.filter((t) => t.status === Status.ToDo);
    this.doing = tasks.filter((t) => t.status === Status.Doing);
    this.done = tasks.filter((t) => t.status === Status.Done);
  }

  startTask(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer != event.container) {
      console.group(event.item.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
