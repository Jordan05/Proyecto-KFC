import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class ReportsModule { }
