import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { PrimeNgModule } from './prime-ng/primeng.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../assets/sidebar/sidebar.module';
import { NavbarModule } from '../assets/header/navbar/navbar.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgModule, 
    RouterModule,
    NavbarModule,
    SidebarModule
  ],
  declarations: [AppComponent],
  providers: [AppService],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}