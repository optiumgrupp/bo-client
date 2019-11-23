import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersToDatePipe } from './numbers-to-date.pipe';



@NgModule({
  declarations: [NumbersToDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersToDatePipe,
  ]
})
export class PipesModule { }
