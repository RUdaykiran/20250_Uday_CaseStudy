import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user!:Observable<User[]>;
  searchText : any;
  constructor(private proService:UserService,private router:Router) { }

  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.user=this.proService.getUserList();
  }
}