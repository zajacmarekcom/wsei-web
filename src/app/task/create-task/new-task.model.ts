import { FormControl } from '@angular/forms';
import { Priority } from 'src/shared/models/priority';

export type NewTask = {
  title: FormControl<string>;
  description: FormControl<string | null>;
  featureId: FormControl<number>;
  estimatedTime: FormControl<number>;
  priority: FormControl<Priority>;
};
