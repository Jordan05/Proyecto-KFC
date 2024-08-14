import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelComponent } from './hel.component';
import { NavbarModule } from '../../assets/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [HelComponent],
  imports: [CommonModule, FormsModule, NavbarModule, SidebarModule]
})
export class HelModule { }
