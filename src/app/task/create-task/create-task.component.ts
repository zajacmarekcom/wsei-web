import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';
import { NewTask } from './new-task.model';
import { Task } from 'src/shared/models/task';
import { Router } from '@angular/router';
import { Priority } from 'src/shared/models/priority';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  task!: FormGroup<NewTask>;
  priority = Priority;

  constructor(
    private _featureService: FeatureService,
    private _taskService: TaskService,
    private readonly _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.task = this._fb.group({
      title: this._fb.nonNullable.control('', [Validators.required]),
      description: this._fb.control(''),
      featureId: this._fb.nonNullable.control<number | null>(null, [
        Validators.required,
      ]),
      estimatedTime: this._fb.nonNullable.control(0, [
        Validators.required,
        Validators.min(0),
      ]),
      priority: this._fb.nonNullable.control(Priority.Medium),
    });
  }

  getFeatures() {
    return this._featureService.getFeatures();
  }

  addTask() {
    if (this.task.valid) {
      const newTask = <Task>this.task.value;
      this._taskService.addTask(newTask);
      this._router.navigate(['app/tasks']);
    }
  }
}
