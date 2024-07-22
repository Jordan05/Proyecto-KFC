import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    PrimeNgModule,
    SidebarModule,
    NavbarModule
    
]
})
export class HomeModule { }
