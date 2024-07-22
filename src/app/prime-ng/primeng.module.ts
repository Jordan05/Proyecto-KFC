import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule
    
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule
    
  ]
})
export class PrimeNgModule { }
