import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge/challenge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    ChallengeComponent, 
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ChallengeComponent, 
    StatisticsComponent
  ]
})
export class ChallengeModule { }
