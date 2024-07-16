import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelRoutingModule } from './hel-routing.module';
import { HelComponent } from './hel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HelComponent],
  imports: [
    CommonModule,
    HelRoutingModule,
    FormsModule
  ]
})
export class HelModule { }
