import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';



@NgModule({
  declarations: [
    YellowButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YellowButtonComponent
  ]
})
export class YellowButtonModule { }
