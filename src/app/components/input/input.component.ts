import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  @Input() parentForm!: FormGroup;
  originalType!: string;
  controlName!: string;

  constructor() {

  }

  ngOnInit(): void {
    this.originalType = this.type;
    this.controlName = "'" + this.name + "'";
  }

  togglePassword() : void {
    [this.iconPassword, this.type] = this.iconPassword === "visibility"  ? ['visibility_off', 'password'] : ['visibility', 'text'];
  }

}
