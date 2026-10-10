import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  };
  @Output() completedTaskId=new EventEmitter<string>()
 
  sendCompletedTaskId(){
    this.completedTaskId.emit(this.task.id)
  }

}
