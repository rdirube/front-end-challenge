import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColorArrays, ALL_COLORS, ALL_CODES } from 'src/app/types/types';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit, AfterViewInit {


  // the counter variable is bind to the DOM and it shows the countdown number
  public counter!:number;
  private interval!:any;
  public colorEarned!:string;
  // the statiscticsOn field activates the statistic chart, as the "Stop Time" button has been clicked
  public statisticsOn!:boolean;
  public stopTimeButtonActive!:boolean;
  public colorParsed:ColorArrays[] = ALL_COLORS.map(color => {
    return {
      color:color,
      quantity:0
    }
  })
  // the colorParsedStored is where i store my click registers 
  public colorParsedStored!:ColorArrays[];
  private readonly colorCodes = ALL_CODES;


  constructor() {
    //set initial values to my fields variables
    this.statisticsOn = false;
    this.stopTimeButtonActive = false;
    this.colorParsedStored = ALL_COLORS.map(color => {
      return {
        color:color,
        quantity:0
      }
    });
   }
 



  ngOnInit(): void {
    //set the variables stored at the local storage
    this.colorParsedStored = JSON.parse(localStorage.getItem('statistics-values') as string);
    //Assignment of initial values to my statistics table
    localStorage.setItem('statistics-values', JSON.stringify(this.colorParsed.map((color,i) => {
      return {
        color:color.color,
        quantity: color.quantity + this.colorParsedStored[i].quantity
      }
    }))) 

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
    // set variables at starting point 
   this.resetTime();
   this.intervalSetter();
   this.statisticsOn = false;
   this.colorEarned = '#FFFFFF'
  }



  private decrementSeconds():void {
    this.counter-=1;
    if(this.counter === 0) {
      //add 1 click to my grey variable ('user hasnt clicked the button')
      this.colorParsed[6].quantity += 1;
      // change the style to the "stop time
      this.stopTimeButtonActive = true;
      this.colorEarned = '#888888'}
      else if(this.counter === -1) {
      //when the number its smaller than 0, the time resets itself
      this.timerInit();
      this.stopTimeButtonActive = false;
    }
  }




 public colorDetector(currentCounterValue:number) {
   //As the "Stop Timer" button is clicked, a color code is asign to the variable to change the background color 
   // And adds 1 unit to the click register of the color assigned
   if(currentCounterValue > 51) {
     this.colorEarned = '#820080';
     this.colorParsed[0].quantity += 1;
   } else if(currentCounterValue > 41) {
     this.colorEarned = '#0083c7';
     this.colorParsed[1].quantity += 1;
   } else if(currentCounterValue > 31) {
     this.colorEarned ='#02be01';
     this.colorParsed[2].quantity += 1; 
   } else if(currentCounterValue > 21) {
     this.colorEarned = '#e5d900';
     this.colorParsed[3].quantity += 1;
   } else if(currentCounterValue > 11) {
     this.colorEarned = '#e59500';
     this.colorParsed[4].quantity += 1;
   } else if(currentCounterValue > 0) {
     this.colorEarned = '#e50000';
     this.colorParsed[5].quantity += 1;
   } else {
     this.colorEarned = '#FFFFFF';
   }
   // statistic chart active
   this.statisticsOn = true;
   this.resetTime();
   //add one unit to the color assigned
   //update the local storage register
   localStorage.setItem('statistics-values', JSON.stringify(this.colorParsed.map((color,i) => {
     return {
       color:color.color,
       quantity:this.colorParsedStored[i].quantity += color.quantity
     }
   }))) 
   this.colorParsedStored = JSON.parse(localStorage.getItem('statistics-values') as string);
   // restore this variable so it it doesnt keep accumulating quantity registers and can be use again to the local storage register.
   this.colorParsed.forEach(color => color.quantity = 0);
  }

  

  // public colorParse(colorEarned:string) {
  //   // in depends whenever the user clicks the stop time button, this method 
  //   // add 1 unit to the click register of the color assigned
  //   switch (colorEarned) {
  //     case '#820080': 
  //     this.colorParsed[0].quantity += 1;
  //     break;
  //     case '#0083c7':
  //       this.colorParsed[1].quantity += 1;
  //       break;
  //     case '#02be01':
  //       this.colorParsed[2].quantity += 1;
  //       break;
  //     case '#e5d900':
  //       this.colorParsed[3].quantity += 1;
  //       break;
  //     case '#e59500':
  //       this.colorParsed[4].quantity += 1;
  //       break;
  //     case '#e50000':
  //       this.colorParsed[5].quantity += 1;
  //       break;
  //     default: break;

  //   }



    }

      
  
   



