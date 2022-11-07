import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
