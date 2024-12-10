import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { NavbarModule } from '../../assets/navbar/navbar.module'; // Asegúrate de que la ruta es correcta
import { SidebarModule } from '../../assets/sidebar/sidebar.module'; // Asegúrate de que la ruta es correcta

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,  // Importando NavbarModule para usar <app-navbar>
    SidebarModule  // Importando SidebarModule si es necesario en UsersComponent
  ]
})
export class UsersModule { }
