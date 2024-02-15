import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { ToggleRoutingModule } from './toggle-routing.module';



@NgModule({
  declarations: [
    ToggleBtnComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ToggleRoutingModule
  ]
})
export class ToggleModule { }
