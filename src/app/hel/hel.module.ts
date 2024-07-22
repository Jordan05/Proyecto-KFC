import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { HelRoutingModule } from './hel-routing.module';
import { HelComponent } from './hel.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';


@NgModule({
  declarations: [HelComponent],
  imports: [
    CommonModule,
    HelRoutingModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class HelModule { }
