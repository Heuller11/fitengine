import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() info!:any;

  time!:string;

  home_team!:string;
  away_team!:string;

  home_score!:string;
  away_score!:string;

  home_shield!:string;
  away_shield!:string;

  constructor() { }

  ngOnInit(): void {

    const reNumber = /[0-9]/;
    this.time = reNumber.test(this.info.time) ?  this.info.time + "'" : this.info.time;

    this.home_team = this.info.teams.home;
    this.away_team = this.info.teams.away;

    this.home_score = this.info.scoreboard.home;
    this.away_score = this.info.scoreboard.away;

    this.home_shield = 'https://www.livescore.in/' + this.info.shields.home;
    this.away_shield = 'https://www.livescore.in/' + this.info.shields.away;


  }

}
