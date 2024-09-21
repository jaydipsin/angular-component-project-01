import {
  Component,
  Input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from '../user/user.moduel';

// const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean = true;

  // @Output() select = new EventEmitter(); // both are valid !
  // @Output() select = new EventEmitter<string>();
  select = output<string>();
  // public selectedUser = signal(DUMMY_USERS[randomUser]);

  // imagePath = computed(() => `assets/user/${this.selectedUser().avatar}`);
  get imagePath() {
    return `assets/user/${this.user.avatar}`;
  }


  onClickUser() {
    return this.select.emit(this.user.id);
  } 
  // checkUser() {
  //   let User = DUMMY_USERS.filter((user) => {
  //     user.id === this.id;
  //   });
  //   console.log(User);
  // }
}
