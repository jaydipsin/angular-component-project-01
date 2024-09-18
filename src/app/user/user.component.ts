import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public selectedUser = DUMMY_USERS[randomUser];
  get imagePath() {
    return `assets/user/${this.selectedUser.avatar}`;
  }
  onClickUser() {
      console.log("clicked");
  }
}
