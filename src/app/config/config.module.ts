// src/app/config/config.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { ConfigComponent } from './config.component';
import { NavbarModule } from '../../assets/navbar/navbar.module'; // Importa NavbarModule para app-navbar
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Importa FormsModule para ngModel
    NavbarModule, // Importa NavbarModule para app-navbar
    SidebarModule // Si es necesario para los elementos de sidebar
  ]
})
export class ConfigModule { }
