import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { task } from './task.moduel';
import { ServiceTask } from '../task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: task;
  // @Output() Complete = new EventEmitter<string>();
  private serviceTask = inject(ServiceTask);
  onCompleteTask() {
    this.serviceTask.removeTask(this.task.taskId)
  }
}
