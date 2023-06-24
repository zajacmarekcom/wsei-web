import { FormControl } from '@angular/forms';
import { Priority } from 'src/shared/models/priority';

export type EditTask = {
  title: FormControl<string>;
  description: FormControl<string | null>;
  estimatedTime: FormControl<number>;
  priority: FormControl<Priority>;
};
