import { Component, Input } from '@angular/core';
// const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  // public selectedUser = signal(DUMMY_USERS[randomUser]);

  // imagePath = computed(() => `assets/user/${this.selectedUser().avatar}`);
  get imagePath() {
    return `assets/user/${this.avatar}`;
  }

  onClickUser() {}
}
