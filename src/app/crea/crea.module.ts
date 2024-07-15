import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaRoutingModule } from './crea-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../pimeng/primeng.module';
import { CreaComponent } from './crea.component';


@NgModule({
  declarations: [CreaComponent],
  imports: [
    CommonModule,
    CreaRoutingModule,
    CommonModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class CreaModule { }
