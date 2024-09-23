import { Injectable } from '@angular/core';
import { type task } from './tasks/task.moduel';
import { taskModel } from './new-task/newtask.component';
@Injectable({providedIn:"root"})
export class ServiceTask {
  private userTasks: task[] = [];
  getUserTask(id: string) {
    return this.userTasks.filter((taskUser) => taskUser.userId === id);
  }
  getUserData(taskData:taskModel, userId: string) {
    this.userTasks.unshift({
      taskId: new Date().getMilliseconds().toString(),
      userId: userId,
      title: taskData.title,
      time: taskData.date,
      summurry: taskData.summury,
    });
  }
  removeTask(id: string) {
    return (this.userTasks = this.userTasks.filter(
      (task) => task.taskId !== id
    ));
  }
}
