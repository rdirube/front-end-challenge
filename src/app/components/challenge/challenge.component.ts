import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColorArrays, ALL_COLORS } from 'src/app/types/types';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit, AfterViewInit {



  public counter!:number;
  public interval!:any;
  public colorEarned!:string;
  public statisticsOn!:boolean;
  public colorParsed:ColorArrays[] = ALL_COLORS.map(color => {
    return {
      color:color,
      quantity:0
    }
  })
  


  constructor() {
    this.statisticsOn = false;
   }
 



  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.timerInit();
  }


  public resetTime() {
    this.counter = 60;
    clearInterval(this.interval);
  }


  public intervalSetter() {
    this.interval = setInterval(() =>this.decrementSeconds(), 1000)
  }

  
  public timerInit() {
   this.resetTime();
   this.intervalSetter();
   this.statisticsOn = false;
   this.colorEarned = '#FFFFFF'
  }


  private decrementSeconds():void {
    this.counter-=1;
    if(this.counter === -1) {
      this.colorParsed[6].quantity += 1
      this.resetTime();
      this.intervalSetter();
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
   this.resetTime();
   this.colorParse(this.colorEarned);
  }

  

  public colorParse(colorEarned:string) {
    switch (colorEarned) {
      case '#820080': 
      this.colorParsed[0].quantity += 1;
      break;
      case '#0083c7':
        this.colorParsed[1].quantity += 1;
        break;
      case '#02be01':
        this.colorParsed[2].quantity += 1;
        break;
      case '#e5d900':
        this.colorParsed[3].quantity += 1;
        break;
      case '#e59500':
        this.colorParsed[4].quantity += 1;
        break;
      case '#e50000':
        this.colorParsed[5].quantity += 1;
        break;
      default: this.colorParsed[6].quantity += 1;

    }



    }

   }
   
  
   



