import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../Task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
   task:Task=new Task();
   submitted=false;
  constructor(private proService:TaskService,private router:Router) { }
  ngOnInit(){
  }
  newTask():void{
    this.submitted=false;
    this.task=new Task();
  }
  addSave(){
    this.proService.createTask(this.task)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.task=new Task();
  }
  onSubmit(){
    this.submitted=true;
    this.addSave();
  }

}