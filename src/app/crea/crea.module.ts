import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaRoutingModule } from './crea-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { CreaComponent } from './crea.component';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';


@NgModule({
  declarations: [CreaComponent],
  imports: [
    CommonModule,
    CreaRoutingModule,
    CommonModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class CreaModule { }
