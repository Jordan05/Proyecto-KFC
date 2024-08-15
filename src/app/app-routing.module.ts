import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] }, // Protege esta ruta
  { path: 'crea', loadChildren: () => import('./crea/crea.module').then(m => m.CreaModule) }, 
  { path: 'hel', loadChildren: () => import('./hel/hel.module').then(m => m.HelModule) }, 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m=> m.ContactModule) },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m=> m.ReportsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
