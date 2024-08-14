import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports.component';
import { NavbarModule } from '../../assets/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, FormsModule, NavbarModule, SidebarModule]
})
export class ReportsModule { }
