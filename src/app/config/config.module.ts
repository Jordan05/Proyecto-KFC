import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';
import { NavbarModule } from '../../assets/header/navbar/navbar.module';

@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,
    SidebarModule
  ]
})
export class ConfigModule { }
