import { FormControl } from '@angular/forms';

export type NewFeature = {
  title: FormControl<string>;
  description: FormControl<string | null>;
};
