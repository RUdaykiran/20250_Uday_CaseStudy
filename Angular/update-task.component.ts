import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../Task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id !:number;
  task !: Task;
  constructor(private route:ActivatedRoute,private router:Router,private TaskService:TaskService) { }

  ngOnInit(): void {
    this.task=new Task();
    this.id=this.route.snapshot.params['id'];
    this.TaskService.getTask(this.id).
    subscribe(data=>{
      console.log(data);
      this.task=data;
    },error =>console.log(error))
  }
  updateTasks(){
    this.TaskService.UpdateTask(this.id,this.task)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.task=new Task();
    this.gotoList();
  }
  onSubmit(){
    this.updateTasks()
  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }

}