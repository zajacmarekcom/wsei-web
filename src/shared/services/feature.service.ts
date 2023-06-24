import { Injectable } from '@angular/core';
import { Feature } from '../models/feature';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private readonly storageKey = 'features';
  private _features: Feature[] = [];

  constructor() {
    const json = localStorage.getItem(this.storageKey);

    if (json) {
      this._features = JSON.parse(json);
    }
  }

  private storeFeatures() {
    const json = JSON.stringify(this._features);
    localStorage.setItem(this.storageKey, json);
  }

  addFeature(newFeature: Feature) {
    const ids = this._features.map((x) => x.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    newFeature.id = newId;
    newFeature.status = Status.ToDo;
    newFeature.createDate = new Date();
    this._features.push(newFeature);
    this.storeFeatures();
  }

  updateFeature(feature: Feature) {
    this._features = this._features.map((f: Feature) => {
      if (f.id === feature.id) {
        f.title = feature.title;
        f.priority = feature.priority;
        f.description = feature.description;
      }
      return f;
    });
    this.storeFeatures();
  }

  getFeatures() {
    return this._features;
  }

  getFeature(id: number) {
    const feature = this._features.find((x) => x.id === id);
    return feature;
  }

  startFeature(id: number) {
    this._features = this._features.map((f: Feature) => {
      if (f.id === id && f.status != Status.Doing) {
        f.status = Status.Doing;
        f.finishDate = new Date();
      }
      return f;
    });
    this.storeFeatures();
  }

  finishFeature(id: number) {
    this._features = this._features.map((f: Feature) => {
      if (f.id === id && f.status != Status.Done) {
        f.status = Status.Done;
        f.finishDate = new Date();
      }
      return f;
    });
    this.storeFeatures();
  }
}
