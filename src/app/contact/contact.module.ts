import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { NavbarModule } from '../../assets/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FormsModule, NavbarModule, SidebarModule]
})
export class ContactModule { }
