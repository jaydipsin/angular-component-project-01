import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTask } from './new-task/newtask.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [TasksComponent, NewTask],
  styleUrl: './task.component.css',
  standalone: true,
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!:string ;
  isAddingTask = false;
  userTasks = [
    {
      taskId: 'task1',
      userId: 'u2',
      title: 'task of day',
      time: '12-2-12',
      summurry: 'user task',
    },
    {
      taskId: 'task2',
      userId: 'u2',
      title: 'task of day',
      time: '12-2-12',
      summurry: 'user task',
    },
    {
      taskId: 'task3',
      userId: 'u2',
      title: 'task of day',
      time: '12-2-12',
      summurry: 'user task',
    },
  ];
  get selectedUserTask() {
    return this.userTasks.filter((taskUser) => taskUser.userId === this.userId);
  }
  displayModel(hideModel: boolean = true) {
    this.isAddingTask = hideModel;
  }
  onClickCompleteTask(id: string) {
    return (this.userTasks = this.userTasks.filter(
      (task) => task.taskId !== id
    ));
  }
}
