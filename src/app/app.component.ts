import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent, NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = DUMMY_USERS;
  selectedUser ?:string;
  onSelectedUser(id: string) {
    return this.selectedUser = id
  }
  get selectedUsers(){
    return this.user.find((user)=>user.id === this.selectedUser)!;
  }
}
