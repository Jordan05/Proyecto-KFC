import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { PrimeNgModule } from '../../app/prime-ng/primeng.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    PrimeNgModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
