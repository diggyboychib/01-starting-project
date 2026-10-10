import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;


  get name() {
    return DUMMY_USERS.filter((e) => e.id === this.id)[0]?.name;
  }
  dummyTasks = dummyTasks;

  get selectedUser() {
    return this.dummyTasks.filter((obj) => obj.userId === this.id);
  }

  getCompletedId(x: string) {
    this.dummyTasks=this.dummyTasks.filter((obj)=>obj.id!==x)
  }

  
}
