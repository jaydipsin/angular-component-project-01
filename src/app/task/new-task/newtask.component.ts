import {
  Component,
  EventEmitter,
  inject,
  Output,
  Input
} from '@angular/core';
import { ServiceTask } from './../task.service';
export interface taskModel {
  title: string;
  summury: string;
  date: string;
}

@Component({
  selector: 'app-new-task',
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewTask {
  @Input() adduserId!:string;
  @Output() close = new EventEmitter<boolean>();
  private ServiceTask = inject(ServiceTask);
  enteredTitle = '';
  enteredSummury = '';
  enteredDate = '';
  onCancel() {
    this.close.emit(false);
    // this.isDialog = !this.isDialog;
  }
  onSubmit() {
    this.close.emit(false);
    this.ServiceTask.getUserData({
      title: this.enteredTitle,
      summury:this.enteredSummury,
      date:this.enteredDate,
    },this.adduserId);
    
  }
}
