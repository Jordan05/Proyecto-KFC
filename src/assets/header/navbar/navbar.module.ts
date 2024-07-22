import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { PrimeNgModule } from '../../../app/prime-ng/primeng.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule, 
    PrimeNgModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
