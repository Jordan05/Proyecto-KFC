import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../pimeng/primeng.module';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class ConfigModule { }
