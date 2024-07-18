import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { HeaderModule } from '../../assets/header/header.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    PrimeNgModule,
    HeaderModule,
    SidebarModule
  ]
})
export class ReportsModule { }
