import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { ContactComponent } from './contact.component';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class ContactModule { }
