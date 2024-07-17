import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { PrimeNgModule } from '../../prime-ng/primeng.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
  ]
})
export class HeaderModule { }
