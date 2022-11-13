import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberCredentials:boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('heuller555@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    credentials: new FormControl(this.rememberCredentials)
  });

  alert: {type:string, text: string, change: boolean} = {type: '', text: '', change: false};

  constructor(private authService: AuthService, private router: Router) {
    // this.loginForm.valueChanges.subscribe((val) => console.log(val));
  }

  ngOnInit(): void {

  }

  submit() : void {
    const valuesForm = this.loginForm.getRawValue();
    this.authService.login(valuesForm.email, valuesForm.password).subscribe((res) => {
      console.log(res);
      // localStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    }, (error) => {
      if(error.error.msg === 'User not found' ){
        this.alert.type = "error";
        this.alert.text = "Esse e-mail não está cadastrado.";
      }
      else
        if(error.error.msg === 'Invalid password'){
          this.alert.type = "error";
          this.alert.text = "Senha inválida.";
        }
        else{
          this.alert.type = "error";
          this.alert.text = "Houve um erro. Tente novamente mais tarde.";
          //grava no log e exibe mensagem de erro
          console.log(error);
        }

      this.alert.change = !this.alert.change;
    })
  }

}
