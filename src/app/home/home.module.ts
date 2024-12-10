import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../assets/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, NavbarModule, SidebarModule]
})
export class HomeModule { }
