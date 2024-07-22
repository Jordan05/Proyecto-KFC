import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class UsersModule { }
