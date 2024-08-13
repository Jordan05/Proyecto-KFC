import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'crea', loadChildren: () => import('./crea/crea.module').then(m => m.CreaModule) }, 
  { path: 'hel', loadChildren: () => import('./hel/hel.module').then(m => m.HelModule) }, 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m=> m.ContactModule) },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m=> m.ReportsModule) },
  { path: 'user-list', loadChildren: () => import('./user-list/user-list.module').then(m=> m.UserListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
