import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  rememberCredentials:boolean = false;
  customValidation = new CustomvalidationService();

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  }, {validators: this.customValidation.passwordMatchingValidator});

  constructor() {
    this.signupForm.valueChanges.subscribe((val) => console.log(this.signupForm.errors));
  }

  ngOnInit(): void {
  }

  submit() : void {

  }

}
