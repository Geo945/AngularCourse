import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];//tasks o sa fie un array de Task si ia valorile din TASKS
  constructor(private taskService: TaskService) {
    //in order to use service we need to add it as a argument in the constructor
  }

  ngOnInit(): void {//this fires up always when initializing this component
    this.taskService.getTasks().subscribe((ret) => this.tasks = ret);
    //so the tasks field from line 11 takes the tasks(ret) returned by the Observable
    //tasks is the return value;
    //subscribe means we subscribe to the Observable and watch it always
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).//call this from task.service.ts
    subscribe(() => this.tasks = this.tasks.filter(t => t.id != task.id));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe( (task) => this.tasks.push(task) );
    //in the subscribe () is what we get back
  }
}
