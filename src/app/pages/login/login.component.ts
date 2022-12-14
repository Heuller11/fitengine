import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberCredentials:boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    credentials: new FormControl(this.rememberCredentials)
  });

  constructor() {
    // this.loginForm.valueChanges.subscribe((val) => console.log(val));
  }

  ngOnInit(): void {

  }

  submit() : void {

  }

}
