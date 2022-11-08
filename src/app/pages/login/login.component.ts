import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberCredentials:boolean = false;
  reactiveForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      credentials: new FormControl(this.rememberCredentials)
    });
  }

  submit() : void {
    console.log(this.reactiveForm);
  }

}
