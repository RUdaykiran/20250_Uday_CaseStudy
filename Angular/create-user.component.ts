import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Task } from '../Task';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user:User=new User();
  submitted=false;
  constructor(private proService:UserService,private router:Router) { }


  ngOnInit(): void {
  }
  newTask():void{
    this.submitted=false;
    this.user=new User();
  }
  addSave(){
    this.proService.createUser(this.user)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.user=new User();
  }
  onSubmit(){
    this.submitted=true;
    this.addSave();
  }

}