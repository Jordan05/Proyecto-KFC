import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/primeng.module';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    PrimeNgModule,
  ]
})
export class ContactModule { }
