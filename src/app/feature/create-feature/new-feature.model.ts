import { FormControl } from '@angular/forms';
import { Priority } from 'src/shared/models/priority';

export type NewFeature = {
  title: FormControl<string>;
  description: FormControl<string | null>;
  priority: FormControl<Priority>;
};
