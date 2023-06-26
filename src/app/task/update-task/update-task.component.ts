import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority } from 'src/shared/models/priority';
import { Task } from 'src/shared/models/task';
import { FeatureService } from 'src/shared/services/feature.service';
import { TaskService } from 'src/shared/services/task.service';
import { EditTask } from './edit-task.model';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
})
export class UpdateTaskComponent {
  id!: number;
  featureId!: number;
  task!: FormGroup<EditTask>;
  priority = Priority;

  constructor(
    private _featureService: FeatureService,
    private _taskService: TaskService,
    private readonly _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = Number.parseInt(this._route.snapshot.paramMap.get('id')!);

    if (this.id) {
      const t = this._taskService.getTask(this.id) ?? null;
      this.featureId = t!.featureId;
      this.task = this._fb.group({
        title: this._fb.nonNullable.control(t!.title, [Validators.required]),
        description: this._fb.control(t!.description),
        estimatedTime: this._fb.nonNullable.control(t!.estimatedTime, [
          Validators.required,
          Validators.min(0),
        ]),
        priority: this._fb.nonNullable.control(t!.priority),
      });
    }
  }

  getFeatures() {
    return this._featureService.getFeatures();
  }

  saveTask() {
    if (this.task.valid) {
      const editTask = <Task>this.task.value;
      editTask.id = this.id;
      this._taskService.updateTask(editTask);
      this._router.navigate(['app/tasks']);
    }
  }
}
