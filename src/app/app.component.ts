import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = DUMMY_USERS;
  selectedUser!: string;

  onSelectedUser(id: string) {
    return (this.selectedUser = id);
  }

  get selectedUsers() {
    return this.user.find((user) => user.id === this.selectedUser)!;
  }
}
