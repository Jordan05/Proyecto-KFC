import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from '../users/users-routing.module';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';
import { SidebarModule } from 'primeng/sidebar';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class UserListModule { }
