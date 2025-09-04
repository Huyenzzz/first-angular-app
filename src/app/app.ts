import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from "./user/user";
import {DUMMY_USERS} from './dummy-users';

import { TasksComponent } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  selectedUserId?: string;
  protected readonly title = signal('first-angular-app');

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
