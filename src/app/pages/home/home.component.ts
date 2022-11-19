import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from 'src/app/services/api/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  matchesHalfTime:any = {}

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

    this.dataService.getData().subscribe((response) => {
      this.data = response;
      // this.verifyHalfTime();
    })

    interval(30000).subscribe(() => {
      this.dataService.getData().subscribe((response) => {
        this.data = response;
        // this.verifyHalfTime();
      })

    })

  }

  verifyHalfTime(): void {

    Object.entries(this.data).map((championship:any) => {
      let matches = championship[1];

      matches.filter((match:any) => {
        if(match.time === 'INT.'){
          match.key = match.teams.home + match.teams.away;

          if(match.key in this.matchesHalfTime){
            if(match.time !== 'INT.'){
              //já estava e precisa ser excluido
              delete this.matchesHalfTime[match.key];
            }
          }
          else{
            this.matchesHalfTime[match.key] = match
          }
        }
      })

    })
  }
}
