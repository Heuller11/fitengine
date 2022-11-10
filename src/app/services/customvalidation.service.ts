import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // console.log(password?.value === confirmPassword?.value);

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };

  errorMessages: Record<string, string> = {
    required: 'Campo obrigatório',
    email: 'Formato de e-mail incorreto',
    notmatched: 'Senhas não coincidem',
    minlength: 'Mínimo de 6 caracteres'
  }

  constructor() { }
}
