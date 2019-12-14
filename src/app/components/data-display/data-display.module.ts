import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataDisplayComponent } from './data-display.component';


@NgModule({
  declarations: [DataDisplayComponent],
  exports: [
    DataDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataDisplayModule { }
