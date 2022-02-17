import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userdate: User;

  constructor() {
    this.userdate = {
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    }
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.userdate);
    console.log("Registration Done");
  }

}
