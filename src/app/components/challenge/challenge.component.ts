import { Component, OnInit } from '@angular/core';
import { ColorArrays } from 'src/app/types/types';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {



  public counter!:number;
  public interval!:any;
  public colorEarned!:string;
  public statisticsOn!:boolean;
  public colorParsed:ColorArrays = {
    purple : [], 
    blue : [],
    green: [],
    yellow: [],
    orange: [],
    red: [],
    grey: [],
  }


  constructor() {
    this.statisticsOn = false;
   }



  ngOnInit(): void {
    this.startTime();
  }



  public startTime() {
    this.counter = 60;
    clearInterval(this.interval);
    this.interval = setInterval(() =>this.decrementSeconds(), 1000)
  }



  private decrementSeconds():void {
    this.counter-=1;
    if(this.counter === -1) {
      this.colorEarned = '#888888';
     this.startTime();
    }
  }




 public colorDetector(currentCounterValue:number) {
   if(currentCounterValue > 51) {
     this.colorEarned = '#820080';
   } else if(currentCounterValue > 41) {
     this.colorEarned = '#0083c7';
   } else if(currentCounterValue > 31) {
     this.colorEarned ='#02be01'; 
   } else if(currentCounterValue > 21) {
     this.colorEarned = '#e5d900';
   } else if(currentCounterValue > 11) {
     this.colorEarned = '#e59500';
   } else if(currentCounterValue > 0) {
     this.colorEarned = '#e50000';
   } else {
     this.colorEarned = '#FFFFFF';
   }
   this.statisticsOn = true;
   this.colorParse(this.colorEarned);
   console.log(this.colorParsed);
  }

  

  public colorParse(colorEarned:string) {
    switch (colorEarned) {
      case '#820080': 
      this.colorParsed.purple.push('Purple');
      break;
      case '#0083c7':
      this.colorParsed.blue.push('Blue');
      break;
      case '#02be01':
      this.colorParsed.green.push('Green');
      break;
      case '#e5d900':
      this.colorParsed.yellow.push('Yellow');
      break;
      case '#e59500':
      this.colorParsed.orange.push('Orange');
      break;
      case '#e50000':
      this.colorParsed.red.push('Red');
      break;
      default: this.colorParsed.grey.push('Grey')
     

    }

    // if(currentCounterValue > 51) {
    //   this.colorEarned = '#820080';
    // } else if(currentCounterValue > 41) {
    //   this.colorEarned = '#0083c7';
    // } else if(currentCounterValue > 31) {
    //   this.colorEarned ='#02be01'; 
    // } else if(currentCounterValue > 21) {
    //   this.colorEarned = '#e5d900';
    // } else if(currentCounterValue > 11) {
    //   this.colorEarned = '#e59500';
    // } else if(currentCounterValue > 0) {
    //   this.colorEarned = '#e50000';
    // } else {
    //   this.colorEarned = '#FFFFFF';
    // }
    this.statisticsOn = true;
   }
   
  
   


}
