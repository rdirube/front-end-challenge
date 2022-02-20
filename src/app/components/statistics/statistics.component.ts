import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorArrays, ALL_CODES } from 'src/app/types/types';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Output() restartGame = new EventEmitter();
  @Input() colorParsed!:ColorArrays[];
  @Input() statisticsOn!:boolean;

  public displayedColumns!:string[];
  public readonly colorCodes = ALL_CODES;
  dataSource = this.colorParsed;


  constructor() {
   }


  ngOnInit(): void {
    console.log(this.colorParsed);
  }

  
  public restartGameButton() {
   this.restartGame.emit();
  }


}
