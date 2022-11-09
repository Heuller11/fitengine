import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  errorMessages: Record<string, string> = {
    required: 'Campo obrigatório',
    email: 'Formato de e-mail incorreto'
  }

  constructor() { }
}
