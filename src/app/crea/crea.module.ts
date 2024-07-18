import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaRoutingModule } from './crea-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { CreaComponent } from './crea.component';
import { HeaderModule } from '../../assets/header/header.module';
import { SidebarModule } from '../../assets/sidebar/sidebar.module';


@NgModule({
  declarations: [CreaComponent],
  imports: [
    CommonModule,
    CreaRoutingModule,
    CommonModule,
    FormsModule,
    PrimeNgModule,
    HeaderModule,
    SidebarModule
  ]
})
export class CreaModule { }
