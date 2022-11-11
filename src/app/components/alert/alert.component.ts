import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type!: string; //success, warning, error, info
  @Input() text!: string;
  show: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['text'].currentValue){
      this.show = true;
      this.attAlert();
      scroll(0,0);

      setTimeout(() => {
        this.show = false;
      }, 3000); // 1000ms = 1 second
    }
  }


  icon!: string;

  constructor() { }

  attAlert() : void{
    if(this.type == "success"){
      this.icon = 'done';
    }
    else{
      this.icon = this.type;
    }
  }

  ngOnInit(): void {
    this.attAlert()
  }

}
