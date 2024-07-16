import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelComponent } from './hel.component';

const routes: Routes = [
  { path: '' , component: HelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelRoutingModule { }
