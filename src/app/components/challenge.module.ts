import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge/challenge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsComponent } from './statistics/statistics.component';
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [
    ChallengeComponent, 
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule
  ],
  exports: [
    ChallengeComponent, 
    StatisticsComponent,
    MatTableModule
  ]
})
export class ChallengeModule { }
