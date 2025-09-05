import { Component, Output, EventEmitter } from '@angular/core';
import { Input} from '@angular/core';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
    @Input({required: true}) task!: Task;
    @Output() complete = new EventEmitter<string>();

    onCompleteTask() {
        this.complete.emit(this.task.id);
    }
}
