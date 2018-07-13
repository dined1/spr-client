import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/DataService";
import {User} from "../models/User";

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {

  }

  enter(user: User){
    this.dataService.login(user);
  }

  register(){

  }
}
