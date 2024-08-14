import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/primeng.module';
import { ConfigModule } from './config/config.module';
import { ContactModule } from './contact/contact.module';
import { HelModule } from './hel/hel.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { ReportsModule } from './reports/reports.module';
import { CreaModule } from './crea/crea.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    PrimeNgModule,
    ConfigModule,
    ContactModule,
    HelModule,
    HomeModule,
    LoginModule,
    RegistroModule,
    ReportsModule,
    CreaModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}
