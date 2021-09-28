import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { Router } from '@angular/router';
import {TaskService} from '../Task.service'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task!:Observable<Task[]>
  searchText :any;
  constructor(private proService:TaskService,private router:Router) { }

  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.task=this.proService.getTaskList();
  }
  updateTask(id:number){
    this.router.navigate(['update',id]);
  }
  deleteTasks(id:number){
    this.proService.deleteTask(id)
    .subscribe(data=>{console.log(data);
                      this.loadData();},
                      error=>console.log(error))
  }

}