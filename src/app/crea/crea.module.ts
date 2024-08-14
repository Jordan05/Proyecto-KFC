import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreaComponent } from './crea.component';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { NavbarModule } from '../../assets/navbar/navbar.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';

@NgModule({
  declarations: [
    CreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    NavbarModule,  // Importando NavbarModule para usar <app-navbar>
    SidebarModule  // Importando SidebarModule si es necesario en CreaComponent
  ]
})
export class CreaModule { }
