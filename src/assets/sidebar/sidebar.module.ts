import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../app/prime-ng/primeng.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule, 
    PrimeNgModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
