import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeatureService } from 'src/shared/services/feature.service';
import { NewFeature } from './new-feature.model';
import { Feature } from 'src/shared/models/feature';

@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.scss'],
})
export class CreateFeatureComponent implements OnInit {
  feature!: FormGroup<NewFeature>;

  constructor(
    private _router: Router,
    private _featureService: FeatureService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.feature = this.fb.group({
      title: this.fb.nonNullable.control('', [Validators.required]),
      description: this.fb.control(''),
    });
  }

  addFeature() {
    if (this.feature.valid) {
      const newFeature = <Feature>this.feature.value;
      this._featureService.addFeature(newFeature);
      this._router.navigate(['app/features']);
    }
  }
}
