import { Priority } from './priority';
import { Status } from './status';

export interface Task {
  id: number;
  title: string;
  description: string;
  featureId: number;
  status: Status;
  priority: Priority;
  estimatedTime: number;
  createDate: Date;
  startDate: Date;
  finishDate: Date;
}
