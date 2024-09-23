import { Injectable } from '@angular/core';
import { type task } from './tasks/task.moduel';
import { taskModel } from './new-task/newtask.component';
@Injectable({ providedIn: 'root' })
export class ServiceTask {
  private userTasks: task[] = [];
  getUserTask(id: string) {
    return this.userTasks.filter((taskUser) => taskUser.userId === id);
  }
  constructor() {
    const task = localStorage.getItem('task');
    if (task) {
      this.userTasks = JSON.parse(task);
    }
  }
  getUserData(taskData: taskModel, userId: string) {
    this.userTasks.unshift({
      taskId: new Date().getMilliseconds().toString(),
      userId: userId,
      title: taskData.title,
      time: taskData.date,
      summurry: taskData.summury,
    });
    this.saveTask();
  }
  removeTask(id: string) {
    this.userTasks = this.userTasks.filter((task) => task.taskId !== id);
    this.saveTask();
  }
  private saveTask() {
    localStorage.setItem('task', JSON.stringify(this.userTasks));
  }
}
