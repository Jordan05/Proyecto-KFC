import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class ReportsModule { }
