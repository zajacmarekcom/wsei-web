import { Injectable } from '@angular/core';
import { Feature } from '../models/feature';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private _features: Feature[] = [];

  constructor() {}

  addFeature(newFeature: Feature) {
    const ids = this._features.map((x) => x.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    newFeature.id = newId;
    newFeature.status = Status.ToDo;
    newFeature.createDate = new Date();
    this._features.push(newFeature);
  }

  getFeatures() {
    return this._features;
  }

  getFeature(id: number) {
    const feature = this._features.find((x) => x.id === id);
    return feature;
  }

  startFeature(id: number) {
    const featureIndex = this._features.findIndex((x) => x.id === id);
    let featureToStart = this._features[featureIndex];
    if (!featureToStart || featureToStart.status != Status.ToDo) {
      return;
    }
    featureToStart.status = Status.Doing;
    featureToStart.startDate = new Date();
  }

  finishFeature(id: number) {
    const featureIndex = this._features.findIndex((x) => x.id === id);
    let featureToFinish = this._features[featureIndex];
    if (!featureToFinish || featureToFinish.status != Status.Doing) {
      return;
    }
    featureToFinish.status = Status.Doing;
    featureToFinish.finishDate = new Date();
  }
}
