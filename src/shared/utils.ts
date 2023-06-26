import { Priority } from './models/priority';
import { Status } from './models/status';

export function getStatusText(status: Status) {
  switch (status) {
    case Status.ToDo:
      return 'To do';
    case Status.Doing:
      return 'Doing';
    case Status.Done:
      return 'Done';
  }
}

export function getPriorityText(priority: Priority) {
  switch (priority) {
    case Priority.Low:
      return 'Low';
    case Priority.Medium:
      return 'Medium';
    case Priority.High:
      return 'High';
  }
}
