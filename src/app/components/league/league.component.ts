import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  @Input() info!:any;

  matches!:any;
  name!:string;


  constructor() {

  }

  ngOnInit(): void {
    this.name = this.info.key;
    this.matches = this.info.value;
  }

}
