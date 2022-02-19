import { Component, Input, OnInit } from '@angular/core';
import { ColorArrays } from 'src/app/types/types';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {


  @Input() colorParsed!:ColorArrays;

  constructor() { }

  ngOnInit(): void {
  }

}
