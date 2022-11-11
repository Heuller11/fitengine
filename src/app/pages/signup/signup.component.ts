import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/api/user.service';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  rememberCredentials:boolean = false;
  customValidation = new CustomvalidationService();

  alert: {type:string, text: string} = {type: '', text: ''};

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('Héuller Soares', [Validators.required]),
    email: new FormControl('heuller555@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
  }, {validators: this.customValidation.passwordMatchingValidator});

  constructor(public apiUser: UserService) {
    // this.signupForm.valueChanges.subscribe((val) => console.log(this.signupForm.errors));
  }

  ngOnInit(): void {
  }

  submit() : void {

    const valuesForm = this.signupForm.getRawValue();
    let user: User = {
      name: valuesForm.name,
      email: valuesForm.email,
      password: valuesForm.password
    }

    this.apiUser.signUp(user).subscribe((res) => {
      this.alert.type = "success";
      this.alert.text = "Parabéns! Cadastro realizado com sucesso.";
      this.signupForm.reset()
    },
    (error) => {
      if(error.error.msg === 'E-mail already used' ){
        this.alert.type = "error";
        this.alert.text = "Esse e-mail já está em uso.";
      }
      else{
        this.alert.type = "error";
        this.alert.text = "Houve um erro. Tente novamente mais tarde.";
        //grava no log e exibe mensagem de erro
        console.log(error);

      }
    });
  }

}
