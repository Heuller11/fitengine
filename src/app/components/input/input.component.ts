import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() iconPassword = 'visibility_off';
  originalType!: string;

  @Input() group!: FormGroup;
  control!: FormControl;
  customValidation = new CustomvalidationService();

  constructor() {

  }

  ngOnInit(): void {
    this.originalType = this.type;
    this.control = this.group.get(this.name) as FormControl;
  }

  togglePassword() : void {
    [this.iconPassword, this.type] = this.iconPassword === "visibility"  ? ['visibility_off', 'password'] : ['visibility', 'text'];
  }

}
