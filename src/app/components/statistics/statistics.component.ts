import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorArrays, ALL_CODES } from 'src/app/types/types';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  
  //output emitted when the "restart timer" button its clicked, it does restart the challenge
  @Output() restartGame = new EventEmitter();
  //it has the table's values to show
  @Input() colorParsedStored!:ColorArrays[];
  //it is use to paint the row with its corresponding color.
  public readonly colorCodes = ALL_CODES;

  
  constructor() {
    
   }


   
  ngOnInit(): void {

  }

  
  public restartGameButton() {
   this.restartGame.emit();
  }


}
