import { Component, Input, Output, EventEmitter} from '@angular/core';

interface User {
  id: string; 
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() userSelected = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.userSelected.emit(this.user.id);

  }

}
