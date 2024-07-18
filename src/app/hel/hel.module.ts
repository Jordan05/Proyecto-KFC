import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { HelRoutingModule } from './hel-routing.module';
import { HelComponent } from './hel.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../assets/header/header.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';


@NgModule({
  declarations: [HelComponent],
  imports: [
    CommonModule,
    HelRoutingModule,
    FormsModule,
    PrimeNgModule,
    HeaderModule,
    SidebarModule
  ]
})
export class HelModule { }
