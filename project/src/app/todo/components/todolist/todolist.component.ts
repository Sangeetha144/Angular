import { Component } from '@angular/core';
import { task } from '../../model/todo.model';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
 
tasklist:task=new task();
task_added:string=""
  addTask()
  {
    this.task_added=this.tasklist.task_name;
  }
}
