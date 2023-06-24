import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority } from 'src/shared/models/priority';
import { FeatureService } from 'src/shared/services/feature.service';
import { UpdateFeature } from './update-feature.model';
import { Feature } from 'src/shared/models/feature';

@Component({
  selector: 'app-update-feature',
  templateUrl: './update-feature.component.html',
  styleUrls: ['./update-feature.component.scss'],
})
export class UpdateFeatureComponent {
  id!: number;
  priority = Priority;
  feature!: FormGroup<UpdateFeature>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _featureService: FeatureService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.id = Number.parseInt(this._route.snapshot.paramMap.get('id')!);

    if (this.id) {
      const feature = this._featureService.getFeature(this.id)!;

      this.feature = this.fb.group({
        title: this.fb.nonNullable.control(feature.title, [
          Validators.required,
        ]),
        description: this.fb.control(feature.description),
        priority: this.fb.nonNullable.control(feature.priority),
      });
    }
  }

  saveFeature() {
    if (this.feature.valid) {
      const updatedFeature = <Feature>this.feature.value;
      updatedFeature.id = this.id;
      console.log(updatedFeature);

      this._featureService.updateFeature(updatedFeature);
      this._router.navigate(['app/features']);
    }
  }
}
