import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../pimeng/primeng.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    PrimeNgModule
  ]
})
export class UsersModule { }
