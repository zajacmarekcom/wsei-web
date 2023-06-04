import { Priority } from './priority';
import { Status } from './status';

export interface Feature {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createDate: Date;
  startDate: Date;
  finishDate: Date;
}
