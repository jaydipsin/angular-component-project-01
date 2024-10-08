import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type taskModel } from './new-task/newtask.component';
import {ServiceTask} from './task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponents {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!:string ;
  isAddingTask = false;
  constructor(private TaskService:ServiceTask){}
  // private TaskService = new ServiceTask;
  get selectedUserTask() {    
    return this.TaskService.getUserTask(this.userId);    // || return this.userTasks.filter((taskUser) => taskUser.userId === this.userId);
  }
  closeModel(hideModel: boolean = true) {
    this.isAddingTask = hideModel;
  }
  // onClickCompleteTask(id: string) {
  //   return this.TaskService.removeTask(id)
  //   // return (this.userTasks = this.userTasks.filter((task) => task.taskId !== id));
  // }
  onAddTask(taskData:taskModel){
    this.isAddingTask = false;
    return this.TaskService.getUserData(taskData,this.userId)
    // this.userTasks.unshift({
    //   taskId: new Date().getMilliseconds().toString(),
    //   userId:this.userId,
    //   title: taskData.title,
    //   time: taskData.date,
    //   summurry: taskData.summury,
    // })
  }
}
